
import { test } from '@playwright/test';

test("Valid Login",async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('input[name="username"]').fill('Admin');

    await page.locator('input[name="password"]').fill('admin123');

    await page.locator('button[type="submit"]').click();

})