/**
*  Copyright 2019 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*
**/


/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/webhooks/WebhookUrlInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebhookUrlInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.UserWebhook = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.WebhookUrlInfo);
  }
}(this, function(ApiClient, WebhookUrlInfo) {
  'use strict';




  /**
   * The UserWebhook model module.
   * @module model/webhooks/UserWebhook
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>UserWebhook</code>.
   * @alias module:model/webhooks/UserWebhook
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>UserWebhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/webhooks/UserWebhook} obj Optional instance to populate.
   * @return {module:model/webhooks/UserWebhook} The populated <code>UserWebhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applicationDisplayName')) {
        obj['applicationDisplayName'] = ApiClient.convertToType(data['applicationDisplayName'], 'String');
      }
      if (data.hasOwnProperty('applicationName')) {
        obj['applicationName'] = ApiClient.convertToType(data['applicationName'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('resourceId')) {
        obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'String');
      }
      if (data.hasOwnProperty('resourceType')) {
        obj['resourceType'] = ApiClient.convertToType(data['resourceType'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('webhookSubscriptionEvents')) {
        obj['webhookSubscriptionEvents'] = ApiClient.convertToType(data['webhookSubscriptionEvents'], ['String']);
      }
      if (data.hasOwnProperty('webhookUrlInfo')) {
        obj['webhookUrlInfo'] = WebhookUrlInfo.constructFromObject(data['webhookUrlInfo']);
      }
    }
    return obj;
  }

  /**
   * The display name of the application through which webhook is created
   * @member {String} applicationDisplayName
   */
  exports.prototype['applicationDisplayName'] = undefined;
  /**
   * The name of the application through which webhook is created
   * @member {String} applicationName
   */
  exports.prototype['applicationName'] = undefined;
  /**
   * The unique identifier of the webhook. Will only be returned in GET request. Can't be modified in PUT request
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Timestamp when the webhook was last updated. Will only be returned in GET request. Can't be modified in PUT request
   * @member {Date} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * The name of the webhook
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Id of the resource type for which you want to create webhook. Provide agreementId if webhook needs to be created for an agreement. Similarly, widgetId if webhook needs to be created for a widget, megaSignId if webhook needs to be created for a megaSign and libraryDocumentId if webhook needs to be created for a library document. Need to specify only if scope is 'RESOURCE'. Can't be modified in PUT request
   * @member {String} resourceId
   */
  exports.prototype['resourceId'] = undefined;
  /**
   * The resource for which you want to create webhook. Need to specify only if scope is 'RESOURCE'. Can't be modified in PUT request. The possible values are AGREEMENT, WIDGET,  MEGASIGN AND LIBRARY_DOCUMENT
   * @member {module:model/webhooks/UserWebhook.ResourceTypeEnum} resourceType
   */
  exports.prototype['resourceType'] = undefined;
  /**
   * Scope of webhook. Can't be modified in PUT request. The possible values are ACCOUNT, GROUP, USER or RESOURCE
   * @member {module:model/webhooks/UserWebhook.ScopeEnum} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * Status of the webhook. Determines whether the webhook will be actually triggered. Default: ACTIVE, if ACTIVE, this webhook will receive event requests. If INACTIVE, this webhook will not receive event requests. Can't provide status in POST/PUT requests.
   * @member {module:model/webhooks/UserWebhook.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Determines events for which the webhook is triggered. The possible values are <br> AGREEMENT_CREATED : When an agreement is created <br>, AGREEMENT_ACTION_DELEGATED : When an agreement is delegated <br>, AGREEMENT_RECALLED : When an agreement is recalled <br>, AGREEMENT_REJECTED : When an agreement is rejected <br>, AGREEMENT_EXPIRED : When an agreement expires <br>, AGREEMENT_ACTION_COMPLETED : When an agreement action is completed <br>, AGREEMENT_WORKFLOW_COMPLETED : When an agreement workflow is completed <br>, AGREEMENT_EMAIL_VIEWED : When an agreement's email is viewed <br>, AGREEMENT_MODIFIED : When an agreement is modified <br>, AGREEMENT_SHARED : When an agreement is shared <br>, AGREEMENT_VAULTED : When an agreement is vaulted <br>, AGREEMENT_ACTION_REQUESTED : When an agreement action is requested <br>, AGREEMENT_ACTION_REPLACED_SIGNER : When signer is replaced for an agreement <br>, AGREEMENT_AUTO_CANCELLED_CONVERSION_PROBLEM : When an agreement is auto-cancelled due to conversion problem <br>, AGREEMENT_DOCUMENTS_DELETED : When an agreement documents are deleted <br>, AGREEMENT_EMAIL_BOUNCED : When an agreement email gets bounced <br>, AGREEMENT_KBA_AUTHENTICATED : When an agreement KBA is authenticated <br>, AGREEMENT_OFFLINE_SYNC : When an agreement is synced offline <br>, AGREEMENT_USER_ACK_AGREEMENT_MODIFIED : User Acknowledgement when an agreement is modified <br>, AGREEMENT_UPLOADED_BY_SENDER : When an agreement is uploaded by sender <br>, AGREEMENT_WEB_IDENTITY_AUTHENTICATED : When an agreement web identity is authenticated <br>, AGREEMENT_ALL : All the supported agreement events for Webhooks <br>, MEGASIGN_CREATED : When a megaSign is created <br>, MEGASIGN_RECALLED : When a megaSign is recalled <br>, MEGASIGN_SHARED : When a megaSign is shared <br>, MEGASIGN_ALL : All the supported megaSign events for Webhooks <br>, WIDGET_CREATED : When a widget is created <br>, WIDGET_MODIFIED : When a widget is modified <br>, WIDGET_SHARED : When a widget is shared <br>, WIDGET_ENABLED : When a widget is enabled <br>, WIDGET_DISABLED : When a widget is disabled <br>, WIDGET_AUTO_CANCELLED_CONVERSION_PROBLEM : When a widget is auto-cancelled due to conversion problem <br>, WIDGET_ALL : All the supported widget events for Webhooks <br>, LIBRARY_DOCUMENT_CREATED : When a library document  is created <br>, LIBRARY_DOCUMENT_AUTO_CANCELLED_CONVERSION_PROBLEM : When a library document is auto-cancelled due to conversion problem <br>, LIBRARY_DOCUMENT_MODIFIED : When a library document is modified <br>, LIBRARY_DOCUMENT_ALL : All the supported library document  events for Webhooks
   * @member {Array.<module:model/webhooks/UserWebhook.WebhookSubscriptionEventsEnum>} webhookSubscriptionEvents
   */
  exports.prototype['webhookSubscriptionEvents'] = undefined;
  /**
   * Info of webhook url
   * @member {module:model/webhooks/WebhookUrlInfo} webhookUrlInfo
   */
  exports.prototype['webhookUrlInfo'] = undefined;


  /**
   * Allowed values for the <code>resourceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResourceTypeEnum = {
    /**
     * value: "AGREEMENT"
     * @const
     */
    "AGREEMENT": "AGREEMENT",
    /**
     * value: "WIDGET"
     * @const
     */
    "WIDGET": "WIDGET",
    /**
     * value: "MEGASIGN"
     * @const
     */
    "MEGASIGN": "MEGASIGN",
    /**
     * value: "LIBRARY_DOCUMENT"
     * @const
     */
    "LIBRARY_DOCUMENT": "LIBRARY_DOCUMENT"  };

  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "ACCOUNT"
     * @const
     */
    "ACCOUNT": "ACCOUNT",
    /**
     * value: "GROUP"
     * @const
     */
    "GROUP": "GROUP",
    /**
     * value: "USER"
     * @const
     */
    "USER": "USER",
    /**
     * value: "RESOURCE"
     * @const
     */
    "RESOURCE": "RESOURCE"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE"  };

  /**
   * Allowed values for the <code>webhookSubscriptionEvents</code> property.
   * @enum {String}
   * @readonly
   */
  exports.WebhookSubscriptionEventsEnum = {
    /**
     * value: "AGREEMENT_CREATED"
     * @const
     */
    "AGREEMENT_CREATED": "AGREEMENT_CREATED",
    /**
     * value: "AGREEMENT_ACTION_DELEGATED"
     * @const
     */
    "AGREEMENT_ACTION_DELEGATED": "AGREEMENT_ACTION_DELEGATED",
    /**
     * value: "AGREEMENT_RECALLED"
     * @const
     */
    "AGREEMENT_RECALLED": "AGREEMENT_RECALLED",
    /**
     * value: "AGREEMENT_REJECTED"
     * @const
     */
    "AGREEMENT_REJECTED": "AGREEMENT_REJECTED",
    /**
     * value: "AGREEMENT_EXPIRED"
     * @const
     */
    "AGREEMENT_EXPIRED": "AGREEMENT_EXPIRED",
    /**
     * value: "AGREEMENT_ACTION_COMPLETED"
     * @const
     */
    "AGREEMENT_ACTION_COMPLETED": "AGREEMENT_ACTION_COMPLETED",
    /**
     * value: "AGREEMENT_WORKFLOW_COMPLETED"
     * @const
     */
    "AGREEMENT_WORKFLOW_COMPLETED": "AGREEMENT_WORKFLOW_COMPLETED",
    /**
     * value: "AGREEMENT_EMAIL_VIEWED"
     * @const
     */
    "AGREEMENT_EMAIL_VIEWED": "AGREEMENT_EMAIL_VIEWED",
    /**
     * value: "AGREEMENT_MODIFIED"
     * @const
     */
    "AGREEMENT_MODIFIED": "AGREEMENT_MODIFIED",
    /**
     * value: "AGREEMENT_SHARED"
     * @const
     */
    "AGREEMENT_SHARED": "AGREEMENT_SHARED",
    /**
     * value: "AGREEMENT_VAULTED"
     * @const
     */
    "AGREEMENT_VAULTED": "AGREEMENT_VAULTED",
    /**
     * value: "AGREEMENT_ACTION_REQUESTED"
     * @const
     */
    "AGREEMENT_ACTION_REQUESTED": "AGREEMENT_ACTION_REQUESTED",
    /**
     * value: "AGREEMENT_ACTION_REPLACED_SIGNER"
     * @const
     */
    "AGREEMENT_ACTION_REPLACED_SIGNER": "AGREEMENT_ACTION_REPLACED_SIGNER",
    /**
     * value: "AGREEMENT_AUTO_CANCELLED_CONVERSION_PROBLEM"
     * @const
     */
    "AGREEMENT_AUTO_CANCELLED_CONVERSION_PROBLEM": "AGREEMENT_AUTO_CANCELLED_CONVERSION_PROBLEM",
    /**
     * value: "AGREEMENT_DOCUMENTS_DELETED"
     * @const
     */
    "AGREEMENT_DOCUMENTS_DELETED": "AGREEMENT_DOCUMENTS_DELETED",
    /**
     * value: "AGREEMENT_EMAIL_BOUNCED"
     * @const
     */
    "AGREEMENT_EMAIL_BOUNCED": "AGREEMENT_EMAIL_BOUNCED",
    /**
     * value: "AGREEMENT_KBA_AUTHENTICATED"
     * @const
     */
    "AGREEMENT_KBA_AUTHENTICATED": "AGREEMENT_KBA_AUTHENTICATED",
    /**
     * value: "AGREEMENT_OFFLINE_SYNC"
     * @const
     */
    "AGREEMENT_OFFLINE_SYNC": "AGREEMENT_OFFLINE_SYNC",
    /**
     * value: "AGREEMENT_USER_ACK_AGREEMENT_MODIFIED"
     * @const
     */
    "AGREEMENT_USER_ACK_AGREEMENT_MODIFIED": "AGREEMENT_USER_ACK_AGREEMENT_MODIFIED",
    /**
     * value: "AGREEMENT_UPLOADED_BY_SENDER"
     * @const
     */
    "AGREEMENT_UPLOADED_BY_SENDER": "AGREEMENT_UPLOADED_BY_SENDER",
    /**
     * value: "AGREEMENT_WEB_IDENTITY_AUTHENTICATED"
     * @const
     */
    "AGREEMENT_WEB_IDENTITY_AUTHENTICATED": "AGREEMENT_WEB_IDENTITY_AUTHENTICATED",
    /**
     * value: "AGREEMENT_ALL"
     * @const
     */
    "AGREEMENT_ALL": "AGREEMENT_ALL",
    /**
     * value: "MEGASIGN_CREATED"
     * @const
     */
    "MEGASIGN_CREATED": "MEGASIGN_CREATED",
    /**
     * value: "MEGASIGN_RECALLED"
     * @const
     */
    "MEGASIGN_RECALLED": "MEGASIGN_RECALLED",
    /**
     * value: "MEGASIGN_SHARED"
     * @const
     */
    "MEGASIGN_SHARED": "MEGASIGN_SHARED",
    /**
     * value: "MEGASIGN_ALL"
     * @const
     */
    "MEGASIGN_ALL": "MEGASIGN_ALL",
    /**
     * value: "WIDGET_CREATED"
     * @const
     */
    "WIDGET_CREATED": "WIDGET_CREATED",
    /**
     * value: "WIDGET_MODIFIED"
     * @const
     */
    "WIDGET_MODIFIED": "WIDGET_MODIFIED",
    /**
     * value: "WIDGET_SHARED"
     * @const
     */
    "WIDGET_SHARED": "WIDGET_SHARED",
    /**
     * value: "WIDGET_ENABLED"
     * @const
     */
    "WIDGET_ENABLED": "WIDGET_ENABLED",
    /**
     * value: "WIDGET_DISABLED"
     * @const
     */
    "WIDGET_DISABLED": "WIDGET_DISABLED",
    /**
     * value: "WIDGET_AUTO_CANCELLED_CONVERSION_PROBLEM"
     * @const
     */
    "WIDGET_AUTO_CANCELLED_CONVERSION_PROBLEM": "WIDGET_AUTO_CANCELLED_CONVERSION_PROBLEM",
    /**
     * value: "WIDGET_ALL"
     * @const
     */
    "WIDGET_ALL": "WIDGET_ALL",
    /**
     * value: "LIBRARY_DOCUMENT_CREATED"
     * @const
     */
    "LIBRARY_DOCUMENT_CREATED": "LIBRARY_DOCUMENT_CREATED",
    /**
     * value: "LIBRARY_DOCUMENT_AUTO_CANCELLED_CONVERSION_PROBLEM"
     * @const
     */
    "LIBRARY_DOCUMENT_AUTO_CANCELLED_CONVERSION_PROBLEM": "LIBRARY_DOCUMENT_AUTO_CANCELLED_CONVERSION_PROBLEM",
    /**
     * value: "LIBRARY_DOCUMENT_MODIFIED"
     * @const
     */
    "LIBRARY_DOCUMENT_MODIFIED": "LIBRARY_DOCUMENT_MODIFIED",
    /**
     * value: "LIBRARY_DOCUMENT_ALL"
     * @const
     */
    "LIBRARY_DOCUMENT_ALL": "LIBRARY_DOCUMENT_ALL"  };


  return exports;
}));


