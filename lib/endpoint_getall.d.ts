import { EndpointApi } from "./api_endpoint";
export declare type EndpointInfo = {
    agent_id: string;
    agent_status: string;
    host_name: string;
    agent_type: string;
    ip: string[];
};
/**
 * The model of a Get All Endpoint method response
 */
export declare type GetAllEndpointResponse = {
    reply: EndpointInfo[];
};
/**
 * Gets a list of your endpoints
 */
export declare type GetAllEndpoints = () => Promise<GetAllEndpointResponse>;
/**
 * Gets a list of your endpoints
 */
export declare function getAllEndpoints(this: EndpointApi): Promise<GetAllEndpointResponse>;
