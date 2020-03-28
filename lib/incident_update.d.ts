import { IncidentApi } from "./api_incident";
/**
 * Incident data
 */
export declare type UpdateData = {
    assigned_user_mail: string;
    assigned_user_pretty_name: string;
    manual_severity: 'high' | 'medium' | 'low';
    status: 'NEW' | 'UNDER_INVESTIGATION' | 'RESOLVED_THREAT_HANDLED' | 'RESOLVED_KNOWN_ISSUE' | 'RESOLVED_DUPLICATE' | 'RESOLVED_FALSE_POSITIVE' | 'RESOLVED_OTHER';
    resolve_comment: string;
};
/**
 * The model of the UpdateIncident response
 */
export declare type UpdateIncidentResponse = {
    reply: true;
};
/**
 * Update one or more fields of a specific incident. Missing fields are ignored.
 */
export declare type UpdateIncidentMethod = (
/**
 * An integer representing the incident ID you want to update.
 */
incidentId: string, 
/**
 * Provides an array of filtered fields
 */
udpdateData: UpdateData) => Promise<UpdateIncidentResponse>;
/**
 * Update one or more fields of a specific incident. Missing fields are ignored.
 * @param this IncidentApi object
 * @param incidentId An integer representing the incident ID you want to update.
 * @param udpdateData Provides an array of filtered fields
 */
export declare function updateIncident(this: IncidentApi, incidentId: string, udpdateData: UpdateData): Promise<UpdateIncidentResponse>;
