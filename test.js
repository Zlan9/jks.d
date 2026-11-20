const { test } = require('node:test');
const assert = require('node:assert');
const getUser = require('./app');
test('Should fetch user data successfully', async () => {
    const user = await getUser();

    assert.ok(user.id);
    assert.ok(user.name);
    assert.ok(user.email);

    console.log('User API test passed!');
});
