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
import { GetDeviceViolations, getDeviceViolations } from './device_control_get_violations'

const deviceControlPath = '/public_api/v1/device_control'
export const getViolationsPath = `${deviceControlPath}/get_violations`

export type DeviceControlApi = {
    /**
     * xdr session object
     */
    session: XdrSession,
    /**
     * Gets a list of device violations filtered by selected fields
     */
    getDeviceViolations: GetDeviceViolations
}

export function createDeviceControlApi(sess: XdrSession): DeviceControlApi {
    return {
        session: sess,
        getDeviceViolations: getDeviceViolations
    }
}

export type DeviceControlApiErr = GeneralXdrError

export function deviceControlApiErrBldr(data: any, statusCode: number): XdrError<DeviceControlApiErr> {
    const parsed = parseXdrError<DeviceControlApiErr>(data)
    if (typeof parsed == 'string') {
        return new XdrError('alerts', parsed, statusCode)
    } else {
        return new XdrError('alerts', parsed.err_msg, statusCode, parsed)
    }
}
