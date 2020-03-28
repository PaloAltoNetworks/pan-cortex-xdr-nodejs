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
const api_hash_exceptions_1 = require("./api_hash_exceptions");
const xdrerror_1 = require("./xdrerror");
/**
 * Whitelist requested files which have not already been blacklisted or whitelisted.
 * @param hashList String that represents a list of hashed files you want to
 * blacklist. Hash must be a valid SH256.
 * @param comment String that represents additional information regarding the action.
 */
async function whitelistFile(hashList, comment) {
    const payload = {
        request_data: {
            hash_list: hashList,
            comment
        }
    };
    const { data, status } = await this.session.post(api_hash_exceptions_1.whiteListPath, api_hash_exceptions_1.hashExceptionApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('endpoint', data, status);
    return data;
}
exports.whitelistFile = whitelistFile;
