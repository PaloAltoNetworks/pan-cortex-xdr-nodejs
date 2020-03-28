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
const incident_get_1 = require("./incident_get");
const incident_get_details_1 = require("./incident_get_details");
const incident_update_1 = require("./incident_update");
const incidentPath = '/public_api/v1/incidents';
exports.getIncidentPath = `${incidentPath}/get_incidents`;
exports.getIncidentDetailsPath = `${incidentPath}/get_incident_extra_data`;
exports.updateIncidentPath = `${incidentPath}/update_incident`;
/**
 * Create XDR incident API object
 * @param sess XDR session object to use
 */
function createIncidentApi(sess) {
    return {
        session: sess,
        get: incident_get_1.getIncidents,
        getExtraData: incident_get_details_1.getIncidentsDetails,
        updateIncident: incident_update_1.updateIncident
    };
}
exports.createIncidentApi = createIncidentApi;
function incidentApiErrBldr(data, statusCode) {
    const parsed = xdrerror_1.parseXdrError(data);
    if (typeof parsed == 'string') {
        return new xdrerror_1.XdrError('incidents', parsed, statusCode);
    }
    else {
        return new xdrerror_1.XdrError('incidents', parsed.err_msg, statusCode, parsed);
    }
}
exports.incidentApiErrBldr = incidentApiErrBldr;
