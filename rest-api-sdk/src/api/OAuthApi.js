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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../utils/OAuthUtils'), require('../model/oAuth/OAuthIndex'), require('../utils/validator/OAuthApiValidator'), require('../utils/ApiError'));
  
}(function(ApiClient, Context, OAuthUtils, OAuthIndex, OAuthApiValidator, ApiError) {
  'use strict';

  /**
   * @module OAuthApi
   * @version 1.0.0
   */

  /**
   * Constructs a new OAuthApi.
   * @alias module:OAuthApi
   * @class
   */
  var OAuthApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;

    /**
     * Retrieves the authorization url that will be used to get the authorization code.
     * @function getAuthorizationUrl
     * @param authorizationRequest {Object} Authorization request 
     * @returns {String} The authorization url where the user will be directed to authorize the application.
     * @instance
     */

    _this.getAuthorizationUrl = function(authorizationRequest) {

      try {
        OAuthApiValidator.getAuthorizationUrlValidator(authorizationRequest);
      } catch (apiError) {
        return new Promise(function(resolve, reject){
          reject(apiError);
        });
      }

      var baseUri = apiClient.getEnvHostName().replace("api","secure");
      var subPath = "public/oauth";
      var baseUrl = baseUri + subPath;

      var authorizationUrl = OAuthUtils.appendTo(baseUrl, authorizationRequest.getClientId(), authorizationRequest.getRedirectUri(), OAuthUtils.spaceDelimitedSet(authorizationRequest.getScopes()), authorizationRequest.getState(), authorizationRequest.getResponseType());

      return new Promise(function(resolve){
          resolve(authorizationUrl);
      });
    };

    /**
     * Retrieves the access token with the required scopes using the authorization code granted during the authorization.
     * @function getAccessToken
     * @param  accessTokenRequest {Object} Access token request 
     * @returns {Promise} A promise that returns {@link module:model/oAuth/AccessTokenResponse|AccessTokenResponse} if resolved and apiError if rejected.
     * @instance
     */

    _this.getAccessToken = function(accessTokenRequest) {

      try {
        OAuthApiValidator.getAccessTokenValidator(accessTokenRequest);
      } catch (apiError) {
        return new Promise(function(resolve, reject){
          reject(apiError);
        });
      }

      var path = "oauth/token";

      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'code': accessTokenRequest['code'],
        'client_id': accessTokenRequest['clientId'],
        'client_secret': accessTokenRequest['clientSecret'],
        'redirect_uri': accessTokenRequest['redirectUri'],
        'grant_type': accessTokenRequest['grantType']
      };

      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];

      var returnType = OAuthIndex.AccessTokenResponse;

      return apiClient.callApi(
              path, 'POST',
              pathParams, queryParams, headerParams, formParams, postBody,
              contentTypes, accepts, returnType, false)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
    };

    /**
     * Refreshes the access token.
     * @function refreshAccessToken
     * @param accessTokenRefreshRequest {Object} Access token refresh request
     * @return {Promise} A promise that returns {@link module:model/oAuth/AccessTokenRefreshResponse|RefreshedAccessTokenResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.refreshAccessToken= function(accessTokenRefreshRequest) {

      try {
        OAuthApiValidator.refreshAccessTokenValidator(accessTokenRefreshRequest);
      } catch (apiError) {
        return new Promise(function(resolve, reject){
          reject(apiError)
        });
      }
      var path = "oauth/refresh";

      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'refresh_token': accessTokenRefreshRequest['refreshToken'],
        'client_id': accessTokenRefreshRequest['clientId'],
        'client_secret': accessTokenRefreshRequest['clientSecret'],
        'grant_type': accessTokenRefreshRequest['grantType']
      };

      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];

      var returnType = OAuthIndex.AccessTokenRefreshResponse;

      return apiClient.callApi(
              path, 'POST',
              pathParams, queryParams, headerParams, formParams, postBody,
              contentTypes, accepts, returnType, false)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
    };

    /**
     * Revokes the token.
     * @function revokeToken
     * @param token {String} Can be an access token or refresh token.
     * @returns {Promise} A promise that returns null if resolved and apiError if rejected.
     * @instance
     */

    _this.revokeToken = function(token) {

      try {
        OAuthApiValidator.revokeTokenValidator(token);
      } catch (apiError) {
        return new Promise(function(resolve, reject){
          reject(apiError)
        });
      }

      var path = "oauth/revoke";

      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'token': token['token']
      };

      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];

      var returnType = null;

      return apiClient.callApi(
              path, 'POST',
              pathParams, queryParams, headerParams, formParams, postBody,
              contentTypes, accepts, returnType, false)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
    }
  };

  return OAuthApi;
}));
