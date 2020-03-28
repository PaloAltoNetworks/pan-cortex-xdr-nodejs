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

import { EndpointApi, endpointApiErrBldr, EndpointApiErr, isolateEndpointPath } from "./api_endpoint"
import { EndpointFilter } from './endpoint_get'
import { XdrError } from "./xdrerror"

type IsolateEndpointPayloadSingle = {
    request_data: {
        endpoint_id: string,
    }
}

type IsolateEndpointPayloadMultiple = {
    request_data: {
        filters: EndpointFilter[]
    }
}

/**
 * The model of a Isolate Endpoint method response
 */
export type IsolateEndpointResponse = {
    reply: {
        action_id: string
    }
}

/**
 * Isolate one or more endpoints in a single request
 */
export type IsolateEndpoint = (
    /**
     * String that identifies the endpoint to isolate or array of filtered
     * fields for isolating a number of endpoints at once.
     */
    criteria: string | EndpointFilter[]
) => Promise<IsolateEndpointResponse>

/**
 * Isolate one or more endpoints in a single request
 * @param criteria String that identifies the endpoint to isolate or array of
 * filtered fields for isolating a number of endpoints at once.
 */
export async function isolateEndpoint(this: EndpointApi, criteria: string | EndpointFilter[]): Promise<IsolateEndpointResponse> {
    let payload: IsolateEndpointPayloadSingle | IsolateEndpointPayloadMultiple
    if (typeof criteria == 'string') {
        const psingle: IsolateEndpointPayloadSingle = {
            request_data: { endpoint_id: criteria }
        }
        payload = psingle
    } else {
        const pmultiple: IsolateEndpointPayloadMultiple = {
            request_data: { filters: criteria }
        }
        payload = pmultiple
    }
    const { data, status } = await this.session.post<IsolateEndpointPayloadSingle | IsolateEndpointPayloadMultiple, IsolateEndpointResponse, EndpointApiErr>(
        isolateEndpointPath, endpointApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('endpoint', data, status)
    return data
}
