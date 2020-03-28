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

import * as http2 from 'http2'
import { commonLogger, logLevel } from './commonlogger'
import { ApiKey } from './apikey'
import { GeneralXdrError, XdrError } from './xdrerror'

const {
    HTTP2_METHOD_GET,
    HTTP2_METHOD_DELETE,
    HTTP2_METHOD_POST,
    HTTP2_METHOD_PUT,
    HTTP2_HEADER_PATH,
    HTTP2_HEADER_METHOD,
    HTTP2_HEADER_STATUS,
    HTTP2_HEADER_AUTHORIZATION,
    HTTP2_HEADER_CONTENT_TYPE,
    HTTP2_HEADER_CONTENT_LENGTH
} = http2.constants

let seqno = Math.floor(Math.random() * 10000)

/**
 * Options to configure a `Http2Fetch` object
 */
export type XdrSessionOps = {
    /**
     * Cortex API default FQDN to use in operations that do not provide an
     * explicit `Credentials` object
     */
    xdrBaseFqdn: string
    /**
     * If provided, then all operations will use this `Credential`'s JWT token
     */
    xdrApiKey: ApiKey
    /**
     * How many milliseconds to keep an inactive HTTP2 session to the Cortex API
     * GW (default = 60000)
     */
    apiTimeout?: number
    /**
     * Standard options for the http2 object
     */
    sessionOptions?: http2.ClientSessionOptions & http2.SecureClientSessionOptions
}

type ErrBldr<E extends GeneralXdrError> = (data: E | string, statusCode: number) => XdrError<E>

type XdrCallOp<T, E extends GeneralXdrError> = {
    method: string
    path: string
    errBuilder: ErrBldr<E>
    body?: {
        data: T,
        contentType?: string,
    }
    opts?: http2.ClientSessionRequestOptions,
}

export interface XdrSession {
    h2session: http2.ClientHttp2Session | undefined
    refreshSession: () => Promise<void>
    apiKey: ApiKey
    close: () => Promise<void>
    get<R, E extends GeneralXdrError>(path: string, eBldr: ErrBldr<E>, opts?: http2.ClientSessionRequestOptions): Promise<{ data: R | string, status: number }>
    del<R, E extends GeneralXdrError>(path: string, eBldr: ErrBldr<E>, opts?: http2.ClientSessionRequestOptions): Promise<{ data: R | string, status: number }>
    post<T, R, E extends GeneralXdrError>(path: string, eBldr: ErrBldr<E>, data: T, opts?: http2.ClientSessionRequestOptions): Promise<{ data: R | string, status: number }>
    put<T, R, E extends GeneralXdrError>(path: string, eBldr: ErrBldr<E>, data: T, opts?: http2.ClientSessionRequestOptions): Promise<{ data: R | string, status: number }>
}

function close(this: XdrSession): Promise<void> {
    return new Promise(res => {
        if (this.h2session) this.h2session.close(res)
        else res()
    })
}

