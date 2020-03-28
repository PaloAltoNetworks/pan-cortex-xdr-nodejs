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

import { DistributionsApi, DistributionsApiErr, getDistributionStatusPath, distributionsApiErrBldr } from "./api_distributions"
import { XdrError } from "./xdrerror"

type DistributionStatusPayload = {
    request_data: {
        distribution_id: string
    }
}

/**
 * The model of a Distribution Status method response
 */
export type DistributionStatusResponse = {
    reply: {
        status: string
    }
}

/**
 * Check the status of the installation package.
 */
export type DistributionStatus = (
    /**
     * String representing the installation package ID.
     */
    distributionId: string
) => Promise<DistributionStatusResponse>

/**
 * Check the status of the installation package.
 * @param distributionId String representing the installation package ID.
 */
export async function distributionStatus(this: DistributionsApi, distributionId: string): Promise<DistributionStatusResponse> {
    const payload: DistributionStatusPayload = {
        request_data: {
            distribution_id: distributionId
        }
    }
    const { data, status } = await this.session.post<DistributionStatusPayload, DistributionStatusResponse, DistributionsApiErr>(getDistributionStatusPath, distributionsApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('alerts', data, status)
    return data
}
