export declare type GeneralXdrError = {
    err_code: number;
    err_msg: string;
    err_extra: string;
};
export declare function parseXdrError<E extends GeneralXdrError>(msg?: string): E | string;
export declare function isXdrError<E extends GeneralXdrError>(obj: any): obj is XdrError<E>;
export declare type XdrApis = 'alerts' | 'incidents' | 'endpoint';
export declare class XdrError<E extends GeneralXdrError> extends Error {
    constructor(api: XdrApis, msg: string, status_code: number, err?: E);
    api: XdrApis;
    reply?: E;
    status_code: number;
}
