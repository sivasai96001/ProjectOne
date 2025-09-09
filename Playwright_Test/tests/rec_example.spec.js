import { test, expect, chromium } from '@playwright/test';
import { snapshot } from 'node:test';
import path from 'path';
//import { chromium } from '@playwright/test';
let page;
let context;
test('hii',async () => {
  
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  /*await context.close();
  await browser.close();*/
});
 
test.beforeEach(async()=>{
  const browser= await chromium.launch();
  context= await browser.newContext();
  page= await context.newPage();
});
test.afterEach(async()=>{
  await context.close();
});

test("google launch", async()=>{
  await context.tracing.start({snapshot: true, screenshot: true});
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle('Google');
  await context.tracing.stop({path: 'test1_trace.zip'});
});