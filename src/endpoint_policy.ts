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

import { EndpointApi, endpointApiErrBldr, EndpointApiErr, policyEndpointPath } from "./api_endpoint"
import { XdrError } from "./xdrerror"

type PolicyEndpointPayload = {
    request_data: {
        endpoint_id: string
    }
}

/**
 * The model of a Policy Endpoint method response
 */
export type PolicyEndpointResponse = {
    reply: {
        policy_name: string
    }
}

/**
 * Get the policy name for a specific endpoint.
 */
export type PolicyEndpoint = (
    /**
     * String the represents the endpoint ID
     */
    endpointId: string
) => Promise<PolicyEndpointResponse>

/**
 * Get the policy name for a specific endpoint.
 * @param endpointId String the represents the endpoint ID
 */
export async function policyEndpoint(this: EndpointApi, endpointId: string): Promise<PolicyEndpointResponse> {
    const payload: PolicyEndpointPayload = {
        request_data: { endpoint_id: endpointId }
    }
    const { data, status } = await this.session.post<PolicyEndpointPayload, PolicyEndpointResponse, EndpointApiErr>(
        policyEndpointPath, endpointApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('endpoint', data, status)
    return data
}
