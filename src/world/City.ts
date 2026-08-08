import { Color, Entity, Vec3, type Application } from 'playcanvas';
import { LOCATIONS, SHOP, type LocationData } from '../data/locations';
import { box, cylinder, material } from './primitives';

export interface Blocker { minX: number; maxX: number; minZ: number; maxZ: number; }

export class City {
  readonly blockers: Blocker[] = [];
  readonly destinationMarkers = new Map<string, Entity>();
  readonly shopMarker: Entity;

  constructor(private readonly app: Application) {
    app.scene.ambientLight = new Color(0.36, 0.39, 0.46);
    app.scene.skyboxMip = 2;
    this.createGround();
    this.createRoads();
    this.createBuildings();
    this.createPark();
    this.createStreetDetails();
    this.shopMarker = this.createLocation(SHOP, true);
    for (const location of LOCATIONS) this.destinationMarkers.set(location.id, this.createLocation(location, false));
  }

  setObjective(id: string): void {
    this.shopMarker.enabled = id === SHOP.id;
    for (const [locationId, marker] of this.destinationMarkers) marker.enabled = locationId === id;
  }

  getLocation(id: string): LocationData {
    if (id === SHOP.id) return SHOP;
    const result = LOCATIONS.find((location) => location.id === id);
    if (!result) throw new Error(`Unknown location: ${id}`);
    return result;
  }

  private createGround(): void {
    box(this.app, 'ground', [0, -0.7, 0], [190, 1, 190], '#637556');
    for (let i = -3; i <= 3; i += 1) {
      for (let j = -3; j <= 3; j += 1) {
        if ((i + j) % 2 === 0) box(this.app, 'grass-patch', [i * 27, -0.15, j * 27], [25, .08, 25], '#6f845e');
      }
    }
  }

  private createRoads(): void {
    const asphalt = '#30343a';
    box(this.app, 'road-ns', [0, 0, 0], [25, .25, 188], asphalt);
    box(this.app, 'road-ew', [0, .01, 0], [188, .25, 25], asphalt);
    box(this.app, 'road-west', [-52, .01, 38], [84, .25, 18], asphalt);
    box(this.app, 'road-east', [52, .01, -42], [84, .25, 18], asphalt);
    box(this.app, 'alley-shortcut', [-42, .02, -38], [12, .26, 58], '#3d4248');
    box(this.app, 'park-shortcut', [43, .03, 29], [14, .27, 68], '#a7966b');
    for (let z = -80; z <= 80; z += 12) box(this.app, 'line', [0, .16, z], [.45, .05, 5.5], '#f0d35b');
    for (let x = -80; x <= 80; x += 12) box(this.app, 'line', [x, .17, 0], [5.5, .05, .45], '#f0d35b');
  }

  private createBuildings(): void {
    const blocks: Array<[number, number, number, number, string]> = [
      [-53, -38, 30, 28, '#b67b5e'], [-55, 63, 34, 26, '#d09b61'],
      [54, 44, 29, 27, '#738ba0'], [55, 71, 31, 18, '#a86655'],
      [-69, -70, 28, 20, '#5c7897'], [69, -69, 26, 22, '#6d9b72'],
      [68, -18, 28, 22, '#c09955'], [-70, 10, 25, 23, '#b66c56'],
    ];
    blocks.forEach(([x, z, w, d, color], index) => this.building(`building-${index}`, x, z, w, d, color));
  }

  private building(name: string, x: number, z: number, w: number, d: number, color: string): void {
    const height = 9 + ((Math.abs(x + z) * 7) % 8);
    box(this.app, name, [x, height / 2, z], [w, height, d], color);
    box(this.app, `${name}-roof`, [x, height + .6, z], [w + 1.2, 1, d + 1.2], '#553930');
    for (let row = 0; row < 2; row += 1) {
      for (let col = -1; col <= 1; col += 1) {
        box(this.app, 'window', [x + col * (w / 4), 3.5 + row * 4, z + d / 2 + .06], [2.2, 2.1, .12], '#f6cd72');
      }
    }
    this.blockers.push({ minX: x - w / 2 - 1, maxX: x + w / 2 + 1, minZ: z - d / 2 - 1, maxZ: z + d / 2 + 1 });
  }

  private createPark(): void {
    box(this.app, 'park', [46, .02, 31], [58, .22, 48], '#55784c');
    for (const [x, z] of [[25, 18], [31, 45], [61, 16], [67, 43]] as Array<[number, number]>) {
      cylinder(this.app, 'tree-trunk', [x, 2, z], [1.1, 4, 1.1], '#6d4226');
      const crown = new Entity('tree-crown');
      crown.addComponent('render', { type: 'sphere', material: material(this.app, '#35673b') });
      crown.setPosition(x, 6, z); crown.setLocalScale(5, 5, 5); this.app.root.addChild(crown);
    }
  }

  private createStreetDetails(): void {
    for (let z = -75; z <= 75; z += 25) {
      for (const x of [-15, 15]) {
        cylinder(this.app, 'lamp', [x, 3, z], [.22, 6, .22], '#22242a');
        const light = new Entity('lamp-glow');
        light.addComponent('light', { type: 'omni', color: new Color(1, .65, .25), intensity: 1.1, range: 13, castShadows: false });
        light.setPosition(x, 6, z); this.app.root.addChild(light);
        const bulb = box(this.app, 'bulb', [x, 6, z], [.8, .5, .8], '#ffd05a');
        if (bulb.render) bulb.render.material = material(this.app, '#ffd05a', 1.8);
      }
    }
    for (let x = -75; x <= 75; x += 25) {
      box(this.app, 'curb', [x, .35, -13.5], [10, .5, 1], '#d8d0b9');
      box(this.app, 'curb', [x, .35, 13.5], [10, .5, 1], '#d8d0b9');
    }
  }

  private createLocation(location: LocationData, isShop: boolean): Entity {
    const group = new Entity(`${location.id}-location`);
    group.setPosition(location.x, 0, location.z);
    this.app.root.addChild(group);
    if (isShop) {
      box(this.app, 'shop-body', [0, 4, 0], [24, 8, 16], '#b8291b', group);
      box(this.app, 'shop-roof', [0, 8.5, 0], [27, 1.4, 19], '#f0c42f', group);
      box(this.app, 'shop-door', [0, 2.4, -8.1], [5, 4.8, .3], '#261a13', group);
      box(this.app, 'shop-sign', [0, 6, -8.4], [13, 2.7, .35], '#ffd138', group);
    }
    const marker = new Entity(`${location.id}-marker`);
    marker.addComponent('render', { type: 'cylinder', material: material(this.app, isShop ? '#44e779' : '#ffd33d', 1.4) });
    marker.setLocalPosition(location.x, 1, location.z);
    marker.setLocalScale(6, .15, 6);
    this.app.root.addChild(marker);
    const beam = new Entity(`${location.id}-beam`);
    beam.addComponent('render', { type: 'cylinder', material: material(this.app, isShop ? '#44e779' : '#ffd33d', .8) });
    beam.setLocalPosition(0, 7, 0);
    beam.setLocalScale(.35, 12, .35);
    marker.addChild(beam);
    marker.enabled = false;
    return marker;
  }

  resolveCollision(position: Vec3, previous: Vec3): boolean {
    const outside = Math.abs(position.x) > 91 || Math.abs(position.z) > 91;
    const blocked = this.blockers.some((blocker) => position.x > blocker.minX && position.x < blocker.maxX && position.z > blocker.minZ && position.z < blocker.maxZ);
    if (outside || blocked) {
      position.copy(previous);
      return true;
    }
    return false;
  }
}
