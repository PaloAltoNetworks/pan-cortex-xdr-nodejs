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

import { EndpointApi, endpointApiErrBldr, EndpointApiErr, getAllEndpointsPath } from "./api_endpoint"
import { XdrError } from "./xdrerror"

type GetAllEndpointPayload = {}

export type EndpointInfo = {
    agent_id: string,
    agent_status: string,
    host_name: string,
    agent_type: string,
    ip: string[]
}

/**
 * The model of a Get All Endpoint method response
 */
export type GetAllEndpointResponse = {
    reply: EndpointInfo[]
}

/**
 * Gets a list of your endpoints
 */
export type GetAllEndpoints = () => Promise<GetAllEndpointResponse>

/**
 * Gets a list of your endpoints
 */
export async function getAllEndpoints(this: EndpointApi): Promise<GetAllEndpointResponse> {
    const payload: GetAllEndpointPayload = {}
    const { data, status } = await this.session.post<GetAllEndpointPayload, GetAllEndpointResponse, EndpointApiErr>(getAllEndpointsPath, endpointApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('endpoint', data, status)
    return data
}
