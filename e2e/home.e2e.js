const assert = require('node:assert');
const { chromium } = require('playwright');

const BASE_URL = process.env.APP_URL || 'http://localhost:19006';

async function ensureHomeLoaded(page) {
  const response = await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  if (!response || !response.ok()) {
    throw new Error(
      `Failed to load ${BASE_URL}. Is the Expo web server running on that URL?`
    );
  }

  await page.waitForSelector('text=Gluestack Starter', { timeout: 15_000 });
  const subtitle = page.getByText('Curated screens ready to drop in');
  assert.ok(await subtitle.isVisible(), 'Home subtitle should be visible');
}

async function exploreFlow(page) {
  await page.getByText('Browse components').click();
  await page.waitForURL('**/(tabs)/explore', { timeout: 15_000 });

  await page.waitForSelector('text=Component kit', { timeout: 10_000 });
  const emailInput = page.getByPlaceholder('you@example.com');
  await emailInput.fill('qa@example.com');

  const quickLink = page.getByText('Push notifications');
  assert.ok(await quickLink.isVisible(), 'Toggles block should be present');
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  try {
    await ensureHomeLoaded(page);
    await exploreFlow(page);
    console.log('E2E regression passed ✅');
  } catch (err) {
    console.error('E2E regression failed');
    console.error(err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

run();
