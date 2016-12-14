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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/libraryDocuments/DocumentLibraryItem'));

}(function(ApiClient, DocumentLibraryItem) {
  'use strict';


  /**
   * @module model/libraryDocuments/DocumentLibraryItems
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DocumentLibraryItems</code>.
   * @alias module:model/libraryDocuments/DocumentLibraryItems
   * @class
   */
  var DocumentLibraryItems = function() {
    var _this = this;


    _this.libraryDocumentList = undefined;

   /**
    * An array of document library items
    * @function getLibraryDocumentList
    * @return  {module:model/libraryDocuments/Array} An array of document library items  
    * @instance
    */
    _this.getLibraryDocumentList = function() {
      return _this.libraryDocumentList;
    };

   /**
    * An array of document library items
    * @function setLibraryDocumentList
    * @param libraryDocumentList {module:model/libraryDocuments/Array} An array of document library items
    * @instance
    */
    _this.setLibraryDocumentList = function(libraryDocumentList) {
      _this.libraryDocumentList = libraryDocumentList;
    };

  };

  /**
   * @private
   * Constructs a <code>DocumentLibraryItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/DocumentLibraryItems} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/DocumentLibraryItems} The populated <code>DocumentLibraryItems</code> instance.
   */
  DocumentLibraryItems.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DocumentLibraryItems();

      if (data.hasOwnProperty('libraryDocumentList')) {
        obj.setLibraryDocumentList(ApiClient.convertToType(data.libraryDocumentList,[DocumentLibraryItem]));
      }
    }
    return obj;
  };


  return DocumentLibraryItems;
}));


