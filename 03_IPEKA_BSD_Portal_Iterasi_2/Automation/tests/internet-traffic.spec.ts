import { test, expect } from '@playwright/test';

test.describe('Internet Traffic (PRTG)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://inet.ipekabsd.my.id');
  });

  test('dashboard loads', async ({ page }) => {
    await expect(page.getByText(/PRTG Traffic Grapher/i)).toBeVisible();
  });

  test('three ISP sensors present', async ({ page }) => {
    await expect(page.getByText(/iForte/i)).toBeVisible();
    await expect(page.getByText(/Taycon/i)).toBeVisible();
    await expect(page.getByText(/BaliFiber/i)).toBeVisible();
  });

  test('refresh options present', async ({ page }) => {
    await expect(page.getByText(/15s/i)).toBeVisible();
    await expect(page.getByText(/60s/i)).toBeVisible();
    await expect(page.getByText(/5min/i)).toBeVisible();
  });
});
