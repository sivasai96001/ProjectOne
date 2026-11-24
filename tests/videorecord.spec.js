import{test,expect, chromium} from '@playwright/test'

test('video recording',async()=>{
    const browser =await chromium.launch({
        slowMo:10000
    })


    const context =await browser.newContext({
        recordVideo:{
            dir:'videp/',
            size: {width: 800,height: 600}
        }
    })

    const page=await context.newPage()
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   // test.setTimeout(8*80000)
    await expect(page).toHaveURL(/login/)
    await page.pause();
    const user =await page.locator('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input')
    await expect(user).toBeEnabled()
    await user.fill('Admin')
    const pwrd= await page.locator('//input[@placeholder="Password"]')
    await expect(pwrd).toBeVisible()
    await pwrd.fill('admin123')
    const login = await page.locator('//button[@type="submit"]')
    await expect(login).toContainText('Logi')
    await login.click()
    await expect(page).toHaveURL(/dashboard/)
})