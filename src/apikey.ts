// Copyright 2015-2020 Palo Alto Networks, Inc
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//       http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { randomBytes, createHash } from 'crypto'
import { commonLogger, logLevel } from './commonlogger'

/**
 * Shape of a XDR API Key
 */
export type ApiKey = {
    /**
     * The API KEY itself
     */
    key: string,
    /**
     * The API Key Identifier
     */
    keyId: string,
    /**
     * Returns the HTTP2 XDR authorization headers for this ApiKey
     */
    headers: (preload?: { nonce: string, ts: number }) => XdrBasicApiHeaders | XdrAdvApiHeaders
}

/**
 * HTTP headers when using basic XDR API KEYs
 */
export type XdrBasicApiHeaders = {
    'x-xdr-auth-id': string,
    authorization: string
}

function headersBasic(this: ApiKey): XdrBasicApiHeaders | XdrAdvApiHeaders {
    return { 'x-xdr-auth-id': this.keyId, authorization: this.key }
}

/**
 * Creates a basic XDR ApiKey structure
 * @param key api key itself
 * @param keyId api key identifier
 */
export function basicXdrApiKey(key: string, keyId: string): ApiKey {
    commonLogger(logLevel.DEBUG, `Created basicXdrApiKey (id: ${keyId})`)
    return {
        key: key,
        keyId: keyId,
        headers: headersBasic
    }
}

/**
 * HTTP headers when using advanced XDR API KEYs
 */
export type XdrAdvApiHeaders = XdrBasicApiHeaders & {
    'x-xdr-timestamp': string
    'x-xdr-nonce': string
}

function headersAdvanced(this: ApiKey, preload?: { nonce: string, ts: number }): XdrAdvApiHeaders {
    const nonce = preload && preload.nonce || randomBytes(32).toString('hex')
    const timestamp = (preload && preload.ts || Date.now()).toString()
    const advApiKey = createHash('sha256').update(`${this.key}${nonce}${timestamp}`).digest().toString('hex')
    return {
        "x-xdr-auth-id": this.keyId,
        "x-xdr-nonce": nonce,
        "x-xdr-timestamp": timestamp,
        authorization: advApiKey
    }
}

/**
 * Creates an advanced XDR ApiKey structure
 * @param key api key itself
 * @param keyId api key identifier
 */
export function advXdrApiKey(key: string, keyId: string): ApiKey {
    commonLogger(logLevel.DEBUG, `Created advXdrApiKey (id: ${keyId})`)
    return {
        key: key,
        keyId: keyId,
        headers: headersAdvanced
    }
}

