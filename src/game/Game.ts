import { Color, Entity, type Application } from 'playcanvas';
import { City } from '../world/City';
import { BikeController } from '../player/BikeController';
import { FollowCamera } from './FollowCamera';
import { DeliveryManager } from '../delivery/DeliveryManager';
import { UIManager } from '../ui/UIManager';
import { AudioManager } from '../audio/AudioManager';
import { GameManager } from './GameManager';
import { TrafficManager } from '../traffic/TrafficManager';

export class Game {
  private app: Application | null = null;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly uiRoot: HTMLDivElement,
  ) {}

  async start(): Promise<void> {
    const { createApplication } = await import('./createApplication');
    this.app = await createApplication(this.canvas);
    this.createLighting(this.app);
    const city = new City(this.app);
    const ui = new UIManager(this.uiRoot);
    const audio = new AudioManager();
    let manager: GameManager;
    const bike = new BikeController(this.app, city, {
      onDrift: (points) => manager.addDrift(points),
      onCrash: () => manager.crash(),
      onBoost: () => audio.boost(),
    });
    const camera = new FollowCamera(this.app, bike);
    manager = new GameManager(this.app, bike, camera, city, new DeliveryManager(), ui, audio, new TrafficManager(this.app));
    await manager.initialize();
    if (import.meta.env.DEV) {
      (window as typeof window & { __DEMAE_TEST__?: { teleport: (x: number, z: number) => void; expire: () => void } }).__DEMAE_TEST__ = {
        teleport: (x, z) => bike.entity.setPosition(x, .55, z),
        expire: () => manager.expireForTest(),
      };
    }
    this.app.on('update', (dt: number) => manager.update(Math.min(dt, .05)));
  }

  private createLighting(app: Application): void {
    const sun = new Entity('sun');
    sun.addComponent('light', { type: 'directional', color: new Color(1, .82, .66), intensity: 1.25, castShadows: true, shadowDistance: 160, shadowResolution: 1024 });
    sun.setLocalEulerAngles(48, -32, 0); app.root.addChild(sun);
  }
}
