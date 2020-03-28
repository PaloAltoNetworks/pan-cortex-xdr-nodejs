import { XdrSession } from './http2client';
import { GeneralXdrError, XdrError } from './xdrerror';
import { AgentReport } from './audits_agents_reports';
import { ManagementLog } from './audits_management_log';
import { QuarantineStatus } from './audits_quarantine_status';
export declare const quarantineStatusPath: string;
export declare const mgmtLogsPath: string;
export declare const agentsReportsPath: string;
export declare type AuditsApi = {
    /**
     * xdr session object
     */
    session: XdrSession;
    /**
     * Get agent event reports.
     */
    auditAgentReport: AgentReport;
    /**
     * Get audit management logs.
     */
    managementLogs: ManagementLog;
    /**
     * Retrieve the quarantine status for a selected file.
     */
    quarantineStatus: QuarantineStatus;
};
export declare function createAuditsApi(sess: XdrSession): AuditsApi;
export declare type AuditApiErr = GeneralXdrError;
export declare function auditApiErrBldr(data: any, statusCode: number): XdrError<AuditApiErr>;
