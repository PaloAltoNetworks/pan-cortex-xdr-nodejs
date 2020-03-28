"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const http2 = require("http2");
const commonlogger_1 = require("./commonlogger");
const { HTTP2_METHOD_GET, HTTP2_METHOD_DELETE, HTTP2_METHOD_POST, HTTP2_METHOD_PUT, HTTP2_HEADER_PATH, HTTP2_HEADER_METHOD, HTTP2_HEADER_STATUS, HTTP2_HEADER_AUTHORIZATION, HTTP2_HEADER_CONTENT_TYPE, HTTP2_HEADER_CONTENT_LENGTH } = http2.constants;
let seqno = Math.floor(Math.random() * 10000);
function close() {
    return new Promise(res => {
        if (this.h2session)
            this.h2session.close(res);
        else
            res();
    });
}
async function xdrOp(session, op) {
    const headers = {
        [HTTP2_HEADER_METHOD]: op.method,
        [HTTP2_HEADER_PATH]: op.path,
        ...session.apiKey.headers()
    };
    let writeBuffer;
    if (op.body !== undefined) {
        writeBuffer = Buffer.from(JSON.stringify(op.body.data));
        headers[HTTP2_HEADER_CONTENT_TYPE] = op.body.contentType || 'application/json';
        headers[HTTP2_HEADER_CONTENT_LENGTH] = writeBuffer.length;
    }
    commonlogger_1.commonLogger(commonlogger_1.logLevel.DEBUG, `[${++seqno}] http2 request operation. Method ${op.method}, Path: ${op.path}`);
    Object.entries(headers).map(x => {
        if (x[0] == HTTP2_HEADER_AUTHORIZATION)
            return [x[0], x[1].slice(0, 12) + "..." + x[1].slice(-4)];
        else
            return x;
    }).forEach(x => {
        commonlogger_1.commonLogger(commonlogger_1.logLevel.DEBUG, `[${seqno}] http2 request header '${x[0]}: ${x[1]}'`);
    });
    await session.refreshSession();
    const stream = session.h2session.request(headers, op.opts);
    /*
    stream.on('ready', (...e) => console.log("READY", e))
    stream.on('aborted', (...e) => console.log("ABORTED", e))
    stream.on('frameError', (...e) => console.log("FRAMEERROR", e))
    stream.on('timeout', (...e) => console.log("TIMEOUT", e))
    */
    let status;
    let responseContentType;
    stream.on('response', headers => {
        commonlogger_1.commonLogger(commonlogger_1.logLevel.DEBUG, `[${seqno}] Response headers: ${JSON.stringify(headers)}`);
        status = Number.parseFloat(headers[HTTP2_HEADER_STATUS]);
        responseContentType = headers[HTTP2_HEADER_CONTENT_TYPE];
    });
    const writePromise = (op.body === undefined) ? Promise.resolve() : new Promise((res, rej) => {
        try {
            stream.end(writeBuffer, () => {
                commonlogger_1.commonLogger(commonlogger_1.logLevel.DEBUG, `[${seqno}] http2 payload write: ${writeBuffer.toString()}`);
                res();
            });
        }
        catch (e) {
            rej(e);
        }
    });
    const readPromise = new Promise((res, rej) => {
        let data = '';
        stream.on('data', chunk => data += chunk);
        stream.on('end', () => process.nextTick(() => {
            if (data.length == 0) {
                commonlogger_1.commonLogger(commonlogger_1.logLevel.DEBUG, `[${seqno}] http2 read: null`);
                return res();
            }
            commonlogger_1.commonLogger(commonlogger_1.logLevel.DEBUG, `[${seqno}] http2 read: ${data.length < 200 && data || data.slice(0, 198) + " ..."}`);
            if (responseContentType && typeof responseContentType == 'string' && responseContentType.split(';').includes('application/json')) {
                return res(JSON.parse(data));
            }
            return res(data);
        }));
        stream.on('close', () => { });
        stream.on('error', e => {
            rej(e);
        });
    });
    return new Promise((res, rej) => Promise.all([readPromise, writePromise]).then(([x]) => {
        if (isNaN(status) || status >= 400) {
            commonlogger_1.commonLogger(commonlogger_1.logLevel.INFO, `Non-2xx/3xx Status Code. status: ${status}, data: ${JSON.stringify(x)}`);
            rej(op.errBuilder(x, status));
        }
        else {
            res({ data: x, status: status });
        }
    }, rej));
}
function get(path, eBldr, opts) {
    return xdrOp(this, {
        method: HTTP2_METHOD_GET,
        path,
        errBuilder: eBldr,
        opts: { ...opts, endStream: true }
    });
}
function del(path, eBldr, opts) {
    return xdrOp(this, {
        method: HTTP2_METHOD_DELETE,
        path,
        errBuilder: eBldr,
        opts: { ...opts, endStream: true }
    });
}
function post(path, eBldr, data, opts) {
    return xdrOp(this, {
        method: HTTP2_METHOD_POST,
        path,
        errBuilder: eBldr,
        body: {
            data
        },
        opts
    });
}
function put(path, eBldr, data, opts) {
    return xdrOp(this, {
        method: HTTP2_METHOD_PUT,
        path,
        errBuilder: eBldr,
        body: {
            data
        },
        opts
    });
}
function refreshSession(ops) {
    return function () {
        return new Promise((res, rej) => {
            if (this.h2session && !this.h2session.closed && !this.h2session.destroyed)
                return res();
            const h2session = http2.connect(`https://api-${ops.xdrBaseFqdn}:443`, ops.sessionOptions);
            h2session.on('connect', (sess) => {
                if (ops.apiTimeout)
                    h2session.setTimeout(ops.apiTimeout, () => {
                        commonlogger_1.commonLogger(commonlogger_1.logLevel.INFO, `HTTP2 session destroyed because of timeout`);
                        h2session.destroy();
                    });
                commonlogger_1.commonLogger(commonlogger_1.logLevel.INFO, `Created new HTTP2 session to ${ops.xdrBaseFqdn}`);
                this.h2session = sess;
                return res();
            });
            h2session.on('error', rej);
        });
    };
}
function createXdrSession(ops) {
    return {
        apiKey: ops.xdrApiKey,
        h2session: undefined,
        refreshSession: refreshSession(ops),
        close,
        get, del, post, put
    };
}
exports.createXdrSession = createXdrSession;
