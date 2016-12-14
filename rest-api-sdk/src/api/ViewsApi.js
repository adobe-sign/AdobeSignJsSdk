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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/views/ViewsIndex'), require('../utils/validator/ViewsApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, ViewsIndex, ViewsApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module ViewsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new ViewsApi. 
   * @alias module:ViewsApi
   * @class
   */
  var ViewsApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Returns the URL for manage page.
     * This endpoint will return the URL for manage page. If an agreement asset id is given then that agreement asset will be shown selected in the resulted manage page url.The agreement asset refers to any asset through which an agreement can be created for instance library document,widget and agreement itself. If the user wants to generate a URL that will automatically log the user in then user_login scope is required in the given Oauth Access Token.
     * @function createAgreementAssetListUrl
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_login - If the user wants to generate a URL that will automatically log the user in then this scope is required else any valid scope can be used
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param {Object} opts Optional parameters
     * @param  {AgreementAssetListRequest} opts.agreementAssetListRequest Information about the type of url to be generated for Manage Page
     * @returns {Promise} A promise that returns {@link module:model/views/ViewUrl|ViewUrl} if resolved and apiError if rejected.
     * @instance
     */
    _this.createAgreementAssetListUrl = function(headerParameters, opts) {

      opts = opts || {};
      var postBody = opts['agreementAssetListRequest'];

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        ViewsApiValidator.createAgreementAssetListUrlValidator(opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = ViewsIndex.ViewUrl;

      return apiClient.callApi(
        '/views/agreementAssetList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Returns the URL which shows the view page of given agreement asset.
     * This endpoint will return the URL of view agreement page for an agreement asset. The agreement asset refers to any asset through which an agreement can be created for instance library document,widget and agreement itself. If the user wants to generate a URL that will automatically log the user in then user_login scope is required in the given Oauth Access Token.
     * @function createAgreementAssetUrl
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read - Required when agreementAssetId refers to an agreement widget_read - Required when agreementAssetId refers to a widget library_read - Required when agreementAssetId refers to a library document user_login - In addition to one of the above scopes, this scope is required if the user wants to generate a URL that will automatically log the user in.
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementAssetRequest  {module:model/views/AgreementAssetRequest}
         Information about the type of url to be generated for Agreement Asset Page
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/views/ViewUrl|ViewUrl} if resolved and apiError if rejected.
     * @instance
     */
    _this.createAgreementAssetUrl = function(headerParameters, agreementAssetRequest, opts) {

      opts = opts || {};
      var postBody = agreementAssetRequest;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        ViewsApiValidator.createAgreementAssetUrlValidator(agreementAssetRequest, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = ViewsIndex.ViewUrl;

      return apiClient.callApi(
        '/views/agreementAssets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Returns the URL for settings page.
     * This endpoint will return the URL for Settings Page. The settings page can be of two types - user profile page(for non admin) and account settings page(for admin). If the user wants to generate a URL that will automatically log the user in then user_login scope is required in the given Oauth Access Token.
     * @function createSettingsUrl
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_login - If the user wants to generate a URL that will automatically log the user in then this scope is required else any valid scope can be used
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param targetViewRequest  {module:model/views/TargetViewRequest}
         Information about the type of url to be generated for various Settings page
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/views/ViewUrl|ViewUrl} if resolved and apiError if rejected.
     * @instance
     */
    _this.createSettingsUrl = function(headerParameters, targetViewRequest, opts) {

      opts = opts || {};
      var postBody = targetViewRequest;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        ViewsApiValidator.createSettingsUrlValidator(targetViewRequest, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = ViewsIndex.ViewUrl;

      return apiClient.callApi(
        '/views/settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return ViewsApi;
}));
