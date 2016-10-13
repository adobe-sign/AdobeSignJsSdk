/*
 *  Copyright 2016 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use _thisfile except in compliance with the License. You may obtain a copy
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
    module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'));
  
}(function(SdkErrorCodes, ApiValidatorHelper) {
  'use strict';

  /**
   * Validator for OAuth Api. The main purpose of this is to check the validity of the parameters passed to
   * the OAuth API and throw ApiError with required error messages if the validation fails.
   */
  var OAuthApiValidator = function(){};

  /**
   * Validator for getAuthorizationUrl API that forms the url for authorization workflow.
   *
   * @param authorizationRequest Request for authorizationRequest
   */
  OAuthApiValidator.getAuthorizationUrlValidator = function (authorizationRequest) {
    ApiValidatorHelper.validateParameter(authorizationRequest);
    var paramList = [];
    paramList.push({param: authorizationRequest});
    paramList.push({param: authorizationRequest.getClientId()});
    paramList.push({param: authorizationRequest.getRedirectUri()});
    paramList.push({param: authorizationRequest.getScopes()});
    paramList.push({param: authorizationRequest.getResponseType()});
    ApiValidatorHelper.validateParameters(paramList);
  };

  /**
   * Validator for getAccessToken API that retrieves accessToken for the user.
   *
   * @param accessTokenRequest Request for accessToken
   */
  OAuthApiValidator.getAccessTokenValidator = function (accessTokenRequest) {
    ApiValidatorHelper.validateParameter(accessTokenRequest);
    var paramList = [];
    paramList.push({param: accessTokenRequest.getClientId()});
    paramList.push({param: accessTokenRequest.getClientSecret()});
    paramList.push({param: accessTokenRequest.getCode()});
    paramList.push({param: accessTokenRequest.getGrantType()});
    ApiValidatorHelper.validateParameters(paramList);
    OAuthApiValidator.validateRedirectUri(accessTokenRequest.getRedirectUri());

  };

  /**
   * Validator for refreshAccessToken API that refreshes the accessToken of the user.
   *
   * @param accessTokenRefreshRequest Requestxx for refreshAccessToken
   */
  OAuthApiValidator.refreshAccessTokenValidator = function(accessTokenRefreshRequest) {
    ApiValidatorHelper.validateParameter(accessTokenRefreshRequest);
    var paramList = [];
    paramList.push({param: accessTokenRefreshRequest.getClientId()});
    paramList.push({param: accessTokenRefreshRequest.getClientSecret()});
    paramList.push({param: accessTokenRefreshRequest.getRefreshToken()});
    paramList.push({param: accessTokenRefreshRequest.getGrantType()});
    ApiValidatorHelper.validateParameters(paramList);

  };

  /**
   * Validator for revokeToken API that revokes the access token or refresh token of the user.
   *
   * @param token The access token or refresh token which has to be revoked.
   */
  OAuthApiValidator.revokeTokenValidator = function (token) {
    ApiValidatorHelper.validateParameter(token);
    var paramList = [];
    paramList.push({param:token.getToken()});
    ApiValidatorHelper.validateParameters(paramList);
  };

  /**
   * Validate the redirectUri.
   *
   * @param redirectUri The redirectUri to be validated.
   */
  OAuthApiValidator.validateRedirectUri = function(redirectUri) {
    var paramList = [];
    paramList.push({param:redirectUri});
    ApiValidatorHelper.validateParameters(paramList);
    ApiValidatorHelper.validateUrlParameter(redirectUri,
                                            SdkErrorCodes.INVALID_REQUEST);
  };
return OAuthApiValidator;
}));