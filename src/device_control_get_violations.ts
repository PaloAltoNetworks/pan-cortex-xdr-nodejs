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

import { DeviceControlApi, DeviceControlApiErr, deviceControlApiErrBldr, getViolationsPath } from "./api_device_control"
import { XdrError } from "./xdrerror"

/**
 * shape of an XDR Violation
 */
type XdrViolation = {
    hostname: string,
    user: string,
    ip: string,
    timestamp: number,
    violation_id: number,
    type: string,
    vendor_id: string,
    vendor: string,
    product_id: string,
    product: string,
    serial: string,
    endpoint_id: string
}

type ViolationFilter = {
    field: 'endpoint_id_list' | 'type' | 'timestamp' | 'ip_list' | 'vendor' | 'vendor_id' |
    'product' | 'product_id' | 'serial' | 'hostname' | 'violation_id_list' | 'username',
    operator: 'in' | 'gte' | 'lte',
    value: number | string | string[] | 'cdrom' | 'disk drive' | 'floppy disk' | 'portable device'
}

type ViolationSort = {
    field: 'first_seen' | 'last_seen',
    keyword: 'asc' | 'desc'
}

type GetDeviceViolationsPayload = {
    request_data: {
        filters: ViolationFilter[],
        search_from?: number,
        search_to?: number,
        sort?: ViolationSort
    }
}

/**
 * The model of a Get Device Violations method response
 */
export type GetDeviceViolationsResponse = {
    reply: {
        /**
         * Number of returned values.
         */
        result_count: number,
        /**
         * Array of violations
         */
        violations: Partial<XdrViolation>[]
    }
}

/**
 * Gets a list of device violations filtered by selected fields
 */
export type GetDeviceViolations = (
    /**
     * String that identifies the violation field the filter is matching
     */
    filters: ViolationFilter[],
    /**
     * Integer representing the starting offset within the query result set from
     * which you want violations returned.Violations are returned as a
     * zero-based list. Any incident indexed less than this value is not
     * returned in the final result set and defaults to zero.
     */
    search_from?: number,
    /**
     * Integer representing the end offset within the result set after which you
     * do not want incidents returned. Violation in the violation list that are
     * indexed higher than this value are not returned in the final results set.
     * Defaults to zero, which returns all incidents to the end of the list. 
     */
    search_to?: number,
    /**
     * dentifies the sort order for the result set.
     */
    sort?: ViolationSort
) => Promise<GetDeviceViolationsResponse>

/**
 * Gets a list of device violations filtered by selected fields
 * @param filters String that identifies the violation field the filter is matching
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
export async function getDeviceViolations(this: DeviceControlApi,
    filters: ViolationFilter[],
    search_from?: number,
    search_to?: number,
    sort?: ViolationSort
): Promise<GetDeviceViolationsResponse> {
    const payload: GetDeviceViolationsPayload = {
        request_data: {
            filters,
            search_from,
            search_to,
            sort
        }
    }
    const { data, status } = await this.session.post<GetDeviceViolationsPayload, GetDeviceViolationsResponse, DeviceControlApiErr>(getViolationsPath, deviceControlApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('alerts', data, status)
    return data
}
