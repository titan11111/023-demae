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

// Replace the simple six-part bike with a lightweight low-poly scooter + driver.
import('./bike-model-upgrade.js').catch(error => console.error('Bike model upgrade failed:', error));

// Landscape-phone order ticket: keep every field and the departure button visible at once.
(() => {
  const style = document.createElement('style');
  style.id = 'mobile-order-ticket-fit';
  style.textContent = `
    @media (orientation: landscape) and (max-height: 600px) {
      .order-screen {
        overflow: hidden !important;
        padding: 2px max(8px, env(safe-area-inset-right)) 2px max(8px, env(safe-area-inset-left)) !important;
      }
      .order-ticket {
        width: min(570px, 88vw) !important;
        max-height: none !important;
        overflow: visible !important;
        padding: 0 20px 14px !important;
        border-width: 4px !important;
        box-shadow: 6px 8px 0 rgba(0,0,0,.35) !important;
        transform: rotate(-.25deg) scale(.84) !important;
        transform-origin: center center !important;
      }
      .order-ticket header {
        margin: 0 -20px 8px !important;
        padding: 5px 10px !important;
        min-height: 0 !important;
      }
      .order-ticket header span {
        font-size: 18px !important;
      }
      .order-ticket header strong {
        font-size: 12px !important;
      }
      .order-ticket header i {
        font-size: 8px !important;
      }
      .order-ticket .label {
        margin: 0 !important;
        font-size: 8px !important;
      }
      .order-ticket h2 {
        margin: 2px 0 7px !important;
        font-size: 22px !important;
        line-height: .95 !important;
      }
      .food-icon {
        width: 76px !important;
        margin: 0 0 5px 12px !important;
        padding: 5px !important;
        font-size: 31px !important;
      }
      .food-icon em {
        font-size: 7px !important;
      }
      .order-ticket dl {
        margin: 0 0 8px !important;
      }
      .order-ticket dl div {
        padding: 3px 0 !important;
      }
      .order-ticket dt {
        width: 72px !important;
        font-size: 8px !important;
      }
      .order-ticket dd {
        font-size: 12px !important;
        line-height: 1.15 !important;
      }
      .order-ticket dd.red {
        font-size: 18px !important;
        line-height: 1 !important;
      }
      .order-ticket .arcade-button {
        min-width: 0 !important;
        padding: 7px 13px !important;
        font-size: 10px !important;
        box-shadow: 4px 4px 0 var(--yellow) !important;
      }
      .order-ticket .arcade-button b {
        font-size: 16px !important;
      }
    }

    @media (orientation: landscape) and (max-height: 430px) {
      .order-ticket {
        transform: rotate(-.2deg) scale(.76) !important;
      }
    }
  `;
  document.head.appendChild(style);
})();

// Final mobile HUD layout: keep navigation readable without covering the scooter or controls.
(() => {
  const style = document.createElement('style');
  style.id = 'mobile-hud-final-layout';
  style.textContent = `
    @media (hover: none) and (pointer: coarse), (max-width: 950px) and (max-height: 520px) {
      /* Destination indicator sits below the scooter, in the clear center lane. */
      .hud .objective {
        top: auto !important;
        bottom: max(72px, calc(env(safe-area-inset-bottom) + 64px)) !important;
        left: 50% !important;
        display: grid !important;
        grid-template-columns: 22px auto auto !important;
        gap: 7px !important;
        align-items: center !important;
        justify-items: center !important;
        min-width: 0 !important;
        padding: 5px 10px !important;
        background: rgba(16, 13, 10, .80) !important;
        border-bottom: 3px solid var(--yellow) !important;
        border-radius: 8px !important;
        transform: translateX(-50%) !important;
        z-index: 18 !important;
        white-space: nowrap !important;
      }

      /* Replace the equilateral text glyph with a tall isosceles direction pointer. */
      .hud .objective span {
        display: block !important;
        width: 16px !important;
        height: 27px !important;
        min-width: 16px !important;
        min-height: 27px !important;
        padding: 0 !important;
        font-size: 0 !important;
        line-height: 0 !important;
        color: transparent !important;
        background: var(--yellow) !important;
        clip-path: polygon(0 0, 100% 0, 50% 100%) !important;
        transform-origin: 50% 50% !important;
        filter: drop-shadow(0 2px 1px rgba(0,0,0,.75));
      }

      .hud .objective b {
        padding: 0 !important;
        background: transparent !important;
        font-size: 10px !important;
        line-height: 1 !important;
      }

      .hud .objective em {
        font-size: 18px !important;
        line-height: 1 !important;
      }

      /* Keep map and speed panel above the bottom control buttons. */
      .hud .minimap-frame {
        left: max(14px, env(safe-area-inset-left)) !important;
        bottom: max(118px, calc(env(safe-area-inset-bottom) + 104px)) !important;
        transform-origin: bottom left !important;
        z-index: 12 !important;
      }

      .hud .speedometer {
        right: max(14px, env(safe-area-inset-right)) !important;
        bottom: max(124px, calc(env(safe-area-inset-bottom) + 110px)) !important;
        transform-origin: bottom right !important;
        z-index: 12 !important;
      }
    }

    @media (orientation: landscape) and (max-height: 430px) {
      .hud .objective {
        bottom: max(62px, calc(env(safe-area-inset-bottom) + 56px)) !important;
        padding: 4px 8px !important;
      }

      .hud .objective span {
        width: 14px !important;
        height: 23px !important;
        min-width: 14px !important;
        min-height: 23px !important;
      }

      .hud .minimap-frame {
        bottom: max(106px, calc(env(safe-area-inset-bottom) + 94px)) !important;
      }

      .hud .speedometer {
        bottom: max(112px, calc(env(safe-area-inset-bottom) + 100px)) !important;
      }
    }
  `;
  document.head.appendChild(style);
})();
