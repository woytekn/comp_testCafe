import { Selector, t } from 'testcafe';

class CheckoutPage {
	private readonly url: string = '/checkout-step-one';
	private readonly firstNameInput: Selector = Selector('#first-name');
	private readonly lastNameInput: Selector = Selector('#last-name');
	private readonly zipCodeInput: Selector = Selector('#postal-code');
	private readonly continueButton: Selector = Selector(
		'.btn_primary.cart_button'
	);
	private readonly finishButton: Selector = Selector('.btn_action.cart_button');

	public async fillForm(
		firstName: string,
		lastName: string,
		zipCode: string
	): Promise<void> {
		await t.typeText(this.firstNameInput, firstName);
		await t.typeText(this.lastNameInput, lastName);
		await t.typeText(this.zipCodeInput, zipCode);
		await t.click(this.continueButton);
	}

	public async clickFinish(): Promise<void> {
		await t.click(this.finishButton);
	}

	public async waitForPageToLoad(): Promise<void> {
		await t.expect(this.firstNameInput.exists).ok();
	}
}

export default new CheckoutPage();
