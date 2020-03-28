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
import { AgentReport, agentReport } from './audits_agents_reports'
import { ManagementLog, managementLog } from './audits_management_log'
import { QuarantineStatus, quarantineStatus } from './audits_quarantine_status'

const auditsPath = '/public_api/v1/audits'
export const quarantineStatusPath = `${auditsPath}/quarantine/status`
export const mgmtLogsPath = `${auditsPath}/management_logs`
export const agentsReportsPath = `${auditsPath}/agents_reports`

export type AuditsApi = {
    /**
     * xdr session object
     */
    session: XdrSession,
    /**
     * Get agent event reports.
     */
    auditAgentReport: AgentReport,
    /**
     * Get audit management logs.
     */
    managementLogs: ManagementLog,
    /**
     * Retrieve the quarantine status for a selected file.
     */
    quarantineStatus: QuarantineStatus
}

export function createAuditsApi(sess: XdrSession): AuditsApi {
    return {
        session: sess,
        /**
         * Get agent event reports
         */
        auditAgentReport: agentReport,
        /**
         * Get audit management logs
         */
        managementLogs: managementLog,
        /**
         * Retrieve the quarantine status for a selected file.
         */
        quarantineStatus: quarantineStatus
    }
}

export type AuditApiErr = GeneralXdrError

export function auditApiErrBldr(data: any, statusCode: number): XdrError<AuditApiErr> {
    const parsed = parseXdrError<AuditApiErr>(data)
    if (typeof parsed == 'string') {
        return new XdrError('alerts', parsed, statusCode)
    } else {
        return new XdrError('alerts', parsed.err_msg, statusCode, parsed)
    }
}
