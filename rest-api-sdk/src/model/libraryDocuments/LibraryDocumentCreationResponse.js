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
   * @module model/libraryDocuments/LibraryDocumentCreationResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>LibraryDocumentCreationResponse</code>.
   * A JSON object describing the library template
   * @alias module:model/libraryDocuments/LibraryDocumentCreationResponse
   * @class
   */
  var LibraryDocumentCreationResponse = function() {
    var _this = this;


    _this.embeddedCode = undefined;

    _this.expiration = undefined;

    _this.libraryDocumentId = undefined;

    _this.url = undefined;

   /**
    * Javascript snippet suitable for an embedded page taking a user to a URL
    * @function getEmbeddedCode
    * @return  {module:model/libraryDocuments/String} Javascript snippet suitable for an embedded page taking a user to a URL  
    * @instance
    */
    _this.getEmbeddedCode = function() {
      return _this.embeddedCode;
    };

   /**
    * Javascript snippet suitable for an embedded page taking a user to a URL
    * @function setEmbeddedCode
    * @param embeddedCode {module:model/libraryDocuments/String} Javascript snippet suitable for an embedded page taking a user to a URL
    * @instance
    */
    _this.setEmbeddedCode = function(embeddedCode) {
      _this.embeddedCode = embeddedCode;
    };

   /**
    * Expiration date for autologin. This is based on the user setting, API_AUTO_LOGIN_LIFETIME
    * @function getExpiration
    * @return  {module:model/libraryDocuments/Date} Expiration date for autologin. This is based on the user setting, API_AUTO_LOGIN_LIFETIME  
    * @instance
    */
    _this.getExpiration = function() {
      return _this.expiration;
    };

   /**
    * Expiration date for autologin. This is based on the user setting, API_AUTO_LOGIN_LIFETIME
    * @function setExpiration
    * @param expiration {module:model/libraryDocuments/Date} Expiration date for autologin. This is based on the user setting, API_AUTO_LOGIN_LIFETIME
    * @instance
    */
    _this.setExpiration = function(expiration) {
      _this.expiration = expiration;
    };

   /**
    * The unique identifier that can be used to refer to the library template
    * @function getLibraryDocumentId
    * @return  {module:model/libraryDocuments/String} The unique identifier that can be used to refer to the library template  
    * @instance
    */
    _this.getLibraryDocumentId = function() {
      return _this.libraryDocumentId;
    };

   /**
    * The unique identifier that can be used to refer to the library template
    * @function setLibraryDocumentId
    * @param libraryDocumentId {module:model/libraryDocuments/String} The unique identifier that can be used to refer to the library template
    * @instance
    */
    _this.setLibraryDocumentId = function(libraryDocumentId) {
      _this.libraryDocumentId = libraryDocumentId;
    };

   /**
    * Standalone URL to direct end users to
    * @function getUrl
    * @return  {module:model/libraryDocuments/String} Standalone URL to direct end users to  
    * @instance
    */
    _this.getUrl = function() {
      return _this.url;
    };

   /**
    * Standalone URL to direct end users to
    * @function setUrl
    * @param url {module:model/libraryDocuments/String} Standalone URL to direct end users to
    * @instance
    */
    _this.setUrl = function(url) {
      _this.url = url;
    };

  };

  /**
   * @private
   * Constructs a <code>LibraryDocumentCreationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/LibraryDocumentCreationResponse} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/LibraryDocumentCreationResponse} The populated <code>LibraryDocumentCreationResponse</code> instance.
   */
  LibraryDocumentCreationResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new LibraryDocumentCreationResponse();

      if (data.hasOwnProperty('embeddedCode')) {
        obj.setEmbeddedCode(data.embeddedCode);
      }
      if (data.hasOwnProperty('expiration')) {
        obj.setExpiration(data.expiration);
      }
      if (data.hasOwnProperty('libraryDocumentId')) {
        obj.setLibraryDocumentId(data.libraryDocumentId);
      }
      if (data.hasOwnProperty('url')) {
        obj.setUrl(data.url);
      }
    }
    return obj;
  };


  return LibraryDocumentCreationResponse;
}));


