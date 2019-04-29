# SwaggerJsClient.UserWebhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationDisplayName** | **String** | The display name of the application through which webhook is created | [optional] 
**applicationName** | **String** | The name of the application through which webhook is created | [optional] 
**id** | **String** | The unique identifier of the webhook. Will only be returned in GET request. Can&#39;t be modified in PUT request | [optional] 
**lastModified** | **Date** | Timestamp when the webhook was last updated. Will only be returned in GET request. Can&#39;t be modified in PUT request | [optional] 
**name** | **String** | The name of the webhook | [optional] 
**resourceId** | **String** | Id of the resource type for which you want to create webhook. Provide agreementId if webhook needs to be created for an agreement. Similarly, widgetId if webhook needs to be created for a widget, megaSignId if webhook needs to be created for a megaSign and libraryDocumentId if webhook needs to be created for a library document. Need to specify only if scope is &#39;RESOURCE&#39;. Can&#39;t be modified in PUT request | [optional] 
**resourceType** | **String** | The resource for which you want to create webhook. Need to specify only if scope is &#39;RESOURCE&#39;. Can&#39;t be modified in PUT request. The possible values are AGREEMENT, WIDGET,  MEGASIGN AND LIBRARY_DOCUMENT | [optional] 
**scope** | **String** | Scope of webhook. Can&#39;t be modified in PUT request. The possible values are ACCOUNT, GROUP, USER or RESOURCE | [optional] 
**status** | **String** | Status of the webhook. Determines whether the webhook will be actually triggered. Default: ACTIVE, if ACTIVE, this webhook will receive event requests. If INACTIVE, this webhook will not receive event requests. Can&#39;t provide status in POST/PUT requests. | [optional] 
**webhookSubscriptionEvents** | **[String]** | Determines events for which the webhook is triggered. The possible values are &lt;br&gt; AGREEMENT_CREATED : When an agreement is created &lt;br&gt;, AGREEMENT_ACTION_DELEGATED : When an agreement is delegated &lt;br&gt;, AGREEMENT_RECALLED : When an agreement is recalled &lt;br&gt;, AGREEMENT_REJECTED : When an agreement is rejected &lt;br&gt;, AGREEMENT_EXPIRED : When an agreement expires &lt;br&gt;, AGREEMENT_ACTION_COMPLETED : When an agreement action is completed &lt;br&gt;, AGREEMENT_WORKFLOW_COMPLETED : When an agreement workflow is completed &lt;br&gt;, AGREEMENT_EMAIL_VIEWED : When an agreement&#39;s email is viewed &lt;br&gt;, AGREEMENT_MODIFIED : When an agreement is modified &lt;br&gt;, AGREEMENT_SHARED : When an agreement is shared &lt;br&gt;, AGREEMENT_VAULTED : When an agreement is vaulted &lt;br&gt;, AGREEMENT_ACTION_REQUESTED : When an agreement action is requested &lt;br&gt;, AGREEMENT_ACTION_REPLACED_SIGNER : When signer is replaced for an agreement &lt;br&gt;, AGREEMENT_AUTO_CANCELLED_CONVERSION_PROBLEM : When an agreement is auto-cancelled due to conversion problem &lt;br&gt;, AGREEMENT_DOCUMENTS_DELETED : When an agreement documents are deleted &lt;br&gt;, AGREEMENT_EMAIL_BOUNCED : When an agreement email gets bounced &lt;br&gt;, AGREEMENT_KBA_AUTHENTICATED : When an agreement KBA is authenticated &lt;br&gt;, AGREEMENT_OFFLINE_SYNC : When an agreement is synced offline &lt;br&gt;, AGREEMENT_USER_ACK_AGREEMENT_MODIFIED : User Acknowledgement when an agreement is modified &lt;br&gt;, AGREEMENT_UPLOADED_BY_SENDER : When an agreement is uploaded by sender &lt;br&gt;, AGREEMENT_WEB_IDENTITY_AUTHENTICATED : When an agreement web identity is authenticated &lt;br&gt;, AGREEMENT_ALL : All the supported agreement events for Webhooks &lt;br&gt;, MEGASIGN_CREATED : When a megaSign is created &lt;br&gt;, MEGASIGN_RECALLED : When a megaSign is recalled &lt;br&gt;, MEGASIGN_SHARED : When a megaSign is shared &lt;br&gt;, MEGASIGN_ALL : All the supported megaSign events for Webhooks &lt;br&gt;, WIDGET_CREATED : When a widget is created &lt;br&gt;, WIDGET_MODIFIED : When a widget is modified &lt;br&gt;, WIDGET_SHARED : When a widget is shared &lt;br&gt;, WIDGET_ENABLED : When a widget is enabled &lt;br&gt;, WIDGET_DISABLED : When a widget is disabled &lt;br&gt;, WIDGET_AUTO_CANCELLED_CONVERSION_PROBLEM : When a widget is auto-cancelled due to conversion problem &lt;br&gt;, WIDGET_ALL : All the supported widget events for Webhooks &lt;br&gt;, LIBRARY_DOCUMENT_CREATED : When a library document  is created &lt;br&gt;, LIBRARY_DOCUMENT_AUTO_CANCELLED_CONVERSION_PROBLEM : When a library document is auto-cancelled due to conversion problem &lt;br&gt;, LIBRARY_DOCUMENT_MODIFIED : When a library document is modified &lt;br&gt;, LIBRARY_DOCUMENT_ALL : All the supported library document  events for Webhooks | [optional] 
**webhookUrlInfo** | [**WebhookUrlInfo**](WebhookUrlInfo.md) | Info of webhook url | [optional] 


