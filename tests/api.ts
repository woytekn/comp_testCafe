import { ClientFunction, RequestMock, Selector, t } from 'testcafe';

const mockData = {
	data: {
		id: 2,
		email: 'janet.weaver@reqres.in',
		first_name: 'Janet',
		last_name: 'Weaver',
		avatar: 'https://reqres.in/img/faces/2-image.jpg',
	},
};

const mock = RequestMock()
	.onRequestTo('https://reqres.in/api/users/2')
	.respond(mockData, 404);

fixture('Mocking Example').page('https://reqres.in/').requestHooks(mock);

test('Mocking Response', async (t) => {
	const message = Selector('[data-id="users-single"]');
	await (t as any).click(message);

	const user = await ClientFunction(() =>
		fetch('https://reqres.in/api/users/2').then((res) => res.json())
	)();

	console.log(user);

	await (t as any).expect(user).eql(mockData);
});
