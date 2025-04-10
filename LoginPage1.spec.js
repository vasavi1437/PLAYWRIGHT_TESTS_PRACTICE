
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
