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
   * @module model/agreements/SigningUrl
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>SigningUrl</code>.
   * @alias module:model/agreements/SigningUrl
   * @class
   */
  var SigningUrl = function() {
    var _this = this;


    _this.email = undefined;

    _this.esignUrl = undefined;

   /**
    * The email address of the signer associated with this signing url
    * @function getEmail
    * @return  {module:model/agreements/String} The email address of the signer associated with this signing url  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email address of the signer associated with this signing url
    * @function setEmail
    * @param email {module:model/agreements/String} The email address of the signer associated with this signing url
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The email address of the signer associated with this signing url
    * @function getEsignUrl
    * @return  {module:model/agreements/String} The email address of the signer associated with this signing url  
    * @instance
    */
    _this.getEsignUrl = function() {
      return _this.esignUrl;
    };

   /**
    * The email address of the signer associated with this signing url
    * @function setEsignUrl
    * @param esignUrl {module:model/agreements/String} The email address of the signer associated with this signing url
    * @instance
    */
    _this.setEsignUrl = function(esignUrl) {
      _this.esignUrl = esignUrl;
    };

  };

  /**
   * @private
   * Constructs a <code>SigningUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/SigningUrl} obj Optional instance to populate.
   * @return {module:model/agreements/SigningUrl} The populated <code>SigningUrl</code> instance.
   */
  SigningUrl.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new SigningUrl();

      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('esignUrl')) {
        obj.setEsignUrl(data.esignUrl);
      }
    }
    return obj;
  };


  return SigningUrl;
}));


