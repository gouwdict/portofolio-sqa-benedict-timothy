import { test, expect } from '@playwright/test';

test.describe('IT Events & Tasks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://desk.ipekabsd.my.id');
  });

  test('page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/IT Events & Tasks/i);
  });

  test('timeline range shown', async ({ page }) => {
    await expect(page.getByText(/H−1 hingga H\+7/i)).toBeVisible();
  });

  test('admin link present', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Admin/i })).toBeVisible();
  });

  test('empty state message', async ({ page }) => {
    await expect(page.getByText(/Tidak ada kegiatan IT/i)).toBeVisible();
  });
});
