# SwaggerJsClient.DetailedParticipantSetInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the participant set. This cannot be changed as part of the PUT call. | [optional] 
**memberInfos** | [**[DetailedParticipantInfo]**](DetailedParticipantInfo.md) | Array of ParticipantInfo objects, containing participant-specific data (e.g. email). All participants in the array belong to the same set | [optional] 
**name** | **String** | Name of ParticipantSet (it can be empty, but needs not to be unique in a single agreement). Maximum no of characters in participant set name is restricted to 255. This cannot be changed as part of the PUT call. | [optional] 
**order** | **Number** | Index indicating sequential signing group (specified for hybrid routing). This cannot be changed as part of the PUT call. | [optional] 
**privateMessage** | **String** | Participant set&#39;s private message - all participants in the set will receive the same message. This cannot be changed as part of the PUT call. | [optional] 
**role** | **String** | Role assumed by all participants in the set (signer, approver etc.). This cannot be changed as part of the PUT call. | [optional] 
**status** | **String** | The agreement status with respect to the participant set. This cannot be changed as part of the PUT call. | [optional] 


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




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `CANCELLED` (value: `"CANCELLED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `NOT_YET_VISIBLE` (value: `"NOT_YET_VISIBLE"`)

* `WAITING_FOR_OTHERS` (value: `"WAITING_FOR_OTHERS"`)

* `WAITING_FOR_MY_APPROVAL` (value: `"WAITING_FOR_MY_APPROVAL"`)

* `WAITING_FOR_AUTHORING` (value: `"WAITING_FOR_AUTHORING"`)

* `WAITING_FOR_MY_ACKNOWLEDGEMENT` (value: `"WAITING_FOR_MY_ACKNOWLEDGEMENT"`)

* `WAITING_FOR_MY_ACCEPTANCE` (value: `"WAITING_FOR_MY_ACCEPTANCE"`)

* `WAITING_FOR_MY_FORM_FILLING` (value: `"WAITING_FOR_MY_FORM_FILLING"`)

* `WAITING_FOR_MY_DELEGATION` (value: `"WAITING_FOR_MY_DELEGATION"`)

* `WAITING_FOR_MY_SIGNATURE` (value: `"WAITING_FOR_MY_SIGNATURE"`)

* `WAITING_FOR_MY_VERIFICATION` (value: `"WAITING_FOR_MY_VERIFICATION"`)

* `WAITING_FOR_PREFILL` (value: `"WAITING_FOR_PREFILL"`)




