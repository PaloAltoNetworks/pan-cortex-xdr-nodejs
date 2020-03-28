import { IncidentApi } from "./api_incident";
import { Severity } from "./xdrapi";
import { Incident } from "./incident_get";
declare type Artifact = {
    type: string;
    alert_count: number;
    is_manual: boolean;
};
declare type FileArtifact = Artifact & {
    is_malicious: boolean;
    is_process: boolean;
    file_name: string;
    file_sha256: string;
    file_signature_status: string;
    file_signature_vendor_name: string;
    file_wildfire_verdict: string;
};
declare type NetworkArtifact = Artifact & {
    network_domain: string;
    network_remote_ip: string;
    network_remote_port: number;
    network_country: string;
};
declare type Alert = {
    alert_id: string;
    detection_timestamp: number;
    source: string;
    severity: Severity;
    name: string;
    starred: boolean;
    category: string;
    action: string;
    action_pretty: string;
    endpoint_id: string;
    description: string;
    host_ip: string;
    host_name: string;
    user_name: string;
    event_type: string;
    actor_process_image_name: string;
    actor_process_command_line: string;
    actor_process_signature_status: string;
    actor_process_signature_vendor: string;
    causality_actor_process_image_name: string;
    causality_actor_process_command_line: string;
    causality_actor_process_signature_status: string;
    causality_actor_process_signature_vendor: string;
    causality_actor_causality_id: string;
    action_process_image_name: string;
    action_process_image_command_line: string;
    action_process_image_sha256: string;
    action_process_signature_status: string;
    action_process_signature_vendor: string;
    action_file_path: string;
    action_file_md5: string;
    action_file_sha256: string;
    action_registry_data: string;
    action_registry_full_key: string;
    action_local_ip: string;
    action_local_port: number;
    action_remote_ip: string;
    action_remote_port: number;
    action_external_hostname: string;
    fw_app_id: string;
    is_whitelisted: string;
};
export declare type ResponseSection<T> = {
    total_count: number;
    data: Partial<T>[];
};
/**
 * The model of the GetIncidentsDetails response
 */
export declare type GetIncidentsDetailsResponse = {
    reply: {
        incident: Partial<Incident>;
        alerts: ResponseSection<Alert>;
        network_artifacts: ResponseSection<NetworkArtifact>;
        file_artifacts: ResponseSection<FileArtifact>;
    };
};
/**
 * Get extra data fields of a specific incident including alerts and key artifacts
 */
export declare type GetIncidentsDetailsMethod = (
/**
 * The ID of the incident for which you want to retrieve extra data.
 */
incidentId: string, 
/**
 * Maximum number of related alerts in the incident that you want to
 * retrieve (default is 1000).
 */
alertsLimit: number) => Promise<GetIncidentsDetailsResponse>;
/**
 * Get extra data fields of a specific incident including alerts and key artifacts
 * @param this IncidentApi object
 * @param incidentId The ID of the incident for which you want to retrieve extra data.
 * @param alertsLimit Maximum number of related alerts in the incident that you
 * want to retrieve (default is 1000).
 */
export declare function getIncidentsDetails(this: IncidentApi, incidentId: string, alertsLimit?: number): Promise<GetIncidentsDetailsResponse>;
export {};
