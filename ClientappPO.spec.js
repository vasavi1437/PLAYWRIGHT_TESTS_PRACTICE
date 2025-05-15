const {test} = require('@playwright/test');
const {POManager} = require('../PageObjects/POManager');
//define the test case
 test('Client App login', async ({page})=>
{

//Initialize POM
  const poManager = new POManager(page);

//Test the data
    const email = "anshika@gmail.com";
    const password = "Iamking@000"
    // const productName = 'Zara Coat 4';

//Login page object from POManager
    await poManager.getLoginPage(email,password);

// //search and add product to cart
//     const dashboardPage = poManager.getDashboardPage();
//     await dashboardPage.searchProductAddCart(productName);
//     await dashboardPage.navigateToCart();
    

// //order review &submission

//    const ordersReviewPage = poManager.getOrdersReviewPage();
//    await ordersReviewPage.searchCountryAndSelect("ind","India");
//    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
//   console.log(orderId);

// //verify order in orders History page

//   await dashboardPage.navigateToOrders();
//   const ordersHistoryPage = poManager.getOrdersHistoryPage();
//   await ordersHistoryPage.searchOrderAndSelect(orderId);

// //verifies order is placed successfully
//   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});