export class AudioManager {
  private context: AudioContext | null = null;
  private engine: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private lastBoost = 0;

  constructor() {
    const unlock = () => this.unlock();
    document.addEventListener('pointerdown', unlock, { once: true });
    document.addEventListener('keydown', unlock, { once: true });
  }

  unlock(): void {
    if (!this.context) this.context = new AudioContext();
    void this.context.resume();
    if (!this.engine) this.startEngine();
  }

  updateEngine(speed: number, active: boolean): void {
    if (!this.context || !this.engine || !this.engineGain) return;
    this.engine.frequency.setTargetAtTime(65 + speed * 2.1, this.context.currentTime, .04);
    this.engineGain.gain.setTargetAtTime(active ? .025 + speed * .00035 : .008, this.context.currentTime, .08);
  }

  countdown(value: number): void { this.tone(value === 0 ? 680 : 330 + value * 35, value === 0 ? .32 : .14, 'square', .09); }
  order(): void { this.tone(520, .12, 'square', .07); setTimeout(() => this.tone(720, .16, 'square', .06), 100); }
  delivery(): void { [440, 660, 880].forEach((frequency, i) => setTimeout(() => this.tone(frequency, .2, 'triangle', .08), i * 90)); }
  crash(): void { this.tone(70, .22, 'sawtooth', .13); }
  drift(): void { this.tone(170, .16, 'sawtooth', .045); }
  boost(): void {
    const now = performance.now(); if (now - this.lastBoost < 700) return; this.lastBoost = now;
    this.tone(220, .28, 'sawtooth', .045);
  }
  timeUp(): void { this.tone(110, .65, 'square', .1); }

  private startEngine(): void {
    if (!this.context) return;
    this.engine = this.context.createOscillator();
    this.engineGain = this.context.createGain();
    this.engine.type = 'sawtooth'; this.engine.frequency.value = 65; this.engineGain.gain.value = .008;
    this.engine.connect(this.engineGain).connect(this.context.destination); this.engine.start();
  }

  private tone(frequency: number, duration: number, type: OscillatorType, volume: number): void {
    if (!this.context) return;
    const oscillator = this.context.createOscillator(); const gain = this.context.createGain();
    oscillator.frequency.value = frequency; oscillator.type = type;
    gain.gain.setValueAtTime(volume, this.context.currentTime); gain.gain.exponentialRampToValueAtTime(.0001, this.context.currentTime + duration);
    oscillator.connect(gain).connect(this.context.destination); oscillator.start(); oscillator.stop(this.context.currentTime + duration);
  }
}
