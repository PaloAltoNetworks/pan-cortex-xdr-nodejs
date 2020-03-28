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
import { insertParsedAlerts, InsertParsedAlerts } from './alert_insert_parsed'

const alertsPath = '/public_api/v1/alerts'
export const insertParsedPath = `${alertsPath}/insert_parsed_alerts`
export const insertCEFPath = `${alertsPath}/insert_cef_alerts/`

export type AlertApi = {
    /**
     * xdr session object
     */
    session: XdrSession,
    /**
     * Upload alerts from external alert sources in Cortex XDR format. Cortex
     * XDR displays alerts that are parsed successfully in related incidents and
     * views. You can send 600 alerts per minute. Each request can contain a
     * maximum of 60 alerts.
     */
    insParsed: InsertParsedAlerts
}

/**
 * Creates an Alert API object
 * @param sess xdr session object
 */
export function createAlertApi(sess: XdrSession): AlertApi {
    return {
        session: sess,
        insParsed: insertParsedAlerts
    }
}

/**
 * Shape of the error returned by the Alert API
 */
export type AlertApiErr = GeneralXdrError

/**
 * Parses a REST call response into an Alert API error
 * @param data REST response
 * @param statusCode HTTP2 response code
 */
export function alertApiErrBldr(data: any, statusCode: number): XdrError<AlertApiErr> {
    const parsed = parseXdrError<AlertApiErr>(data)
    if (typeof parsed == 'string') {
        return new XdrError('alerts', parsed, statusCode)
    } else {
        return new XdrError('alerts', parsed.err_msg, statusCode, parsed)
    }
}
