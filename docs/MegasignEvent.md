# SwaggerJsClient.MegasignEvent

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
**type** | **String** | Type of MegaSign event | [optional] 
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


* `AUTO_CANCELLED_CONVERSION_PROBLEM` (value: `"AUTO_CANCELLED_CONVERSION_PROBLEM"`)

* `CREATED` (value: `"CREATED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `EMAIL_BOUNCED` (value: `"EMAIL_BOUNCED"`)

* `RECALLED` (value: `"RECALLED"`)

* `SHARED` (value: `"SHARED"`)

* `VAULTED` (value: `"VAULTED"`)




