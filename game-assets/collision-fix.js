(() => {
  const blockers = [
    { minX: -69, maxX: -37, minZ: -53, maxZ: -23 },
    { minX: -73, maxX: -37, minZ: 49, maxZ: 77 },
    { minX: 38.5, maxX: 69.5, minZ: 29.5, maxZ: 58.5 },
    { minX: 38.5, maxX: 71.5, minZ: 61, maxZ: 81 },
    { minX: -84, maxX: -54, minZ: -81, maxZ: -59 },
    { minX: 55, maxX: 83, minZ: -81, maxZ: -57 },
    { minX: 53, maxX: 83, minZ: -30, maxZ: -6 },
    { minX: -83.5, maxX: -56.5, minZ: -2.5, maxZ: 22.5 }
  ];

  const input = new Set();
  const driveCodes = new Set(["KeyW", "ArrowUp", "KeyS", "ArrowDown"]);

  addEventListener("keydown", e => input.add(e.code), { passive: true });
  addEventListener("keyup", e => input.delete(e.code), { passive: true });
  addEventListener("blur", () => input.clear(), { passive: true });

  document.addEventListener("pointerdown", e => {
    const el = e.target.closest?.("[data-input]");
    if (el?.dataset?.input) input.add(el.dataset.input);
  }, { passive: true });
  const releasePointer = e => {
    const el = e.target.closest?.("[data-input]");
    if (el?.dataset?.input) input.delete(el.dataset.input);
  };
  document.addEventListener("pointerup", releasePointer, { passive: true });
  document.addEventListener("pointercancel", releasePointer, { passive: true });

  const driving = () => [...driveCodes].some(code => input.has(code));

  const nearBlocker = p => blockers.find(b =>
    p.x > b.minX - 1.2 && p.x < b.maxX + 1.2 &&
    p.z > b.minZ - 1.2 && p.z < b.maxZ + 1.2
  );

  const pushOutside = (bike, p, b) => {
    const options = [
      { d: Math.abs(p.x - b.minX), x: b.minX - 2.2, z: p.z },
      { d: Math.abs(p.x - b.maxX), x: b.maxX + 2.2, z: p.z },
      { d: Math.abs(p.z - b.minZ), x: p.x, z: b.minZ - 2.2 },
      { d: Math.abs(p.z - b.maxZ), x: p.x, z: b.maxZ + 2.2 }
    ];
    options.sort((a, c) => a.d - c.d);
    const target = options[0];
    bike.setPosition(target.x, 0.55, target.z);
  };

  const install = () => {
    const game = window.__demaeGame;
    const app = game?.app;
    const bike = app?.root?.findByName?.("delivery-bike");
    if (!app || !bike) return false;

    let last = bike.getPosition().clone();
    let stuckFor = 0;
    let cooldown = 0;

    app.on("update", dt => {
      cooldown = Math.max(0, cooldown - dt);
      const p = bike.getPosition();
      const moved = Math.hypot(p.x - last.x, p.z - last.z);
      const blocker = nearBlocker(p);

      if (driving() && blocker && moved < 0.015) stuckFor += dt;
      else stuckFor = 0;

      if (stuckFor > 0.28 && cooldown === 0) {
        pushOutside(bike, p, blocker);
        stuckFor = 0;
        cooldown = 0.7;
      }

      last.copy(bike.getPosition());
    });

    return true;
  };

  let tries = 0;
  const timer = setInterval(() => {
    tries += 1;
    if (install() || tries > 120) clearInterval(timer);
  }, 100);
})();
