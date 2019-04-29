# SwaggerJsClient.UserWorkflow

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **Date** | The date on which the workflow was created. Format would be yyyy-MM-dd&#39;T&#39;HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time | [optional] 
**description** | **String** | Description provided for this workflow at the time of its creation | [optional] 
**displayName** | **String** | The display name of the workflow. | [optional] 
**id** | **String** | The unique identifier of a workflow | [optional] 
**name** | **String** | The name of the workflow. | [optional] 
**scope** | **String** | The workflow scope (ACCOUNT or GROUP or OTHER) | [optional] 
**scopeId** | **String** | Identifier of scope. Currently it is applicable for scope GROUP only and the value will be groupId. | [optional] 
**status** | **String** | The workflow status (ACTIVE or DRAFT or INACTIVE or OTHER) | [optional] 


<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `ACCOUNT` (value: `"ACCOUNT"`)

* `GROUP` (value: `"GROUP"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `DRAFT` (value: `"DRAFT"`)

* `HIDDEN` (value: `"HIDDEN"`)




