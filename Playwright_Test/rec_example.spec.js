const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dsaucedemo%26oq%3Dsaucedemo%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDk1ODVqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DkumSaMjyM_7LseMPifLpwAg&q=EgRnWtNKGJPTy8QGIjAwu1Ah1mGJ2f8yRL3e8bItSlP_3Cn3gHiGZQBf1e2y0tpKr7vFFB83OK6ae0-wPcsyAVJaAUM');

  // ---------------------
  await context.close();
  await browser.close();
})();