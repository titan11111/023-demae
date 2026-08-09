import {
  ADDRESS_CLAMP_TO_EDGE, BLEND_NORMAL, Color, CULLFACE_NONE, Entity, FILTER_LINEAR,
  StandardMaterial, Texture, Vec3, type Application,
} from 'playcanvas';
import { box, cylinder, material } from '../world/primitives';
import pedestrianUrl from '../assets/pedestrian.svg?url';
import catUrl from '../assets/cat-roaming.svg?url';
import dogUrl from '../assets/dog-roaming.svg?url';

interface TrafficCar { entity: Entity; route: Vec3[]; waypoint: number; speed: number; }
interface MovingAgent { entity: Entity; route: Vec3[]; waypoint: number; speed: number; radius: number; pause: number; }
export interface TrafficUpdateResult { collision: boolean; policeCaught: boolean; policeEscaped: boolean; }

export class TrafficManager {
  private readonly cars: TrafficCar[] = [];
  private readonly agents: MovingAgent[] = [];
  private readonly svgMaterials = new Map<string, StandardMaterial>();
  private police: Entity | null = null;
  private policeRedLight: Entity | null = null;
  private policeBlueLight: Entity | null = null;
  private policePulseTime = 0;
  private policeFarTime = 0;

  constructor(private readonly app: Application) {
    this.cars.push(this.createCar('taxi', '#e0a91d', [new Vec3(-168, .55, 4), new Vec3(168, .55, 4)], 13));
    this.cars.push(this.createCar('van', '#ded8c8', [new Vec3(6, .55, -168), new Vec3(6, .55, 168)], 11));
    this.cars.push(this.createCar('busy-taxi-a', '#e0a91d', [new Vec3(-162, .55, -4), new Vec3(162, .55, -4)], 16));
    this.cars.push(this.createCar('busy-taxi-b', '#cf382c', [new Vec3(4, .55, 158), new Vec3(4, .55, -158)], 15));
    this.cars.push(this.createCar('west-delivery', '#e8e0c9', [new Vec3(-174, .55, 72), new Vec3(-20, .55, 72)], 12));
    this.cars.push(this.createCar('east-compact', '#3d82b8', [new Vec3(24, .55, -80), new Vec3(176, .55, -80)], 14));
    this.cars.push(this.createCar('central-cab', '#45a35b', [new Vec3(-130, .55, 7), new Vec3(145, .55, 7)], 17));

    for (const [z, delay] of [[-50, 0], [45, 1.1], [100, 2.2]] as Array<[number, number]>) {
      this.agents.push(this.createAgent('pedestrian', pedestrianUrl, [new Vec3(-18, 0, z), new Vec3(18, 0, z)], 2.5, 1.5, delay));
    }
    this.agents.push(this.createAgent('pedestrian', pedestrianUrl, [new Vec3(-104, 0, -18), new Vec3(-104, 0, 18)], 2.1, 1.5, .7));
    this.agents.push(this.createAgent('pedestrian', pedestrianUrl, [new Vec3(104, 0, 18), new Vec3(104, 0, -18)], 2.7, 1.5, 1.8));
    this.agents.push(this.createAgent('cat', catUrl, [new Vec3(68, 0, 39), new Vec3(116, 0, 82), new Vec3(82, 0, 84)], 3.4, 1.2, 1.3));
    this.agents.push(this.createAgent('cat', catUrl, [new Vec3(-142, 0, 34), new Vec3(-118, 0, 58), new Vec3(-154, 0, 65)], 3.8, 1.2, 2.5));
    this.agents.push(this.createAgent('dog', dogUrl, [new Vec3(65, 0, 88), new Vec3(124, 0, 91), new Vec3(118, 0, 48)], 3.1, 1.5, .4));
  }

  update(dt: number, playerPosition: Vec3): TrafficUpdateResult {
    let collided = false;
    let policeCaught = false;
    let policeEscaped = false;
    for (const car of this.cars) {
      const target = car.route[car.waypoint]; const position = car.entity.getPosition();
      const direction = target.clone().sub(position); const distance = direction.length();
      if (distance < 1.2) { car.waypoint = (car.waypoint + 1) % car.route.length; continue; }
      direction.normalize(); position.add(direction.mulScalar(Math.min(distance, car.speed * dt))); car.entity.setPosition(position);
      car.entity.lookAt(target.x, position.y, target.z); car.entity.rotateLocal(0, 180, 0);
      if (position.distance(playerPosition) < 3) collided = true;
    }
    for (const agent of this.agents) {
      if (agent.pause > 0) { agent.pause = Math.max(0, agent.pause - dt); continue; }
      const target = agent.route[agent.waypoint]; const position = agent.entity.getPosition();
      const direction = target.clone().sub(position); const distance = direction.length();
      if (distance < .45) { agent.waypoint = (agent.waypoint + 1) % agent.route.length; agent.pause = .45 + (agent.waypoint % 3) * .35; continue; }
      direction.normalize(); position.add(direction.mulScalar(Math.min(distance, agent.speed * dt))); agent.entity.setPosition(position);
      agent.entity.lookAt(target.x, position.y, target.z);
      if (position.distance(playerPosition) < agent.radius + 1.1) collided = true;
    }
    if (this.police) {
      this.policePulseTime += dt;
      const redPhase = Math.floor(this.policePulseTime / .18) % 2 === 0;
      if (this.policeRedLight) this.policeRedLight.enabled = redPhase;
      if (this.policeBlueLight) this.policeBlueLight.enabled = !redPhase;
      const position = this.police.getPosition();
      const direction = playerPosition.clone().sub(position); const distance = direction.length();
      if (distance > .2) { direction.normalize(); position.add(direction.mulScalar(Math.min(distance, 19 * dt))); this.police.setPosition(position); }
      this.police.lookAt(playerPosition.x, position.y, playerPosition.z); this.police.rotateLocal(0, 180, 0);
      const chaseDistance = position.distance(playerPosition);
      this.policeFarTime = chaseDistance > 35 ? this.policeFarTime + dt : 0;
      if (chaseDistance < 3.2) policeCaught = true;
      else if (this.policeFarTime >= 4) policeEscaped = true;
      if (policeCaught || policeEscaped) this.resetPolice();
    }
    return { collision: collided, policeCaught, policeEscaped };
  }

