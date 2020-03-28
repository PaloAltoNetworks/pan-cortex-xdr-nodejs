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
const api_incident_1 = require("./api_incident");
const http2client_1 = require("./http2client");
const api_alert_1 = require("./api_alert");
const apikey_1 = require("./apikey");
const api_endpoint_1 = require("./api_endpoint");
const api_device_control_1 = require("./api_device_control");
const api_hash_exceptions_1 = require("./api_hash_exceptions");
const api_audits_1 = require("./api_audits");
const api_distributions_1 = require("./api_distributions");
const BASIC_API_KEY = process.env['PAN_BASIC_API_KEY'];
const ADV_API_KEY = process.env['PAN_ADV_API_KEY'];
const API_KEY_ID = process.env['PAN_API_KEY_ID'];
const XDR_FQDN = process.env['PAN_XDR_FQDN'];
/**
 * Creates an XdrApi object either from provided configuration object or from
 * environmental variables
 * @param ops configuration options
 */
function createXdrApi(ops) {
    const isAdvanced = ops && ops.isAdvancedKey !== undefined && ops.isAdvancedKey || ADV_API_KEY && ADV_API_KEY != '';
    const key = ops && ops.apiKey || BASIC_API_KEY && BASIC_API_KEY != '' && BASIC_API_KEY || ADV_API_KEY;
    const keyId = ops && ops.apiKeyId || API_KEY_ID;
    const xdrBaseFqdn = ops && ops.xdrBaseFqdn || XDR_FQDN;
    if (key && key != '' && keyId && keyId != '' && xdrBaseFqdn && xdrBaseFqdn != '') {
        const xdrApiKey = isAdvanced && apikey_1.advXdrApiKey(key, keyId) || apikey_1.basicXdrApiKey(key, keyId);
        const session = http2client_1.createXdrSession({
            xdrApiKey,
            xdrBaseFqdn,
            apiTimeout: ops && ops.apiTimeout,
            sessionOptions: ops && ops.sessionOptions
        });
        const incident = api_incident_1.createIncidentApi(session);
        const alert = api_alert_1.createAlertApi(session);
        const endpoint = api_endpoint_1.createEndpointApi(session);
        const deviceControl = api_device_control_1.createDeviceControlApi(session);
        const hashException = api_hash_exceptions_1.createHashExceptionApi(session);
        const audit = api_audits_1.createAuditsApi(session);
        const distributions = api_distributions_1.createDistributionsApi(session);
        return {
            alert, incident, endpoint, deviceControl, hashException,
            audit, distributions, close: session.close.bind(session)
        };
    }
    throw new Error('apiKey, apiKeyId and baseFqdn must be provided either explicitly or by setting PAN_[BASIC|ADV]_API_KEY, PAN_API_KEY_ID and PAN_XDR_FQDN env variables');
}
exports.createXdrApi = createXdrApi;
