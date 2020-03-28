import { XdrSession } from './http2client';
import { GeneralXdrError, XdrError } from './xdrerror';
import { InsertParsedAlerts } from './alert_insert_parsed';
export declare const insertParsedPath: string;
export declare const insertCEFPath: string;
export declare type AlertApi = {
    /**
     * xdr session object
     */
    session: XdrSession;
    /**
     * Upload alerts from external alert sources in Cortex XDR format. Cortex
     * XDR displays alerts that are parsed successfully in related incidents and
     * views. You can send 600 alerts per minute. Each request can contain a
     * maximum of 60 alerts.
     */
    insParsed: InsertParsedAlerts;
};
/**
 * Creates an Alert API object
 * @param sess xdr session object
 */
export declare function createAlertApi(sess: XdrSession): AlertApi;
/**
 * Shape of the error returned by the Alert API
 */
export declare type AlertApiErr = GeneralXdrError;
/**
 * Parses a REST call response into an Alert API error
 * @param data REST response
 * @param statusCode HTTP2 response code
 */
export declare function alertApiErrBldr(data: any, statusCode: number): XdrError<AlertApiErr>;
