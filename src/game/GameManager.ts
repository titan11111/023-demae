import type { Application } from 'playcanvas';
import type { GameState } from './GameState';
import type { BikeController } from '../player/BikeController';
import type { FollowCamera } from './FollowCamera';
import type { City } from '../world/City';
import type { DeliveryManager } from '../delivery/DeliveryManager';
import type { UIManager } from '../ui/UIManager';
import type { AudioManager } from '../audio/AudioManager';
import { SaveStore, type SaveData } from '../storage/SaveStore';
import type { TrafficManager } from '../traffic/TrafficManager';

export class GameManager {
  state: GameState = 'TITLE';
  score = 0;
  deliveries = 0;
  remainingTime = 90;
  private previousState: GameState = 'TITLE';
  private message = '';
  private messageTimer = 0;
  private crashCooldown = 0;
  private countdownToken = 0;
  private save: SaveData = { bestScore: 0, bestTime: 0, totalDeliveries: 0, bikeLevel: 1 };
  private readonly store = new SaveStore();

  constructor(
    private readonly app: Application,
    private readonly bike: BikeController,
    private readonly camera: FollowCamera,
    private readonly city: City,
    private readonly delivery: DeliveryManager,
    private readonly ui: UIManager,
    private readonly audio: AudioManager,
    private readonly traffic: TrafficManager,
  ) {
    ui.onStart = () => this.startOrder(true);
    ui.onDepart = () => this.startCountdown();
    ui.onRetry = () => this.startOrder(true);
    ui.onMenu = () => this.showTitle();
  }

  async initialize(): Promise<void> { this.save = await this.store.load(); this.showTitle(); }

  expireForTest(): void { this.remainingTime = 0; }

  update(dt: number): void {
    if (this.bike.input.consume('Escape')) this.togglePause();
    if (this.state === 'PAUSED') return;
    const active = this.state === 'DELIVERY' || this.state === 'RETURN';
    this.bike.enabled = active;
    this.bike.update(dt);
    if (this.traffic.update(dt, this.bike.entity.getPosition()) && active) this.crash();
    this.camera.update(dt);
    this.audio.updateEngine(this.bike.speed, active);
    this.messageTimer = Math.max(0, this.messageTimer - dt); if (this.messageTimer === 0) this.message = '';
    this.crashCooldown = Math.max(0, this.crashCooldown - dt);
    if (!active) return;
    this.remainingTime = Math.max(0, this.remainingTime - dt);
    if (this.remainingTime <= 0) { void this.gameOver(); return; }
    const target = this.state === 'DELIVERY' ? this.delivery.destination : this.delivery.shop;
    const position = this.bike.entity.getPosition();
    if (Math.hypot(position.x - target.x, position.z - target.z) < 6.2) {
      if (this.state === 'DELIVERY') this.deliveryComplete(); else this.returnToShop();
    }
    this.ui.updateHud({ deliveries: this.deliveries, time: this.remainingTime, score: this.score, speed: this.bike.speed, boost: this.bike.boost, playerX: position.x, playerZ: position.z, heading: this.bike.heading, target, message: this.message });
  }

  addDrift(points: number): void { if (this.state !== 'DELIVERY' && this.state !== 'RETURN') return; this.score += points; this.flash(`DRIFT +${points}`, 1); this.audio.drift(); }
  crash(): void {
    if (this.crashCooldown > 0 || (this.state !== 'DELIVERY' && this.state !== 'RETURN')) return;
    this.crashCooldown = 1;
    this.bike.autoRecover(2);
    this.remainingTime = Math.max(0, this.remainingTime - 3);
    this.camera.crashShake();
    this.flash('CRASH! 2m手前から再開 −3秒', 1.1);
    this.audio.crash();
  }

  private showTitle(): void { this.countdownToken += 1; this.state = 'TITLE'; this.bike.stop(); this.city.setObjective(''); this.ui.showTitle(this.save, this.app.graphicsDevice.deviceType.toUpperCase()); }

  private startOrder(resetRun: boolean): void {
    this.audio.unlock();
    if (resetRun) { this.score = 0; this.deliveries = 0; this.remainingTime = 90; this.bike.reset(); }
    const order = this.delivery.nextOrder(); this.state = 'ORDER'; this.bike.stop(); this.city.setObjective(order.destinationId); this.audio.order(); this.ui.showOrder(order, this.delivery.destination);
  }

  private startCountdown(): void {
    this.state = 'COUNTDOWN'; this.ui.showHud(); const token = ++this.countdownToken;
    [3, 2, 1, 0].forEach((value, index) => setTimeout(() => {
      if (token !== this.countdownToken) return;
      this.audio.countdown(value); this.ui.showCountdown(value === 0 ? 'GO!' : String(value));
      if (value === 0) { this.state = 'DELIVERY'; setTimeout(() => { if (token === this.countdownToken) this.ui.showCountdown(''); }, 650); }
    }, index * 720));
  }

  private deliveryComplete(): void {
    this.state = 'CUSTOMER'; this.bike.stop(); this.deliveries += 1;
    const earlyBonus = Math.max(0, Math.round(this.remainingTime / 9) * 10); const reward = this.delivery.currentOrder.reward + earlyBonus;
    this.score += reward; this.remainingTime = Math.min(99, this.remainingTime + 10); this.audio.delivery(); this.flash(`配達完了！ +${reward} / TIME +10`, 1.6);
    setTimeout(() => {
      if (this.state !== 'CUSTOMER') return; this.state = 'RETURN'; this.city.setObjective('shop'); this.bike.enabled = true; this.flash('店に戻れ！', 1.4);
    }, 900);
  }

  private returnToShop(): void {
    this.state = 'CUSTOMER'; this.bike.stop(); this.score += 100; this.bike.boost = Math.min(100, this.bike.boost + 25); this.audio.delivery(); this.flash('店に到着！ RETURN +100', 1.3);
    setTimeout(() => { if (this.state === 'CUSTOMER') this.startOrder(false); }, 1000);
  }

  private async gameOver(): Promise<void> {
    if (this.state === 'RESULT') return; this.state = 'RESULT'; this.bike.stop(); this.audio.timeUp(); this.countdownToken += 1;
    const isRecord = this.score > this.save.bestScore;
    this.save.bestScore = Math.max(this.save.bestScore, this.score); this.save.bestTime = Math.max(this.save.bestTime, this.remainingTime); this.save.totalDeliveries += this.deliveries;
    await this.store.save(this.save); this.ui.showResult(this.score, this.deliveries, isRecord);
  }

  private togglePause(): void {
    if (this.state === 'TITLE' || this.state === 'ORDER' || this.state === 'RESULT' || this.state === 'COUNTDOWN') return;
    if (this.state === 'PAUSED') { this.state = this.previousState; this.ui.showPause(false); }
    else { this.previousState = this.state; this.state = 'PAUSED'; this.bike.enabled = false; this.ui.showPause(true); }
  }

  private flash(message: string, seconds: number): void { this.message = message; this.messageTimer = seconds; }
}
