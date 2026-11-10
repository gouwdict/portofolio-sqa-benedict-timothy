import { test, expect } from '@playwright/test';
import { qrSamples } from '../data/test-data';

test.describe('QR Generator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://qr.ipekabsd.my.id');
  });

  test('page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/Buat QR Code/i);
  });

  test('five content types present', async ({ page }) => {
    for (const t of ['Tautan', 'Teks', 'Email', 'Telepon', 'WiFi']) {
      await expect(page.getByText(t, { exact: true })).toBeVisible();
    }
  });

  test('generates QR for link', async ({ page }) => {
    await page.getByText('Tautan', { exact: true }).click();
    const input = page.locator('input[type="url"], input[type="text"]').first();
    await input.fill(qrSamples.link);
    await expect(page.getByText(/Modul|Versi|Data/i)).toBeVisible();
  });

  test('error correction options present', async ({ page }) => {
    for (const lvl of ['L · 7%', 'M · 15%', 'Q · 25%', 'H · 30%']) {
      await expect(page.getByText(lvl)).toBeVisible();
    }
  });

  test('download buttons present', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Unduh PNG/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Unduh SVG/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Salin gambar/i })).toBeVisible();
  });

  test('history starts empty', async ({ page }) => {
    await expect(page.getByText(/Belum ada riwayat/i)).toBeVisible();
  });
});
