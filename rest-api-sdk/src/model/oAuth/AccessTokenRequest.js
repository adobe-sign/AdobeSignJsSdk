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
   * The AccessTokenInfo model module.
   * @module model/oAuth/AccessTokenInfo
   * @version 1.0.0
   *
   */

  /**
   * Constructs a new <code>AccessTokenRequest</code>.
   * @alias module:model/oAuth/AccessTokenRequest
   * @class
   */
  var AccessTokenRequest = function() {
    var _this = this;

    _this.clientId = undefined;
    _this.clientSecret = undefined;
    _this.redirectUri = undefined;
    _this.code = undefined;
    _this.grantType = undefined;

    /**
     * Identifies the application configured on the OAuth Configuration page.
     * @function getClientId
     * @return clientId {string}
     * @instance
     */
    _this.getClientId = function() {
      return this.clientId;
    };

    /**
     * Identifies the application configured on the OAuth Configuration page.
     * @function setClientId
     * @param clientId {string} ClientId
     * @instance
     */
    _this.setClientId = function (clientId) {
      this.clientId = clientId;
    };

    /**
     * Authenticates the application configured on the OAuth Configuration page.
     * @function getClientSecret
     * @return clientSecret {string} 
     * @instance
     */
    _this.getClientSecret = function() {
      return this.clientSecret;
    };

    /**
     * Authenticates the application configured on the OAuth Configuration page.
     * @function setClientSecret
     * @param clientSecret {string} ClientSecret
     * @instance
     */
    _this.setClientSecret = function (clientSecret) {
      this.clientSecret = clientSecret;
    };

    /**
     * The url where the end user will be redirected after successful completion of authorization.
     * This value must belong to the set of values specified on the OAuth Configuration page.
     * @function getRedirectUri
     * @return redirectUri {string} 
     * @instance
     */
    _this.getRedirectUri = function() {
      return this.redirectUri;
    };

    /**
     * The url where the end user will be redirected after successful completion of authorization.
     * This value must belong to the set of values specified on the OAuth Configuration page.
     * @function setRedirectUri
     * @param redirectUri {string} RedirectUri
     * @instance
     */
    _this.setRedirectUri = function (redirectUri) {
      this.redirectUri = redirectUri;
    };

    /**
     * @return code
     */
    _this.getCode = function() {
      return this.code;
    };

    /**
     * @param code Code
     */
    _this.setCode = function (code) {
      this.code = code;
    };

    /**
     * @return grantType
     */
    _this.getGrantType = function() {
      return this.grantType;
    };

    /**
     * @param grantType GrantType
     */
    _this.setGrantType = function (grantType) {
      this.grantType = grantType;
    };

  };


  /**
   *@private
   * Constructs a <code>AccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/oAuth/AccessTokenRequest} obj Optional instance to populate.
   * @return {module:model/oAuth/AccessTokenRequest} The populated <code>AccessTokenRequest</code> instance.
   */
   AccessTokenRequest.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AccessTokenRequest();

      if (data.hasOwnProperty('client_id')) {
          obj.setClientId(data.client_id);
      }
      if (data.hasOwnProperty('client_secret')) {
          obj.setClientSecret(data.client_secret);
      }
      if (data.hasOwnProperty('redirect_uri')) {
          obj.setRedirectUri(data.redirect_uri);
      }
      if (data.hasOwnProperty('code')) {
        obj.setCode(data.code);
      }
      if (data.hasOwnProperty('grant_type')) {
        obj.setGrantType(data.grant_type);
      }
    }
    return obj;
  };


  return AccessTokenRequest;
}));