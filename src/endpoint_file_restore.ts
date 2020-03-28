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

import { EndpointApi, endpointApiErrBldr, EndpointApiErr, fileRestoreEndpointPath } from "./api_endpoint"
import { EndpointFilter } from './endpoint_get'
import { XdrError } from "./xdrerror"


type FileRestoreEndpointPayload = {
    request_data: {
        file_hash: string
        endpoint_id?: string
    }
}

/**
 * The model of a File Restore Endpoint method response
 */
export type FileRestoreEndpointResponse = {
    reply: boolean
}

/**
 * Restore a quarantined file on a requested endpoints.
 */
export type FileRestoreEndpoint = (
    /**
     * String that represents the file’s hash. Hash must be a valid SHA256
     */
    fileHash: string,
    /**
     * String that represents the endpoint ID. If you do not enter a specific
     * endpoint ID, the request will run restore on all endpoints which relate
     * to the quarantined file you defined.
     */
    endpoint_id?: string
) => Promise<FileRestoreEndpointResponse>

/**
 * Restore a quarantined file on a requested endpoints.
 * @param fileHash String that represents the file’s hash. Hash must be a valid SHA256
 * @param endpointId String that represents the endpoint ID. If you do not enter
 * a specific endpoint ID, the request will run restore on all endpoints which
 * relate to the quarantined file you defined. 
 */
export async function fileRestoreEndpoint(this: EndpointApi, fileHash: string, endpointId?: string): Promise<FileRestoreEndpointResponse> {
    const payload: FileRestoreEndpointPayload = { request_data: { file_hash: fileHash, endpoint_id: endpointId } }
    const { data, status } = await this.session.post<FileRestoreEndpointPayload, FileRestoreEndpointResponse, EndpointApiErr>(
        fileRestoreEndpointPath, endpointApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('endpoint', data, status)
    return data
}
