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
const xdrerror_1 = require("./xdrerror");
/**
 * Get extra data fields of a specific incident including alerts and key artifacts
 * @param this IncidentApi object
 * @param incidentId The ID of the incident for which you want to retrieve extra data.
 * @param alertsLimit Maximum number of related alerts in the incident that you
 * want to retrieve (default is 1000).
 */
async function getIncidentsDetails(incidentId, alertsLimit) {
    const payload = {
        request_data: {
            incident_id: incidentId,
            alerts_limit: alertsLimit
        }
    };
    const { data, status } = await this.session.post(api_incident_1.getIncidentDetailsPath, api_incident_1.incidentApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('incidents', data, status);
    return data;
}
exports.getIncidentsDetails = getIncidentsDetails;
