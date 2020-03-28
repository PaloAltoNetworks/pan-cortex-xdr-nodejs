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
const api_alert_1 = require("./api_alert");
const xdrerror_1 = require("./xdrerror");
/**
 * Upload alerts from external alert sources in Cortex XDR format. Cortex XDR displays alerts that are parsed successfully in related incidents and views.
 * You can send 600 alerts per minute. Each request can contain a maximum of 60
 * alerts.
 * @param alerts List of alerts in Cortex XDR format
 */
async function insertParsedAlerts(alerts) {
    const payload = { request_data: { alerts } };
    const { data, status } = await this.session.post(api_alert_1.insertParsedPath, api_alert_1.alertApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('alerts', data, status);
    return data;
}
exports.insertParsedAlerts = insertParsedAlerts;
