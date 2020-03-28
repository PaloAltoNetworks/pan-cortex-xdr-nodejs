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

import { IncidentApi, IncidentApiErr, incidentApiErrBldr, getIncidentPath, updateIncidentPath } from "./api_incident";
import { XdrError } from "./xdrerror";

/**
 * Incident data
 */
export type UpdateData = {
    assigned_user_mail: string,
    assigned_user_pretty_name: string,
    manual_severity: 'high' | 'medium' | 'low',
    status: 'NEW' | 'UNDER_INVESTIGATION' | 'RESOLVED_THREAT_HANDLED' | 'RESOLVED_KNOWN_ISSUE' | 'RESOLVED_DUPLICATE' | 'RESOLVED_FALSE_POSITIVE' | 'RESOLVED_OTHER',
    resolve_comment: string
}

/**
 * The model of the UpdateIncident response
 */
export type UpdateIncidentResponse = {
    reply: true
}

type UpdateIncidentPayload = {
    request_data: {
        incident_id: string,
        update_data: UpdateData
    }
}

/**
 * Update one or more fields of a specific incident. Missing fields are ignored.
 */
export type UpdateIncidentMethod = (
    /**
     * An integer representing the incident ID you want to update.
     */
    incidentId: string,
    /**
     * Provides an array of filtered fields
     */
    udpdateData: UpdateData
) => Promise<UpdateIncidentResponse>

/**
 * Update one or more fields of a specific incident. Missing fields are ignored.
 * @param this IncidentApi object
 * @param incidentId An integer representing the incident ID you want to update.
 * @param udpdateData Provides an array of filtered fields
 */
export async function updateIncident(this: IncidentApi, incidentId: string, udpdateData: UpdateData): Promise<UpdateIncidentResponse> {
    const payload: UpdateIncidentPayload = {
        request_data: {
            incident_id: incidentId,
            update_data: udpdateData
        }
    }
    const { data, status } = await this.session.post<UpdateIncidentPayload, UpdateIncidentResponse, IncidentApiErr>(updateIncidentPath, incidentApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('incidents', data, status)
    return data
}
