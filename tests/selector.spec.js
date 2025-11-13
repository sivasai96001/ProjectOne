import {test,expect} from '@playwright/test'

test("selectors test", async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/');
    await page.pause();
    await page.locator('#user-name').click();
    //await page.locator('#user-name').fill('siva');
    await page.locator('//input[@placeholder="Username"]').fill('Naveesh');
    await page.locator('id=password').click();
    await page.locator('id=password').fill('hihihihihi');
    await page.locator('text=LOGIN').click();
}) 