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
 * Gets a list of filtered endpoints. Response is concatenated using AND
 * condition (OR is not supported). Maximum result set size is 100
 * @param filters Provides an array of filtered fields
 * @param search_from An integer representing the start offset within the query
 * result set from which you want endpoints returned. Endpoints are returned as
 * a zero-based list. Any endpoint indexed less than this value is not returned
 * in the final result set and defaults to zero
 * @param search_to An integer representing the end offset within the result set
 * after which you do not want endpoints returned. Endpoint in the endpoint list
 * that are indexed higher than this value are not returned in the final results
 * set. Defaults to 100, which returns all endpoints to the end of the list
 * @param sort Identifies the sort order for the result set
 */
async function getEndpoints(filters, search_from, search_to, sort) {
    const payload = {
        request_data: {
            filters,
            search_from,
            search_to,
            sort
        }
    };
    const { data, status } = await this.session.post(api_endpoint_1.getEndpointsPath, api_endpoint_1.endpointApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('endpoint', data, status);
    return data;
}
exports.getEndpoints = getEndpoints;
