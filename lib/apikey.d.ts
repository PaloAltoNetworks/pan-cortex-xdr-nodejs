/**
 * Shape of a XDR API Key
 */
export declare type ApiKey = {
    /**
     * The API KEY itself
     */
    key: string;
    /**
     * The API Key Identifier
     */
    keyId: string;
    /**
     * Returns the HTTP2 XDR authorization headers for this ApiKey
     */
    headers: (preload?: {
        nonce: string;
        ts: number;
    }) => XdrBasicApiHeaders | XdrAdvApiHeaders;
};
/**
 * HTTP headers when using basic XDR API KEYs
 */
export declare type XdrBasicApiHeaders = {
    'x-xdr-auth-id': string;
    authorization: string;
};
/**
 * Creates a basic XDR ApiKey structure
 * @param key api key itself
 * @param keyId api key identifier
 */
export declare function basicXdrApiKey(key: string, keyId: string): ApiKey;
/**
 * HTTP headers when using advanced XDR API KEYs
 */
export declare type XdrAdvApiHeaders = XdrBasicApiHeaders & {
    'x-xdr-timestamp': string;
    'x-xdr-nonce': string;
};
/**
 * Creates an advanced XDR ApiKey structure
 * @param key api key itself
 * @param keyId api key identifier
 */
export declare function advXdrApiKey(key: string, keyId: string): ApiKey;
