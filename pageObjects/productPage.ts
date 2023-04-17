import { Selector, t } from 'testcafe';

class ProductPage {
	private readonly addToCartButton: Selector = Selector('.btn_primary');
	private readonly cartIcon: Selector = Selector('.shopping_cart_link');

	public async addToCart(): Promise<void> {
		await t.click(this.addToCartButton);
	}

	public async iconCartClick(): Promise<void> {
		await t.click(this.cartIcon);
	}
}

export default new ProductPage();
