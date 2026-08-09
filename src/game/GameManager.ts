import type { Application } from 'playcanvas';
import type { GameState } from './GameState';
import type { BikeController } from '../player/BikeController';
import type { FollowCamera } from './FollowCamera';
import type { City } from '../world/City';
import type { DeliveryManager } from '../delivery/DeliveryManager';
import type { UIManager } from '../ui/UIManager';
import type { CustomerFeedbackTone } from '../ui/UIManager';
import type { DeliveryReview, WorkReviewSummary } from '../ui/UIManager';
import type { AudioManager } from '../audio/AudioManager';
import { SaveStore, type SaveData } from '../storage/SaveStore';
import type { TrafficManager } from '../traffic/TrafficManager';

export class GameManager {
  private static readonly SHIFT_DELIVERIES = 10;
  state: GameState = 'TITLE';
  score = 0;
  deliveries = 0;
  remainingTime = 90;
  private previousState: GameState = 'TITLE';
  private message = '';
  private messageTimer = 0;
  private crashCooldown = 0;
  private countdownToken = 0;
  private foodIntegrity = 100;
  private crashCount = 0;
  private policeActive = false;
  private timeWarningPlayed = false;
  private deliveryElapsed = 0;
  private deliveryCrashStart = 0;
  private readonly deliveryHistory: DeliveryReview[] = [];
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
  setTimeForTest(value: number): void { this.remainingTime = value; this.timeWarningPlayed = false; }
  timeForTest(): number { return this.remainingTime; }
  crashForTest(): void { this.crashCooldown = 0; this.crash(); }
  policeCaughtForTest(): void { this.caughtByPolice(); }
  policeEscapedForTest(): void { this.escapedFromPolice(); }
  policeLightForTest(): string { return this.traffic.policeLightPhaseForTest(); }
  feedbackForTest(value: number): { lines: [string, string]; tone: CustomerFeedbackTone } { return this.customerFeedback(value); }
  async finishShiftForTest(): Promise<void> {
    this.deliveryHistory.length = 0; this.deliveries = GameManager.SHIFT_DELIVERIES;
    for (let index = 0; index < GameManager.SHIFT_DELIVERIES; index += 1) {
      const source = index % 4 === 0 ? 8 : 34 + index;
      this.deliveryHistory.push({ number: index + 1, foodName: ['黄金チャーハン', '麻婆豆腐', 'ラーメン'][index % 3], customerName: `テスト客${index + 1}`, seconds: source, timeLimit: 90, integrity: 96 - index * 2, crashes: index % 4 === 0 ? 1 : 0, reward: 150 - index * 3, tone: source < 15 ? 'excellent' : 'good' });
    }
    this.score = this.deliveryHistory.reduce((sum, item) => sum + item.reward, 0); await this.finishShift();
  }

  update(dt: number): void {
    if (this.bike.input.consume('Escape')) this.togglePause();
    if (this.state === 'PAUSED') return;
    const active = this.state === 'DELIVERY' || this.state === 'RETURN';
    this.bike.enabled = active;
    this.bike.update(dt);
    const trafficResult = this.traffic.update(dt, this.bike.entity.getPosition());
    if (trafficResult.policeCaught && active) this.caughtByPolice();
    else if (trafficResult.policeEscaped && active) this.escapedFromPolice();
    if (trafficResult.collision && active) this.crash();
    this.policeActive = this.traffic.isPoliceActive();
    this.camera.update(dt);
    this.audio.updateEngine(this.bike.speed, active);
    this.audio.updatePolice(dt, this.policeActive && active);
    this.messageTimer = Math.max(0, this.messageTimer - dt); if (this.messageTimer === 0) this.message = '';
    this.crashCooldown = Math.max(0, this.crashCooldown - dt);
    if (!active) return;
    if (this.state === 'DELIVERY') {
      this.deliveryElapsed += dt;
      this.remainingTime = Math.max(0, this.remainingTime - dt);
      if (this.remainingTime <= 15 && !this.timeWarningPlayed) { this.timeWarningPlayed = true; this.audio.timeWarning(); this.flash('残り15秒！', 1.2); }
    }
    const target = this.state === 'DELIVERY' ? this.delivery.destination : this.delivery.shop;
    const position = this.bike.entity.getPosition();
    if (Math.hypot(position.x - target.x, position.z - target.z) < 6.2) {
      if (this.state === 'DELIVERY') this.deliveryComplete(); else this.returnToShop();
    } else if (this.state === 'DELIVERY' && this.remainingTime <= 0) {
      void this.gameOver(); return;
    }
    this.ui.updateHud({ deliveries: this.deliveries, time: this.remainingTime, score: this.score, speed: this.bike.speed, boost: this.bike.boost, playerX: position.x, playerZ: position.z, heading: this.bike.heading, target, message: this.message, foodIntegrity: this.foodIntegrity, crashCount: this.crashCount, policeActive: this.policeActive });
  }

