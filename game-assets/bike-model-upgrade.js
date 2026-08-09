// Runtime-only bike visual upgrade. Avoids importing private names from the minified PlayCanvas bundle.
(() => {
  const hexRgb = (hex) => {
    const v = hex.replace('#', '');
    return [parseInt(v.slice(0,2),16)/255, parseInt(v.slice(2,4),16)/255, parseInt(v.slice(4,6),16)/255];
  };

  function install(app, bike) {
    if (bike.__demaeModelUpgraded || !bike.children.length) return false;

    const EntityClass = bike.children[0].constructor;
    const sourceMaterial = bike.children.find(c => c.render?.meshInstances?.[0]?.material)?.render?.meshInstances?.[0]?.material;
    if (!EntityClass || !sourceMaterial) return false;

    const mats = new Map();
    const mat = (hex) => {
      if (mats.has(hex)) return mats.get(hex);
      const m = sourceMaterial.clone();
      const [r,g,b] = hexRgb(hex);
      m.diffuse.set(r,g,b);
      m.emissive?.set(0,0,0);
      m.gloss = 28;
      m.metalness = 0.03;
      m.update();
      mats.set(hex,m);
      return m;
    };

    const part = (parent,name,type,pos,scale,color,rot) => {
      const e = new EntityClass(name);
      e.addComponent('render',{type,material:mat(color)});
      e.setLocalPosition(...pos);
      e.setLocalScale(...scale);
      if(rot) e.setLocalEulerAngles(...rot);
      parent.addChild(e);
      return e;
    };

    bike.__demaeModelUpgraded = true;
    for (const child of [...bike.children]) child.destroy();

    part(bike,'scooter-deck','box',[0,.62,0],[.95,.22,2.15],'#374151');
    part(bike,'rear-body','box',[0,.88,.72],[1.12,.72,1.2],'#dc2626');
    part(bike,'front-cowl','box',[0,1.03,-.95],[1.02,1.25,.52],'#dc2626',[14,0,0]);
    part(bike,'front-fender','box',[0,.56,-1.25],[.68,.28,.72],'#b91c1c');
    part(bike,'seat','box',[0,1.24,.16],[.92,.24,1.25],'#171717');
    part(bike,'rear-wheel','cylinder',[0,.38,1.18],[.56,.24,.56],'#111827',[0,0,90]);
    part(bike,'front-wheel','cylinder',[0,.38,-1.42],[.56,.24,.56],'#111827',[0,0,90]);
    part(bike,'rear-rim','cylinder',[0,.38,1.18],[.33,.27,.33],'#cbd5e1',[0,0,90]);
    part(bike,'front-rim','cylinder',[0,.38,-1.42],[.33,.27,.33],'#cbd5e1',[0,0,90]);
    part(bike,'handlebar','box',[0,1.7,-1],[1.35,.08,.08],'#cbd5e1');
    part(bike,'headlight','box',[0,1.36,-1.27],[.46,.34,.18],'#fff0a0');
    part(bike,'turn-left','box',[-.4,1.17,-1.25],[.16,.1,.1],'#f59e0b');
    part(bike,'turn-right','box',[.4,1.17,-1.25],[.16,.1,.1],'#f59e0b');

    // White delivery box, clearly visible from chase camera.
    part(bike,'delivery-box','box',[0,1.62,.92],[1.42,1.25,1.28],'#f8fafc');
    part(bike,'delivery-box-band','box',[0,1.68,.25],[1.46,.16,.06],'#dc2626');

    const driver = new EntityClass('driver');
    bike.addChild(driver);
    part(driver,'driver-torso','box',[0,1.82,.08],[.58,.78,.4],'#93c5fd',[8,0,0]);
    part(driver,'driver-head','box',[0,2.38,-.03],[.43,.46,.42],'#e2a782');
    part(driver,'driver-hair','box',[0,2.61,-.01],[.46,.16,.44],'#262626');
    part(driver,'driver-cap','box',[0,2.68,-.06],[.52,.12,.5],'#dc2626');
    part(driver,'left-arm','box',[-.38,1.75,-.28],[.16,.72,.16],'#93c5fd',[58,0,-15]);
    part(driver,'right-arm','box',[.38,1.75,-.28],[.16,.72,.16],'#93c5fd',[58,0,15]);
    part(driver,'left-hand','box',[-.49,1.53,-.67],[.16,.18,.16],'#e2a782');
    part(driver,'right-hand','box',[.49,1.53,-.67],[.16,.18,.16],'#e2a782');
    part(driver,'left-leg','box',[-.22,1.05,-.12],[.23,.72,.23],'#374151',[35,0,5]);
    part(driver,'right-leg','box',[.22,1.05,-.12],[.23,.72,.23],'#374151',[35,0,-5]);
    return true;
  }

  let attempts = 0;
  const timer = setInterval(() => {
    attempts++;
    const app = window.__demaeGame?.app;
    const bike = app?.root?.findByName?.('delivery-bike');
    if (app && bike && install(app,bike)) clearInterval(timer);
    else if (attempts > 240) clearInterval(timer);
  },50);
})();
