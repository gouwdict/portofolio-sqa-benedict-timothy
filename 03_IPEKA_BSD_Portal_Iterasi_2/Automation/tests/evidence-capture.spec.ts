import { test } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const pages = [
  { name: '01_portal_home', url: 'https://app.ipekabsd.my.id' },
  { name: '02_booking_printer', url: 'https://book.ipekabsd.my.id' },
  { name: '03_form_event', url: 'https://form.ipekabsd.my.id' },
  { name: '04_booking_meeting_room', url: 'https://room.ipekabsd.my.id' },
  { name: '05_lucky_draw', url: 'https://draw.ipekabsd.my.id' },
  { name: '06_qr_generator', url: 'https://qr.ipekabsd.my.id' },
  { name: '07_visit_home', url: 'https://visit.ipekabsd.my.id' },
  { name: '08_school_tour', url: 'https://visit.ipekabsd.my.id/school-tour/' },
  { name: '09_visitor_form', url: 'https://visit.ipekabsd.my.id/visitor/' },
  { name: '10_weather', url: 'https://eco.ipekabsd.my.id' },
  { name: '11_internet_traffic', url: 'https://inet.ipekabsd.my.id' },
  { name: '12_it_events_tasks', url: 'https://desk.ipekabsd.my.id' },
  { name: '13_unifi_login', url: 'https://unifi.ipekabsd.my.id' },
];

test.describe('Evidence capture', () => {
  for (const p of pages) {
    test(`capture ${p.name}`, async ({ page }, testInfo) => {
      const browser = testInfo.project.name;
      const dir = path.resolve(__dirname, '..', '..', 'Evidence', browser);
      fs.mkdirSync(dir, { recursive: true });
      await page.goto(p.url, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(dir, `${p.name}.png`), fullPage: false });
    });
  }
});
