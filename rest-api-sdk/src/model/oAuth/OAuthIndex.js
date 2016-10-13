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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/oAuth/AccessTokenRequest'), require('../../model/oAuth/AccessTokenResponse'), require('../../model/oAuth/AccessTokenRefreshRequest'), require('../../model/oAuth/AccessTokenRefreshResponse'), require('../../model/oAuth/AuthorizationRequest'), require('../../model/oAuth/Scope'), require('../../model/oAuth/Token'));
  
}(function(ApiClient, AccessTokenRequest, AccessTokenResponse, AccessTokenRefreshRequest, AccessTokenRefreshResponse, AuthorizationRequest, Scope, Token) {
  'use strict';

  /**
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * @module OAuthIndex
   * @version 1.0.0
   */
  var OAuthIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,

    /**
     * The AccessTokenRequest model constructor.
     * @property {module:model/oAuth/AccessTokenRequest}
     */
    AccessTokenRequest: AccessTokenRequest,

    /**
     * The AccessTokenResponse model constructor.
     * @property {module:model/oAuth/AccessTokenResponse}
     */
    AccessTokenResponse: AccessTokenResponse,

    /**
     * The AccessTokenRefreshRequest model constructor.
     * @property {module:model/oAuth/AccessTokenRefreshRequest}
     */
    AccessTokenRefreshRequest: AccessTokenRefreshRequest,

    /**
     * The AccessTokenRefreshResponse model constructor.
     * @property {module:model/oAuth/AccessTokenRefreshResponse}
     */
    AccessTokenRefreshResponse: AccessTokenRefreshResponse,

    /**
     * The AuthorizationRequest model constructor.
     * @property {module:model/oAuth/AuthorizationRequest}
     */
    AuthorizationRequest: AuthorizationRequest,

    /**
     * The Scope model constructor.
     * @property {module:model/oAuth/Scope}
     */
    Scope: Scope,

    /**
     * The Token model constructor.
     * @property {module:model/oAuth/Token}
     */
    Token: Token

    
  };

  return OAuthIndex;
}));
