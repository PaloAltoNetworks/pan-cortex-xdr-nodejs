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

import { AuditApiErr, AuditsApi, quarantineStatusPath, auditApiErrBldr } from "./api_audits"
import { XdrError } from "./xdrerror"

/**
 * shape of an Quarantine Item
 */
type QuarantineItem = {
    /**
     * String the represents the endpoint ID.
     */
    endpoint_id: string,
    /**
     * String that represents the file hash. Must be a valid SHA256
     */
    file_path: string,
    /**
     * String that represents the file path.
     */
    file_hash: string
}

type QuarantineStatusItem = QuarantineItem & { status: boolean }

type QuarantineStatusPayload = {
    request_data: {
        files: QuarantineItem[]
    }
}

/**
 * The model of a Quarantine Status method response
 */
export type QuarantineStatusResponse = {
    reply: Partial<QuarantineStatusItem>[]
}

/**
 * Retrieve the quarantine status for a selected file.
 */
export type QuarantineStatus = (
    /**
     * list of files
     */
    files: QuarantineItem[]
) => Promise<QuarantineStatusResponse>

/**
 * Retrieve the quarantine status for a selected file.
 * @param files list of files
 */
export async function quarantineStatus(this: AuditsApi, files: QuarantineItem[]): Promise<QuarantineStatusResponse> {
    const payload: QuarantineStatusPayload = {
        request_data: { files }
    }
    const { data, status } = await this.session.post<QuarantineStatusPayload, QuarantineStatusResponse, AuditApiErr>(quarantineStatusPath, auditApiErrBldr, payload)
    if (typeof data == 'string') throw new XdrError('alerts', data, status)
    return data
}
