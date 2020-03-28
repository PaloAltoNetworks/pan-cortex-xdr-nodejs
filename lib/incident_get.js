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
 * Get a list of incidents filtered by a list of incident IDs, modification
 * time, or creation time.
 * @param this IncidentApi object
 * @param filters Provides an array of filtered fields
 * @param search_from Integer representing the starting offset within the query
 * result set from which you want incidents returned. Incidents are returned as
 * a zero-based list. Any incident indexed less than this value is not returned
 * in the final result set and defaults to zero.
 * @param search_to Integer representing the end offset within the result set
 * after which you do not want incidents returned. Incidents in the incident
 * list that are indexed higher than this value are not returned in the final
 * results set. Defaults to zero, which returns all incidents to the end of the
 * list.
 * @param sort Identifies the sort order for the result set
 */
async function getIncidents(filters, search_from, search_to, sort) {
    const payload = {
        request_data: {
            filters,
            search_from,
            search_to,
            sort
        }
    };
    const { data, status } = await this.session.post(api_incident_1.getIncidentPath, api_incident_1.incidentApiErrBldr, payload);
    if (typeof data == 'string')
        throw new xdrerror_1.XdrError('incidents', data, status);
    return data;
}
exports.getIncidents = getIncidents;
