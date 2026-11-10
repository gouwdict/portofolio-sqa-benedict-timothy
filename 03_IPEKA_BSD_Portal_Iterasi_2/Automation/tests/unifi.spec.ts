import { test, expect } from '@playwright/test';

test.describe('UniFi Controller', () => {
  test('page loads UniFi OS', async ({ page }) => {
    await page.goto('https://unifi.ipekabsd.my.id');
    await expect(page).toHaveTitle(/UniFi OS/i);
  });

  test('login form present', async ({ page }) => {
    await page.goto('https://unifi.ipekabsd.my.id');
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test.skip('device management (requires credentials)', async ({ page }) => {
    // Requires valid UniFi admin credentials
  });
});
