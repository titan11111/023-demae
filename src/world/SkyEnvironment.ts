export type SkyPeriod = 'morning' | 'evening' | 'night';

export class SkyEnvironment {
  readonly period: SkyPeriod;
  private readonly root: HTMLElement;
  private motionX = 0;
  private motionY = 0;
  private lastHeading = 0;

  constructor() {
    const root = document.querySelector<HTMLElement>('#sky-environment');
    if (!root) throw new Error('Sky environment was not found');
    this.root = root;
    this.period = this.getPeriod(new Date().getHours());
    this.root.dataset.period = this.period;
  }

  update(heading: number, speed: number, dt: number): void {
    let turn = heading - this.lastHeading;
    if (turn > Math.PI) turn -= Math.PI * 2;
    if (turn < -Math.PI) turn += Math.PI * 2;
    this.lastHeading = heading;

    const responsiveness = Math.min(1, dt * 4.5);
    const targetX = -heading * 72 - turn * 150;
    const targetY = Math.min(16, speed * .08);
    this.motionX += (targetX - this.motionX) * responsiveness;
    this.motionY += (targetY - this.motionY) * responsiveness;
    const speedLift = Math.min(8, speed / 13);
    this.root.style.setProperty('--sky-base-x', `${(this.motionX * .08).toFixed(2)}px`);
    this.root.style.setProperty('--sky-base-y', `${(this.motionY * -.08).toFixed(2)}px`);
    this.root.style.setProperty('--sky-sun-x', `${(this.motionX * .16).toFixed(2)}px`);
    this.root.style.setProperty('--sky-sun-y', `${(this.motionY * -.14).toFixed(2)}px`);
    this.root.style.setProperty('--sky-far-x', `${(this.motionX * .34).toFixed(2)}px`);
    this.root.style.setProperty('--sky-far-y', `${(this.motionY * -.32).toFixed(2)}px`);
    this.root.style.setProperty('--sky-near-x', `${(this.motionX * .68).toFixed(2)}px`);
    this.root.style.setProperty('--sky-near-y', `${(this.motionY * -.62 - speedLift).toFixed(2)}px`);
  }

  private getPeriod(hour: number): SkyPeriod {
    if (hour >= 5 && hour < 16) return 'morning';
    if (hour >= 16 && hour < 19) return 'evening';
    return 'night';
  }
}
