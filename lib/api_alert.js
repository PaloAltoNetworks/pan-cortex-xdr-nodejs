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
const alert_insert_parsed_1 = require("./alert_insert_parsed");
const alertsPath = '/public_api/v1/alerts';
exports.insertParsedPath = `${alertsPath}/insert_parsed_alerts`;
exports.insertCEFPath = `${alertsPath}/insert_cef_alerts/`;
/**
 * Creates an Alert API object
 * @param sess xdr session object
 */
function createAlertApi(sess) {
    return {
        session: sess,
        insParsed: alert_insert_parsed_1.insertParsedAlerts
    };
}
exports.createAlertApi = createAlertApi;
/**
 * Parses a REST call response into an Alert API error
 * @param data REST response
 * @param statusCode HTTP2 response code
 */
function alertApiErrBldr(data, statusCode) {
    const parsed = xdrerror_1.parseXdrError(data);
    if (typeof parsed == 'string') {
        return new xdrerror_1.XdrError('alerts', parsed, statusCode);
    }
    else {
        return new xdrerror_1.XdrError('alerts', parsed.err_msg, statusCode, parsed);
    }
}
exports.alertApiErrBldr = alertApiErrBldr;
