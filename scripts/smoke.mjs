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
page.on('requestfailed', (request) => {
  const intentionalMusicSwitch = request.url().endsWith('.mp3') && request.failure()?.errorText === 'net::ERR_ABORTED';
  if (!intentionalMusicSwitch) errors.push(`request failed: ${request.url()} / ${request.failure()?.errorText}`);
});
page.on('pageerror', (error) => errors.push(`page: ${error.message}`));
page.on('response', (response) => {
  if (response.status() >= 400) errors.push(`http ${response.status()}: ${response.url()}`);
});

const gameUrl = process.argv[2] ?? 'http://127.0.0.1:5173/';
await page.goto(gameUrl, { waitUntil: 'networkidle' });
await page.waitForSelector('#start-button', { timeout: 15_000 });
const title = await page.locator('h1').first().textContent();
const renderer = await page.locator('.renderer').textContent();
const environment = {
  period: await page.locator('#sky-environment').getAttribute('data-period'),
  pcRotateOverlay: await page.locator('#rotate-overlay').evaluate((element) => getComputedStyle(element).display),
};
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
await page.keyboard.down('Shift');
await page.waitForTimeout(2_000);
await page.keyboard.up('Shift');
await page.keyboard.up('w');
await page.waitForTimeout(100);
hud.speed = await page.locator('#speed').textContent();
const parallaxBefore = await page.locator('#sky-environment').evaluate((element) => getComputedStyle(element).getPropertyValue('--sky-near-x'));
await page.keyboard.down('ArrowLeft');
await page.waitForTimeout(500);
await page.keyboard.up('ArrowLeft');
await page.waitForTimeout(100);
environment.parallaxMoved = parallaxBefore !== await page.locator('#sky-environment').evaluate((element) => getComputedStyle(element).getPropertyValue('--sky-near-x'));
environment.foodIntegrity = await page.locator('#food-integrity').textContent();
await page.screenshot({ path: '/tmp/demae-gameplay.png' });

let flow = { afterDelivery: null, nextOrder: null, resultDeliveries: null, retryReady: null };
const hasTestHook = await page.evaluate(() => Boolean(window.__DEMAE_TEST__));
if (hasTestHook) {
  await page.evaluate(() => { window.__DEMAE_TEST__.teleport(0, 108); window.__DEMAE_TEST__.face(0); });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/demae-shop-sign.png' });
  await page.evaluate(() => { window.__DEMAE_TEST__.teleport(-102, -121.5); window.__DEMAE_TEST__.face(Math.PI); });
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/tmp/demae-waiting-customer.png' });
  await page.evaluate(() => window.__DEMAE_TEST__.setTime(15.05));
  await page.waitForTimeout(150);
  environment.timeWarning = await page.locator('#flash-message').textContent();
  environment.feedbackMatrix = await page.evaluate(() => [65, 30, 8, 0].map((value) => window.__DEMAE_TEST__.feedback(value)));
  await page.evaluate(() => window.__DEMAE_TEST__.setTime(90));
  await page.evaluate(() => { window.__DEMAE_TEST__.crash(); window.__DEMAE_TEST__.crash(); window.__DEMAE_TEST__.crash(); });
  await page.waitForTimeout(100);
  environment.policeStatus = await page.locator('#police-status').textContent();
  const policeLightBefore = await page.evaluate(() => window.__DEMAE_TEST__.policeLight());
  await page.waitForTimeout(220);
  const policeLightAfter = await page.evaluate(() => window.__DEMAE_TEST__.policeLight());
  environment.policeLightsBlink = policeLightBefore !== policeLightAfter && policeLightBefore !== 'off' && policeLightAfter !== 'off';
  await page.evaluate(() => window.__DEMAE_TEST__.setTime(80));
  environment.policeCatchPenalty = await page.evaluate(() => {
    const before = window.__DEMAE_TEST__.time(); window.__DEMAE_TEST__.policeCaught();
    return before - window.__DEMAE_TEST__.time();
  });
  await page.waitForTimeout(100);
  environment.policeCaughtMessage = await page.locator('#flash-message').textContent();
  await page.evaluate(() => window.__DEMAE_TEST__.crash());
  await page.waitForTimeout(100);
  environment.policeEscapePenalty = await page.evaluate(() => {
    const before = window.__DEMAE_TEST__.time(); window.__DEMAE_TEST__.policeEscaped();
    return before - window.__DEMAE_TEST__.time();
  });
  await page.waitForTimeout(100);
  environment.policeEscapedMessage = await page.locator('#flash-message').textContent();
  await page.evaluate(() => { window.__DEMAE_TEST__.teleport(71, 54); window.__DEMAE_TEST__.face(Math.PI); });
  await page.keyboard.down('w'); await page.waitForTimeout(850); await page.keyboard.up('w'); await page.waitForTimeout(100);
  environment.brokenTree = await page.evaluate(() => window.__DEMAE_TEST__.brokenCount());
  await page.evaluate(() => { window.__DEMAE_TEST__.teleport(15, 5); window.__DEMAE_TEST__.face(Math.PI); });
  await page.keyboard.down('w'); await page.waitForTimeout(850); await page.keyboard.up('w'); await page.waitForTimeout(100);
  environment.brokenTreeAndLamp = await page.evaluate(() => window.__DEMAE_TEST__.brokenCount());
  await page.evaluate(() => { window.__DEMAE_TEST__.setTime(65); window.__DEMAE_TEST__.teleport(-102, -130); });
  await page.waitForSelector('.customer-feedback.excellent');
  environment.customerFeedbackLines = await page.locator('.customer-feedback b').evaluate((element) => element.innerText.split('\n').length);
  await page.waitForFunction(() => document.querySelector('#objective b')?.textContent === '爆速飯店');
  flow.afterDelivery = await page.locator('#deliveries').textContent();
  await page.evaluate(() => window.__DEMAE_TEST__.teleport(0, 132));
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
  await page.evaluate(() => window.__DEMAE_TEST__.finishShift());
  await page.waitForSelector('.work-review');
  flow.reviewRows = await page.locator('.review-board tbody tr').count();
  flow.ownerCommentLines = await page.locator('.owner-comment p').evaluate((element) => element.innerText.split('\n').length);
  flow.dailyWage = await page.locator('.daily-wage strong').textContent();
  await page.screenshot({ path: '/tmp/demae-work-review.png' });
}

const iosContext = await browser.newContext({
  viewport: { width: 390, height: 844 },
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1',
});
const iosPage = await iosContext.newPage();
await iosPage.goto(gameUrl, { waitUntil: 'domcontentloaded' });
environment.iosPortraitRotateOverlay = await iosPage.locator('#rotate-overlay').evaluate((element) => getComputedStyle(element).display);
await iosContext.close();

console.log(JSON.stringify({ gameUrl, title, renderer, order, environment, hud, flow, errors }, null, 2));
await browser.close();
if (errors.length > 0) process.exitCode = 1;
