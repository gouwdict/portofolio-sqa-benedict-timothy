const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const htmlPath = path.resolve(__dirname, '..', 'SummaryReport.html');
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'));
  await page.waitForTimeout(2000);
  await page.pdf({
    path: path.resolve(__dirname, '..', 'SummaryReport.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '16mm', bottom: '16mm', left: '14mm', right: '14mm' }
  });
  await browser.close();
  console.log('PDF created');
})();
