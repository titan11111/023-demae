import './styles.css';
import './hud-overrides.css';

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
document.documentElement.classList.toggle('is-ios', isIOS);

let lastTap = 0;
document.addEventListener('touchstart', (event) => {
  const now = Date.now();
  if (now - lastTap < 300) event.preventDefault();
  lastTap = now;
}, { passive: false });
document.addEventListener('dblclick', (event) => event.preventDefault());
document.addEventListener('contextmenu', (event) => event.preventDefault());

const root = document.querySelector<HTMLDivElement>('#ui-root');
if (!root) throw new Error('UI root was not found');

root.innerHTML = `
  <section class="boot-screen" aria-live="polite">
    <p class="eyebrow">PLAYCANVAS / DELIVERY TRIAL</p>
    <h1>出前<span>3D</span>ゲーム</h1>
    <div class="loading-line"><i></i></div>
    <p>街を仕込み中…</p>
  </section>
`;

void import('./game/Game').then(({ Game }) => {
  const canvas = document.querySelector<HTMLCanvasElement>('#game-canvas');
  if (!canvas) throw new Error('Game canvas was not found');
  const game = new Game(canvas, root);
  void game.start();
});
