# SwaggerJsClient.FormFieldConditionalAction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Action to show/hide the form field is to be taken on the basis of evaluation of conditions. | [optional] 
**anyOrAll** | **String** | It indicates if any one of the conditions or all of them have to be true. | [optional] 
**predicates** | [**[FormFieldConditionPredicate]**](FormFieldConditionPredicate.md) | The predicates to be evaluated in order to determine whether this condition is true | [optional] 


<a name="ActionEnum"></a>
## Enum: ActionEnum


* `SHOW` (value: `"SHOW"`)

* `HIDE` (value: `"HIDE"`)

* `DISABLE` (value: `"DISABLE"`)

* `ENABLE` (value: `"ENABLE"`)




<a name="AnyOrAllEnum"></a>
## Enum: AnyOrAllEnum


* `ALL` (value: `"ALL"`)

* `ANY` (value: `"ANY"`)




