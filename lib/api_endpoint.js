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
const endpoint_get_1 = require("./endpoint_get");
const endpoint_isolate_1 = require("./endpoint_isolate");
const endpoint_unisolate_1 = require("./endpoint_unisolate");
const endpoint_getall_1 = require("./endpoint_getall");
const endpoint_scan_1 = require("./endpoint_scan");
const endpoint_cancel_scan_1 = require("./endpoint_cancel_scan");
const endpoint_delete_1 = require("./endpoint_delete");
const endpoint_policy_1 = require("./endpoint_policy");
const endpoint_file_retrieve_1 = require("./endpoint_file_retrieve");
const endpoint_file_quarantine_1 = require("./endpoint_file_quarantine");
const endpoint_file_restore_1 = require("./endpoint_file_restore");
const endpointPath = '/public_api/v1/endpoints';
exports.isolateEndpointPath = `${endpointPath}/isolate`;
exports.unisolateEndpointPath = `${endpointPath}/unisolate`;
exports.getEndpointsPath = `${endpointPath}/get_endpoint`;
exports.getAllEndpointsPath = `${endpointPath}/get_endpoints`;
exports.scanEndpointPath = `${endpointPath}/scan`;
exports.cancelScanEndpointPath = `${endpointPath}/abort_scan`;
exports.deleteEndpointPath = `${endpointPath}/delete`;
exports.policyEndpointPath = `${endpointPath}/get_policy`;
exports.fileRetrieveEndpointPath = `${endpointPath}/file_retrieval`;
exports.fileRestoreEndpointPath = `${endpointPath}/restore`;
exports.fileQuarantineEndpointPath = `${endpointPath}/quarantine`;
function createEndpointApi(sess) {
    return {
        session: sess,
        get: endpoint_get_1.getEndpoints,
        getAll: endpoint_getall_1.getAllEndpoints,
        isolate: endpoint_isolate_1.isolateEndpoint,
        unisolate: endpoint_unisolate_1.unisolateEndpoint,
        scan: endpoint_scan_1.scanEndpoint,
        cancelScan: endpoint_cancel_scan_1.cancelScanEndpoint,
        delete: endpoint_delete_1.deleteEndpoint,
        policy: endpoint_policy_1.policyEndpoint,
        retrieveFile: endpoint_file_retrieve_1.fileRetrieveEndpoint,
        quarantineFile: endpoint_file_quarantine_1.fileQuarantineEndpoint,
        restoreFile: endpoint_file_restore_1.fileRestoreEndpoint
    };
}
exports.createEndpointApi = createEndpointApi;
function endpointApiErrBldr(data, statusCode) {
    const parsed = xdrerror_1.parseXdrError(data);
    if (typeof parsed == 'string') {
        return new xdrerror_1.XdrError('endpoint', parsed, statusCode);
    }
    else {
        return new xdrerror_1.XdrError('endpoint', parsed.err_msg, statusCode, parsed);
    }
}
exports.endpointApiErrBldr = endpointApiErrBldr;
