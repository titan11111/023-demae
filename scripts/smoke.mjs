import { chromium } from '../../playwright-test/node_modules/playwright/index.mjs';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(`console: ${message.text()} @ ${message.location().url}`);
});
page.on('requestfailed', (request) => errors.push(`request failed: ${request.url()} / ${request.failure()?.errorText}`));
page.on('pageerror', (error) => errors.push(`page: ${error.message}`));
page.on('response', (response) => {
  if (response.status() >= 400) errors.push(`http ${response.status()}: ${response.url()}`);
});

const gameUrl = process.argv[2] ?? 'http://127.0.0.1:5173/';
await page.goto(gameUrl, { waitUntil: 'networkidle' });
await page.waitForSelector('#start-button', { timeout: 15_000 });
const title = await page.locator('h1').first().textContent();
const renderer = await page.locator('.renderer').textContent();
await page.screenshot({ path: '/tmp/demae-title.png' });

await page.click('#start-button');
await page.waitForSelector('#depart-button');
const order = await page.locator('.order-ticket h2').textContent();
await page.click('#depart-button');
await page.waitForSelector('.hud');
await page.waitForTimeout(3_300);
const hud = {
  time: await page.locator('#time').textContent(),
  speed: await page.locator('#speed').textContent(),
  objective: await page.locator('#objective b').textContent(),
};
await page.keyboard.down('w');
await page.waitForTimeout(1_500);
await page.keyboard.up('w');
await page.waitForTimeout(100);
hud.speed = await page.locator('#speed').textContent();
await page.screenshot({ path: '/tmp/demae-gameplay.png' });

let flow = { afterDelivery: null, nextOrder: null, resultDeliveries: null, retryReady: null };
const hasTestHook = await page.evaluate(() => Boolean(window.__DEMAE_TEST__));
if (hasTestHook) {
  await page.evaluate(() => window.__DEMAE_TEST__.teleport(-51, -65));
  await page.waitForFunction(() => document.querySelector('#objective b')?.textContent === '爆速飯店');
  flow.afterDelivery = await page.locator('#deliveries').textContent();
  await page.evaluate(() => window.__DEMAE_TEST__.teleport(0, 66));
  await page.waitForSelector('#depart-button');
  flow.nextOrder = await page.locator('.order-ticket h2').textContent();
  await page.click('#depart-button');
  await page.waitForTimeout(3_100);
  await page.evaluate(() => window.__DEMAE_TEST__.expire());
  await page.waitForSelector('#retry-button');
  flow.resultDeliveries = await page.locator('.result-number b').textContent();
  await page.click('#retry-button');
  await page.waitForSelector('#depart-button');
  flow.retryReady = await page.locator('#depart-button').isVisible();
}

console.log(JSON.stringify({ gameUrl, title, renderer, order, hud, flow, errors }, null, 2));
await browser.close();
if (errors.length > 0) process.exitCode = 1;
