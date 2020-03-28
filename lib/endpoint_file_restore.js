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
const api_endpoint_1 = require("./api_endpoint");
const xdrerror_1 = require("./xdrerror");
/**
 * Restore a quarantined file on a requested endpoints.
 * @param fileHash String that represents the file’s hash. Hash must be a valid SHA256
 * @param endpointId String that represents the endpoint ID. If you do not enter
 * a specific endpoint ID, the request will run restore on all endpoints which
 * relate to the quarantined file you defined.
 */
async function fileRestoreEndpoint(fileHash, endpointId) {
    const payload = { request_data: { file_hash: fileHash, endpoint_id: endpointId } };
    const { data, status } = await this.session.post(api_endpoint_1.fileRestoreEndpointPath, api_endpoint_1.endpointApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('endpoint', data, status);
    return data;
}
exports.fileRestoreEndpoint = fileRestoreEndpoint;
