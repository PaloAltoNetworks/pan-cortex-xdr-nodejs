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

import { IncidentApi, createIncidentApi } from "./api_incident"
import { createXdrSession, XdrSessionOps } from "./http2client"
import { AlertApi, createAlertApi } from "./api_alert"
import { basicXdrApiKey, advXdrApiKey } from "./apikey"
import { EndpointApi, createEndpointApi } from "./api_endpoint"
import { DeviceControlApi, createDeviceControlApi } from "./api_device_control"
import { HashExceptionApi, createHashExceptionApi } from "./api_hash_exceptions"
import { AuditsApi, createAuditsApi } from "./api_audits"
import { DistributionsApi, createDistributionsApi } from "./api_distributions"

const BASIC_API_KEY = process.env['PAN_BASIC_API_KEY']
const ADV_API_KEY = process.env['PAN_ADV_API_KEY']
const API_KEY_ID = process.env['PAN_API_KEY_ID']
const XDR_FQDN = process.env['PAN_XDR_FQDN']

/**
 * Severity levels
 */
export type Severity = 'informational' | 'low' | 'medium' | 'high' | 'unknown'

/**
 * Shape of a XDR API object
 */
export type XdrApi = {
    /**
     * Access to the Incidents API methods
     */
    incident: IncidentApi
    /**
     * Access to the Alerts API methods
     */
    alert: AlertApi
    /**
     * Access to the Endpoint API methods
     */
    endpoint: EndpointApi
    /**
     * Access to the Device Control API methods
     */
    deviceControl: DeviceControlApi
    /**
     * Access to the Hash Exception API methods
     */
    hashException: HashExceptionApi
    /**
     * Access to the Audit API methods
     */
    audit: AuditsApi
    /**
     * Access to the Distributions API methods
     */
    distributions: DistributionsApi
    /**
     * closes the underlying HTTP2 session
     */
    close: () => Promise<void>
}

/**
 * Configuration options for a XdrApi object
 */
export type XdrApiOps = Pick<XdrSessionOps, 'xdrBaseFqdn' | 'apiTimeout' | 'sessionOptions'> & {
    /**
     * the XDR API KEY value
     */
    apiKey: string,
    /**
     * the XDR API KEY identifier
     */
    apiKeyId: string,
    /**
     * if the XDR API KEY is either advanced or not
     */
    isAdvancedKey?: boolean
    /**
     * optional number of seconds before giving up due to timeout
     */
    apiTimeout?: number
}

/**
 * Creates an XdrApi object either from provided configuration object or from
 * environmental variables
 * @param ops configuration options
 */
export function createXdrApi(ops?: XdrApiOps): XdrApi {
    const isAdvanced = ops && ops.isAdvancedKey !== undefined && ops.isAdvancedKey || ADV_API_KEY && ADV_API_KEY != ''
    const key = ops && ops.apiKey || BASIC_API_KEY && BASIC_API_KEY != '' && BASIC_API_KEY || ADV_API_KEY
    const keyId = ops && ops.apiKeyId || API_KEY_ID
    const xdrBaseFqdn = ops && ops.xdrBaseFqdn || XDR_FQDN
    if (key && key != '' && keyId && keyId != '' && xdrBaseFqdn && xdrBaseFqdn != '') {
        const xdrApiKey = isAdvanced && advXdrApiKey(key, keyId) || basicXdrApiKey(key, keyId)
        const session = createXdrSession({
            xdrApiKey,
            xdrBaseFqdn,
            apiTimeout: ops && ops.apiTimeout,
            sessionOptions: ops && ops.sessionOptions
        })
        const incident = createIncidentApi(session)
        const alert = createAlertApi(session)
        const endpoint = createEndpointApi(session)
        const deviceControl = createDeviceControlApi(session)
        const hashException = createHashExceptionApi(session)
        const audit = createAuditsApi(session)
        const distributions = createDistributionsApi(session)
        return {
            alert, incident, endpoint, deviceControl, hashException,
            audit, distributions, close: session.close.bind(session)
        }
    }
    throw new Error('apiKey, apiKeyId and baseFqdn must be provided either explicitly or by setting PAN_[BASIC|ADV]_API_KEY, PAN_API_KEY_ID and PAN_XDR_FQDN env variables')
}
