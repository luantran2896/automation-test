const base = require('@playwright/test');
const { AddFundPage } = require('../pages/add-fund.page');

// Extend base test by providing "addFundPage"
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
exports.test = base.test.extend({
  addFundPage: async ({ page }, use) => {
    // Set up the fixture.
    const addFundPage = new AddFundPage(page);
    await addFundPage.goto();
    await addFundPage.login();

    // Use the fixture value in the test.
    await use(addFundPage);
  },
});
exports.expect = base.expect;
