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

import { EndpointApi, endpointApiErrBldr, EndpointApiErr, getEndpointsPath } from "./api_endpoint"
import { XdrError } from "./xdrerror"

export type EndpointFilter = {
    /**
     * String that identifies the field the filter is matching
     */
    field: 'endpoint_id_list' | 'dist_name' | 'first_seen' | 'last_seen' | 'ip_list' |
    'group_name' | 'platform' | 'alias' | 'isolate' | 'hostname',
    /**
     * String that identifies the comparison operator you want to use for this filter
     */
    operator: 'in' | 'gte' | 'lte'
    /**
     * Value that this filter must match. The contents of this field will differ
     * depending on the endpoint field that you specified for this filter
     */
    value: number | string[] | 'isolated' | 'unisolated' | 'windows' | 'linux' | 'macos' | 'android'
}

export type EndpointSortCriteria = {
    field: 'first_seen' | 'last_seen',
    keyword: 'asc' | 'desc'
}

type GetEndpointPayload = {
    request_data: {
        filters: EndpointFilter[],
        search_from?: number,
        search_to?: number,
        sort?: EndpointSortCriteria
    }
}

export type Endpoint = {
    endpoint_id: string,
    endpoint_name: string,
    endpoint_type: string,
    endpoint_status: string,
    os_type: string,
    ip: string,
    users: string[],
    domain: string,
    alias: string,
    first_seen: number,
    last_seen: number,
    content_version: string,
    installation_package: string,
    active_directory: string,
    install_date: number,
    endpoint_version: string,
    is_isolated: boolean,
    group_name: string
}

/**
 * The model of a Get Endpoint method response
 */
export type GetEndpointResponse = {
    reply: {
        /**
         * Number of endpoints actually returned as result
         */
        result_count: number,
        /**
         * A list of endpoints
         */
        endpoints: Partial<Endpoint>[]
    }
}

/**
 * Gets a list of filtered endpoints. Response is concatenated using AND
 * condition (OR is not supported). Maximum result set size is 100 
 */
export type GetEndpoints = (
    /**
     * Provides an array of filtered fields
     */
    filters: EndpointFilter[],
    /**
     * An integer representing the start offset within the query result set from
     * which you want endpoints returned. Endpoints are returned as a zero-based
     * list. Any endpoint indexed less than this value is not returned in the
     * final result set and defaults to zero
     */
    search_from?: number,
    /**
     * An integer representing the end offset within the result set after which
     * you do not want endpoints returned. Endpoint in the endpoint list that
     * are indexed higher than this value are not returned in the final results
     * set. Defaults to 100, which returns all endpoints to the end of the list
     */
    search_to?: number,
    /**
     * Identifies the sort order for the result set
     */
    sort?: EndpointSortCriteria) => Promise<GetEndpointResponse>

/**
 * Gets a list of filtered endpoints. Response is concatenated using AND
 * condition (OR is not supported). Maximum result set size is 100 
 * @param filters Provides an array of filtered fields
 * @param search_from An integer representing the start offset within the query
 * result set from which you want endpoints returned. Endpoints are returned as
 * a zero-based list. Any endpoint indexed less than this value is not returned
 * in the final result set and defaults to zero 
 * @param search_to An integer representing the end offset within the result set
 * after which you do not want endpoints returned. Endpoint in the endpoint list
 * that are indexed higher than this value are not returned in the final results
 * set. Defaults to 100, which returns all endpoints to the end of the list 
 * @param sort Identifies the sort order for the result set
 */
export async function getEndpoints(this: EndpointApi,
    filters: EndpointFilter[],
    search_from?: number,
    search_to?: number,
    sort?: EndpointSortCriteria): Promise<GetEndpointResponse> {
    const payload: GetEndpointPayload = {
        request_data: {
            filters,
            search_from,
            search_to,
            sort
        }
    }
    const { data, status } = await this.session.post<GetEndpointPayload, GetEndpointResponse, EndpointApiErr>(getEndpointsPath, endpointApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('endpoint', data, status)
    return data
}
