import { test, expect } from '@playwright/test';

test.describe('Booking Printer Rapor', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://book.ipekabsd.my.id');
  });

  test('page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/Booking Printer Rapor/i);
  });

  test('form fields present', async ({ page }) => {
    await expect(page.getByText('Nama')).toBeVisible();
    await expect(page.getByText('Jenjang')).toBeVisible();
    await expect(page.getByText('Tanggal')).toBeVisible();
    await expect(page.getByText('Sesi')).toBeVisible();
  });

  test('jenjang options', async ({ page }) => {
    const select = page.locator('select').first();
    await expect(select).toContainText('Early Years');
    await expect(select).toContainText('Elementary');
    await expect(select).toContainText('Junior High');
    await expect(select).toContainText('Senior High');
  });

  test('calendar legend visible', async ({ page }) => {
    await expect(page.getByText('Terisi sebagian')).toBeVisible();
    await expect(page.getByText('Penuh')).toBeVisible();
    await expect(page.getByText('Ditutup')).toBeVisible();
  });

  test('portal link works', async ({ page }) => {
    await page.getByRole('link', { name: /Portal/i }).click();
    await expect(page).toHaveURL(/app\.ipekabsd\.my\.id/);
  });

  test('empty submit shows validation', async ({ page }) => {
    await page.getByRole('button', { name: /Booking/i }).click();
    // No navigation / still on page
    await expect(page).toHaveURL(/book\.ipekabsd\.my\.id/);
  });
});
