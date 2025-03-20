const { test, expect } = require('@playwright/test');

test("Select Values From Dropdown", async function ({ page }) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    // Select by label
    await page.locator("#state").selectOption({ label: "Goa" });
    await page.waitForTimeout(500);

    // Select by value
    await page.locator("#state").selectOption({ value: "Himachal Pradesh" });
    await page.waitForTimeout(500);

    // Select by label (ensuring stability instead of index)
    await page.locator("#state").selectOption({ label: "Kerala" });
    await page.waitForTimeout(500);

    // Validate selected value
    await expect(page.locator("#state option:checked")).toHaveText("Kerala");
});
