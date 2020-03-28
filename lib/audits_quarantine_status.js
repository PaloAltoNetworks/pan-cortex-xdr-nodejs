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
const api_audits_1 = require("./api_audits");
const xdrerror_1 = require("./xdrerror");
/**
 * Retrieve the quarantine status for a selected file.
 * @param files list of files
 */
async function quarantineStatus(files) {
    const payload = {
        request_data: { files }
    };
    const { data, status } = await this.session.post(api_audits_1.quarantineStatusPath, api_audits_1.auditApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('alerts', data, status);
    return data;
}
exports.quarantineStatus = quarantineStatus;
