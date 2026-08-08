import { Entity, Vec3, type Application } from 'playcanvas';
import { InputController } from './InputController';
import { box, cylinder } from '../world/primitives';
import type { City } from '../world/City';

export interface BikeEvents {
  onDrift: (points: number) => void;
  onCrash: () => void;
  onBoost: () => void;
}

export class BikeController {
  readonly entity = new Entity('delivery-bike');
  readonly input = new InputController();
  speed = 0;
  boost = 65;
  heading = Math.PI;
  enabled = false;
  private driftTime = 0;
  private driftAwarded = false;
  private boostBurst = 0;
  private readonly previous = new Vec3();
  private readonly safePosition = new Vec3(0, .55, 51);

  constructor(private readonly app: Application, private readonly city: City, private readonly events: BikeEvents) {
    app.root.addChild(this.entity);
    this.createModel();
    this.reset();
  }

  update(dt: number): void {
    if (this.input.consume('KeyR')) this.respawn();
    if (!this.enabled) { this.speed *= Math.pow(.04, dt); return; }
    const accelerating = this.input.isDown('KeyW', 'ArrowUp');
    const braking = this.input.isDown('KeyS', 'ArrowDown');
    const left = this.input.isDown('KeyA', 'ArrowLeft');
    const right = this.input.isDown('KeyD', 'ArrowRight');
    const drifting = this.input.isDown('Space') && (left || right) && this.speed > 22;
    const boosting = this.input.isDown('ShiftLeft', 'ShiftRight') && this.boost > 0 && this.speed > 12;

    const maxSpeed = boosting || this.boostBurst > 0 ? 100 : 80;
    if (accelerating) this.speed += (boosting ? 48 : 34) * dt;
    else this.speed -= 10 * dt;
    if (braking) this.speed -= 48 * dt;
    if (boosting) {
      this.boost = Math.max(0, this.boost - 30 * dt);
      this.speed += 42 * dt;
      this.events.onBoost();
    } else this.boost = Math.min(100, this.boost + 2.8 * dt);
    this.boostBurst = Math.max(0, this.boostBurst - dt);
    this.speed = Math.max(0, Math.min(maxSpeed, this.speed));

    const steer = (left ? 1 : 0) - (right ? 1 : 0);
    const speedRatio = this.speed / 100;
    const steerRate = drifting ? 2.25 : 1.75 - speedRatio * .72;
    this.heading += steer * steerRate * dt * Math.min(1, this.speed / 9);

    if (drifting) {
      this.driftTime += dt;
      this.entity.setLocalEulerAngles(0, this.heading * 180 / Math.PI + steer * 15, -steer * 9);
      if (this.driftTime > .65 && !this.driftAwarded) {
        this.driftAwarded = true;
        this.boost = Math.min(100, this.boost + 18);
        this.events.onDrift(25);
      }
    } else {
      if (this.driftTime > .65) this.boostBurst = .65;
      this.driftTime = 0; this.driftAwarded = false;
      this.entity.setLocalEulerAngles(0, this.heading * 180 / Math.PI, -steer * Math.min(12, this.speed * .12));
    }

    this.previous.copy(this.entity.getPosition());
    const metersPerSecond = this.speed / 3.6;
    const position = this.entity.getPosition().clone();
    position.x += Math.sin(this.heading) * metersPerSecond * dt;
    position.z += Math.cos(this.heading) * metersPerSecond * dt;
    if (this.city.resolveCollision(position, this.previous)) {
      if (this.speed > 22) this.events.onCrash();
      this.speed *= .25;
    }
    position.y = .55;
    this.entity.setPosition(position);
    if (this.isOnRoad(position)) this.safePosition.copy(position);
  }

  reset(): void {
    this.entity.setPosition(0, .55, 51);
    this.heading = Math.PI;
    this.speed = 0;
    this.boost = 65;
  }

  stop(): void { this.speed = 0; this.enabled = false; }
  respawn(): void { this.entity.setPosition(this.safePosition); this.speed = 0; this.events.onCrash(); }

  autoRecover(distance = 2): void {
    const position = this.entity.getPosition().clone();
    position.x -= Math.sin(this.heading) * distance;
    position.z -= Math.cos(this.heading) * distance;
    position.y = .55;
    this.entity.setPosition(position);
    this.speed = 14;
  }

  private isOnRoad(position: Vec3): boolean {
    return Math.abs(position.x) < 12 || Math.abs(position.z) < 12 || (Math.abs(position.z - 38) < 9) || (Math.abs(position.z + 42) < 9);
  }

  private createModel(): void {
    box(this.app, 'bike-body', [0, .8, 0], [1.2, .65, 2.5], '#d92c1d', this.entity);
    box(this.app, 'delivery-box', [0, 1.55, .65], [1.45, 1.25, 1.35], '#ffd23d', this.entity);
    box(this.app, 'seat', [0, 1.25, -.35], [.9, .25, 1.1], '#171717', this.entity);
    cylinder(this.app, 'front-wheel', [0, .35, -1.15], [.52, .22, .52], '#171717', this.entity).setLocalEulerAngles(0, 0, 90);
    cylinder(this.app, 'back-wheel', [0, .35, 1.1], [.52, .22, .52], '#171717', this.entity).setLocalEulerAngles(0, 0, 90);
    box(this.app, 'headlight', [0, 1.1, -1.3], [.45, .4, .25], '#fff0a0', this.entity);
  }
}
