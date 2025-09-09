const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.getByRole('dialog').locator('div').filter({ hasText: 'Sign in to GoogleGet the most' }).nth(1).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByText('apple iphone 15See more').click();

  // ---------------------
  await context.close();
  await browser.close();
})();