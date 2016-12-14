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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/libraryDocuments/InteractiveOptions'), require('../../model/libraryDocuments/LibraryDocumentCreationInfo'));

}(function(ApiClient, InteractiveOptions, LibraryDocumentCreationInfo) {
  'use strict';


  /**
   * @module model/libraryDocuments/LibraryCreationInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>LibraryCreationInfo</code>.
   * @alias module:model/libraryDocuments/LibraryCreationInfo
   * @class
   */
  var LibraryCreationInfo = function() {
    var _this = this;


    _this.libraryDocumentCreationInfo = undefined;

    _this.options = undefined;

   /**
    * Information about the library document you want to create
    * @function getLibraryDocumentCreationInfo
    * @return  {module:model/libraryDocuments/LibraryDocumentCreationInfo} Information about the library document you want to create  
    * @instance
    */
    _this.getLibraryDocumentCreationInfo = function() {
      return _this.libraryDocumentCreationInfo;
    };

   /**
    * Information about the library document you want to create
    * @function setLibraryDocumentCreationInfo
    * @param libraryDocumentCreationInfo {module:model/libraryDocuments/LibraryDocumentCreationInfo} Information about the library document you want to create
    * @instance
    */
    _this.setLibraryDocumentCreationInfo = function(libraryDocumentCreationInfo) {
      _this.libraryDocumentCreationInfo = libraryDocumentCreationInfo;
    };

   /**
    * Options for authoring and sending the agreement
    * @function getOptions
    * @return  {module:model/libraryDocuments/InteractiveOptions} Options for authoring and sending the agreement  
    * @instance
    */
    _this.getOptions = function() {
      return _this.options;
    };

   /**
    * Options for authoring and sending the agreement
    * @function setOptions
    * @param options {module:model/libraryDocuments/InteractiveOptions} Options for authoring and sending the agreement
    * @instance
    */
    _this.setOptions = function(options) {
      _this.options = options;
    };

  };

  /**
   * @private
   * Constructs a <code>LibraryCreationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/LibraryCreationInfo} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/LibraryCreationInfo} The populated <code>LibraryCreationInfo</code> instance.
   */
  LibraryCreationInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new LibraryCreationInfo();

      if (data.hasOwnProperty('libraryDocumentCreationInfo')) {
        obj.setLibraryDocumentCreationInfo(ApiClient.convertToType(data.libraryDocumentCreationInfo,LibraryDocumentCreationInfo));
      }
      if (data.hasOwnProperty('options')) {
        obj.setOptions(ApiClient.convertToType(data.options,InteractiveOptions));
      }
    }
    return obj;
  };


  return LibraryCreationInfo;
}));


