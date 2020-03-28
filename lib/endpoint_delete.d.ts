import { EndpointApi } from "./api_endpoint";
import { EndpointFilter } from './endpoint_get';
/**
 * The model of a Delete Endpoint method response
 */
export declare type DeleteEndpointResponse = {
    reply: boolean;
};
/**
 * Delete selected endpoints in the Cortex XDR app. You can delete up to 100
 * endpoints.
 */
export declare type DeleteEndpoint = (
/**
 * Array of filtered fields for isolating a number of endpoints at once.
 */
filters: EndpointFilter[]) => Promise<DeleteEndpointResponse>;
/**
 * Delete selected endpoints in the Cortex XDR app. You can delete up to 100
 * endpoints.
 * @param filter Array of filtered fields for isolating a number of endpoints at
 * once.
 */
export declare function deleteEndpoint(this: EndpointApi, filters: EndpointFilter[]): Promise<DeleteEndpointResponse>;
