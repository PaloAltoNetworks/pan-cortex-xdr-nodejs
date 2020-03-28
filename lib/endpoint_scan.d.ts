import { EndpointApi } from "./api_endpoint";
import { EndpointFilter } from './endpoint_get';
/**
 * The model of a Scan Endpoint method response
 */
export declare type ScanEndpointResponse = {
    reply: {
        action_id: string;
    };
};
/**
 * Run a scan on selected endpoints
 */
export declare type ScanEndpoint = (
/**
 * Array of filtered fields for isolating a number of endpoints at once.
 */
filters: EndpointFilter[]) => Promise<ScanEndpointResponse>;
/**
 * Run a scan on selected endpoints
 * @param filter Array of filtered fields for isolating a number of endpoints at
 * once.
 */
export declare function scanEndpoint(this: EndpointApi, filters: EndpointFilter[]): Promise<ScanEndpointResponse>;
