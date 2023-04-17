import { Selector, t } from 'testcafe';

class OrderCompletePage {
	private readonly orderCompleteHeaderSelector: Selector =
		Selector('.complete-header');

	public async waitForPageToLoad(): Promise<void> {
		await t.expect(this.orderCompleteHeaderSelector.exists).ok();
	}

	public get orderCompleteHeader(): Selector {
		return this.orderCompleteHeaderSelector;
	}
}

export default new OrderCompletePage();
