# SwaggerJsClient.MegaSignSecurityOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalAuthenticationMethod** | **String** | The authentication method for the participants to have access to view and sign the document. | [optional] 
**externalPassword** | **String** | The secondary password that will be used to protect signing the document for internal signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for internal signers or all signers | [optional] 
**internalAuthenticationMethod** | **String** | The authentication method for the participants to have access to view and sign the document. | [optional] 
**internalPassword** | **String** | The secondary password that will be used to protect signing the document for external signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for external signers or all signers | [optional] 
**openPassword** | **String** | The secondary password that will be used to secure the PDF document. Note that AdobeSign will never show this password to anyone, so you will need to separately communicate it to any relevant parties | [optional] 


<a name="ExternalAuthenticationMethodEnum"></a>
## Enum: ExternalAuthenticationMethodEnum


* `NONE` (value: `"NONE"`)

* `WEB_IDENTITY` (value: `"WEB_IDENTITY"`)

* `KBA` (value: `"KBA"`)

* `PASSWORD` (value: `"PASSWORD"`)




<a name="InternalAuthenticationMethodEnum"></a>
## Enum: InternalAuthenticationMethodEnum


* `NONE` (value: `"NONE"`)

* `WEB_IDENTITY` (value: `"WEB_IDENTITY"`)

* `KBA` (value: `"KBA"`)

* `PASSWORD` (value: `"PASSWORD"`)




