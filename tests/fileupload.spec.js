import {test, expect} from '@playwright/test';

test('file upload', async ({page}) => {
    await page.goto('https://www.google.com/?zx=1793874827203');
   
  const searchBox = await page.waitForSelector('//textarea[@aria-label="Search"]',{state: 'visible'});
  await searchBox.fill('am');
   await page.locator('//div[@id="Zrbbw"]').click();
});