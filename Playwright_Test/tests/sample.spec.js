import{test,expert} from '@playwright/test'

test('google',async({page})=>{
await page.goto('https://chatgpt.com/')
})