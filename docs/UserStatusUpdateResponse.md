# SwaggerJsClient.UserStatusUpdateResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The result of the attempt to activate or deactivate the user | [optional] 
**message** | **String** | String result message if there was no error | [optional] 
**state** | **String** | A status value showing the result of this operation | [optional] 


<a name="CodeEnum"></a>
## Enum: CodeEnum


* `ALREADY_ACTIVE` (value: `"ALREADY_ACTIVE"`)

* `ALREADY_INACTIVE` (value: `"ALREADY_INACTIVE"`)

* `OK` (value: `"OK"`)

* `RESET_PASSWORD_WORKFLOW_INITIATED` (value: `"RESET_PASSWORD_WORKFLOW_INITIATED"`)

* `SET_PASSWORD_WORKFLOW_INITIATED` (value: `"SET_PASSWORD_WORKFLOW_INITIATED"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `CREATED` (value: `"CREATED"`)

* `PENDING` (value: `"PENDING"`)

* `UNVERIFIED` (value: `"UNVERIFIED"`)




