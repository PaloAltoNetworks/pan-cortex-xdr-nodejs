import { EndpointApi } from "./api_endpoint";
import { EndpointFilter } from './endpoint_get';
/**
 * The model of a File Qurantine Endpoint method response
 */
export declare type FileQuarantineEndpointResponse = {
    reply: {
        action_id: string;
    };
};
/**
 * Quarantine file on selected endpoints.
 */
export declare type FileQuarantineEndpoint = (
/**
 * String that identifies the endpoint to isolate or array of filtered
 * fields for isolating a number of endpoints at once.
 */
filters: EndpointFilter[], 
/**
 * String that represents the path of the file you want to quarantine
 */
filePath: string, 
/**
 * String that represents the file’s hash. Hash must be a valid SHA256
 */
fileHash: string) => Promise<FileQuarantineEndpointResponse>;
/**
 * Quarantine file on selected endpoints.
 * @param filters String that identifies the endpoint to isolate or array of
 * filtered fields for isolating a number of endpoints at once.
 * @param filePath String that represents the path of the file you want to quarantine
 * @param fileHash String that represents the file’s hash. Hash must be a valid SHA256
 */
export declare function fileQuarantineEndpoint(this: EndpointApi, filters: EndpointFilter[], filePath: string, fileHash: string): Promise<FileQuarantineEndpointResponse>;
