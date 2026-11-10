import { test, expect } from '@playwright/test';

test.describe('Lucky Draw', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://draw.ipekabsd.my.id');
  });

  test('page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/Lucky Draw/i);
  });

  test('event title visible', async ({ page }) => {
    await expect(page.getByText(/Doorprice|Lucky Draw/i)).toBeVisible();
  });

  test('status area visible', async ({ page }) => {
    await expect(page.getByText(/Menunggu undian|Hasil Undian/i)).toBeVisible();
  });

  test('admin link present', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Admin/i })).toBeVisible();
  });
});
