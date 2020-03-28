"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const mocha_1 = require("mocha");
const __1 = require("..");
const preNonce = 'b5834c137a825cc6c80111f237e1c5f8dedeef5df9dcd4c7f1dc73f180c89b47';
const preTs = 1584983036945;
const apiKey = 'testApiKey';
const apiKeyId = 'testApiKeyId';
const advApiKey = '8eb5e56a1656a35c9d187762d945339455b5382e11d779c458a63c652e1e79e9';
mocha_1.describe('headers', function () {
    it('basic api key', function () {
        const headers = __1.basicXdrApiKey(apiKey, apiKeyId).headers();
        assert.equal(headers.authorization, apiKey, 'authorization header');
        assert.equal(headers["x-xdr-auth-id"], apiKeyId, '"x-xdr-auth-id" header');
    });
    it('advanced api key', function () {
        const headers = __1.advXdrApiKey(apiKey, apiKeyId).headers({ nonce: preNonce, ts: preTs });
        assert.equal(headers.authorization, advApiKey, 'authorization header');
        assert.equal(headers["x-xdr-auth-id"], apiKeyId, '"x-xdr-auth-id" header');
        assert.equal(headers["x-xdr-nonce"], preNonce, '"x-xdr-nonce" header');
        assert.equal(headers["x-xdr-timestamp"], preTs.toString(), '"x-xdr-timestamp" header');
    });
});
