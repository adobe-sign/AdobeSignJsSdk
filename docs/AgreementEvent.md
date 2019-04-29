# SwaggerJsClient.AgreementEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actingUserEmail** | **String** | Email address of the user that created the event | [optional] 
**actingUserIpAddress** | **String** | The IP address of the user that created the event | [optional] 
**actingUserName** | **String** | The name of the acting user | [optional] 
**comment** | **String** | The event comment. For RECALLED or REJECTED, the reason given by the user that initiates the event. For DELEGATE or SHARE, the message from the acting user to the participant | [optional] 
**_date** | **Date** | The date of the audit event. Format would be yyyy-MM-dd&#39;T&#39;HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time | [optional] 
**description** | **String** | A description of the audit event | [optional] 
**deviceLocation** | [**DeviceLocation**](DeviceLocation.md) | Location of the device that generated the event (This value may be null due to limited privileges) | [optional] 
**devicePhoneNumber** | **String** | Phone number from the device used when the participation is completed on a mobile phone | [optional] 
**digitalSignatureInfo** | [**DigitalSignatureInfo**](DigitalSignatureInfo.md) | This is present for ESIGNED events when the participation is signed digitally | [optional] 
**initiatingUserEmail** | **String** | Email address of the user that initiated the event on behalf of the acting user when the account is shared. Will be empty if there is no account sharing in effect | [optional] 
**initiatingUserName** | **String** | Full name of the user that initiated the event on behalf of the acting user when the account is shared. Will be empty if there is no account sharing in effect | [optional] 
**participantEmail** | **String** | Email address of the user that is the participant for the event. This may be different than the acting user for certain event types. For example, for a DELEGATION event, this is the user who was delegated to | [optional] 
**participantId** | **String** | The unique identifier of the participant for the event. This may be different than the acting user for certain event types. For example, for a DELEGATION event, this is the user who was delegated to | [optional] 
**participantRole** | **String** | Role assumed by all participants in the participant set the participant belongs to (signer, approver etc.). | [optional] 
**synchronizationId** | **String** | A unique identifier linking offline events to synchronization events (specified for offline signing events and synchronization events, else null) | [optional] 
**type** | **String** | Type of agreement event | [optional] 
**vaultEventId** | **String** | The identifier assigned by the vault provider for the vault event (if vaulted, otherwise null) | [optional] 
**vaultProviderName** | **String** | Name of the vault provider for the vault event (if vaulted, otherwise null) | [optional] 
**versionId** | **String** | An ID which uniquely identifies the version of the document associated with this audit event | [optional] 


<a name="ParticipantRoleEnum"></a>
## Enum: ParticipantRoleEnum


* `SIGNER` (value: `"SIGNER"`)

* `DELEGATE_TO_SIGNER` (value: `"DELEGATE_TO_SIGNER"`)

* `APPROVER` (value: `"APPROVER"`)

* `DELEGATE_TO_APPROVER` (value: `"DELEGATE_TO_APPROVER"`)

* `ACCEPTOR` (value: `"ACCEPTOR"`)

* `DELEGATE_TO_ACCEPTOR` (value: `"DELEGATE_TO_ACCEPTOR"`)

* `FORM_FILLER` (value: `"FORM_FILLER"`)

* `DELEGATE_TO_FORM_FILLER` (value: `"DELEGATE_TO_FORM_FILLER"`)

* `CERTIFIED_RECIPIENT` (value: `"CERTIFIED_RECIPIENT"`)

* `DELEGATE_TO_CERTIFIED_RECIPIENT` (value: `"DELEGATE_TO_CERTIFIED_RECIPIENT"`)

* `SHARE` (value: `"SHARE"`)

