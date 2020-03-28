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

import { AuditApiErr, AuditsApi, agentsReportsPath, auditApiErrBldr } from "./api_audits"
import { XdrError } from "./xdrerror"

/**
 * shape of an Audit Item
 */
type AuditItem = {
    TIMESTAMP: number,
    RECEIVEDTIME: number,
    ENDPOINTID: string,
    ENDPOINTNAME: string,
    DOMAIN: string,
    XDRVERSION: string,
    SEVERITY: string,
    CATEGORY: string,
    TYPE: string,
    SUBTYPE: string,
    RESULT?: string,
    REASON?: string
    DESCRIPTION: string
}

type AuditFilter = {
    field: 'endpoint_id' | 'endpoint_name' | 'type' | 'sub_type' | 'result' | 'timestamp' |
    'domain' | 'xdr_version' | 'category' | 'timestamp',
    operator: 'in' | 'gte' | 'lte',
    value: number | string[] | 'status' | 'audit' | 'monitoring'
}

type AuditSort = {
    field: 'type' | 'category' | 'trapsversion' | 'timestamp' | 'domain'
    keyword: 'asc' | 'desc'
}

type GetDeviceViolationsPayload = {
    request_data: {
        filters: AuditFilter[],
        search_from?: number,
        search_to?: number,
        sort?: AuditSort
    }
}

/**
 * The model of a Agent Report method response
 */
export type AgentReportResponse = {
    reply: {
        /**
         * Number of returned values.
         */
        result_count: number,
        /**
         * Array of Audit Items
         */
        data: Partial<AuditItem>[]
    }
}

/**
 * Get agent event reports.
 */
export type AgentReport = (
    /**
     * Provides an array of filtered fields
     */
    filters: AuditFilter[],
    /**
     * Integer representing the starting offset within the query
     * result set from which you want violations returned.Violations are
     * returned as a zero-based list. Any incident indexed less than this value
     * is not returned in the final result set and defaults to zero.
     */
    search_from?: number,
    /**
     * Integer representing the end offset within the result set after
     * which you do not want incidents returned. Violation in the violation list
     * that are indexed higher than this value are not returned in the final
     * results set. Defaults to zero, which returns all incidents to the end of
     * the list. 
     */
    search_to?: number,
    /**
     * Identifies the sort order for the result set.
     */
    sort?: AuditSort
) => Promise<AgentReportResponse>

/**
 * Get agent event reports.
 * @param filters Provides an array of filtered fields
 * @param search_from Integer representing the starting offset within the query
 * result set from which you want violations returned.Violations are returned as
 * a zero-based list. Any incident indexed less than this value is not returned
 * in the final result set and defaults to zero.
 * @param search_to Integer representing the end offset within the result set
 * after which you do not want incidents returned. Violation in the violation
 * list that are indexed higher than this value are not returned in the final
 * results set. Defaults to zero, which returns all incidents to the end of the list.
 * @param sort Identifies the sort order for the result set.
 */
export async function agentReport(this: AuditsApi,
    filters: AuditFilter[],
    search_from?: number,
    search_to?: number,
    sort?: AuditSort
): Promise<AgentReportResponse> {
    const payload: GetDeviceViolationsPayload = {
        request_data: {
            filters,
            search_from,
            search_to,
            sort
        }
    }
    const { data, status } = await this.session.post<GetDeviceViolationsPayload, AgentReportResponse, AuditApiErr>(agentsReportsPath, auditApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('alerts', data, status)
    return data
}
