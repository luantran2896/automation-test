// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('login eac success', async ({ page }) => {
  await page.goto('https://eac.ecomdy.com/login');

  await expect(page).toHaveTitle('Ecomdy - Easy Advertising Campaign');
  await page.getByPlaceholder('Email address').type('thuyhangdn98+59@gmail.com');
  await page.getByPlaceholder('Password').type('12341234');
  await page.getByRole('button').last().click();
  await page.waitForTimeout(6000);
  await expect(page.locator('.ecd-text-truncate')).toHaveText('Hang 59');
  await page.screenshot({ path: 'login-success.png' });
});

test('login eac failed', async ({ page }) => {
  await page.goto('https://eac.ecomdy.com/login');

  await expect(page).toHaveTitle('Ecomdy - Easy Advertising Campaign');
  await page.getByPlaceholder('Email address').type('thuyhangdn98+59@gmail.com');
  await page.getByPlaceholder('Password').type('123412342');
  await page.getByRole('button').last().click();
  await page.waitForTimeout(2000);
  await expect(page.locator('.ant-notification-notice-message')).toHaveText('Email or password is not correct')
  await page.screenshot({ path: 'test-failed.png' });
  // await page.waitForLoadState('networkidle');
});
