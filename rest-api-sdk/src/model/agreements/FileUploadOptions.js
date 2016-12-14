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
   * @module model/agreements/FileUploadOptions
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>FileUploadOptions</code>.
   * @alias module:model/agreements/FileUploadOptions
   * @class
   */
  var FileUploadOptions = function() {
    var _this = this;


    _this.libraryDocument = undefined;

    _this.localFile = undefined;

    _this.webConnectors = undefined;

   /**
    * Whether library documents link should appear or not. Default value is taken as true
    * @function getLibraryDocument
    * @return  {module:model/agreements/Boolean} Whether library documents link should appear or not. Default value is taken as true  
    * @instance
    */
    _this.getLibraryDocument = function() {
      return _this.libraryDocument;
    };

   /**
    * Whether library documents link should appear or not. Default value is taken as true
    * @function setLibraryDocument
    * @param libraryDocument {module:model/agreements/Boolean} Whether library documents link should appear or not. Default value is taken as true
    * @instance
    */
    _this.setLibraryDocument = function(libraryDocument) {
      _this.libraryDocument = libraryDocument;
    };

   /**
    * Whether local file upload button should appear or not. Default value is taken as true
    * @function getLocalFile
    * @return  {module:model/agreements/Boolean} Whether local file upload button should appear or not. Default value is taken as true  
    * @instance
    */
    _this.getLocalFile = function() {
      return _this.localFile;
    };

   /**
    * Whether local file upload button should appear or not. Default value is taken as true
    * @function setLocalFile
    * @param localFile {module:model/agreements/Boolean} Whether local file upload button should appear or not. Default value is taken as true
    * @instance
    */
    _this.setLocalFile = function(localFile) {
      _this.localFile = localFile;
    };

   /**
    * Whether link to attach documents from web sources like Dropbox should appear or not. Default value is taken as true
    * @function getWebConnectors
    * @return  {module:model/agreements/Boolean} Whether link to attach documents from web sources like Dropbox should appear or not. Default value is taken as true  
    * @instance
    */
    _this.getWebConnectors = function() {
      return _this.webConnectors;
    };

   /**
    * Whether link to attach documents from web sources like Dropbox should appear or not. Default value is taken as true
    * @function setWebConnectors
    * @param webConnectors {module:model/agreements/Boolean} Whether link to attach documents from web sources like Dropbox should appear or not. Default value is taken as true
    * @instance
    */
    _this.setWebConnectors = function(webConnectors) {
      _this.webConnectors = webConnectors;
    };

  };

  /**
   * @private
   * Constructs a <code>FileUploadOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/FileUploadOptions} obj Optional instance to populate.
   * @return {module:model/agreements/FileUploadOptions} The populated <code>FileUploadOptions</code> instance.
   */
  FileUploadOptions.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new FileUploadOptions();

      if (data.hasOwnProperty('libraryDocument')) {
        obj.setLibraryDocument(data.libraryDocument);
      }
      if (data.hasOwnProperty('localFile')) {
        obj.setLocalFile(data.localFile);
      }
      if (data.hasOwnProperty('webConnectors')) {
        obj.setWebConnectors(data.webConnectors);
      }
    }
    return obj;
  };


  return FileUploadOptions;
}));


