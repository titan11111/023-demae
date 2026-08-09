import type { LocationData } from '../data/locations';
import type { Order } from '../data/orders';
import type { SaveData } from '../storage/SaveStore';

export interface HudData {
  deliveries: number; time: number; score: number; speed: number; boost: number;
  playerX: number; playerZ: number; heading: number; target: LocationData; message: string;
  foodIntegrity: number; crashCount: number; policeActive: boolean;
}

export type CustomerFeedbackTone = 'excellent' | 'good' | 'strict' | 'angry';

export interface DeliveryReview {
  number: number; foodName: string; customerName: string; seconds: number;
  timeLimit: number; integrity: number; crashes: number; reward: number; tone: CustomerFeedbackTone;
}

export interface WorkReviewSummary {
  rank: string; performance: number; dailyWage: number; averageIntegrity: number;
  onTimeCount: number; totalCrashes: number; totalReward: number; ownerLines: [string, string];
}

export class UIManager {
  private minimap: HTMLCanvasElement | null = null;
  private lastDomUpdate = 0;
  onStart = (): void => {};
  onDepart = (): void => {};
  onRetry = (): void => {};
  onMenu = (): void => {};

  constructor(private readonly root: HTMLDivElement) {}

  showTitle(save: SaveData, renderer: string): void {
    this.root.innerHTML = `
      <section class="title-screen screen active">
        <div class="title-stripes"></div>
        <div class="title-copy">
          <p class="eyebrow">爆速飯店 PRESENTS</p>
          <h1><small>街を喰らえ。</small>出前<span>3D</span><br>ゲーム</h1>
          <p class="tagline">最速で、熱々のまま届けろ。</p>
          <button id="start-button" class="arcade-button">暖簾をくぐる <b>START</b></button>
          <div class="records"><span>BEST SCORE <b>${save.bestScore.toLocaleString()}</b></span><span>TOTAL DELIVERY <b>${save.totalDeliveries}件</b></span></div>
          <p class="renderer">RENDERER: ${renderer}</p>
        </div>
        <aside class="controls-card"><b>乗り方</b><span>WASD / 矢印　運転</span><span>SPACE　ドリフト</span><span>SHIFT　ブースト</span><span>R　復帰 / ESC　ポーズ</span></aside>
      </section>`;
    this.button('start-button', () => this.onStart());
  }

  showOrder(order: Order, destination: LocationData): void {
    this.root.innerHTML = `
      <section class="order-screen screen active">
        <article class="order-ticket">
          <header><span>注文票</span><strong>NEW ORDER!</strong><i>No.${String(order.id).padStart(3, '0')}</i></header>
          <div class="food-icon">🥡<em>湯気まで届けろ</em></div>
          <p class="label">ご注文</p><h2>${order.foodName}</h2>
          <dl><div><dt>お届け先</dt><dd>${order.customerName} 様</dd></div><div><dt>住所</dt><dd>${destination.address}</dd></div><div><dt>こぼれやすさ</dt><dd>${order.spillLabel}</dd></div><div><dt>制限時間</dt><dd class="red">01:30</dd></div></dl>
          <button id="depart-button" class="arcade-button">出発する <b>GO!</b></button>
        </article>
      </section>`;
    this.button('depart-button', () => this.onDepart());
  }

