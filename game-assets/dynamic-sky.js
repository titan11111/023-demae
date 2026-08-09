// Dynamic layered sky for the delivery game.
// Runtime-only: uses the already-loaded PlayCanvas application and primitive meshes.
(() => {
  const hexRgb = (hex) => {
    const v = hex.replace('#', '');
    return [parseInt(v.slice(0, 2), 16) / 255, parseInt(v.slice(2, 4), 16) / 255, parseInt(v.slice(4, 6), 16) / 255];
  };

  const install = (app, bike) => {
    if (app.__demaeDynamicSkyInstalled) return true;

    const EntityClass = bike.children?.[0]?.constructor || bike.constructor;
    const sourceMaterial = bike.children
      ?.find(child => child.render?.meshInstances?.[0]?.material)
      ?.render?.meshInstances?.[0]?.material;
    if (!EntityClass || !sourceMaterial) return false;

    app.__demaeDynamicSkyInstalled = true;

    // Clear blue sky. This is deliberately image-free so the effect works immediately.
    const cameraComponent = app.root.findComponents?.('camera')?.[0];
    cameraComponent?.clearColor?.set?.(0.055, 0.42, 0.92, 1);

    const materials = new Map();
    const material = (hex, emissive = 0.08) => {
      const key = `${hex}-${emissive}`;
      if (materials.has(key)) return materials.get(key);
      const m = sourceMaterial.clone();
      const [r, g, b] = hexRgb(hex);
      m.diffuse.set(r, g, b);
      m.emissive?.set(r * emissive, g * emissive, b * emissive);
      m.gloss = 6;
      m.metalness = 0;
      m.update();
      materials.set(key, m);
      return m;
    };

    const root = new EntityClass('dynamic-sky-root');
    app.root.addChild(root);

    const makePart = (parent, name, type, pos, scale, color, emissive = 0.08) => {
      const e = new EntityClass(name);
      e.addComponent('render', { type, material: material(color, emissive) });
      e.setLocalPosition(...pos);
      e.setLocalScale(...scale);
      if (e.render) {
        e.render.castShadows = false;
        e.render.receiveShadows = false;
      }
      parent.addChild(e);
      return e;
    };

    const cloudClusters = [];
    const makeCloud = (name, layer, baseX, y, baseZ, scale, tint, speed) => {
      const group = new EntityClass(name);
      root.addChild(group);
      const pieces = layer === 'far' ? 4 : 5;
      for (let i = 0; i < pieces; i++) {
        const x = (i - (pieces - 1) / 2) * scale * 0.95;
        const yy = ((i % 2) * 0.32 - 0.12) * scale;
        const zz = ((i * 17) % 3 - 1) * scale * 0.18;
        const sx = scale * (1.2 + (i % 3) * 0.18);
        const sy = scale * (0.48 + ((i + 1) % 2) * 0.16);
        const sz = scale * (0.72 + (i % 2) * 0.12);
        makePart(group, `${name}-puff-${i}`, 'sphere', [x, yy, zz], [sx, sy, sz], tint, 0.13);
      }
      cloudClusters.push({ group, layer, baseX, y, baseZ, speed });
    };

    // Far cloud layer: high, pale and slow.
    makeCloud('far-cloud-a', 'far', -85, 54, -115, 9.5, '#eaf6ff', 1.0);
    makeCloud('far-cloud-b', 'far', -20, 61, -128, 7.2, '#eef8ff', 0.85);
    makeCloud('far-cloud-c', 'far', 52, 56, -120, 10.3, '#e8f5ff', 0.95);
    makeCloud('far-cloud-d', 'far', 105, 64, -132, 6.7, '#f5fbff', 0.78);
    makeCloud('far-cloud-e', 'far', 155, 58, -118, 8.4, '#edf8ff', 0.9);

    // Near cloud layer: larger, lower and visibly faster for parallax.
    makeCloud('near-cloud-a', 'near', -72, 39, -78, 8.6, '#ffffff', 2.25);
    makeCloud('near-cloud-b', 'near', 18, 44, -84, 10.8, '#f7fbff', 2.55);
    makeCloud('near-cloud-c', 'near', 92, 41, -74, 7.7, '#ffffff', 2.05);
    makeCloud('near-cloud-d', 'near', 145, 47, -88, 9.3, '#f5fbff', 2.35);

    // Small stylized sun. It follows the rider so it remains visually distant.
    const sunVisual = makePart(root, 'dynamic-sun', 'sphere', [65, 72, -108], [5.2, 5.2, 5.2], '#fff3ad', 1.2);
    const sunLight = app.root.findByName?.('sun');

    let elapsed = 0;
    const wrap = (value, span) => ((value % span) + span) % span;

    app.on('update', (dt) => {
      elapsed += Math.min(dt, 0.05);
      const p = bike.getPosition();

      // Keep the system centered around the rider, while each layer drifts at a different rate.
      for (const cloud of cloudClusters) {
        const span = cloud.layer === 'far' ? 280 : 230;
        const layerOffset = wrap(cloud.baseX + elapsed * cloud.speed + span / 2, span) - span / 2;
        const bob = Math.sin(elapsed * (cloud.layer === 'far' ? 0.08 : 0.14) + cloud.baseX) * (cloud.layer === 'far' ? 0.7 : 1.15);
        cloud.group.setLocalPosition(p.x + layerOffset, cloud.y + bob, p.z + cloud.baseZ);
      }

      // Sun travels only a little during a run: enough to make the sky feel alive, not distracting.
      const sunPhase = elapsed * 0.015;
      sunVisual.setLocalPosition(
        p.x + 62 + Math.sin(sunPhase) * 15,
        70 + Math.sin(sunPhase * 0.55) * 5,
        p.z - 106 + Math.cos(sunPhase) * 10,
      );

      // Slowly rotate the directional light with the sun for subtle moving highlights/shadows.
      if (sunLight) {
        sunLight.setLocalEulerAngles(
          48 + Math.sin(sunPhase * 0.7) * 5,
          -32 + Math.sin(sunPhase) * 10,
          0,
        );
      }
    });

    return true;
  };

  let attempts = 0;
  const timer = setInterval(() => {
    attempts += 1;
    const app = window.__demaeGame?.app;
    const bike = app?.root?.findByName?.('delivery-bike');
    if (app && bike && install(app, bike)) clearInterval(timer);
    else if (attempts > 240) clearInterval(timer);
  }, 50);
})();
