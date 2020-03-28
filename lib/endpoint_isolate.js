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
 * Isolate one or more endpoints in a single request
 * @param criteria String that identifies the endpoint to isolate or array of
 * filtered fields for isolating a number of endpoints at once.
 */
async function isolateEndpoint(criteria) {
    let payload;
    if (typeof criteria == 'string') {
        const psingle = {
            request_data: { endpoint_id: criteria }
        };
        payload = psingle;
    }
    else {
        const pmultiple = {
            request_data: { filters: criteria }
        };
        payload = pmultiple;
    }
    const { data, status } = await this.session.post(api_endpoint_1.isolateEndpointPath, api_endpoint_1.endpointApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('endpoint', data, status);
    return data;
}
exports.isolateEndpoint = isolateEndpoint;
