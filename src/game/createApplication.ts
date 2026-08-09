import {
  Application,
  FILLMODE_FILL_WINDOW,
  RESOLUTION_AUTO,
  WebgpuGraphicsDevice,
  WebglGraphicsDevice,
} from 'playcanvas';

export async function createApplication(canvas: HTMLCanvasElement): Promise<Application> {
  const deviceOptions = {
    glslangUrl: 'https://cdn.jsdelivr.net/npm/@webgpu/glslang@0.0.15/dist/web-devel/glslang.js',
    twgslUrl: 'https://cdn.jsdelivr.net/npm/twgsl@0.0.2/dist/twgsl.js',
    antialias: true,
    alpha: true,
  };
  let device;
  if ('gpu' in navigator) {
    try {
      device = new WebgpuGraphicsDevice(canvas, deviceOptions);
      await device.createDevice();
    } catch (error) {
      console.warn('WebGPU initialization failed; using WebGL2.', error);
    }
  }
  if (!device) {
    device = new WebglGraphicsDevice(canvas, deviceOptions);
  }

  const app = new Application(canvas, { graphicsDevice: device });
  app.graphicsDevice.maxPixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  app.setCanvasFillMode(FILLMODE_FILL_WINDOW);
  app.setCanvasResolution(RESOLUTION_AUTO);
  window.addEventListener('resize', () => app.resizeCanvas());
  app.start();
  return app;
}
