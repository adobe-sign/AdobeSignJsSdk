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
    module.exports = factory(require('../../utils/ApiClient'));

}(function(ApiClient) {
  'use strict';


  /**
   * @module model/agreements/SupportingDocument
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>SupportingDocument</code>.
   * @alias module:model/agreements/SupportingDocument
   * @class
   */
  var SupportingDocument = function() {
    var _this = this;


    _this.displayLabel = undefined;

    _this.fieldName = undefined;

    _this.mimeType = undefined;

    _this.numPages = undefined;

    _this.supportingDocumentId = undefined;

   /**
    * Display name of the document
    * @function getDisplayLabel
    * @return  {module:model/agreements/String} Display name of the document  
    * @instance
    */
    _this.getDisplayLabel = function() {
      return _this.displayLabel;
    };

   /**
    * Display name of the document
    * @function setDisplayLabel
    * @param displayLabel {module:model/agreements/String} Display name of the document
    * @instance
    */
    _this.setDisplayLabel = function(displayLabel) {
      _this.displayLabel = displayLabel;
    };

   /**
    * The name of the supporting document field
    * @function getFieldName
    * @return  {module:model/agreements/String} The name of the supporting document field  
    * @instance
    */
    _this.getFieldName = function() {
      return _this.fieldName;
    };

   /**
    * The name of the supporting document field
    * @function setFieldName
    * @param fieldName {module:model/agreements/String} The name of the supporting document field
    * @instance
    */
    _this.setFieldName = function(fieldName) {
      _this.fieldName = fieldName;
    };

   /**
    * Mime-type of the document
    * @function getMimeType
    * @return  {module:model/agreements/String} Mime-type of the document  
    * @instance
    */
    _this.getMimeType = function() {
      return _this.mimeType;
    };

   /**
    * Mime-type of the document
    * @function setMimeType
    * @param mimeType {module:model/agreements/String} Mime-type of the document
    * @instance
    */
    _this.setMimeType = function(mimeType) {
      _this.mimeType = mimeType;
    };

   /**
    * Number of pages in the document
    * @function getNumPages
    * @return  {module:model/agreements/Integer} Number of pages in the document  
    * @instance
    */
    _this.getNumPages = function() {
      return _this.numPages;
    };

   /**
    * Number of pages in the document
    * @function setNumPages
    * @param numPages {module:model/agreements/Integer} Number of pages in the document
    * @instance
    */
    _this.setNumPages = function(numPages) {
      _this.numPages = numPages;
    };

   /**
    * Id representing the document
    * @function getSupportingDocumentId
    * @return  {module:model/agreements/String} Id representing the document  
    * @instance
    */
    _this.getSupportingDocumentId = function() {
      return _this.supportingDocumentId;
    };

   /**
    * Id representing the document
    * @function setSupportingDocumentId
    * @param supportingDocumentId {module:model/agreements/String} Id representing the document
    * @instance
    */
    _this.setSupportingDocumentId = function(supportingDocumentId) {
      _this.supportingDocumentId = supportingDocumentId;
    };

  };

  /**
   * @private
   * Constructs a <code>SupportingDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/SupportingDocument} obj Optional instance to populate.
   * @return {module:model/agreements/SupportingDocument} The populated <code>SupportingDocument</code> instance.
   */
  SupportingDocument.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new SupportingDocument();

      if (data.hasOwnProperty('displayLabel')) {
        obj.setDisplayLabel(data.displayLabel);
      }
      if (data.hasOwnProperty('fieldName')) {
        obj.setFieldName(data.fieldName);
      }
      if (data.hasOwnProperty('mimeType')) {
        obj.setMimeType(data.mimeType);
      }
      if (data.hasOwnProperty('numPages')) {
        obj.setNumPages(data.numPages);
      }
      if (data.hasOwnProperty('supportingDocumentId')) {
        obj.setSupportingDocumentId(data.supportingDocumentId);
      }
    }
    return obj;
  };


  return SupportingDocument;
}));


