"use strict";
// Copyright 2015-2020 Palo Alto Networks, Inc
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//       http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const commonlogger_1 = require("./commonlogger");
function headersBasic() {
    return { 'x-xdr-auth-id': this.keyId, authorization: this.key };
}
/**
 * Creates a basic XDR ApiKey structure
 * @param key api key itself
 * @param keyId api key identifier
 */
function basicXdrApiKey(key, keyId) {
    commonlogger_1.commonLogger(commonlogger_1.logLevel.DEBUG, `Created basicXdrApiKey (id: ${keyId})`);
    return {
        key: key,
        keyId: keyId,
        headers: headersBasic
    };
}
exports.basicXdrApiKey = basicXdrApiKey;
function headersAdvanced(preload) {
    const nonce = preload && preload.nonce || crypto_1.randomBytes(32).toString('hex');
    const timestamp = (preload && preload.ts || Date.now()).toString();
    const advApiKey = crypto_1.createHash('sha256').update(`${this.key}${nonce}${timestamp}`).digest().toString('hex');
    return {
        "x-xdr-auth-id": this.keyId,
        "x-xdr-nonce": nonce,
        "x-xdr-timestamp": timestamp,
        authorization: advApiKey
    };
}
/**
 * Creates an advanced XDR ApiKey structure
 * @param key api key itself
 * @param keyId api key identifier
 */
function advXdrApiKey(key, keyId) {
    commonlogger_1.commonLogger(commonlogger_1.logLevel.DEBUG, `Created advXdrApiKey (id: ${keyId})`);
    return {
        key: key,
        keyId: keyId,
        headers: headersAdvanced
    };
}
exports.advXdrApiKey = advXdrApiKey;
