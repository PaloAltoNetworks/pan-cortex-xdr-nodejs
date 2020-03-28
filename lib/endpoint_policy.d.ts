import { EndpointApi } from "./api_endpoint";
/**
 * The model of a Policy Endpoint method response
 */
export declare type PolicyEndpointResponse = {
    reply: {
        policy_name: string;
    };
};
/**
 * Get the policy name for a specific endpoint.
 */
export declare type PolicyEndpoint = (
/**
 * String the represents the endpoint ID
 */
endpointId: string) => Promise<PolicyEndpointResponse>;
/**
 * Get the policy name for a specific endpoint.
 * @param endpointId String the represents the endpoint ID
 */
export declare function policyEndpoint(this: EndpointApi, endpointId: string): Promise<PolicyEndpointResponse>;
