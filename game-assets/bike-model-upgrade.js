import { gf as Application, ej as Entity, es as StandardMaterial, l as Color } from './Game-BoBLVDiG.js';

const materials = new Map();

function material(hex) {
  if (materials.has(hex)) return materials.get(hex);
  const value = hex.replace('#', '');
  const color = new Color(
    parseInt(value.slice(0, 2), 16) / 255,
    parseInt(value.slice(2, 4), 16) / 255,
    parseInt(value.slice(4, 6), 16) / 255,
  );
  const mat = new StandardMaterial();
  mat.diffuse = color;
  mat.gloss = 28;
  mat.metalness = 0.03;
  mat.update();
  materials.set(hex, mat);
  return mat;
}

function part(app, parent, name, type, pos, scale, hex, rot) {
  const entity = new Entity(name);
  entity.addComponent('render', { type, material: material(hex) });
  entity.setLocalPosition(...pos);
  entity.setLocalScale(...scale);
  if (rot) entity.setLocalEulerAngles(...rot);
  parent.addChild(entity);
  return entity;
}

function buildBike(app, bike) {
  if (bike.__demaeModelUpgraded) return;
  bike.__demaeModelUpgraded = true;

  for (const child of [...bike.children]) child.destroy();

  // Scooter: silhouette-first, intentionally lightweight for phones.
  part(app, bike, 'scooter-deck', 'box', [0, 0.62, 0], [0.95, 0.22, 2.15], '#374151');
  part(app, bike, 'rear-body', 'box', [0, 0.88, 0.72], [1.12, 0.72, 1.2], '#dc2626');
  part(app, bike, 'front-cowl', 'box', [0, 1.03, -0.95], [1.02, 1.25, 0.52], '#dc2626', [14, 0, 0]);
  part(app, bike, 'front-fender', 'box', [0, 0.56, -1.25], [0.68, 0.28, 0.72], '#b91c1c');
  part(app, bike, 'seat', 'box', [0, 1.24, 0.16], [0.92, 0.24, 1.25], '#171717');

  part(app, bike, 'rear-wheel', 'cylinder', [0, 0.38, 1.18], [0.56, 0.24, 0.56], '#111827', [0, 0, 90]);
  part(app, bike, 'front-wheel', 'cylinder', [0, 0.38, -1.42], [0.56, 0.24, 0.56], '#111827', [0, 0, 90]);
  part(app, bike, 'rear-rim', 'cylinder', [0, 0.38, 1.18], [0.33, 0.27, 0.33], '#cbd5e1', [0, 0, 90]);
  part(app, bike, 'front-rim', 'cylinder', [0, 0.38, -1.42], [0.33, 0.27, 0.33], '#cbd5e1', [0, 0, 90]);

  part(app, bike, 'handlebar', 'box', [0, 1.7, -1.0], [1.35, 0.08, 0.08], '#cbd5e1');
  part(app, bike, 'grip-left', 'cylinder', [-0.62, 1.7, -1.0], [0.09, 0.28, 0.09], '#111827', [0, 0, 90]);
  part(app, bike, 'grip-right', 'cylinder', [0.62, 1.7, -1.0], [0.09, 0.28, 0.09], '#111827', [0, 0, 90]);
  part(app, bike, 'headlight', 'box', [0, 1.36, -1.27], [0.46, 0.34, 0.18], '#fff0a0');
  part(app, bike, 'turn-left', 'box', [-0.4, 1.17, -1.25], [0.16, 0.1, 0.1], '#f59e0b');
  part(app, bike, 'turn-right', 'box', [0.4, 1.17, -1.25], [0.16, 0.1, 0.1], '#f59e0b');

  // White delivery box: large and readable from the chase camera.
  part(app, bike, 'delivery-box', 'box', [0, 1.62, 0.92], [1.42, 1.25, 1.28], '#f8fafc');
  part(app, bike, 'delivery-box-band', 'box', [0, 1.68, 0.25], [1.46, 0.16, 0.06], '#dc2626');

  // Driver: simplified low-poly body, no tiny facial detail.
  const driver = new Entity('driver');
  driver.setLocalPosition(0, 0.02, -0.03);
  bike.addChild(driver);

  part(app, driver, 'driver-torso', 'box', [0, 1.82, 0.08], [0.58, 0.78, 0.4], '#93c5fd', [8, 0, 0]);
  part(app, driver, 'driver-head', 'box', [0, 2.38, -0.03], [0.43, 0.46, 0.42], '#e2a782');
  part(app, driver, 'driver-hair', 'box', [0, 2.61, -0.01], [0.46, 0.16, 0.44], '#262626');
  part(app, driver, 'driver-cap', 'box', [0, 2.68, -0.06], [0.52, 0.12, 0.5], '#dc2626');

  part(app, driver, 'left-upper-arm', 'box', [-0.38, 1.83, -0.08], [0.16, 0.5, 0.16], '#93c5fd', [55, 0, -18]);
  part(app, driver, 'right-upper-arm', 'box', [0.38, 1.83, -0.08], [0.16, 0.5, 0.16], '#93c5fd', [55, 0, 18]);
  part(app, driver, 'left-forearm', 'box', [-0.48, 1.59, -0.5], [0.14, 0.46, 0.14], '#e2a782', [72, 0, -8]);
  part(app, driver, 'right-forearm', 'box', [0.48, 1.59, -0.5], [0.14, 0.46, 0.14], '#e2a782', [72, 0, 8]);

  part(app, driver, 'left-thigh', 'box', [-0.22, 1.24, 0.0], [0.24, 0.55, 0.24], '#374151', [62, 0, 6]);
  part(app, driver, 'right-thigh', 'box', [0.22, 1.24, 0.0], [0.24, 0.55, 0.24], '#374151', [62, 0, -6]);
  part(app, driver, 'left-shin', 'box', [-0.28, 0.9, -0.28], [0.2, 0.5, 0.2], '#374151', [18, 0, 0]);
  part(app, driver, 'right-shin', 'box', [0.28, 0.9, -0.28], [0.2, 0.5, 0.2], '#374151', [18, 0, 0]);
  part(app, driver, 'left-shoe', 'box', [-0.29, 0.66, -0.47], [0.22, 0.14, 0.38], '#451a03');
  part(app, driver, 'right-shoe', 'box', [0.29, 0.66, -0.47], [0.22, 0.14, 0.38], '#451a03');
}

let attempts = 0;
const timer = setInterval(() => {
  attempts += 1;
  const app = Application.getApplication('game-canvas');
  const bike = app?.root?.findByName?.('delivery-bike');
  if (app && bike) {
    clearInterval(timer);
    buildBike(app, bike);
  } else if (attempts > 240) {
    clearInterval(timer);
  }
}, 50);
