import { test, expect } from '@playwright/test';

test.describe('Booking Meeting Room', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://room.ipekabsd.my.id');
  });

  test('page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/Booking Meeting Room/i);
  });

  test('google login button present', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Masuk/i })).toBeVisible();
  });

  test('booking requires login', async ({ page }) => {
    await page.getByRole('link', { name: /Booking Ruangan/i }).click();
    await expect(page).toHaveURL(/auth\/login/);
  });

  test('table columns present', async ({ page }) => {
    await expect(page.getByText('Tanggal')).toBeVisible();
    await expect(page.getByText('Waktu')).toBeVisible();
    await expect(page.getByText('Ruangan')).toBeVisible();
    await expect(page.getByText('Pemesan')).toBeVisible();
    await expect(page.getByText('Keperluan')).toBeVisible();
  });
});
