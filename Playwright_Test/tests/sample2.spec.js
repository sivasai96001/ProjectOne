import{test,expect} from '@playwright/test'

test('google login this time',async({page})=>{
 await page.goto('https://www.google.com/')
})
