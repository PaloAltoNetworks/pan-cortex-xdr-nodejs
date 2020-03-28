import { XdrSession } from './http2client';
import { GeneralXdrError, XdrError } from './xdrerror';
import { GetDeviceViolations } from './device_control_get_violations';
export declare const getViolationsPath: string;
export declare type DeviceControlApi = {
    /**
     * xdr session object
     */
    session: XdrSession;
    /**
     * Gets a list of device violations filtered by selected fields
     */
    getDeviceViolations: GetDeviceViolations;
};
export declare function createDeviceControlApi(sess: XdrSession): DeviceControlApi;
export declare type DeviceControlApiErr = GeneralXdrError;
export declare function deviceControlApiErrBldr(data: any, statusCode: number): XdrError<DeviceControlApiErr>;
