# SwaggerJsClient.FormField

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alignment** | **String** | Alignment of the text. | [optional] 
**assignee** | **String** | Who the field is assigned to.  Either a participant set id, null, NOBODY or PREFILL. | [optional] 
**backgroundColor** | **String** | Background color of the form field in RGB or HEX format | [optional] 
**borderColor** | **String** | Color of the border of the field in RGB or HEX format | [optional] 
**borderStyle** | **String** | Style of the border of the field. | [optional] 
**borderWidth** | **Number** | Width of the border of the field in pixels | [optional] 
**calculated** | **Boolean** | true if this field&#39;s value is calculated from an expression, else false | [optional] 
**conditionalAction** | [**FormFieldConditionalAction**](FormFieldConditionalAction.md) | A predicate (or set of predicates) that determines whether this field is visible and enabled. | [optional] 
**contentType** | **String** | Content Type of the form field. | [optional] 
**defaultValue** | **String** | Default value of the form field | [optional] 
**displayFormat** | **String** | Format of the value of the field to be displayed based on the displayFormatType property. | [optional] 
**displayFormatType** | **String** | Format type of the text field. | [optional] 
**displayLabel** | **String** | Display label attached to the field | [optional] 
**fontColor** | **String** | Font color of the form field in RGB or HEX format | [optional] 
**fontName** | **String** | Font name of the form field | [optional] 
**fontSize** | **Number** | Font size of the form field in points | [optional] 
**hiddenOptions** | **[String]** | Text values which are hidden in a drop down form field | [optional] 
**hyperlink** | [**FormFieldHyperlink**](FormFieldHyperlink.md) | Hyperlink-specific data (e.g. as url, link type) | [optional] 
**inputType** | **String** | Input type of the form field | [optional] 
**locations** | [**[FormFieldLocation]**](FormFieldLocation.md) | All locations in a document where the form field is placed | [optional] 
**masked** | **Boolean** | true if the input entered by the signer has to be masked (like password), false if it shouldn&#39;t be | [optional] 
**maskingText** | **String** | Text to mask the masked form field | [optional] 
**maxLength** | **Number** | Maximum length of the input text field in terms of no. of characters | [optional] 
**maxValue** | **Number** | Upper bound of the number that can be entered by the signer | [optional] 
**minLength** | **Number** | Minimum length of the input text field in terms of no. of characters | [optional] 
**minValue** | **Number** | Lower bound of the number that can be entered by the signer | [optional] 
**name** | **String** | The name of the form field | [optional] 
**origin** | **String** | Origin of Form Field | [optional] 
**radioCheckType** | **String** | The type of radio button (if field is radio button, identified by inputType). | [optional] 
**readOnly** | **Boolean** | true if it is a read-only field, else false | [optional] 
**required** | **Boolean** | true if it is a mandatory field to be filled by the signer, else false | [optional] 
**tooltip** | **String** | Text that appears while hovering over the field | [optional] 
**urlOverridable** | **Boolean** | For widget text fields only - true if the default value may come from the URL, else false | [optional] 
**validation** | **String** | Rule for validating the field value. | [optional] 
**validationData** | **String** | Further data for validating input with regards to the field&#39;s specified format. The contents and interpretation of formatData depends on the value of validation. | [optional] 
**validationErrMsg** | **String** | Error message to be shown to the signer if filled value doesn&#39;t match the validations of the form field | [optional] 
**valueExpression** | **String** | Expression to calculate value of the form field | [optional] 
**visible** | **Boolean** | If set to false, then the form field is hidden.  Otherwise, it is visible. | [optional] 
**visibleOptions** | **[String]** | Text values which are visible in a drop down form field | [optional] 


<a name="AlignmentEnum"></a>
## Enum: AlignmentEnum


* `LEFT` (value: `"LEFT"`)

* `RIGHT` (value: `"RIGHT"`)

* `CENTER` (value: `"CENTER"`)




<a name="BorderStyleEnum"></a>
## Enum: BorderStyleEnum


* `SOLID` (value: `"SOLID"`)

* `DASHED` (value: `"DASHED"`)

* `BEVELED` (value: `"BEVELED"`)

* `INSET` (value: `"INSET"`)

* `UNDERLINE` (value: `"UNDERLINE"`)




<a name="ContentTypeEnum"></a>
## Enum: ContentTypeEnum


