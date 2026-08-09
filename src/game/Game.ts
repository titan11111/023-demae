import { Color, Entity, type Application } from 'playcanvas';
import { City } from '../world/City';
import { BikeController } from '../player/BikeController';
import { FollowCamera } from './FollowCamera';
import { DeliveryManager } from '../delivery/DeliveryManager';
import { UIManager } from '../ui/UIManager';
import { AudioManager } from '../audio/AudioManager';
import { GameManager } from './GameManager';
import { TrafficManager } from '../traffic/TrafficManager';
import { SkyEnvironment, type SkyPeriod } from '../world/SkyEnvironment';
import { WeatherEffects } from '../effects/WeatherEffects';

export class Game {
  private app: Application | null = null;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly uiRoot: HTMLDivElement,
  ) {}

  async start(): Promise<void> {
    const { createApplication } = await import('./createApplication');
    this.app = await createApplication(this.canvas);
    const city = new City(this.app);
    const sky = new SkyEnvironment();
    this.createLighting(this.app, sky.period);
    const ui = new UIManager(this.uiRoot);
    const audio = new AudioManager();
    audio.configureMusic(sky.period);
    let manager: GameManager;
    let weather: WeatherEffects;
    const bike = new BikeController(this.app, city, {
      onDrift: (points) => manager.addDrift(points),
      onCrash: () => manager.crash(),
      onBoost: () => audio.boost(),
      onSpill: (force) => { manager.spill(force); weather.spill(force); },
    });
    const camera = new FollowCamera(this.app, bike, sky);
    weather = new WeatherEffects(this.app, bike, sky.period);
    manager = new GameManager(this.app, bike, camera, city, new DeliveryManager(), ui, audio, new TrafficManager(this.app));
    await manager.initialize();
    if (import.meta.env.DEV) {
      (window as typeof window & { __DEMAE_TEST__?: { teleport: (x: number, z: number) => void; face: (heading: number) => void; setTime: (value: number) => void; time: () => number; musicTrack: () => string; crash: () => void; policeCaught: () => void; policeEscaped: () => void; policeLight: () => string; brokenCount: () => number; feedback: (value: number) => { lines: [string, string]; tone: string }; finishShift: () => Promise<void>; expire: () => void } }).__DEMAE_TEST__ = {
        teleport: (x, z) => bike.entity.setPosition(x, .55, z),
        face: (heading) => { bike.heading = heading; bike.speed = 0; },
        setTime: (value) => manager.setTimeForTest(value),
        time: () => manager.timeForTest(),
        musicTrack: () => audio.musicTrackForTest(),
        crash: () => manager.crashForTest(),
        policeCaught: () => manager.policeCaughtForTest(),
        policeEscaped: () => manager.policeEscapedForTest(),
        policeLight: () => manager.policeLightForTest(),
        brokenCount: () => city.getBrokenCount(),
        feedback: (value) => manager.feedbackForTest(value),
        finishShift: () => manager.finishShiftForTest(),
        expire: () => manager.expireForTest(),
      };
    }
    this.app.on('update', (dt: number) => {
      const frameTime = Math.min(dt, .05); manager.update(frameTime);
      weather.update(frameTime, manager.state === 'DELIVERY' || manager.state === 'RETURN');
    });
  }

  private createLighting(app: Application, period: SkyPeriod): void {
    const palette = period === 'night'
      ? { ambient: new Color(.1, .13, .25), sun: new Color(.42, .55, .88), intensity: .46, angle: [32, -48, 0] }
      : period === 'evening'
        ? { ambient: new Color(.42, .28, .31), sun: new Color(1, .48, .24), intensity: .92, angle: [18, -62, 0] }
        : { ambient: new Color(.46, .5, .58), sun: new Color(1, .88, .72), intensity: 1.28, angle: [48, -32, 0] };
    app.scene.ambientLight = palette.ambient;
    const sun = new Entity('sun');
    sun.addComponent('light', { type: 'directional', color: palette.sun, intensity: palette.intensity, castShadows: true, shadowDistance: 160, shadowResolution: 1024 });
    sun.setLocalEulerAngles(...palette.angle as [number, number, number]); app.root.addChild(sun);
  }
}
