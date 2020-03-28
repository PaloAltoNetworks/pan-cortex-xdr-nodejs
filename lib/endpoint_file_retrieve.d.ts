import { EndpointApi } from "./api_endpoint";
import { EndpointFilter } from './endpoint_get';
/**
 * A dictionary containing the type of platform and files you want to retrieve.
 */
export declare type RetrieveFiles = {
    windows: string[];
    linux: string[];
    macos: string[];
};
/**
 * The model of a File Retrieve Endpoint method response
 */
export declare type FileRetrieveEndpointResponse = {
    reply: {
        action_id: string;
    };
};
/**
 * Retrieve files from selected endpoints. You can retrieve up to 20 files, from
 * no more than 100 endpoints.
 */
export declare type FileRetrieveEndpoint = (
/**
 * String that identifies the endpoint to isolate or array of filtered fields for isolating
 */
filters: EndpointFilter[], 
/**
 * A dictionary containing the type of platform and files you want to retrieve.
 */
files: Partial<RetrieveFiles>) => Promise<FileRetrieveEndpointResponse>;
/**
 * Retrieve files from selected endpoints. You can retrieve up to 20 files, from
 * no more than 100 endpoints.
 * @param filters String that identifies the endpoint to isolate or array of
 * filtered fields for isolating a number of endpoints at once.
 * @param files A dictionary containing the type of platform and files you want to retrieve.
 */
export declare function fileRetrieveEndpoint(this: EndpointApi, filters: EndpointFilter[], files: Partial<RetrieveFiles>): Promise<FileRetrieveEndpointResponse>;
