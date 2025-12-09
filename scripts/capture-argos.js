// Capture web screenshots for Argos using Playwright.
// Assumes your Expo web server is running (default http://localhost:19006).

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.APP_URL || 'http://localhost:19006';
const OUTPUT_DIR = path.join(__dirname, '..', '__argos__');

const routes = [
  { name: 'example-card', path: '/visual/example-card' },
  { name: 'gsbutton-variants', path: '/visual/gsbutton' },
];

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function capture() {
  await ensureDir(OUTPUT_DIR);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } }); // iPhone 12-ish

  for (const route of routes) {
    const url = `${BASE_URL}${route.path}`;
    console.log(`Capturing ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800); // settle layout
    const outPath = path.join(OUTPUT_DIR, `${route.name}.png`);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Saved ${outPath}`);
  }

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
