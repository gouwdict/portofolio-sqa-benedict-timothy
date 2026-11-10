import { test, expect } from '@playwright/test';

test.describe('Authentication & Security', () => {
  test('all services use HTTPS', async ({ request }) => {
    const urls = [
      'https://app.ipekabsd.my.id',
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
    for (const url of urls) {
      expect(url.startsWith('https://')).toBeTruthy();
      const res = await request.get(url);
      expect(res.status()).toBe(200);
    }
  });

  test('form event booking redirects to login', async ({ page }) => {
    await page.goto('https://form.ipekabsd.my.id');
    await page.getByRole('link', { name: /Booking Ruangan/i }).click();
    await expect(page).toHaveURL(/auth\/login/);
  });

  test('meeting room booking redirects to login', async ({ page }) => {
    await page.goto('https://room.ipekabsd.my.id');
    await page.getByRole('link', { name: /Booking Ruangan/i }).click();
    await expect(page).toHaveURL(/auth\/login/);
  });
});
