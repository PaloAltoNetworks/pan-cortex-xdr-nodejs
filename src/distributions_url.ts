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

import { DistributionsApi, DistributionsApiErr, getDistributionUrlPath, distributionsApiErrBldr } from "./api_distributions"
import { XdrError } from "./xdrerror"

type PackageType = 'sh' | 'rpm' | 'deb' | 'pkg' | 'x86' | 'x64'

type DistributionUrlPayload = {
    request_data: {
        distribution_id: string,
        package_type: PackageType
    }
}

/**
 * The model of a Distribution Url method response
 */
export type DistributionUrlResponse = {
    reply: {
        distribution_url: string
    }
}

/**
 * Get the distribution URL for downloading the installation package.
 */
export type DistributionUrl = (
    /**
     * string representing the installation package ID.
     */
    distributionId: string,
    /**
     * string representing the type of installation package
     */
    packageType: PackageType
) => Promise<DistributionUrlResponse>

/**
 * Get the distribution URL for downloading the installation package.
 * @param distributionId string representing the installation package ID.
 * @param packageType A string representing the type of installation package
 */
export async function distributionUrl(this: DistributionsApi, distributionId: string, packageType: PackageType): Promise<DistributionUrlResponse> {
    const payload: DistributionUrlPayload = {
        request_data: {
            distribution_id: distributionId,
            package_type: packageType
        }
    }
    const { data, status } = await this.session.post<DistributionUrlPayload, DistributionUrlResponse, DistributionsApiErr>(getDistributionUrlPath, distributionsApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('alerts', data, status)
    return data
}
