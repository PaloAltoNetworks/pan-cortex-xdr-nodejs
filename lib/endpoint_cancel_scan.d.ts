import { EndpointApi } from "./api_endpoint";
import { EndpointFilter } from './endpoint_get';
/**
 * The model of a Cancel Scan Endpoint method response
 */
export declare type CancelScanEndpointResponse = {
    reply: {
        action_id: string;
    };
};
/**
 * Cancel the scan of selected endpoints. A scan can only be aborted if the
 * selected endpoints are in Pending or in Progress status.
 */
export declare type CancelScanEndpoint = (
/**
 * Array of filtered fields for isolating a number of endpoints at once.
 */
filters: EndpointFilter[]) => Promise<CancelScanEndpointResponse>;
/**
 * Cancel the scan of selected endpoints. A scan can only be aborted if the
 * selected endpoints are in Pending or in Progress status.
 * @param filter Array of filtered fields for isolating a number of endpoints at
 * once.
 */
export declare function cancelScanEndpoint(this: EndpointApi, filters: EndpointFilter[]): Promise<CancelScanEndpointResponse>;
