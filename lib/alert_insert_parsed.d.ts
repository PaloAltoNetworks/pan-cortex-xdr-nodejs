import { AlertApi } from "./api_alert";
/**
 * Model of a XDR Alert
 */
export declare type XdrAlert = {
    /**
     * value that defines the product
     */
    product: string;
    /**
     * value that defines the product
     */
    vendor: string;
    /**
     * value for the source IP address
     */
    local_ip: string;
    /**
     * value for the source port
     */
    local_port: number;
    /**
     * value of the destination IP address
     */
    remote_ip: string;
    /**
     * value for the destination port
     */
    remote_port: number;
    /**
     * value representing the epoch of the time the alert occurred in milliseconds
     */
    event_timestamp: number;
    /**
     * value of alert severity
     */
    severity?: 'Informational' | 'Low' | 'Medium' | 'High' | 'Unknown';
    /**
     * defining the alert name
     */
    alert_name: string;
    /**
     * defining the alert description
     */
    alert_description?: string;
};
/**
 * The model of a Insert Parsed Alert method response
 */
export declare type InsertParsedAlertsResponse = {
    reply: true;
};
/**
 * Upload alerts from external alert sources in Cortex XDR format. Cortex XDR displays alerts that are parsed successfully in related incidents and views.
 * You can send 600 alerts per minute. Each request can contain a maximum of 60
 * alerts.
 */
export declare type InsertParsedAlerts = (
/**
 * @param alerts List of alerts in Cortex XDR format
 */
alerts: XdrAlert[]) => Promise<InsertParsedAlertsResponse>;
/**
 * Upload alerts from external alert sources in Cortex XDR format. Cortex XDR displays alerts that are parsed successfully in related incidents and views.
 * You can send 600 alerts per minute. Each request can contain a maximum of 60
 * alerts.
 * @param alerts List of alerts in Cortex XDR format
 */
export declare function insertParsedAlerts(this: AlertApi, alerts: XdrAlert[]): Promise<InsertParsedAlertsResponse>;
