import {
  BLEND_ADDITIVEALPHA, BLEND_NORMAL, Curve, CurveSet, EMITTERSHAPE_BOX, Entity, Vec3,
  type Application,
} from 'playcanvas';
import type { BikeController } from '../player/BikeController';
import type { SkyPeriod } from '../world/SkyEnvironment';

export class WeatherEffects {
  private readonly atmosphere = new Entity('gpu-atmosphere');
  private readonly steam = new Entity('food-steam');
  private spillCooldown = 0;

  constructor(private readonly app: Application, private readonly bike: BikeController, period: SkyPeriod) {
    app.root.addChild(this.atmosphere);
    bike.entity.addChild(this.steam); this.steam.setLocalPosition(0, 2.35, .65);
    const highQuality = app.graphicsDevice.deviceType === 'webgpu';
    const rain = period === 'night';
    const color = period === 'morning' ? [.98, .86, .5] : period === 'evening' ? [1, .48, .12] : [.45, .68, 1];
    this.atmosphere.addComponent('particlesystem', {
      numParticles: highQuality ? (rain ? 520 : 220) : (rain ? 180 : 80),
      lifetime: rain ? 1.15 : 4.8, rate: rain ? .0025 : .022, loop: true, preWarm: true,
      emitterShape: EMITTERSHAPE_BOX, emitterExtents: new Vec3(24, rain ? 1 : 8, 24),
      initialVelocity: rain ? 28 : .8, localSpace: false, wrap: true, wrapBounds: new Vec3(48, 22, 48),
      velocityGraph: new CurveSet(rain ? [0, 0] : [.15, -.12], rain ? [-1, -1] : [.12, .3], rain ? [0, 0] : [-.08, .1]),
      scaleGraph: new Curve(rain ? [0, .035, 1, .018] : [0, .08, .5, .16, 1, .04]),
      colorGraph: new CurveSet([color[0], color[0]], [color[1], color[1]], [color[2], color[2]]),
      alphaGraph: new Curve(rain ? [0, 0, .08, .62, .9, .48, 1, 0] : [0, 0, .2, .35, .8, .3, 1, 0]),
      blendType: rain ? BLEND_NORMAL : BLEND_ADDITIVEALPHA, depthWrite: false, lighting: false,
      stretch: rain ? .18 : 0,
    });
    this.steam.addComponent('particlesystem', {
      numParticles: highQuality ? 48 : 22, lifetime: 2.1, rate: .075, loop: true,
      emitterShape: EMITTERSHAPE_BOX, emitterExtents: new Vec3(.45, .08, .35), initialVelocity: .7,
      velocityGraph: new CurveSet([-.12, .18], [.55, 1.1], [-.08, .16]),
      scaleGraph: new Curve([0, .06, .35, .28, 1, .5]),
      colorGraph: new CurveSet([.94, .94], [.91, .91], [.82, .82]), alphaGraph: new Curve([0, 0, .15, .28, .65, .18, 1, 0]),
      blendType: BLEND_NORMAL, depthWrite: false, lighting: false, localSpace: true,
    });
    this.steam.enabled = false;
  }

  update(dt: number, active: boolean): void {
    this.spillCooldown = Math.max(0, this.spillCooldown - dt);
    const position = this.bike.entity.getPosition();
    this.atmosphere.setPosition(position.x, position.y + 11, position.z);
    this.steam.enabled = active;
  }

  spill(force: number): void {
    if (this.spillCooldown > 0 || force < .002) return;
    this.spillCooldown = .16;
    const burst = new Entity('food-spill-burst'); this.app.root.addChild(burst);
    const position = this.bike.entity.getPosition(); burst.setPosition(position.x, position.y + 1.6, position.z);
    burst.addComponent('particlesystem', {
      numParticles: 22, lifetime: .85, rate: .004, loop: false, autoPlay: true,
      emitterShape: EMITTERSHAPE_BOX, emitterExtents: new Vec3(.35, .12, .35), initialVelocity: 4.5,
      velocityGraph: new CurveSet([-1.8, 1.8], [2.6, -5.2], [-2.8, 2.8]),
      scaleGraph: new Curve([0, .13, 1, .035]), colorGraph: new CurveSet([1, .82], [.55, .18], [.08, .03]),
      alphaGraph: new Curve([0, .95, .75, .8, 1, 0]), blendType: BLEND_NORMAL, depthWrite: false, lighting: false,
    });
    setTimeout(() => burst.destroy(), 1200);
  }
}
