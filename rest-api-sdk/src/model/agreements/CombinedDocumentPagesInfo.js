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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/DocumentPageInfo'));

}(function(ApiClient, DocumentPageInfo) {
  'use strict';


  /**
   * @module model/agreements/CombinedDocumentPagesInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>CombinedDocumentPagesInfo</code>.
   * @alias module:model/agreements/CombinedDocumentPagesInfo
   * @class
   */
  var CombinedDocumentPagesInfo = function() {
    var _this = this;


    _this.documentPagesInfo = undefined;

   /**
    * List of basic information of all pages of the combined document of an Agreement.
    * @function getDocumentPagesInfo
    * @return  {module:model/agreements/Array} List of basic information of all pages of the combined document of an Agreement.  
    * @instance
    */
    _this.getDocumentPagesInfo = function() {
      return _this.documentPagesInfo;
    };

   /**
    * List of basic information of all pages of the combined document of an Agreement.
    * @function setDocumentPagesInfo
    * @param documentPagesInfo {module:model/agreements/Array} List of basic information of all pages of the combined document of an Agreement.
    * @instance
    */
    _this.setDocumentPagesInfo = function(documentPagesInfo) {
      _this.documentPagesInfo = documentPagesInfo;
    };

  };

  /**
   * @private
   * Constructs a <code>CombinedDocumentPagesInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/CombinedDocumentPagesInfo} obj Optional instance to populate.
   * @return {module:model/agreements/CombinedDocumentPagesInfo} The populated <code>CombinedDocumentPagesInfo</code> instance.
   */
  CombinedDocumentPagesInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new CombinedDocumentPagesInfo();

      if (data.hasOwnProperty('documentPagesInfo')) {
        obj.setDocumentPagesInfo(ApiClient.convertToType(data.documentPagesInfo,[DocumentPageInfo]));
      }
    }
    return obj;
  };


  return CombinedDocumentPagesInfo;
}));


