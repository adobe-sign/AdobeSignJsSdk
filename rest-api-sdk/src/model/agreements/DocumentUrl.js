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
   * @module model/agreements/DocumentUrl
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DocumentUrl</code>.
   * @alias module:model/agreements/DocumentUrl
   * @class
   */
  var DocumentUrl = function() {
    var _this = this;


    _this.url = undefined;

   /**
    * Secure URL of the document
    * @function getUrl
    * @return  {module:model/agreements/String} Secure URL of the document  
    * @instance
    */
    _this.getUrl = function() {
      return _this.url;
    };

   /**
    * Secure URL of the document
    * @function setUrl
    * @param url {module:model/agreements/String} Secure URL of the document
    * @instance
    */
    _this.setUrl = function(url) {
      _this.url = url;
    };

  };

  /**
   * @private
   * Constructs a <code>DocumentUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/DocumentUrl} obj Optional instance to populate.
   * @return {module:model/agreements/DocumentUrl} The populated <code>DocumentUrl</code> instance.
   */
  DocumentUrl.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DocumentUrl();

      if (data.hasOwnProperty('url')) {
        obj.setUrl(data.url);
      }
    }
    return obj;
  };


  return DocumentUrl;
}));


