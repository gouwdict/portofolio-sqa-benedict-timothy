import { test, expect } from '@playwright/test';

test.describe('Weather (Eco)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://eco.ipekabsd.my.id');
  });

  test('page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/Cuaca IPEKA BSD/i);
  });

  test('imperial toggle present', async ({ page }) => {
    await expect(page.getByText(/Metrik Imperial/i)).toBeVisible();
  });

  test('current metrics labels present', async ({ page }) => {
    for (const m of ['Kelembapan', 'Angin', 'Tekanan udara', 'Indeks UV']) {
      await expect(page.getByText(m)).toBeVisible();
    }
  });

  test('chart sections present', async ({ page }) => {
    await expect(page.getByText(/Suhu & kelembapan/i)).toBeVisible();
    await expect(page.getByText(/Curah hujan harian/i)).toBeVisible();
  });
});
