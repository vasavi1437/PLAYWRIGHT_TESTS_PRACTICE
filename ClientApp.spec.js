const { test, expect } = require('@playwright/test');

test('Client App login and purchase flow', async ({ page }) => {
    const email = "anshika@gmail.com";
    const productName = 'Zara Coat 4';

    // Navigate to the client app
    await page.goto("https://rahulshettyacademy.com/client");
 
    //  Login process with auto-waiting
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle'); // Ensures all requests complete

    // Validate that products are loaded
    const products = page.locator(".card-body");
    const productCount = await products.count();
    expect(productCount).toBeGreaterThan(0);
    
    //  Select and add the specific product to the cart
    const product = products.locator(`b:has-text("${productName}")`).first();
    await expect(product).toBeVisible();
    await product.locator("text= Add To Cart").click();

    //  Wait for cart update instead of using `waitForTimeout`
    await page.waitForSelector(".toast-message", { state: 'visible' });

    //  Navigate to cart and validate the product
    await page.locator("[routerlink*='cart']").click();
    await page.waitForURL("**/cart");

    const cartItemLocator = page.locator(`h3:has-text('${productName}')`);
    await expect(cartItemLocator).toBeVisible();

    //  Proceed to checkout
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").type("ind", { delay: 100 });

    //  Select country dynamically
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    await dropdown.locator("button", { hasText: "India" }).click();

    // Verify email is pre-filled on checkout
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

    //  Place the order and verify confirmation
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toContainText("Thankyou for the order");

    //  Capture Order ID
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Order ID:", orderId.trim());

    //  Navigate to Orders Page
    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForSelector("tbody");

    //  Validate the order exists
    const rows = page.locator("tbody tr");
    let orderFound = false;

    for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId.trim())) {
            await rows.nth(i).locator("button").first().click();
            orderFound = true;
            break;
        }
    }

    expect(orderFound).toBeTruthy();

    //  Verify order details
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails.trim())).toBeTruthy();
    
});