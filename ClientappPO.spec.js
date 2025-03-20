const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager');

//define the test case
test('Client App login', async ({page})=>
{

//Initialize POM
  const poManager = new POManager(page);

//Test the data
    const username = "anshika@gmail.com";
    const password = "Iamking@000"
    const productName = 'Zara Coat 4';
    const products = page.locator(".card-body");

//Login page object from POManager
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username,password);

//search and add product to cart
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();

//verify product in cart & checkout

   const cartPage = poManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(productName);
   await cartPage.Checkout();

//order review &submission

   const ordersReviewPage = poManager.getOrdersReviewPage();
   await ordersReviewPage.searchCountryAndSelect("ind","India");
   const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);

//verify order in orders History page

  await dashboardPage.navigateToOrders();
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(orderId);

//verifies order is placed successfully
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});