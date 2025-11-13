import{test,expect} from '@playwright/test'

test('flipkart 1', async({page})=>{
        await page.goto('https://www.flipkart.com/')
       let search= await page.locator('//input[@type="text"]')
      await search.click();
      await search.fill('realme')
})