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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/libraryDocuments/FileInfo'));

}(function(ApiClient, FileInfo) {
  'use strict';


  /**
   * @module model/libraryDocuments/LibraryDocumentCreationInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>LibraryDocumentCreationInfo</code>.
   * @alias module:model/libraryDocuments/LibraryDocumentCreationInfo
   * @class
   */
  var LibraryDocumentCreationInfo = function() {
    var _this = this;


    _this.fileInfos = undefined;

    _this.librarySharingMode = undefined;

    _this.libraryTemplateTypes = undefined;

    _this.name = undefined;

   /**
    * A list of one or more files (or references to files) that will be sent out for signature. If more than one file is provided, they will be combined into one PDF before being sent out. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function getFileInfos
    * @return  {module:model/libraryDocuments/Array} A list of one or more files (or references to files) that will be sent out for signature. If more than one file is provided, they will be combined into one PDF before being sent out. Note: Only one of the four parameters in every FileInfo object must be specified  
    * @instance
    */
    _this.getFileInfos = function() {
      return _this.fileInfos;
    };

   /**
    * A list of one or more files (or references to files) that will be sent out for signature. If more than one file is provided, they will be combined into one PDF before being sent out. Note: Only one of the four parameters in every FileInfo object must be specified
    * @function setFileInfos
    * @param fileInfos {module:model/libraryDocuments/Array} A list of one or more files (or references to files) that will be sent out for signature. If more than one file is provided, they will be combined into one PDF before being sent out. Note: Only one of the four parameters in every FileInfo object must be specified
    * @instance
    */
    _this.setFileInfos = function(fileInfos) {
      _this.fileInfos = fileInfos;
    };

   /**
    * Specifies who should have access to this library document
    * @function getLibrarySharingMode
    * @return  {module:model/libraryDocuments/String} Specifies who should have access to this library document  
    * @instance
    */
    _this.getLibrarySharingMode = function() {
      return _this.librarySharingMode;
    };

   /**
    * Specifies who should have access to this library document
    * @function setLibrarySharingMode
    * @param librarySharingMode {module:model/libraryDocuments/String} Specifies who should have access to this library document
    * @instance
    */
    _this.setLibrarySharingMode = function(librarySharingMode) {
      _this.librarySharingMode = librarySharingMode;
    };

   /**
    * A list of one or more library template types
    * @function getLibraryTemplateTypes
    * @return  {module:model/libraryDocuments/Array} A list of one or more library template types  
    * @instance
    */
    _this.getLibraryTemplateTypes = function() {
      return _this.libraryTemplateTypes;
    };

   /**
    * A list of one or more library template types
    * @function setLibraryTemplateTypes
    * @param libraryTemplateTypes {module:model/libraryDocuments/Array} A list of one or more library template types
    * @instance
    */
    _this.setLibraryTemplateTypes = function(libraryTemplateTypes) {
      _this.libraryTemplateTypes = libraryTemplateTypes;
    };

   /**
    * The name of the agreement that will be used to identify it, in emails and on the website
    * @function getName
    * @return  {module:model/libraryDocuments/String} The name of the agreement that will be used to identify it, in emails and on the website  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the agreement that will be used to identify it, in emails and on the website
    * @function setName
    * @param name {module:model/libraryDocuments/String} The name of the agreement that will be used to identify it, in emails and on the website
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

  };

  /**
   * @private
   * Constructs a <code>LibraryDocumentCreationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/LibraryDocumentCreationInfo} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/LibraryDocumentCreationInfo} The populated <code>LibraryDocumentCreationInfo</code> instance.
   */
  LibraryDocumentCreationInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new LibraryDocumentCreationInfo();

      if (data.hasOwnProperty('fileInfos')) {
        obj.setFileInfos(ApiClient.convertToType(data.fileInfos,[FileInfo]));
      }
      if (data.hasOwnProperty('librarySharingMode')) {
        obj.setLibrarySharingMode(data.librarySharingMode);
      }
      if (data.hasOwnProperty('libraryTemplateTypes')) {
        obj.setLibraryTemplateTypes(data.libraryTemplateTypes);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>librarySharingMode</code> property.
   * @enum {String}
   * @readonly
   */
LibraryDocumentCreationInfo.LibrarySharingModeEnum = {
  
  
    /**
     * value: USER
     * @const
     */
    USER: "USER",
    
  
    /**
     * value: GROUP
     * @const
     */
    GROUP: "GROUP",
    
  
    /**
     * value: ACCOUNT
     * @const
     */
    ACCOUNT: "ACCOUNT"
  
  
  };

  /**
   * Allowed values for the <code>libraryTemplateTypes</code> property.
   * @enum {String}
   * @readonly
   */
LibraryDocumentCreationInfo.LibraryTemplateTypesEnum = {
  
  
    /**
     * value: DOCUMENT
     * @const
     */
    DOCUMENT: "DOCUMENT",
    
  
    /**
     * value: FORM_FIELD_LAYER
     * @const
     */
    FORM_FIELD_LAYER: "FORM_FIELD_LAYER"
  
  
  };

  return LibraryDocumentCreationInfo;
}));


