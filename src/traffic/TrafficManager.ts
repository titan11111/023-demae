import { Entity, Vec3, type Application } from 'playcanvas';
import { box, cylinder } from '../world/primitives';

interface TrafficCar { entity: Entity; route: Vec3[]; waypoint: number; speed: number; }

export class TrafficManager {
  private readonly cars: TrafficCar[] = [];

  constructor(private readonly app: Application) {
    this.cars.push(this.createCar('taxi', '#e0a91d', [new Vec3(-78, .55, 4), new Vec3(78, .55, 4)], 8.5));
    this.cars.push(this.createCar('van', '#ded8c8', [new Vec3(6, .55, -78), new Vec3(6, .55, 78)], 6.5));
  }

  update(dt: number, playerPosition: Vec3): boolean {
    let collided = false;
    for (const car of this.cars) {
      const target = car.route[car.waypoint]; const position = car.entity.getPosition();
      const direction = target.clone().sub(position); const distance = direction.length();
      if (distance < 1.2) { car.waypoint = (car.waypoint + 1) % car.route.length; continue; }
      direction.normalize(); position.add(direction.mulScalar(Math.min(distance, car.speed * dt))); car.entity.setPosition(position);
      car.entity.lookAt(target.x, position.y, target.z); car.entity.rotateLocal(0, 180, 0);
      if (position.distance(playerPosition) < 3) collided = true;
    }
    return collided;
  }

  private createCar(name: string, color: string, route: Vec3[], speed: number): TrafficCar {
    const entity = new Entity(name); this.app.root.addChild(entity); entity.setPosition(route[0]);
    box(this.app, `${name}-body`, [0, .65, 0], [2.4, 1, 4.5], color, entity);
    box(this.app, `${name}-cabin`, [0, 1.35, .2], [2.1, .8, 2.2], '#30424c', entity);
    for (const [x, z] of [[-1.1,-1.3],[1.1,-1.3],[-1.1,1.3],[1.1,1.3]] as Array<[number,number]>) cylinder(this.app, 'car-wheel', [x, .35, z], [.42,.18,.42], '#151515', entity).setLocalEulerAngles(0, 0, 90);
    return { entity, route, waypoint: 1, speed };
  }
}
