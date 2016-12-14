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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/CounterSignerSetInfo'), require('../../model/widgets/WidgetCompletionInfo'), require('../../model/widgets/WidgetFileInfo'), require('../../model/widgets/WidgetMergefieldInfo'), require('../../model/widgets/WidgetSecurityOption'), require('../../model/widgets/WidgetSignerSecurityOption'), require('../../model/widgets/WidgetVaultingInfo'));

}(function(ApiClient, CounterSignerSetInfo, WidgetCompletionInfo, WidgetFileInfo, WidgetMergefieldInfo, WidgetSecurityOption, WidgetSignerSecurityOption, WidgetVaultingInfo) {
  'use strict';


  /**
   * @module model/widgets/WidgetCreationInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetCreationInfo</code>.
   * @alias module:model/widgets/WidgetCreationInfo
   * @class
   */
  var WidgetCreationInfo = function() {
    var _this = this;


    _this.authoringRequested = undefined;

    _this.callbackInfo = undefined;

    _this.counterSignerSetInfos = undefined;

    _this.fileInfos = undefined;

    _this.formFieldLayerTemplates = undefined;

    _this.locale = undefined;

    _this.mergeFieldInfo = undefined;

    _this.name = undefined;

    _this.securityOptions = undefined;

    _this.signatureFlow = undefined;

    _this.vaultingInfo = undefined;

    _this.widgetAuthFailureInfo = undefined;

    _this.widgetCompletionInfo = undefined;

    _this.widgetSignerSecurityOptions = undefined;

   /**
    * Indicates that authoring is requested prior to sending the document
    * @function getAuthoringRequested
    * @return  {module:model/widgets/Boolean} Indicates that authoring is requested prior to sending the document  
    * @instance
    */
    _this.getAuthoringRequested = function() {
      return _this.authoringRequested;
    };

   /**
    * Indicates that authoring is requested prior to sending the document
    * @function setAuthoringRequested
    * @param authoringRequested {module:model/widgets/Boolean} Indicates that authoring is requested prior to sending the document
    * @instance
    */
    _this.setAuthoringRequested = function(authoringRequested) {
      _this.authoringRequested = authoringRequested;
    };

   /**
    * A publicly accessible url to which Adobe Sign will do an HTTP GET operation every time there is a new agreement event. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file. Adobe Sign can also ping your system using HTTP PUT with the final signed PDF. Please contact support@echosign.com if you wish to use this option.
    * @function getCallbackInfo
    * @return  {module:model/widgets/String} A publicly accessible url to which Adobe Sign will do an HTTP GET operation every time there is a new agreement event. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file. Adobe Sign can also ping your system using HTTP PUT with the final signed PDF. Please contact support@echosign.com if you wish to use this option.  
    * @instance
    */
    _this.getCallbackInfo = function() {
      return _this.callbackInfo;
    };

   /**
    * A publicly accessible url to which Adobe Sign will do an HTTP GET operation every time there is a new agreement event. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file. Adobe Sign can also ping your system using HTTP PUT with the final signed PDF. Please contact support@echosign.com if you wish to use this option.
    * @function setCallbackInfo
    * @param callbackInfo {module:model/widgets/String} A publicly accessible url to which Adobe Sign will do an HTTP GET operation every time there is a new agreement event. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file. Adobe Sign can also ping your system using HTTP PUT with the final signed PDF. Please contact support@echosign.com if you wish to use this option.
    * @instance
    */
    _this.setCallbackInfo = function(callbackInfo) {
      _this.callbackInfo = callbackInfo;
    };

   /**
    * A list of one or more counter signers provided in the form of counter signer set.
    * @function getCounterSignerSetInfos
    * @return  {module:model/widgets/Array} A list of one or more counter signers provided in the form of counter signer set.  
    * @instance
    */
    _this.getCounterSignerSetInfos = function() {
      return _this.counterSignerSetInfos;
    };

   /**
    * A list of one or more counter signers provided in the form of counter signer set.
    * @function setCounterSignerSetInfos
    * @param counterSignerSetInfos {module:model/widgets/Array} A list of one or more counter signers provided in the form of counter signer set.
    * @instance
    */
    _this.setCounterSignerSetInfos = function(counterSignerSetInfos) {
      _this.counterSignerSetInfos = counterSignerSetInfos;
    };

   /**
    * A list of one or more files (or references to files) that will be used to create the widget. If more than one file is provided, they will be combined before the widget is created. Library documents are not permitted. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function getFileInfos
    * @return  {module:model/widgets/Array} A list of one or more files (or references to files) that will be used to create the widget. If more than one file is provided, they will be combined before the widget is created. Library documents are not permitted. Note: Only one of the four parameters in every FileInfo object must be specified  
    * @instance
    */
    _this.getFileInfos = function() {
      return _this.fileInfos;
    };

   /**
    * A list of one or more files (or references to files) that will be used to create the widget. If more than one file is provided, they will be combined before the widget is created. Library documents are not permitted. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function setFileInfos
    * @param fileInfos {module:model/widgets/Array} A list of one or more files (or references to files) that will be used to create the widget. If more than one file is provided, they will be combined before the widget is created. Library documents are not permitted. Note: Only one of the four parameters in every FileInfo object must be specified
    * @instance
    */
    _this.setFileInfos = function(fileInfos) {
      _this.fileInfos = fileInfos;
    };

   /**
    * Specifies the form field layer template or source of form fields to apply on the files in this transaction. If specified, the FileInfo for this parameter must refer to a form field layer template via libraryDocumentId or libraryDocumentName, or if specified via transientDocumentId or documentURL, it must be of a supported file type. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function getFormFieldLayerTemplates
    * @return  {module:model/widgets/Array} Specifies the form field layer template or source of form fields to apply on the files in this transaction. If specified, the FileInfo for this parameter must refer to a form field layer template via libraryDocumentId or libraryDocumentName, or if specified via transientDocumentId or documentURL, it must be of a supported file type. Note: Only one of the four parameters in every FileInfo object must be specified  
    * @instance
    */
    _this.getFormFieldLayerTemplates = function() {
      return _this.formFieldLayerTemplates;
    };

   /**
    * Specifies the form field layer template or source of form fields to apply on the files in this transaction. If specified, the FileInfo for this parameter must refer to a form field layer template via libraryDocumentId or libraryDocumentName, or if specified via transientDocumentId or documentURL, it must be of a supported file type. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function setFormFieldLayerTemplates
    * @param formFieldLayerTemplates {module:model/widgets/Array} Specifies the form field layer template or source of form fields to apply on the files in this transaction. If specified, the FileInfo for this parameter must refer to a form field layer template via libraryDocumentId or libraryDocumentName, or if specified via transientDocumentId or documentURL, it must be of a supported file type. Note: Only one of the four parameters in every FileInfo object must be specified
    * @instance
    */
    _this.setFormFieldLayerTemplates = function(formFieldLayerTemplates) {
      _this.formFieldLayerTemplates = formFieldLayerTemplates;
    };

   /**
    * The locale associated with this widget - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the widget creator
    * @function getLocale
    * @return  {module:model/widgets/String} The locale associated with this widget - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the widget creator  
    * @instance
    */
    _this.getLocale = function() {
      return _this.locale;
    };

   /**
    * The locale associated with this widget - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the widget creator
    * @function setLocale
    * @param locale {module:model/widgets/String} The locale associated with this widget - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the widget creator
    * @instance
    */
    _this.setLocale = function(locale) {
      _this.locale = locale;
    };

   /**
    * Optional default values for fields to merge into the document. The values will be presented to the signers for editable fields; for read-only fields the provided values will not be editable during the signing process. Merging data into fields is currently not supported when used with libraryDocumentId or libraryDocumentName. Only file and url are currently supported
    * @function getMergeFieldInfo
    * @return  {module:model/widgets/Array} Optional default values for fields to merge into the document. The values will be presented to the signers for editable fields; for read-only fields the provided values will not be editable during the signing process. Merging data into fields is currently not supported when used with libraryDocumentId or libraryDocumentName. Only file and url are currently supported  
    * @instance
    */
    _this.getMergeFieldInfo = function() {
      return _this.mergeFieldInfo;
    };

   /**
    * Optional default values for fields to merge into the document. The values will be presented to the signers for editable fields; for read-only fields the provided values will not be editable during the signing process. Merging data into fields is currently not supported when used with libraryDocumentId or libraryDocumentName. Only file and url are currently supported
    * @function setMergeFieldInfo
    * @param mergeFieldInfo {module:model/widgets/Array} Optional default values for fields to merge into the document. The values will be presented to the signers for editable fields; for read-only fields the provided values will not be editable during the signing process. Merging data into fields is currently not supported when used with libraryDocumentId or libraryDocumentName. Only file and url are currently supported
    * @instance
    */
    _this.setMergeFieldInfo = function(mergeFieldInfo) {
      _this.mergeFieldInfo = mergeFieldInfo;
    };

   /**
    * The name of the widget that will be used to identify it, in emails and on the website
    * @function getName
    * @return  {module:model/widgets/String} The name of the widget that will be used to identify it, in emails and on the website  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the widget that will be used to identify it, in emails and on the website
    * @function setName
    * @param name {module:model/widgets/String} The name of the widget that will be used to identify it, in emails and on the website
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Sets optional secondary security parameters for your widget
    * @function getSecurityOptions
    * @return  {module:model/widgets/WidgetSecurityOption} Sets optional secondary security parameters for your widget  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Sets optional secondary security parameters for your widget
    * @function setSecurityOptions
    * @param securityOptions {module:model/widgets/WidgetSecurityOption} Sets optional secondary security parameters for your widget
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * Selects the workflow you would like to use - whether the sender needs to sign before the recipient, after the recipient, or not at all. The possible values for this variable are SENDER_SIGNATURE_NOT_REQUIRED or SENDER_SIGNS_LAST
    * @function getSignatureFlow
    * @return  {module:model/widgets/String} Selects the workflow you would like to use - whether the sender needs to sign before the recipient, after the recipient, or not at all. The possible values for this variable are SENDER_SIGNATURE_NOT_REQUIRED or SENDER_SIGNS_LAST  
    * @instance
    */
    _this.getSignatureFlow = function() {
      return _this.signatureFlow;
    };

   /**
    * Selects the workflow you would like to use - whether the sender needs to sign before the recipient, after the recipient, or not at all. The possible values for this variable are SENDER_SIGNATURE_NOT_REQUIRED or SENDER_SIGNS_LAST
    * @function setSignatureFlow
    * @param signatureFlow {module:model/widgets/String} Selects the workflow you would like to use - whether the sender needs to sign before the recipient, after the recipient, or not at all. The possible values for this variable are SENDER_SIGNATURE_NOT_REQUIRED or SENDER_SIGNS_LAST
    * @instance
    */
    _this.setSignatureFlow = function(signatureFlow) {
      _this.signatureFlow = signatureFlow;
    };

   /**
    * Sets the vaulting properties that allows Adobe Sign to securely store documents with a vault provider
    * @function getVaultingInfo
    * @return  {module:model/widgets/WidgetVaultingInfo} Sets the vaulting properties that allows Adobe Sign to securely store documents with a vault provider  
    * @instance
    */
    _this.getVaultingInfo = function() {
      return _this.vaultingInfo;
    };

   /**
    * Sets the vaulting properties that allows Adobe Sign to securely store documents with a vault provider
    * @function setVaultingInfo
    * @param vaultingInfo {module:model/widgets/WidgetVaultingInfo} Sets the vaulting properties that allows Adobe Sign to securely store documents with a vault provider
    * @instance
    */
    _this.setVaultingInfo = function(vaultingInfo) {
      _this.vaultingInfo = vaultingInfo;
    };

   /**
    * URL and associated properties for the error page the user will be taken after failing to authenticate
    * @function getWidgetAuthFailureInfo
    * @return  {module:model/widgets/WidgetCompletionInfo} URL and associated properties for the error page the user will be taken after failing to authenticate  
    * @instance
    */
    _this.getWidgetAuthFailureInfo = function() {
      return _this.widgetAuthFailureInfo;
    };

   /**
    * URL and associated properties for the error page the user will be taken after failing to authenticate
    * @function setWidgetAuthFailureInfo
    * @param widgetAuthFailureInfo {module:model/widgets/WidgetCompletionInfo} URL and associated properties for the error page the user will be taken after failing to authenticate
    * @instance
    */
    _this.setWidgetAuthFailureInfo = function(widgetAuthFailureInfo) {
      _this.widgetAuthFailureInfo = widgetAuthFailureInfo;
    };

   /**
    * URL and associated properties for the success page the user will be taken to after filling out the widget
    * @function getWidgetCompletionInfo
    * @return  {module:model/widgets/WidgetCompletionInfo} URL and associated properties for the success page the user will be taken to after filling out the widget  
    * @instance
    */
    _this.getWidgetCompletionInfo = function() {
      return _this.widgetCompletionInfo;
    };

   /**
    * URL and associated properties for the success page the user will be taken to after filling out the widget
    * @function setWidgetCompletionInfo
    * @param widgetCompletionInfo {module:model/widgets/WidgetCompletionInfo} URL and associated properties for the success page the user will be taken to after filling out the widget
    * @instance
    */
    _this.setWidgetCompletionInfo = function(widgetCompletionInfo) {
      _this.widgetCompletionInfo = widgetCompletionInfo;
    };

   /**
    * Security options that apply to widget signers
    * @function getWidgetSignerSecurityOptions
    * @return  {module:model/widgets/WidgetSignerSecurityOption} Security options that apply to widget signers  
    * @instance
    */
    _this.getWidgetSignerSecurityOptions = function() {
      return _this.widgetSignerSecurityOptions;
    };

   /**
    * Security options that apply to widget signers
    * @function setWidgetSignerSecurityOptions
    * @param widgetSignerSecurityOptions {module:model/widgets/WidgetSignerSecurityOption} Security options that apply to widget signers
    * @instance
    */
    _this.setWidgetSignerSecurityOptions = function(widgetSignerSecurityOptions) {
      _this.widgetSignerSecurityOptions = widgetSignerSecurityOptions;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetCreationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetCreationInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetCreationInfo} The populated <code>WidgetCreationInfo</code> instance.
   */
  WidgetCreationInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetCreationInfo();

      if (data.hasOwnProperty('authoringRequested')) {
        obj.setAuthoringRequested(data.authoringRequested);
      }
      if (data.hasOwnProperty('callbackInfo')) {
        obj.setCallbackInfo(data.callbackInfo);
      }
      if (data.hasOwnProperty('counterSignerSetInfos')) {
        obj.setCounterSignerSetInfos(ApiClient.convertToType(data.counterSignerSetInfos,[CounterSignerSetInfo]));
      }
      if (data.hasOwnProperty('fileInfos')) {
        obj.setFileInfos(ApiClient.convertToType(data.fileInfos,[WidgetFileInfo]));
      }
      if (data.hasOwnProperty('formFieldLayerTemplates')) {
        obj.setFormFieldLayerTemplates(ApiClient.convertToType(data.formFieldLayerTemplates,[WidgetFileInfo]));
      }
      if (data.hasOwnProperty('locale')) {
        obj.setLocale(data.locale);
      }
      if (data.hasOwnProperty('mergeFieldInfo')) {
        obj.setMergeFieldInfo(ApiClient.convertToType(data.mergeFieldInfo,[WidgetMergefieldInfo]));
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('securityOptions')) {
        obj.setSecurityOptions(ApiClient.convertToType(data.securityOptions,WidgetSecurityOption));
      }
      if (data.hasOwnProperty('signatureFlow')) {
        obj.setSignatureFlow(data.signatureFlow);
      }
      if (data.hasOwnProperty('vaultingInfo')) {
        obj.setVaultingInfo(ApiClient.convertToType(data.vaultingInfo,WidgetVaultingInfo));
      }
      if (data.hasOwnProperty('widgetAuthFailureInfo')) {
        obj.setWidgetAuthFailureInfo(ApiClient.convertToType(data.widgetAuthFailureInfo,WidgetCompletionInfo));
      }
      if (data.hasOwnProperty('widgetCompletionInfo')) {
        obj.setWidgetCompletionInfo(ApiClient.convertToType(data.widgetCompletionInfo,WidgetCompletionInfo));
      }
      if (data.hasOwnProperty('widgetSignerSecurityOptions')) {
        obj.setWidgetSignerSecurityOptions(ApiClient.convertToType(data.widgetSignerSecurityOptions,WidgetSignerSecurityOption));
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>signatureFlow</code> property.
   * @enum {String}
   * @readonly
   */
WidgetCreationInfo.SignatureFlowEnum = {
  
  
    /**
     * value: SENDER_SIGNATURE_NOT_REQUIRED
     * @const
     */
    SENDER_SIGNATURE_NOT_REQUIRED: "SENDER_SIGNATURE_NOT_REQUIRED",
    
  
    /**
     * value: SENDER_SIGNS_LAST
     * @const
     */
    SENDER_SIGNS_LAST: "SENDER_SIGNS_LAST"
  
  
  };

  return WidgetCreationInfo;
}));


