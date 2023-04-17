Tool used for visual testing
npm i testcafe-blink-diff --save-dev

Workaround for TypeError: (0 , testcafe_1.default) is not a function issue:
https://github.com/percy/percy-testcafe/issues/109

Workaround for Property 'expect' does not exist on type 'Done'.ts(2339)
// Check that the response was the mocked response
await (t as any).expect(logger.contains(record => record.response.statusCode === 200)).ok();
await (t as any).expect(logger.requests[0].response.body).eql(JSON.stringify({ data: 'mocked data' }));
