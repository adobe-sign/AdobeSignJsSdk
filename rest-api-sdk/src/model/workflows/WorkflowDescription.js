/*
*  Copyright 2016 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*/

(function(factory) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/workflows/CCsListInfoDescription'), require('../../model/workflows/ExpirationFieldInfoDescription'), require('../../model/workflows/FileInfosDescription'), require('../../model/workflows/LocaleFieldInfoDescription'), require('../../model/workflows/MergeFieldInfoDescription'), require('../../model/workflows/PasswordFieldInfoDescription'), require('../../model/workflows/RecipientsListInfoDescription'), require('../../model/workflows/WorkflowDefaultParams'));

}(function(ApiClient, CCsListInfoDescription, ExpirationFieldInfoDescription, FileInfosDescription, LocaleFieldInfoDescription, MergeFieldInfoDescription, PasswordFieldInfoDescription, RecipientsListInfoDescription, WorkflowDefaultParams) {
  'use strict';


  /**
   * @module model/workflows/WorkflowDescription
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WorkflowDescription</code>.
   * @alias module:model/workflows/WorkflowDescription
   * @class
   */
  var WorkflowDescription = function() {
    var _this = this;


    _this.agreementNameInfo = undefined;

    _this.authoringInfo = undefined;

    _this.ccsListInfo = undefined;

    _this.created = undefined;

    _this.description = undefined;

    _this.displayName = undefined;

    _this.expirationInfo = undefined;

    _this.fileInfos = undefined;

    _this.localeInfo = undefined;

    _this.mergeFieldsInfo = undefined;

    _this.messageInfo = undefined;

    _this.modified = undefined;

    _this.name = undefined;

    _this.passwordInfo = undefined;

    _this.recipientsListInfo = undefined;

    _this.scope = undefined;

    _this.scopeId = undefined;

    _this.status = undefined;

   /**
    * Information about name field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getAgreementNameInfo
    * @return  {module:model/workflows/WorkflowDefaultParams} Information about name field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getAgreementNameInfo = function() {
      return _this.agreementNameInfo;
    };

   /**
    * Information about name field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setAgreementNameInfo
    * @param agreementNameInfo {module:model/workflows/WorkflowDefaultParams} Information about name field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setAgreementNameInfo = function(agreementNameInfo) {
      _this.agreementNameInfo = agreementNameInfo;
    };

   /**
    * Information about authoringRequested field in SendDocumentInteractiveOptions input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getAuthoringInfo
    * @return  {module:model/workflows/WorkflowDefaultParams} Information about authoringRequested field in SendDocumentInteractiveOptions input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getAuthoringInfo = function() {
      return _this.authoringInfo;
    };

   /**
    * Information about authoringRequested field in SendDocumentInteractiveOptions input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setAuthoringInfo
    * @param authoringInfo {module:model/workflows/WorkflowDefaultParams} Information about authoringRequested field in SendDocumentInteractiveOptions input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setAuthoringInfo = function(authoringInfo) {
      _this.authoringInfo = authoringInfo;
    };

   /**
    * Information about CCList input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getCcsListInfo
    * @return  {module:model/workflows/Array} Information about CCList input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getCcsListInfo = function() {
      return _this.ccsListInfo;
    };

   /**
    * Information about CCList input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setCcsListInfo
    * @param ccsListInfo {module:model/workflows/Array} Information about CCList input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setCcsListInfo = function(ccsListInfo) {
      _this.ccsListInfo = ccsListInfo;
    };

   /**
    * The day on which the workflow was created
    * @function getCreated
    * @return  {module:model/workflows/Date} The day on which the workflow was created  
    * @instance
    */
    _this.getCreated = function() {
      return _this.created;
    };

   /**
    * The day on which the workflow was created
    * @function setCreated
    * @param created {module:model/workflows/Date} The day on which the workflow was created
    * @instance
    */
    _this.setCreated = function(created) {
      _this.created = created;
    };

   /**
    * Description provided for this workflow at the time of its creation
    * @function getDescription
    * @return  {module:model/workflows/String} Description provided for this workflow at the time of its creation  
    * @instance
    */
    _this.getDescription = function() {
      return _this.description;
    };

   /**
    * Description provided for this workflow at the time of its creation
    * @function setDescription
    * @param description {module:model/workflows/String} Description provided for this workflow at the time of its creation
    * @instance
    */
    _this.setDescription = function(description) {
      _this.description = description;
    };

   /**
    * The display name of the workflow.
    * @function getDisplayName
    * @return  {module:model/workflows/String} The display name of the workflow.  
    * @instance
    */
    _this.getDisplayName = function() {
      return _this.displayName;
    };

   /**
    * The display name of the workflow.
    * @function setDisplayName
    * @param displayName {module:model/workflows/String} The display name of the workflow.
    * @instance
    */
    _this.setDisplayName = function(displayName) {
      _this.displayName = displayName;
    };

   /**
    * Information about daysUntilSigningDeadline field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getExpirationInfo
    * @return  {module:model/workflows/ExpirationFieldInfoDescription} Information about daysUntilSigningDeadline field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getExpirationInfo = function() {
      return _this.expirationInfo;
    };

   /**
    * Information about daysUntilSigningDeadline field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setExpirationInfo
    * @param expirationInfo {module:model/workflows/ExpirationFieldInfoDescription} Information about daysUntilSigningDeadline field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setExpirationInfo = function(expirationInfo) {
      _this.expirationInfo = expirationInfo;
    };

   /**
    * Information about FileInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getFileInfos
    * @return  {module:model/workflows/Array} Information about FileInfo input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getFileInfos = function() {
      return _this.fileInfos;
    };

   /**
    * Information about FileInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setFileInfos
    * @param fileInfos {module:model/workflows/Array} Information about FileInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setFileInfos = function(fileInfos) {
      _this.fileInfos = fileInfos;
    };

   /**
    * Information about locale field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getLocaleInfo
    * @return  {module:model/workflows/LocaleFieldInfoDescription} Information about locale field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getLocaleInfo = function() {
      return _this.localeInfo;
    };

   /**
    * Information about locale field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setLocaleInfo
    * @param localeInfo {module:model/workflows/LocaleFieldInfoDescription} Information about locale field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setLocaleInfo = function(localeInfo) {
      _this.localeInfo = localeInfo;
    };

   /**
    * Information about customFieldInfos in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getMergeFieldsInfo
    * @return  {module:model/workflows/Array} Information about customFieldInfos in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getMergeFieldsInfo = function() {
      return _this.mergeFieldsInfo;
    };

   /**
    * Information about customFieldInfos in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setMergeFieldsInfo
    * @param mergeFieldsInfo {module:model/workflows/Array} Information about customFieldInfos in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setMergeFieldsInfo = function(mergeFieldsInfo) {
      _this.mergeFieldsInfo = mergeFieldsInfo;
    };

   /**
    * Information about message field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getMessageInfo
    * @return  {module:model/workflows/WorkflowDefaultParams} Information about message field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getMessageInfo = function() {
      return _this.messageInfo;
    };

   /**
    * Information about message field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setMessageInfo
    * @param messageInfo {module:model/workflows/WorkflowDefaultParams} Information about message field in DocumentCreationInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setMessageInfo = function(messageInfo) {
      _this.messageInfo = messageInfo;
    };

   /**
    * The day on which the workflow was last modified
    * @function getModified
    * @return  {module:model/workflows/Date} The day on which the workflow was last modified  
    * @instance
    */
    _this.getModified = function() {
      return _this.modified;
    };

   /**
    * The day on which the workflow was last modified
    * @function setModified
    * @param modified {module:model/workflows/Date} The day on which the workflow was last modified
    * @instance
    */
    _this.setModified = function(modified) {
      _this.modified = modified;
    };

   /**
    * The name of the workflow.
    * @function getName
    * @return  {module:model/workflows/String} The name of the workflow.  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the workflow.
    * @function setName
    * @param name {module:model/workflows/String} The name of the workflow.
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Information about openPassword field in SecurityOptions input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getPasswordInfo
    * @return  {module:model/workflows/PasswordFieldInfoDescription} Information about openPassword field in SecurityOptions input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getPasswordInfo = function() {
      return _this.passwordInfo;
    };

   /**
    * Information about openPassword field in SecurityOptions input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setPasswordInfo
    * @param passwordInfo {module:model/workflows/PasswordFieldInfoDescription} Information about openPassword field in SecurityOptions input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setPasswordInfo = function(passwordInfo) {
      _this.passwordInfo = passwordInfo;
    };

   /**
    * Information about RecepientsInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function getRecipientsListInfo
    * @return  {module:model/workflows/Array} Information about RecepientsInfo input field in the agreement creation request when using the API to create an agreement in a workflow  
    * @instance
    */
    _this.getRecipientsListInfo = function() {
      return _this.recipientsListInfo;
    };

   /**
    * Information about RecepientsInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @function setRecipientsListInfo
    * @param recipientsListInfo {module:model/workflows/Array} Information about RecepientsInfo input field in the agreement creation request when using the API to create an agreement in a workflow
    * @instance
    */
    _this.setRecipientsListInfo = function(recipientsListInfo) {
      _this.recipientsListInfo = recipientsListInfo;
    };

   /**
    * The workflow scope (ACCOUNT or GROUP or OTHER)
    * @function getScope
    * @return  {module:model/workflows/String} The workflow scope (ACCOUNT or GROUP or OTHER)  
    * @instance
    */
    _this.getScope = function() {
      return _this.scope;
    };

   /**
    * The workflow scope (ACCOUNT or GROUP or OTHER)
    * @function setScope
    * @param scope {module:model/workflows/String} The workflow scope (ACCOUNT or GROUP or OTHER)
    * @instance
    */
    _this.setScope = function(scope) {
      _this.scope = scope;
    };

   /**
    * Identifier of scope. Currently it is applicable for scope GROUP only and the value will be groupId.
    * @function getScopeId
    * @return  {module:model/workflows/String} Identifier of scope. Currently it is applicable for scope GROUP only and the value will be groupId.  
    * @instance
    */
    _this.getScopeId = function() {
      return _this.scopeId;
    };

   /**
    * Identifier of scope. Currently it is applicable for scope GROUP only and the value will be groupId.
    * @function setScopeId
    * @param scopeId {module:model/workflows/String} Identifier of scope. Currently it is applicable for scope GROUP only and the value will be groupId.
    * @instance
    */
    _this.setScopeId = function(scopeId) {
      _this.scopeId = scopeId;
    };

   /**
    * The workflow status (ACTIVE or DRAFT or OTHER)
    * @function getStatus
    * @return  {module:model/workflows/String} The workflow status (ACTIVE or DRAFT or OTHER)  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * The workflow status (ACTIVE or DRAFT or OTHER)
    * @function setStatus
    * @param status {module:model/workflows/String} The workflow status (ACTIVE or DRAFT or OTHER)
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

  };

  /**
   * @private
   * Constructs a <code>WorkflowDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/WorkflowDescription} obj Optional instance to populate.
   * @return {module:model/workflows/WorkflowDescription} The populated <code>WorkflowDescription</code> instance.
   */
  WorkflowDescription.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WorkflowDescription();

      if (data.hasOwnProperty('agreementNameInfo')) {
        obj.setAgreementNameInfo(ApiClient.convertToType(data.agreementNameInfo,WorkflowDefaultParams));
      }
      if (data.hasOwnProperty('authoringInfo')) {
        obj.setAuthoringInfo(ApiClient.convertToType(data.authoringInfo,WorkflowDefaultParams));
      }
      if (data.hasOwnProperty('ccsListInfo')) {
        obj.setCcsListInfo(ApiClient.convertToType(data.ccsListInfo,[CCsListInfoDescription]));
      }
      if (data.hasOwnProperty('created')) {
        obj.setCreated(data.created);
      }
      if (data.hasOwnProperty('description')) {
        obj.setDescription(data.description);
      }
      if (data.hasOwnProperty('displayName')) {
        obj.setDisplayName(data.displayName);
      }
      if (data.hasOwnProperty('expirationInfo')) {
        obj.setExpirationInfo(ApiClient.convertToType(data.expirationInfo,ExpirationFieldInfoDescription));
      }
      if (data.hasOwnProperty('fileInfos')) {
        obj.setFileInfos(ApiClient.convertToType(data.fileInfos,[FileInfosDescription]));
      }
      if (data.hasOwnProperty('localeInfo')) {
        obj.setLocaleInfo(ApiClient.convertToType(data.localeInfo,LocaleFieldInfoDescription));
      }
      if (data.hasOwnProperty('mergeFieldsInfo')) {
        obj.setMergeFieldsInfo(ApiClient.convertToType(data.mergeFieldsInfo,[MergeFieldInfoDescription]));
      }
      if (data.hasOwnProperty('messageInfo')) {
        obj.setMessageInfo(ApiClient.convertToType(data.messageInfo,WorkflowDefaultParams));
      }
      if (data.hasOwnProperty('modified')) {
        obj.setModified(data.modified);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('passwordInfo')) {
        obj.setPasswordInfo(ApiClient.convertToType(data.passwordInfo,PasswordFieldInfoDescription));
      }
      if (data.hasOwnProperty('recipientsListInfo')) {
        obj.setRecipientsListInfo(ApiClient.convertToType(data.recipientsListInfo,[RecipientsListInfoDescription]));
      }
      if (data.hasOwnProperty('scope')) {
        obj.setScope(data.scope);
      }
      if (data.hasOwnProperty('scopeId')) {
        obj.setScopeId(data.scopeId);
      }
      if (data.hasOwnProperty('status')) {
        obj.setStatus(data.status);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
WorkflowDescription.ScopeEnum = {
  
  
    /**
     * value: ACCOUNT
     * @const
     */
    ACCOUNT: "ACCOUNT",
    
  
    /**
     * value: GROUP
     * @const
     */
    GROUP: "GROUP"
  
  
  };
  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
WorkflowDescription.StatusEnum = {
  
  
    /**
     * value: ACTIVE
     * @const
     */
    ACTIVE: "ACTIVE",
    
  
    /**
     * value: DRAFT
     * @const
     */
    DRAFT: "DRAFT",
    
  
    /**
     * value: HIDDEN
     * @const
     */
    HIDDEN: "HIDDEN"
  
  
  };

  return WorkflowDescription;
}));


