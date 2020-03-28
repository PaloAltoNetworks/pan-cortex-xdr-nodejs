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
const api_distributions_1 = require("./api_distributions");
const xdrerror_1 = require("./xdrerror");
/**
 * Create an installation package. This is an async call that returns the
 * distribution ID, it does not mean that the creation succeeded. To confirm the
 * package has been created, check the status of the distribution by running the
 * Get Distribution Status API.
 * @param distributon package details
 */
async function createDistribution(distributon) {
    const payload = {
        request_data: distributon
    };
    const { data, status } = await this.session.post(api_distributions_1.createDistributionPath, api_distributions_1.distributionsApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('alerts', data, status);
    return data;
}
exports.createDistribution = createDistribution;
