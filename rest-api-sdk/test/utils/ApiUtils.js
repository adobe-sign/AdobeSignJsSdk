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
        module.exports = factory(require('../../src/index'), require('./TestData'), require('path'));
   
}(function (AdobeSignSdk, TestData, path) {
  'use strict';

  /**
   * This file contains basic utility functions which will be used by the Tests.
   */
  var ApiUtils = function () {
  };

  var context = new AdobeSignSdk.Context();

  /**
   *
   * Helper method to get Context.
   */
  ApiUtils.getContext = function() {
    return context;
  };

  /**
   *
   * Helper method to set Context
   */
  ApiUtils.setContext = function(newContext) {
    context = newContext;
  };

  /**
   *
   * Helper method to configure Property
   */
  ApiUtils.configureProperty = function () {
    ApiUtils.configureEnvHostName();
  };

  /**
   * Helper method to configure Environment host name
   */
  ApiUtils.configureEnvHostName = function () {
    context.setEnvHostName(TestData.ENV_HOST_NAME);
  };
  var HEADER_PARAM_KEYS = {
    ACCESS_TOKEN_KEY: "accessToken",
    X_API_USER_KEY: "xApiUser"
  };

  /**
   * Returns a JSON of Valid Hearder Params
   */
  ApiUtils.getValidHeaderParams = function () {
    var headerParams = {};
    headerParams[HEADER_PARAM_KEYS.ACCESS_TOKEN_KEY] = TestData.ACCESS_TOKEN;
    headerParams[HEADER_PARAM_KEYS.X_API_USER_KEY] = TestData.X_API_HEADER;
    return headerParams;
  };

  /**
   * Returns a JSON of Hearder Params with NULL Access_Token and Valid X_API_USER
   */
  ApiUtils.getNullAccessTokenHeaderParams = function () {
    var headerParams = {};
    headerParams[HEADER_PARAM_KEYS.ACCESS_TOKEN_KEY] = TestData.NULL_PARAM;
    headerParams[HEADER_PARAM_KEYS.X_API_USER_KEY] = TestData.X_API_HEADER;
    return headerParams;
  };

  /**
   * Returns a JSON of Hearder Params with Empty Access_Token and Valid X_API_USER
   */
  ApiUtils.getEmptyAccessTokenHeaderParams = function () {
    var headerParams = {};
    headerParams[HEADER_PARAM_KEYS.ACCESS_TOKEN_KEY] = TestData.EMPTY_PARAM;
    headerParams[HEADER_PARAM_KEYS.X_API_USER_KEY] = TestData.X_API_HEADER;
    return headerParams;
  };

  /**
   * Returns a JSON of Hearder Params with Valid Access_Token and Empty X_API_USER
   */
  ApiUtils.getEmptyXApiUserHeaderParams = function () {
    var headerParams = {};
    headerParams[HEADER_PARAM_KEYS.ACCESS_TOKEN_KEY] = TestData.ACCESS_TOKEN;
    headerParams[HEADER_PARAM_KEYS.X_API_USER_KEY] = TestData.EMPTY_PARAM;
    return headerParams;
  };

  /**
   * Helper method that returns a Group name appending the time stamp
   */
  ApiUtils.getGroupName = function () {
    return TestData.GROUP_NAME_PREFIX + Number(new Date());
  };

  /**
   * Helper method that returns a Agreement name appending the time stamp
   */
  ApiUtils.getAgreementName = function () {
    return TestData.AGREEMENT_NAME_PREFIX + Number(new Date());
  };

  /**
   * Helper method returns First name
   */
  ApiUtils.getFirstName = function () {
    return TestData.FIRST_NAME;
  };

  /**
   * Helper method returns Last name
   */
  ApiUtils.getLastName = function () {
    return TestData.LAST_NAME;
  };

  /**
   * Helper method returns Email appending the time stamp
   */
  ApiUtils.getEmail = function () {
    return TestData.EMAIL_PREFIX + Number(Date.now().toString()) + TestData.EMAIL_DOMAIN;
  };

  /**
   * Helper method that returns a Group name appending the time stamp
   */
  ApiUtils.getMegaSignName = function () {
    return TestData.MEGASIGN_NAME_PREFIX + Date.now().toString();
  };

  /**
   * Helper method that returns a Group name appending the time stamp
   */
  ApiUtils.getAgreementName = function () {
    return TestData.AGREEMENT_NAME_PREFIX + Date.now().toString();
  };

  /**
   * Helper method that throws an Api Error
   */
  ApiUtils.throwError = function (apiError) {
    throw apiError;
  };

  /**
   * Helper method that log the error on console
   */
  ApiUtils.logError = function (apiError) {
    console.log(apiError);
  };

  /**
   * Helper method that returns the resources folder path
   */
  ApiUtils.getResourcesFolderPath = function () {
    return path.join(path.dirname(__dirname), TestData.REQUEST_PATH);
  };

  //Helper method to get user email
  ApiUtils.getUserEmail = function () {
    return TestData.EMAIL_PREFIX + Date.now().toString() + TestData.EMAIL_DOMAIN;
  };
  /*
   * Helper method that returns the library document name
   */
  ApiUtils.getLibraryDocumentName = function () {
    return TestData.LIBRARY_DOCUMENT_NAME_PREFIX + Date.now().toString();
  };

  /*
   * Helper method that returns the widget name
   */
  ApiUtils.getWidgetName = function () {
    return TestData.WIDGET_NAME_PREFIX + Date.now().toString();
  };

  /**
   * Helper method that gets Date for given offset from current date in ISO format
   */
  ApiUtils.getDate = function (offset) {
    var currentDate = new Date();
    var newDate = new Date();
    newDate.setDate(currentDate.getDate() - offset);
    return newDate.toISOString();
  };


  return ApiUtils;
}));