  summonPolice(playerPosition: Vec3): void {
    if (this.police) return;
    const route = [playerPosition.clone().add(new Vec3(0, 0, -28)), playerPosition.clone()];
    const car = this.createCar('police', '#f3f3ec', route, 19);
    box(this.app, 'police-blue-panel', [-1.22, .72, 0], [.08, .72, 3.8], '#174ea6', car.entity);
    this.policeRedLight = box(this.app, 'police-red-light', [-.42, 1.95, .1], [.62, .25, .42], '#ff2a20', car.entity);
    this.policeBlueLight = box(this.app, 'police-blue-light', [.42, 1.95, .1], [.62, .25, .42], '#2385ff', car.entity);
    this.policeRedLight.render!.material = material(this.app, '#ff2a20', 2.4);
    this.policeBlueLight.render!.material = material(this.app, '#2385ff', 2.4);
    this.policeBlueLight.enabled = false;
    this.policePulseTime = 0; this.policeFarTime = 0;
    this.police = car.entity;
  }

  resetPolice(): void {
    this.police?.destroy(); this.police = null; this.policeRedLight = null; this.policeBlueLight = null;
    this.policePulseTime = 0; this.policeFarTime = 0;
  }
  isPoliceActive(): boolean { return this.police !== null; }
  policeLightPhaseForTest(): string { return this.policeRedLight?.enabled ? 'red' : this.policeBlueLight?.enabled ? 'blue' : 'off'; }

  private createCar(name: string, color: string, route: Vec3[], speed: number): TrafficCar {
    const entity = new Entity(name); this.app.root.addChild(entity); entity.setPosition(route[0]);
    box(this.app, `${name}-body`, [0, .65, 0], [2.4, 1, 4.5], color, entity);
    box(this.app, `${name}-cabin`, [0, 1.35, .2], [2.1, .8, 2.2], '#30424c', entity);
    for (const [x, z] of [[-1.1,-1.3],[1.1,-1.3],[-1.1,1.3],[1.1,1.3]] as Array<[number,number]>) cylinder(this.app, 'car-wheel', [x, .35, z], [.42,.18,.42], '#151515', entity).setLocalEulerAngles(0, 0, 90);
    return { entity, route, waypoint: 1, speed };
  }

  private createAgent(name: string, svgUrl: string, route: Vec3[], speed: number, radius: number, pause: number): MovingAgent {
    const entity = new Entity(name); entity.setPosition(route[0]); this.app.root.addChild(entity);
    const agentMaterial = this.createSvgMaterial(svgUrl);
    const size = name === 'pedestrian' ? [2.3, 4.6] : name === 'dog' ? [3.2, 2.1] : [2.5, 1.7];
    for (const angle of [0, 90]) {
      const billboard = new Entity(`${name}-svg`);
      billboard.addComponent('render', { type: 'plane', material: agentMaterial, castShadows: false });
      billboard.setLocalPosition(0, size[1] / 2, 0);
      billboard.setLocalScale(size[0], 1, size[1]);
      billboard.setLocalEulerAngles(90, angle, 0); entity.addChild(billboard);
    }
    return { entity, route, waypoint: 1, speed, radius, pause };
  }

  private createSvgMaterial(svgUrl: string): StandardMaterial {
    const cached = this.svgMaterials.get(svgUrl); if (cached) return cached;
    const result = new StandardMaterial(); this.svgMaterials.set(svgUrl, result);
    result.diffuse = new Color(1, 1, 1); result.emissive = new Color(.18, .16, .12); result.emissiveIntensity = .3;
    result.blendType = BLEND_NORMAL; result.depthWrite = false; result.cull = CULLFACE_NONE; result.update();
    const image = new Image(); image.onload = () => {
      const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 256;
      const context = canvas.getContext('2d'); if (!context) return;
      context.clearRect(0, 0, 256, 256); context.drawImage(image, 8, 8, 240, 240);
      const texture = new Texture(this.app.graphicsDevice, {
        name: `${svgUrl}-texture`, width: 256, height: 256, minFilter: FILTER_LINEAR, magFilter: FILTER_LINEAR,
        addressU: ADDRESS_CLAMP_TO_EDGE, addressV: ADDRESS_CLAMP_TO_EDGE, flipY: true, mipmaps: false,
      });
      texture.setSource(canvas); result.diffuseMap = texture; result.emissiveMap = texture; result.opacityMap = texture; result.opacityMapChannel = 'a'; result.update();
    }; image.src = svgUrl;
    return result;
  }
}
