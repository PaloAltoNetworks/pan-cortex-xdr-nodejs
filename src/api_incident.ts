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

import { XdrSession } from './http2client'
import { GeneralXdrError, XdrError, parseXdrError } from './xdrerror'
import { GetIncidentsMethod, getIncidents } from './incident_get'
import { GetIncidentsDetailsMethod, getIncidentsDetails } from './incident_get_details'
import { UpdateIncidentMethod, updateIncident } from './incident_update'

const incidentPath = '/public_api/v1/incidents'
export const getIncidentPath = `${incidentPath}/get_incidents`
export const getIncidentDetailsPath = `${incidentPath}/get_incident_extra_data`
export const updateIncidentPath = `${incidentPath}/update_incident`

/**
 * XDR Incident API object
 */
export type IncidentApi = {
    /**
     * xdr session object
     */
    session: XdrSession,
    /**
     * Get a list of incidents filtered by a list of incident IDs, modification
     * time, or creation time.
     */
    get: GetIncidentsMethod,
    /**
     * Get extra data fields of a specific incident including alerts and key
     * artifacts
     */
    getExtraData: GetIncidentsDetailsMethod
    /**
     * Update one or more fields of a specific incident. Missing fields are ignored.
     */
    updateIncident: UpdateIncidentMethod
}

/**
 * Create XDR incident API object
 * @param sess XDR session object to use
 */
export function createIncidentApi(sess: XdrSession): IncidentApi {
    return {
        session: sess,
        get: getIncidents,
        getExtraData: getIncidentsDetails,
        updateIncident: updateIncident
    }
}

export type IncidentApiErr = GeneralXdrError

export function incidentApiErrBldr(data: any, statusCode: number): XdrError<IncidentApiErr> {
    const parsed = parseXdrError<IncidentApiErr>(data)
    if (typeof parsed == 'string') {
        return new XdrError('incidents', parsed, statusCode)
    } else {
        return new XdrError('incidents', parsed.err_msg, statusCode, parsed)
    }
}
