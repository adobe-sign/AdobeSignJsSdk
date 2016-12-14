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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/workflows/DocumentCreationInfo'), require('../../model/workflows/InteractiveOptions'));

}(function(ApiClient, DocumentCreationInfo, InteractiveOptions) {
  'use strict';


  /**
   * @module model/workflows/CustomWorkflowAgreementCreationRequest
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>CustomWorkflowAgreementCreationRequest</code>.
   * @alias module:model/workflows/CustomWorkflowAgreementCreationRequest
   * @class
   */
  var CustomWorkflowAgreementCreationRequest = function() {
    var _this = this;


    _this.documentCreationInfo = undefined;

    _this.options = undefined;

   /**
    * Information about the document you want to send
    * @function getDocumentCreationInfo
    * @return  {module:model/workflows/DocumentCreationInfo} Information about the document you want to send  
    * @instance
    */
    _this.getDocumentCreationInfo = function() {
      return _this.documentCreationInfo;
    };

   /**
    * Information about the document you want to send
    * @function setDocumentCreationInfo
    * @param documentCreationInfo {module:model/workflows/DocumentCreationInfo} Information about the document you want to send
    * @instance
    */
    _this.setDocumentCreationInfo = function(documentCreationInfo) {
      _this.documentCreationInfo = documentCreationInfo;
    };

   /**
    * Options for authoring and sending the agreement
    * @function getOptions
    * @return  {module:model/workflows/InteractiveOptions} Options for authoring and sending the agreement  
    * @instance
    */
    _this.getOptions = function() {
      return _this.options;
    };

   /**
    * Options for authoring and sending the agreement
    * @function setOptions
    * @param options {module:model/workflows/InteractiveOptions} Options for authoring and sending the agreement
    * @instance
    */
    _this.setOptions = function(options) {
      _this.options = options;
    };

  };

  /**
   * @private
   * Constructs a <code>CustomWorkflowAgreementCreationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/CustomWorkflowAgreementCreationRequest} obj Optional instance to populate.
   * @return {module:model/workflows/CustomWorkflowAgreementCreationRequest} The populated <code>CustomWorkflowAgreementCreationRequest</code> instance.
   */
  CustomWorkflowAgreementCreationRequest.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new CustomWorkflowAgreementCreationRequest();

      if (data.hasOwnProperty('documentCreationInfo')) {
        obj.setDocumentCreationInfo(ApiClient.convertToType(data.documentCreationInfo,DocumentCreationInfo));
      }
      if (data.hasOwnProperty('options')) {
        obj.setOptions(ApiClient.convertToType(data.options,InteractiveOptions));
      }
    }
    return obj;
  };


  return CustomWorkflowAgreementCreationRequest;
}));


