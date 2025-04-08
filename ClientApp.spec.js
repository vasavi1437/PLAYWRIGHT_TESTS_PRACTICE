
const {test, expect} = require ('@playwright/test');

const {CartPage} = require ('../pages/CartPage');
const {LoginPage} = require('../pages/LoginPage');
const {CheckoutPage} = require('../pages/CheckoutPage');
const {DashboardPage} = require('../pages/DashboardPage');

test('Login and place order successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  const email = 'anshika@gmail.com';
  const password = 'Iamking@000';
  const productName = 'Zara Coat 4';

  await loginPage.goto();
  await loginPage.login(email, password);

  await dashboardPage.addProductToCart(productName);
  await dashboardPage.waitForToast();
  await dashboardPage.navigateToCart();

  await cartPage.verifyProductInCart(productName);
  await cartPage.proceedToCheckout();

  await checkoutPage.selectCountry('India');
  await checkoutPage.verifyEmail(email);
  await checkoutPage.placeOrder();

  const orderId = await checkoutPage.getOrderId();
  console.log('✅ Order placed. Order ID:', orderId);
});
