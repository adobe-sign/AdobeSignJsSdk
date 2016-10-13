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
 * The AccessTokenRefreshResponse model module.
 * @module model/oAuth/AccessTokenRefreshResponse
 * @version 1.0.0
 *
 */

/**
 * Constructs a new <code>AccessTokenRefreshResponse</code>.
 * @alias module:model/oAuth/AccessTokenRefreshResponse
 * @class
 */
var AccessTokenRefreshResponse = function() {
  var _this = this;

  _this.accessToken = undefined;
  _this.expiresIn = undefined;
  _this.tokenType = undefined;

  /**
   * An OAuth Access Token.
   * @function getAccessToken
   * @return accessToken {string} 
   * @instance
   */
  _this.getAccessToken = function() {
    return this.accessToken;
  };

  /**
   * An OAuth Access Token.
   * @function setAccessToken
   * @param accessToken {string} OAuth access token.
   * @instance
   */
  _this.setAccessToken = function (accessToken) {
    this.accessToken = accessToken;
  };

  /**
   * The lifetime in seconds of the Access Token.
   * @function getExpiresIn
   * @return expiresIn {number} 
   * @instance
   */
  _this.getExpiresIn = function() {
    return this.expiresIn;
  };

  /**
   * The lifetime in seconds of the Access Token.
   * @function setExpiresIn
   * @param expiresIn {number} The lifetime in seconds of the Access Token.
   * @instance
   */
  _this.setExpiresIn = function (expiresIn) {
    this.expiresIn = expiresIn;
  };

  /**
   * The value will always be "Bearer".
   * @function getTokenType
   * @return tokenType {string} 
   * @instance
   */
  _this.getTokenType = function() {
    return this.tokenType;
  };

  /**
   * The value will always be "Bearer".
   * @function setTokenType
   * @param tokenType {string} Token type, The value will always be "Bearer"
   * @instance
   */
  _this.setTokenType = function (tokenType) {
    this.tokenType = tokenType;
  };
};


/**
 * @private
 * Constructs a <code>AccessTokenRefreshResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/oAuth/AccessTokenRefreshResponse} obj Optional instance to populate.
 * @return {module:model/oAuth/AccessTokenRefreshResponse} The populated <code>AccessTokenRefreshResponse</code> instance.
 */
AccessTokenRefreshResponse.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new AccessTokenRefreshResponse();
    if (data.hasOwnProperty('access_token')) { 
      obj.setAccessToken(data.access_token);    
    }           
    if (data.hasOwnProperty('expires_in')) {    
      obj.setExpiresIn(data.expires_in);    
    }           
    if (data.hasOwnProperty('token_type')) {     
      obj.setTokenType(data.token_type);
    }
  }
  return obj;
};


return AccessTokenRefreshResponse;
}));