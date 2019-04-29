# SwaggerJsClient.MegaSign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayDate** | **Date** | The display date for the MegaSign parent agreement. Format would be yyyy-MM-dd&#39;T&#39;HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time | [optional] 
**id** | **String** | The unique identifier of the MegaSign parent agreement | [optional] 
**esign** | **Boolean** | True, if the signature type of the MegaSign parent agreement is ESIGN. False, if the signature type of the MegaSign parent agreement is WRITTEN | [optional] 
**name** | **String** | Name of the MegaSign parent agreement | [optional] 
**status** | **String** | Current status of the MegaSign parent agreement from the perspective of the user | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `WAITING_FOR_MY_SIGNATURE` (value: `"WAITING_FOR_MY_SIGNATURE"`)

* `IN_PROCESS` (value: `"IN_PROCESS"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `ARCHIVED` (value: `"ARCHIVED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `WAITING_FOR_AUTHORING` (value: `"WAITING_FOR_AUTHORING"`)

* `WAITING_FOR_PREFILL` (value: `"WAITING_FOR_PREFILL"`)