* `DATA` (value: `"DATA"`)

* `SIGNATURE_BLOCK` (value: `"SIGNATURE_BLOCK"`)

* `SIGNATURE` (value: `"SIGNATURE"`)

* `SIGNER_NAME` (value: `"SIGNER_NAME"`)

* `SIGNER_FIRST_NAME` (value: `"SIGNER_FIRST_NAME"`)

* `SIGNER_LAST_NAME` (value: `"SIGNER_LAST_NAME"`)

* `SIGNER_INITIALS` (value: `"SIGNER_INITIALS"`)

* `SIGNER_EMAIL` (value: `"SIGNER_EMAIL"`)

* `SIGNER_TITLE` (value: `"SIGNER_TITLE"`)

* `SIGNER_COMPANY` (value: `"SIGNER_COMPANY"`)

* `SIGNATURE_DATE` (value: `"SIGNATURE_DATE"`)

* `AGREEMENT_NAME` (value: `"AGREEMENT_NAME"`)

* `AGREEMENT_MESSAGE` (value: `"AGREEMENT_MESSAGE"`)

* `TRANSACTION_ID` (value: `"TRANSACTION_ID"`)

* `SIGNATURE_STAMP` (value: `"SIGNATURE_STAMP"`)

* `PAYMENT` (value: `"PAYMENT"`)

* `DIGITAL_SIGNATURE` (value: `"DIGITAL_SIGNATURE"`)




<a name="DisplayFormatTypeEnum"></a>
## Enum: DisplayFormatTypeEnum


* `DEFAULT` (value: `"DEFAULT"`)

* `DATE` (value: `"DATE"`)

* `NUMBER` (value: `"NUMBER"`)




<a name="InputTypeEnum"></a>
## Enum: InputTypeEnum


* `TEXT_FIELD` (value: `"TEXT_FIELD"`)

* `MULTILINE` (value: `"MULTILINE"`)

* `PASSWORD` (value: `"PASSWORD"`)

* `RADIO` (value: `"RADIO"`)

* `CHECKBOX` (value: `"CHECKBOX"`)

* `DROP_DOWN` (value: `"DROP_DOWN"`)

* `LISTBOX` (value: `"LISTBOX"`)

* `SIGNATURE` (value: `"SIGNATURE"`)

* `PDF_SIGNATURE` (value: `"PDF_SIGNATURE"`)

* `BUTTON` (value: `"BUTTON"`)

* `BLOCK` (value: `"BLOCK"`)

* `FILE_CHOOSER` (value: `"FILE_CHOOSER"`)

* `COMB` (value: `"COMB"`)

* `INLINE_IMAGE` (value: `"INLINE_IMAGE"`)

* `UNSUPPORTED` (value: `"UNSUPPORTED"`)




<a name="OriginEnum"></a>
## Enum: OriginEnum


* `AUTHORED` (value: `"AUTHORED"`)

* `GENERATED` (value: `"GENERATED"`)

* `IMPORTED` (value: `"IMPORTED"`)




<a name="RadioCheckTypeEnum"></a>
## Enum: RadioCheckTypeEnum


* `CIRCLE` (value: `"CIRCLE"`)

* `CHECK` (value: `"CHECK"`)

* `CROSS` (value: `"CROSS"`)

* `DIAMOND` (value: `"DIAMOND"`)

* `SQUARE` (value: `"SQUARE"`)

* `STAR` (value: `"STAR"`)




<a name="ValidationEnum"></a>
## Enum: ValidationEnum


* `NONE` (value: `"NONE"`)

* `STRING` (value: `"STRING"`)

* `NUMBER` (value: `"NUMBER"`)

* `DATE` (value: `"DATE"`)

* `DATE_CUSTOM` (value: `"DATE_CUSTOM"`)

* `TIME` (value: `"TIME"`)

* `ZIP` (value: `"ZIP"`)

* `PHONE` (value: `"PHONE"`)

* `SOCIAL_SEC` (value: `"SOCIAL_SEC"`)

* `EMAIL` (value: `"EMAIL"`)

* `CURRENCY` (value: `"CURRENCY"`)

* `PERCENT` (value: `"PERCENT"`)

* `FORMULA` (value: `"FORMULA"`)

* `CUSTOM` (value: `"CUSTOM"`)

* `XFA_PICTURE` (value: `"XFA_PICTURE"`)




