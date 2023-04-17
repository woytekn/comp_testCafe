import { Selector, t } from 'testcafe';

class LandingPage {
	private readonly url: string = '/';
	private readonly backpackProduct: Selector = Selector(
		'.inventory_item'
	).withText('Sauce Labs Backpack');
	private readonly cartIcon: Selector = Selector('.shopping_cart_link');

	public async clickBackpackProduct(): Promise<void> {
		await t.click(this.backpackProduct);
	}

	public async iconCartClick(): Promise<void> {
		await t.click(this.cartIcon);
	}

	public async open(): Promise<void> {
		await t.navigateTo(this.url);
	}

	public get appLogo(): Selector {
		return Selector('.app_logo');
	}
}

export default new LandingPage();
