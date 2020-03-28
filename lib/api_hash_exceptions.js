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
const xdrerror_1 = require("./xdrerror");
const hash_exception_blacklist_1 = require("./hash_exception_blacklist");
const hash_exception_whitelist_1 = require("./hash_exception_whitelist");
const hashExceptionsPath = '/public_api/v1/hash_exceptions';
exports.blackListPath = `${hashExceptionsPath}/blacklist`;
exports.whiteListPath = `${hashExceptionsPath}/whitelist`;
function createHashExceptionApi(sess) {
    return {
        session: sess,
        blacklistFile: hash_exception_blacklist_1.blacklistFile,
        whitelistFile: hash_exception_whitelist_1.whitelistFile
    };
}
exports.createHashExceptionApi = createHashExceptionApi;
function hashExceptionApiErrBldr(data, statusCode) {
    const parsed = xdrerror_1.parseXdrError(data);
    if (typeof parsed == 'string') {
        return new xdrerror_1.XdrError('alerts', parsed, statusCode);
    }
    else {
        return new xdrerror_1.XdrError('alerts', parsed.err_msg, statusCode, parsed);
    }
}
exports.hashExceptionApiErrBldr = hashExceptionApiErrBldr;
