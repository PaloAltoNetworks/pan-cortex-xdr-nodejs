import { EndpointApi } from "./api_endpoint";
import { EndpointFilter } from './endpoint_get';
/**
 * The model of a Unisolate Endpoint method response
 */
export declare type UnisolateEndpointResponse = {
    reply: {
        action_id: string;
    };
};
/**
 * Unisolate one or more endpoints in a single request
 */
export declare type UnisolateEndpoint = (
/**
 * String that identifies the endpoint to isolate or array of filtered
 * fields for isolating a number of endpoints at once.
 */
criteria: string | EndpointFilter[]) => Promise<UnisolateEndpointResponse>;
/**
 * Unisolate one or more endpoints in a single request
 * @param criteria String that identifies the endpoint to isolate or array of
 * filtered fields for isolating a number of endpoints at once.
 */
export declare function unisolateEndpoint(this: EndpointApi, criteria: string | EndpointFilter[]): Promise<UnisolateEndpointResponse>;
