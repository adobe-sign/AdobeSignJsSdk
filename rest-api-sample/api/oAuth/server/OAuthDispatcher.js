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
    module.exports = factory(require('adobe-sign-sdk'), require('../../../utils/Constants'), require('../../../utils/ApiUtils'), require('../../../utils/GroupUtils'), require('httpdispatcher'), require('fs'));
}(function(AdobeSignSdk, Constants, ApiUtils, GroupUtils, httpdispatcher, fs) {
  'use strict';

  /**
   * This file contains dispatchers for oAuth local server.
   */
  var OAuthDispatcher = function(){};

  var oAuthApi = new AdobeSignSdk.OAuthApi(ApiUtils.getContext());
  var oAuthModel = AdobeSignSdk.OAuthModel;

  var ROOT_ENDPOINT = "/";
  var OAUTH_ENDPOINT = "/oAuth";
  var REDIRECT_ENDPOINT = "/redirectUri";
  var CONTENT_TYPE_TEXT_HTML = "text/html";
  var CODE_KEY = "code";
  var API_ACCESS_POINT_KEY = "api_access_point";
  var OAUTH_HTML = Constants.OAUTH_HTML_FILE;
  var CLIENT_ID_KEY = "client_id";
  var REDIRECT_URI_KEY = "redirect_uri";
  var SCOPE_KEY = "scope";
  var CLIENT_SECRET_KEY = "client_secret";
  var PATH_SEPARATOR = "/";
  var GROUP_CREATED_MESSAGE = "Group ID = ";
  var GROUP_NOT_CREATED_MESSAGE = "Group not created.";
  var LOCATION_KEY = "Location";
  var SPLIT_KEY_AND = "&";
  var SPLIT_KEY_EQUAL = "=";
  var SPLIT_KEY_COLON = ":";
  var SPLIT_KEY_SPACE = " ";
  var EMPTY_STRING = "";
  var EQUAL_KEY = " = ";
  var QUERY_SEPARATOR = "?";
  var NEWLINE = "/n";
  var clientId = "";
  var clientSecret = "";
  var redirectUri = "";
  var state = "";
  var scopes = [];

  OAuthDispatcher.dispatchRequest = function (req, res) {
    httpdispatcher.dispatch(req, res);
  };

  httpdispatcher.onGet(ROOT_ENDPOINT, function (req, res) {
    var oauthFilePath = ApiUtils.getFilePath(OAUTH_HTML);
    var file = fs.readFileSync(oauthFilePath);
    var i = req.url.indexOf(QUERY_SEPARATOR);
    var query = req.url.substr(i + 1);
    var queryDecoded = decodeURIComponent(query);
    res.writeHead(200,
                  {CONTENT_TYPE_KEY: CONTENT_TYPE_TEXT_HTML});
    res.write(file);
    if(queryDecoded.includes(GROUP_CREATED_MESSAGE) || queryDecoded.includes(GROUP_NOT_CREATED_MESSAGE))
    {
      res.groupResult = queryDecoded;
    }
    res.end();
  });

  httpdispatcher.onGet(OAUTH_ENDPOINT, function (req, res) {
    var i = req.url.indexOf(QUERY_SEPARATOR);
    var query = req.url.substr(i + 1);
    var parameters = parseQuery(query);
    OAuthDispatcher.getAuthorizationUrl(parameters)
            .then(function (redirect) {
              res.setHeader(LOCATION_KEY,redirect);
              res.writeHead(301,
                            {CONTENT_TYPE_KEY: CONTENT_TYPE_TEXT_HTML });
              res.end();
            });
  });

  httpdispatcher.onGet(REDIRECT_ENDPOINT, function (req, res) {
    var i = req.url.indexOf(QUERY_SEPARATOR);
    var query = req.url.substr(i + 1);
    var parameters = parseQuery(query);

    // send response
    var response = EMPTY_STRING;
    var code = null;
    var apiAccessPoint = null;
    for (var key in parameters) {
      if (key === CODE_KEY)
        code = parameters[key];
      if(key === API_ACCESS_POINT_KEY)
        apiAccessPoint = parameters[key];
    }
    var redirect = null;
    OAuthDispatcher.createGroupWithAuthCode(code, apiAccessPoint, res);
  });

  /**
   * Returns Authorization Url
   * @param parameters Map containing parameters
   * @throws ApiError
   */
  OAuthDispatcher.getAuthorizationUrl = function (parameters) {
    for (var key in parameters) {
      if (key === CLIENT_ID_KEY)
        clientId = parameters.client_id;
      else if (key === CLIENT_SECRET_KEY)
        clientSecret = parameters.client_secret;
      else if (key === REDIRECT_URI_KEY)
        redirectUri = parameters.redirect_uri;
      else if (key === SCOPE_KEY) {
        var scopesArray = parameters.scope.split(SPLIT_KEY_SPACE);
        for (var scope in scopesArray) {
          var pairs = scopesArray[scope].split(SPLIT_KEY_COLON);
          var scopeTarget = pairs[0];
          var scopeModifier = pairs[1];
          var scope = new oAuthModel.Scope();
          scope.setTarget(scopeTarget);
          scope.setModifier(scopeModifier);
          scopes.push(scope);
        }
      }
    }
    var authorizationRequest = new oAuthModel.AuthorizationRequest();
    authorizationRequest.setClientId(clientId);
    authorizationRequest.setRedirectUri(redirectUri);
    authorizationRequest.setScopes(scopes);
    authorizationRequest.setState(state);
    authorizationRequest.setResponseType("code");

    return oAuthApi.getAuthorizationUrl(authorizationRequest);
  };

  /**
   * Parse query and return a map of parameters
   * @param query containing parameters
   * @param parameters Map of key value pairs of parameters
   */
  var parseQuery = function (query) {
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

  /**
   * Create sample group and returns response.
   * @param code auth code required for generating access token
   * returns groupId
   */
  OAuthDispatcher.createGroupWithAuthCode = function (code, apiAccessPoint, res) {
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
    oAuthApi.getAccessToken(accessTokenRequest)
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
            .then(function (){
              var response = EMPTY_STRING;
              if (groupId != null)
                response = PATH_SEPARATOR + QUERY_SEPARATOR + GROUP_CREATED_MESSAGE + encodeURIComponent(groupId);
              else
                response = GROUP_NOT_CREATED_MESSAGE;
              if(groupId != null)
                res.setHeader(LOCATION_KEY,response);
              res.writeHead(301,
                            {CONTENT_TYPE_KEY: CONTENT_TYPE_TEXT_HTML });
              res.end();
            })
            .catch(function(apiError){
              console.log(apiError);
            });
  };

  return OAuthDispatcher;
}));
