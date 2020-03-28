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
 * Get the distribution URL for downloading the installation package.
 * @param distributionId string representing the installation package ID.
 * @param packageType A string representing the type of installation package
 */
async function distributionUrl(distributionId, packageType) {
    const payload = {
        request_data: {
            distribution_id: distributionId,
            package_type: packageType
        }
    };
    const { data, status } = await this.session.post(api_distributions_1.getDistributionUrlPath, api_distributions_1.distributionsApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('alerts', data, status);
    return data;
}
exports.distributionUrl = distributionUrl;
