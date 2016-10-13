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
 * The AccessTokenResponse model module.
 * @module model/oAuth/AccessTokenResponse
 * @version 1.0.0
 *
 */

/**
 * Constructs a new <tokenType>AccessTokenResponse</tokenType>.
 * @alias module:model/oAuth/AccessTokenResponse
 * @class
 */
var AccessTokenResponse = function() {
  var _this = this;

  _this.accessToken = undefined;
  _this.refreshToken = undefined;
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
   * @param accessToken {string} OAuth access token
   * @instance
   */
  _this.setAccessToken = function (accessToken) {
    this.accessToken = accessToken;
  };

  /**
   * Refresh Token, which can be used to get a fresh Access Token.
   * @function getRefreshToken
   * @return refreshToken {string} 
   * @instance
   */
  _this.getRefreshToken = function() {
    return this.refreshToken;
  };

  /**
   * Refresh Token, which can be used to get a fresh Access Token.
   * @function setRefreshToken
   * @param refreshToken {string} OAuth refresh token
   * @instance 
   */
  _this.setRefreshToken = function (refreshToken) {
    this.refreshToken = refreshToken;
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
   * @param expiresIn {number} lifetime of access token in seconds
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
   * @param tokenType {string} token type 
   * @instance
   */
  _this.setTokenType = function (tokenType) {
    this.tokenType = tokenType;
  };

};


/**
 * @private
 * Constructs a <tokenType>AccessTokenResponse</tokenType> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <tokenType>data</tokenType> to <tokenType>obj</tokenType> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/oAuth/AccessTokenResponse} obj Optional instance to populate.
 * @return {module:model/oAuth/AccessTokenResponse} The populated <tokenType>AccessTokenResponse</tokenType> instance.
 */
AccessTokenResponse.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new AccessTokenResponse();

    if (data.hasOwnProperty('access_token')) {
      obj.setAccessToken(data.access_token);
    }
    if (data.hasOwnProperty('refresh_token')) {
      obj.setRefreshToken(data.refresh_token);
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



return AccessTokenResponse;
}));
