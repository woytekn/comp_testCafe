import { Selector, t } from 'testcafe';

//Remember to pass t, as it is a test controller

class LoginPage {
	private readonly url: string = './';
	private readonly usernameInput: Selector;
	private readonly passwordInput: Selector;
	private readonly loginButton: Selector;

	constructor() {
		this.usernameInput = Selector('#user-name');
		this.passwordInput = Selector('#password');
		this.loginButton = Selector('#login-button');
	}

	public async login(username: string, password: string): Promise<void> {
		await t.typeText(this.usernameInput, username);
		await t.typeText(this.passwordInput, password);
		await t.click(this.loginButton);
	}

	public async open(): Promise<void> {
		await t.navigateTo(this.url);
	}
}

export default new LoginPage();
