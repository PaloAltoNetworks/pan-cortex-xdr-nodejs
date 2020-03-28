/// <reference types="node" />
import * as http2 from 'http2';
import { ApiKey } from './apikey';
import { GeneralXdrError, XdrError } from './xdrerror';
/**
 * Options to configure a `Http2Fetch` object
 */
export declare type XdrSessionOps = {
    /**
     * Cortex API default FQDN to use in operations that do not provide an
     * explicit `Credentials` object
     */
    xdrBaseFqdn: string;
    /**
     * If provided, then all operations will use this `Credential`'s JWT token
     */
    xdrApiKey: ApiKey;
    /**
     * How many milliseconds to keep an inactive HTTP2 session to the Cortex API
     * GW (default = 60000)
     */
    apiTimeout?: number;
    /**
     * Standard options for the http2 object
     */
    sessionOptions?: http2.ClientSessionOptions & http2.SecureClientSessionOptions;
};
declare type ErrBldr<E extends GeneralXdrError> = (data: E | string, statusCode: number) => XdrError<E>;
export interface XdrSession {
    h2session: http2.ClientHttp2Session | undefined;
    refreshSession: () => Promise<void>;
    apiKey: ApiKey;
    close: () => Promise<void>;
    get<R, E extends GeneralXdrError>(path: string, eBldr: ErrBldr<E>, opts?: http2.ClientSessionRequestOptions): Promise<{
        data: R | string;
        status: number;
    }>;
    del<R, E extends GeneralXdrError>(path: string, eBldr: ErrBldr<E>, opts?: http2.ClientSessionRequestOptions): Promise<{
        data: R | string;
        status: number;
    }>;
    post<T, R, E extends GeneralXdrError>(path: string, eBldr: ErrBldr<E>, data: T, opts?: http2.ClientSessionRequestOptions): Promise<{
        data: R | string;
        status: number;
    }>;
    put<T, R, E extends GeneralXdrError>(path: string, eBldr: ErrBldr<E>, data: T, opts?: http2.ClientSessionRequestOptions): Promise<{
        data: R | string;
        status: number;
    }>;
}
export declare function createXdrSession<E extends GeneralXdrError>(ops: XdrSessionOps): XdrSession;
export {};
