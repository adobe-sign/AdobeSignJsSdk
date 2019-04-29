# SwaggerJsClient.MegaSignChildAgreement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayDate** | **Date** | The display date for the agreement. Format would be yyyy-MM-dd&#39;T&#39;HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time | [optional] 
**id** | **String** | The unique identifier of the agreement.If provided in POST, it will simply be ignored | [optional] 
**esign** | **Boolean** | True if this is an e-sign document | [optional] 
**name** | **String** | Name of the Agreement | [optional] 
**status** | **String** | This is a server generated attribute which provides the detailed status of an agreement with respect to the apiCaller | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `WAITING_FOR_MY_SIGNATURE` (value: `"WAITING_FOR_MY_SIGNATURE"`)

* `WAITING_FOR_MY_APPROVAL` (value: `"WAITING_FOR_MY_APPROVAL"`)

* `WAITING_FOR_MY_DELEGATION` (value: `"WAITING_FOR_MY_DELEGATION"`)

* `WAITING_FOR_MY_ACKNOWLEDGEMENT` (value: `"WAITING_FOR_MY_ACKNOWLEDGEMENT"`)

* `WAITING_FOR_MY_ACCEPTANCE` (value: `"WAITING_FOR_MY_ACCEPTANCE"`)

* `WAITING_FOR_MY_FORM_FILLING` (value: `"WAITING_FOR_MY_FORM_FILLING"`)

* `OUT_FOR_SIGNATURE` (value: `"OUT_FOR_SIGNATURE"`)

* `OUT_FOR_APPROVAL` (value: `"OUT_FOR_APPROVAL"`)

* `OUT_FOR_DELIVERY` (value: `"OUT_FOR_DELIVERY"`)

* `OUT_FOR_ACCEPTANCE` (value: `"OUT_FOR_ACCEPTANCE"`)

* `OUT_FOR_FORM_FILLING` (value: `"OUT_FOR_FORM_FILLING"`)

* `SIGNED` (value: `"SIGNED"`)

* `APPROVED` (value: `"APPROVED"`)

* `FORM_FILLED` (value: `"FORM_FILLED"`)

* `DELIVERED` (value: `"DELIVERED"`)

* `ACCEPTED` (value: `"ACCEPTED"`)

* `ARCHIVED` (value: `"ARCHIVED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `WAITING_FOR_AUTHORING` (value: `"WAITING_FOR_AUTHORING"`)

* `WAITING_FOR_PREFILL` (value: `"WAITING_FOR_PREFILL"`)

* `DRAFT` (value: `"DRAFT"`)

* `DOCUMENTS_NOT_YET_PROCESSED` (value: `"DOCUMENTS_NOT_YET_PROCESSED"`)

* `WAITING_FOR_MY_VERIFICATION` (value: `"WAITING_FOR_MY_VERIFICATION"`)

* `WAITING_FOR_VERIFICATION` (value: `"WAITING_FOR_VERIFICATION"`)




