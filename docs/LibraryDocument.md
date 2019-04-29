# SwaggerJsClient.LibraryDocument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creatorEmail** | **String** | Email address of the library document creator. It will be ignored in POST/PUT requests | [optional] 
**id** | **String** | The unique identifier that is used to refer to the library template | [optional] 
**hidden** | **Boolean** | True if Library Document is hidden | [optional] 
**modifiedDate** | **Date** | The date on which the library document was last modified. Format would be yyyy-MM-dd&#39;T&#39;HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time | [optional] 
**name** | **String** | The name of the library document | [optional] 
**sharingMode** | **String** | Specifies who should have access to this library document. GLOBAL sharing mode is not applicable in POST/PUT requests | [optional] 
**status** | **String** | Status of the library document | [optional] 
**templateTypes** | **[String]** | A list of one or more library template types | [optional] 


<a name="SharingModeEnum"></a>
## Enum: SharingModeEnum


* `USER` (value: `"USER"`)

* `GROUP` (value: `"GROUP"`)

* `ACCOUNT` (value: `"ACCOUNT"`)

* `GLOBAL` (value: `"GLOBAL"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `AUTHORING` (value: `"AUTHORING"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `REMOVED` (value: `"REMOVED"`)




<a name="[TemplateTypesEnum]"></a>
## Enum: [TemplateTypesEnum]


* `DOCUMENT` (value: `"DOCUMENT"`)

* `FORM_FIELD_LAYER` (value: `"FORM_FIELD_LAYER"`)




