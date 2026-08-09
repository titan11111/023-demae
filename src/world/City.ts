import {
  ADDRESS_CLAMP_TO_EDGE,
  BLEND_NORMAL,
  Color,
  CULLFACE_NONE,
  Entity,
  FILTER_LINEAR,
  StandardMaterial,
  Texture,
  Vec3,
  type Application,
} from 'playcanvas';
import { LOCATIONS, SHOP, type LocationData } from '../data/locations';
import { box, cylinder, material } from './primitives';
import customerWaitingUrl from '../assets/customer-waiting.svg?url';

export interface Blocker {
  minX: number; maxX: number; minZ: number; maxZ: number;
  breakable?: { entity: Entity; broken: boolean };
}

export class City {
  readonly blockers: Blocker[] = [];
  readonly destinationMarkers = new Map<string, Entity>();
  readonly shopMarker: Entity;
  private customerMaterial: StandardMaterial | null = null;

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

  getBrokenCount(): number { return this.blockers.filter((blocker) => blocker.breakable?.broken).length; }

  private createGround(): void {
    box(this.app, 'ground', [0, -0.7, 0], [380, 1, 380], '#637556');
    for (let i = -6; i <= 6; i += 1) {
      for (let j = -6; j <= 6; j += 1) {
        if ((i + j) % 2 === 0) box(this.app, 'grass-patch', [i * 27, -0.15, j * 27], [25, .08, 25], '#6f845e');
      }
    }
  }

  private createRoads(): void {
    const asphalt = '#30343a';
    box(this.app, 'road-ns', [0, 0, 0], [25, .25, 376], asphalt);
    box(this.app, 'road-ew', [0, .01, 0], [376, .25, 25], asphalt);
    box(this.app, 'road-west', [-104, .01, 76], [168, .25, 18], asphalt);
    box(this.app, 'road-east', [104, .01, -84], [168, .25, 18], asphalt);
    box(this.app, 'alley-shortcut', [-84, .02, -76], [12, .26, 116], '#3d4248');
    box(this.app, 'park-shortcut', [86, .03, 58], [14, .27, 136], '#a7966b');
    for (let z = -176; z <= 176; z += 12) box(this.app, 'line', [0, .16, z], [.45, .05, 5.5], '#f0d35b');
    for (let x = -176; x <= 176; x += 12) box(this.app, 'line', [x, .17, 0], [5.5, .05, .45], '#f0d35b');
    for (const z of [-50, 45, 100]) {
      for (let x = -9; x <= 9; x += 3) box(this.app, 'crosswalk-stripe', [x, .19, z], [1.5, .04, 9], '#eee8d8');
    }
    for (const x of [-104, 104]) {
      for (let z = -9; z <= 9; z += 3) box(this.app, 'crosswalk-stripe', [x, .2, z], [9, .04, 1.5], '#eee8d8');
    }
  }

