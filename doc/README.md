[@paloaltonetworks/pan-cortex-xdr](README.md)

# @paloaltonetworks/pan-cortex-xdr

## Index

### Enumerations

* [logLevel](enums/loglevel.md)

### Classes

* [XdrError](classes/xdrerror.md)

### Interfaces

* [XdrSession](interfaces/xdrsession.md)

### Type aliases

* [AgentReport](README.md#agentreport)
* [AgentReportResponse](README.md#agentreportresponse)
* [Alert](README.md#alert)
* [AlertApi](README.md#alertapi)
* [AlertApiErr](README.md#alertapierr)
* [ApiKey](README.md#apikey)
* [Artifact](README.md#artifact)
* [AuditApiErr](README.md#auditapierr)
* [AuditFilter](README.md#auditfilter)
* [AuditItem](README.md#audititem)
* [AuditSort](README.md#auditsort)
* [AuditsApi](README.md#auditsapi)
* [BlacklistFile](README.md#blacklistfile)
* [BlacklistFilePayload](README.md#blacklistfilepayload)
* [BlacklistFileResponse](README.md#blacklistfileresponse)
* [CancelScanEndpoint](README.md#cancelscanendpoint)
* [CancelScanEndpointPayload](README.md#cancelscanendpointpayload)
* [CancelScanEndpointResponse](README.md#cancelscanendpointresponse)
* [CreateDistribution](README.md#createdistribution)
* [CreateDistributionPayload](README.md#createdistributionpayload)
* [CreateDistributionResponse](README.md#createdistributionresponse)
* [DeleteEndpoint](README.md#deleteendpoint)
* [DeleteEndpointPayload](README.md#deleteendpointpayload)
* [DeleteEndpointResponse](README.md#deleteendpointresponse)
* [DeviceControlApi](README.md#devicecontrolapi)
* [DeviceControlApiErr](README.md#devicecontrolapierr)
* [DistributionStatus](README.md#distributionstatus)
* [DistributionStatusPayload](README.md#distributionstatuspayload)
* [DistributionStatusResponse](README.md#distributionstatusresponse)
* [DistributionUrl](README.md#distributionurl)
* [DistributionUrlPayload](README.md#distributionurlpayload)
* [DistributionUrlResponse](README.md#distributionurlresponse)
* [DistributionsApi](README.md#distributionsapi)
* [DistributionsApiErr](README.md#distributionsapierr)
* [Endpoint](README.md#endpoint)
* [EndpointApi](README.md#endpointapi)
* [EndpointApiErr](README.md#endpointapierr)
* [EndpointFilter](README.md#endpointfilter)
* [EndpointInfo](README.md#endpointinfo)
* [EndpointSortCriteria](README.md#endpointsortcriteria)
* [ErrBldr](README.md#errbldr)
* [FileArtifact](README.md#fileartifact)
* [FileQuarantineEndpoint](README.md#filequarantineendpoint)
* [FileQuarantineEndpointPayload](README.md#filequarantineendpointpayload)
* [FileQuarantineEndpointResponse](README.md#filequarantineendpointresponse)
* [FileRestoreEndpoint](README.md#filerestoreendpoint)
* [FileRestoreEndpointPayload](README.md#filerestoreendpointpayload)
* [FileRestoreEndpointResponse](README.md#filerestoreendpointresponse)
* [FileRetrieveEndpoint](README.md#fileretrieveendpoint)
* [FileRetrieveEndpointPayload](README.md#fileretrieveendpointpayload)
* [FileRetrieveEndpointResponse](README.md#fileretrieveendpointresponse)
* [GeneralXdrError](README.md#generalxdrerror)
* [GetAllEndpointPayload](README.md#getallendpointpayload)
* [GetAllEndpointResponse](README.md#getallendpointresponse)
* [GetAllEndpoints](README.md#getallendpoints)
* [GetDeviceViolations](README.md#getdeviceviolations)
* [GetDeviceViolationsPayload](README.md#getdeviceviolationspayload)
* [GetDeviceViolationsResponse](README.md#getdeviceviolationsresponse)
* [GetEndpointPayload](README.md#getendpointpayload)
* [GetEndpointResponse](README.md#getendpointresponse)
* [GetEndpoints](README.md#getendpoints)
* [GetIncidentDetailsPayload](README.md#getincidentdetailspayload)
* [GetIncidentPayload](README.md#getincidentpayload)
* [GetIncidentsDetailsMethod](README.md#getincidentsdetailsmethod)
* [GetIncidentsDetailsResponse](README.md#getincidentsdetailsresponse)
* [GetIncidentsMethod](README.md#getincidentsmethod)
* [GetIncidentsResponse](README.md#getincidentsresponse)
* [GetManagementLogsPayload](README.md#getmanagementlogspayload)
* [HashExceptionApi](README.md#hashexceptionapi)
* [HashExceptionApiErr](README.md#hashexceptionapierr)
* [Incident](README.md#incident)
* [IncidentApi](README.md#incidentapi)
* [IncidentApiErr](README.md#incidentapierr)
* [IncidentFiler](README.md#incidentfiler)
* [InsertParsedAlerts](README.md#insertparsedalerts)
* [InsertParsedAlertsResponse](README.md#insertparsedalertsresponse)
* [InsertParsedPayload](README.md#insertparsedpayload)
* [IsolateEndpoint](README.md#isolateendpoint)
* [IsolateEndpointPayloadMultiple](README.md#isolateendpointpayloadmultiple)
* [IsolateEndpointPayloadSingle](README.md#isolateendpointpayloadsingle)
* [IsolateEndpointResponse](README.md#isolateendpointresponse)
* [ManagementFilter](README.md#managementfilter)
* [ManagementLog](README.md#managementlog)
* [ManagementLogItem](README.md#managementlogitem)
* [ManagementLogResponse](README.md#managementlogresponse)
* [ManagementSort](README.md#managementsort)
* [NetworkArtifact](README.md#networkartifact)
* [PackageStandalone](README.md#packagestandalone)
* [PackageType](README.md#packagetype)
* [PackageUpgrade](README.md#packageupgrade)
* [PolicyEndpoint](README.md#policyendpoint)
* [PolicyEndpointPayload](README.md#policyendpointpayload)
* [PolicyEndpointResponse](README.md#policyendpointresponse)
* [QuarantineItem](README.md#quarantineitem)
* [QuarantineStatus](README.md#quarantinestatus)
* [QuarantineStatusItem](README.md#quarantinestatusitem)
* [QuarantineStatusPayload](README.md#quarantinestatuspayload)
* [QuarantineStatusResponse](README.md#quarantinestatusresponse)
* [ResponseSection](README.md#responsesection)
* [RetrieveFiles](README.md#retrievefiles)
* [ScanEndpoint](README.md#scanendpoint)
* [ScanEndpointPayload](README.md#scanendpointpayload)
* [ScanEndpointResponse](README.md#scanendpointresponse)
* [Severity](README.md#severity)
* [SortCriteria](README.md#sortcriteria)
* [UnisolateEndpoint](README.md#unisolateendpoint)
* [UnisolateEndpointPayloadMultiple](README.md#unisolateendpointpayloadmultiple)
* [UnisolateEndpointPayloadSingle](README.md#unisolateendpointpayloadsingle)
* [UnisolateEndpointResponse](README.md#unisolateendpointresponse)
* [UpdateData](README.md#updatedata)
* [UpdateIncidentMethod](README.md#updateincidentmethod)
* [UpdateIncidentPayload](README.md#updateincidentpayload)
* [UpdateIncidentResponse](README.md#updateincidentresponse)
* [ViolationFilter](README.md#violationfilter)
* [ViolationSort](README.md#violationsort)
* [WhitelistFile](README.md#whitelistfile)
* [WhitelistFilePayload](README.md#whitelistfilepayload)
* [WhitelistFileResponse](README.md#whitelistfileresponse)
* [XdrAdvApiHeaders](README.md#xdradvapiheaders)
* [XdrAlert](README.md#xdralert)
* [XdrApi](README.md#xdrapi)
* [XdrApiOps](README.md#xdrapiops)
* [XdrApis](README.md#xdrapis)
* [XdrBasicApiHeaders](README.md#xdrbasicapiheaders)
* [XdrCallOp](README.md#xdrcallop)
* [XdrSessionOps](README.md#xdrsessionops)
* [XdrViolation](README.md#xdrviolation)

### Variables

* [ADV_API_KEY](README.md#const-adv_api_key)
* [API_KEY_ID](README.md#const-api_key_id)
* [BASIC_API_KEY](README.md#const-basic_api_key)
* [HTTP2_HEADER_AUTHORIZATION](README.md#http2_header_authorization)
* [HTTP2_HEADER_CONTENT_LENGTH](README.md#http2_header_content_length)
* [HTTP2_HEADER_CONTENT_TYPE](README.md#http2_header_content_type)
* [HTTP2_HEADER_METHOD](README.md#http2_header_method)
* [HTTP2_HEADER_PATH](README.md#http2_header_path)
* [HTTP2_HEADER_STATUS](README.md#http2_header_status)
* [HTTP2_METHOD_DELETE](README.md#http2_method_delete)
* [HTTP2_METHOD_GET](README.md#http2_method_get)
* [HTTP2_METHOD_POST](README.md#http2_method_post)
* [HTTP2_METHOD_PUT](README.md#http2_method_put)
* [XDR_FQDN](README.md#const-xdr_fqdn)
* [agentsReportsPath](README.md#const-agentsreportspath)
* [alertTypes](README.md#const-alerttypes)
* [alertsPath](README.md#const-alertspath)
* [auditsPath](README.md#const-auditspath)
* [blackListPath](README.md#const-blacklistpath)
* [cancelScanEndpointPath](README.md#const-cancelscanendpointpath)
* [createDistributionPath](README.md#const-createdistributionpath)
* [currentLogLevel](README.md#let-currentloglevel)
* [deleteEndpointPath](README.md#const-deleteendpointpath)
* [deviceControlPath](README.md#const-devicecontrolpath)
* [distributionsPath](README.md#const-distributionspath)
* [endpointPath](README.md#const-endpointpath)
* [envLevel](README.md#const-envlevel)
* [fileQuarantineEndpointPath](README.md#const-filequarantineendpointpath)
* [fileRestoreEndpointPath](README.md#const-filerestoreendpointpath)
* [fileRetrieveEndpointPath](README.md#const-fileretrieveendpointpath)
* [getAllEndpointsPath](README.md#const-getallendpointspath)
* [getDistributionStatusPath](README.md#const-getdistributionstatuspath)
* [getDistributionUrlPath](README.md#const-getdistributionurlpath)
* [getDistributionVersionPath](README.md#const-getdistributionversionpath)
* [getEndpointsPath](README.md#const-getendpointspath)
* [getIncidentDetailsPath](README.md#const-getincidentdetailspath)
* [getIncidentPath](README.md#const-getincidentpath)
* [getViolationsPath](README.md#const-getviolationspath)
* [hashExceptionsPath](README.md#const-hashexceptionspath)
* [incidentPath](README.md#const-incidentpath)
* [insertCEFPath](README.md#const-insertcefpath)
* [insertParsedPath](README.md#const-insertparsedpath)
* [isolateEndpointPath](README.md#const-isolateendpointpath)
* [logFunc](README.md#const-logfunc)
* [mgmtLogsPath](README.md#const-mgmtlogspath)
* [policyEndpointPath](README.md#const-policyendpointpath)
* [quarantineStatusPath](README.md#const-quarantinestatuspath)
* [scanEndpointPath](README.md#const-scanendpointpath)
* [seqno](README.md#let-seqno)
* [unisolateEndpointPath](README.md#const-unisolateendpointpath)
* [updateIncidentPath](README.md#const-updateincidentpath)
* [whiteListPath](README.md#const-whitelistpath)

### Functions

* [advXdrApiKey](README.md#advxdrapikey)
* [agentReport](README.md#agentreport)
* [alertApiErrBldr](README.md#alertapierrbldr)
* [auditApiErrBldr](README.md#auditapierrbldr)
* [basicXdrApiKey](README.md#basicxdrapikey)
* [blacklistFile](README.md#blacklistfile)
* [cancelScanEndpoint](README.md#cancelscanendpoint)
* [close](README.md#close)
* [commonLogger](README.md#commonlogger)
* [createAlertApi](README.md#createalertapi)
* [createAuditsApi](README.md#createauditsapi)
* [createDeviceControlApi](README.md#createdevicecontrolapi)
* [createDistribution](README.md#createdistribution)
* [createDistributionsApi](README.md#createdistributionsapi)
* [createEndpointApi](README.md#createendpointapi)
* [createHashExceptionApi](README.md#createhashexceptionapi)
* [createIncidentApi](README.md#createincidentapi)
* [createXdrApi](README.md#createxdrapi)
* [createXdrSession](README.md#createxdrsession)
* [del](README.md#del)
* [deleteEndpoint](README.md#deleteendpoint)
* [deviceControlApiErrBldr](README.md#devicecontrolapierrbldr)
* [distributionStatus](README.md#distributionstatus)
* [distributionUrl](README.md#distributionurl)
* [distributionsApiErrBldr](README.md#distributionsapierrbldr)
* [endpointApiErrBldr](README.md#endpointapierrbldr)
* [fileQuarantineEndpoint](README.md#filequarantineendpoint)
* [fileRestoreEndpoint](README.md#filerestoreendpoint)
* [fileRetrieveEndpoint](README.md#fileretrieveendpoint)
* [get](README.md#get)
* [getAllEndpoints](README.md#getallendpoints)
* [getDeviceViolations](README.md#getdeviceviolations)
* [getEndpoints](README.md#getendpoints)
* [getIncidents](README.md#getincidents)
* [getIncidentsDetails](README.md#getincidentsdetails)
* [hashExceptionApiErrBldr](README.md#hashexceptionapierrbldr)
* [headersAdvanced](README.md#headersadvanced)
* [headersBasic](README.md#headersbasic)
* [incidentApiErrBldr](README.md#incidentapierrbldr)
* [insertParsedAlerts](README.md#insertparsedalerts)
* [isXdrError](README.md#isxdrerror)
* [isolateEndpoint](README.md#isolateendpoint)
* [managementLog](README.md#managementlog)
* [parseXdrError](README.md#parsexdrerror)
* [policyEndpoint](README.md#policyendpoint)
* [post](README.md#post)
* [put](README.md#put)
* [quarantineStatus](README.md#quarantinestatus)
* [refreshSession](README.md#refreshsession)
* [scanEndpoint](README.md#scanendpoint)
* [setLogLevel](README.md#setloglevel)
* [unisolateEndpoint](README.md#unisolateendpoint)
* [updateIncident](README.md#updateincident)
* [whitelistFile](README.md#whitelistfile)
* [xdrOp](README.md#xdrop)

## Type aliases

###  AgentReport

Ƭ **AgentReport**: *function*

Defined in src/audits_agents_reports.ts:76

Get agent event reports.

#### Type declaration:

▸ (`filters`: [AuditFilter](README.md#auditfilter)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [AuditSort](README.md#auditsort)): *Promise‹[AgentReportResponse](README.md#agentreportresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | [AuditFilter](README.md#auditfilter)[] |
`search_from?` | undefined &#124; number |
`search_to?` | undefined &#124; number |
`sort?` | [AuditSort](README.md#auditsort) |

___

###  AgentReportResponse

Ƭ **AgentReportResponse**: *object*

Defined in src/audits_agents_reports.ts:60

The model of a Agent Report method response

#### Type declaration:

* **reply**(): *object*

  * **data**: *Partial‹[AuditItem](README.md#audititem)›[]*

  * **result_count**: *number*

___

###  Alert

Ƭ **Alert**: *object*

Defined in src/incident_get_details.ts:49

#### Type declaration:

* **action**: *string*

* **action_external_hostname**: *string*

* **action_file_md5**: *string*

* **action_file_path**: *string*

* **action_file_sha256**: *string*

* **action_local_ip**: *string*

* **action_local_port**: *number*

* **action_pretty**: *string*

* **action_process_image_command_line**: *string*

* **action_process_image_name**: *string*

* **action_process_image_sha256**: *string*

* **action_process_signature_status**: *string*

* **action_process_signature_vendor**: *string*

* **action_registry_data**: *string*

* **action_registry_full_key**: *string*

* **action_remote_ip**: *string*

* **action_remote_port**: *number*

* **actor_process_command_line**: *string*

* **actor_process_image_name**: *string*

* **actor_process_signature_status**: *string*

* **actor_process_signature_vendor**: *string*

* **alert_id**: *string*

* **category**: *string*

* **causality_actor_causality_id**: *string*

* **causality_actor_process_command_line**: *string*

* **causality_actor_process_image_name**: *string*

* **causality_actor_process_signature_status**: *string*

* **causality_actor_process_signature_vendor**: *string*

* **description**: *string*

* **detection_timestamp**: *number*

* **endpoint_id**: *string*

* **event_type**: *string*

* **fw_app_id**: *string*

* **host_ip**: *string*

* **host_name**: *string*

* **is_whitelisted**: *string*

* **name**: *string*

* **severity**: *[Severity](README.md#severity)*

* **source**: *string*

* **starred**: *boolean*

* **user_name**: *string*

___

###  AlertApi

Ƭ **AlertApi**: *object*

Defined in src/api_alert.ts:22

#### Type declaration:

* **insParsed**: *[InsertParsedAlerts](README.md#insertparsedalerts)*

* **session**: *[XdrSession](interfaces/xdrsession.md)*

___

###  AlertApiErr

Ƭ **AlertApiErr**: *[GeneralXdrError](README.md#generalxdrerror)*

Defined in src/api_alert.ts:50

Shape of the error returned by the Alert API

___

###  ApiKey

Ƭ **ApiKey**: *object*

Defined in src/apikey.ts:20

Shape of a XDR API Key

#### Type declaration:

* **headers**(): *function*

  * (`preload?`: undefined | object): *[XdrBasicApiHeaders](README.md#xdrbasicapiheaders) | [XdrAdvApiHeaders](README.md#xdradvapiheaders)*

* **key**: *string*

* **keyId**: *string*

___

###  Artifact

Ƭ **Artifact**: *object*

Defined in src/incident_get_details.ts:26

#### Type declaration:

* **alert_count**: *number*

* **is_manual**: *boolean*

* **type**: *string*

___

###  AuditApiErr

Ƭ **AuditApiErr**: *[GeneralXdrError](README.md#generalxdrerror)*

Defined in src/api_audits.ts:62

___

###  AuditFilter

Ƭ **AuditFilter**: *object*

Defined in src/audits_agents_reports.ts:36

#### Type declaration:

* **field**: *"endpoint_id" | "endpoint_name" | "type" | "sub_type" | "result" | "timestamp" | "domain" | "xdr_version" | "category" | "timestamp"*

* **operator**: *"in" | "gte" | "lte"*

* **value**: *number | string[] | "status" | "audit" | "monitoring"*

___

###  AuditItem

Ƭ **AuditItem**: *object*

Defined in src/audits_agents_reports.ts:20

shape of an Audit Item

#### Type declaration:

* **CATEGORY**: *string*

* **DESCRIPTION**: *string*

* **DOMAIN**: *string*

* **ENDPOINTID**: *string*

* **ENDPOINTNAME**: *string*

* **REASON**? : *undefined | string*

* **RECEIVEDTIME**: *number*

* **RESULT**? : *undefined | string*

* **SEVERITY**: *string*

* **SUBTYPE**: *string*

* **TIMESTAMP**: *number*

* **TYPE**: *string*

* **XDRVERSION**: *string*

___

###  AuditSort

Ƭ **AuditSort**: *object*

Defined in src/audits_agents_reports.ts:43

#### Type declaration:

* **field**: *"type" | "category" | "trapsversion" | "timestamp" | "domain"*

* **keyword**: *"asc" | "desc"*

___

###  AuditsApi

Ƭ **AuditsApi**: *object*

Defined in src/api_audits.ts:25

#### Type declaration:

* **auditAgentReport**: *[AgentReport](README.md#agentreport)*

* **managementLogs**: *[ManagementLog](README.md#managementlog)*

* **quarantineStatus**: *[QuarantineStatus](README.md#quarantinestatus)*

* **session**: *[XdrSession](interfaces/xdrsession.md)*

___

###  BlacklistFile

Ƭ **BlacklistFile**: *function*

Defined in src/hash_exception_blacklist.ts:34

Blacklist requested files which have not already been blacklisted or whitelisted.

#### Type declaration:

▸ (`hashList`: string[], `comment?`: undefined | string): *Promise‹[BlacklistFileResponse](README.md#blacklistfileresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`hashList` | string[] |
`comment?` | undefined &#124; string |

___

###  BlacklistFilePayload

Ƭ **BlacklistFilePayload**: *object*

Defined in src/hash_exception_blacklist.ts:17

#### Type declaration:

* **request_data**(): *object*

  * **comment**? : *undefined | string*

  * **hash_list**: *string[]*

___

###  BlacklistFileResponse

Ƭ **BlacklistFileResponse**: *object*

Defined in src/hash_exception_blacklist.ts:27

The model of a Blacklist File Endpoint method response

#### Type declaration:

* **reply**: *boolean*

___

###  CancelScanEndpoint

Ƭ **CancelScanEndpoint**: *function*

Defined in src/endpoint_cancel_scan.ts:37

Cancel the scan of selected endpoints. A scan can only be aborted if the
selected endpoints are in Pending or in Progress status.

#### Type declaration:

▸ (`filters`: [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[CancelScanEndpointResponse](README.md#cancelscanendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | [EndpointFilter](README.md#endpointfilter)[] |

___

###  CancelScanEndpointPayload

Ƭ **CancelScanEndpointPayload**: *object*

Defined in src/endpoint_cancel_scan.ts:18

#### Type declaration:

* **request_data**(): *object*

  * **filters**: *[EndpointFilter](README.md#endpointfilter)[]*

___

###  CancelScanEndpointResponse

Ƭ **CancelScanEndpointResponse**: *object*

Defined in src/endpoint_cancel_scan.ts:27

The model of a Cancel Scan Endpoint method response

#### Type declaration:

* **reply**(): *object*

  * **action_id**: *string*

___

###  CreateDistribution

Ƭ **CreateDistribution**: *function*

Defined in src/distributions_create.ts:54

Create an installation package. This is an async call that returns the
distribution ID, it does not mean that the creation succeeded. To confirm the
package has been created, check the status of the distribution by running the
Get Distribution Status API.

#### Type declaration:

▸ (`distributon`: [PackageStandalone](README.md#packagestandalone) | [PackageUpgrade](README.md#packageupgrade)): *Promise‹[CreateDistributionResponse](README.md#createdistributionresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`distributon` | [PackageStandalone](README.md#packagestandalone) &#124; [PackageUpgrade](README.md#packageupgrade) |

___

###  CreateDistributionPayload

Ƭ **CreateDistributionPayload**: *object*

Defined in src/distributions_create.ts:35

#### Type declaration:

* **request_data**: *[PackageStandalone](README.md#packagestandalone) | [PackageUpgrade](README.md#packageupgrade)*

___

###  CreateDistributionResponse

Ƭ **CreateDistributionResponse**: *object*

Defined in src/distributions_create.ts:42

The model of a Create Distrbution method response

#### Type declaration:

* **reply**(): *object*

  * **distribution_id**: *string*

___

###  DeleteEndpoint

Ƭ **DeleteEndpoint**: *function*

Defined in src/endpoint_delete.ts:35

Delete selected endpoints in the Cortex XDR app. You can delete up to 100
endpoints.

#### Type declaration:

▸ (`filters`: [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[DeleteEndpointResponse](README.md#deleteendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | [EndpointFilter](README.md#endpointfilter)[] |

___

###  DeleteEndpointPayload

Ƭ **DeleteEndpointPayload**: *object*

Defined in src/endpoint_delete.ts:18

#### Type declaration:

* **request_data**(): *object*

  * **filters**: *[EndpointFilter](README.md#endpointfilter)[]*

___

###  DeleteEndpointResponse

Ƭ **DeleteEndpointResponse**: *object*

Defined in src/endpoint_delete.ts:27

The model of a Delete Endpoint method response

#### Type declaration:

* **reply**: *boolean*

___

###  DeviceControlApi

Ƭ **DeviceControlApi**: *object*

Defined in src/api_device_control.ts:21

#### Type declaration:

* **getDeviceViolations**: *[GetDeviceViolations](README.md#getdeviceviolations)*

* **session**: *[XdrSession](interfaces/xdrsession.md)*

___

###  DeviceControlApiErr

Ƭ **DeviceControlApiErr**: *[GeneralXdrError](README.md#generalxdrerror)*

Defined in src/api_device_control.ts:39

___

###  DistributionStatus

Ƭ **DistributionStatus**: *function*

Defined in src/distributions_status.ts:35

Check the status of the installation package.

#### Type declaration:

▸ (`distributionId`: string): *Promise‹[DistributionStatusResponse](README.md#distributionstatusresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`distributionId` | string |

___

###  DistributionStatusPayload

Ƭ **DistributionStatusPayload**: *object*

Defined in src/distributions_status.ts:17

#### Type declaration:

* **request_data**(): *object*

  * **distribution_id**: *string*

___

###  DistributionStatusResponse

Ƭ **DistributionStatusResponse**: *object*

Defined in src/distributions_status.ts:26

The model of a Distribution Status method response

#### Type declaration:

* **reply**(): *object*

  * **status**: *string*

___

###  DistributionUrl

Ƭ **DistributionUrl**: *function*

Defined in src/distributions_url.ts:38

Get the distribution URL for downloading the installation package.

#### Type declaration:

▸ (`distributionId`: string, `packageType`: [PackageType](README.md#packagetype)): *Promise‹[DistributionUrlResponse](README.md#distributionurlresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`distributionId` | string |
`packageType` | [PackageType](README.md#packagetype) |

___

###  DistributionUrlPayload

Ƭ **DistributionUrlPayload**: *object*

Defined in src/distributions_url.ts:19

#### Type declaration:

* **request_data**(): *object*

  * **distribution_id**: *string*

  * **package_type**: *[PackageType](README.md#packagetype)*

___

###  DistributionUrlResponse

Ƭ **DistributionUrlResponse**: *object*

Defined in src/distributions_url.ts:29

The model of a Distribution Url method response

#### Type declaration:

* **reply**(): *object*

  * **distribution_url**: *string*

___

###  DistributionsApi

Ƭ **DistributionsApi**: *object*

Defined in src/api_distributions.ts:26

#### Type declaration:

* **create**: *[CreateDistribution](README.md#createdistribution)*

* **session**: *[XdrSession](interfaces/xdrsession.md)*

* **status**: *[DistributionStatus](README.md#distributionstatus)*

* **url**: *[DistributionUrl](README.md#distributionurl)*

___

###  DistributionsApiErr

Ƭ **DistributionsApiErr**: *[GeneralXdrError](README.md#generalxdrerror)*

Defined in src/api_distributions.ts:57

___

###  Endpoint

Ƭ **Endpoint**: *object*

Defined in src/endpoint_get.ts:48

#### Type declaration:

* **active_directory**: *string*

* **alias**: *string*

* **content_version**: *string*

* **domain**: *string*

* **endpoint_id**: *string*

* **endpoint_name**: *string*

* **endpoint_status**: *string*

* **endpoint_type**: *string*

* **endpoint_version**: *string*

* **first_seen**: *number*

* **group_name**: *string*

* **install_date**: *number*

* **installation_package**: *string*

* **ip**: *string*

* **is_isolated**: *boolean*

* **last_seen**: *number*

* **os_type**: *string*

* **users**: *string[]*

___

###  EndpointApi

Ƭ **EndpointApi**: *object*

Defined in src/api_endpoint.ts:41

#### Type declaration:

* **cancelScan**: *[CancelScanEndpoint](README.md#cancelscanendpoint)*

* **delete**: *[DeleteEndpoint](README.md#deleteendpoint)*

* **get**: *[GetEndpoints](README.md#getendpoints)*

* **getAll**: *[GetAllEndpoints](README.md#getallendpoints)*

* **isolate**: *[IsolateEndpoint](README.md#isolateendpoint)*

* **policy**: *[PolicyEndpoint](README.md#policyendpoint)*

* **quarantineFile**: *[FileQuarantineEndpoint](README.md#filequarantineendpoint)*

* **restoreFile**: *[FileRestoreEndpoint](README.md#filerestoreendpoint)*

* **retrieveFile**: *[FileRetrieveEndpoint](README.md#fileretrieveendpoint)*

* **scan**: *[ScanEndpoint](README.md#scanendpoint)*

* **session**: *[XdrSession](interfaces/xdrsession.md)*

* **unisolate**: *[UnisolateEndpoint](README.md#unisolateendpoint)*

___

###  EndpointApiErr

Ƭ **EndpointApiErr**: *[GeneralXdrError](README.md#generalxdrerror)*

Defined in src/api_endpoint.ts:113

___

###  EndpointFilter

Ƭ **EndpointFilter**: *object*

Defined in src/endpoint_get.ts:17

#### Type declaration:

* **field**: *"endpoint_id_list" | "dist_name" | "first_seen" | "last_seen" | "ip_list" | "group_name" | "platform" | "alias" | "isolate" | "hostname"*

* **operator**: *"in" | "gte" | "lte"*

* **value**: *number | string[] | "isolated" | "unisolated" | "windows" | "linux" | "macos" | "android"*

___

###  EndpointInfo

Ƭ **EndpointInfo**: *object*

Defined in src/endpoint_getall.ts:19

#### Type declaration:

* **agent_id**: *string*

* **agent_status**: *string*

* **agent_type**: *string*

* **host_name**: *string*

* **ip**: *string[]*

___

###  EndpointSortCriteria

Ƭ **EndpointSortCriteria**: *object*

Defined in src/endpoint_get.ts:34

#### Type declaration:

* **field**: *"first_seen" | "last_seen"*

* **keyword**: *"asc" | "desc"*

___

###  ErrBldr

Ƭ **ErrBldr**: *function*

Defined in src/http2client.ts:58

#### Type declaration:

▸ (`data`: E | string, `statusCode`: number): *[XdrError](classes/xdrerror.md)‹E›*

**Parameters:**

Name | Type |
------ | ------ |
`data` | E &#124; string |
`statusCode` | number |

___

###  FileArtifact

Ƭ **FileArtifact**: *[Artifact](README.md#artifact) & object*

Defined in src/incident_get_details.ts:32

___

###  FileQuarantineEndpoint

Ƭ **FileQuarantineEndpoint**: *function*

Defined in src/endpoint_file_quarantine.ts:39

Quarantine file on selected endpoints.

#### Type declaration:

▸ (`filters`: [EndpointFilter](README.md#endpointfilter)[], `filePath`: string, `fileHash`: string): *Promise‹[FileQuarantineEndpointResponse](README.md#filequarantineendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | [EndpointFilter](README.md#endpointfilter)[] |
`filePath` | string |
`fileHash` | string |

___

###  FileQuarantineEndpointPayload

Ƭ **FileQuarantineEndpointPayload**: *object*

Defined in src/endpoint_file_quarantine.ts:19

#### Type declaration:

* **request_data**(): *object*

  * **file_hash**: *string*

  * **file_path**: *string*

  * **filters**: *[EndpointFilter](README.md#endpointfilter)[]*

___

###  FileQuarantineEndpointResponse

Ƭ **FileQuarantineEndpointResponse**: *object*

Defined in src/endpoint_file_quarantine.ts:30

The model of a File Qurantine Endpoint method response

#### Type declaration:

* **reply**(): *object*

  * **action_id**: *string*

___

###  FileRestoreEndpoint

Ƭ **FileRestoreEndpoint**: *function*

Defined in src/endpoint_file_restore.ts:36

Restore a quarantined file on a requested endpoints.

#### Type declaration:

▸ (`fileHash`: string, `endpoint_id?`: undefined | string): *Promise‹[FileRestoreEndpointResponse](README.md#filerestoreendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`fileHash` | string |
`endpoint_id?` | undefined &#124; string |

___

###  FileRestoreEndpointPayload

Ƭ **FileRestoreEndpointPayload**: *object*

Defined in src/endpoint_file_restore.ts:19

#### Type declaration:

* **request_data**(): *object*

  * **endpoint_id**? : *undefined | string*

  * **file_hash**: *string*

___

###  FileRestoreEndpointResponse

Ƭ **FileRestoreEndpointResponse**: *object*

Defined in src/endpoint_file_restore.ts:29

The model of a File Restore Endpoint method response

#### Type declaration:

* **reply**: *boolean*

___

###  FileRetrieveEndpoint

Ƭ **FileRetrieveEndpoint**: *function*

Defined in src/endpoint_file_retrieve.ts:47

Retrieve files from selected endpoints. You can retrieve up to 20 files, from
no more than 100 endpoints.

#### Type declaration:

▸ (`filters`: [EndpointFilter](README.md#endpointfilter)[], `files`: Partial‹[RetrieveFiles](README.md#retrievefiles)›): *Promise‹[FileRetrieveEndpointResponse](README.md#fileretrieveendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | [EndpointFilter](README.md#endpointfilter)[] |
`files` | Partial‹[RetrieveFiles](README.md#retrievefiles)› |

___

###  FileRetrieveEndpointPayload

Ƭ **FileRetrieveEndpointPayload**: *object*

Defined in src/endpoint_file_retrieve.ts:27

#### Type declaration:

* **request_data**(): *object*

  * **files**: *Partial‹[RetrieveFiles](README.md#retrievefiles)›*

  * **filters**: *[EndpointFilter](README.md#endpointfilter)[]*

___

###  FileRetrieveEndpointResponse

Ƭ **FileRetrieveEndpointResponse**: *object*

Defined in src/endpoint_file_retrieve.ts:37

The model of a File Retrieve Endpoint method response

#### Type declaration:

* **reply**(): *object*

  * **action_id**: *string*

___

###  GeneralXdrError

Ƭ **GeneralXdrError**: *object*

Defined in src/xdrerror.ts:16

#### Type declaration:

* **err_code**: *number*

* **err_extra**: *string*

* **err_msg**: *string*

___

###  GetAllEndpointPayload

Ƭ **GetAllEndpointPayload**: *object*

Defined in src/endpoint_getall.ts:17

#### Type declaration:

___

###  GetAllEndpointResponse

Ƭ **GetAllEndpointResponse**: *object*

Defined in src/endpoint_getall.ts:30

The model of a Get All Endpoint method response

#### Type declaration:

* **reply**: *[EndpointInfo](README.md#endpointinfo)[]*

___

###  GetAllEndpoints

Ƭ **GetAllEndpoints**: *function*

Defined in src/endpoint_getall.ts:37

Gets a list of your endpoints

#### Type declaration:

▸ (): *Promise‹[GetAllEndpointResponse](README.md#getallendpointresponse)›*

___

###  GetDeviceViolations

Ƭ **GetDeviceViolations**: *function*

Defined in src/device_control_get_violations.ts:75

Gets a list of device violations filtered by selected fields

#### Type declaration:

▸ (`filters`: [ViolationFilter](README.md#violationfilter)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [ViolationSort](README.md#violationsort)): *Promise‹[GetDeviceViolationsResponse](README.md#getdeviceviolationsresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | [ViolationFilter](README.md#violationfilter)[] |
`search_from?` | undefined &#124; number |
`search_to?` | undefined &#124; number |
`sort?` | [ViolationSort](README.md#violationsort) |

___

###  GetDeviceViolationsPayload

Ƭ **GetDeviceViolationsPayload**: *object*

Defined in src/audits_agents_reports.ts:48

Defined in src/device_control_get_violations.ts:47

#### Type declaration:

* **request_data**(): *object*

  * **filters**: *[ViolationFilter](README.md#violationfilter)[]*

  * **search_from**? : *undefined | number*

  * **search_to**? : *undefined | number*

  * **sort**? : *[ViolationSort](README.md#violationsort)*

___

###  GetDeviceViolationsResponse

Ƭ **GetDeviceViolationsResponse**: *object*

Defined in src/device_control_get_violations.ts:59

The model of a Get Device Violations method response

#### Type declaration:

* **reply**(): *object*

  * **result_count**: *number*

  * **violations**: *Partial‹[XdrViolation](README.md#xdrviolation)›[]*

___

###  GetEndpointPayload

Ƭ **GetEndpointPayload**: *object*

Defined in src/endpoint_get.ts:39

#### Type declaration:

* **request_data**(): *object*

  * **filters**: *[EndpointFilter](README.md#endpointfilter)[]*

  * **search_from**? : *undefined | number*

  * **search_to**? : *undefined | number*

  * **sort**? : *[EndpointSortCriteria](README.md#endpointsortcriteria)*

___

###  GetEndpointResponse

Ƭ **GetEndpointResponse**: *object*

Defined in src/endpoint_get.ts:72

The model of a Get Endpoint method response

#### Type declaration:

* **reply**(): *object*

  * **endpoints**: *Partial‹[Endpoint](README.md#endpoint)›[]*

  * **result_count**: *number*

___

###  GetEndpoints

Ƭ **GetEndpoints**: *function*

Defined in src/endpoint_get.ts:89

Gets a list of filtered endpoints. Response is concatenated using AND
condition (OR is not supported). Maximum result set size is 100

#### Type declaration:

▸ (`filters`: [EndpointFilter](README.md#endpointfilter)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [EndpointSortCriteria](README.md#endpointsortcriteria)): *Promise‹[GetEndpointResponse](README.md#getendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | [EndpointFilter](README.md#endpointfilter)[] |
`search_from?` | undefined &#124; number |
`search_to?` | undefined &#124; number |
`sort?` | [EndpointSortCriteria](README.md#endpointsortcriteria) |

___

###  GetIncidentDetailsPayload

Ƭ **GetIncidentDetailsPayload**: *object*

Defined in src/incident_get_details.ts:19

#### Type declaration:

* **request_data**(): *object*

  * **alerts_limit**? : *undefined | number*

  * **incident_id**: *string*

___

###  GetIncidentPayload

Ƭ **GetIncidentPayload**: *object*

Defined in src/incident_get.ts:32

#### Type declaration:

* **request_data**(): *object*

  * **filters**: *[IncidentFiler](README.md#incidentfiler)[]*

  * **search_from**? : *undefined | number*

  * **search_to**? : *undefined | number*

  * **sort**? : *[SortCriteria](README.md#sortcriteria)*

___

###  GetIncidentsDetailsMethod

Ƭ **GetIncidentsDetailsMethod**: *function*

Defined in src/incident_get_details.ts:113

Get extra data fields of a specific incident including alerts and key artifacts

#### Type declaration:

▸ (`incidentId`: string, `alertsLimit`: number): *Promise‹[GetIncidentsDetailsResponse](README.md#getincidentsdetailsresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`incidentId` | string |
`alertsLimit` | number |

___

###  GetIncidentsDetailsResponse

Ƭ **GetIncidentsDetailsResponse**: *object*

Defined in src/incident_get_details.ts:101

The model of the GetIncidentsDetails response

#### Type declaration:

* **reply**(): *object*

  * **alerts**: *[ResponseSection](README.md#responsesection)‹[Alert](README.md#alert)›*

  * **file_artifacts**: *[ResponseSection](README.md#responsesection)‹[FileArtifact](README.md#fileartifact)›*

  * **incident**: *Partial‹[Incident](README.md#incident)›*

  * **network_artifacts**: *[ResponseSection](README.md#responsesection)‹[NetworkArtifact](README.md#networkartifact)›*

___

###  GetIncidentsMethod

Ƭ **GetIncidentsMethod**: *function*

Defined in src/incident_get.ts:91

Get a list of incidents filtered by a list of incident IDs, modification
time, or creation time.

#### Type declaration:

▸ (`filter`: [IncidentFiler](README.md#incidentfiler)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [SortCriteria](README.md#sortcriteria)): *Promise‹[GetIncidentsResponse](README.md#getincidentsresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filter` | [IncidentFiler](README.md#incidentfiler)[] |
`search_from?` | undefined &#124; number |
`search_to?` | undefined &#124; number |
`sort?` | [SortCriteria](README.md#sortcriteria) |

___

###  GetIncidentsResponse

Ƭ **GetIncidentsResponse**: *object*

Defined in src/incident_get.ts:70

The model of the GetIncidents response

#### Type declaration:

* **reply**(): *object*

  * **incidents**: *Partial‹[Incident](README.md#incident)›[]*

  * **result_count**: *number*

  * **total_count**: *number*

___

###  GetManagementLogsPayload

Ƭ **GetManagementLogsPayload**: *object*

Defined in src/audits_management_log.ts:49

#### Type declaration:

* **request_data**(): *object*

  * **filters**: *[ManagementFilter](README.md#managementfilter)[]*

  * **search_from**? : *undefined | number*

  * **search_to**? : *undefined | number*

  * **sort**? : *[ManagementSort](README.md#managementsort)*

___

###  HashExceptionApi

Ƭ **HashExceptionApi**: *object*

Defined in src/api_hash_exceptions.ts:23

#### Type declaration:

* **blacklistFile**: *[BlacklistFile](README.md#blacklistfile)*

* **session**: *[XdrSession](interfaces/xdrsession.md)*

* **whitelistFile**: *[WhitelistFile](README.md#whitelistfile)*

___

###  HashExceptionApiErr

Ƭ **HashExceptionApiErr**: *[GeneralXdrError](README.md#generalxdrerror)*

Defined in src/api_hash_exceptions.ts:46

___

###  Incident

Ƭ **Incident**: *object*

Defined in src/incident_get.ts:44

The generic shape of an incident

#### Type declaration:

* **alert_count**: *number*

* **assigned_user_mail**: *string*

* **assigned_user_pretty_name**: *string*

* **creation_time**: *number*

* **description**: *string*

* **detection_time**: *number*

* **high_severity_alert_count**: *number*

* **host_count**: *number*

* **hosts**: *string[]*

* **incident_id**: *string*

* **incident_sources**: *string[]*

* **low_severity_alert_count**: *number*

* **med_severity_alert_count**: *number*

* **modification_time**: *number*

* **severity**: *[Severity](README.md#severity)*

* **starred**: *boolean*

* **status**: *string*

* **user_count**: *number*

* **users**: *string[]*

* **xdr_url**: *string*

___

###  IncidentApi

Ƭ **IncidentApi**: *object*

Defined in src/api_incident.ts:28

XDR Incident API object

#### Type declaration:

* **get**: *[GetIncidentsMethod](README.md#getincidentsmethod)*

* **getExtraData**: *[GetIncidentsDetailsMethod](README.md#getincidentsdetailsmethod)*

* **session**: *[XdrSession](interfaces/xdrsession.md)*

* **updateIncident**: *[UpdateIncidentMethod](README.md#updateincidentmethod)*

___

###  IncidentApiErr

Ƭ **IncidentApiErr**: *[GeneralXdrError](README.md#generalxdrerror)*

Defined in src/api_incident.ts:62

___

###  IncidentFiler

Ƭ **IncidentFiler**: *object*

Defined in src/incident_get.ts:21

shape of a XDR Incident Filter

#### Type declaration:

* **field**: *"modification_time" | "creation_time" | "incident_id_list" | "starred" | "description" | "alert_sources"*

* **operator**: *"in"*

* **value**: *string | string[] | number | boolean*

___

###  InsertParsedAlerts

Ƭ **InsertParsedAlerts**: *function*

Defined in src/alert_insert_parsed.ts:81

Upload alerts from external alert sources in Cortex XDR format. Cortex XDR displays alerts that are parsed successfully in related incidents and views.
You can send 600 alerts per minute. Each request can contain a maximum of 60
alerts.

#### Type declaration:

▸ (`alerts`: [XdrAlert](README.md#xdralert)[]): *Promise‹[InsertParsedAlertsResponse](README.md#insertparsedalertsresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`alerts` | [XdrAlert](README.md#xdralert)[] |

___

###  InsertParsedAlertsResponse

Ƭ **InsertParsedAlertsResponse**: *object*

Defined in src/alert_insert_parsed.ts:72

The model of a Insert Parsed Alert method response

#### Type declaration:

* **reply**: *true*

___

###  InsertParsedPayload

Ƭ **InsertParsedPayload**: *object*

Defined in src/alert_insert_parsed.ts:63

#### Type declaration:

* **request_data**(): *object*

  * **alerts**: *[XdrAlert](README.md#xdralert)[]*

___

###  IsolateEndpoint

Ƭ **IsolateEndpoint**: *function*

Defined in src/endpoint_isolate.ts:42

Isolate one or more endpoints in a single request

#### Type declaration:

▸ (`criteria`: string | [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[IsolateEndpointResponse](README.md#isolateendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`criteria` | string &#124; [EndpointFilter](README.md#endpointfilter)[] |

___

###  IsolateEndpointPayloadMultiple

Ƭ **IsolateEndpointPayloadMultiple**: *object*

Defined in src/endpoint_isolate.ts:24

#### Type declaration:

* **request_data**(): *object*

  * **filters**: *[EndpointFilter](README.md#endpointfilter)[]*

___

###  IsolateEndpointPayloadSingle

Ƭ **IsolateEndpointPayloadSingle**: *object*

Defined in src/endpoint_isolate.ts:18

#### Type declaration:

* **request_data**(): *object*

  * **endpoint_id**: *string*

___

###  IsolateEndpointResponse

Ƭ **IsolateEndpointResponse**: *object*

Defined in src/endpoint_isolate.ts:33

The model of a Isolate Endpoint method response

#### Type declaration:

* **reply**(): *object*

  * **action_id**: *string*

___

###  ManagementFilter

Ƭ **ManagementFilter**: *object*

Defined in src/audits_management_log.ts:38

#### Type declaration:

* **field**: *"email" | "type" | "sub_type" | "result" | "timestamp"*

* **operator**: *"in" | "gte" | "lte"*

* **value**: *number | string[]*

___

###  ManagementLog

Ƭ **ManagementLog**: *function*

Defined in src/audits_management_log.ts:77

Get audit management logs.

#### Type declaration:

▸ (`filters`: [ManagementFilter](README.md#managementfilter)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [ManagementSort](README.md#managementsort)): *Promise‹[ManagementLogResponse](README.md#managementlogresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | [ManagementFilter](README.md#managementfilter)[] |
`search_from?` | undefined &#124; number |
`search_to?` | undefined &#124; number |
`sort?` | [ManagementSort](README.md#managementsort) |

___

###  ManagementLogItem

Ƭ **ManagementLogItem**: *object*

Defined in src/audits_management_log.ts:20

shape of an Management Log

#### Type declaration:

* **AUDIT_ASSET_JSON**: *string*

* **AUDIT_ASSET_NAMES**: *string*

* **AUDIT_CASE_ID**: *number*

* **AUDIT_DESCRIPTION**: *string*

* **AUDIT_ENTITY**: *string*

* **AUDIT_ENTITY_SUBTYPE**: *string*

* **AUDIT_HOSTNAME**: *string*

* **AUDIT_ID**: *number*

* **AUDIT_INSERT_TIME**: *number*

* **AUDIT_OWNER_EMAIL**: *string*

* **AUDIT_OWNER_NAME**: *string*

* **AUDIT_REASON**: *string*

* **AUDIT_RESULT**: *string*

* **AUDIT_SESSION_ID**: *number*

* **AUDIT_SEVERITY**: *string*

___

###  ManagementLogResponse

Ƭ **ManagementLogResponse**: *object*

Defined in src/audits_management_log.ts:61

The model of a Management Log method response

#### Type declaration:

* **reply**(): *object*

  * **data**: *Partial‹[ManagementLogItem](README.md#managementlogitem)›[]*

  * **result_count**: *number*

___

###  ManagementSort

Ƭ **ManagementSort**: *object*

Defined in src/audits_management_log.ts:44

#### Type declaration:

* **field**: *"timestamp" | "sub_type" | "result"*

* **keyword**: *"asc" | "desc"*

___

###  NetworkArtifact

Ƭ **NetworkArtifact**: *[Artifact](README.md#artifact) & object*

Defined in src/incident_get_details.ts:42

___

###  PackageStandalone

Ƭ **PackageStandalone**: *object*

Defined in src/distributions_create.ts:20

shape of an Standalone Package Type

#### Type declaration:

* **agent_version**? : *undefined | string*

* **name**: *string*

* **package_type**: *"standalone"*

* **platform**: *"windows" | "linux" | "macos" | "android"*

___

###  PackageType

Ƭ **PackageType**: *"sh" | "rpm" | "deb" | "pkg" | "x86" | "x64"*

Defined in src/distributions_url.ts:17

___

###  PackageUpgrade

Ƭ **PackageUpgrade**: *object & object | object | object*

Defined in src/distributions_create.ts:30

shape of an Upgrade Package Type

___

###  PolicyEndpoint

Ƭ **PolicyEndpoint**: *function*

Defined in src/endpoint_policy.ts:35

Get the policy name for a specific endpoint.

#### Type declaration:

▸ (`endpointId`: string): *Promise‹[PolicyEndpointResponse](README.md#policyendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`endpointId` | string |

___

###  PolicyEndpointPayload

Ƭ **PolicyEndpointPayload**: *object*

Defined in src/endpoint_policy.ts:17

#### Type declaration:

* **request_data**(): *object*

  * **endpoint_id**: *string*

___

###  PolicyEndpointResponse

Ƭ **PolicyEndpointResponse**: *object*

Defined in src/endpoint_policy.ts:26

The model of a Policy Endpoint method response

#### Type declaration:

* **reply**(): *object*

  * **policy_name**: *string*

___

###  QuarantineItem

Ƭ **QuarantineItem**: *object*

Defined in src/audits_quarantine_status.ts:20

shape of an Quarantine Item

#### Type declaration:

* **endpoint_id**: *string*

* **file_hash**: *string*

* **file_path**: *string*

___

###  QuarantineStatus

Ƭ **QuarantineStatus**: *function*

Defined in src/audits_quarantine_status.ts:53

Retrieve the quarantine status for a selected file.

#### Type declaration:

▸ (`files`: [QuarantineItem](README.md#quarantineitem)[]): *Promise‹[QuarantineStatusResponse](README.md#quarantinestatusresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`files` | [QuarantineItem](README.md#quarantineitem)[] |

___

###  QuarantineStatusItem

Ƭ **QuarantineStatusItem**: *[QuarantineItem](README.md#quarantineitem) & object*

Defined in src/audits_quarantine_status.ts:35

___

###  QuarantineStatusPayload

Ƭ **QuarantineStatusPayload**: *object*

Defined in src/audits_quarantine_status.ts:37

#### Type declaration:

* **request_data**(): *object*

  * **files**: *[QuarantineItem](README.md#quarantineitem)[]*

___

###  QuarantineStatusResponse

Ƭ **QuarantineStatusResponse**: *object*

Defined in src/audits_quarantine_status.ts:46

The model of a Quarantine Status method response

#### Type declaration:

* **reply**: *Partial‹[QuarantineStatusItem](README.md#quarantinestatusitem)›[]*

___

###  ResponseSection

Ƭ **ResponseSection**: *object*

Defined in src/incident_get_details.ts:93

#### Type declaration:

* **data**: *Partial‹T›[]*

* **total_count**: *number*

___

###  RetrieveFiles

Ƭ **RetrieveFiles**: *object*

Defined in src/endpoint_file_retrieve.ts:21

A dictionary containing the type of platform and files you want to retrieve.

#### Type declaration:

* **linux**: *string[]*

* **macos**: *string[]*

* **windows**: *string[]*

___

###  ScanEndpoint

Ƭ **ScanEndpoint**: *function*

Defined in src/endpoint_scan.ts:36

Run a scan on selected endpoints

#### Type declaration:

▸ (`filters`: [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[ScanEndpointResponse](README.md#scanendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | [EndpointFilter](README.md#endpointfilter)[] |

___

###  ScanEndpointPayload

Ƭ **ScanEndpointPayload**: *object*

Defined in src/endpoint_scan.ts:18

#### Type declaration:

* **request_data**(): *object*

  * **filters**: *[EndpointFilter](README.md#endpointfilter)[]*

___

###  ScanEndpointResponse

Ƭ **ScanEndpointResponse**: *object*

Defined in src/endpoint_scan.ts:27

The model of a Scan Endpoint method response

#### Type declaration:

* **reply**(): *object*

  * **action_id**: *string*

___

###  Severity

Ƭ **Severity**: *"informational" | "low" | "medium" | "high" | "unknown"*

Defined in src/xdrapi.ts:32

Severity levels

___

###  SortCriteria

Ƭ **SortCriteria**: *object*

Defined in src/incident_get.ts:27

#### Type declaration:

* **field**: *"modification_time" | "creation_time"*

* **keyword**: *"asc" | "desc"*

___

###  UnisolateEndpoint

Ƭ **UnisolateEndpoint**: *function*

Defined in src/endpoint_unisolate.ts:42

Unisolate one or more endpoints in a single request

#### Type declaration:

▸ (`criteria`: string | [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[UnisolateEndpointResponse](README.md#unisolateendpointresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`criteria` | string &#124; [EndpointFilter](README.md#endpointfilter)[] |

___

###  UnisolateEndpointPayloadMultiple

Ƭ **UnisolateEndpointPayloadMultiple**: *object*

Defined in src/endpoint_unisolate.ts:24

#### Type declaration:

* **request_data**(): *object*

  * **filters**: *[EndpointFilter](README.md#endpointfilter)[]*

___

###  UnisolateEndpointPayloadSingle

Ƭ **UnisolateEndpointPayloadSingle**: *object*

Defined in src/endpoint_unisolate.ts:18

#### Type declaration:

* **request_data**(): *object*

  * **endpoint_id**: *string*

___

###  UnisolateEndpointResponse

Ƭ **UnisolateEndpointResponse**: *object*

Defined in src/endpoint_unisolate.ts:33

The model of a Unisolate Endpoint method response

#### Type declaration:

* **reply**(): *object*

  * **action_id**: *string*

___

###  UpdateData

Ƭ **UpdateData**: *object*

Defined in src/incident_update.ts:20

Incident data

#### Type declaration:

* **assigned_user_mail**: *string*

* **assigned_user_pretty_name**: *string*

* **manual_severity**: *"high" | "medium" | "low"*

* **resolve_comment**: *string*

* **status**: *"NEW" | "UNDER_INVESTIGATION" | "RESOLVED_THREAT_HANDLED" | "RESOLVED_KNOWN_ISSUE" | "RESOLVED_DUPLICATE" | "RESOLVED_FALSE_POSITIVE" | "RESOLVED_OTHER"*

___

###  UpdateIncidentMethod

Ƭ **UpdateIncidentMethod**: *function*

Defined in src/incident_update.ts:45

Update one or more fields of a specific incident. Missing fields are ignored.

#### Type declaration:

▸ (`incidentId`: string, `udpdateData`: [UpdateData](README.md#updatedata)): *Promise‹[UpdateIncidentResponse](README.md#updateincidentresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`incidentId` | string |
`udpdateData` | [UpdateData](README.md#updatedata) |

___

###  UpdateIncidentPayload

Ƭ **UpdateIncidentPayload**: *object*

Defined in src/incident_update.ts:35

#### Type declaration:

* **request_data**(): *object*

  * **incident_id**: *string*

  * **update_data**: *[UpdateData](README.md#updatedata)*

___

###  UpdateIncidentResponse

Ƭ **UpdateIncidentResponse**: *object*

Defined in src/incident_update.ts:31

The model of the UpdateIncident response

#### Type declaration:

* **reply**: *true*

___

###  ViolationFilter

Ƭ **ViolationFilter**: *object*

Defined in src/device_control_get_violations.ts:35

#### Type declaration:

* **field**: *"endpoint_id_list" | "type" | "timestamp" | "ip_list" | "vendor" | "vendor_id" | "product" | "product_id" | "serial" | "hostname" | "violation_id_list" | "username"*

* **operator**: *"in" | "gte" | "lte"*

* **value**: *number | string | string[] | "cdrom" | "disk drive" | "floppy disk" | "portable device"*

___

###  ViolationSort

Ƭ **ViolationSort**: *object*

Defined in src/device_control_get_violations.ts:42

#### Type declaration:

* **field**: *"first_seen" | "last_seen"*

* **keyword**: *"asc" | "desc"*

___

###  WhitelistFile

Ƭ **WhitelistFile**: *function*

Defined in src/hash_exception_whitelist.ts:34

Whitelist requested files which have not already been blacklisted or whitelisted.

#### Type declaration:

▸ (`hashList`: string[], `comment?`: undefined | string): *Promise‹[WhitelistFileResponse](README.md#whitelistfileresponse)›*

**Parameters:**

Name | Type |
------ | ------ |
`hashList` | string[] |
`comment?` | undefined &#124; string |

___

###  WhitelistFilePayload

Ƭ **WhitelistFilePayload**: *object*

Defined in src/hash_exception_whitelist.ts:17

#### Type declaration:

* **request_data**(): *object*

  * **comment**? : *undefined | string*

  * **hash_list**: *string[]*

___

###  WhitelistFileResponse

Ƭ **WhitelistFileResponse**: *object*

Defined in src/hash_exception_whitelist.ts:27

The model of a Whitelist File Endpoint method response

#### Type declaration:

* **reply**: *boolean*

___

###  XdrAdvApiHeaders

Ƭ **XdrAdvApiHeaders**: *[XdrBasicApiHeaders](README.md#xdrbasicapiheaders) & object*

Defined in src/apikey.ts:64

HTTP headers when using advanced XDR API KEYs

___

###  XdrAlert

Ƭ **XdrAlert**: *object*

Defined in src/alert_insert_parsed.ts:20

Model of a XDR Alert

#### Type declaration:

* **alert_description**? : *undefined | string*

* **alert_name**: *string*

* **event_timestamp**: *number*

* **local_ip**: *string*

* **local_port**: *number*

* **product**: *string*

* **remote_ip**: *string*

* **remote_port**: *number*

* **severity**? : *"Informational" | "Low" | "Medium" | "High" | "Unknown"*

* **vendor**: *string*

___

###  XdrApi

Ƭ **XdrApi**: *object*

Defined in src/xdrapi.ts:37

Shape of a XDR API object

#### Type declaration:

* **alert**: *[AlertApi](README.md#alertapi)*

* **audit**: *[AuditsApi](README.md#auditsapi)*

* **close**(): *function*

  * (): *Promise‹void›*

* **deviceControl**: *[DeviceControlApi](README.md#devicecontrolapi)*

* **distributions**: *[DistributionsApi](README.md#distributionsapi)*

* **endpoint**: *[EndpointApi](README.md#endpointapi)*

* **hashException**: *[HashExceptionApi](README.md#hashexceptionapi)*

* **incident**: *[IncidentApi](README.md#incidentapi)*

___

###  XdrApiOps

Ƭ **XdrApiOps**: *Pick‹[XdrSessionOps](README.md#xdrsessionops), "xdrBaseFqdn" | "apiTimeout" | "sessionOptions"› & object*

Defined in src/xdrapi.ts:75

Configuration options for a XdrApi object

___

###  XdrApis

Ƭ **XdrApis**: *"alerts" | "incidents" | "endpoint"*

Defined in src/xdrerror.ts:43

___

###  XdrBasicApiHeaders

Ƭ **XdrBasicApiHeaders**: *object*

Defined in src/apikey.ts:38

HTTP headers when using basic XDR API KEYs

#### Type declaration:

* **authorization**: *string*

* **x-xdr-auth-id**: *string*

___

###  XdrCallOp

Ƭ **XdrCallOp**: *object*

Defined in src/http2client.ts:60

#### Type declaration:

* **body**? : *undefined | object*

* **errBuilder**: *[ErrBldr](README.md#errbldr)‹E›*

* **method**: *string*

* **opts**? : *http2.ClientSessionRequestOptions*

* **path**: *string*

___

###  XdrSessionOps

Ƭ **XdrSessionOps**: *object*

Defined in src/http2client.ts:37

Options to configure a `Http2Fetch` object

#### Type declaration:

* **apiTimeout**? : *undefined | number*

* **sessionOptions**? : *ClientSessionOptions & SecureClientSessionOptions*

* **xdrApiKey**: *[ApiKey](README.md#apikey)*

* **xdrBaseFqdn**: *string*

___

###  XdrViolation

Ƭ **XdrViolation**: *object*

Defined in src/device_control_get_violations.ts:20

shape of an XDR Violation

#### Type declaration:

* **endpoint_id**: *string*

* **hostname**: *string*

* **ip**: *string*

* **product**: *string*

* **product_id**: *string*

* **serial**: *string*

* **timestamp**: *number*

* **type**: *string*

* **user**: *string*

* **vendor**: *string*

* **vendor_id**: *string*

* **violation_id**: *number*

## Variables

### `Const` ADV_API_KEY

• **ADV_API_KEY**: *undefined | string* = process.env['PAN_ADV_API_KEY']

Defined in src/xdrapi.ts:25

___

### `Const` API_KEY_ID

• **API_KEY_ID**: *undefined | string* = process.env['PAN_API_KEY_ID']

Defined in src/xdrapi.ts:26

___

### `Const` BASIC_API_KEY

• **BASIC_API_KEY**: *undefined | string* = process.env['PAN_BASIC_API_KEY']

Defined in src/xdrapi.ts:24

___

###  HTTP2_HEADER_AUTHORIZATION

• **HTTP2_HEADER_AUTHORIZATION**: *string*

Defined in src/http2client.ts:27

___

###  HTTP2_HEADER_CONTENT_LENGTH

• **HTTP2_HEADER_CONTENT_LENGTH**: *string*

Defined in src/http2client.ts:29

___

###  HTTP2_HEADER_CONTENT_TYPE

• **HTTP2_HEADER_CONTENT_TYPE**: *string*

Defined in src/http2client.ts:28

___

###  HTTP2_HEADER_METHOD

• **HTTP2_HEADER_METHOD**: *string*

Defined in src/http2client.ts:25

___

###  HTTP2_HEADER_PATH

• **HTTP2_HEADER_PATH**: *string*

Defined in src/http2client.ts:24

___

###  HTTP2_HEADER_STATUS

• **HTTP2_HEADER_STATUS**: *string*

Defined in src/http2client.ts:26

___

###  HTTP2_METHOD_DELETE

• **HTTP2_METHOD_DELETE**: *string*

Defined in src/http2client.ts:21

___

###  HTTP2_METHOD_GET

• **HTTP2_METHOD_GET**: *string*

Defined in src/http2client.ts:20

___

###  HTTP2_METHOD_POST

• **HTTP2_METHOD_POST**: *string*

Defined in src/http2client.ts:22

___

###  HTTP2_METHOD_PUT

• **HTTP2_METHOD_PUT**: *string*

Defined in src/http2client.ts:23

___

### `Const` XDR_FQDN

• **XDR_FQDN**: *undefined | string* = process.env['PAN_XDR_FQDN']

Defined in src/xdrapi.ts:27

___

### `Const` agentsReportsPath

• **agentsReportsPath**: *string* = `${auditsPath}/agents_reports`

Defined in src/api_audits.ts:23

___

### `Const` alertTypes

• **alertTypes**: *string[]* = ['alerts']

Defined in src/xdrerror.ts:14

___

### `Const` alertsPath

• **alertsPath**: *"/public_api/v1/alerts"* = "/public_api/v1/alerts"

Defined in src/api_alert.ts:18

___

### `Const` auditsPath

• **auditsPath**: *"/public_api/v1/audits"* = "/public_api/v1/audits"

Defined in src/api_audits.ts:20

___

### `Const` blackListPath

• **blackListPath**: *string* = `${hashExceptionsPath}/blacklist`

Defined in src/api_hash_exceptions.ts:20

___

### `Const` cancelScanEndpointPath

• **cancelScanEndpointPath**: *string* = `${endpointPath}/abort_scan`

Defined in src/api_endpoint.ts:34

___

### `Const` createDistributionPath

• **createDistributionPath**: *string* = `${distributionsPath}/create`

Defined in src/api_distributions.ts:22

___

### `Let` currentLogLevel

• **currentLogLevel**: *[logLevel](enums/loglevel.md)* = (isNaN(envLevel) && logLevel.INFO) || envLevel

Defined in src/commonlogger.ts:27

___

### `Const` deleteEndpointPath

• **deleteEndpointPath**: *string* = `${endpointPath}/delete`

Defined in src/api_endpoint.ts:35

___

### `Const` deviceControlPath

• **deviceControlPath**: *"/public_api/v1/device_control"* = "/public_api/v1/device_control"

Defined in src/api_device_control.ts:18

___

### `Const` distributionsPath

• **distributionsPath**: *"/public_api/v1/distributions"* = "/public_api/v1/distributions"

Defined in src/api_distributions.ts:20

___

### `Const` endpointPath

• **endpointPath**: *"/public_api/v1/endpoints"* = "/public_api/v1/endpoints"

Defined in src/api_endpoint.ts:28

___

### `Const` envLevel

• **envLevel**: *number* = Number.parseInt(process.env['CORTEX_SDK_LOG'] || '', 10)

Defined in src/commonlogger.ts:26

___

### `Const` fileQuarantineEndpointPath

• **fileQuarantineEndpointPath**: *string* = `${endpointPath}/quarantine`

Defined in src/api_endpoint.ts:39

___

### `Const` fileRestoreEndpointPath

• **fileRestoreEndpointPath**: *string* = `${endpointPath}/restore`

Defined in src/api_endpoint.ts:38

___

### `Const` fileRetrieveEndpointPath

• **fileRetrieveEndpointPath**: *string* = `${endpointPath}/file_retrieval`

Defined in src/api_endpoint.ts:37

___

### `Const` getAllEndpointsPath

• **getAllEndpointsPath**: *string* = `${endpointPath}/get_endpoints`

Defined in src/api_endpoint.ts:32

___

### `Const` getDistributionStatusPath

• **getDistributionStatusPath**: *string* = `${distributionsPath}/get_status`

Defined in src/api_distributions.ts:23

___

### `Const` getDistributionUrlPath

• **getDistributionUrlPath**: *string* = `${distributionsPath}/get_dist_url`

Defined in src/api_distributions.ts:24

___

### `Const` getDistributionVersionPath

• **getDistributionVersionPath**: *string* = `${distributionsPath}/get_versions`

Defined in src/api_distributions.ts:21

___

### `Const` getEndpointsPath

• **getEndpointsPath**: *string* = `${endpointPath}/get_endpoint`

Defined in src/api_endpoint.ts:31

___

### `Const` getIncidentDetailsPath

• **getIncidentDetailsPath**: *string* = `${incidentPath}/get_incident_extra_data`

Defined in src/api_incident.ts:22

___

### `Const` getIncidentPath

• **getIncidentPath**: *string* = `${incidentPath}/get_incidents`

Defined in src/api_incident.ts:21

___

### `Const` getViolationsPath

• **getViolationsPath**: *string* = `${deviceControlPath}/get_violations`

Defined in src/api_device_control.ts:19

___

### `Const` hashExceptionsPath

• **hashExceptionsPath**: *"/public_api/v1/hash_exceptions"* = "/public_api/v1/hash_exceptions"

Defined in src/api_hash_exceptions.ts:19

___

### `Const` incidentPath

• **incidentPath**: *"/public_api/v1/incidents"* = "/public_api/v1/incidents"

Defined in src/api_incident.ts:20

___

### `Const` insertCEFPath

• **insertCEFPath**: *string* = `${alertsPath}/insert_cef_alerts/`

Defined in src/api_alert.ts:20

___

### `Const` insertParsedPath

• **insertParsedPath**: *string* = `${alertsPath}/insert_parsed_alerts`

Defined in src/api_alert.ts:19

___

### `Const` isolateEndpointPath

• **isolateEndpointPath**: *string* = `${endpointPath}/isolate`

Defined in src/api_endpoint.ts:29

___

### `Const` logFunc

• **logFunc**: *debug[]* = [console.debug, console.info, console.warn, console.error]

Defined in src/commonlogger.ts:28

___

### `Const` mgmtLogsPath

• **mgmtLogsPath**: *string* = `${auditsPath}/management_logs`

Defined in src/api_audits.ts:22

___

### `Const` policyEndpointPath

• **policyEndpointPath**: *string* = `${endpointPath}/get_policy`

Defined in src/api_endpoint.ts:36

___

### `Const` quarantineStatusPath

• **quarantineStatusPath**: *string* = `${auditsPath}/quarantine/status`

Defined in src/api_audits.ts:21

___

### `Const` scanEndpointPath

• **scanEndpointPath**: *string* = `${endpointPath}/scan`

Defined in src/api_endpoint.ts:33

___

### `Let` seqno

• **seqno**: *number* = Math.floor(Math.random() * 10000)

Defined in src/http2client.ts:32

___

### `Const` unisolateEndpointPath

• **unisolateEndpointPath**: *string* = `${endpointPath}/unisolate`

Defined in src/api_endpoint.ts:30

___

### `Const` updateIncidentPath

• **updateIncidentPath**: *string* = `${incidentPath}/update_incident`

Defined in src/api_incident.ts:23

___

### `Const` whiteListPath

• **whiteListPath**: *string* = `${hashExceptionsPath}/whitelist`

Defined in src/api_hash_exceptions.ts:21

## Functions

###  advXdrApiKey

▸ **advXdrApiKey**(`key`: string, `keyId`: string): *[ApiKey](README.md#apikey)*

Defined in src/apikey.ts:86

Creates an advanced XDR ApiKey structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | api key itself |
`keyId` | string | api key identifier  |

**Returns:** *[ApiKey](README.md#apikey)*

___

###  agentReport

▸ **agentReport**(`this`: [AuditsApi](README.md#auditsapi), `filters`: [AuditFilter](README.md#auditfilter)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [AuditSort](README.md#auditsort)): *Promise‹[AgentReportResponse](README.md#agentreportresponse)›*

Defined in src/audits_agents_reports.ts:115

Get agent event reports.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [AuditsApi](README.md#auditsapi) | - |
`filters` | [AuditFilter](README.md#auditfilter)[] | Provides an array of filtered fields |
`search_from?` | undefined &#124; number | Integer representing the starting offset within the query result set from which you want violations returned.Violations are returned as a zero-based list. Any incident indexed less than this value is not returned in the final result set and defaults to zero. |
`search_to?` | undefined &#124; number | Integer representing the end offset within the result set after which you do not want incidents returned. Violation in the violation list that are indexed higher than this value are not returned in the final results set. Defaults to zero, which returns all incidents to the end of the list. |
`sort?` | [AuditSort](README.md#auditsort) | Identifies the sort order for the result set.  |

**Returns:** *Promise‹[AgentReportResponse](README.md#agentreportresponse)›*

___

###  alertApiErrBldr

▸ **alertApiErrBldr**(`data`: any, `statusCode`: number): *[XdrError](classes/xdrerror.md)‹[AlertApiErr](README.md#alertapierr)›*

Defined in src/api_alert.ts:57

Parses a REST call response into an Alert API error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | any | REST response |
`statusCode` | number | HTTP2 response code  |

**Returns:** *[XdrError](classes/xdrerror.md)‹[AlertApiErr](README.md#alertapierr)›*

___

###  auditApiErrBldr

▸ **auditApiErrBldr**(`data`: any, `statusCode`: number): *[XdrError](classes/xdrerror.md)‹[AuditApiErr](README.md#auditapierr)›*

Defined in src/api_audits.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`statusCode` | number |

**Returns:** *[XdrError](classes/xdrerror.md)‹[AuditApiErr](README.md#auditapierr)›*

___

###  basicXdrApiKey

▸ **basicXdrApiKey**(`key`: string, `keyId`: string): *[ApiKey](README.md#apikey)*

Defined in src/apikey.ts:52

Creates a basic XDR ApiKey structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | api key itself |
`keyId` | string | api key identifier  |

**Returns:** *[ApiKey](README.md#apikey)*

___

###  blacklistFile

▸ **blacklistFile**(`this`: [HashExceptionApi](README.md#hashexceptionapi), `hashList`: string[], `comment?`: undefined | string): *Promise‹[BlacklistFileResponse](README.md#blacklistfileresponse)›*

Defined in src/hash_exception_blacklist.ts:52

Blacklist requested files which have not already been blacklisted or whitelisted.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [HashExceptionApi](README.md#hashexceptionapi) | - |
`hashList` | string[] | String that represents a list of hashed files you want to blacklist. Hash must be a valid SH256. |
`comment?` | undefined &#124; string | String that represents additional information regarding the action.  |

**Returns:** *Promise‹[BlacklistFileResponse](README.md#blacklistfileresponse)›*

___

###  cancelScanEndpoint

▸ **cancelScanEndpoint**(`this`: [EndpointApi](README.md#endpointapi), `filters`: [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[CancelScanEndpointResponse](README.md#cancelscanendpointresponse)›*

Defined in src/endpoint_cancel_scan.ts:50

Cancel the scan of selected endpoints. A scan can only be aborted if the
selected endpoints are in Pending or in Progress status.

**Parameters:**

Name | Type |
------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) |
`filters` | [EndpointFilter](README.md#endpointfilter)[] |

**Returns:** *Promise‹[CancelScanEndpointResponse](README.md#cancelscanendpointresponse)›*

___

###  close

▸ **close**(`this`: [XdrSession](interfaces/xdrsession.md)): *Promise‹void›*

Defined in src/http2client.ts:82

**Parameters:**

Name | Type |
------ | ------ |
`this` | [XdrSession](interfaces/xdrsession.md) |

**Returns:** *Promise‹void›*

___

###  commonLogger

▸ **commonLogger**(`error`: [Error](classes/xdrerror.md#static-error)): *void*

Defined in src/commonlogger.ts:34

logs an error object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error` | [Error](classes/xdrerror.md#static-error) | object to be logged  |

**Returns:** *void*

▸ **commonLogger**(`level`: [logLevel](enums/loglevel.md), `message`: string, `noPrefix?`: undefined | false | true): *void*

Defined in src/commonlogger.ts:41

logs a message string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`level` | [logLevel](enums/loglevel.md) | level of the message |
`message` | string | the error message |
`noPrefix?` | undefined &#124; false &#124; true | to remove the 'CORTEX_SDK' prefix in the output  |

**Returns:** *void*

___

###  createAlertApi

▸ **createAlertApi**(`sess`: [XdrSession](interfaces/xdrsession.md)): *[AlertApi](README.md#alertapi)*

Defined in src/api_alert.ts:40

Creates an Alert API object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sess` | [XdrSession](interfaces/xdrsession.md) | xdr session object  |

**Returns:** *[AlertApi](README.md#alertapi)*

___

###  createAuditsApi

▸ **createAuditsApi**(`sess`: [XdrSession](interfaces/xdrsession.md)): *[AuditsApi](README.md#auditsapi)*

Defined in src/api_audits.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`sess` | [XdrSession](interfaces/xdrsession.md) |

**Returns:** *[AuditsApi](README.md#auditsapi)*

___

###  createDeviceControlApi

▸ **createDeviceControlApi**(`sess`: [XdrSession](interfaces/xdrsession.md)): *[DeviceControlApi](README.md#devicecontrolapi)*

Defined in src/api_device_control.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`sess` | [XdrSession](interfaces/xdrsession.md) |

**Returns:** *[DeviceControlApi](README.md#devicecontrolapi)*

___

###  createDistribution

▸ **createDistribution**(`this`: [DistributionsApi](README.md#distributionsapi), `distributon`: [PackageStandalone](README.md#packagestandalone) | [PackageUpgrade](README.md#packageupgrade)): *Promise‹[CreateDistributionResponse](README.md#createdistributionresponse)›*

Defined in src/distributions_create.ts:68

Create an installation package. This is an async call that returns the
distribution ID, it does not mean that the creation succeeded. To confirm the
package has been created, check the status of the distribution by running the
Get Distribution Status API.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [DistributionsApi](README.md#distributionsapi) | - |
`distributon` | [PackageStandalone](README.md#packagestandalone) &#124; [PackageUpgrade](README.md#packageupgrade) | package details  |

**Returns:** *Promise‹[CreateDistributionResponse](README.md#createdistributionresponse)›*

___

###  createDistributionsApi

▸ **createDistributionsApi**(`sess`: [XdrSession](interfaces/xdrsession.md)): *[DistributionsApi](README.md#distributionsapi)*

Defined in src/api_distributions.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`sess` | [XdrSession](interfaces/xdrsession.md) |

**Returns:** *[DistributionsApi](README.md#distributionsapi)*

___

###  createEndpointApi

▸ **createEndpointApi**(`sess`: [XdrSession](interfaces/xdrsession.md)): *[EndpointApi](README.md#endpointapi)*

Defined in src/api_endpoint.ts:96

**Parameters:**

Name | Type |
------ | ------ |
`sess` | [XdrSession](interfaces/xdrsession.md) |

**Returns:** *[EndpointApi](README.md#endpointapi)*

___

###  createHashExceptionApi

▸ **createHashExceptionApi**(`sess`: [XdrSession](interfaces/xdrsession.md)): *[HashExceptionApi](README.md#hashexceptionapi)*

Defined in src/api_hash_exceptions.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`sess` | [XdrSession](interfaces/xdrsession.md) |

**Returns:** *[HashExceptionApi](README.md#hashexceptionapi)*

___

###  createIncidentApi

▸ **createIncidentApi**(`sess`: [XdrSession](interfaces/xdrsession.md)): *[IncidentApi](README.md#incidentapi)*

Defined in src/api_incident.ts:53

Create XDR incident API object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sess` | [XdrSession](interfaces/xdrsession.md) | XDR session object to use  |

**Returns:** *[IncidentApi](README.md#incidentapi)*

___

###  createXdrApi

▸ **createXdrApi**(`ops?`: [XdrApiOps](README.md#xdrapiops)): *[XdrApi](README.md#xdrapi)*

Defined in src/xdrapi.ts:99

Creates an XdrApi object either from provided configuration object or from
environmental variables

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ops?` | [XdrApiOps](README.md#xdrapiops) | configuration options  |

**Returns:** *[XdrApi](README.md#xdrapi)*

___

###  createXdrSession

▸ **createXdrSession**<**E**>(`ops`: [XdrSessionOps](README.md#xdrsessionops)): *[XdrSession](interfaces/xdrsession.md)*

Defined in src/http2client.ts:228

**Type parameters:**

▪ **E**: *[GeneralXdrError](README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`ops` | [XdrSessionOps](README.md#xdrsessionops) |

**Returns:** *[XdrSession](interfaces/xdrsession.md)*

___

###  del

▸ **del**<**R**, **E**>(`this`: [XdrSession](interfaces/xdrsession.md), `path`: string, `eBldr`: [ErrBldr](README.md#errbldr)‹E›, `opts?`: http2.ClientSessionRequestOptions): *Promise‹object›*

Defined in src/http2client.ts:175

**Type parameters:**

▪ **R**

▪ **E**: *[GeneralXdrError](README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [XdrSession](interfaces/xdrsession.md) |
`path` | string |
`eBldr` | [ErrBldr](README.md#errbldr)‹E› |
`opts?` | http2.ClientSessionRequestOptions |

**Returns:** *Promise‹object›*

___

###  deleteEndpoint

▸ **deleteEndpoint**(`this`: [EndpointApi](README.md#endpointapi), `filters`: [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[DeleteEndpointResponse](README.md#deleteendpointresponse)›*

Defined in src/endpoint_delete.ts:48

Delete selected endpoints in the Cortex XDR app. You can delete up to 100
endpoints.

**Parameters:**

Name | Type |
------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) |
`filters` | [EndpointFilter](README.md#endpointfilter)[] |

**Returns:** *Promise‹[DeleteEndpointResponse](README.md#deleteendpointresponse)›*

___

###  deviceControlApiErrBldr

▸ **deviceControlApiErrBldr**(`data`: any, `statusCode`: number): *[XdrError](classes/xdrerror.md)‹[DeviceControlApiErr](README.md#devicecontrolapierr)›*

Defined in src/api_device_control.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`statusCode` | number |

**Returns:** *[XdrError](classes/xdrerror.md)‹[DeviceControlApiErr](README.md#devicecontrolapierr)›*

___

###  distributionStatus

▸ **distributionStatus**(`this`: [DistributionsApi](README.md#distributionsapi), `distributionId`: string): *Promise‹[DistributionStatusResponse](README.md#distributionstatusresponse)›*

Defined in src/distributions_status.ts:46

Check the status of the installation package.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [DistributionsApi](README.md#distributionsapi) | - |
`distributionId` | string | String representing the installation package ID.  |

**Returns:** *Promise‹[DistributionStatusResponse](README.md#distributionstatusresponse)›*

___

###  distributionUrl

▸ **distributionUrl**(`this`: [DistributionsApi](README.md#distributionsapi), `distributionId`: string, `packageType`: [PackageType](README.md#packagetype)): *Promise‹[DistributionUrlResponse](README.md#distributionurlresponse)›*

Defined in src/distributions_url.ts:54

Get the distribution URL for downloading the installation package.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [DistributionsApi](README.md#distributionsapi) | - |
`distributionId` | string | string representing the installation package ID. |
`packageType` | [PackageType](README.md#packagetype) | A string representing the type of installation package  |

**Returns:** *Promise‹[DistributionUrlResponse](README.md#distributionurlresponse)›*

___

###  distributionsApiErrBldr

▸ **distributionsApiErrBldr**(`data`: any, `statusCode`: number): *[XdrError](classes/xdrerror.md)‹[DistributionsApiErr](README.md#distributionsapierr)›*

Defined in src/api_distributions.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`statusCode` | number |

**Returns:** *[XdrError](classes/xdrerror.md)‹[DistributionsApiErr](README.md#distributionsapierr)›*

___

###  endpointApiErrBldr

▸ **endpointApiErrBldr**(`data`: any, `statusCode`: number): *[XdrError](classes/xdrerror.md)‹[EndpointApiErr](README.md#endpointapierr)›*

Defined in src/api_endpoint.ts:115

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`statusCode` | number |

**Returns:** *[XdrError](classes/xdrerror.md)‹[EndpointApiErr](README.md#endpointapierr)›*

___

###  fileQuarantineEndpoint

▸ **fileQuarantineEndpoint**(`this`: [EndpointApi](README.md#endpointapi), `filters`: [EndpointFilter](README.md#endpointfilter)[], `filePath`: string, `fileHash`: string): *Promise‹[FileQuarantineEndpointResponse](README.md#filequarantineendpointresponse)›*

Defined in src/endpoint_file_quarantine.ts:62

Quarantine file on selected endpoints.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) | - |
`filters` | [EndpointFilter](README.md#endpointfilter)[] | String that identifies the endpoint to isolate or array of filtered fields for isolating a number of endpoints at once. |
`filePath` | string | String that represents the path of the file you want to quarantine |
`fileHash` | string | String that represents the file’s hash. Hash must be a valid SHA256  |

**Returns:** *Promise‹[FileQuarantineEndpointResponse](README.md#filequarantineendpointresponse)›*

___

###  fileRestoreEndpoint

▸ **fileRestoreEndpoint**(`this`: [EndpointApi](README.md#endpointapi), `fileHash`: string, `endpointId?`: undefined | string): *Promise‹[FileRestoreEndpointResponse](README.md#filerestoreendpointresponse)›*

Defined in src/endpoint_file_restore.ts:56

Restore a quarantined file on a requested endpoints.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) | - |
`fileHash` | string | String that represents the file’s hash. Hash must be a valid SHA256 |
`endpointId?` | undefined &#124; string | String that represents the endpoint ID. If you do not enter a specific endpoint ID, the request will run restore on all endpoints which relate to the quarantined file you defined.  |

**Returns:** *Promise‹[FileRestoreEndpointResponse](README.md#filerestoreendpointresponse)›*

___

###  fileRetrieveEndpoint

▸ **fileRetrieveEndpoint**(`this`: [EndpointApi](README.md#endpointapi), `filters`: [EndpointFilter](README.md#endpointfilter)[], `files`: Partial‹[RetrieveFiles](README.md#retrievefiles)›): *Promise‹[FileRetrieveEndpointResponse](README.md#fileretrieveendpointresponse)›*

Defined in src/endpoint_file_retrieve.ts:65

Retrieve files from selected endpoints. You can retrieve up to 20 files, from
no more than 100 endpoints.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) | - |
`filters` | [EndpointFilter](README.md#endpointfilter)[] | String that identifies the endpoint to isolate or array of filtered fields for isolating a number of endpoints at once. |
`files` | Partial‹[RetrieveFiles](README.md#retrievefiles)› | A dictionary containing the type of platform and files you want to retrieve.  |

**Returns:** *Promise‹[FileRetrieveEndpointResponse](README.md#fileretrieveendpointresponse)›*

___

###  get

▸ **get**<**R**, **E**>(`this`: [XdrSession](interfaces/xdrsession.md), `path`: string, `eBldr`: [ErrBldr](README.md#errbldr)‹E›, `opts?`: http2.ClientSessionRequestOptions): *Promise‹object›*

Defined in src/http2client.ts:166

**Type parameters:**

▪ **R**

▪ **E**: *[GeneralXdrError](README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [XdrSession](interfaces/xdrsession.md) |
`path` | string |
`eBldr` | [ErrBldr](README.md#errbldr)‹E› |
`opts?` | http2.ClientSessionRequestOptions |

**Returns:** *Promise‹object›*

___

###  getAllEndpoints

▸ **getAllEndpoints**(`this`: [EndpointApi](README.md#endpointapi)): *Promise‹[GetAllEndpointResponse](README.md#getallendpointresponse)›*

Defined in src/endpoint_getall.ts:42

Gets a list of your endpoints

**Parameters:**

Name | Type |
------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) |

**Returns:** *Promise‹[GetAllEndpointResponse](README.md#getallendpointresponse)›*

___

###  getDeviceViolations

▸ **getDeviceViolations**(`this`: [DeviceControlApi](README.md#devicecontrolapi), `filters`: [ViolationFilter](README.md#violationfilter)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [ViolationSort](README.md#violationsort)): *Promise‹[GetDeviceViolationsResponse](README.md#getdeviceviolationsresponse)›*

Defined in src/device_control_get_violations.ts:113

Gets a list of device violations filtered by selected fields

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [DeviceControlApi](README.md#devicecontrolapi) | - |
`filters` | [ViolationFilter](README.md#violationfilter)[] | String that identifies the violation field the filter is matching |
`search_from?` | undefined &#124; number | Integer representing the starting offset within the query result set from which you want violations returned.Violations are returned as a zero-based list. Any incident indexed less than this value is not returned in the final result set and defaults to zero. |
`search_to?` | undefined &#124; number | Integer representing the end offset within the result set after which you do not want incidents returned. Violation in the violation list that are indexed higher than this value are not returned in the final results set. Defaults to zero, which returns all incidents to the end of the list. |
`sort?` | [ViolationSort](README.md#violationsort) | Identifies the sort order for the result set.  |

**Returns:** *Promise‹[GetDeviceViolationsResponse](README.md#getdeviceviolationsresponse)›*

___

###  getEndpoints

▸ **getEndpoints**(`this`: [EndpointApi](README.md#endpointapi), `filters`: [EndpointFilter](README.md#endpointfilter)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [EndpointSortCriteria](README.md#endpointsortcriteria)): *Promise‹[GetEndpointResponse](README.md#getendpointresponse)›*

Defined in src/endpoint_get.ts:127

Gets a list of filtered endpoints. Response is concatenated using AND
condition (OR is not supported). Maximum result set size is 100

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) | - |
`filters` | [EndpointFilter](README.md#endpointfilter)[] | Provides an array of filtered fields |
`search_from?` | undefined &#124; number | An integer representing the start offset within the query result set from which you want endpoints returned. Endpoints are returned as a zero-based list. Any endpoint indexed less than this value is not returned in the final result set and defaults to zero |
`search_to?` | undefined &#124; number | An integer representing the end offset within the result set after which you do not want endpoints returned. Endpoint in the endpoint list that are indexed higher than this value are not returned in the final results set. Defaults to 100, which returns all endpoints to the end of the list |
`sort?` | [EndpointSortCriteria](README.md#endpointsortcriteria) | Identifies the sort order for the result set  |

**Returns:** *Promise‹[GetEndpointResponse](README.md#getendpointresponse)›*

___

###  getIncidents

▸ **getIncidents**(`this`: [IncidentApi](README.md#incidentapi), `filters`: [IncidentFiler](README.md#incidentfiler)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [SortCriteria](README.md#sortcriteria)): *Promise‹[GetIncidentsResponse](README.md#getincidentsresponse)›*

Defined in src/incident_get.ts:132

Get a list of incidents filtered by a list of incident IDs, modification
time, or creation time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [IncidentApi](README.md#incidentapi) | IncidentApi object |
`filters` | [IncidentFiler](README.md#incidentfiler)[] | Provides an array of filtered fields |
`search_from?` | undefined &#124; number | Integer representing the starting offset within the query result set from which you want incidents returned. Incidents are returned as a zero-based list. Any incident indexed less than this value is not returned in the final result set and defaults to zero. |
`search_to?` | undefined &#124; number | Integer representing the end offset within the result set after which you do not want incidents returned. Incidents in the incident list that are indexed higher than this value are not returned in the final results set. Defaults to zero, which returns all incidents to the end of the list. |
`sort?` | [SortCriteria](README.md#sortcriteria) | Identifies the sort order for the result set  |

**Returns:** *Promise‹[GetIncidentsResponse](README.md#getincidentsresponse)›*

___

###  getIncidentsDetails

▸ **getIncidentsDetails**(`this`: [IncidentApi](README.md#incidentapi), `incidentId`: string, `alertsLimit?`: undefined | number): *Promise‹[GetIncidentsDetailsResponse](README.md#getincidentsdetailsresponse)›*

Defined in src/incident_get_details.ts:132

Get extra data fields of a specific incident including alerts and key artifacts

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [IncidentApi](README.md#incidentapi) | IncidentApi object |
`incidentId` | string | The ID of the incident for which you want to retrieve extra data. |
`alertsLimit?` | undefined &#124; number | Maximum number of related alerts in the incident that you want to retrieve (default is 1000).  |

**Returns:** *Promise‹[GetIncidentsDetailsResponse](README.md#getincidentsdetailsresponse)›*

___

###  hashExceptionApiErrBldr

▸ **hashExceptionApiErrBldr**(`data`: any, `statusCode`: number): *[XdrError](classes/xdrerror.md)‹[HashExceptionApiErr](README.md#hashexceptionapierr)›*

Defined in src/api_hash_exceptions.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`statusCode` | number |

**Returns:** *[XdrError](classes/xdrerror.md)‹[HashExceptionApiErr](README.md#hashexceptionapierr)›*

___

###  headersAdvanced

▸ **headersAdvanced**(`this`: [ApiKey](README.md#apikey), `preload?`: undefined | object): *[XdrAdvApiHeaders](README.md#xdradvapiheaders)*

Defined in src/apikey.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`this` | [ApiKey](README.md#apikey) |
`preload?` | undefined &#124; object |

**Returns:** *[XdrAdvApiHeaders](README.md#xdradvapiheaders)*

___

###  headersBasic

▸ **headersBasic**(`this`: [ApiKey](README.md#apikey)): *[XdrBasicApiHeaders](README.md#xdrbasicapiheaders) | [XdrAdvApiHeaders](README.md#xdradvapiheaders)*

Defined in src/apikey.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`this` | [ApiKey](README.md#apikey) |

**Returns:** *[XdrBasicApiHeaders](README.md#xdrbasicapiheaders) | [XdrAdvApiHeaders](README.md#xdradvapiheaders)*

___

###  incidentApiErrBldr

▸ **incidentApiErrBldr**(`data`: any, `statusCode`: number): *[XdrError](classes/xdrerror.md)‹[IncidentApiErr](README.md#incidentapierr)›*

Defined in src/api_incident.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`statusCode` | number |

**Returns:** *[XdrError](classes/xdrerror.md)‹[IncidentApiErr](README.md#incidentapierr)›*

___

###  insertParsedAlerts

▸ **insertParsedAlerts**(`this`: [AlertApi](README.md#alertapi), `alerts`: [XdrAlert](README.md#xdralert)[]): *Promise‹[InsertParsedAlertsResponse](README.md#insertparsedalertsresponse)›*

Defined in src/alert_insert_parsed.ts:94

Upload alerts from external alert sources in Cortex XDR format. Cortex XDR displays alerts that are parsed successfully in related incidents and views.
You can send 600 alerts per minute. Each request can contain a maximum of 60
alerts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [AlertApi](README.md#alertapi) | - |
`alerts` | [XdrAlert](README.md#xdralert)[] | List of alerts in Cortex XDR format  |

**Returns:** *Promise‹[InsertParsedAlertsResponse](README.md#insertparsedalertsresponse)›*

___

###  isXdrError

▸ **isXdrError**<**E**>(`obj`: any): *obj is XdrError<E>*

Defined in src/xdrerror.ts:38

**Type parameters:**

▪ **E**: *[GeneralXdrError](README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is XdrError<E>*

___

###  isolateEndpoint

▸ **isolateEndpoint**(`this`: [EndpointApi](README.md#endpointapi), `criteria`: string | [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[IsolateEndpointResponse](README.md#isolateendpointresponse)›*

Defined in src/endpoint_isolate.ts:55

Isolate one or more endpoints in a single request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) | - |
`criteria` | string &#124; [EndpointFilter](README.md#endpointfilter)[] | String that identifies the endpoint to isolate or array of filtered fields for isolating a number of endpoints at once.  |

**Returns:** *Promise‹[IsolateEndpointResponse](README.md#isolateendpointresponse)›*

___

###  managementLog

▸ **managementLog**(`this`: [AuditsApi](README.md#auditsapi), `filters`: [ManagementFilter](README.md#managementfilter)[], `search_from?`: undefined | number, `search_to?`: undefined | number, `sort?`: [ManagementSort](README.md#managementsort)): *Promise‹[ManagementLogResponse](README.md#managementlogresponse)›*

Defined in src/audits_management_log.ts:115

Get audit management logs.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [AuditsApi](README.md#auditsapi) | - |
`filters` | [ManagementFilter](README.md#managementfilter)[] | Provides an array of filtered fields |
`search_from?` | undefined &#124; number | Integer representing the starting offset within the query result set from which you want violations returned.Violations are returned as a zero-based list. Any incident indexed less than this value is not returned in the final result set and defaults to zero. |
`search_to?` | undefined &#124; number | Integer representing the end offset within the result set after which you do not want incidents returned. Violation in the violation list that are indexed higher than this value are not returned in the final results set. Defaults to zero, which returns all incidents to the end of the list. |
`sort?` | [ManagementSort](README.md#managementsort) | Identifies the sort order for the result set.  |

**Returns:** *Promise‹[ManagementLogResponse](README.md#managementlogresponse)›*

___

###  parseXdrError

▸ **parseXdrError**<**E**>(`msg?`: undefined | string): *E | string*

Defined in src/xdrerror.ts:22

**Type parameters:**

▪ **E**: *[GeneralXdrError](README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`msg?` | undefined &#124; string |

**Returns:** *E | string*

___

###  policyEndpoint

▸ **policyEndpoint**(`this`: [EndpointApi](README.md#endpointapi), `endpointId`: string): *Promise‹[PolicyEndpointResponse](README.md#policyendpointresponse)›*

Defined in src/endpoint_policy.ts:46

Get the policy name for a specific endpoint.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) | - |
`endpointId` | string | String the represents the endpoint ID  |

**Returns:** *Promise‹[PolicyEndpointResponse](README.md#policyendpointresponse)›*

___

###  post

▸ **post**<**T**, **R**, **E**>(`this`: [XdrSession](interfaces/xdrsession.md), `path`: string, `eBldr`: [ErrBldr](README.md#errbldr)‹E›, `data`: T, `opts?`: http2.ClientSessionRequestOptions): *Promise‹object›*

Defined in src/http2client.ts:184

**Type parameters:**

▪ **T**

▪ **R**

▪ **E**: *[GeneralXdrError](README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [XdrSession](interfaces/xdrsession.md) |
`path` | string |
`eBldr` | [ErrBldr](README.md#errbldr)‹E› |
`data` | T |
`opts?` | http2.ClientSessionRequestOptions |

**Returns:** *Promise‹object›*

___

###  put

▸ **put**<**T**, **R**, **E**>(`this`: [XdrSession](interfaces/xdrsession.md), `path`: string, `eBldr`: [ErrBldr](README.md#errbldr)‹E›, `data`: T, `opts?`: http2.ClientSessionRequestOptions): *Promise‹object›*

Defined in src/http2client.ts:196

**Type parameters:**

▪ **T**

▪ **R**

▪ **E**: *[GeneralXdrError](README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [XdrSession](interfaces/xdrsession.md) |
`path` | string |
`eBldr` | [ErrBldr](README.md#errbldr)‹E› |
`data` | T |
`opts?` | http2.ClientSessionRequestOptions |

**Returns:** *Promise‹object›*

___

###  quarantineStatus

▸ **quarantineStatus**(`this`: [AuditsApi](README.md#auditsapi), `files`: [QuarantineItem](README.md#quarantineitem)[]): *Promise‹[QuarantineStatusResponse](README.md#quarantinestatusresponse)›*

Defined in src/audits_quarantine_status.ts:64

Retrieve the quarantine status for a selected file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [AuditsApi](README.md#auditsapi) | - |
`files` | [QuarantineItem](README.md#quarantineitem)[] | list of files  |

**Returns:** *Promise‹[QuarantineStatusResponse](README.md#quarantinestatusresponse)›*

___

###  refreshSession

▸ **refreshSession**<**E**>(`ops`: Pick‹[XdrSessionOps](README.md#xdrsessionops), "xdrBaseFqdn" | "apiTimeout" | "sessionOptions"›): *function*

Defined in src/http2client.ts:208

**Type parameters:**

▪ **E**: *[GeneralXdrError](README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`ops` | Pick‹[XdrSessionOps](README.md#xdrsessionops), "xdrBaseFqdn" &#124; "apiTimeout" &#124; "sessionOptions"› |

**Returns:** *function*

▸ (`this`: [XdrSession](interfaces/xdrsession.md)): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [XdrSession](interfaces/xdrsession.md) |

___

###  scanEndpoint

▸ **scanEndpoint**(`this`: [EndpointApi](README.md#endpointapi), `filters`: [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[ScanEndpointResponse](README.md#scanendpointresponse)›*

Defined in src/endpoint_scan.ts:48

Run a scan on selected endpoints

**Parameters:**

Name | Type |
------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) |
`filters` | [EndpointFilter](README.md#endpointfilter)[] |

**Returns:** *Promise‹[ScanEndpointResponse](README.md#scanendpointresponse)›*

___

###  setLogLevel

▸ **setLogLevel**(`level`: [logLevel](enums/loglevel.md)): *void*

Defined in src/commonlogger.ts:62

Change the log level of the common logger at runtime

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`level` | [logLevel](enums/loglevel.md) |   |

**Returns:** *void*

___

###  unisolateEndpoint

▸ **unisolateEndpoint**(`this`: [EndpointApi](README.md#endpointapi), `criteria`: string | [EndpointFilter](README.md#endpointfilter)[]): *Promise‹[UnisolateEndpointResponse](README.md#unisolateendpointresponse)›*

Defined in src/endpoint_unisolate.ts:55

Unisolate one or more endpoints in a single request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [EndpointApi](README.md#endpointapi) | - |
`criteria` | string &#124; [EndpointFilter](README.md#endpointfilter)[] | String that identifies the endpoint to isolate or array of filtered fields for isolating a number of endpoints at once.  |

**Returns:** *Promise‹[UnisolateEndpointResponse](README.md#unisolateendpointresponse)›*

___

###  updateIncident

▸ **updateIncident**(`this`: [IncidentApi](README.md#incidentapi), `incidentId`: string, `udpdateData`: [UpdateData](README.md#updatedata)): *Promise‹[UpdateIncidentResponse](README.md#updateincidentresponse)›*

Defined in src/incident_update.ts:62

Update one or more fields of a specific incident. Missing fields are ignored.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [IncidentApi](README.md#incidentapi) | IncidentApi object |
`incidentId` | string | An integer representing the incident ID you want to update. |
`udpdateData` | [UpdateData](README.md#updatedata) | Provides an array of filtered fields  |

**Returns:** *Promise‹[UpdateIncidentResponse](README.md#updateincidentresponse)›*

___

###  whitelistFile

▸ **whitelistFile**(`this`: [HashExceptionApi](README.md#hashexceptionapi), `hashList`: string[], `comment?`: undefined | string): *Promise‹[WhitelistFileResponse](README.md#whitelistfileresponse)›*

Defined in src/hash_exception_whitelist.ts:52

Whitelist requested files which have not already been blacklisted or whitelisted.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [HashExceptionApi](README.md#hashexceptionapi) | - |
`hashList` | string[] | String that represents a list of hashed files you want to blacklist. Hash must be a valid SH256. |
`comment?` | undefined &#124; string | String that represents additional information regarding the action.  |

**Returns:** *Promise‹[WhitelistFileResponse](README.md#whitelistfileresponse)›*

___

###  xdrOp

▸ **xdrOp**<**T**, **R**, **E**>(`session`: [XdrSession](interfaces/xdrsession.md), `op`: [XdrCallOp](README.md#xdrcallop)‹T, E›): *Promise‹object›*

Defined in src/http2client.ts:89

**Type parameters:**

▪ **T**

▪ **R**

▪ **E**: *[GeneralXdrError](README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [XdrSession](interfaces/xdrsession.md) |
`op` | [XdrCallOp](README.md#xdrcallop)‹T, E› |

**Returns:** *Promise‹object›*
