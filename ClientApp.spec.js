const { test, expect } = require('@playwright/test');

test('Client App login and purchase flow', async ({ page }) => {
    const email = "anshika@gmail.com";
    const productName = 'Zara Coat 4';

    // Navigate to the client app
    await page.goto("https://rahulshettyacademy.com/client");
 
    //  Login process with auto-waiting
    await page.fill("#userEmail", email);
    await page.fill("#userPassword", "Iamking@000");
    await page.click("[value='Login']");
    await page.waitForLoadState('networkidle'); // Ensures all requests complete

    // Validate that products are loaded
    const products = page.locator(".card-body");
    await expect(products).toHaveCountGreaterThan(0);

    //  Select and add the specific product to the cart
    const product = products.filter({ hasText: productName }).locator("text= Add To Cart").first();
    await expect(product).toBeVisible();
    await product.click();

    //  Wait for cart update notification
    await page.waitForSelector(".toast-message", { state: 'visible' });

    //  Navigate to cart and validate the product
    await page.click("[routerlink*='cart']");
    await page.waitForURL("**/cart");

    const cartItemLocator = page.locator(`h3:has-text('${productName}')`);
    await expect(cartItemLocator).toBeVisible();

    //  Proceed to checkout
    await page.click("text=Checkout");
    await page.fill("[placeholder*='Country']", "ind", { delay: 100 });

    //  Select country dynamically
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    await dropdown.locator("button", { hasText: "India" }).click();

    // Verify email is pre-filled on checkout
    await expect(page.locator(".user__name [type='text']").first()).toHaveValue(email);

    //  Place the order and verify confirmation
    await page.click(".action__submit");
    await expect(page.locator(".hero-primary")).toHaveText(/Thankyou for the order/i);

    //  Capture Order ID
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Order ID:", orderId.trim());

    //  Navigate to Orders Page
    await page.click("button[routerlink*='myorders']");
    await page.waitForSelector("tbody");

    //  Validate the order exists
    const orderRow = page.locator("tbody tr").filter({ hasText: orderId });
    await expect(orderRow).toBeVisible();
    await orderRow.locator("button").first().click();

    //  Verify order details
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails.trim())).toBeTruthy();
});

