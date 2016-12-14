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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/ExternalId'), require('../../model/agreements/FileInfo'), require('../../model/agreements/MergefieldInfo'), require('../../model/agreements/PostSignOptions'), require('../../model/agreements/RecipientSetInfo'), require('../../model/agreements/RequestFormField'), require('../../model/agreements/SecurityOption'), require('../../model/agreements/VaultingInfo'));

}(function(ApiClient, ExternalId, FileInfo, MergefieldInfo, PostSignOptions, RecipientSetInfo, RequestFormField, SecurityOption, VaultingInfo) {
  'use strict';


  /**
   * @module model/agreements/DocumentCreationInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DocumentCreationInfo</code>.
   * @alias module:model/agreements/DocumentCreationInfo
   * @class
   */
  var DocumentCreationInfo = function() {
    var _this = this;


    _this.callbackInfo = undefined;

    _this.ccs = undefined;

    _this.daysUntilSigningDeadline = undefined;

    _this.externalId = undefined;

    _this.fileInfos = undefined;

    _this.formFieldLayerTemplates = undefined;

    _this.formFields = undefined;

    _this.locale = undefined;

    _this.mergeFieldInfo = undefined;

    _this.message = undefined;

    _this.name = undefined;

    _this.postSignOptions = undefined;

    _this.recipientSetInfos = undefined;

    _this.reminderFrequency = undefined;

    _this.securityOptions = undefined;

    _this.signatureFlow = undefined;

    _this.signatureType = undefined;

    _this.vaultingInfo = undefined;

   /**
    * A publicly accessible url to which Adobe Sign will do an HTTP GET operation every time there is a new agreement event. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file. Adobe Sign can also ping your system using HTTP PUT with the final signed PDF. Please contact support@echosign.com if you wish to use this option.
    * @function getCallbackInfo
    * @return  {module:model/agreements/String} A publicly accessible url to which Adobe Sign will do an HTTP GET operation every time there is a new agreement event. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file. Adobe Sign can also ping your system using HTTP PUT with the final signed PDF. Please contact support@echosign.com if you wish to use this option.  
    * @instance
    */
    _this.getCallbackInfo = function() {
      return _this.callbackInfo;
    };

   /**
    * A publicly accessible url to which Adobe Sign will do an HTTP GET operation every time there is a new agreement event. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file. Adobe Sign can also ping your system using HTTP PUT with the final signed PDF. Please contact support@echosign.com if you wish to use this option.
    * @function setCallbackInfo
    * @param callbackInfo {module:model/agreements/String} A publicly accessible url to which Adobe Sign will do an HTTP GET operation every time there is a new agreement event. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file. Adobe Sign can also ping your system using HTTP PUT with the final signed PDF. Please contact support@echosign.com if you wish to use this option.
    * @instance
    */
    _this.setCallbackInfo = function(callbackInfo) {
      _this.callbackInfo = callbackInfo;
    };

   /**
    * A list of one or more email addresses that you want to copy on this transaction. The email addresses will each receive an email at the beginning of the transaction and also when the final document is signed. The email addresses will also receive a copy of the document, attached as a PDF file
    * @function getCcs
    * @return  {module:model/agreements/Array} A list of one or more email addresses that you want to copy on this transaction. The email addresses will each receive an email at the beginning of the transaction and also when the final document is signed. The email addresses will also receive a copy of the document, attached as a PDF file  
    * @instance
    */
    _this.getCcs = function() {
      return _this.ccs;
    };

   /**
    * A list of one or more email addresses that you want to copy on this transaction. The email addresses will each receive an email at the beginning of the transaction and also when the final document is signed. The email addresses will also receive a copy of the document, attached as a PDF file
    * @function setCcs
    * @param ccs {module:model/agreements/Array} A list of one or more email addresses that you want to copy on this transaction. The email addresses will each receive an email at the beginning of the transaction and also when the final document is signed. The email addresses will also receive a copy of the document, attached as a PDF file
    * @instance
    */
    _this.setCcs = function(ccs) {
      _this.ccs = ccs;
    };

   /**
    * The number of days that remain before the document expires. You cannot sign the document after it expires
    * @function getDaysUntilSigningDeadline
    * @return  {module:model/agreements/Integer} The number of days that remain before the document expires. You cannot sign the document after it expires  
    * @instance
    */
    _this.getDaysUntilSigningDeadline = function() {
      return _this.daysUntilSigningDeadline;
    };

   /**
    * The number of days that remain before the document expires. You cannot sign the document after it expires
    * @function setDaysUntilSigningDeadline
    * @param daysUntilSigningDeadline {module:model/agreements/Integer} The number of days that remain before the document expires. You cannot sign the document after it expires
    * @instance
    */
    _this.setDaysUntilSigningDeadline = function(daysUntilSigningDeadline) {
      _this.daysUntilSigningDeadline = daysUntilSigningDeadline;
    };

   /**
    * A unique identifier for your transaction from an external system. You can use the ExternalID to search for your transaction through API
    * @function getExternalId
    * @return  {module:model/agreements/ExternalId} A unique identifier for your transaction from an external system. You can use the ExternalID to search for your transaction through API  
    * @instance
    */
    _this.getExternalId = function() {
      return _this.externalId;
    };

   /**
    * A unique identifier for your transaction from an external system. You can use the ExternalID to search for your transaction through API
    * @function setExternalId
    * @param externalId {module:model/agreements/ExternalId} A unique identifier for your transaction from an external system. You can use the ExternalID to search for your transaction through API
    * @instance
    */
    _this.setExternalId = function(externalId) {
      _this.externalId = externalId;
    };

   /**
    * A list of one or more files (or references to files) that will be sent out for signature. If more than one file is provided, they will be combined into one PDF before being sent out. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function getFileInfos
    * @return  {module:model/agreements/Array} A list of one or more files (or references to files) that will be sent out for signature. If more than one file is provided, they will be combined into one PDF before being sent out. Note: Only one of the four parameters in every FileInfo object must be specified  
    * @instance
    */
    _this.getFileInfos = function() {
      return _this.fileInfos;
    };

   /**
    * A list of one or more files (or references to files) that will be sent out for signature. If more than one file is provided, they will be combined into one PDF before being sent out. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function setFileInfos
    * @param fileInfos {module:model/agreements/Array} A list of one or more files (or references to files) that will be sent out for signature. If more than one file is provided, they will be combined into one PDF before being sent out. Note: Only one of the four parameters in every FileInfo object must be specified
    * @instance
    */
    _this.setFileInfos = function(fileInfos) {
      _this.fileInfos = fileInfos;
    };

   /**
    * Specifies the form field layer template or source of form fields to apply on the files in this transaction. If specified, the FileInfo for this parameter must refer to a form field layer template via libraryDocumentId or libraryDocumentName, or if specified via transientDocumentId or documentURL, it must be of a supported file type. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function getFormFieldLayerTemplates
    * @return  {module:model/agreements/Array} Specifies the form field layer template or source of form fields to apply on the files in this transaction. If specified, the FileInfo for this parameter must refer to a form field layer template via libraryDocumentId or libraryDocumentName, or if specified via transientDocumentId or documentURL, it must be of a supported file type. Note: Only one of the four parameters in every FileInfo object must be specified  
    * @instance
    */
    _this.getFormFieldLayerTemplates = function() {
      return _this.formFieldLayerTemplates;
    };

   /**
    * Specifies the form field layer template or source of form fields to apply on the files in this transaction. If specified, the FileInfo for this parameter must refer to a form field layer template via libraryDocumentId or libraryDocumentName, or if specified via transientDocumentId or documentURL, it must be of a supported file type. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function setFormFieldLayerTemplates
    * @param formFieldLayerTemplates {module:model/agreements/Array} Specifies the form field layer template or source of form fields to apply on the files in this transaction. If specified, the FileInfo for this parameter must refer to a form field layer template via libraryDocumentId or libraryDocumentName, or if specified via transientDocumentId or documentURL, it must be of a supported file type. Note: Only one of the four parameters in every FileInfo object must be specified
    * @instance
    */
    _this.setFormFieldLayerTemplates = function(formFieldLayerTemplates) {
      _this.formFieldLayerTemplates = formFieldLayerTemplates;
    };

   /**
    * Information of form fields of an agreement. PDF_SIGNATURE inputType field is currently not supported
    * @function getFormFields
    * @return  {module:model/agreements/Array} Information of form fields of an agreement. PDF_SIGNATURE inputType field is currently not supported  
    * @instance
    */
    _this.getFormFields = function() {
      return _this.formFields;
    };

   /**
    * Information of form fields of an agreement. PDF_SIGNATURE inputType field is currently not supported
    * @function setFormFields
    * @param formFields {module:model/agreements/Array} Information of form fields of an agreement. PDF_SIGNATURE inputType field is currently not supported
    * @instance
    */
    _this.setFormFields = function(formFields) {
      _this.formFields = formFields;
    };

   /**
    * The locale associated with this agreement - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the agreement sender
    * @function getLocale
    * @return  {module:model/agreements/String} The locale associated with this agreement - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the agreement sender  
    * @instance
    */
    _this.getLocale = function() {
      return _this.locale;
    };

   /**
    * The locale associated with this agreement - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the agreement sender
    * @function setLocale
    * @param locale {module:model/agreements/String} The locale associated with this agreement - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the agreement sender
    * @instance
    */
    _this.setLocale = function(locale) {
      _this.locale = locale;
    };

   /**
    * Optional default values for fields to merge into the document. The values will be presented to the signers for editable fields; for read-only fields the provided values will not be editable during the signing process. Merging data into fields is currently not supported when used with libraryDocumentId or libraryDocumentName. Only file and url are currently supported
    * @function getMergeFieldInfo
    * @return  {module:model/agreements/Array} Optional default values for fields to merge into the document. The values will be presented to the signers for editable fields; for read-only fields the provided values will not be editable during the signing process. Merging data into fields is currently not supported when used with libraryDocumentId or libraryDocumentName. Only file and url are currently supported  
    * @instance
    */
    _this.getMergeFieldInfo = function() {
      return _this.mergeFieldInfo;
    };

   /**
    * Optional default values for fields to merge into the document. The values will be presented to the signers for editable fields; for read-only fields the provided values will not be editable during the signing process. Merging data into fields is currently not supported when used with libraryDocumentId or libraryDocumentName. Only file and url are currently supported
    * @function setMergeFieldInfo
    * @param mergeFieldInfo {module:model/agreements/Array} Optional default values for fields to merge into the document. The values will be presented to the signers for editable fields; for read-only fields the provided values will not be editable during the signing process. Merging data into fields is currently not supported when used with libraryDocumentId or libraryDocumentName. Only file and url are currently supported
    * @instance
    */
    _this.setMergeFieldInfo = function(mergeFieldInfo) {
      _this.mergeFieldInfo = mergeFieldInfo;
    };

   /**
    * An optional message to the recipients, describing what is being sent or why their signature is required
    * @function getMessage
    * @return  {module:model/agreements/String} An optional message to the recipients, describing what is being sent or why their signature is required  
    * @instance
    */
    _this.getMessage = function() {
      return _this.message;
    };

   /**
    * An optional message to the recipients, describing what is being sent or why their signature is required
    * @function setMessage
    * @param message {module:model/agreements/String} An optional message to the recipients, describing what is being sent or why their signature is required
    * @instance
    */
    _this.setMessage = function(message) {
      _this.message = message;
    };

   /**
    * The name of the agreement that will be used to identify it, in emails and on the website
    * @function getName
    * @return  {module:model/agreements/String} The name of the agreement that will be used to identify it, in emails and on the website  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the agreement that will be used to identify it, in emails and on the website
    * @function setName
    * @param name {module:model/agreements/String} The name of the agreement that will be used to identify it, in emails and on the website
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * URL and associated properties for the success page the user will be taken to after completing the signing process
    * @function getPostSignOptions
    * @return  {module:model/agreements/PostSignOptions} URL and associated properties for the success page the user will be taken to after completing the signing process  
    * @instance
    */
    _this.getPostSignOptions = function() {
      return _this.postSignOptions;
    };

   /**
    * URL and associated properties for the success page the user will be taken to after completing the signing process
    * @function setPostSignOptions
    * @param postSignOptions {module:model/agreements/PostSignOptions} URL and associated properties for the success page the user will be taken to after completing the signing process
    * @instance
    */
    _this.setPostSignOptions = function(postSignOptions) {
      _this.postSignOptions = postSignOptions;
    };

   /**
    * A list of one or more recipient sets. A recipient set may have one or more recipients. If any member of the recipient set signs, the agreement is considered signed by the recipient set. For regular (non-MegaSign) documents, there is no limit on the number of electronic signatures in a single document. Written signatures are limited to four per document. This limit includes the sender if the signature of the sender is also required. Note: If signatureFlow is set to SENDER_SIGNS_ONLY, this parameter is optional
    * @function getRecipientSetInfos
    * @return  {module:model/agreements/Array} A list of one or more recipient sets. A recipient set may have one or more recipients. If any member of the recipient set signs, the agreement is considered signed by the recipient set. For regular (non-MegaSign) documents, there is no limit on the number of electronic signatures in a single document. Written signatures are limited to four per document. This limit includes the sender if the signature of the sender is also required. Note: If signatureFlow is set to SENDER_SIGNS_ONLY, this parameter is optional  
    * @instance
    */
    _this.getRecipientSetInfos = function() {
      return _this.recipientSetInfos;
    };

   /**
    * A list of one or more recipient sets. A recipient set may have one or more recipients. If any member of the recipient set signs, the agreement is considered signed by the recipient set. For regular (non-MegaSign) documents, there is no limit on the number of electronic signatures in a single document. Written signatures are limited to four per document. This limit includes the sender if the signature of the sender is also required. Note: If signatureFlow is set to SENDER_SIGNS_ONLY, this parameter is optional
    * @function setRecipientSetInfos
    * @param recipientSetInfos {module:model/agreements/Array} A list of one or more recipient sets. A recipient set may have one or more recipients. If any member of the recipient set signs, the agreement is considered signed by the recipient set. For regular (non-MegaSign) documents, there is no limit on the number of electronic signatures in a single document. Written signatures are limited to four per document. This limit includes the sender if the signature of the sender is also required. Note: If signatureFlow is set to SENDER_SIGNS_ONLY, this parameter is optional
    * @instance
    */
    _this.setRecipientSetInfos = function(recipientSetInfos) {
      _this.recipientSetInfos = recipientSetInfos;
    };

   /**
    * Optional parameter that sets how often you want to send reminders to the recipients. The possible values are DAILY_UNTIL_SIGNED or WEEKLY_UNTIL_SIGNED
    * @function getReminderFrequency
    * @return  {module:model/agreements/String} Optional parameter that sets how often you want to send reminders to the recipients. The possible values are DAILY_UNTIL_SIGNED or WEEKLY_UNTIL_SIGNED  
    * @instance
    */
    _this.getReminderFrequency = function() {
      return _this.reminderFrequency;
    };

   /**
    * Optional parameter that sets how often you want to send reminders to the recipients. The possible values are DAILY_UNTIL_SIGNED or WEEKLY_UNTIL_SIGNED
    * @function setReminderFrequency
    * @param reminderFrequency {module:model/agreements/String} Optional parameter that sets how often you want to send reminders to the recipients. The possible values are DAILY_UNTIL_SIGNED or WEEKLY_UNTIL_SIGNED
    * @instance
    */
    _this.setReminderFrequency = function(reminderFrequency) {
      _this.reminderFrequency = reminderFrequency;
    };

   /**
    * Sets optional secondary security parameters for your document
    * @function getSecurityOptions
    * @return  {module:model/agreements/SecurityOption} Sets optional secondary security parameters for your document  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Sets optional secondary security parameters for your document
    * @function setSecurityOptions
    * @param securityOptions {module:model/agreements/SecurityOption} Sets optional secondary security parameters for your document
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * Selects the workflow you would like to use - whether the sender needs to sign only, before the recipient, after the recipient, or not at all. The possible values for this variable are SENDER_SIGNATURE_NOT_REQUIRED, SENDER_SIGNS_LAST, SENDER_SIGNS_FIRST, SEQUENTIAL, PARALLEL or SENDER_SIGNS_ONLY. Note: leave unspecified for hybrid routing
    * @function getSignatureFlow
    * @return  {module:model/agreements/String} Selects the workflow you would like to use - whether the sender needs to sign only, before the recipient, after the recipient, or not at all. The possible values for this variable are SENDER_SIGNATURE_NOT_REQUIRED, SENDER_SIGNS_LAST, SENDER_SIGNS_FIRST, SEQUENTIAL, PARALLEL or SENDER_SIGNS_ONLY. Note: leave unspecified for hybrid routing  
    * @instance
    */
    _this.getSignatureFlow = function() {
      return _this.signatureFlow;
    };

   /**
    * Selects the workflow you would like to use - whether the sender needs to sign only, before the recipient, after the recipient, or not at all. The possible values for this variable are SENDER_SIGNATURE_NOT_REQUIRED, SENDER_SIGNS_LAST, SENDER_SIGNS_FIRST, SEQUENTIAL, PARALLEL or SENDER_SIGNS_ONLY. Note: leave unspecified for hybrid routing
    * @function setSignatureFlow
    * @param signatureFlow {module:model/agreements/String} Selects the workflow you would like to use - whether the sender needs to sign only, before the recipient, after the recipient, or not at all. The possible values for this variable are SENDER_SIGNATURE_NOT_REQUIRED, SENDER_SIGNS_LAST, SENDER_SIGNS_FIRST, SEQUENTIAL, PARALLEL or SENDER_SIGNS_ONLY. Note: leave unspecified for hybrid routing
    * @instance
    */
    _this.setSignatureFlow = function(signatureFlow) {
      _this.signatureFlow = signatureFlow;
    };

   /**
    * Specifies the type of signature you would like to request - written or e-signature. The possible values are ESIGN or WRITTEN
    * @function getSignatureType
    * @return  {module:model/agreements/String} Specifies the type of signature you would like to request - written or e-signature. The possible values are ESIGN or WRITTEN  
    * @instance
    */
    _this.getSignatureType = function() {
      return _this.signatureType;
    };

   /**
    * Specifies the type of signature you would like to request - written or e-signature. The possible values are ESIGN or WRITTEN
    * @function setSignatureType
    * @param signatureType {module:model/agreements/String} Specifies the type of signature you would like to request - written or e-signature. The possible values are ESIGN or WRITTEN
    * @instance
    */
    _this.setSignatureType = function(signatureType) {
      _this.signatureType = signatureType;
    };

   /**
    * Sets the vaulting properties that allows Adobe Sign to securely store documents with a vault provider
    * @function getVaultingInfo
    * @return  {module:model/agreements/VaultingInfo} Sets the vaulting properties that allows Adobe Sign to securely store documents with a vault provider  
    * @instance
    */
    _this.getVaultingInfo = function() {
      return _this.vaultingInfo;
    };

   /**
    * Sets the vaulting properties that allows Adobe Sign to securely store documents with a vault provider
    * @function setVaultingInfo
    * @param vaultingInfo {module:model/agreements/VaultingInfo} Sets the vaulting properties that allows Adobe Sign to securely store documents with a vault provider
    * @instance
    */
    _this.setVaultingInfo = function(vaultingInfo) {
      _this.vaultingInfo = vaultingInfo;
    };

  };

  /**
   * @private
   * Constructs a <code>DocumentCreationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/DocumentCreationInfo} obj Optional instance to populate.
   * @return {module:model/agreements/DocumentCreationInfo} The populated <code>DocumentCreationInfo</code> instance.
   */
  DocumentCreationInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DocumentCreationInfo();

      if (data.hasOwnProperty('callbackInfo')) {
        obj.setCallbackInfo(data.callbackInfo);
      }
      if (data.hasOwnProperty('ccs')) {
        obj.setCcs(data.ccs);
      }
      if (data.hasOwnProperty('daysUntilSigningDeadline')) {
        obj.setDaysUntilSigningDeadline(data.daysUntilSigningDeadline);
      }
      if (data.hasOwnProperty('externalId')) {
        obj.setExternalId(ApiClient.convertToType(data.externalId,ExternalId));
      }
      if (data.hasOwnProperty('fileInfos')) {
        obj.setFileInfos(ApiClient.convertToType(data.fileInfos,[FileInfo]));
      }
      if (data.hasOwnProperty('formFieldLayerTemplates')) {
        obj.setFormFieldLayerTemplates(ApiClient.convertToType(data.formFieldLayerTemplates,[FileInfo]));
      }
      if (data.hasOwnProperty('formFields')) {
        obj.setFormFields(ApiClient.convertToType(data.formFields,[RequestFormField]));
      }
      if (data.hasOwnProperty('locale')) {
        obj.setLocale(data.locale);
      }
      if (data.hasOwnProperty('mergeFieldInfo')) {
        obj.setMergeFieldInfo(ApiClient.convertToType(data.mergeFieldInfo,[MergefieldInfo]));
      }
      if (data.hasOwnProperty('message')) {
        obj.setMessage(data.message);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('postSignOptions')) {
        obj.setPostSignOptions(ApiClient.convertToType(data.postSignOptions,PostSignOptions));
      }
      if (data.hasOwnProperty('recipientSetInfos')) {
        obj.setRecipientSetInfos(ApiClient.convertToType(data.recipientSetInfos,[RecipientSetInfo]));
      }
      if (data.hasOwnProperty('reminderFrequency')) {
        obj.setReminderFrequency(data.reminderFrequency);
      }
      if (data.hasOwnProperty('securityOptions')) {
        obj.setSecurityOptions(ApiClient.convertToType(data.securityOptions,SecurityOption));
      }
      if (data.hasOwnProperty('signatureFlow')) {
        obj.setSignatureFlow(data.signatureFlow);
      }
      if (data.hasOwnProperty('signatureType')) {
        obj.setSignatureType(data.signatureType);
      }
      if (data.hasOwnProperty('vaultingInfo')) {
        obj.setVaultingInfo(ApiClient.convertToType(data.vaultingInfo,VaultingInfo));
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>reminderFrequency</code> property.
   * @enum {String}
   * @readonly
   */
DocumentCreationInfo.ReminderFrequencyEnum = {
  
  
    /**
     * value: DAILY_UNTIL_SIGNED
     * @const
     */
    DAILY_UNTIL_SIGNED: "DAILY_UNTIL_SIGNED",
    
  
    /**
     * value: WEEKLY_UNTIL_SIGNED
     * @const
     */
    WEEKLY_UNTIL_SIGNED: "WEEKLY_UNTIL_SIGNED"
  
  
  };
  /**
   * Allowed values for the <code>signatureFlow</code> property.
   * @enum {String}
   * @readonly
   */
DocumentCreationInfo.SignatureFlowEnum = {
  
  
    /**
     * value: SENDER_SIGNATURE_NOT_REQUIRED
     * @const
     */
    SENDER_SIGNATURE_NOT_REQUIRED: "SENDER_SIGNATURE_NOT_REQUIRED",
    
  
    /**
     * value: SENDER_SIGNS_LAST
     * @const
     */
    SENDER_SIGNS_LAST: "SENDER_SIGNS_LAST",
    
  
    /**
     * value: SENDER_SIGNS_FIRST
     * @const
     */
    SENDER_SIGNS_FIRST: "SENDER_SIGNS_FIRST",
    
  
    /**
     * value: SEQUENTIAL
     * @const
     */
    SEQUENTIAL: "SEQUENTIAL",
    
  
    /**
     * value: PARALLEL
     * @const
     */
    PARALLEL: "PARALLEL",
    
  
    /**
     * value: SENDER_SIGNS_ONLY
     * @const
     */
    SENDER_SIGNS_ONLY: "SENDER_SIGNS_ONLY"
  
  
  };
  /**
   * Allowed values for the <code>signatureType</code> property.
   * @enum {String}
   * @readonly
   */
DocumentCreationInfo.SignatureTypeEnum = {
  
  
    /**
     * value: ESIGN
     * @const
     */
    ESIGN: "ESIGN",
    
  
    /**
     * value: WRITTEN
     * @const
     */
    WRITTEN: "WRITTEN"
  
  
  };

  return DocumentCreationInfo;
}));


