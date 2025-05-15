import { chromium, test } from "@playwright/test";

test("Login test demo", async ({}, testInfo) => {
    testInfo.setTimeout(60000); // Increase timeout to 60 seconds

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");

    await page.locator("//a[@data-toggle='dropdown' and contains(., 'My account')]").click();

    await page.locator("a.list-group-item[href*='route=account/register']").click();

    await page.locator('input[placeholder="First Name"]').fill("vasavi");

    await page.locator('input[placeholder="Last Name"]').fill("vempalli");

    await page.locator('input[placeholder="E-Mail"]').fill("vasavi296@gmail.com");

    await page.locator('input[placeholder="Telephone"]').fill("8985666781");

    await page.locator('input[placeholder="Password"]').fill("Vasavi@123");

    await page.locator('input[placeholder="Password Confirm"]').fill("Vasavi@123");

})