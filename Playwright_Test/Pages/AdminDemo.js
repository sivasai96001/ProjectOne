exports.Admin = class Admin {
    constructor(page) {
        this.page = page
        this.mail = page.locator('id=Email')
        this.password = page.locator('[id="Password"]')
        this.loginBtn = page.locator('//button[@type="submit"]')
    }

    async launchUrl() {
        await this.page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

    }

    async login(user, pwrd) {
        await this.mail.fill(user)
        await this.password.fill(pwrd)
        await this.loginBtn.click()
    }
}