  addDrift(points: number): void { if (this.state !== 'DELIVERY' && this.state !== 'RETURN') return; this.score += points; this.flash(`DRIFT +${points}`, 1); this.audio.drift(); }
  spill(force: number): void {
    if (this.state !== 'DELIVERY') return;
    const vulnerability = 1.12 - this.delivery.currentOrder.spillResistance;
    this.foodIntegrity = Math.max(0, this.foodIntegrity - force * vulnerability * 15);
  }
  crash(): void {
    if (this.crashCooldown > 0 || (this.state !== 'DELIVERY' && this.state !== 'RETURN')) return;
    this.crashCooldown = 1;
    this.crashCount += 1;
    if (this.state === 'DELIVERY') this.foodIntegrity = Math.max(0, this.foodIntegrity - (1.12 - this.delivery.currentOrder.spillResistance) * 18);
    this.bike.autoRecover(2);
    this.remainingTime = Math.max(0, this.remainingTime - 3);
    this.camera.crashShake();
    if (this.crashCount >= 3 && !this.policeActive) {
      this.policeActive = true; this.traffic.summonPolice(this.bike.entity.getPosition()); this.audio.police();
      this.flash('🚨 3回衝突！警察が来た！', 2);
    } else this.flash(`CRASH! 衝突 ${this.crashCount}/3 −3秒`, 1.1);
    this.audio.crash();
  }

  private caughtByPolice(): void {
    if (!this.policeActive && !this.traffic.isPoliceActive()) return;
    this.remainingTime = Math.max(0, this.remainingTime - 20);
    this.policeActive = false; this.traffic.resetPolice(); this.bike.autoRecover(1.2); this.camera.crashShake();
    this.audio.policeCaught(); this.flash('🚓 捕まった！ TIME −20秒', 2);
  }

  private escapedFromPolice(): void {
    if (!this.policeActive && !this.traffic.isPoliceActive()) return;
    this.policeActive = false; this.traffic.resetPolice(); this.flash('警察を振り切った！ ペナルティなし', 2);
  }

  private showTitle(): void { this.countdownToken += 1; this.state = 'TITLE'; this.bike.stop(); this.audio.stopMusic(); this.city.setObjective(''); this.ui.showTitle(this.save, this.app.graphicsDevice.deviceType.toUpperCase()); }

  private startOrder(resetRun: boolean): void {
    this.audio.unlock();
    if (resetRun) { this.score = 0; this.deliveries = 0; this.remainingTime = 90; this.foodIntegrity = 100; this.crashCount = 0; this.policeActive = false; this.timeWarningPlayed = false; this.deliveryElapsed = 0; this.deliveryCrashStart = 0; this.deliveryHistory.length = 0; this.delivery.reset(); this.traffic.resetPolice(); this.bike.reset(); }
    const order = this.delivery.nextOrder(); this.audio.playMusic(this.deliveries); this.state = 'ORDER'; this.bike.stop(); this.city.setObjective(order.destinationId); this.audio.order(); this.ui.showOrder(order, this.delivery.destination);
  }

  private startCountdown(): void {
    this.state = 'COUNTDOWN'; this.remainingTime = this.delivery.currentOrder.timeLimit; this.deliveryElapsed = 0; this.deliveryCrashStart = this.crashCount; this.timeWarningPlayed = false; this.ui.showHud(); const token = ++this.countdownToken;
    [3, 2, 1, 0].forEach((value, index) => setTimeout(() => {
      if (token !== this.countdownToken) return;
      this.audio.countdown(value); this.ui.showCountdown(value === 0 ? 'GO!' : String(value));
      if (value === 0) { this.state = 'DELIVERY'; setTimeout(() => { if (token === this.countdownToken) this.ui.showCountdown(''); }, 650); }
    }, index * 720));
  }

  private deliveryComplete(): void {
    this.state = 'CUSTOMER'; this.bike.stop(); this.deliveries += 1;
    const deliveredIntegrity = Math.round(this.foodIntegrity);
    const feedback = this.customerFeedback(this.remainingTime);
    const earlyBonus = Math.max(0, Math.round(this.remainingTime / 9) * 10); const qualityReward = Math.round(this.delivery.currentOrder.reward * deliveredIntegrity / 100); const reward = qualityReward + earlyBonus;
    this.deliveryHistory.push({ number: this.deliveries, foodName: this.delivery.currentOrder.foodName, customerName: this.delivery.currentOrder.customerName, seconds: this.deliveryElapsed, timeLimit: this.delivery.currentOrder.timeLimit, integrity: deliveredIntegrity, crashes: this.crashCount - this.deliveryCrashStart, reward, tone: feedback.tone });
    this.score += reward; this.remainingTime = Math.min(99, this.remainingTime + 10); this.foodIntegrity = 100; this.timeWarningPlayed = this.remainingTime <= 15; this.audio.delivery(); this.flash(`配達完了！ 品質${deliveredIntegrity}% +${reward}`, 1.6); this.ui.showCustomerFeedback(feedback.lines, feedback.tone);
    setTimeout(() => {
      if (this.state !== 'CUSTOMER') return;
      if (this.deliveries >= GameManager.SHIFT_DELIVERIES) { void this.finishShift(); return; }
      this.state = 'RETURN'; this.city.setObjective('shop'); this.bike.enabled = true; this.flash('店に戻れ！', 1.4);
    }, 1800);
  }

