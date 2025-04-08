const { test, expect } = require('@playwright/test');

test('Login Page - Invalid Password', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill in valid username but invalid password
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword'); // missing "!" makes it invalid

  // Click the login button
  await page.locator('button[type="submit"]').click();

  // User should stay on login page
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

  // Validate the error message
  const flashMessage = page.locator('#flash');
  await expect(flashMessage).toContainText('Your password is invalid!');
});
