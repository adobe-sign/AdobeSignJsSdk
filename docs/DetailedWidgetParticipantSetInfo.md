# SwaggerJsClient.DetailedWidgetParticipantSetInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the participant set. This cannot be changed as part of the PUT call. | [optional] 
**memberInfos** | [**[DetailedParticipantInfo]**](DetailedParticipantInfo.md) | Array of ParticipantInfo objects, containing participant-specific data (e.g. email). All participants in the array belong to the same set | [optional] 
**order** | **Number** | Index indicating sequential signing group (specified for hybrid routing). This cannot be changed as part of the PUT call. | [optional] 
**role** | **String** | Role assumed by all participants in the set (signer, approver etc.). This cannot be changed as part of the PUT call. | [optional] 


<a name="RoleEnum"></a>
## Enum: RoleEnum


* `SIGNER` (value: `"SIGNER"`)

* `SENDER` (value: `"SENDER"`)

* `APPROVER` (value: `"APPROVER"`)

* `ACCEPTOR` (value: `"ACCEPTOR"`)

* `CERTIFIED_RECIPIENT` (value: `"CERTIFIED_RECIPIENT"`)

* `FORM_FILLER` (value: `"FORM_FILLER"`)

* `DELEGATE_TO_SIGNER` (value: `"DELEGATE_TO_SIGNER"`)

* `DELEGATE_TO_APPROVER` (value: `"DELEGATE_TO_APPROVER"`)

* `DELEGATE_TO_ACCEPTOR` (value: `"DELEGATE_TO_ACCEPTOR"`)

* `DELEGATE_TO_CERTIFIED_RECIPIENT` (value: `"DELEGATE_TO_CERTIFIED_RECIPIENT"`)

* `DELEGATE_TO_FORM_FILLER` (value: `"DELEGATE_TO_FORM_FILLER"`)

* `SHARE` (value: `"SHARE"`)




