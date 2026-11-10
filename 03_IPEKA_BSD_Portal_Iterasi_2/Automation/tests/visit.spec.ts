import { test, expect } from '@playwright/test';
import { visitorValid } from '../data/test-data';

test.describe('Visit & School Tour', () => {
  test('home loads in English', async ({ page }) => {
    await page.goto('https://visit.ipekabsd.my.id');
    await expect(page.getByText('Welcome to IPEKA BSD')).toBeVisible();
  });

  test('language switch to Indonesian', async ({ page }) => {
    await page.goto('https://visit.ipekabsd.my.id');
    await page.getByRole('link', { name: /Bahasa Indonesia/i }).click();
    await expect(page).toHaveURL(/\/id\//);
  });

  test('school tour shows unavailable message', async ({ page }) => {
    await page.goto('https://visit.ipekabsd.my.id/school-tour/');
    await expect(page.getByText(/not open for booking yet/i)).toBeVisible();
  });

  test('visitor form required fields', async ({ page }) => {
    await page.goto('https://visit.ipekabsd.my.id/visitor/');
    await page.getByRole('button', { name: /Submit/i }).click();
    // Should remain on page due to validation
    await expect(page).toHaveURL(/visitor/);
  });

  test('visitor form accepts valid data', async ({ page }) => {
    await page.goto('https://visit.ipekabsd.my.id/visitor/');
    await page.getByLabel(/Full name/i).fill(visitorValid.name);
    await page.getByLabel(/Phone|WhatsApp/i).fill(visitorValid.phone);
    await page.getByLabel(/Vehicle plate/i).fill(visitorValid.plate);
    await page.getByLabel(/Purpose/i).fill(visitorValid.purpose);
    await expect(page.getByRole('button', { name: /Submit/i })).toBeEnabled();
  });
});
