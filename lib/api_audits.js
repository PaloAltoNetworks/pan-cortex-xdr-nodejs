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
const xdrerror_1 = require("./xdrerror");
const audits_agents_reports_1 = require("./audits_agents_reports");
const audits_management_log_1 = require("./audits_management_log");
const audits_quarantine_status_1 = require("./audits_quarantine_status");
const auditsPath = '/public_api/v1/audits';
exports.quarantineStatusPath = `${auditsPath}/quarantine/status`;
exports.mgmtLogsPath = `${auditsPath}/management_logs`;
exports.agentsReportsPath = `${auditsPath}/agents_reports`;
function createAuditsApi(sess) {
    return {
        session: sess,
        /**
         * Get agent event reports
         */
        auditAgentReport: audits_agents_reports_1.agentReport,
        /**
         * Get audit management logs
         */
        managementLogs: audits_management_log_1.managementLog,
        /**
         * Retrieve the quarantine status for a selected file.
         */
        quarantineStatus: audits_quarantine_status_1.quarantineStatus
    };
}
exports.createAuditsApi = createAuditsApi;
function auditApiErrBldr(data, statusCode) {
    const parsed = xdrerror_1.parseXdrError(data);
    if (typeof parsed == 'string') {
        return new xdrerror_1.XdrError('alerts', parsed, statusCode);
    }
    else {
        return new xdrerror_1.XdrError('alerts', parsed.err_msg, statusCode, parsed);
    }
}
exports.auditApiErrBldr = auditApiErrBldr;
