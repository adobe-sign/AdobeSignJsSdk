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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/baseUris/BaseUrisIndex'), require('../utils/validator/BaseUrisApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, BaseUrisIndex, BaseUrisApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module BaseUrisApi
   * @version 1.1.0
   */

  /**
   * Constructs a new BaseUrisApi. 
   * @alias module:BaseUrisApi
   * @class
   */
  var BaseUrisApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Gets the base uri to access other APIs. In case other APIs are accessed from a different end point, it will be considered an invalid request
     * @function getBaseUris
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with any of the valid scopes
     
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/baseUris/BaseUriInfo|BaseUriInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getBaseUris = function(headerParameters, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        BaseUrisApiValidator.getBaseUrisValidator(opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = BaseUrisIndex.BaseUriInfo;

      return apiClient.callApi(
        '/base_uris', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return BaseUrisApi;
}));
