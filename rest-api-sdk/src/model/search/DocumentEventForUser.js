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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/search/DocumentHistoryEvent'));

}(function(ApiClient, DocumentHistoryEvent) {
  'use strict';


  /**
   * @module model/search/DocumentEventForUser
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DocumentEventForUser</code>.
   * @alias module:model/search/DocumentEventForUser
   * @class
   */
  var DocumentEventForUser = function() {
    var _this = this;


    _this.agreementAssetId = undefined;

    _this.agreementAssetName = undefined;

    _this.agreementAssetType = undefined;

    _this.documentHistoryEvent = undefined;

   /**
    * The ID of the agreement asset.
    * @function getAgreementAssetId
    * @return  {module:model/search/String} The ID of the agreement asset.  
    * @instance
    */
    _this.getAgreementAssetId = function() {
      return _this.agreementAssetId;
    };

   /**
    * The ID of the agreement asset.
    * @function setAgreementAssetId
    * @param agreementAssetId {module:model/search/String} The ID of the agreement asset.
    * @instance
    */
    _this.setAgreementAssetId = function(agreementAssetId) {
      _this.agreementAssetId = agreementAssetId;
    };

   /**
    * The name of the agreement asset
    * @function getAgreementAssetName
    * @return  {module:model/search/String} The name of the agreement asset  
    * @instance
    */
    _this.getAgreementAssetName = function() {
      return _this.agreementAssetName;
    };

   /**
    * The name of the agreement asset
    * @function setAgreementAssetName
    * @param agreementAssetName {module:model/search/String} The name of the agreement asset
    * @instance
    */
    _this.setAgreementAssetName = function(agreementAssetName) {
      _this.agreementAssetName = agreementAssetName;
    };

   /**
    * The type of the agreement asset
    * @function getAgreementAssetType
    * @return  {module:model/search/String} The type of the agreement asset  
    * @instance
    */
    _this.getAgreementAssetType = function() {
      return _this.agreementAssetType;
    };

   /**
    * The type of the agreement asset
    * @function setAgreementAssetType
    * @param agreementAssetType {module:model/search/String} The type of the agreement asset
    * @instance
    */
    _this.setAgreementAssetType = function(agreementAssetType) {
      _this.agreementAssetType = agreementAssetType;
    };

   /**
    * An ordered list of the events in the audit trail of this document
    * @function getDocumentHistoryEvent
    * @return  {module:model/search/DocumentHistoryEvent} An ordered list of the events in the audit trail of this document  
    * @instance
    */
    _this.getDocumentHistoryEvent = function() {
      return _this.documentHistoryEvent;
    };

   /**
    * An ordered list of the events in the audit trail of this document
    * @function setDocumentHistoryEvent
    * @param documentHistoryEvent {module:model/search/DocumentHistoryEvent} An ordered list of the events in the audit trail of this document
    * @instance
    */
    _this.setDocumentHistoryEvent = function(documentHistoryEvent) {
      _this.documentHistoryEvent = documentHistoryEvent;
    };

  };

  /**
   * @private
   * Constructs a <code>DocumentEventForUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/search/DocumentEventForUser} obj Optional instance to populate.
   * @return {module:model/search/DocumentEventForUser} The populated <code>DocumentEventForUser</code> instance.
   */
  DocumentEventForUser.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DocumentEventForUser();

      if (data.hasOwnProperty('agreementAssetId')) {
        obj.setAgreementAssetId(data.agreementAssetId);
      }
      if (data.hasOwnProperty('agreementAssetName')) {
        obj.setAgreementAssetName(data.agreementAssetName);
      }
      if (data.hasOwnProperty('agreementAssetType')) {
        obj.setAgreementAssetType(data.agreementAssetType);
      }
      if (data.hasOwnProperty('documentHistoryEvent')) {
        obj.setDocumentHistoryEvent(ApiClient.convertToType(data.documentHistoryEvent,DocumentHistoryEvent));
      }
    }
    return obj;
  };


  return DocumentEventForUser;
}));