* `SENDER` (value: `"SENDER"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `ACCESS_CODE_GENERATED` (value: `"ACCESS_CODE_GENERATED"`)

* `ACCESS_CODE_CONSUMED` (value: `"ACCESS_CODE_CONSUMED"`)

* `AUTO_CANCELLED_CONVERSION_PROBLEM` (value: `"AUTO_CANCELLED_CONVERSION_PROBLEM"`)

* `ACTION_AUTO_DELEGATED` (value: `"ACTION_AUTO_DELEGATED"`)

* `ACTION_COMPLETED` (value: `"ACTION_COMPLETED"`)

* `ACTION_COMPLETED_HOSTED` (value: `"ACTION_COMPLETED_HOSTED"`)

* `ACTION_COMPLETED_OFFLINE` (value: `"ACTION_COMPLETED_OFFLINE"`)

* `ACTION_COMPLETED_OFFLINE_HOSTED` (value: `"ACTION_COMPLETED_OFFLINE_HOSTED"`)

* `ACTION_COMPLETED_WIDGET_VERIFIED` (value: `"ACTION_COMPLETED_WIDGET_VERIFIED"`)

* `ACTION_COMPLETED_WIDGET_VERIFIED_API_TOKEN` (value: `"ACTION_COMPLETED_WIDGET_VERIFIED_API_TOKEN"`)

* `ACTION_COMPLETED_WIDGET_VERIFICATION_WAIVED` (value: `"ACTION_COMPLETED_WIDGET_VERIFICATION_WAIVED"`)

* `ACTION_DELEGATED` (value: `"ACTION_DELEGATED"`)

* `ACTION_REPLACED_SIGNER` (value: `"ACTION_REPLACED_SIGNER"`)

* `ACTION_REQUESTED` (value: `"ACTION_REQUESTED"`)

* `CREATED` (value: `"CREATED"`)

* `CREATED_FROM_WIDGET` (value: `"CREATED_FROM_WIDGET"`)

* `CREATED_OFFLINE` (value: `"CREATED_OFFLINE"`)

* `CREATED_VIA_UPLOAD` (value: `"CREATED_VIA_UPLOAD"`)

* `CREATED_VIA_ACROBAT` (value: `"CREATED_VIA_ACROBAT"`)

* `CREATED_VIA_READER` (value: `"CREATED_VIA_READER"`)

* `ACTIVATED` (value: `"ACTIVATED"`)

* `DIGITAL_SIGN_UIDAI_SIGNER_CONSENT` (value: `"DIGITAL_SIGN_UIDAI_SIGNER_CONSENT"`)

* `DIGSIGNED` (value: `"DIGSIGNED"`)

* `DEACTIVATED` (value: `"DEACTIVATED"`)

* `DOCUMENTS_DELETED` (value: `"DOCUMENTS_DELETED"`)

* `DOWNLOADED` (value: `"DOWNLOADED"`)

* `EMAIL_BOUNCED` (value: `"EMAIL_BOUNCED"`)

* `EMAIL_VIEWED` (value: `"EMAIL_VIEWED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `EXPIRED_AUTOMATICALLY` (value: `"EXPIRED_AUTOMATICALLY"`)

* `FAXED_BY_SENDER` (value: `"FAXED_BY_SENDER"`)

* `FAXIN_RECEIVED` (value: `"FAXIN_RECEIVED"`)

* `KBA_AUTHENTICATED` (value: `"KBA_AUTHENTICATED"`)

* `MODIFIED` (value: `"MODIFIED"`)

* `OFFLINE_SYNC` (value: `"OFFLINE_SYNC"`)

* `OTHER` (value: `"OTHER"`)

* `PAID` (value: `"PAID"`)

* `PRESIGNED` (value: `"PRESIGNED"`)

* `RECALLED` (value: `"RECALLED"`)

* `RECALLED_MAX_SIGNING_KBA_ATTEMPTS` (value: `"RECALLED_MAX_SIGNING_KBA_ATTEMPTS"`)

* `RECALLED_MAX_SIGNING_PASSWORD_ATTEMPTS` (value: `"RECALLED_MAX_SIGNING_PASSWORD_ATTEMPTS"`)

* `RECALLED_MAX_SIGNING_PHONE_ATTEMPTS` (value: `"RECALLED_MAX_SIGNING_PHONE_ATTEMPTS"`)

* `REJECTED` (value: `"REJECTED"`)

* `SENDER_CREATED_NEW_REVISION` (value: `"SENDER_CREATED_NEW_REVISION"`)

* `SHARED` (value: `"SHARED"`)

* `SIGNED` (value: `"SIGNED"`)

* `SIGNING_URL_REQUESTED` (value: `"SIGNING_URL_REQUESTED"`)

* `UPLOADED_BY_SENDER` (value: `"UPLOADED_BY_SENDER"`)

* `USER_ACK_AGREEMENT_MODIFIED` (value: `"USER_ACK_AGREEMENT_MODIFIED"`)

* `VAULTED` (value: `"VAULTED"`)

* `WEB_IDENTITY_AUTHENTICATED` (value: `"WEB_IDENTITY_AUTHENTICATED"`)

* `WEB_IDENTITY_SPECIFIED` (value: `"WEB_IDENTITY_SPECIFIED"`)

* `WRITTEN_DOWNLOAD` (value: `"WRITTEN_DOWNLOAD"`)

* `WRITTEN_SIGNED` (value: `"WRITTEN_SIGNED"`)




