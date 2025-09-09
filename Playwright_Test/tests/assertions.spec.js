import{test,expect} from '@playwright/test'

test("assertions",async({page,context})=>{
  await context.tracing.start({snapshots: true, screenshots: true})
    await page.goto('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/Kitchen/)
   // await page.pause()
    await expect(page.locator('//a[@class="Card_card__3AVip"]')).toHaveCount(11)
    await expect(page.locator('//a[@class="Card_card__3AVip"][2]')).toBeVisible()

   if(page.$('//a[@class="Card_card__3AVip"][1]')){
        await page.locator('//a[@class="Card_card__3AVip"][2]').click()
    }
    await expect(page).toHaveTitle(/API/)

    //await expect(page.locator('text=Canvas')).toHaveText('Canvas')
// await expect(page).toHaveScreenshot()
//  await expect(page.locator('h3:has-text("Canvas")')).toHaveAttribute('class',/chakra/)
//   await expect(page.locator('h3:has-text("Canvas")')).toHaveClass(/css/)
//   await context.tracing.stop({path: 'tests/assertionstrace.zip'})
})