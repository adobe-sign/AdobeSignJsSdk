# SwaggerJsClient.WidgetAdditionalParticipationSetInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberInfos** | [**[ParticipantSetMemberInfo]**](ParticipantSetMemberInfo.md) | Array of ParticipantInfo objects, containing participant-specific data (email, e.g.) for all the additional participants in the widget | [optional] 
**order** | **Number** | Index indicating position at which signing group needs to sign. Additional participant to sign at first place is assigned a index of 1. Widget participant should not have any order specified. Widget participant should not have any email address and and can not have phone authentication applied. Different signingOrder specified in input should form a valid consecutive increasing sequence of integers. Otherwise signingOrder will be considered invalid | [optional] 
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




