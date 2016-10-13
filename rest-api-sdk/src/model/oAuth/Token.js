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
 * The Token model module.
 * @module model/oAuth/Token
 * @version 1.0.0
 *
 */

/**
 * Constructs a new <code>Token</code>.
 * @alias module:model/oAuth/Token
 * @class
 */
var Token = function() {
  var _this = this;

   _this.token = undefined;
  
  /**
   * The access token or refresh token which has to be revoked.
   * @function getToken
   * @return token {string} 
   */
  _this.getToken = function() {
    return this.token;
  };

  /**
   * The access token or refresh token which has to be revoked.
   * @function setToken
   * @param token {string} access token or refresh token
   */
  _this.setToken = function (token) {
    this.token = token;
  };
};


/**
 * @private
 * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/oAuth/Token} obj Optional instance to populate.
 * @return {module:model/oAuth/Token} The populated <code>Token</code> instance.
 */
Token.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('token')) {
      obj.setToken(data.token);
    }
  }
  return obj;
};

return Token;
}));




