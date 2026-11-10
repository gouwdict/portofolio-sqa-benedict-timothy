import { test, expect } from '@playwright/test';
import { services } from '../data/test-data';

test.describe('Portal - Links', () => {
  for (const svc of services) {
    test(`${svc.name} returns 200`, async ({ request }) => {
      const res = await request.get(svc.url);
      expect(res.status()).toBe(200);
    });
  }
});
