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
import { CreateDistribution, createDistribution } from './distributions_create'
import { DistributionStatus, distributionStatus } from './distributions_status'
import { DistributionUrl, distributionUrl } from './distributions_url'

const distributionsPath = '/public_api/v1/distributions'
export const getDistributionVersionPath = `${distributionsPath}/get_versions`
export const createDistributionPath = `${distributionsPath}/create`
export const getDistributionStatusPath = `${distributionsPath}/get_status`
export const getDistributionUrlPath = `${distributionsPath}/get_dist_url`

export type DistributionsApi = {
    /**
     * xdr session object
     */
    session: XdrSession,
    /**
     * Create an installation package. This is an async call that returns the
     * distribution ID, it does not mean that the creation succeeded. To confirm
     * the package has been created, check the status of the distribution by
     * running the Get Distribution Status API. 
     */
    create: CreateDistribution
    /**
     * Check the status of the installation package.
     */
    status: DistributionStatus
    /**
     * Get the distribution URL for downloading the installation package.
     */
    url: DistributionUrl
}

export function createDistributionsApi(sess: XdrSession): DistributionsApi {
    return {
        session: sess,
        create: createDistribution,
        status: distributionStatus,
        url: distributionUrl
    }
}

export type DistributionsApiErr = GeneralXdrError

export function distributionsApiErrBldr(data: any, statusCode: number): XdrError<DistributionsApiErr> {
    const parsed = parseXdrError<DistributionsApiErr>(data)
    if (typeof parsed == 'string') {
        return new XdrError('alerts', parsed, statusCode)
    } else {
        return new XdrError('alerts', parsed.err_msg, statusCode, parsed)
    }
}
