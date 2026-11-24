exports.SamplePom = class SamplePom {
  constructor(page) {
    this.page = page;

    this.loginPopupCloseButton = page.getByRole('button', {
      name: '\u2715',
      exact: true,
    });
    this.productLink = page
      .getByRole('link')
      .filter({ hasText: /Apple iPhone 17 Pro \(/i })
      .first();
    this.pricePattern = /\u20b9\s*[0-9,]+(?:\.[0-9]{2})?/;
    this.mobilePrice = null;
  }

  async openFlipkart() {
    await this.page.goto('https://www.flipkart.com/', {
      waitUntil: 'domcontentloaded',
    });
  }

  async closeLoginPopupIfPresent() {
    if (await this.loginPopupCloseButton.isVisible()) {
      await this.loginPopupCloseButton.click();
    }
  }

  async searchProduct(productName) {
    const searchUrl = new URL('https://www.flipkart.com/search');
    searchUrl.searchParams.set('q', productName);
    await this.page.goto(searchUrl.toString(), {
      waitUntil: 'domcontentloaded',
    });
    await this.closeLoginPopupIfPresent();
  }

  async openMobile() {
    await this.productLink.waitFor({ state: 'visible', timeout: 30000 });
    const productDetails = await this.productLink.innerText();
    const priceMatch = productDetails.match(this.pricePattern);
    if (!priceMatch) {
      throw new Error('The iPhone 17 Pro price was not present in the search result.');
    }

    this.mobilePrice = priceMatch[0].replace(/\s/g, '');
    await this.productLink.click();
  }

  async getMobilePrice() {
    if (!this.mobilePrice) {
      throw new Error('The iPhone 17 Pro price was not captured from the search result.');
    }

    console.log('iPhone 17 Pro Price:', this.mobilePrice);
    return this.mobilePrice;
  }

  async completeMobileSearch(productName) {
    await this.openFlipkart();
    await this.closeLoginPopupIfPresent();
    await this.searchProduct(productName);
    await this.openMobile();
    return await this.getMobilePrice();
  }
};
