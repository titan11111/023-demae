import type { SkyPeriod } from '../world/SkyEnvironment';
import morningRushUrl from '../../Morning Rush.mp3?url';
import morningDeliveryUrl from '../../朝焼けデリバリー.mp3?url';
import goldenHourRushUrl from '../../Golden Hour Rush.mp3?url';
import goldenRoadRushUrl from '../../黄金街道ラッシュ.mp3?url';
import neonLastRunUrl from '../../ネオン街の最終便.mp3?url';
import neonLastRunAlternateUrl from '../../ネオン街の最終便 (1).mp3?url';

export class AudioManager {
  private context: AudioContext | null = null;
  private engine: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private lastBoost = 0;
  private policePulseTimer = 0;
  private policePulseHigh = false;
  private readonly music = new Audio();
  private musicTracks: string[] = [];
  private selectedMusic = -1;
  private musicPausedByGame = false;

  constructor() {
    this.music.loop = true; this.music.preload = 'auto'; this.music.volume = .24;
    const unlock = () => this.unlock();
    document.addEventListener('pointerdown', unlock, { once: true });
    document.addEventListener('keydown', unlock, { once: true });
  }

  configureMusic(period: SkyPeriod): void {
    this.musicTracks = period === 'morning'
      ? [morningRushUrl, morningDeliveryUrl]
      : period === 'evening'
        ? [goldenHourRushUrl, goldenRoadRushUrl]
        : [neonLastRunUrl, neonLastRunAlternateUrl];
  }

  playMusic(orderIndex: number): void {
    if (this.musicTracks.length === 0) return;
    const selection = orderIndex % this.musicTracks.length;
    if (selection !== this.selectedMusic) {
      this.selectedMusic = selection; this.music.src = this.musicTracks[selection]; this.music.currentTime = 0;
    }
    this.musicPausedByGame = false;
    void this.music.play().catch(() => undefined);
  }

  pauseMusic(): void { this.musicPausedByGame = true; this.music.pause(); }
  resumeMusic(): void { if (this.musicPausedByGame) { this.musicPausedByGame = false; void this.music.play().catch(() => undefined); } }
  stopMusic(): void { this.musicPausedByGame = false; this.music.pause(); this.music.currentTime = 0; }
  musicTrackForTest(): string { return decodeURIComponent(this.music.src.split('/').pop() ?? ''); }

  unlock(): void {
    if (!this.context) this.context = new AudioContext();
    void this.context.resume();
    if (!this.engine) this.startEngine();
  }

  updateEngine(speed: number, active: boolean): void {
    if (!this.context || !this.engine || !this.engineGain) return;
    const travelSpeed = Math.abs(speed);
    this.engine.frequency.setTargetAtTime(65 + travelSpeed * 2.1, this.context.currentTime, .04);
    this.engineGain.gain.setTargetAtTime(active ? .025 + travelSpeed * .00035 : .008, this.context.currentTime, .08);
  }

  updatePolice(dt: number, active: boolean): void {
    if (!active) { this.policePulseTimer = 0; this.policePulseHigh = false; return; }
    this.policePulseTimer -= dt;
    if (this.policePulseTimer > 0) return;
    this.policePulseHigh = !this.policePulseHigh;
    this.tone(this.policePulseHigh ? 940 : 700, .12, 'square', .06);
    this.policePulseTimer = .27;
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
  timeWarning(): void { [0, 1, 2].forEach((index) => setTimeout(() => this.tone(920, .1, 'square', .1), index * 145)); }
  police(): void { [0, 1, 2, 3].forEach((index) => setTimeout(() => this.tone(index % 2 ? 660 : 880, .18, 'square', .075), index * 175)); }
  policeCaught(): void { [180, 120].forEach((frequency, index) => setTimeout(() => this.tone(frequency, .32, 'sawtooth', .1), index * 180)); }

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
