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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/libraryDocuments/OriginalDocument'));

}(function(ApiClient, OriginalDocument) {
  'use strict';


  /**
   * @module model/libraryDocuments/Documents
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>Documents</code>.
   * @alias module:model/libraryDocuments/Documents
   * @class
   */
  var Documents = function() {
    var _this = this;


    _this.documents = undefined;

   /**
    * A list of objects representing the documents
    * @function getDocuments
    * @return  {module:model/libraryDocuments/Array} A list of objects representing the documents  
    * @instance
    */
    _this.getDocuments = function() {
      return _this.documents;
    };

   /**
    * A list of objects representing the documents
    * @function setDocuments
    * @param documents {module:model/libraryDocuments/Array} A list of objects representing the documents
    * @instance
    */
    _this.setDocuments = function(documents) {
      _this.documents = documents;
    };

  };

  /**
   * @private
   * Constructs a <code>Documents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/Documents} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/Documents} The populated <code>Documents</code> instance.
   */
  Documents.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new Documents();

      if (data.hasOwnProperty('documents')) {
        obj.setDocuments(ApiClient.convertToType(data.documents,[OriginalDocument]));
      }
    }
    return obj;
  };


  return Documents;
}));


