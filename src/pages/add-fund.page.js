export class AddFundPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://dev-tiktok.ecomdy.com/login');
    await this.page.waitForTimeout(2000);
  }

  async login() {
    await this.page.locator('#login-email').type('thuyhangdn98+264@gmail.com');
    await this.page.locator('#login-password').type('123123');
    await this.page.locator('button#btn-login').click();
    await this.page.waitForTimeout(2000);
  }
}