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
    module.exports = factory(require('adobe-sign-sdk'), require('./Constants'), require('path'));
  
}(function(AdobeSignSdk, Constants, path) {
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
    console.error(ApiUtils.sampleName + ": " + error);
    if(apiError) {
      console.error("\n" + apiError.stack);
    }
  };

  ApiUtils.logAndThrowError = function(error, apiError) {
    console.error(ApiUtils.sampleName + ": " + error);
    throw new ApiError(apiError);
  };

  ApiUtils.info = function(info) {
    console.log(ApiUtils.sampleName + ": " + info);
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

  ApiUtils.getResourcesFolderPath = function () {

    //Gets the absolute path of resources folder
    var resourcesFolderPath = path.join(path.dirname(__dirname), Constants.REQUEST_PATH);
    return resourcesFolderPath;
  };

  ApiUtils.getOutputFolderPath = function () {

    //Gets the absolute path of resources folder
    var outputFolderPath = path.join(path.dirname(__dirname), Constants.OUTPUT_PATH);
    return outputFolderPath;
  };

  ApiUtils.getFilePath = function(subPath) {

    //Gets the absolute path of local oauth server
    var filePath = path.join(path.dirname(__dirname), subPath);
    return filePath;
  };

  return ApiUtils;
}));



