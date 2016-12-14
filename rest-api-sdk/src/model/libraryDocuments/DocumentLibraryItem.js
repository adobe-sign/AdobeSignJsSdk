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
   * @module model/libraryDocuments/DocumentLibraryItem
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DocumentLibraryItem</code>.
   * @alias module:model/libraryDocuments/DocumentLibraryItem
   * @class
   */
  var DocumentLibraryItem = function() {
    var _this = this;


    _this.libraryDocumentId = undefined;

    _this.libraryTemplateTypes = undefined;

    _this.modifiedDate = undefined;

    _this.name = undefined;

    _this.scope = undefined;

   /**
    * The unique identifier of the library document used when sending the document to be signed
    * @function getLibraryDocumentId
    * @return  {module:model/libraryDocuments/String} The unique identifier of the library document used when sending the document to be signed  
    * @instance
    */
    _this.getLibraryDocumentId = function() {
      return _this.libraryDocumentId;
    };

   /**
    * The unique identifier of the library document used when sending the document to be signed
    * @function setLibraryDocumentId
    * @param libraryDocumentId {module:model/libraryDocuments/String} The unique identifier of the library document used when sending the document to be signed
    * @instance
    */
    _this.setLibraryDocumentId = function(libraryDocumentId) {
      _this.libraryDocumentId = libraryDocumentId;
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
    * The day on which the library document was last modified
    * @function getModifiedDate
    * @return  {module:model/libraryDocuments/Date} The day on which the library document was last modified  
    * @instance
    */
    _this.getModifiedDate = function() {
      return _this.modifiedDate;
    };

   /**
    * The day on which the library document was last modified
    * @function setModifiedDate
    * @param modifiedDate {module:model/libraryDocuments/Date} The day on which the library document was last modified
    * @instance
    */
    _this.setModifiedDate = function(modifiedDate) {
      _this.modifiedDate = modifiedDate;
    };

   /**
    * The name of the library document
    * @function getName
    * @return  {module:model/libraryDocuments/String} The name of the library document  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the library document
    * @function setName
    * @param name {module:model/libraryDocuments/String} The name of the library document
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * The scope of visibility of the library document
    * @function getScope
    * @return  {module:model/libraryDocuments/String} The scope of visibility of the library document  
    * @instance
    */
    _this.getScope = function() {
      return _this.scope;
    };

   /**
    * The scope of visibility of the library document
    * @function setScope
    * @param scope {module:model/libraryDocuments/String} The scope of visibility of the library document
    * @instance
    */
    _this.setScope = function(scope) {
      _this.scope = scope;
    };

  };

  /**
   * @private
   * Constructs a <code>DocumentLibraryItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/DocumentLibraryItem} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/DocumentLibraryItem} The populated <code>DocumentLibraryItem</code> instance.
   */
  DocumentLibraryItem.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DocumentLibraryItem();

      if (data.hasOwnProperty('libraryDocumentId')) {
        obj.setLibraryDocumentId(data.libraryDocumentId);
      }
      if (data.hasOwnProperty('libraryTemplateTypes')) {
        obj.setLibraryTemplateTypes(data.libraryTemplateTypes);
      }
      if (data.hasOwnProperty('modifiedDate')) {
        obj.setModifiedDate(data.modifiedDate);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('scope')) {
        obj.setScope(data.scope);
      }
    }
    return obj;
  };


  /**
   * Allowed values for the <code>libraryTemplateTypes</code> property.
   * @enum {String}
   * @readonly
   */
DocumentLibraryItem.LibraryTemplateTypesEnum = {
  
  
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
  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
DocumentLibraryItem.ScopeEnum = {
  
  
    /**
     * value: PERSONAL
     * @const
     */
    PERSONAL: "PERSONAL",
    
  
    /**
     * value: SHARED
     * @const
     */
    SHARED: "SHARED",
    
  
    /**
     * value: GLOBAL
     * @const
     */
    GLOBAL: "GLOBAL"
  
  
  };

  return DocumentLibraryItem;
}));