  private customerFeedback(remainingTime: number): { lines: [string, string]; tone: CustomerFeedbackTone } {
    if (remainingTime >= 60) return { tone: 'excellent', lines: ['信じられない、もう届いたの！？', '最高の配達です！'] };
    if (remainingTime > 15) return { tone: 'good', lines: ['早く届けてくれてありがとう！', '温かいうちに食べられます。'] };
    if (remainingTime > 0) return { tone: 'strict', lines: ['間に合ったけど、かなりギリギリ。', '次はもう少し早くお願いします。'] };
    return { tone: 'angry', lines: ['遅い！ずっと待っていました！', '料理も冷めてしまいます！'] };
  }

  private returnToShop(): void {
    this.state = 'CUSTOMER'; this.bike.stop(); this.score += 100; this.bike.boost = Math.min(100, this.bike.boost + 25); this.audio.delivery(); this.flash('店に到着！ RETURN +100', 1.3);
    setTimeout(() => { if (this.state === 'CUSTOMER') { this.foodIntegrity = 100; this.startOrder(false); } }, 1000);
  }

  private async gameOver(): Promise<void> {
    if (this.state === 'RESULT') return; this.state = 'RESULT'; this.bike.stop(); this.audio.stopMusic(); this.audio.timeUp(); this.countdownToken += 1;
    const isRecord = this.score > this.save.bestScore;
    this.save.bestScore = Math.max(this.save.bestScore, this.score); this.save.bestTime = Math.max(this.save.bestTime, this.remainingTime); this.save.totalDeliveries += this.deliveries;
    await this.store.save(this.save); this.ui.showResult(this.score, this.deliveries, isRecord);
  }

  private async finishShift(): Promise<void> {
    this.state = 'RESULT'; this.bike.stop(); this.audio.stopMusic(); this.city.setObjective(''); this.countdownToken += 1;
    const summary = this.calculateWorkReview();
    this.save.bestScore = Math.max(this.save.bestScore, this.score); this.save.totalDeliveries += this.deliveries;
    await this.store.save(this.save); this.ui.showWorkReview(this.deliveryHistory, summary);
  }

  private calculateWorkReview(): WorkReviewSummary {
    const count = Math.max(1, this.deliveryHistory.length);
    const averageIntegrity = Math.round(this.deliveryHistory.reduce((sum, item) => sum + item.integrity, 0) / count);
    const onTimeCount = this.deliveryHistory.filter((item) => item.seconds <= item.timeLimit).length;
    const totalCrashes = this.deliveryHistory.reduce((sum, item) => sum + item.crashes, 0);
    const totalReward = this.deliveryHistory.reduce((sum, item) => sum + item.reward, 0);
    const averageTimeRatio = this.deliveryHistory.reduce((sum, item) => sum + Math.min(1.5, item.seconds / item.timeLimit), 0) / count;
    const speedScore = Math.max(0, 100 - averageTimeRatio * 65);
    const performance = Math.round(Math.max(0, Math.min(100, averageIntegrity * .45 + (onTimeCount / count * 100) * .35 + speedScore * .2 - totalCrashes * 1.5)));
    const rank = performance >= 90 ? 'S' : performance >= 78 ? 'A' : performance >= 65 ? 'B' : performance >= 50 ? 'C' : 'D';
    const dailyWage = Math.round((7000 + performance * 90 + totalReward * .35) / 100) * 100;
    const ownerLines: [string, string] = rank === 'S' ? ['見事だ。速さも料理の扱いも一流だった。', `今日の日給は¥${dailyWage.toLocaleString()}だ。また頼むぞ。`] : rank === 'A' ? ['よく走ったな。十分に店の看板を背負えている。', `今日の日給は¥${dailyWage.toLocaleString()}だ。この調子だ。`] : rank === 'B' ? ['悪くない働きだ。だが、まだ雑な配達があるな。', `今日の日給は¥${dailyWage.toLocaleString()}だ。次は上を狙え。`] : rank === 'C' ? ['十件完走は認める。だが時間と料理をもっと大事にしろ。', `今日の日給は¥${dailyWage.toLocaleString()}だ。次は丁寧にな。`] : ['これは店の評判に関わるぞ。基本からやり直しだ。', `今日の日給は¥${dailyWage.toLocaleString()}だ。次こそ見せてみろ。`];
    return { rank, performance, dailyWage, averageIntegrity, onTimeCount, totalCrashes, totalReward, ownerLines };
  }

  private togglePause(): void {
    if (this.state === 'TITLE' || this.state === 'ORDER' || this.state === 'RESULT' || this.state === 'COUNTDOWN') return;
    if (this.state === 'PAUSED') { this.state = this.previousState; this.audio.resumeMusic(); this.ui.showPause(false); }
    else { this.previousState = this.state; this.state = 'PAUSED'; this.bike.enabled = false; this.audio.pauseMusic(); this.ui.showPause(true); }
  }

  private flash(message: string, seconds: number): void { this.message = message; this.messageTimer = seconds; }
}
