import { IncidentApi } from "./api_incident";
import { Severity } from "./xdrapi";
/**
 * shape of a XDR Incident Filter
 */
export declare type IncidentFiler = {
    field: 'modification_time' | 'creation_time' | 'incident_id_list' | 'starred' | 'description' | 'alert_sources';
    operator: 'in';
    value: string | string[] | number | boolean;
};
declare type SortCriteria = {
    field: 'modification_time' | 'creation_time';
    keyword: 'asc' | 'desc';
};
/**
 * The generic shape of an incident
 */
export declare type Incident = {
    incident_id: string;
    creation_time: number;
    modification_time: number;
    detection_time: number;
    status: string;
    severity: Severity;
    description: string;
    assigned_user_mail: string;
    assigned_user_pretty_name: string;
    alert_count: number;
    low_severity_alert_count: number;
    med_severity_alert_count: number;
    high_severity_alert_count: number;
    user_count: number;
    host_count: number;
    xdr_url: string;
    starred: boolean;
    hosts: string[];
    users: string[];
    incident_sources: string[];
};
/**
 * The model of the GetIncidents response
 */
export declare type GetIncidentsResponse = {
    reply: {
        /**
         * Total number of possible results, value is limited to 10,000
         */
        total_count: number;
        /**
         * 	Number of incidents actually returned as result
         */
        result_count: number;
        /**
         * A list of incidents
         */
        incidents: Partial<Incident>[];
    };
};
/**
 * Get a list of incidents filtered by a list of incident IDs, modification
 * time, or creation time.
 */
export declare type GetIncidentsMethod = (
/**
 * Provides an array of filtered fields
 */
filter: IncidentFiler[], 
/**
 * Integer representing the starting offset within the query result set from
 * which you want incidents returned. Incidents are returned as a zero-based
 * list. Any incident indexed less than this value is not returned in the
 * final result set and defaults to zero.
 */
search_from?: number, 
/**
 * Integer representing the end offset within the result set after which you
 * do not want incidents returned. Incidents in the incident list that are
 * indexed higher than this value are not returned in the final results set.
 * Defaults to zero, which returns all incidents to the end of the list.
 */
search_to?: number, 
/**
 * Identifies the sort order for the result set
 */
sort?: SortCriteria) => Promise<GetIncidentsResponse>;
/**
 * Get a list of incidents filtered by a list of incident IDs, modification
 * time, or creation time.
 * @param this IncidentApi object
 * @param filters Provides an array of filtered fields
 * @param search_from Integer representing the starting offset within the query
 * result set from which you want incidents returned. Incidents are returned as
 * a zero-based list. Any incident indexed less than this value is not returned
 * in the final result set and defaults to zero.
 * @param search_to Integer representing the end offset within the result set
 * after which you do not want incidents returned. Incidents in the incident
 * list that are indexed higher than this value are not returned in the final
 * results set. Defaults to zero, which returns all incidents to the end of the
 * list.
 * @param sort Identifies the sort order for the result set
 */
export declare function getIncidents(this: IncidentApi, filters: IncidentFiler[], search_from?: number, search_to?: number, sort?: SortCriteria): Promise<GetIncidentsResponse>;
export {};
