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
  root.AdobeSignSdk.ApiUtils = factory(root.AdobeSignSdk, root.AdobeSignSdk.Constants);

}(this, function(AdobeSignSdk, Constants) {
  'use strict';

  var ApiUtils = function(){};

  var ApiError = AdobeSignSdk.ApiError;
  var context = new AdobeSignSdk.Context();
  var ACCESS_TOKEN_KEY= "accessToken";
  var X_API_USER_KEY = "xApiUser";

  ApiUtils.configureProperty = function(name) {
    configureLogProperty(name);
    configureEnvHostName();
  };

  var configureLogProperty = function(name) {
    ApiUtils.sampleName = name;
  };

  var configureEnvHostName = function() {
    context.setEnvHostName(Constants.ENV_HOST_NAME);
  };

  ApiUtils.getContext = function() {
    return context;
  };

  ApiUtils.setContext = function(newContext) {
    context = newContext;
  };

  ApiUtils.logError = function(error, apiError) {
    var div = document.getElementById("result");
    div.innerHTML = div.innerHTML + "<br/>" + error;
    if(apiError) {
      div.innerHTML = div.innerHTML + "<br/>" + apiError.name + ":" + apiError.message + "<br/>" + apiError.stack;
    }
  };

  ApiUtils.logAndThrowError = function(error, apiError) {
    var div = document.getElementById("result");
    div.innerHTML = div.innerHTML + "<br/>" + error;
    throw new ApiError(apiError);
  };

  ApiUtils.info = function(info) {
    var div = document.getElementById("result");
    div.innerHTML = div.innerHTML + "<br/>" + info;
  };

  ApiUtils.getHeaderParams = function() {
    var headers = {};
    headers[ACCESS_TOKEN_KEY] = Constants.ACCESS_TOKEN;
    headers[X_API_USER_KEY] = Constants.X_API_USER;
    return headers;
  };

  ApiUtils.getUserEmail = function() {
    return (Constants.USER_EMAIL_PREFIX + Date.now().toString() + Constants.USER_EMAIL_DOMAIN);
  };

  ApiUtils.getGroupName = function(groupName) {
    return (groupName + Date.now().toString());
  };

  ApiUtils.getWaitingTimeLimit = function() {
    var millisecsPerDay = 24 * 60 * 60 * 10000;
    var waitingTimeLimit = Constants.WAITING_DAYS * millisecsPerDay;
    return waitingTimeLimit;
  };

  return ApiUtils;
}));



