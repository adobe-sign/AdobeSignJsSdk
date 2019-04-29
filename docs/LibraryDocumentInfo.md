# SwaggerJsClient.LibraryDocumentInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdDate** | **Date** | Date when library document was created. It will be ignored in POST/PUT requests. Format would be yyyy-MM-dd&#39;T&#39;HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time | [optional] 
**creatorEmail** | **String** | Email address of the library document creator. It will be ignored in POST/PUT requests | [optional] 
**creatorName** | **String** | Name of the library document creator.  It will be ignored in POST/PUT requests | [optional] 
**fileInfos** | [**[FileInfo]**](FileInfo.md) | A list of one or more files (or references to files) that will be used to create the template. If more than one file is provided, they will be combined into one PDF. Note: Only a single parameter in every FileInfo object must be specified | [optional] 
**id** | **String** | The unique identifier that is used to refer to the library template. It will be ignored in POST requests | [optional] 
**modifiedDate** | **Date** | Date when library document was last modified. It will be ignored in POST/PUT requests. Format would be yyyy-MM-dd&#39;T&#39;HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time | [optional] 
**name** | **String** | The name of the library template that will be used to identify it, in emails and on the website | [optional] 
**sharingMode** | **String** | Specifies who should have access to this library document. GLOBAL sharing mode is not applicable in POST/PUT requests | [optional] 
**state** | **String** | State of the library document. | [optional] 
**status** | **String** | Status of the library document | [optional] 
**templateTypes** | **[String]** | A list of one or more library template types | [optional] 


<a name="SharingModeEnum"></a>
## Enum: SharingModeEnum


* `USER` (value: `"USER"`)

* `GROUP` (value: `"GROUP"`)

* `ACCOUNT` (value: `"ACCOUNT"`)

* `GLOBAL` (value: `"GLOBAL"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `AUTHORING` (value: `"AUTHORING"`)

* `ACTIVE` (value: `"ACTIVE"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `AUTHORING` (value: `"AUTHORING"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `REMOVED` (value: `"REMOVED"`)




<a name="[TemplateTypesEnum]"></a>
## Enum: [TemplateTypesEnum]


* `DOCUMENT` (value: `"DOCUMENT"`)

* `FORM_FIELD_LAYER` (value: `"FORM_FIELD_LAYER"`)




