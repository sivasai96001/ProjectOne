import { test, expect, chromium } from '@playwright/test'

import { Sauce1 } from '../Pages/sauce'

test.beforeEach('all', async ({ page }) => {

    //    await page.goto('https://www.saucedemo.com/v1/index.html')
    //    const username =await expect(page.locator('#user-name')).toHaveAttribute('data-test',/user/)
    //    await page.fill('#user-name', 'standard_user')
    //   const get =await page.locator('#user-name').getAttribute('placeholder')
    //   await console.log(get)
    //   await page.fill('#password', 'secret_sauce')
    //   console.log(await page.locator('#password').getAttribute('placeholder'))
    //   await page.locator('input:has-text("LOGIN")').click()

    const obj = new Sauce1(page)

    await obj.url()
    await obj.login('standard_user', 'secret_sauce')



})

test('homepage', async ({ page }) => {
    const obj = new Sauce1(page)
    await obj.cartItems()
    //     await expect(page).toHaveTitle(/Swag/)
    //    //await page.locator('text=Sauce Labs Backpack').click()
    //    await page.getByText('Sauce Labs Backpack').click()
    //    await page.getByText('ADD TO CART').click();
})

test('logout', async ({ page }) => {

    const obj = new Sauce1(page)
    await obj.logOut()
    // await page.getByText('Open Menu').click()
    // await page.getByText('Logout').click()
})