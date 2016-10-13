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
 * The AccessTokenRefreshRequest model module.
 * @module model/oAuth/AccessTokenRefreshRequest
 * @version 1.0.0
 *
 */

/**
 * Constructs a new <code>AccessTokenRefreshRequest</code>.
 * @alias module:model/oAuth/AccessTokenRefreshRequest
 * @class
 */
var AccessTokenRefreshRequest = function() {
  var _this = this;

  _this.clientId = undefined;
  _this.clientSecret = undefined;
  _this.refreshToken = undefined;
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
   * @param clientId {string}
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
   * @param clientSecret {string}
   * @instance
   */
  _this.setClientSecret = function (clientSecret) {
    this.clientSecret = clientSecret;
  };

  /**
   * Token which is used to refresh existing access token.
   * @function getRefreshToken
   * @return refreshToken {string}
   * @instance
   */
  _this.getRefreshToken = function() {
    return this.refreshToken;
  };

  /**
   * Token which is used to refresh existing access token.
   * @function setRefreshToken
   * @param refreshToken {string}
   * @instance
   */
  _this.setRefreshToken = function (refreshToken) {
    this.refreshToken = refreshToken;
  };

  /**
   * Value must always be "refresh_token".
   * @function getGrantType
   * @return grantType {string}
   * @instance
   */
  _this.getGrantType = function() {
    return this.grantType;
  };

  /**
   * Value must always be "refresh_token".
   * @function setGrantType
   * @param grantType {string}
   * @instance
   */
  _this.setGrantType = function (grantType) {
    this.grantType = grantType;
  };

};


/**
 * @private
 * Constructs a <code>AccessTokenRefreshRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/oAuth/AccessTokenRefreshRequest} obj Optional instance to populate.
 * @return {module:model/oAuth/AccessTokenRefreshRequest} The populated <code>AccessTokenRefreshRequest</code> instance.
 */
AccessTokenRefreshRequest.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new AccessTokenRefreshRequest();

    if (data.hasOwnProperty('client_id')) {
      obj.setClientId(data.client_id);
    }
    if (data.hasOwnProperty('client_secret')) {
      obj.setClientSecret(data.client_secret);
    }
    if (data.hasOwnProperty('refresh_token')) {
      obj.setRefreshToken(data.refresh_token);
    }
    if (data.hasOwnProperty('grant_type')) {
      obj.setGrantType(data.grant_type);
    }
  }
  return obj;
};

return AccessTokenRefreshRequest;
}));