  showHud(): void {
    this.root.innerHTML = `
      <style id="mobile-hud-layout-fix">
        @media (pointer: coarse), (max-width: 900px) {
          .hud .objective {
            top: auto !important;
            bottom: max(18px, env(safe-area-inset-bottom)) !important;
            left: 50% !important;
            z-index: 8;
            min-width: 120px;
            padding: 3px 10px 5px;
            background: rgba(16, 13, 10, .82);
            border-bottom: 3px solid var(--yellow);
            border-radius: 8px;
          }
          .hud .objective span { font-size: 24px; line-height: 1; }
          .hud .objective b { background: transparent; padding: 0 6px; }
          .hud .objective em { font-size: 19px; line-height: 1; }
          .hud .minimap-frame {
            bottom: max(112px, calc(env(safe-area-inset-bottom) + 96px)) !important;
          }
          .hud .speedometer {
            bottom: max(122px, calc(env(safe-area-inset-bottom) + 106px)) !important;
          }
          .hud .control-hint { display: none !important; }
        }
        @media (pointer: coarse) and (max-height: 520px) {
          .hud .minimap-frame {
            left: max(14px, env(safe-area-inset-left)) !important;
            bottom: max(106px, calc(env(safe-area-inset-bottom) + 92px)) !important;
            transform: rotate(-1deg) scale(.86);
            transform-origin: bottom left;
          }
          .hud .speedometer {
            right: max(14px, env(safe-area-inset-right)) !important;
            bottom: max(112px, calc(env(safe-area-inset-bottom) + 98px)) !important;
            transform: skewX(-4deg) scale(.88);
            transform-origin: bottom right;
          }
          .hud .objective {
            bottom: max(10px, env(safe-area-inset-bottom)) !important;
          }
        }
      </style>
      <section class="hud active">
        <div class="hud-top"><div><small>DELIVERY</small><b id="deliveries">0</b><i>件</i></div><div class="timer"><small>TIME LEFT</small><b id="time">01:30</b></div><div class="score"><small>SCORE</small><b id="score">0</b></div></div>
        <div id="objective" class="objective"><span class="direction-arrow" aria-hidden="true"></span><b>目的地</b><em>0m</em></div>
        <div id="flash-message" class="flash-message"></div>
        <div class="minimap-frame"><label>爆速 NAVI</label><canvas id="minimap" width="220" height="220"></canvas></div>
        <div class="speedometer"><div class="speed-ring"><b id="speed">0</b><small>km/h</small></div><label>BOOST</label><div class="boost-track"><i id="boost"></i></div><kbd>SHIFT</kbd></div>
        <div class="delivery-status"><small>料理の状態</small><b id="food-integrity">100%</b><span id="police-status">衝突 0/3</span></div>
        <div class="control-hint">WASD 操作　SPACE ドリフト　SHIFT ブースト　R 復帰</div>
        <div id="virtual-controls" aria-label="タッチ操作">
          <div class="mobile-steer"><button type="button" data-input="ArrowLeft" aria-label="左へ曲がる">◀</button><button type="button" data-input="ArrowRight" aria-label="右へ曲がる">▶</button></div>
          <div class="mobile-actions"><button type="button" data-input="Space" class="drift-button">DRIFT</button><button type="button" data-input="ShiftLeft" class="boost-button">BOOST</button><button type="button" data-input="ArrowDown" class="back-button">BACK</button><button type="button" data-input="ArrowUp" class="gas-button">GO</button></div>
        </div>
      </section>`;
    this.minimap = this.root.querySelector('#minimap');
  }

  updateHud(data: HudData): void {
    const now = performance.now();
    if (now - this.lastDomUpdate > 50) {
      this.text('deliveries', `${data.deliveries}/10`); this.text('time', this.formatTime(data.time));
      this.text('score', data.score.toLocaleString()); this.text('speed', String(Math.round(data.speed)));
      this.text('food-integrity', `${Math.round(data.foodIntegrity)}%`);
      this.text('police-status', data.policeActive ? '🚨 警察追跡中' : `衝突 ${data.crashCount}/3`);
      const boost = this.root.querySelector<HTMLElement>('#boost'); if (boost) boost.style.width = `${data.boost}%`;
      const dx = data.target.x - data.playerX; const dz = data.target.z - data.playerZ;
      const objective = this.root.querySelector<HTMLElement>('#objective');
      if (objective) {
        objective.querySelector('b')!.textContent = data.target.label;
        objective.querySelector('em')!.textContent = `${Math.round(Math.hypot(dx, dz))}m`;
        const arrow = objective.querySelector<HTMLElement>('span');
        if (arrow) arrow.style.transform = `rotate(${Math.atan2(dx, dz) - data.heading}rad)`;
      }
      const flash = this.root.querySelector<HTMLElement>('#flash-message');
      if (flash) { flash.textContent = data.message; flash.classList.toggle('show', Boolean(data.message)); }
      this.lastDomUpdate = now;
    }
    this.drawMap(data);
  }

  showCountdown(value: string): void {
    let overlay = this.root.querySelector<HTMLElement>('.countdown');
    if (!overlay) { overlay = document.createElement('div'); overlay.className = 'countdown'; this.root.appendChild(overlay); }
    overlay.textContent = value; overlay.classList.remove('pop'); void overlay.offsetWidth; overlay.classList.add('pop');
    if (value === '') overlay.remove();
  }

  showCustomerFeedback(lines: [string, string], tone: CustomerFeedbackTone): void {
    this.root.querySelector('.customer-feedback')?.remove();
    const feedback = document.createElement('div');
    feedback.className = `customer-feedback ${tone}`;
    const label = document.createElement('small'); label.textContent = 'お客さん';
    const message = document.createElement('b');
    message.append(document.createTextNode(lines[0]), document.createElement('br'), document.createTextNode(lines[1]));
    feedback.append(label, message); this.root.appendChild(feedback);
    setTimeout(() => { if (feedback.isConnected) feedback.classList.add('leaving'); }, 9500);
    setTimeout(() => feedback.remove(), 10000);
  }

