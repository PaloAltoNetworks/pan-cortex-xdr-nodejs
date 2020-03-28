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

import { AlertApi, AlertApiErr, insertParsedPath, alertApiErrBldr } from "./api_alert"
import { XdrError } from "./xdrerror"

/**
 * Model of a XDR Alert
 */
export type XdrAlert = {
    /**
     * value that defines the product
     */
    product: string,
    /**
     * value that defines the product
     */
    vendor: string,
    /**
     * value for the source IP address
     */
    local_ip: string,
    /**
     * value for the source port
     */
    local_port: number,
    /**
     * value of the destination IP address
     */
    remote_ip: string,
    /**
     * value for the destination port
     */
    remote_port: number,
    /**
     * value representing the epoch of the time the alert occurred in milliseconds
     */
    event_timestamp: number
    /**
     * value of alert severity
     */
    severity?: 'Informational' | 'Low' | 'Medium' | 'High' | 'Unknown'
    /**
     * defining the alert name
     */
    alert_name: string
    /**
     * defining the alert description
     */
    alert_description?: string
}

type InsertParsedPayload = {
    request_data: {
        alerts: XdrAlert[]
    }
}

/**
 * The model of a Insert Parsed Alert method response
 */
export type InsertParsedAlertsResponse = {
    reply: true
}

/**
 * Upload alerts from external alert sources in Cortex XDR format. Cortex XDR displays alerts that are parsed successfully in related incidents and views.
 * You can send 600 alerts per minute. Each request can contain a maximum of 60
 * alerts. 
 */
export type InsertParsedAlerts = (
    /**
     * @param alerts List of alerts in Cortex XDR format
     */
    alerts: XdrAlert[]
) => Promise<InsertParsedAlertsResponse>

/**
 * Upload alerts from external alert sources in Cortex XDR format. Cortex XDR displays alerts that are parsed successfully in related incidents and views.
 * You can send 600 alerts per minute. Each request can contain a maximum of 60
 * alerts. 
 * @param alerts List of alerts in Cortex XDR format
 */
export async function insertParsedAlerts(this: AlertApi, alerts: XdrAlert[]): Promise<InsertParsedAlertsResponse> {
    const payload: InsertParsedPayload = { request_data: { alerts } }
    const { data, status } = await this.session.post<InsertParsedPayload, InsertParsedAlertsResponse, AlertApiErr>(insertParsedPath, alertApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('alerts', data, status)
    return data
}
