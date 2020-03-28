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

import { HashExceptionApi, HashExceptionApiErr, hashExceptionApiErrBldr, whiteListPath } from "./api_hash_exceptions"
import { XdrError } from "./xdrerror"

type WhitelistFilePayload = {
    request_data: {
        hash_list: string[],
        comment?: string
    }
}

/**
 * The model of a Whitelist File Endpoint method response
 */
export type WhitelistFileResponse = {
    reply: boolean
}

/**
 * Whitelist requested files which have not already been blacklisted or whitelisted.
 */
export type WhitelistFile = (
    /**
     * String that represents a list of hashed files you want to blacklist. Hash
     * must be a valid SH256
     */
    hashList: string[],
    /**
     * String that represents additional information regarding the action.
     */
    comment?: string
) => Promise<WhitelistFileResponse>

/**
 * Whitelist requested files which have not already been blacklisted or whitelisted.
 * @param hashList String that represents a list of hashed files you want to
 * blacklist. Hash must be a valid SH256. 
 * @param comment String that represents additional information regarding the action.
 */
export async function whitelistFile(this: HashExceptionApi, hashList: string[], comment?: string): Promise<WhitelistFileResponse> {
    const payload: WhitelistFilePayload = {
        request_data: {
            hash_list: hashList,
            comment
        }
    }
    const { data, status } = await this.session.post<WhitelistFilePayload, WhitelistFileResponse, HashExceptionApiErr>(
        whiteListPath, hashExceptionApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('endpoint', data, status)
    return data
}
