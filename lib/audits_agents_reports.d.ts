import { AuditsApi } from "./api_audits";
/**
 * shape of an Audit Item
 */
declare type AuditItem = {
    TIMESTAMP: number;
    RECEIVEDTIME: number;
    ENDPOINTID: string;
    ENDPOINTNAME: string;
    DOMAIN: string;
    XDRVERSION: string;
    SEVERITY: string;
    CATEGORY: string;
    TYPE: string;
    SUBTYPE: string;
    RESULT?: string;
    REASON?: string;
    DESCRIPTION: string;
};
declare type AuditFilter = {
    field: 'endpoint_id' | 'endpoint_name' | 'type' | 'sub_type' | 'result' | 'timestamp' | 'domain' | 'xdr_version' | 'category' | 'timestamp';
    operator: 'in' | 'gte' | 'lte';
    value: number | string[] | 'status' | 'audit' | 'monitoring';
};
declare type AuditSort = {
    field: 'type' | 'category' | 'trapsversion' | 'timestamp' | 'domain';
    keyword: 'asc' | 'desc';
};
/**
 * The model of a Agent Report method response
 */
export declare type AgentReportResponse = {
    reply: {
        /**
         * Number of returned values.
         */
        result_count: number;
        /**
         * Array of Audit Items
         */
        data: Partial<AuditItem>[];
    };
};
/**
 * Get agent event reports.
 */
export declare type AgentReport = (
/**
 * Provides an array of filtered fields
 */
filters: AuditFilter[], 
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
sort?: AuditSort) => Promise<AgentReportResponse>;
/**
 * Get agent event reports.
 * @param filters Provides an array of filtered fields
 * @param search_from Integer representing the starting offset within the query
 * result set from which you want violations returned.Violations are returned as
 * a zero-based list. Any incident indexed less than this value is not returned
 * in the final result set and defaults to zero.
 * @param search_to Integer representing the end offset within the result set
 * after which you do not want incidents returned. Violation in the violation
 * list that are indexed higher than this value are not returned in the final
 * results set. Defaults to zero, which returns all incidents to the end of the list.
 * @param sort Identifies the sort order for the result set.
 */
export declare function agentReport(this: AuditsApi, filters: AuditFilter[], search_from?: number, search_to?: number, sort?: AuditSort): Promise<AgentReportResponse>;
export {};
