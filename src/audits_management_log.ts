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

import { AuditApiErr, AuditsApi, mgmtLogsPath, auditApiErrBldr } from "./api_audits"
import { XdrError } from "./xdrerror"

/**
 * shape of an Management Log
 */
type ManagementLogItem = {
    AUDIT_ID: number,
    AUDIT_OWNER_NAME: string,
    AUDIT_OWNER_EMAIL: string,
    AUDIT_ASSET_JSON: string,
    AUDIT_ASSET_NAMES: string,
    AUDIT_HOSTNAME: string,
    AUDIT_RESULT: string,
    AUDIT_REASON: string,
    AUDIT_DESCRIPTION: string,
    AUDIT_ENTITY: string,
    AUDIT_ENTITY_SUBTYPE: string,
    AUDIT_SESSION_ID: number,
    AUDIT_CASE_ID: number,
    AUDIT_INSERT_TIME: number,
    AUDIT_SEVERITY: string
}

type ManagementFilter = {
    field: 'email' | 'type' | 'sub_type' | 'result' | 'timestamp',
    operator: 'in' | 'gte' | 'lte',
    value: number | string[]
}

type ManagementSort = {
    field: 'timestamp' | 'sub_type' | 'result'
    keyword: 'asc' | 'desc'
}

type GetManagementLogsPayload = {
    request_data: {
        filters: ManagementFilter[],
        search_from?: number,
        search_to?: number,
        sort?: ManagementSort
    }
}

/**
 * The model of a Management Log method response
 */
export type ManagementLogResponse = {
    reply: {
        /**
         * Number of returned values.
         */
        result_count: number,
        /**
         * Array of Audit Items
         */
        data: Partial<ManagementLogItem>[]
    }
}

/**
 * Get audit management logs.
 */
export type ManagementLog = (
    /**
     * Provides an array of filtered fields
     */
    filters: ManagementFilter[],
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
    sort?: ManagementSort
) => Promise<ManagementLogResponse>

/**
 * Get audit management logs.
 * @param filters Provides an array of filtered fields
 * @param search_from Integer representing the starting offset within the query
 * result set from which you want violations returned.Violations are returned as
 * a zero-based list. Any incident indexed less than this value is not returned in the final result set and defaults to zero.
 * @param search_to Integer representing the end offset within the result set
 * after which you do not want incidents returned. Violation in the violation
 * list that are indexed higher than this value are not returned in the final
 * results set. Defaults to zero, which returns all incidents to the end of the list.
 * @param sort Identifies the sort order for the result set.
 */
export async function managementLog(this: AuditsApi,
    filters: ManagementFilter[],
    search_from?: number,
    search_to?: number,
    sort?: ManagementSort
): Promise<ManagementLogResponse> {
    const payload: GetManagementLogsPayload = {
        request_data: {
            filters,
            search_from,
            search_to,
            sort
        }
    }
    const { data, status } = await this.session.post<GetManagementLogsPayload, ManagementLogResponse, AuditApiErr>(mgmtLogsPath, auditApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('alerts', data, status)
    return data
}
