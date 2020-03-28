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

import { XdrSession } from './http2client'
import { GeneralXdrError, parseXdrError, XdrError } from './xdrerror'
import { GetEndpoints, getEndpoints } from './endpoint_get'
import { IsolateEndpoint, isolateEndpoint } from './endpoint_isolate'
import { UnisolateEndpoint, unisolateEndpoint } from './endpoint_unisolate'
import { GetAllEndpoints, getAllEndpoints } from './endpoint_getall'
import { ScanEndpoint, scanEndpoint } from './endpoint_scan'
import { CancelScanEndpoint, cancelScanEndpoint } from './endpoint_cancel_scan'
import { DeleteEndpoint, deleteEndpoint } from './endpoint_delete'
import { PolicyEndpoint, policyEndpoint } from './endpoint_policy'
import { FileRetrieveEndpoint, fileRetrieveEndpoint } from './endpoint_file_retrieve'
import { FileQuarantineEndpoint, fileQuarantineEndpoint } from './endpoint_file_quarantine'
import { FileRestoreEndpoint, fileRestoreEndpoint } from './endpoint_file_restore'

const endpointPath = '/public_api/v1/endpoints'
export const isolateEndpointPath = `${endpointPath}/isolate`
export const unisolateEndpointPath = `${endpointPath}/unisolate`
export const getEndpointsPath = `${endpointPath}/get_endpoint`
export const getAllEndpointsPath = `${endpointPath}/get_endpoints`
export const scanEndpointPath = `${endpointPath}/scan`
export const cancelScanEndpointPath = `${endpointPath}/abort_scan`
export const deleteEndpointPath = `${endpointPath}/delete`
export const policyEndpointPath = `${endpointPath}/get_policy`
export const fileRetrieveEndpointPath = `${endpointPath}/file_retrieval`
export const fileRestoreEndpointPath = `${endpointPath}/restore`
export const fileQuarantineEndpointPath = `${endpointPath}/quarantine`

export type EndpointApi = {
    /**
     * xdr session object
     */
    session: XdrSession
    /**
     * Gets a list of filtered endpoints. Response is concatenated using AND
     * condition (OR is not supported). Maximum result set size is 100
     */
    get: GetEndpoints
    /**
     * Gets a list of your endpoints
     */
    getAll: GetAllEndpoints
    /**
     * Isolate one or more endpoints in a single request
     */
    isolate: IsolateEndpoint
    /**
     * Unisolate one or more endpoints in a single request
     */
    unisolate: UnisolateEndpoint
    /**
     * Run a scan on selected endpoints
     */
    scan: ScanEndpoint
    /**
     * Cancel the scan of selected endpoints. A scan can only be aborted if the
     * selected endpoints are in Pending or in Progress status. 
     */
    cancelScan: CancelScanEndpoint
    /**
     * Delete selected endpoints in the Cortex XDR app. You can delete up to 100
     * endpoints.
     */
    delete: DeleteEndpoint
    /**
     * Get the policy name for a specific endpoint.
     */
    policy: PolicyEndpoint
    /**
     * Retrieve files from selected endpoints. You can retrieve up to 20 files,
     * from no more than 100 endpoints. 
     */
    retrieveFile: FileRetrieveEndpoint
    /**
     * Quarantine file on selected endpoints.
     */
    quarantineFile: FileQuarantineEndpoint
    /**
     * Restore a quarantined file on a requested endpoints.
     */
    restoreFile: FileRestoreEndpoint
}

export function createEndpointApi(sess: XdrSession): EndpointApi {
    return {
        session: sess,
        get: getEndpoints,
        getAll: getAllEndpoints,
        isolate: isolateEndpoint,
        unisolate: unisolateEndpoint,
        scan: scanEndpoint,
        cancelScan: cancelScanEndpoint,
        delete: deleteEndpoint,
        policy: policyEndpoint,
        retrieveFile: fileRetrieveEndpoint,
        quarantineFile: fileQuarantineEndpoint,
        restoreFile: fileRestoreEndpoint
    }
}

export type EndpointApiErr = GeneralXdrError

export function endpointApiErrBldr(data: any, statusCode: number): XdrError<EndpointApiErr> {
    const parsed = parseXdrError<EndpointApiErr>(data)
    if (typeof parsed == 'string') {
        return new XdrError('endpoint', parsed, statusCode)
    } else {
        return new XdrError('endpoint', parsed.err_msg, statusCode, parsed)
    }
}
