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
    // Front is local -Z. Keep every visual as a child of the existing bike entity
    // so movement, collision and drift behavior remain unchanged.

    // --- wheels / running gear ---
    cylinder(this.app, 'front-wheel', [0, .42, -1.38], [.58, .24, .58], '#17191f', this.entity)
      .setLocalEulerAngles(0, 0, 90);
    cylinder(this.app, 'front-rim', [0, .42, -1.38], [.34, .255, .34], '#c7d0d8', this.entity)
      .setLocalEulerAngles(0, 0, 90);
    cylinder(this.app, 'rear-wheel', [0, .42, 1.08], [.62, .26, .62], '#17191f', this.entity)
      .setLocalEulerAngles(0, 0, 90);
    cylinder(this.app, 'rear-rim', [0, .42, 1.08], [.36, .275, .36], '#c7d0d8', this.entity)
      .setLocalEulerAngles(0, 0, 90);

    // Front fork and mudguard.
    box(this.app, 'fork-left', [-.24, .83, -1.30], [.10, .94, .12], '#e8edf2', this.entity)
      .setLocalEulerAngles(-8, 0, 0);
    box(this.app, 'fork-right', [.24, .83, -1.30], [.10, .94, .12], '#e8edf2', this.entity)
      .setLocalEulerAngles(-8, 0, 0);
    box(this.app, 'front-mudguard', [0, .68, -1.40], [.82, .16, .72], '#d73027', this.entity);

    // --- scooter body ---
    box(this.app, 'floor-board', [0, .72, -.08], [1.04, .18, 1.40], '#941f1b', this.entity);
    box(this.app, 'center-body', [0, .92, .32], [1.02, .58, 1.28], '#c92c24', this.entity)
      .setLocalEulerAngles(-5, 0, 0);
    box(this.app, 'front-cowl', [0, 1.17, -1.00], [1.18, 1.02, .66], '#d93429', this.entity)
      .setLocalEulerAngles(-4, 0, 0);
    box(this.app, 'front-cowl-lower', [0, .80, -1.16], [1.06, .42, .72], '#bd251f', this.entity);
    box(this.app, 'rear-cowl', [0, 1.02, .92], [1.12, .62, .90], '#d93429', this.entity);

    // Seat is intentionally forward of the delivery box so the rider visibly sits on it.
    box(this.app, 'seat', [0, 1.42, .30], [.90, .24, 1.16], '#17191f', this.entity)
      .setLocalEulerAngles(-2, 0, 0);

    // Headlight, indicators and handlebar cluster.
    cylinder(this.app, 'headlight', [0, 1.52, -1.35], [.43, .20, .43], '#fff2b0', this.entity)
      .setLocalEulerAngles(90, 0, 0);
    box(this.app, 'indicator-left', [-.48, 1.42, -1.35], [.22, .18, .16], '#f3a321', this.entity);
    box(this.app, 'indicator-right', [.48, 1.42, -1.35], [.22, .18, .16], '#f3a321', this.entity);
    box(this.app, 'handlebar', [0, 1.78, -.96], [1.52, .10, .10], '#d7e0e7', this.entity);
    box(this.app, 'grip-left', [-.82, 1.78, -.96], [.24, .16, .16], '#17191f', this.entity);
    box(this.app, 'grip-right', [.82, 1.78, -.96], [.24, .16, .16], '#17191f', this.entity);

    // Mirrors: thin stalks plus simple square mirror faces for a readable low-poly silhouette.
    box(this.app, 'mirror-stalk-left', [-.58, 2.04, -.96], [.08, .60, .08], '#d7e0e7', this.entity)
      .setLocalEulerAngles(0, 0, -24);
    box(this.app, 'mirror-stalk-right', [.58, 2.04, -.96], [.08, .60, .08], '#d7e0e7', this.entity)
      .setLocalEulerAngles(0, 0, 24);
    box(this.app, 'mirror-left', [-.75, 2.30, -.96], [.34, .28, .10], '#243042', this.entity);
    box(this.app, 'mirror-right', [.75, 2.30, -.96], [.34, .28, .10], '#243042', this.entity);

    // --- rear delivery hardware ---
    box(this.app, 'rear-rack', [0, 1.46, .96], [1.20, .12, .78], '#333840', this.entity);
    box(this.app, 'delivery-box', [0, 2.06, 1.04], [1.54, 1.18, 1.10], '#f4f0df', this.entity);
    box(this.app, 'delivery-box-lid', [0, 2.68, 1.04], [1.60, .16, 1.16], '#fffdf3', this.entity);
    box(this.app, 'delivery-box-band', [0, 2.08, .47], [1.60, .12, .08], '#c9c5b8', this.entity);

    // Tail details improve the view the player sees most often.
    box(this.app, 'tail-light', [0, 1.23, 1.48], [.58, .22, .12], '#ff352f', this.entity);
    box(this.app, 'rear-indicator-left', [-.48, 1.24, 1.46], [.20, .16, .13], '#f3a321', this.entity);
    box(this.app, 'rear-indicator-right', [.48, 1.24, 1.46], [.20, .16, .13], '#f3a321', this.entity);
    box(this.app, 'license-plate', [0, .92, 1.55], [.72, .36, .08], '#f3f4ef', this.entity)
      .setLocalEulerAngles(-9, 0, 0);
    box(this.app, 'muffler', [.56, .62, .98], [.22, .24, .84], '#7e858c', this.entity)
      .setLocalEulerAngles(8, 0, 0);

    // --- rider ---
    // Torso sits ahead of the box, keeping the rear silhouette: rider -> box -> body -> wheel.
    box(this.app, 'rider-torso', [0, 2.35, -.02], [1.05, 1.05, .58], '#2589b8', this.entity)
      .setLocalEulerAngles(7, 0, 0);
    box(this.app, 'rider-waist', [0, 1.82, .16], [.82, .32, .52], '#1e668d', this.entity);
    box(this.app, 'rider-neck', [0, 2.92, -.11], [.24, .22, .22], '#d79d69', this.entity);
    box(this.app, 'rider-head', [0, 3.28, -.18], [.68, .72, .62], '#e1ab78', this.entity);
    box(this.app, 'rider-hair', [0, 3.63, -.16], [.72, .22, .66], '#25262b', this.entity);
    box(this.app, 'rider-hair-back', [0, 3.42, .12], [.70, .38, .18], '#25262b', this.entity);

    // Simple face details remain readable from the front without adding heavy geometry.
    box(this.app, 'rider-eye-left', [-.15, 3.34, -.50], [.08, .08, .05], '#202126', this.entity);
    box(this.app, 'rider-eye-right', [.15, 3.34, -.50], [.08, .08, .05], '#202126', this.entity);
    box(this.app, 'rider-mouth', [0, 3.12, -.50], [.24, .07, .05], '#432820', this.entity);

    // Arms reach the grips. Two-piece construction gives a bent-elbow pose.
    box(this.app, 'upper-arm-left', [-.61, 2.42, -.29], [.30, .78, .30], '#2589b8', this.entity)
      .setLocalEulerAngles(-30, 0, -34);
    box(this.app, 'upper-arm-right', [.61, 2.42, -.29], [.30, .78, .30], '#2589b8', this.entity)
      .setLocalEulerAngles(-30, 0, 34);
    box(this.app, 'forearm-left', [-.73, 2.02, -.67], [.24, .70, .24], '#d79d69', this.entity)
      .setLocalEulerAngles(-54, 0, -12);
    box(this.app, 'forearm-right', [.73, 2.02, -.67], [.24, .70, .24], '#d79d69', this.entity)
      .setLocalEulerAngles(-54, 0, 12);
    box(this.app, 'hand-left', [-.79, 1.82, -.94], [.24, .20, .26], '#d79d69', this.entity);
    box(this.app, 'hand-right', [.79, 1.82, -.94], [.24, .20, .26], '#d79d69', this.entity);

    // Bent legs: thighs angle forward/down, shins tuck toward the floor board.
    box(this.app, 'thigh-left', [-.29, 1.55, -.08], [.38, .78, .42], '#26364a', this.entity)
      .setLocalEulerAngles(-32, 0, -5);
    box(this.app, 'thigh-right', [.29, 1.55, -.08], [.38, .78, .42], '#26364a', this.entity)
      .setLocalEulerAngles(-32, 0, 5);
    box(this.app, 'shin-left', [-.34, 1.02, -.55], [.32, .70, .34], '#26364a', this.entity)
      .setLocalEulerAngles(30, 0, 0);
    box(this.app, 'shin-right', [.34, 1.02, -.55], [.32, .70, .34], '#26364a', this.entity)
      .setLocalEulerAngles(30, 0, 0);
    box(this.app, 'shoe-left', [-.34, .76, -.83], [.38, .22, .52], '#18191d', this.entity);
    box(this.app, 'shoe-right', [.34, .76, -.83], [.38, .22, .52], '#18191d', this.entity);
  }
}
