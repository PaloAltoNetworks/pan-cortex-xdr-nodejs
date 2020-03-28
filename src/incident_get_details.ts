// Copyright 2015-2020 Palo Alto Networks, Inc
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//       http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { IncidentApi, IncidentApiErr, incidentApiErrBldr, getIncidentDetailsPath } from "./api_incident";
import { Severity } from "./xdrapi";
import { Incident } from "./incident_get";
import { XdrError } from "./xdrerror";

type GetIncidentDetailsPayload = {
    request_data: {
        incident_id: string,
        alerts_limit?: number
    }
}

type Artifact = {
    type: string,
    alert_count: number,
    is_manual: boolean,
}

type FileArtifact = Artifact & {
    is_malicious: boolean,
    is_process: boolean,
    file_name: string,
    file_sha256: string,
    file_signature_status: string,
    file_signature_vendor_name: string,
    file_wildfire_verdict: string
}

type NetworkArtifact = Artifact & {
    network_domain: string,
    network_remote_ip: string,
    network_remote_port: number,
    network_country: string
}

type Alert = {
    alert_id: string,
    detection_timestamp: number,
    source: string,
    severity: Severity,
    name: string
    starred: boolean
    category: string,
    action: string,
    action_pretty: string,
    endpoint_id: string,
    description: string,
    host_ip: string,
    host_name: string,
    user_name: string,
    event_type: string,
    actor_process_image_name: string,
    actor_process_command_line: string,
    actor_process_signature_status: string,
    actor_process_signature_vendor: string,
    causality_actor_process_image_name: string,
    causality_actor_process_command_line: string,
    causality_actor_process_signature_status: string,
    causality_actor_process_signature_vendor: string,
    causality_actor_causality_id: string,
    action_process_image_name: string,
    action_process_image_command_line: string,
    action_process_image_sha256: string,
    action_process_signature_status: string,
    action_process_signature_vendor: string,
    action_file_path: string,
    action_file_md5: string,
    action_file_sha256: string,
    action_registry_data: string,
    action_registry_full_key: string,
    action_local_ip: string,
    action_local_port: number,
    action_remote_ip: string,
    action_remote_port: number,
    action_external_hostname: string
    fw_app_id: string,
    is_whitelisted: string,
}

export type ResponseSection<T> = {
    total_count: number,
    data: Partial<T>[]
}

/**
 * The model of the GetIncidentsDetails response
 */
export type GetIncidentsDetailsResponse = {
    reply: {
        incident: Partial<Incident>,
        alerts: ResponseSection<Alert>,
        network_artifacts: ResponseSection<NetworkArtifact>,
        file_artifacts: ResponseSection<FileArtifact>
    }
}

/**
 * Get extra data fields of a specific incident including alerts and key artifacts
 */
export type GetIncidentsDetailsMethod = (
    /**
     * The ID of the incident for which you want to retrieve extra data.
     */
    incidentId: string,
    /**
     * Maximum number of related alerts in the incident that you want to
     * retrieve (default is 1000).
     */
    alertsLimit: number
) => Promise<GetIncidentsDetailsResponse>

/**
 * Get extra data fields of a specific incident including alerts and key artifacts
 * @param this IncidentApi object
 * @param incidentId The ID of the incident for which you want to retrieve extra data.
 * @param alertsLimit Maximum number of related alerts in the incident that you
 * want to retrieve (default is 1000).
 */
export async function getIncidentsDetails(this: IncidentApi, incidentId: string, alertsLimit?: number): Promise<GetIncidentsDetailsResponse> {
    const payload: GetIncidentDetailsPayload = {
        request_data: {
            incident_id: incidentId,
            alerts_limit: alertsLimit
        }
    }
    const { data, status } = await this.session.post<GetIncidentDetailsPayload, GetIncidentsDetailsResponse, IncidentApiErr>(getIncidentDetailsPath, incidentApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('incidents', data, status)
    return data
}
