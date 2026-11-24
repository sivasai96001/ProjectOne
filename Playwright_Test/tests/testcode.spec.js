const { chromium } = require('playwright');
const { test } = require('@playwright/test');
test("hi",async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('sai');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('hi');
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // ---------------------
  await context.close();
  await browser.close();
});