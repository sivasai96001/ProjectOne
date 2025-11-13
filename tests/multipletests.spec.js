import {test, expect} from '@playwright/test'
    
  

test("test1", async({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   // test.setTimeout(8*80000)
    await expect(page).toHaveURL(/login/)
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
});

test.only("test 2", async({page})=>{
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    const mail = await page.locator('id=Email')
  await expect(mail).toHaveValue('admin@yourstore.com')
    await mail.fill('ss@gmail.com')
});
