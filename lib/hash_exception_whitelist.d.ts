import { HashExceptionApi } from "./api_hash_exceptions";
/**
 * The model of a Whitelist File Endpoint method response
 */
export declare type WhitelistFileResponse = {
    reply: boolean;
};
/**
 * Whitelist requested files which have not already been blacklisted or whitelisted.
 */
export declare type WhitelistFile = (
/**
 * String that represents a list of hashed files you want to blacklist. Hash
 * must be a valid SH256
 */
hashList: string[], 
/**
 * String that represents additional information regarding the action.
 */
comment?: string) => Promise<WhitelistFileResponse>;
/**
 * Whitelist requested files which have not already been blacklisted or whitelisted.
 * @param hashList String that represents a list of hashed files you want to
 * blacklist. Hash must be a valid SH256.
 * @param comment String that represents additional information regarding the action.
 */
export declare function whitelistFile(this: HashExceptionApi, hashList: string[], comment?: string): Promise<WhitelistFileResponse>;
