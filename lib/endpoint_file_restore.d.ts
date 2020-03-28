import { EndpointApi } from "./api_endpoint";
/**
 * The model of a File Restore Endpoint method response
 */
export declare type FileRestoreEndpointResponse = {
    reply: boolean;
};
/**
 * Restore a quarantined file on a requested endpoints.
 */
export declare type FileRestoreEndpoint = (
/**
 * String that represents the file’s hash. Hash must be a valid SHA256
 */
fileHash: string, 
/**
 * String that represents the endpoint ID. If you do not enter a specific
 * endpoint ID, the request will run restore on all endpoints which relate
 * to the quarantined file you defined.
 */
endpoint_id?: string) => Promise<FileRestoreEndpointResponse>;
/**
 * Restore a quarantined file on a requested endpoints.
 * @param fileHash String that represents the file’s hash. Hash must be a valid SHA256
 * @param endpointId String that represents the endpoint ID. If you do not enter
 * a specific endpoint ID, the request will run restore on all endpoints which
 * relate to the quarantined file you defined.
 */
export declare function fileRestoreEndpoint(this: EndpointApi, fileHash: string, endpointId?: string): Promise<FileRestoreEndpointResponse>;
