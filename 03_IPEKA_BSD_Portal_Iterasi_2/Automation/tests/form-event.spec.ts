import { test, expect } from '@playwright/test';

test.describe('Form Event', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://form.ipekabsd.my.id');
  });

  test('page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/Form Event/i);
  });

  test('google login button present', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Masuk/i })).toBeVisible();
  });

  test('booking requires login', async ({ page }) => {
    const btn = page.getByRole('link', { name: /Booking Ruangan/i });
    await btn.click();
    await expect(page).toHaveURL(/auth\/login/);
  });

  test('table columns present', async ({ page }) => {
    await expect(page.getByText('Tanggal')).toBeVisible();
    await expect(page.getByText('Unit')).toBeVisible();
    await expect(page.getByText('Waktu')).toBeVisible();
    await expect(page.getByText('Nama Kegiatan')).toBeVisible();
    await expect(page.getByText('Gedung')).toBeVisible();
    await expect(page.getByText('Ruangan')).toBeVisible();
    await expect(page.getByText('Nama PIC')).toBeVisible();
  });
});
