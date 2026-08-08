import { Color, Entity, StandardMaterial, type Application } from 'playcanvas';

const materialCache = new Map<string, StandardMaterial>();

export function material(app: Application, hex: string, emissive = 0): StandardMaterial {
  const key = `${hex}:${emissive}`;
  const cached = materialCache.get(key);
  if (cached) return cached;
  const value = hex.replace('#', '');
  const color = new Color(
    parseInt(value.slice(0, 2), 16) / 255,
    parseInt(value.slice(2, 4), 16) / 255,
    parseInt(value.slice(4, 6), 16) / 255,
  );
  const result = new StandardMaterial();
  result.diffuse = color;
  result.gloss = 35;
  result.metalness = 0.05;
  if (emissive > 0) {
    result.emissive = color;
    result.emissiveIntensity = emissive;
  }
  result.update();
  materialCache.set(key, result);
  void app;
  return result;
}

export function box(
  app: Application,
  name: string,
  position: [number, number, number],
  scale: [number, number, number],
  color: string,
  parent: Entity = app.root,
): Entity {
  const entity = new Entity(name);
  entity.addComponent('render', { type: 'box', material: material(app, color) });
  entity.setLocalPosition(...position);
  entity.setLocalScale(...scale);
  parent.addChild(entity);
  return entity;
}

export function cylinder(
  app: Application,
  name: string,
  position: [number, number, number],
  scale: [number, number, number],
  color: string,
  parent: Entity = app.root,
): Entity {
  const entity = new Entity(name);
  entity.addComponent('render', { type: 'cylinder', material: material(app, color) });
  entity.setLocalPosition(...position);
  entity.setLocalScale(...scale);
  parent.addChild(entity);
  return entity;
}
