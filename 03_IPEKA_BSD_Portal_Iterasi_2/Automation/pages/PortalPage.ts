import { Page, Locator, expect } from '@playwright/test';

export class PortalPage {
  readonly page: Page;
  readonly serviceLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.serviceLinks = page.locator('a[href^="https://"]');
  }

  async goto() {
    await this.page.goto('https://app.ipekabsd.my.id');
  }

  async expectLoaded() {
    await expect(this.page).toHaveTitle(/Portal IPEKA BSD/i);
    await expect(this.page.getByText('Portal IPEKA BSD')).toBeVisible();
  }

  async expectTenServices() {
    await expect(this.serviceLinks).toHaveCount(10);
  }
}
