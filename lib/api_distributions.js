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
const distributions_create_1 = require("./distributions_create");
const distributions_status_1 = require("./distributions_status");
const distributions_url_1 = require("./distributions_url");
const distributionsPath = '/public_api/v1/distributions';
exports.getDistributionVersionPath = `${distributionsPath}/get_versions`;
exports.createDistributionPath = `${distributionsPath}/create`;
exports.getDistributionStatusPath = `${distributionsPath}/get_status`;
exports.getDistributionUrlPath = `${distributionsPath}/get_dist_url`;
function createDistributionsApi(sess) {
    return {
        session: sess,
        create: distributions_create_1.createDistribution,
        status: distributions_status_1.distributionStatus,
        url: distributions_url_1.distributionUrl
    };
}
exports.createDistributionsApi = createDistributionsApi;
function distributionsApiErrBldr(data, statusCode) {
    const parsed = xdrerror_1.parseXdrError(data);
    if (typeof parsed == 'string') {
        return new xdrerror_1.XdrError('alerts', parsed, statusCode);
    }
    else {
        return new xdrerror_1.XdrError('alerts', parsed.err_msg, statusCode, parsed);
    }
}
exports.distributionsApiErrBldr = distributionsApiErrBldr;