  showResult(score: number, deliveries: number, isRecord: boolean): void {
    this.root.innerHTML = `
      <section class="result-screen screen active"><article class="result-card">
        <p class="eyebrow">CLOSED / 本日の成績</p><h2>${isRecord ? 'NEW RECORD!' : 'TIME UP!'}</h2>
        <div class="result-number"><small>配達完了</small><b>${deliveries}</b><i>件</i></div>
        <div class="total-score"><small>TOTAL SCORE</small><b>${score.toLocaleString()}</b></div>
        <div class="result-actions"><button id="retry-button" class="arcade-button">もう一丁 <b>RETRY</b></button><button id="menu-button" class="sub-button">店じまい</button></div>
      </article></section>`;
    this.button('retry-button', () => this.onRetry()); this.button('menu-button', () => this.onMenu());
  }

  showWorkReview(history: DeliveryReview[], summary: WorkReviewSummary): void {
    const rows = history.map((item) => `<tr><td>${item.number}</td><td>${item.foodName}<small>${item.customerName} 様</small></td><td>${item.seconds.toFixed(1)}秒<small>${item.seconds <= item.timeLimit ? '時間内' : '時間超過'}</small></td><td>${item.integrity}%</td><td>${item.crashes}</td><td>¥${item.reward.toLocaleString()}</td></tr>`).join('');
    this.root.innerHTML = `<section class="work-review screen active"><article class="review-board">
      <header><div><small>爆速飯店・本日の勤務評定</small><h2>配達レビュー <b>${summary.rank}</b></h2></div><div class="daily-wage"><small>本日の日給</small><strong>¥${summary.dailyWage.toLocaleString()}</strong></div></header>
      <div class="owner-comment"><span>店主</span><p>${summary.ownerLines[0]}<br>${summary.ownerLines[1]}</p></div>
      <div class="review-summary"><span>総合点 <b>${summary.performance}</b></span><span>時間厳守 <b>${summary.onTimeCount}/10</b></span><span>平均品質 <b>${summary.averageIntegrity}%</b></span><span>衝突 <b>${summary.totalCrashes}回</b></span><span>配達報酬 <b>¥${summary.totalReward.toLocaleString()}</b></span></div>
      <div class="review-table-wrap"><table><thead><tr><th>No.</th><th>配達商品</th><th>所要時間</th><th>品質</th><th>衝突</th><th>報酬</th></tr></thead><tbody>${rows}</tbody></table></div>
      <div class="result-actions"><button id="retry-button" class="arcade-button">もう一日働く <b>RETRY</b></button><button id="menu-button" class="sub-button">店じまい</button></div>
    </article></section>`;
    this.button('retry-button', () => this.onRetry()); this.button('menu-button', () => this.onMenu());
  }

  showPause(show: boolean): void {
    const existing = this.root.querySelector('.pause-screen');
    if (!show) { existing?.remove(); return; }
    if (!existing) this.root.insertAdjacentHTML('beforeend', '<div class="pause-screen"><small>ひと休み</small><b>PAUSED</b><span>ESCで再開</span></div>');
  }

  private drawMap(data: HudData): void {
    if (!this.minimap) return; const ctx = this.minimap.getContext('2d'); if (!ctx) return;
    const map = (value: number) => (value + 190) / 380 * 220;
    ctx.clearRect(0, 0, 220, 220); ctx.fillStyle = '#283a2d'; ctx.fillRect(0, 0, 220, 220);
    ctx.fillStyle = '#4a4e50'; ctx.fillRect(map(-12), 0, map(12) - map(-12), 220); ctx.fillRect(0, map(-12), 220, map(12) - map(-12));
    ctx.strokeStyle = '#efcd45'; ctx.lineWidth = 2; ctx.setLineDash([6, 5]); ctx.beginPath(); ctx.moveTo(map(data.playerX), map(data.playerZ)); ctx.lineTo(map(data.target.x), map(data.target.z)); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = '#ffdc38'; ctx.beginPath(); ctx.arc(map(data.target.x), map(data.target.z), 7, 0, Math.PI * 2); ctx.fill();
    const dx = data.target.x - data.playerX; const dz = data.target.z - data.playerZ;
    ctx.save(); ctx.translate(map(data.playerX), map(data.playerZ)); ctx.rotate(Math.atan2(dx, -dz)); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(0, -10); ctx.lineTo(-6, 7); ctx.lineTo(6, 7); ctx.closePath(); ctx.fill(); ctx.restore();
  }

  private formatTime(value: number): string { const safe = Math.max(0, value); return `${String(Math.floor(safe / 60)).padStart(2, '0')}:${String(Math.floor(safe % 60)).padStart(2, '0')}`; }
  private text(id: string, value: string): void { const element = this.root.querySelector(`#${id}`); if (element) element.textContent = value; }
  private button(id: string, action: () => void): void { this.root.querySelector(`#${id}`)?.addEventListener('click', action); }
}
