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

import { XdrSession } from './http2client'
import { GeneralXdrError, parseXdrError, XdrError } from './xdrerror'
import { BlacklistFile, blacklistFile } from './hash_exception_blacklist'
import { WhitelistFile, whitelistFile } from './hash_exception_whitelist'

const hashExceptionsPath = '/public_api/v1/hash_exceptions'
export const blackListPath = `${hashExceptionsPath}/blacklist`
export const whiteListPath = `${hashExceptionsPath}/whitelist`

export type HashExceptionApi = {
    /**
     * xdr session object
     */
    session: XdrSession,
    /**
     * Blacklist requested files which have not already been blacklisted or whitelisted.
     */
    blacklistFile: BlacklistFile
    /**
     * Whitelist requested files which have not already been blacklisted or whitelisted.
     */
    whitelistFile: WhitelistFile
}

export function createHashExceptionApi(sess: XdrSession): HashExceptionApi {
    return {
        session: sess,
        blacklistFile: blacklistFile,
        whitelistFile: whitelistFile
    }
}

export type HashExceptionApiErr = GeneralXdrError

export function hashExceptionApiErrBldr(data: any, statusCode: number): XdrError<HashExceptionApiErr> {
    const parsed = parseXdrError<HashExceptionApiErr>(data)
    if (typeof parsed == 'string') {
        return new XdrError('alerts', parsed, statusCode)
    } else {
        return new XdrError('alerts', parsed.err_msg, statusCode, parsed)
    }
}
