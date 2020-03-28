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

import { EndpointApi, endpointApiErrBldr, EndpointApiErr, fileRetrieveEndpointPath } from "./api_endpoint"
import { EndpointFilter } from './endpoint_get'
import { XdrError } from "./xdrerror"

/**
 * A dictionary containing the type of platform and files you want to retrieve.
 */
export type RetrieveFiles = {
    windows: string[],
    linux: string[],
    macos: string[]
}

type FileRetrieveEndpointPayload = {
    request_data: {
        filters: EndpointFilter[],
        files: Partial<RetrieveFiles>
    }
}

/**
 * The model of a File Retrieve Endpoint method response
 */
export type FileRetrieveEndpointResponse = {
    reply: {
        action_id: string
    }
}

/**
 * Retrieve files from selected endpoints. You can retrieve up to 20 files, from
 * no more than 100 endpoints. 
 */
export type FileRetrieveEndpoint = (
    /**
     * String that identifies the endpoint to isolate or array of filtered fields for isolating
     */
    filters: EndpointFilter[],
    /**
     * A dictionary containing the type of platform and files you want to retrieve.
     */
    files: Partial<RetrieveFiles>
) => Promise<FileRetrieveEndpointResponse>

/**
 * Retrieve files from selected endpoints. You can retrieve up to 20 files, from
 * no more than 100 endpoints. 
 * @param filters String that identifies the endpoint to isolate or array of
 * filtered fields for isolating a number of endpoints at once.
 * @param files A dictionary containing the type of platform and files you want to retrieve.
 */
export async function fileRetrieveEndpoint(this: EndpointApi, filters: EndpointFilter[], files: Partial<RetrieveFiles>): Promise<FileRetrieveEndpointResponse> {
    const payload: FileRetrieveEndpointPayload = { request_data: { files, filters } }
    const { data, status } = await this.session.post<FileRetrieveEndpointPayload, FileRetrieveEndpointResponse, EndpointApiErr>(
        fileRetrieveEndpointPath, endpointApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('endpoint', data, status)
    return data
}
