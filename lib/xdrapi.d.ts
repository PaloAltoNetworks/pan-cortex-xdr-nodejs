import { IncidentApi } from "./api_incident";
import { XdrSessionOps } from "./http2client";
import { AlertApi } from "./api_alert";
import { EndpointApi } from "./api_endpoint";
import { DeviceControlApi } from "./api_device_control";
import { HashExceptionApi } from "./api_hash_exceptions";
import { AuditsApi } from "./api_audits";
import { DistributionsApi } from "./api_distributions";
/**
 * Severity levels
 */
export declare type Severity = 'informational' | 'low' | 'medium' | 'high' | 'unknown';
/**
 * Shape of a XDR API object
 */
export declare type XdrApi = {
    /**
     * Access to the Incidents API methods
     */
    incident: IncidentApi;
    /**
     * Access to the Alerts API methods
     */
    alert: AlertApi;
    /**
     * Access to the Endpoint API methods
     */
    endpoint: EndpointApi;
    /**
     * Access to the Device Control API methods
     */
    deviceControl: DeviceControlApi;
    /**
     * Access to the Hash Exception API methods
     */
    hashException: HashExceptionApi;
    /**
     * Access to the Audit API methods
     */
    audit: AuditsApi;
    /**
     * Access to the Distributions API methods
     */
    distributions: DistributionsApi;
    /**
     * closes the underlying HTTP2 session
     */
    close: () => Promise<void>;
};
/**
 * Configuration options for a XdrApi object
 */
export declare type XdrApiOps = Pick<XdrSessionOps, 'xdrBaseFqdn' | 'apiTimeout' | 'sessionOptions'> & {
    /**
     * the XDR API KEY value
     */
    apiKey: string;
    /**
     * the XDR API KEY identifier
     */
    apiKeyId: string;
    /**
     * if the XDR API KEY is either advanced or not
     */
    isAdvancedKey?: boolean;
    /**
     * optional number of seconds before giving up due to timeout
     */
    apiTimeout?: number;
};
/**
 * Creates an XdrApi object either from provided configuration object or from
 * environmental variables
 * @param ops configuration options
 */
export declare function createXdrApi(ops?: XdrApiOps): XdrApi;
