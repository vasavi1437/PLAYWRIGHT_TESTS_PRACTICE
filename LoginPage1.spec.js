
const { test, expect } = require('@playwright/test');

//Define Test Case
test('Login Page - Successful login', async ({ page }) => {

  //Login in to URL in the Browser

  await page.goto('https://the-internet.herokuapp.com/login');

  // login credentials username & Password

  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  // Login button 

  await page.locator('button[type="submit"]').click();

  // Wait for secure page
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

  // Validate success message
  const flashMessage = page.locator('#flash');
  await expect(flashMessage).toContainText('You logged into a secure area!');

  // Validate Logout button
  const logoutButton = page.locator('a.button');
  await expect(logoutButton).toHaveText('Logout');
});