async function xdrOp<T, R, E extends GeneralXdrError>(session: XdrSession, op: XdrCallOp<T, E>): Promise<{ data: R | string, status: number }> {
    const headers: http2.OutgoingHttpHeaders = {
        [HTTP2_HEADER_METHOD]: op.method,
        [HTTP2_HEADER_PATH]: op.path,
        ...session.apiKey.headers()
    }

    let writeBuffer: Buffer
    if (op.body !== undefined) {
        writeBuffer = Buffer.from(JSON.stringify(op.body.data))
        headers[HTTP2_HEADER_CONTENT_TYPE] = op.body.contentType || 'application/json'
        headers[HTTP2_HEADER_CONTENT_LENGTH] = writeBuffer.length
    }

    commonLogger(logLevel.DEBUG, `[${++seqno}] http2 request operation. Method ${op.method}, Path: ${op.path}`)
    Object.entries(headers).map(x => {
        if (x[0] == HTTP2_HEADER_AUTHORIZATION)
            return [x[0], (x[1] as string).slice(0, 12) + "..." + (x[1] as string).slice(-4)]
        else return x
    }).forEach(x => {
        commonLogger(logLevel.DEBUG, `[${seqno}] http2 request header '${x[0]}: ${x[1]}'`)
    })
    await session.refreshSession()
    const stream = session.h2session!.request(headers, op.opts)
    /*
    stream.on('ready', (...e) => console.log("READY", e))
    stream.on('aborted', (...e) => console.log("ABORTED", e))
    stream.on('frameError', (...e) => console.log("FRAMEERROR", e))
    stream.on('timeout', (...e) => console.log("TIMEOUT", e))
    */

    let status: number
    let responseContentType: string | string[] | undefined
    stream.on('response', headers => {
        commonLogger(logLevel.DEBUG, `[${seqno}] Response headers: ${JSON.stringify(headers)}`)
        status = Number.parseFloat(headers[HTTP2_HEADER_STATUS] as string)
        responseContentType = headers[HTTP2_HEADER_CONTENT_TYPE]
    })

    const writePromise = (op.body === undefined) ? Promise.resolve() : new Promise<void>((res, rej) => {
        try {
            stream.end(writeBuffer, () => {
                commonLogger(logLevel.DEBUG, `[${seqno}] http2 payload write: ${writeBuffer.toString()}`)
                res();
            })
        } catch (e) { rej(e) }
    })
    const readPromise = new Promise<R | string>((res, rej) => {
        let data = ''
        stream.on('data', chunk => data += chunk)
        stream.on('end', () => process.nextTick(() => {
            if (data.length == 0) {
                commonLogger(logLevel.DEBUG, `[${seqno}] http2 read: null`)
                return res()
            }
            commonLogger(logLevel.DEBUG, `[${seqno}] http2 read: ${data.length < 200 && data || data.slice(0, 198) + " ..."}`)
            if (responseContentType && typeof responseContentType == 'string' && responseContentType.split(';').includes('application/json')) {
                return res(JSON.parse(data) as R)
            }
            return res(data)
        }))
        stream.on('close', () => { })
        stream.on('error', e => {
            rej(e)
        })
    })

    return new Promise((res, rej) => Promise.all([readPromise, writePromise]).then(([x]) => {
        if (isNaN(status) || status >= 400) {
            commonLogger(logLevel.INFO, `Non-2xx/3xx Status Code. status: ${status}, data: ${JSON.stringify(x)}`)
            rej(op.errBuilder(x as string, status))
        } else {
            res({ data: x, status: status })
        }
    }, rej))
}

function get<R, E extends GeneralXdrError>(this: XdrSession, path: string, eBldr: ErrBldr<E>, opts?: http2.ClientSessionRequestOptions): Promise<{ data: R | string, status: number }> {
    return xdrOp(this, {
        method: HTTP2_METHOD_GET,
        path,
        errBuilder: eBldr,
        opts: { ...opts, endStream: true }
    })
}

function del<R, E extends GeneralXdrError>(this: XdrSession, path: string, eBldr: ErrBldr<E>, opts?: http2.ClientSessionRequestOptions): Promise<{ data: R | string, status: number }> {
    return xdrOp(this, {
        method: HTTP2_METHOD_DELETE,
        path,
        errBuilder: eBldr,
        opts: { ...opts, endStream: true }
    })
}

function post<T, R, E extends GeneralXdrError>(this: XdrSession, path: string, eBldr: ErrBldr<E>, data: T, opts?: http2.ClientSessionRequestOptions): Promise<{ data: R | string, status: number }> {
    return xdrOp(this, {
        method: HTTP2_METHOD_POST,
        path,
        errBuilder: eBldr,
        body: {
            data
        },
        opts
    })
}

function put<T, R, E extends GeneralXdrError>(this: XdrSession, path: string, eBldr: ErrBldr<E>, data: T, opts?: http2.ClientSessionRequestOptions): Promise<{ data: R | string, status: number }> {
    return xdrOp(this, {
        method: HTTP2_METHOD_PUT,
        path,
        errBuilder: eBldr,
        body: {
            data
        },
        opts
    })
}

function refreshSession<E extends GeneralXdrError>(ops: Pick<XdrSessionOps, 'xdrBaseFqdn' | 'apiTimeout' | 'sessionOptions'>): (this: XdrSession) => Promise<void> {
    return function (this: XdrSession) {
        return new Promise<void>((res, rej) => {
            if (this.h2session && !this.h2session.closed && !this.h2session.destroyed) return res()
            const h2session = http2.connect(`https://api-${ops.xdrBaseFqdn}:443`, ops.sessionOptions)
            h2session.on('connect', (sess) => {
                if (ops.apiTimeout)
                    h2session.setTimeout(ops.apiTimeout, () => {
                        commonLogger(logLevel.INFO, `HTTP2 session destroyed because of timeout`)
                        h2session.destroy()
                    })
                commonLogger(logLevel.INFO, `Created new HTTP2 session to ${ops.xdrBaseFqdn}`)
                this.h2session = sess
                return res()
            })
            h2session.on('error', rej)
        })
    }
}

export function createXdrSession<E extends GeneralXdrError>(ops: XdrSessionOps): XdrSession {
    return {
        apiKey: ops.xdrApiKey,
        h2session: undefined,
        refreshSession: refreshSession(ops),
        close,
        get, del, post, put
    }
}
