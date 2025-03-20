import { test, expect } from '@playwright/test';

test('Login Test - Valid Credentials', async ({ page }) => {

  // Navigate to the login page

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Fill in login credentials

  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  // Ensure the Submit button is visible before clicking

  const submitButton = page.locator('button:has-text("Submit")');

  await expect(submitButton).toBeVisible();// Ensure it's present

  await submitButton.click(); // Click using a more reliable selector

  // Verify successful login by checking redirected page content

  await expect(page).toHaveURL(/.*logged-in-successfully/);
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
  
});

