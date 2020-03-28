import { XdrSession } from './http2client';
import { GeneralXdrError, XdrError } from './xdrerror';
import { GetIncidentsMethod } from './incident_get';
import { GetIncidentsDetailsMethod } from './incident_get_details';
import { UpdateIncidentMethod } from './incident_update';
export declare const getIncidentPath: string;
export declare const getIncidentDetailsPath: string;
export declare const updateIncidentPath: string;
/**
 * XDR Incident API object
 */
export declare type IncidentApi = {
    /**
     * xdr session object
     */
    session: XdrSession;
    /**
     * Get a list of incidents filtered by a list of incident IDs, modification
     * time, or creation time.
     */
    get: GetIncidentsMethod;
    /**
     * Get extra data fields of a specific incident including alerts and key
     * artifacts
     */
    getExtraData: GetIncidentsDetailsMethod;
    /**
     * Update one or more fields of a specific incident. Missing fields are ignored.
     */
    updateIncident: UpdateIncidentMethod;
};
/**
 * Create XDR incident API object
 * @param sess XDR session object to use
 */
export declare function createIncidentApi(sess: XdrSession): IncidentApi;
export declare type IncidentApiErr = GeneralXdrError;
export declare function incidentApiErrBldr(data: any, statusCode: number): XdrError<IncidentApiErr>;
