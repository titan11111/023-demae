import { Entity, Vec3, type Application } from 'playcanvas';
import type { BikeController } from '../player/BikeController';
import type { SkyEnvironment } from '../world/SkyEnvironment';

export class FollowCamera {
  readonly entity = new Entity('follow-camera');
  private readonly targetPosition = new Vec3();
  private shake = 0;

  constructor(private readonly app: Application, private readonly bike: BikeController, private readonly sky: SkyEnvironment) {
    this.entity.addComponent('camera', { clearColor: [0, 0, 0, 0], farClip: 450, fov: 62 });
    app.root.addChild(this.entity);
    this.update(1);
  }

  update(dt: number): void {
    const bikePosition = this.bike.entity.getPosition();
    const heading = this.bike.heading;
    const travelSpeed = Math.abs(this.bike.speed);
    const distance = 6 + travelSpeed * .022;
    this.targetPosition.set(
      bikePosition.x - Math.sin(heading) * distance,
      3.2 + travelSpeed * .006,
      bikePosition.z - Math.cos(heading) * distance,
    );
    if (this.shake > 0) {
      this.targetPosition.x += (Math.random() - .5) * this.shake;
      this.targetPosition.y += (Math.random() - .5) * this.shake;
      this.shake = Math.max(0, this.shake - dt * 2.5);
    }
    const current = this.entity.getPosition();
    current.lerp(current, this.targetPosition, Math.min(1, dt * 7));
    this.entity.setPosition(current);
    this.entity.lookAt(bikePosition.x, bikePosition.y + 1.1, bikePosition.z);
    if (this.entity.camera) this.entity.camera.fov = 60 + Math.min(22, travelSpeed * .19 + (this.bike.input.isDown('ShiftLeft', 'ShiftRight') ? 4 : 0));
    this.sky.update(heading, travelSpeed, dt);
    void this.app;
  }

  crashShake(): void { this.shake = .7; }
}
