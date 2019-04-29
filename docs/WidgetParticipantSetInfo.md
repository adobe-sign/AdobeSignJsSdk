# SwaggerJsClient.WidgetParticipantSetInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberInfos** | [**[ParticipantSetMemberInfo]**](ParticipantSetMemberInfo.md) | Array of ParticipantInfo objects, containing participant - specific data (email, e.g.). All participants in the array belong to the same set. Currently we are supporting only one member in the set. Since the email of the widget signer is unknown at the time of widget creation, the email should be left empty and its optional security options should be provided.  | [optional] 
**role** | **String** | Role assumed by all participants in the set (signer, approver, etc.) Widget First Participant will only have roles - Signer, Approver, Acceptor and Form Filler | [optional] 


<a name="RoleEnum"></a>
## Enum: RoleEnum


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




