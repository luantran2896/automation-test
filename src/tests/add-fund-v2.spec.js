// @ts-check
const { test, expect } = require('../fixtures/add-fund.fixture');

test.describe('credit card', () => {
  test('Check display information on the section [Add fund] is correct incase input valid amount into text box [Amount]',  async ({addFundPage}) => {
    const page = addFundPage.page;
    await page.reload();
    await page.locator('#trigger-credit-card-add-fund___BV_tab_button__').click();
    await page.locator('div.list-card.bg-white.credit-card-top-up-form').locator('input.input-height').type('200');
    await page.waitForTimeout(1000);
    expect(page.locator('small.d-flex.align-items-center').first()).toContainText('This amount is suitable');
  });

  test('Check top up unsuccessfully incase no input amount into text box [Amount] on the section [Add fund]',  async ({addFundPage}) => {
    const page = addFundPage.page;
    await page.reload();
    await page.locator('#trigger-credit-card-add-fund___BV_tab_button__').click();
    expect(page.locator('button#trigger-top-up-cc')).toBeDisabled();
  });

  test('Check input white_space character unsuccessfully incase input white_space character into text box [Amount] on the section [Add fund]',  async ({addFundPage}) => {
    const page = addFundPage.page;
    await page.reload();
    await page.locator('#trigger-credit-card-add-fund___BV_tab_button__').click();
    await page.locator('div.list-card.bg-white.credit-card-top-up-form').locator('input.input-height').type('  ');
    expect(page.locator('div.list-card.bg-white.credit-card-top-up-form').locator('input.input-height')).toBeEmpty();
    expect(page.locator('button#trigger-top-up-cc')).toBeDisabled();
  });

  test('Check input text character unsuccessfully incase input text character into text box [Amount] on the section [Add fund]',  async ({addFundPage}) => {
    const page = addFundPage.page;
    await page.reload();
    await page.locator('#trigger-credit-card-add-fund___BV_tab_button__').click();
    await page.locator('div.list-card.bg-white.credit-card-top-up-form').locator('input.input-height').type('abc');
    expect(page.locator('div.list-card.bg-white.credit-card-top-up-form').locator('input.input-height')).toBeEmpty();
    expect(page.locator('button#trigger-top-up-cc')).toBeDisabled();
  });

  test('Check input special character unsuccessfully incase input special character into text box [Amount] on the section [Add fund]',  async ({addFundPage}) => {
    const page = addFundPage.page;
    await page.reload();
    await page.locator('#trigger-credit-card-add-fund___BV_tab_button__').click();
    await page.locator('div.list-card.bg-white.credit-card-top-up-form').locator('input.input-height').type('#$%');
    expect(page.locator('div.list-card.bg-white.credit-card-top-up-form').locator('input.input-height')).toBeEmpty();
    expect(page.locator('button#trigger-top-up-cc')).toBeDisabled();
  });

  test('Check top up unsuccessfully incase input amount < 0$ into text box [Amount] on the section [Add fund]',  async ({addFundPage}) => {
    const page = addFundPage.page;
    await page.reload();
    await page.locator('#trigger-credit-card-add-fund___BV_tab_button__').click();
    await page.locator('div.list-card.bg-white.credit-card-top-up-form').locator('input.input-height').type('-100');
    await page.waitForTimeout(1000);
    expect(page.locator('small.text-danger')).toContainText('Value must be greater than zero');
    expect(page.locator('button#trigger-top-up-cc')).toBeDisabled();
  });

  test('Check top up unsuccessfully incase input amount < 200$ into text box [Amount] on the section [Add fund]',  async ({addFundPage}) => {
    const page = addFundPage.page;
    await page.reload();
    await page.locator('#trigger-credit-card-add-fund___BV_tab_button__').click();
    await page.locator('div.list-card.bg-white.credit-card-top-up-form').locator('input.input-height').type('100');
    await page.waitForTimeout(1000);
    expect(page.locator('small.text-danger')).toContainText('Amount is invalid (min: $200, max: $100,000)');
    expect(page.locator('button#trigger-top-up-cc')).toBeDisabled();
  });
});
