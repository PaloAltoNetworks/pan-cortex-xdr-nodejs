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

import { DistributionsApi, DistributionsApiErr, createDistributionPath, distributionsApiErrBldr } from "./api_distributions"
import { XdrError } from "./xdrerror"

/**
 * shape of an Standalone Package Type
 */
type PackageStandalone = {
    name: string,
    package_type: 'standalone',
    platform: 'windows' | 'linux' | 'macos' | 'android',
    agent_version?: string
}

/**
 * shape of an Upgrade Package Type
 */
type PackageUpgrade = {
    name: string,
    package_type: 'upgrade'
} & ({ windows_version: string } | { linux_version: string } | { macos_version: string })

type CreateDistributionPayload = {
    request_data: PackageStandalone | PackageUpgrade
}

/**
 * The model of a Create Distrbution method response
 */
export type CreateDistributionResponse = {
    reply: {
        distribution_id: string
    }
}

/**
 * Create an installation package. This is an async call that returns the
 * distribution ID, it does not mean that the creation succeeded. To confirm the
 * package has been created, check the status of the distribution by running the
 * Get Distribution Status API.
 */
export type CreateDistribution = (
    /**
     * package details
     */
    distributon: PackageStandalone | PackageUpgrade
) => Promise<CreateDistributionResponse>

/**
 * Create an installation package. This is an async call that returns the
 * distribution ID, it does not mean that the creation succeeded. To confirm the
 * package has been created, check the status of the distribution by running the
 * Get Distribution Status API.
 * @param distributon package details
 */
export async function createDistribution(this: DistributionsApi, distributon: PackageStandalone | PackageUpgrade): Promise<CreateDistributionResponse> {
    const payload: CreateDistributionPayload = {
        request_data: distributon
    }
    const { data, status } = await this.session.post<CreateDistributionPayload, CreateDistributionResponse, DistributionsApiErr>(createDistributionPath, distributionsApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('alerts', data, status)
    return data
}
