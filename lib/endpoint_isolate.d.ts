import { EndpointApi } from "./api_endpoint";
import { EndpointFilter } from './endpoint_get';
/**
 * The model of a Isolate Endpoint method response
 */
export declare type IsolateEndpointResponse = {
    reply: {
        action_id: string;
    };
};
/**
 * Isolate one or more endpoints in a single request
 */
export declare type IsolateEndpoint = (
/**
 * String that identifies the endpoint to isolate or array of filtered
 * fields for isolating a number of endpoints at once.
 */
criteria: string | EndpointFilter[]) => Promise<IsolateEndpointResponse>;
/**
 * Isolate one or more endpoints in a single request
 * @param criteria String that identifies the endpoint to isolate or array of
 * filtered fields for isolating a number of endpoints at once.
 */
export declare function isolateEndpoint(this: EndpointApi, criteria: string | EndpointFilter[]): Promise<IsolateEndpointResponse>;
