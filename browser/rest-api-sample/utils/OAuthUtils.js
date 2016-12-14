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


(function(root, factory) {
  // Browser globals (root is window)
  if (!root.AdobeSignSdk) {
    root.AdobeSignSdk = {};
  }
  root.AdobeSignSdk.OAuthUtils = factory(root.AdobeSignSdk, root.AdobeSignSdk.Errors, root.AdobeSignSdk.Constants, root.AdobeSignSdk.ApiUtils, root.AdobeSignSdk.GroupUtils);

}(this, function(AdobeSignSdk, Errors, Constants, ApiUtils, GroupUtils) {
  'use strict';

  var OAuthUtils = function(){};

  var oAuthApi = new AdobeSignSdk.OAuthApi(ApiUtils.getContext());
  var oAuthModel = AdobeSignSdk.OAuthModel;

  /**
   * Returns Authorization Url
   * @param clientId Identifies the application
   * @param redirectUri User will be redirected here at the end of the authorization process. The value must belong to the set of values specified on the OAuth Configuration page
   * @param scopeValues The permissions that the user will be asked to approve
   * @returns Authorization Url
   */
  OAuthUtils.getAuthorizationUrl = function (clientId, redirectUri, scopeValues) {

    var SPLIT_KEY_COLON = ":";
    var SPLIT_KEY_SPACE = " ";
    var state = "";
    var scopes = [];

    var scopesArray = scopeValues.split(SPLIT_KEY_SPACE);
    for (var scope in scopesArray) {
      var pairs = scopesArray[scope].split(SPLIT_KEY_COLON);
      var scopeTarget = pairs[0];
      var scopeModifier = pairs[1];
      var scope = new oAuthModel.Scope();
      scope.setTarget(scopeTarget);
      scope.setModifier(scopeModifier);
      scopes.push(scope);
    }

    var authorizationRequest = new oAuthModel.AuthorizationRequest();
    authorizationRequest.setClientId(clientId);
    authorizationRequest.setRedirectUri(redirectUri);
    authorizationRequest.setScopes(scopes);
    authorizationRequest.setState(state);
    authorizationRequest.setResponseType(Constants.RESPONSE_TYPE);

    return oAuthApi.getAuthorizationUrl(authorizationRequest)
                   .then(function (authorizationUrl) {
                     return authorizationUrl;
                   })
  };

  /**
   * Create sample group and returns response.
   * @param code Auth code required for generating access token
   * @param apiAccessPoint Base URI to be used in all subsequent calls
   * @param clientId Identifies the application
   * @param clientSecret Auth code required for generating access token
   * @param redirectUri User will be redirected here at the end of the authorization process. The value must belong to the set of values specified on the OAuth Configuration page
   * @returns groupId
   */
  OAuthUtils.createGroupWithAuthCode = function (code, apiAccessPoint, clientId, clientSecret, redirectUri) {
    var context = ApiUtils.getContext();
    context.setBaseUri(apiAccessPoint);
    var oAuthApi = new AdobeSignSdk.OAuthApi(context);
    var groupId = null;
    var accessToken = null;

    //Fetch the access token.
    var accessTokenRequest = new oAuthModel.AccessTokenRequest();
    var token = new oAuthModel.Token();
    accessTokenRequest.setClientId(clientId);
    accessTokenRequest.setClientSecret(clientSecret);
    accessTokenRequest.setRedirectUri(redirectUri);
    accessTokenRequest.setCode(code);
    accessTokenRequest.setGrantType(Constants.ACCESS_TOKEN_GRANT_TYPE);

    //Access Token should be stored in the encrypted format
    return oAuthApi.getAccessToken(accessTokenRequest)
                   .then(function (accessTokenResponse) {

                     //Refresh the accessToken
                     var accessTokenRefreshRequest = new oAuthModel.AccessTokenRefreshRequest();
                     accessTokenRefreshRequest.setClientId(clientId);
                     accessTokenRefreshRequest.setClientSecret(clientSecret);
                     accessTokenRefreshRequest.setRefreshToken(accessTokenResponse.refreshToken);
                     accessTokenRefreshRequest.setGrantType(Constants.REFRESH_TOKEN_GRANT_TYPE);

                     //Refreshed Access Token should be stored in the encrypted format
                     return oAuthApi.refreshAccessToken(accessTokenRefreshRequest);
                   })
                   .then(function (accessTokenRefreshResponse) {

                     //Make API call to create a group with access token from the server.
                     accessToken = accessTokenRefreshResponse.accessToken;
                     return GroupUtils.createGroupWithOAuthWorkflow(ApiUtils.getGroupName(Constants.GROUP_NAME),
                             accessToken);
                   })
                   .then (function (groupIdResponse) {

                     groupId = groupIdResponse;

                     //Revoke the token
                     token.token = accessToken;
                     return oAuthApi.revokeToken(token);
                   })
                   .then(function() {
                     return groupId;
                   })
                   .catch(function(apiError) {
                     ApiUtils.logAndThrowError(Errors.CREATE_GROUP_WITH_AUTH_CODE,apiError);
                   });
  };

  /**
   * Parse query and return a map of parameters
   * @param query containing parameters
   * @param parameters Map of key value pairs of parameters
   */
  OAuthUtils.parseQuery = function (query) {
    var SPLIT_KEY_AND = "&";
    var SPLIT_KEY_EQUAL = "=";
    var parameters = {};
    if (query != null) {
      var pairs = query.split(SPLIT_KEY_AND);
      var pairsLength = pairs.length;
      for (var i = 0; i < pairsLength; i++) {
        var param = pairs[i].split(SPLIT_KEY_EQUAL);

        var key = null;
        var value = null;
        if (param.length > 0) {
          key = decodeURIComponent(param[0]);
        }
        if (param.length > 1) {
          value = decodeURIComponent(param[1]);
        }
        parameters[key] = value;
      }
    }
    return parameters;
  };

  return OAuthUtils;
}));
