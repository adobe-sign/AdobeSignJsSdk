# SwaggerJsClient.MegaSignCreationInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ccs** | [**[MegaSignCcInfo]**](MegaSignCcInfo.md) | A list of one or more CCs that will be copied in the megasign transaction. The CCs will each receive an email at the beginning of the transaction and also when the final document is signed. The email addresses will also receive a copy of the document, attached as a PDF file  | [optional] 
**childAgreementsInfo** | [**ChildAgreementsInfo**](ChildAgreementsInfo.md) | Info corresponding to each child agreement of the megaSign  | [optional] 
**createdDate** | **Date** | Date when megasign was created. Format would be yyyy-MM-dd&#39;T&#39;HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time | [optional] 
**expirationTime** | **Date** | Time after which Agreement expires and needs to be signed before it. Format should be yyyy-MM-dd&#39;T&#39;HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time. Should not be provided in offline agreement creation. | [optional] 
**externalId** | [**ExternalId**](ExternalId.md) | An arbitrary value from your system, which can be specified at sending time and then later returned or queried | [optional] 
**fileInfos** | [**[FileInfo]**](FileInfo.md) | A list of one or more files (or references to files) that will be sent out for signature. If more than one file is provided, they will be combined into one PDF before being sent out. Note: Only one of the four parameters in every FileInfo object must be specified | [optional] 
**firstReminderDelay** | **Number** | Integer which specifies the delay in hours before sending the first reminder.&lt;br&gt;This is an optional field. The minimum value allowed is 1 hour and the maximum value can’t be more than the difference of agreement creation and expiry time of the agreement in hours.&lt;br&gt;If this is not specified but the reminder frequency is specified, then the first reminder will be sent based on frequency.&lt;br&gt;i.e. if the reminder is created with frequency specified as daily, the firstReminderDelay will be 24 hours. Cannot be updated in a PUT | [optional] 
**id** | **String** | The unique identifier of megasign  | [optional] 
**locale** | **String** | The locale associated with this agreement - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the agreement sender | [optional] 
**message** | **String** | An optional message to the participants, describing what is being sent or why their signature is required | [optional] 
**name** | **String** | The name of the agreement that will be used to identify it, in emails, website and other places | [optional] 
**postSignOption** | [**PostSignOption**](PostSignOption.md) | URL and associated properties for the success page the user will be taken to after completing the signing process | [optional] 
**reminderFrequency** | **String** | Optional parameter that sets how often you want to send reminders to the participants. If it is not specified, the default frequency set for the account will be used | [optional] 
**securityOption** | [**MegaSignSecurityOption**](MegaSignSecurityOption.md) | Optional security parameters for the megasign | [optional] 
**senderEmail** | **String** | Email of agreement sender. Only provided in GET. Can not be provided in POST/PUT request. If provided in POST/PUT, it will be ignored | [optional] 
**signatureType** | **String** | Specifies the type of signature you would like to request - written or e-signature. The possible values are &lt;br&gt; ESIGN : Agreement needs to be signed electronically &lt;br&gt;, WRITTEN : Agreement will be signed using handwritten signature and signed document will be uploaded into the system | [optional] 
**state** | **String** | State of the Megasign | [optional] 
**status** | **String** | Status of the Megasign | [optional] 
**vaultingInfo** | [**VaultingInfo**](VaultingInfo.md) | Vaulting properties that allows Adobe Sign to securely store documents with a vault provider | [optional] 


<a name="ReminderFrequencyEnum"></a>
## Enum: ReminderFrequencyEnum


* `DAILY_UNTIL_SIGNED` (value: `"DAILY_UNTIL_SIGNED"`)

* `WEEKDAILY_UNTIL_SIGNED` (value: `"WEEKDAILY_UNTIL_SIGNED"`)

* `EVERY_OTHER_DAY_UNTIL_SIGNED` (value: `"EVERY_OTHER_DAY_UNTIL_SIGNED"`)

* `EVERY_THIRD_DAY_UNTIL_SIGNED` (value: `"EVERY_THIRD_DAY_UNTIL_SIGNED"`)

* `EVERY_FIFTH_DAY_UNTIL_SIGNED` (value: `"EVERY_FIFTH_DAY_UNTIL_SIGNED"`)

* `WEEKLY_UNTIL_SIGNED` (value: `"WEEKLY_UNTIL_SIGNED"`)




<a name="SignatureTypeEnum"></a>
## Enum: SignatureTypeEnum


* `ESIGN` (value: `"ESIGN"`)

* `WRITTEN` (value: `"WRITTEN"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `PROCESS` (value: `"IN_PROCESS"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `AUTHORING` (value: `"AUTHORING"`)

* `IN_PROCESS` (value: `"IN_PROCESS"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `PREFILL` (value: `"PREFILL"`)




