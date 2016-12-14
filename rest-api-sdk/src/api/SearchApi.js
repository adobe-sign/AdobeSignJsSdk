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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/search/SearchIndex'), require('../utils/validator/SearchApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, SearchIndex, SearchApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module SearchApi
   * @version 1.1.0
   */

  /**
   * Constructs a new SearchApi. 
   * @alias module:SearchApi
   * @class
   */
  var SearchApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Create a search object for agreement asset event . It will return the result for the first page and search Id to fetch results for further pages.
     * The agreement asset refers to any asset through which an agreement can be created for instance library document,widget and agreement itself. To search for Agreement Asset Events, first make a POST request to the API to create search results with relevant search parameters. Response will be the first page of results along with a search Id param and next page cursor. These can be used to fetch further page results if they are available using the API to retrieve search results
     * @function createAssetEvent
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read widget_read library_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementAssetEventRequest  {module:model/search/AgreementAssetEventRequest}
         Information about the Agreement Asset Events to be generated
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/search/AgreementAssetEventPostResponse|AgreementAssetEventPostResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createAssetEvent = function(headerParameters, agreementAssetEventRequest, opts) {

      opts = opts || {};
      var postBody = agreementAssetEventRequest;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        SearchApiValidator.createAssetEventValidator(agreementAssetEventRequest, opts);
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
      
      
      var returnType = SearchIndex.AgreementAssetEventPostResponse;

      return apiClient.callApi(
        '/search/agreementAssetEvents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Return the result for the page which is described inside the Page Cursor Info.
     * The agreement asset refers to any asset through which an agreement can be created for instance library document,widget and agreement itself. Provide the searchId obtained from the API to create search results request and the next page cursor id from the original call to the API to create search results or a previous call to the API to retrieve search results.
     * @function getAssetEvent
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read widget_read library_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param searchId  {module:model/search/String}
         The search object identifier, as returned by the agreementAssetEvent creation API .
     * @param pageCursor  {module:model/search/String}
         Page cursor of the page whose result will be fetched
     * @param {Object} opts Optional parameters
     * @param  {Integer} opts.pageSize Count of agreement asset events which will be returned in the response. If the pageSize is left blank, then the pageSize which is mentioned while making POST request to /search/agreementAssetEvents will be used. Maximum page size is 500.
     * @returns {Promise} A promise that returns {@link module:model/search/AgreementAssetEventGetResponse|AgreementAssetEventGetResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.getAssetEvent = function(headerParameters, searchId, pageCursor, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        SearchApiValidator.getAssetEventValidator(searchId, pageCursor, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'searchId': searchId
      };
      var queryParams = {
        'pageCursor': pageCursor,
        'pageSize': opts['pageSize']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = SearchIndex.AgreementAssetEventGetResponse;

      return apiClient.callApi(
        '/search/agreementAssetEvents/{searchId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return SearchApi;
}));
