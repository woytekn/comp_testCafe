import LoginPage from '../pageObjects/loginPage';
import LandingPage from '../pageObjects/landingPage';
import ProductPage from '../pageObjects/productPage';
import CartPage from '../pageObjects/cartPage';
import CheckoutPage from '../pageObjects/checkoutPage';
import OrderCompletePage from '../pageObjects/orderCompletePage';
import testData from '../helpers/test.data';
import { takeSnapshot } from 'testcafe-blink-diff';
import * as percySnapshot from '@percy/testcafe';

fixture('My Login application')
	.page('http://saucedemo.com')
	.beforeEach(async () => {
		// You can add any test setup code here
	});

test('should login with valid credentials', async (t) => {
	// Pass testController to functions that need it
	await LoginPage.login(testData.user.username, testData.user.password);
	await LandingPage.appLogo.exists;
	// Only for testcafe blink diff
	await (percySnapshot as any)(t, 'Session: Welcome');
	await LandingPage.clickBackpackProduct();
	await ProductPage.addToCart();
	await LandingPage.iconCartClick();
	await CartPage.clickCheckout();
	await CheckoutPage.waitForPageToLoad();
	await CheckoutPage.fillForm(
		testData.shippingInfo.firstName,
		testData.shippingInfo.lastName,
		testData.shippingInfo.zipCode
	);
	await CheckoutPage.clickFinish();
	await OrderCompletePage.waitForPageToLoad();
	await OrderCompletePage.orderCompleteHeader.withText(
		'Thank you for your order!'
	).exists;
});
