import { test, expect } from '@playwright/test';
import { PortalPage } from '../pages/PortalPage';

test.describe('Portal - Homepage', () => {
  test('loads with correct title and branding', async ({ page }) => {
    const portal = new PortalPage(page);
    await portal.goto();
    await portal.expectLoaded();
  });

  test('displays exactly 10 service cards', async ({ page }) => {
    const portal = new PortalPage(page);
    await portal.goto();
    await portal.expectTenServices();
  });

  test('footer shows internal use notice', async ({ page }) => {
    const portal = new PortalPage(page);
    await portal.goto();
    await expect(page.getByText('Internal use only')).toBeVisible();
  });

  test('IT call center link present', async ({ page }) => {
    const portal = new PortalPage(page);
    await portal.goto();
    await expect(page.getByText('IT Call Center 1010')).toBeVisible();
  });
});
