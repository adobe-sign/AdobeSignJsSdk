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
   * @module model/megaSigns/URLFileInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>URLFileInfo</code>.
   * @alias module:model/megaSigns/URLFileInfo
   * @class
   */
  var URLFileInfo = function() {
    var _this = this;


    _this.mimeType = undefined;

    _this.name = undefined;

    _this.url = undefined;

   /**
    * The mime type of the referenced file, used to determine if the file can be accepted and the necessary conversion steps can be performed
    * @function getMimeType
    * @return  {module:model/megaSigns/String} The mime type of the referenced file, used to determine if the file can be accepted and the necessary conversion steps can be performed  
    * @instance
    */
    _this.getMimeType = function() {
      return _this.mimeType;
    };

   /**
    * The mime type of the referenced file, used to determine if the file can be accepted and the necessary conversion steps can be performed
    * @function setMimeType
    * @param mimeType {module:model/megaSigns/String} The mime type of the referenced file, used to determine if the file can be accepted and the necessary conversion steps can be performed
    * @instance
    */
    _this.setMimeType = function(mimeType) {
      _this.mimeType = mimeType;
    };

   /**
    * The original system file name of the document being sent - used to name attachments, and to infer the mime type if one is not explicitly specified
    * @function getName
    * @return  {module:model/megaSigns/String} The original system file name of the document being sent - used to name attachments, and to infer the mime type if one is not explicitly specified  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The original system file name of the document being sent - used to name attachments, and to infer the mime type if one is not explicitly specified
    * @function setName
    * @param name {module:model/megaSigns/String} The original system file name of the document being sent - used to name attachments, and to infer the mime type if one is not explicitly specified
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * A publicly accessible URL for retrieving the raw file content. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file.
    * @function getUrl
    * @return  {module:model/megaSigns/String} A publicly accessible URL for retrieving the raw file content. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file.  
    * @instance
    */
    _this.getUrl = function() {
      return _this.url;
    };

   /**
    * A publicly accessible URL for retrieving the raw file content. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file.
    * @function setUrl
    * @param url {module:model/megaSigns/String} A publicly accessible URL for retrieving the raw file content. HTTP authentication is supported using standard embedded syntax - i.e. http://username:password@your.server.com/path/to/file.
    * @instance
    */
    _this.setUrl = function(url) {
      _this.url = url;
    };

  };

  /**
   * @private
   * Constructs a <code>URLFileInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/URLFileInfo} obj Optional instance to populate.
   * @return {module:model/megaSigns/URLFileInfo} The populated <code>URLFileInfo</code> instance.
   */
  URLFileInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new URLFileInfo();

      if (data.hasOwnProperty('mimeType')) {
        obj.setMimeType(data.mimeType);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('url')) {
        obj.setUrl(data.url);
      }
    }
    return obj;
  };


  return URLFileInfo;
}));


