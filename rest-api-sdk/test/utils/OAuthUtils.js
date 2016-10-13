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
(function (factory) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../src/index'), require('./ApiUtils'));
    
}(function (AdobeSignSdk, ApiUtils) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the OAuth API Tests. 
     */
    var OAuthUtils = function () {
    };

    var oAuthApi = new AdobeSignSdk.OAuthApi(ApiUtils.getContext());
    var oAuthModel = AdobeSignSdk.OAuthModel;

    OAuthUtils.getOAuthApi = function () {
        return oAuthApi;
    };

    /**
     * Get AccessTokenRequest Object
     * @param clientId
     * @param clientSecret
     * @param redirectUri
     * @param code
     * @param grantType
     * @return AccessTokenRequest Object
     */
    OAuthUtils.getAccessTokenRequest = function (clientId,
                                                 clientSecret,
                                                 redirectUri,
                                                 code,
                                                 grantType) {

        var accessTokenRequest = new oAuthModel.AccessTokenRequest();
        accessTokenRequest.setClientId(clientId);
        accessTokenRequest.setClientSecret(clientSecret);
        accessTokenRequest.setRedirectUri(redirectUri);
        accessTokenRequest.setCode(code);
        accessTokenRequest.setGrantType(grantType);
        return accessTokenRequest;
    };

    /**
     * Get AccessTokenRefreshRequest Object
     *
     * @param clientId
     * @param clientSecret
     * @param refreshToken
     * @param grantType
     * @return AccessTokenRefreshRequest Object
     */
    OAuthUtils.getAccessTokenRefreshRequest = function (clientId,
                                                        clientSecret,
                                                        refreshToken,
                                                        grantType) {

        var accessTokenRefreshRequest = new oAuthModel.AccessTokenRefreshRequest();
        accessTokenRefreshRequest.setClientId(clientId);
        accessTokenRefreshRequest.setClientSecret(clientSecret);
        accessTokenRefreshRequest.setRefreshToken(refreshToken);
        accessTokenRefreshRequest.setGrantType(grantType);
        return accessTokenRefreshRequest;
    };

    /**
     * Get AuthorizationRequest Object
     * @param clientId
     * @param redirectUri
     * @param scopes
     * @param state
     * @param responseType
     * @return AuthorizationRequest Object
     */
    OAuthUtils.getAuthorizationRequest = function (clientId,
                                                   redirectUri,
                                                   scopes,
                                                   state,
                                                   responseType) {

        var authorizationRequest = new oAuthModel.AuthorizationRequest();
        authorizationRequest.setClientId(clientId);
        authorizationRequest.setRedirectUri(redirectUri);
        authorizationRequest.setScopes(scopes);
        authorizationRequest.setState(state);
        authorizationRequest.setResponseType(responseType);
        return authorizationRequest;

    };

    return OAuthUtils;

}));
