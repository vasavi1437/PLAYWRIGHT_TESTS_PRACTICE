import { test } from '@playwright/test';

test('Login Test - Valid Credentials', async ({ page }) => {

  // Navigate to the login page

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Fill in login credentials

  await page.locator('//label[text()="Username"]/following::input[@name="username"]').fill('student');

  await page.locator('//label[text()="Password"]/following::input[@name="password"]').fill('Password123');

  await page.locator('//button[@id="submit"]').click();

  await page.locator('//a[text()="Log out"]').click();
  
});