  private createBuildings(): void {
    const blocks: Array<[number, number, number, number, string]> = [
      [-106, -76, 30, 28, '#b67b5e'], [-110, 126, 34, 26, '#d09b61'],
      [108, 88, 29, 27, '#738ba0'], [110, 142, 31, 18, '#a86655'],
      [-138, -140, 28, 20, '#5c7897'], [138, -138, 26, 22, '#6d9b72'],
      [136, -36, 28, 22, '#c09955'], [-140, 20, 25, 23, '#b66c56'],
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
    box(this.app, 'park', [92, .02, 62], [58, .22, 48], '#55784c');
    for (const [x, z] of [[71, 49], [77, 76], [107, 47], [113, 74]] as Array<[number, number]>) {
      const tree = new Entity('breakable-tree'); tree.setPosition(x, 0, z); this.app.root.addChild(tree);
      cylinder(this.app, 'tree-trunk', [0, 2, 0], [1.1, 4, 1.1], '#6d4226', tree);
      const crown = new Entity('tree-crown');
      crown.addComponent('render', { type: 'sphere', material: material(this.app, '#35673b') });
      crown.setLocalPosition(0, 6, 0); crown.setLocalScale(5, 5, 5); tree.addChild(crown);
      this.blockers.push({ minX: x - 1.4, maxX: x + 1.4, minZ: z - 1.4, maxZ: z + 1.4, breakable: { entity: tree, broken: false } });
    }
  }

  private createStreetDetails(): void {
    for (let z = -175; z <= 175; z += 25) {
      for (const x of [-15, 15]) {
        const lamp = new Entity('breakable-lamp'); lamp.setPosition(x, 0, z); this.app.root.addChild(lamp);
        cylinder(this.app, 'lamp', [0, 3, 0], [.22, 6, .22], '#22242a', lamp);
        const light = new Entity('lamp-glow');
        light.addComponent('light', { type: 'omni', color: new Color(1, .65, .25), intensity: 1.1, range: 13, castShadows: false });
        light.setLocalPosition(0, 6, 0); lamp.addChild(light);
        const bulb = box(this.app, 'bulb', [0, 6, 0], [.8, .5, .8], '#ffd05a', lamp);
        if (bulb.render) bulb.render.material = material(this.app, '#ffd05a', 1.8);
        this.blockers.push({ minX: x - .75, maxX: x + .75, minZ: z - .75, maxZ: z + .75, breakable: { entity: lamp, broken: false } });
      }
    }
    for (let x = -175; x <= 175; x += 25) {
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
      this.createShopSign(group);
    }
    const marker = new Entity(`${location.id}-marker`);
    marker.setLocalPosition(location.x, 1, location.z);
    this.app.root.addChild(marker);
    const ring = new Entity(`${location.id}-ring`);
    ring.addComponent('render', { type: 'cylinder', material: material(this.app, isShop ? '#44e779' : '#ffd33d', 1.4) });
    ring.setLocalScale(6, .15, 6);
    marker.addChild(ring);
    const beam = new Entity(`${location.id}-beam`);
    beam.addComponent('render', { type: 'cylinder', material: material(this.app, isShop ? '#44e779' : '#ffd33d', .8) });
    beam.setLocalPosition(isShop ? 0 : -3.2, 7, 0);
    beam.setLocalScale(.35, 12, .35);
    marker.addChild(beam);
    if (!isShop) this.createWaitingCustomer(marker);
    marker.enabled = false;
    return marker;
  }

  private createWaitingCustomer(marker: Entity): void {
    const customerMaterial = this.createCustomerMaterial();
    for (const angle of [0, 90]) {
      const customer = new Entity('waiting-customer-svg');
      customer.addComponent('render', { type: 'plane', material: customerMaterial, castShadows: false });
      customer.setLocalPosition(0, 2.6, 0);
      customer.setLocalScale(4.8, 1, 7.2);
      customer.setLocalEulerAngles(90, angle, 0);
      marker.addChild(customer);
    }
  }

  private createCustomerMaterial(): StandardMaterial {
    if (this.customerMaterial) return this.customerMaterial;
    const customerMaterial = new StandardMaterial();
    this.customerMaterial = customerMaterial;
    customerMaterial.diffuse = new Color(1, 1, 1);
    customerMaterial.emissive = new Color(.25, .22, .12);
    customerMaterial.emissiveIntensity = .4;
    customerMaterial.blendType = BLEND_NORMAL;
    customerMaterial.depthWrite = false;
    customerMaterial.cull = CULLFACE_NONE;

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 256; canvas.height = 512;
      const context = canvas.getContext('2d');
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 8, 64, 240, 360);
      const texture = new Texture(this.app.graphicsDevice, {
        name: 'waiting-customer-svg', width: canvas.width, height: canvas.height,
        minFilter: FILTER_LINEAR, magFilter: FILTER_LINEAR,
        addressU: ADDRESS_CLAMP_TO_EDGE, addressV: ADDRESS_CLAMP_TO_EDGE,
        flipY: true, mipmaps: false,
      });
      texture.setSource(canvas);
      customerMaterial.diffuseMap = texture;
      customerMaterial.emissiveMap = texture;
      customerMaterial.opacityMap = texture;
      customerMaterial.opacityMapChannel = 'a';
      customerMaterial.update();
    };
    image.src = customerWaitingUrl;
    customerMaterial.update();
    return customerMaterial;
  }

  private createShopSign(parent: Entity): void {
    box(this.app, 'shop-sign-shadow', [0, 6.08, -8.34], [14.6, 3.25, .48], '#54130d', parent);
    const sign = box(this.app, 'shop-sign', [0, 6.08, -8.61], [13.8, 2.72, .12], '#ffd138', parent);
    if (sign.render) sign.render.material = this.createSignMaterial();

    box(this.app, 'shop-sign-cap-left', [-7.25, 6.08, -8.65], [.45, 3.35, .38], '#f3b51b', parent);
    box(this.app, 'shop-sign-cap-right', [7.25, 6.08, -8.65], [.45, 3.35, .38], '#f3b51b', parent);
    for (const x of [-8.25, 8.25]) {
      const lantern = new Entity('shop-lantern');
      lantern.addComponent('render', { type: 'sphere', material: material(this.app, '#f23b22', 1.35) });
      lantern.setLocalPosition(x, 6.05, -8.75);
      lantern.setLocalScale(1.25, 1.55, .72);
      parent.addChild(lantern);
    }
  }

  private createSignMaterial(): StandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    if (!context) return material(this.app, '#ffd138', 1.1);

    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#ffe66a');
    gradient.addColorStop(.52, '#ffd02b');
    gradient.addColorStop(1, '#e8a70d');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = '#7d160e';
    context.lineWidth = 22;
    context.strokeRect(11, 11, canvas.width - 22, canvas.height - 22);
    context.strokeStyle = '#fff0a2';
    context.lineWidth = 5;
    context.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = '900 142px "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif';
    context.lineJoin = 'round';
    context.strokeStyle = '#fff4b5';
    context.lineWidth = 19;
    context.strokeText('爆速飯店', canvas.width / 2, canvas.height / 2 + 3);
    context.strokeStyle = '#571008';
    context.lineWidth = 10;
    context.strokeText('爆速飯店', canvas.width / 2, canvas.height / 2 + 3);
    context.fillStyle = '#c82516';
    context.fillText('爆速飯店', canvas.width / 2, canvas.height / 2 + 3);

    const texture = new Texture(this.app.graphicsDevice, {
      name: 'bakusoku-sign-texture',
      width: canvas.width,
      height: canvas.height,
      minFilter: FILTER_LINEAR,
      magFilter: FILTER_LINEAR,
      addressU: ADDRESS_CLAMP_TO_EDGE,
      addressV: ADDRESS_CLAMP_TO_EDGE,
      flipY: true,
    });
    texture.setSource(canvas);

    const signMaterial = new StandardMaterial();
    signMaterial.diffuseMap = texture;
    signMaterial.emissiveMap = texture;
    signMaterial.emissive = new Color(.72, .54, .22);
    signMaterial.emissiveIntensity = .78;
    signMaterial.gloss = 24;
    signMaterial.update();
    return signMaterial;
  }

  resolveCollision(position: Vec3, previous: Vec3): boolean {
    const outside = Math.abs(position.x) > 188 || Math.abs(position.z) > 188;
    const blocker = this.blockers.find((candidate) => position.x > candidate.minX && position.x < candidate.maxX && position.z > candidate.minZ && position.z < candidate.maxZ && !candidate.breakable?.broken);
    if (blocker?.breakable) {
      blocker.breakable.broken = true;
      blocker.breakable.entity.rotateLocal(0, 0, position.x >= previous.x ? -78 : 78);
      blocker.breakable.entity.translateLocal(0, -.45, 0);
    }
    const blocked = Boolean(blocker);
    if (outside || blocked) {
      position.copy(previous);
      return true;
    }
    return false;
  }
}
