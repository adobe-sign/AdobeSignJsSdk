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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/WidgetURLFileInfo'));

}(function(ApiClient, WidgetURLFileInfo) {
  'use strict';


  /**
   * @module model/widgets/WidgetFileInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetFileInfo</code>.
   * @alias module:model/widgets/WidgetFileInfo
   * @class
   */
  var WidgetFileInfo = function() {
    var _this = this;


    _this.documentURL = undefined;

    _this.libraryDocumentId = undefined;

    _this.libraryDocumentName = undefined;

    _this.transientDocumentId = undefined;

   /**
    * File at a public URL location
    * @function getDocumentURL
    * @return  {module:model/widgets/WidgetURLFileInfo} File at a public URL location  
    * @instance
    */
    _this.getDocumentURL = function() {
      return _this.documentURL;
    };

   /**
    * File at a public URL location
    * @function setDocumentURL
    * @param documentURL {module:model/widgets/WidgetURLFileInfo} File at a public URL location
    * @instance
    */
    _this.setDocumentURL = function(documentURL) {
      _this.documentURL = documentURL;
    };

   /**
    * The ID for a library document that is available to the sender. Note only applicable when used as formFieldLayerTemplates
    * @function getLibraryDocumentId
    * @return  {module:model/widgets/String} The ID for a library document that is available to the sender. Note only applicable when used as formFieldLayerTemplates  
    * @instance
    */
    _this.getLibraryDocumentId = function() {
      return _this.libraryDocumentId;
    };

   /**
    * The ID for a library document that is available to the sender. Note only applicable when used as formFieldLayerTemplates
    * @function setLibraryDocumentId
    * @param libraryDocumentId {module:model/widgets/String} The ID for a library document that is available to the sender. Note only applicable when used as formFieldLayerTemplates
    * @instance
    */
    _this.setLibraryDocumentId = function(libraryDocumentId) {
      _this.libraryDocumentId = libraryDocumentId;
    };

   /**
    * The name of a library document that is available to the sender. Note only applicable when used as formFieldLayerTemplates
    * @function getLibraryDocumentName
    * @return  {module:model/widgets/String} The name of a library document that is available to the sender. Note only applicable when used as formFieldLayerTemplates  
    * @instance
    */
    _this.getLibraryDocumentName = function() {
      return _this.libraryDocumentName;
    };

   /**
    * The name of a library document that is available to the sender. Note only applicable when used as formFieldLayerTemplates
    * @function setLibraryDocumentName
    * @param libraryDocumentName {module:model/widgets/String} The name of a library document that is available to the sender. Note only applicable when used as formFieldLayerTemplates
    * @instance
    */
    _this.setLibraryDocumentName = function(libraryDocumentName) {
      _this.libraryDocumentName = libraryDocumentName;
    };

   /**
    * The documentID as returned from the transient document creation API
    * @function getTransientDocumentId
    * @return  {module:model/widgets/String} The documentID as returned from the transient document creation API  
    * @instance
    */
    _this.getTransientDocumentId = function() {
      return _this.transientDocumentId;
    };

   /**
    * The documentID as returned from the transient document creation API
    * @function setTransientDocumentId
    * @param transientDocumentId {module:model/widgets/String} The documentID as returned from the transient document creation API
    * @instance
    */
    _this.setTransientDocumentId = function(transientDocumentId) {
      _this.transientDocumentId = transientDocumentId;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetFileInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetFileInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetFileInfo} The populated <code>WidgetFileInfo</code> instance.
   */
  WidgetFileInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetFileInfo();

      if (data.hasOwnProperty('documentURL')) {
        obj.setDocumentURL(ApiClient.convertToType(data.documentURL,WidgetURLFileInfo));
      }
      if (data.hasOwnProperty('libraryDocumentId')) {
        obj.setLibraryDocumentId(data.libraryDocumentId);
      }
      if (data.hasOwnProperty('libraryDocumentName')) {
        obj.setLibraryDocumentName(data.libraryDocumentName);
      }
      if (data.hasOwnProperty('transientDocumentId')) {
        obj.setTransientDocumentId(data.transientDocumentId);
      }
    }
    return obj;
  };


  return WidgetFileInfo;
}));


