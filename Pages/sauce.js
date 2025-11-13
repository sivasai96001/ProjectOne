exports.Sauce1 = class Sauce1 {
    constructor(page) {
        this.page = page
        this.username = '#user-name'
        this.password = '#password'
        this.loginBtn = page.locator('input:has-text("LOGIN")')
       this.product = page.locator('text=Sauce Labs Backpack')

        this.addToCart = page.getByText('ADD TO CART')
        this.OpenMenu = page.getByText('Open Menu')
        this.logoutBtn = page.getByText('Logout')
    }

   async url() {
  await this.page.goto('https://www.saucedemo.com/v1/index.html', { waitUntil: 'domcontentloaded' });
 // await this.page.waitForLoadState('networkidle'); // Ensures resources have finished loading
}


    async login(username, password) {
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
        await this.loginBtn.click()
    }

    async cartItems() {
        await this.product.waitFor({ state: 'visible' });
        await this.product.click()
        await this.addToCart.click()
    }

    async logOut() {
        await this.OpenMenu.click()
        await this.logoutBtn.click()
    }
}