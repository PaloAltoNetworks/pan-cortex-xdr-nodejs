import { AuditsApi } from "./api_audits";
/**
 * shape of an Management Log
 */
declare type ManagementLogItem = {
    AUDIT_ID: number;
    AUDIT_OWNER_NAME: string;
    AUDIT_OWNER_EMAIL: string;
    AUDIT_ASSET_JSON: string;
    AUDIT_ASSET_NAMES: string;
    AUDIT_HOSTNAME: string;
    AUDIT_RESULT: string;
    AUDIT_REASON: string;
    AUDIT_DESCRIPTION: string;
    AUDIT_ENTITY: string;
    AUDIT_ENTITY_SUBTYPE: string;
    AUDIT_SESSION_ID: number;
    AUDIT_CASE_ID: number;
    AUDIT_INSERT_TIME: number;
    AUDIT_SEVERITY: string;
};
declare type ManagementFilter = {
    field: 'email' | 'type' | 'sub_type' | 'result' | 'timestamp';
    operator: 'in' | 'gte' | 'lte';
    value: number | string[];
};
declare type ManagementSort = {
    field: 'timestamp' | 'sub_type' | 'result';
    keyword: 'asc' | 'desc';
};
/**
 * The model of a Management Log method response
 */
export declare type ManagementLogResponse = {
    reply: {
        /**
         * Number of returned values.
         */
        result_count: number;
        /**
         * Array of Audit Items
         */
        data: Partial<ManagementLogItem>[];
    };
};
/**
 * Get audit management logs.
 */
export declare type ManagementLog = (
/**
 * Provides an array of filtered fields
 */
filters: ManagementFilter[], 
/**
 * Integer representing the starting offset within the query
 * result set from which you want violations returned.Violations are
 * returned as a zero-based list. Any incident indexed less than this value
 * is not returned in the final result set and defaults to zero.
 */
search_from?: number, 
/**
 * Integer representing the end offset within the result set after
 * which you do not want incidents returned. Violation in the violation list
 * that are indexed higher than this value are not returned in the final
 * results set. Defaults to zero, which returns all incidents to the end of
 * the list.
 */
search_to?: number, 
/**
 * Identifies the sort order for the result set.
 */
sort?: ManagementSort) => Promise<ManagementLogResponse>;
/**
 * Get audit management logs.
 * @param filters Provides an array of filtered fields
 * @param search_from Integer representing the starting offset within the query
 * result set from which you want violations returned.Violations are returned as
 * a zero-based list. Any incident indexed less than this value is not returned in the final result set and defaults to zero.
 * @param search_to Integer representing the end offset within the result set
 * after which you do not want incidents returned. Violation in the violation
 * list that are indexed higher than this value are not returned in the final
 * results set. Defaults to zero, which returns all incidents to the end of the list.
 * @param sort Identifies the sort order for the result set.
 */
export declare function managementLog(this: AuditsApi, filters: ManagementFilter[], search_from?: number, search_to?: number, sort?: ManagementSort): Promise<ManagementLogResponse>;
export {};
