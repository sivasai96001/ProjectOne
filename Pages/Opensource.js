exports.Open = class Open {

    constructor(page) {
        this.page = page
        this.UserName = page.locator('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input')
        this.Password = page.locator('//input[@placeholder="Password"]')
        this.loginBtn = page.locator('//button[@type="submit"]')
    }

    async launchUrl() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async login(user, pwrd) {
        await this.UserName.fill(user)
        await this.Password.fill(pwrd)
        await this.loginBtn.click()
    }

}