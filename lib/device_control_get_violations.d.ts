import { DeviceControlApi } from "./api_device_control";
/**
 * shape of an XDR Violation
 */
declare type XdrViolation = {
    hostname: string;
    user: string;
    ip: string;
    timestamp: number;
    violation_id: number;
    type: string;
    vendor_id: string;
    vendor: string;
    product_id: string;
    product: string;
    serial: string;
    endpoint_id: string;
};
declare type ViolationFilter = {
    field: 'endpoint_id_list' | 'type' | 'timestamp' | 'ip_list' | 'vendor' | 'vendor_id' | 'product' | 'product_id' | 'serial' | 'hostname' | 'violation_id_list' | 'username';
    operator: 'in' | 'gte' | 'lte';
    value: number | string | string[] | 'cdrom' | 'disk drive' | 'floppy disk' | 'portable device';
};
declare type ViolationSort = {
    field: 'first_seen' | 'last_seen';
    keyword: 'asc' | 'desc';
};
/**
 * The model of a Get Device Violations method response
 */
export declare type GetDeviceViolationsResponse = {
    reply: {
        /**
         * Number of returned values.
         */
        result_count: number;
        /**
         * Array of violations
         */
        violations: Partial<XdrViolation>[];
    };
};
/**
 * Gets a list of device violations filtered by selected fields
 */
export declare type GetDeviceViolations = (
/**
 * String that identifies the violation field the filter is matching
 */
filters: ViolationFilter[], 
/**
 * Integer representing the starting offset within the query result set from
 * which you want violations returned.Violations are returned as a
 * zero-based list. Any incident indexed less than this value is not
 * returned in the final result set and defaults to zero.
 */
search_from?: number, 
/**
 * Integer representing the end offset within the result set after which you
 * do not want incidents returned. Violation in the violation list that are
 * indexed higher than this value are not returned in the final results set.
 * Defaults to zero, which returns all incidents to the end of the list.
 */
search_to?: number, 
/**
 * dentifies the sort order for the result set.
 */
sort?: ViolationSort) => Promise<GetDeviceViolationsResponse>;
/**
 * Gets a list of device violations filtered by selected fields
 * @param filters String that identifies the violation field the filter is matching
 * @param search_from Integer representing the starting offset within the query
 * result set from which you want violations returned.Violations are returned as
 * a zero-based list. Any incident indexed less than this value is not returned
 * in the final result set and defaults to zero.
 * @param search_to Integer representing the end offset within the result set
 * after which you do not want incidents returned. Violation in the violation
 * list that are indexed higher than this value are not returned in the final
 * results set. Defaults to zero, which returns all incidents to the end of the list.
 * @param sort Identifies the sort order for the result set.
 */
export declare function getDeviceViolations(this: DeviceControlApi, filters: ViolationFilter[], search_from?: number, search_to?: number, sort?: ViolationSort): Promise<GetDeviceViolationsResponse>;
export {};
