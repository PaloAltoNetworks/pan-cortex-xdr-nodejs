import { XdrSession } from './http2client';
import { GeneralXdrError, XdrError } from './xdrerror';
import { BlacklistFile } from './hash_exception_blacklist';
import { WhitelistFile } from './hash_exception_whitelist';
export declare const blackListPath: string;
export declare const whiteListPath: string;
export declare type HashExceptionApi = {
    /**
     * xdr session object
     */
    session: XdrSession;
    /**
     * Blacklist requested files which have not already been blacklisted or whitelisted.
     */
    blacklistFile: BlacklistFile;
    /**
     * Whitelist requested files which have not already been blacklisted or whitelisted.
     */
    whitelistFile: WhitelistFile;
};
export declare function createHashExceptionApi(sess: XdrSession): HashExceptionApi;
export declare type HashExceptionApiErr = GeneralXdrError;
export declare function hashExceptionApiErrBldr(data: any, statusCode: number): XdrError<HashExceptionApiErr>;
