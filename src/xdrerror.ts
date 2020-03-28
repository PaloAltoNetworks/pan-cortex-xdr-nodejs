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

const alertTypes = ['alerts']

export type GeneralXdrError = {
    err_code: number,
    err_msg: string,
    err_extra: string,
}

export function parseXdrError<E extends GeneralXdrError>(msg?: string): E | string {
    if (msg) {
        try {
            const parsed = JSON.parse(msg)
            if (parsed.reply &&
                typeof parsed.reply.err_code == 'number' &&
                typeof parsed.reply.err_msg == 'string' &&
                typeof parsed.reply.err_extra == 'string') return (parsed.reply as E)
            return msg
        } catch (e) {
            return msg
        }
    }
    return '<empty response>'
}

export function isXdrError<E extends GeneralXdrError>(obj: any): obj is XdrError<E> {
    return obj && obj instanceof XdrError && typeof obj.api == 'string'
        && alertTypes.includes(obj.api)
}

export type XdrApis = 'alerts' | 'incidents' | 'endpoint'

export class XdrError<E extends GeneralXdrError> extends Error {
    constructor(api: XdrApis, msg: string, status_code: number, err?: E, ) {
        super(msg)
        this.api = api
        this.reply = err
        this.status_code = status_code
    }
    api: XdrApis
    reply?: E
    status_code: number
}