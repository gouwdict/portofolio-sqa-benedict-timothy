import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const ROOT = path.resolve(__dirname, '..');
const SCREENSHOT_ROOT = path.join(ROOT, 'Evidence', 'screenshots');
const CONSOLE_ROOT = path.join(ROOT, 'Evidence', 'console');
const RESULT_ROOT = path.join(ROOT, 'Evidence', 'results');

function screenshotPath(project: string, name: string) {
  const dir = path.join(SCREENSHOT_ROOT, project);
  fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, `${name}.png`);
}

test('SauceDemo cross-browser smoke', async ({ page }, testInfo) => {
  const project = testInfo.project.name;
  const consoleErrors: any[] = [];
  const results: { flow: string; status: string; detail?: string }[] = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({ type: 'console.error', text: msg.text(), location: msg.location() });
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push({ type: 'pageerror', text: err.message, stack: err.stack });
  });
  page.on('requestfailed', req => {
    consoleErrors.push({ type: 'requestfailed', url: req.url(), error: req.failure()?.errorText });
  });

  const record = (flow: string, status: 'PASS' | 'FAIL' | 'SKIP', detail?: string) => {
    results.push({ flow, status, detail });
  };
  const shot = (name: string) => page.screenshot({ path: screenshotPath(project, name), fullPage: true });

  let loginPageFailed = false;
  let loggedIn = false;

  try {
    try {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      await expect(page).toHaveTitle(/Swag Labs/);
      await expect(page.locator('[data-test="username"]')).toBeVisible();
      await expect(page.locator('[data-test="password"]')).toBeVisible();
      await expect(page.locator('[data-test="login-button"]')).toBeVisible();
      await shot('01-login-page');
      record('Login page load', 'PASS');
    } catch (e) {
      record('Login page load', 'FAIL', String(e));
      loginPageFailed = true;
    }

    if (loginPageFailed) {
      ['Negative login (locked-out user)', 'Valid login', 'Inventory / dashboard', 'Sort price low to high', 'Add items to cart', 'Cart page contents', 'Checkout empty validation', 'Checkout totals', 'Order completion', 'Logout', 'Protected route redirect after logout']
        .forEach(flow => record(flow, 'SKIP', 'Login page failed'));
      return;
    }

    try {
      await page.fill('[data-test="username"]', 'locked_out_user');
      await page.fill('[data-test="password"]', 'secret_sauce');
      await page.click('[data-test="login-button"]');
      await expect(page.locator('[data-test="error"]')).toContainText('locked out');
      await shot('02-locked-out-error');
      record('Negative login (locked-out user)', 'PASS');
      await page.goto('/', { waitUntil: 'domcontentloaded' });
    } catch (e) {
      record('Negative login (locked-out user)', 'FAIL', String(e));
    }

    try {
      await page.fill('[data-test="username"]', 'standard_user');
      await page.fill('[data-test="password"]', 'secret_sauce');
      await page.click('[data-test="login-button"]');
      await expect(page).toHaveURL(/inventory\.html/);
      record('Valid login', 'PASS');
      loggedIn = true;
    } catch (e) {
      record('Valid login', 'FAIL', String(e));
    }

    if (!loggedIn) {
      ['Inventory / dashboard', 'Sort price low to high', 'Add items to cart', 'Cart page contents', 'Checkout empty validation', 'Checkout totals', 'Order completion', 'Logout', 'Protected route redirect after logout']
        .forEach(flow => record(flow, 'SKIP', 'Valid login failed'));
      return;
    }

    try {
      await expect(page.locator('.inventory_list')).toBeVisible();
      expect(await page.locator('.inventory_item').count()).toBe(6);
      await shot('03-inventory-page');
      record('Inventory / dashboard', 'PASS');
    } catch (e) {
      record('Inventory / dashboard', 'FAIL', String(e));
    }

    try {
      await page.selectOption('[data-test="product-sort-container"]', 'lohi');
      await expect(page.locator('.inventory_item').first().locator('.inventory_item_price')).toHaveText('$7.99');
      await shot('04-sort-price-low-high');
      record('Sort price low to high', 'PASS');
    } catch (e) {
      record('Sort price low to high', 'FAIL', String(e));
    }

    try {
      await page.click('[data-test="add-to-cart-sauce-labs-onesie"]');
      await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
      await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
      await shot('05-cart-badge-2-items');
      record('Add items to cart', 'PASS');
    } catch (e) {
      record('Add items to cart', 'FAIL', String(e));
    }

    try {
      await page.click('.shopping_cart_link');
      await expect(page).toHaveURL(/cart\.html/);
      await expect(page.locator('.cart_item')).toHaveCount(2);
      await shot('06-cart-page');
      record('Cart page contents', 'PASS');
    } catch (e) {
      record('Cart page contents', 'FAIL', String(e));
    }

    try {
      await page.click('[data-test="checkout"]');
      await expect(page).toHaveURL(/checkout-step-one\.html/);
      await page.click('[data-test="continue"]');
      await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
      await shot('07-checkout-validation-error');
      record('Checkout empty validation', 'PASS');
    } catch (e) {
      record('Checkout empty validation', 'FAIL', String(e));
    }

    try {
      await page.fill('[data-test="firstName"]', 'Test');
      await page.fill('[data-test="lastName"]', 'User');
      await page.fill('[data-test="postalCode"]', '12345');
      await shot('08-checkout-form-filled');
      await page.click('[data-test="continue"]');
      await expect(page).toHaveURL(/checkout-step-two\.html/);
      await expect(page.locator('.summary_subtotal_label')).toContainText('$37.98');
      await expect(page.locator('.summary_tax_label')).toContainText('$3.04');
      await expect(page.locator('.summary_total_label')).toContainText('$41.02');
      await shot('09-checkout-overview');
      record('Checkout totals', 'PASS');
    } catch (e) {
      record('Checkout totals', 'FAIL', String(e));
    }

    try {
      await page.click('[data-test="finish"]');
      await expect(page).toHaveURL(/checkout-complete\.html/);
      await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
      await shot('10-order-complete');
      record('Order completion', 'PASS');
    } catch (e) {
      record('Order completion', 'FAIL', String(e));
    }

    try {
      await page.click('[data-test="back-to-products"]');
      await expect(page).toHaveURL(/inventory\.html/);
      await page.click('#react-burger-menu-btn');
      await expect(page.locator('#logout_sidebar_link')).toBeVisible();
      await page.click('#logout_sidebar_link');
      await expect(page.locator('[data-test="login-button"]')).toBeVisible();
      await shot('11-after-logout');
      record('Logout', 'PASS');
    } catch (e) {
      record('Logout', 'FAIL', String(e));
    }

    try {
      await page.goto('/inventory.html', { waitUntil: 'domcontentloaded' });
      await expect(page.locator('[data-test="login-button"]')).toBeVisible();
      await shot('12-protected-route-redirect');
      record('Protected route redirect after logout', 'PASS');
    } catch (e) {
      record('Protected route redirect after logout', 'FAIL', String(e));
    }
  } finally {
    fs.mkdirSync(CONSOLE_ROOT, { recursive: true });
    fs.mkdirSync(RESULT_ROOT, { recursive: true });
    fs.writeFileSync(path.join(CONSOLE_ROOT, `${project}.json`), JSON.stringify(consoleErrors, null, 2));
    fs.writeFileSync(path.join(RESULT_ROOT, `${project}.json`), JSON.stringify(results, null, 2));
  }
});