<a name="ResourceTypeEnum"></a>
## Enum: ResourceTypeEnum


* `AGREEMENT` (value: `"AGREEMENT"`)

* `WIDGET` (value: `"WIDGET"`)

* `MEGASIGN` (value: `"MEGASIGN"`)

* `LIBRARY_DOCUMENT` (value: `"LIBRARY_DOCUMENT"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `ACCOUNT` (value: `"ACCOUNT"`)

* `GROUP` (value: `"GROUP"`)

* `USER` (value: `"USER"`)

* `RESOURCE` (value: `"RESOURCE"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)




<a name="[WebhookSubscriptionEventsEnum]"></a>
## Enum: [WebhookSubscriptionEventsEnum]


* `AGREEMENT_CREATED` (value: `"AGREEMENT_CREATED"`)

* `AGREEMENT_ACTION_DELEGATED` (value: `"AGREEMENT_ACTION_DELEGATED"`)

* `AGREEMENT_RECALLED` (value: `"AGREEMENT_RECALLED"`)

* `AGREEMENT_REJECTED` (value: `"AGREEMENT_REJECTED"`)

* `AGREEMENT_EXPIRED` (value: `"AGREEMENT_EXPIRED"`)

* `AGREEMENT_ACTION_COMPLETED` (value: `"AGREEMENT_ACTION_COMPLETED"`)

* `AGREEMENT_WORKFLOW_COMPLETED` (value: `"AGREEMENT_WORKFLOW_COMPLETED"`)

* `AGREEMENT_EMAIL_VIEWED` (value: `"AGREEMENT_EMAIL_VIEWED"`)

* `AGREEMENT_MODIFIED` (value: `"AGREEMENT_MODIFIED"`)

* `AGREEMENT_SHARED` (value: `"AGREEMENT_SHARED"`)

* `AGREEMENT_VAULTED` (value: `"AGREEMENT_VAULTED"`)

* `AGREEMENT_ACTION_REQUESTED` (value: `"AGREEMENT_ACTION_REQUESTED"`)

* `AGREEMENT_ACTION_REPLACED_SIGNER` (value: `"AGREEMENT_ACTION_REPLACED_SIGNER"`)

* `AGREEMENT_AUTO_CANCELLED_CONVERSION_PROBLEM` (value: `"AGREEMENT_AUTO_CANCELLED_CONVERSION_PROBLEM"`)

* `AGREEMENT_DOCUMENTS_DELETED` (value: `"AGREEMENT_DOCUMENTS_DELETED"`)

* `AGREEMENT_EMAIL_BOUNCED` (value: `"AGREEMENT_EMAIL_BOUNCED"`)

* `AGREEMENT_KBA_AUTHENTICATED` (value: `"AGREEMENT_KBA_AUTHENTICATED"`)

* `AGREEMENT_OFFLINE_SYNC` (value: `"AGREEMENT_OFFLINE_SYNC"`)

* `AGREEMENT_USER_ACK_AGREEMENT_MODIFIED` (value: `"AGREEMENT_USER_ACK_AGREEMENT_MODIFIED"`)

* `AGREEMENT_UPLOADED_BY_SENDER` (value: `"AGREEMENT_UPLOADED_BY_SENDER"`)

* `AGREEMENT_WEB_IDENTITY_AUTHENTICATED` (value: `"AGREEMENT_WEB_IDENTITY_AUTHENTICATED"`)

* `AGREEMENT_ALL` (value: `"AGREEMENT_ALL"`)

* `MEGASIGN_CREATED` (value: `"MEGASIGN_CREATED"`)

* `MEGASIGN_RECALLED` (value: `"MEGASIGN_RECALLED"`)

* `MEGASIGN_SHARED` (value: `"MEGASIGN_SHARED"`)

* `MEGASIGN_ALL` (value: `"MEGASIGN_ALL"`)

* `WIDGET_CREATED` (value: `"WIDGET_CREATED"`)

* `WIDGET_MODIFIED` (value: `"WIDGET_MODIFIED"`)

* `WIDGET_SHARED` (value: `"WIDGET_SHARED"`)

* `WIDGET_ENABLED` (value: `"WIDGET_ENABLED"`)

* `WIDGET_DISABLED` (value: `"WIDGET_DISABLED"`)

* `WIDGET_AUTO_CANCELLED_CONVERSION_PROBLEM` (value: `"WIDGET_AUTO_CANCELLED_CONVERSION_PROBLEM"`)

* `WIDGET_ALL` (value: `"WIDGET_ALL"`)

* `LIBRARY_DOCUMENT_CREATED` (value: `"LIBRARY_DOCUMENT_CREATED"`)

* `LIBRARY_DOCUMENT_AUTO_CANCELLED_CONVERSION_PROBLEM` (value: `"LIBRARY_DOCUMENT_AUTO_CANCELLED_CONVERSION_PROBLEM"`)

* `LIBRARY_DOCUMENT_MODIFIED` (value: `"LIBRARY_DOCUMENT_MODIFIED"`)

* `LIBRARY_DOCUMENT_ALL` (value: `"LIBRARY_DOCUMENT_ALL"`)




