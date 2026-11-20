const { test } = require('node:test');
const assert = require('node:assert');
const getMessage = require('./app');
test('Application should return the correct message', () => {
    assert.strictEqual(
        getMessage(),
        'Hello! Jenkins CI/CD pipeline is working.'
    );
});
