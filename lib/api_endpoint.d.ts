import { XdrSession } from './http2client';
import { GeneralXdrError, XdrError } from './xdrerror';
import { GetEndpoints } from './endpoint_get';
import { IsolateEndpoint } from './endpoint_isolate';
import { UnisolateEndpoint } from './endpoint_unisolate';
import { GetAllEndpoints } from './endpoint_getall';
import { ScanEndpoint } from './endpoint_scan';
import { CancelScanEndpoint } from './endpoint_cancel_scan';
import { DeleteEndpoint } from './endpoint_delete';
import { PolicyEndpoint } from './endpoint_policy';
import { FileRetrieveEndpoint } from './endpoint_file_retrieve';
import { FileQuarantineEndpoint } from './endpoint_file_quarantine';
import { FileRestoreEndpoint } from './endpoint_file_restore';
export declare const isolateEndpointPath: string;
export declare const unisolateEndpointPath: string;
export declare const getEndpointsPath: string;
export declare const getAllEndpointsPath: string;
export declare const scanEndpointPath: string;
export declare const cancelScanEndpointPath: string;
export declare const deleteEndpointPath: string;
export declare const policyEndpointPath: string;
export declare const fileRetrieveEndpointPath: string;
export declare const fileRestoreEndpointPath: string;
export declare const fileQuarantineEndpointPath: string;
export declare type EndpointApi = {
    /**
     * xdr session object
     */
    session: XdrSession;
    /**
     * Gets a list of filtered endpoints. Response is concatenated using AND
     * condition (OR is not supported). Maximum result set size is 100
     */
    get: GetEndpoints;
    /**
     * Gets a list of your endpoints
     */
    getAll: GetAllEndpoints;
    /**
     * Isolate one or more endpoints in a single request
     */
    isolate: IsolateEndpoint;
    /**
     * Unisolate one or more endpoints in a single request
     */
    unisolate: UnisolateEndpoint;
    /**
     * Run a scan on selected endpoints
     */
    scan: ScanEndpoint;
    /**
     * Cancel the scan of selected endpoints. A scan can only be aborted if the
     * selected endpoints are in Pending or in Progress status.
     */
    cancelScan: CancelScanEndpoint;
    /**
     * Delete selected endpoints in the Cortex XDR app. You can delete up to 100
     * endpoints.
     */
    delete: DeleteEndpoint;
    /**
     * Get the policy name for a specific endpoint.
     */
    policy: PolicyEndpoint;
    /**
     * Retrieve files from selected endpoints. You can retrieve up to 20 files,
     * from no more than 100 endpoints.
     */
    retrieveFile: FileRetrieveEndpoint;
    /**
     * Quarantine file on selected endpoints.
     */
    quarantineFile: FileQuarantineEndpoint;
    /**
     * Restore a quarantined file on a requested endpoints.
     */
    restoreFile: FileRestoreEndpoint;
};
export declare function createEndpointApi(sess: XdrSession): EndpointApi;
export declare type EndpointApiErr = GeneralXdrError;
export declare function endpointApiErrBldr(data: any, statusCode: number): XdrError<EndpointApiErr>;
