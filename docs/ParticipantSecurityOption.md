# SwaggerJsClient.ParticipantSecurityOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationMethod** | **String** | The authentication method for the participants to have access to view and sign the document. When replacing a participant that has PASSWORD or PHONE authentication specified, you must supply a password or phone number for the new participant, and you cannot change the authentication method | [optional] 
**password** | **String** | The password required for the participant to view and sign the document. Note that AdobeSign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. The password will not be returned in GET call. When replacing a participant that has PASSWORD authentication specified, you must supply a password for the new participant. | [optional] 
**phoneInfo** | [**PhoneInfo**](PhoneInfo.md) | The phoneInfo required for the participant to view and sign the document | [optional] 


<a name="AuthenticationMethodEnum"></a>
## Enum: AuthenticationMethodEnum


* `NONE` (value: `"NONE"`)

* `PASSWORD` (value: `"PASSWORD"`)

* `PHONE` (value: `"PHONE"`)

* `KBA` (value: `"KBA"`)

* `WEB_IDENTITY` (value: `"WEB_IDENTITY"`)

* `ADOBE_SIGN` (value: `"ADOBE_SIGN"`)

* `GOV_ID` (value: `"GOV_ID"`)




