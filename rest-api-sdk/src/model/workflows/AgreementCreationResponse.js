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
   * @module model/workflows/AgreementCreationResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>AgreementCreationResponse</code>.
   * A JSON that contains both the id of the newly created agreement and URL / embedded code to direct the user to tne next step in the creation process.
   * @alias module:model/workflows/AgreementCreationResponse
   * @class
   */
  var AgreementCreationResponse = function() {
    var _this = this;


    _this.agreementId = undefined;

    _this.embeddedCode = undefined;

    _this.expiration = undefined;

    _this.url = undefined;

   /**
    * The unique identifier that can be used to query status and download signed documents
    * @function getAgreementId
    * @return  {module:model/workflows/String} The unique identifier that can be used to query status and download signed documents  
    * @instance
    */
    _this.getAgreementId = function() {
      return _this.agreementId;
    };

   /**
    * The unique identifier that can be used to query status and download signed documents
    * @function setAgreementId
    * @param agreementId {module:model/workflows/String} The unique identifier that can be used to query status and download signed documents
    * @instance
    */
    _this.setAgreementId = function(agreementId) {
      _this.agreementId = agreementId;
    };

   /**
    * Javascript snippet suitable for an embedded page taking a user to a URL
    * @function getEmbeddedCode
    * @return  {module:model/workflows/String} Javascript snippet suitable for an embedded page taking a user to a URL  
    * @instance
    */
    _this.getEmbeddedCode = function() {
      return _this.embeddedCode;
    };

   /**
    * Javascript snippet suitable for an embedded page taking a user to a URL
    * @function setEmbeddedCode
    * @param embeddedCode {module:model/workflows/String} Javascript snippet suitable for an embedded page taking a user to a URL
    * @instance
    */
    _this.setEmbeddedCode = function(embeddedCode) {
      _this.embeddedCode = embeddedCode;
    };

   /**
    * Expiration date for autologin. This is based on the user setting, API_AUTO_LOGIN_LIFETIME
    * @function getExpiration
    * @return  {module:model/workflows/Date} Expiration date for autologin. This is based on the user setting, API_AUTO_LOGIN_LIFETIME  
    * @instance
    */
    _this.getExpiration = function() {
      return _this.expiration;
    };

   /**
    * Expiration date for autologin. This is based on the user setting, API_AUTO_LOGIN_LIFETIME
    * @function setExpiration
    * @param expiration {module:model/workflows/Date} Expiration date for autologin. This is based on the user setting, API_AUTO_LOGIN_LIFETIME
    * @instance
    */
    _this.setExpiration = function(expiration) {
      _this.expiration = expiration;
    };

   /**
    * Standalone URL to direct end users to
    * @function getUrl
    * @return  {module:model/workflows/String} Standalone URL to direct end users to  
    * @instance
    */
    _this.getUrl = function() {
      return _this.url;
    };

   /**
    * Standalone URL to direct end users to
    * @function setUrl
    * @param url {module:model/workflows/String} Standalone URL to direct end users to
    * @instance
    */
    _this.setUrl = function(url) {
      _this.url = url;
    };

  };

  /**
   * @private
   * Constructs a <code>AgreementCreationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/AgreementCreationResponse} obj Optional instance to populate.
   * @return {module:model/workflows/AgreementCreationResponse} The populated <code>AgreementCreationResponse</code> instance.
   */
  AgreementCreationResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AgreementCreationResponse();

      if (data.hasOwnProperty('agreementId')) {
        obj.setAgreementId(data.agreementId);
      }
      if (data.hasOwnProperty('embeddedCode')) {
        obj.setEmbeddedCode(data.embeddedCode);
      }
      if (data.hasOwnProperty('expiration')) {
        obj.setExpiration(data.expiration);
      }
      if (data.hasOwnProperty('url')) {
        obj.setUrl(data.url);
      }
    }
    return obj;
  };


  return AgreementCreationResponse;
}));


