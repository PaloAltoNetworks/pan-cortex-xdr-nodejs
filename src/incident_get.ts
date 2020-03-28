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

import { IncidentApi, IncidentApiErr, incidentApiErrBldr, getIncidentPath } from "./api_incident";
import { Severity } from "./xdrapi";
import { XdrError } from "./xdrerror";

/**
 * shape of a XDR Incident Filter
 */
export type IncidentFiler = {
    field: 'modification_time' | 'creation_time' | 'incident_id_list' | 'starred' | 'description' | 'alert_sources'
    operator: 'in'
    value: string | string[] | number | boolean
}

type SortCriteria = {
    field: 'modification_time' | 'creation_time',
    keyword: 'asc' | 'desc'
}

type GetIncidentPayload = {
    request_data: {
        filters: IncidentFiler[],
        search_from?: number,
        search_to?: number,
        sort?: SortCriteria
    }
}

/**
 * The generic shape of an incident
 */
export type Incident = {
    incident_id: string,
    creation_time: number,
    modification_time: number,
    detection_time: number
    status: string
    severity: Severity,
    description: string,
    assigned_user_mail: string,
    assigned_user_pretty_name: string,
    alert_count: number,
    low_severity_alert_count: number,
    med_severity_alert_count: number,
    high_severity_alert_count: number,
    user_count: number,
    host_count: number,
    xdr_url: string,
    starred: boolean,
    hosts: string[],
    users: string[],
    incident_sources: string[]
}

/**
 * The model of the GetIncidents response
 */
export type GetIncidentsResponse = {
    reply: {
        /**
         * Total number of possible results, value is limited to 10,000
         */
        total_count: number
        /**
         * 	Number of incidents actually returned as result
         */
        result_count: number
        /**
         * A list of incidents 
         */
        incidents: Partial<Incident>[]
    }
}

/**
 * Get a list of incidents filtered by a list of incident IDs, modification
 * time, or creation time.
 */
export type GetIncidentsMethod = (
    /**
     * Provides an array of filtered fields
     */
    filter: IncidentFiler[],
    /**
     * Integer representing the starting offset within the query result set from
     * which you want incidents returned. Incidents are returned as a zero-based
     * list. Any incident indexed less than this value is not returned in the
     * final result set and defaults to zero.
     */
    search_from?: number,
    /**
     * Integer representing the end offset within the result set after which you
     * do not want incidents returned. Incidents in the incident list that are
     * indexed higher than this value are not returned in the final results set.
     * Defaults to zero, which returns all incidents to the end of the list.
     */
    search_to?: number,
    /**
     * Identifies the sort order for the result set
     */
    sort?: SortCriteria
) => Promise<GetIncidentsResponse>

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
export async function getIncidents(this: IncidentApi, filters: IncidentFiler[], search_from?: number, search_to?: number, sort?: SortCriteria): Promise<GetIncidentsResponse> {
    const payload: GetIncidentPayload = {
        request_data: {
            filters,
            search_from,
            search_to,
            sort
        }
    }
    const { data, status } = await this.session.post<GetIncidentPayload, GetIncidentsResponse, IncidentApiErr>(getIncidentPath, incidentApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('incidents', data, status)
    return data
}
