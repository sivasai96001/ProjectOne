import { test, expect } from '@playwright/test';

test('check title', async ({ page }) => {

    await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e');

    await page.getByRole('link', { name: /EN/ }).click();

    await page.getByText('తెలుగు -').click();

    await page.getByRole('link', { name: 'రద్దు చేయి' }).click();

    await expect(page).toHaveTitle(/Online/);

    const searchBox = page.getByRole('searchbox', {
        name: 'Search Amazon.in'
    });

    await searchBox.fill('mobiles');
    await page.getByText(/ under 20000 5g phones latest/).click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
    const value = await page.locator('#nav-cart-count').innerText();
    console.log(Number(value))
    if (Number(value) > 0) {
        console.log('Item in cart')
    }
    await page.getByRole('link', { name: 'Customer Service' }).click();
});
