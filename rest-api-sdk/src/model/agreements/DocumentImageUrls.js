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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/DocumentImageUrl'));

}(function(ApiClient, DocumentImageUrl) {
  'use strict';


  /**
   * @module model/agreements/DocumentImageUrls
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DocumentImageUrls</code>.
   * @alias module:model/agreements/DocumentImageUrls
   * @class
   */
  var DocumentImageUrls = function() {
    var _this = this;


    _this.documentsImageUrls = undefined;

    _this.supportingDocumentsImageUrls = undefined;

   /**
    * A list of documents image URLs.
    * @function getDocumentsImageUrls
    * @return  {module:model/agreements/Array} A list of documents image URLs.  
    * @instance
    */
    _this.getDocumentsImageUrls = function() {
      return _this.documentsImageUrls;
    };

   /**
    * A list of documents image URLs.
    * @function setDocumentsImageUrls
    * @param documentsImageUrls {module:model/agreements/Array} A list of documents image URLs.
    * @instance
    */
    _this.setDocumentsImageUrls = function(documentsImageUrls) {
      _this.documentsImageUrls = documentsImageUrls;
    };

   /**
    * A list of supporting document image URLs.
    * @function getSupportingDocumentsImageUrls
    * @return  {module:model/agreements/Array} A list of supporting document image URLs.  
    * @instance
    */
    _this.getSupportingDocumentsImageUrls = function() {
      return _this.supportingDocumentsImageUrls;
    };

   /**
    * A list of supporting document image URLs.
    * @function setSupportingDocumentsImageUrls
    * @param supportingDocumentsImageUrls {module:model/agreements/Array} A list of supporting document image URLs.
    * @instance
    */
    _this.setSupportingDocumentsImageUrls = function(supportingDocumentsImageUrls) {
      _this.supportingDocumentsImageUrls = supportingDocumentsImageUrls;
    };

  };

  /**
   * @private
   * Constructs a <code>DocumentImageUrls</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/DocumentImageUrls} obj Optional instance to populate.
   * @return {module:model/agreements/DocumentImageUrls} The populated <code>DocumentImageUrls</code> instance.
   */
  DocumentImageUrls.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DocumentImageUrls();

      if (data.hasOwnProperty('documentsImageUrls')) {
        obj.setDocumentsImageUrls(ApiClient.convertToType(data.documentsImageUrls,[DocumentImageUrl]));
      }
      if (data.hasOwnProperty('supportingDocumentsImageUrls')) {
        obj.setSupportingDocumentsImageUrls(ApiClient.convertToType(data.supportingDocumentsImageUrls,[DocumentImageUrl]));
      }
    }
    return obj;
  };


  return DocumentImageUrls;
}));


