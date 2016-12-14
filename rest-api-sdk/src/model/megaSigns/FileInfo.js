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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/megaSigns/URLFileInfo'));

}(function(ApiClient, URLFileInfo) {
  'use strict';


  /**
   * @module model/megaSigns/FileInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>FileInfo</code>.
   * @alias module:model/megaSigns/FileInfo
   * @class
   */
  var FileInfo = function() {
    var _this = this;


    _this.documentURL = undefined;

    _this.libraryDocumentId = undefined;

    _this.libraryDocumentName = undefined;

    _this.transientDocumentId = undefined;

   /**
    * File at a public URL location
    * @function getDocumentURL
    * @return  {module:model/megaSigns/URLFileInfo} File at a public URL location  
    * @instance
    */
    _this.getDocumentURL = function() {
      return _this.documentURL;
    };

   /**
    * File at a public URL location
    * @function setDocumentURL
    * @param documentURL {module:model/megaSigns/URLFileInfo} File at a public URL location
    * @instance
    */
    _this.setDocumentURL = function(documentURL) {
      _this.documentURL = documentURL;
    };

   /**
    * The ID for a library document that is available to the sender
    * @function getLibraryDocumentId
    * @return  {module:model/megaSigns/String} The ID for a library document that is available to the sender  
    * @instance
    */
    _this.getLibraryDocumentId = function() {
      return _this.libraryDocumentId;
    };

   /**
    * The ID for a library document that is available to the sender
    * @function setLibraryDocumentId
    * @param libraryDocumentId {module:model/megaSigns/String} The ID for a library document that is available to the sender
    * @instance
    */
    _this.setLibraryDocumentId = function(libraryDocumentId) {
      _this.libraryDocumentId = libraryDocumentId;
    };

   /**
    * The name of a library document that is available to the sender
    * @function getLibraryDocumentName
    * @return  {module:model/megaSigns/String} The name of a library document that is available to the sender  
    * @instance
    */
    _this.getLibraryDocumentName = function() {
      return _this.libraryDocumentName;
    };

   /**
    * The name of a library document that is available to the sender
    * @function setLibraryDocumentName
    * @param libraryDocumentName {module:model/megaSigns/String} The name of a library document that is available to the sender
    * @instance
    */
    _this.setLibraryDocumentName = function(libraryDocumentName) {
      _this.libraryDocumentName = libraryDocumentName;
    };

   /**
    * The documentID as returned from the transient document creation API
    * @function getTransientDocumentId
    * @return  {module:model/megaSigns/String} The documentID as returned from the transient document creation API  
    * @instance
    */
    _this.getTransientDocumentId = function() {
      return _this.transientDocumentId;
    };

   /**
    * The documentID as returned from the transient document creation API
    * @function setTransientDocumentId
    * @param transientDocumentId {module:model/megaSigns/String} The documentID as returned from the transient document creation API
    * @instance
    */
    _this.setTransientDocumentId = function(transientDocumentId) {
      _this.transientDocumentId = transientDocumentId;
    };

  };

  /**
   * @private
   * Constructs a <code>FileInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/FileInfo} obj Optional instance to populate.
   * @return {module:model/megaSigns/FileInfo} The populated <code>FileInfo</code> instance.
   */
  FileInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new FileInfo();

      if (data.hasOwnProperty('documentURL')) {
        obj.setDocumentURL(ApiClient.convertToType(data.documentURL,URLFileInfo));
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


  return FileInfo;
}));


