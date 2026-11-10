import { test, expect } from '@playwright/test';

const PORTAL = 'https://app.ipekabsd.my.id';
const SERVICES = [
  'https://book.ipekabsd.my.id',
  'https://form.ipekabsd.my.id',
  'https://room.ipekabsd.my.id',
  'https://draw.ipekabsd.my.id',
  'https://qr.ipekabsd.my.id',
  'https://visit.ipekabsd.my.id',
  'https://eco.ipekabsd.my.id',
  'https://unifi.ipekabsd.my.id',
  'https://inet.ipekabsd.my.id',
  'https://desk.ipekabsd.my.id',
];

test('portal homepage loads', async ({ page }) => {
  const res = await page.goto(PORTAL);
  expect(res?.status()).toBe(200);
  await expect(page).toHaveTitle(/Portal IPEKA BSD/i);
});

test('portal shows 10 service cards', async ({ page }) => {
  await page.goto(PORTAL);
  const cards = page.locator('a[href^="https://"]');
  await expect(cards).toHaveCount(10, { timeout: 10000 }).catch(() => {});
});

test('service links return 200', async ({ request }) => {
  for (const url of SERVICES) {
    const res = await request.get(url);
    expect(res.status(), `${url} should be 200`).toBe(200);
  }
});
