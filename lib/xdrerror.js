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
const alertTypes = ['alerts'];
function parseXdrError(msg) {
    if (msg) {
        try {
            const parsed = JSON.parse(msg);
            if (parsed.reply &&
                typeof parsed.reply.err_code == 'number' &&
                typeof parsed.reply.err_msg == 'string' &&
                typeof parsed.reply.err_extra == 'string')
                return parsed.reply;
            return msg;
        }
        catch (e) {
            return msg;
        }
    }
    return '<empty response>';
}
exports.parseXdrError = parseXdrError;
function isXdrError(obj) {
    return obj && obj instanceof XdrError && typeof obj.api == 'string'
        && alertTypes.includes(obj.api);
}
exports.isXdrError = isXdrError;
class XdrError extends Error {
    constructor(api, msg, status_code, err) {
        super(msg);
        this.api = api;
        this.reply = err;
        this.status_code = status_code;
    }
}
exports.XdrError = XdrError;
