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

import { EndpointApi, endpointApiErrBldr, EndpointApiErr, cancelScanEndpointPath } from "./api_endpoint"
import { EndpointFilter } from './endpoint_get'
import { XdrError } from "./xdrerror"

type CancelScanEndpointPayload = {
    request_data: {
        filters: EndpointFilter[],
    }
}

/**
 * The model of a Cancel Scan Endpoint method response
 */
export type CancelScanEndpointResponse = {
    reply: {
        action_id: string
    }
}

/**
 * Cancel the scan of selected endpoints. A scan can only be aborted if the
 * selected endpoints are in Pending or in Progress status.
 */
export type CancelScanEndpoint = (
    /**
     * Array of filtered fields for isolating a number of endpoints at once.
     */
    filters: EndpointFilter[]
) => Promise<CancelScanEndpointResponse>

/**
 * Cancel the scan of selected endpoints. A scan can only be aborted if the
 * selected endpoints are in Pending or in Progress status.
 * @param filter Array of filtered fields for isolating a number of endpoints at
 * once.
 */
export async function cancelScanEndpoint(this: EndpointApi, filters: EndpointFilter[]): Promise<CancelScanEndpointResponse> {
    const payload: CancelScanEndpointPayload = {
        request_data: { filters }
    }
    const { data, status } = await this.session.post<CancelScanEndpointPayload, CancelScanEndpointResponse, EndpointApiErr>(
        cancelScanEndpointPath, endpointApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('endpoint', data, status)
    return data
}
