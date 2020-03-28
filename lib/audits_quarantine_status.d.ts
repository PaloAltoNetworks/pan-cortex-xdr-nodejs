import { AuditsApi } from "./api_audits";
/**
 * shape of an Quarantine Item
 */
declare type QuarantineItem = {
    /**
     * String the represents the endpoint ID.
     */
    endpoint_id: string;
    /**
     * String that represents the file hash. Must be a valid SHA256
     */
    file_path: string;
    /**
     * String that represents the file path.
     */
    file_hash: string;
};
declare type QuarantineStatusItem = QuarantineItem & {
    status: boolean;
};
/**
 * The model of a Quarantine Status method response
 */
export declare type QuarantineStatusResponse = {
    reply: Partial<QuarantineStatusItem>[];
};
/**
 * Retrieve the quarantine status for a selected file.
 */
export declare type QuarantineStatus = (
/**
 * list of files
 */
files: QuarantineItem[]) => Promise<QuarantineStatusResponse>;
/**
 * Retrieve the quarantine status for a selected file.
 * @param files list of files
 */
export declare function quarantineStatus(this: AuditsApi, files: QuarantineItem[]): Promise<QuarantineStatusResponse>;
export {};
