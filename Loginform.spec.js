const {test, expect} = require("playwright/test")


test('Login Test - Successful Login', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.waitForLoadState('domcontentloaded');

  // Fill in login credentials
  
  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Password123');

  // Click login button
  await page.locator('#submit').click();

  // Wait for navigation or confirmation element
  await page.waitForURL(/.*logged-in-successfully/);

  // Verify URL changed correctly
  await expect(page).toHaveURL(/.*logged-in-successfully/);

  // Verify the success message appears
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');

  // Verify if a logout button or welcome message exists (better validation)
  await expect(page.locator('.wp-block-button__link')).toHaveText('Log out');
});

