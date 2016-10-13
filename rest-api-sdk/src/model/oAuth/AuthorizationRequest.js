
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
 * The AuthorizationRequest model module.
 * @module model/oAuth/AuthorizationRequest
 * @version 1.0.0
 *
 */

/**
 * Constructs a new <code>AuthorizationRequest</code>.
 * @alias module:model/oAuth/AuthorizationRequest
 * @class
 */
var AuthorizationRequest = function() {
  var _this = this;

  _this.clientId = undefined;
  _this.redirectUri = undefined;
  _this.scopes = undefined;
  _this.state = undefined;
  _this.responseType = undefined;

  /**
   * Identifies the application configured on the OAuth Configuration page.
   * @function getClientId
   * @return {string} clientId
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
   * The url where the end user will be redirected after successful completion of authorization.
   * This value must belong to the set of values specified on the OAuth Configuration page.
   * @function getRedirectUri
   * @return {string} redirectUri
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
   * List of permissions required by the application on behalf of the user to access the resources.
   * @function getScopes
   * @return {ArrayList} scopes
   * @instance 
   */
  _this.getScopes = function() {
    return this.scopes;
  };

  /**
   * List of permissions required by the application on behalf of the user to access the resources.
   * @function setScopes
   * @param {ArrayList} scopes Scopes
   * @instance
   */
  _this.setScopes = function (scopes) {
    this.scopes = scopes;
  };

  /**
   * Value used by the client to maintain state between the request and callback.
   * @function getState
   * @return {string} state 
   * @instance 
   */
  _this.getState = function() {
    return this.state;
  };

  /**
   * Value used by the client to maintain state between the request and callback.
   * @function setState
   * @param state {string} State
   * @instance
   */
  _this.setState = function (state) {
    this.state = state;
  };

  /**
   * Value must always be "code".
   * @function getResponseType
   * @return {string} responseType
   * @instance
   */
  _this.getResponseType = function() {
    return this.responseType;
  };

  /**
   * Value must always be "code".
   * @function setResponseType
   * @param responseType {string} ResponseType
   * @instance 
   */
  _this.setResponseType = function (responseType) {
    this.responseType = responseType;
  };
};


/**
 * @private
 * Constructs a <code>AuthorizationRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/oAuth/AuthorizationRequest} obj Optional instance to populate.
 * @return {module:model/oAuth/AuthorizationRequest} The populated <code>AuthorizationRequest</code> instance.
 */
AuthorizationRequest.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new AuthorizationRequest();

    if (data.hasOwnProperty('client_id')) {
      obj.setClientId(data.client_id);
    }
    if (data.hasOwnProperty('redirect_uri')) {
      obj.setRedirectUri(data.redirect_uri);
    }
    if (data.hasOwnProperty('scopes')) {
      obj.setScopes(data.scopes);
    }
    if (data.hasOwnProperty('state')) {
      obj.setState(data.state);
    }
    if (data.hasOwnProperty('response_type')) {
      obj.setResponseType(data.response_type);
    }
  }
  return obj;
};

return AuthorizationRequest;
}));
