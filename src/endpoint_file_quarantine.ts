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

import { EndpointApi, endpointApiErrBldr, EndpointApiErr, fileQuarantineEndpointPath } from "./api_endpoint"
import { EndpointFilter } from './endpoint_get'
import { XdrError } from "./xdrerror"


type FileQuarantineEndpointPayload = {
    request_data: {
        filters: EndpointFilter[],
        file_path: string,
        file_hash: string
    }
}

/**
 * The model of a File Qurantine Endpoint method response
 */
export type FileQuarantineEndpointResponse = {
    reply: {
        action_id: string
    }
}

/**
 * Quarantine file on selected endpoints.
 */
export type FileQuarantineEndpoint = (
    /**
     * String that identifies the endpoint to isolate or array of filtered
     * fields for isolating a number of endpoints at once. 
     */
    filters: EndpointFilter[],
    /**
     * String that represents the path of the file you want to quarantine
     */
    filePath: string,
    /**
     * String that represents the file’s hash. Hash must be a valid SHA256
     */
    fileHash: string
) => Promise<FileQuarantineEndpointResponse>

/**
 * Quarantine file on selected endpoints.
 * @param filters String that identifies the endpoint to isolate or array of
 * filtered fields for isolating a number of endpoints at once.
 * @param filePath String that represents the path of the file you want to quarantine
 * @param fileHash String that represents the file’s hash. Hash must be a valid SHA256
 */
export async function fileQuarantineEndpoint(this: EndpointApi, filters: EndpointFilter[], filePath: string, fileHash: string): Promise<FileQuarantineEndpointResponse> {
    const payload: FileQuarantineEndpointPayload = { request_data: { filters, file_hash: fileHash, file_path: filePath } }
    const { data, status } = await this.session.post<FileQuarantineEndpointPayload, FileQuarantineEndpointResponse, EndpointApiErr>(
        fileQuarantineEndpointPath, endpointApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('endpoint', data, status)
    return data
}
