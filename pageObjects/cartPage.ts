import { Selector, t } from 'testcafe';

class CartPage {
	private readonly checkoutButton: Selector = Selector('.checkout_button');

	public async clickCheckout(): Promise<void> {
		await t.click(this.checkoutButton);
	}
}

export default new CartPage();
