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
 * Retrieve files from selected endpoints. You can retrieve up to 20 files, from
 * no more than 100 endpoints.
 * @param filters String that identifies the endpoint to isolate or array of
 * filtered fields for isolating a number of endpoints at once.
 * @param files A dictionary containing the type of platform and files you want to retrieve.
 */
async function fileRetrieveEndpoint(filters, files) {
    const payload = { request_data: { files, filters } };
    const { data, status } = await this.session.post(api_endpoint_1.fileRetrieveEndpointPath, api_endpoint_1.endpointApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('endpoint', data, status);
    return data;
}
exports.fileRetrieveEndpoint = fileRetrieveEndpoint;
