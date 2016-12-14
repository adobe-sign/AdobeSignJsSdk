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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/megaSigns/MegaSignsIndex'), require('../utils/validator/MegaSignsApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, MegaSignsIndex, MegaSignsApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module MegaSignsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new MegaSignsApi. 
   * @alias module:MegaSignsApi
   * @class
   */
  var MegaSignsApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Get all the MegaSign parent agreements of a user.
     * @function getMegaSigns
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param {Object} opts Optional parameters
     * @param  {String} opts.query The query string used for the search. Multiple search terms can be provided, separated by spaces. Some of the search terms include document name, participant name or company, and form data
     * @returns {Promise} A promise that returns {@link module:model/megaSigns/MegaSigns|MegaSigns} if resolved and apiError if rejected.
     * @instance
     */
    _this.getMegaSigns = function(headerParameters, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        MegaSignsApiValidator.getMegaSignsValidator(opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
        'query': opts['query']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = MegaSignsIndex.MegaSigns;

      return apiClient.callApi(
        '/megaSigns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Send an agreement out for signature to multiple recipients. Each recipient will receive and sign their own copy of the agreement.
     * @function createMegaSign
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_send
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param megaSignCreationRequest  {module:model/megaSigns/MegaSignCreationRequest}
         Information about the MegaSign that you want to send.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/megaSigns/MegaSignCreationResponse|MegaSignCreationResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createMegaSign = function(headerParameters, megaSignCreationRequest, opts) {

      opts = opts || {};
      var postBody = megaSignCreationRequest;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        MegaSignsApiValidator.createMegaSignValidator(megaSignCreationRequest, opts);
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
      
      
      var returnType = MegaSignsIndex.MegaSignCreationResponse;

      return apiClient.callApi(
        '/megaSigns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Get detailed information of the specified MegaSign parent agreement.
     * @function getMegaSignInfo
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param megaSignId  {module:model/megaSigns/String}
         The identifier of the MegaSign parent agreement, as returned by the megaSign creation API or retrieved from the API to fetch megaSign agreements
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/megaSigns/MegaSignInfo|MegaSignInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getMegaSignInfo = function(headerParameters, megaSignId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        MegaSignsApiValidator.getMegaSignInfoValidator(megaSignId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'megaSignId': megaSignId
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
      
      
      var returnType = MegaSignsIndex.MegaSignInfo;

      return apiClient.callApi(
        '/megaSigns/{megaSignId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Get all the child agreements of the specified MegaSign parent agreement.
     * @function getMegaSignChildAgreements
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param megaSignId  {module:model/megaSigns/String}
         The identifier of the MegaSign parent agreement, as returned by the megaSign creation API or retrieved from the API to fetch megaSign agreements
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/megaSigns/MegaSignChildAgreements|MegaSignChildAgreements} if resolved and apiError if rejected.
     * @instance
     */
    _this.getMegaSignChildAgreements = function(headerParameters, megaSignId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        MegaSignsApiValidator.getMegaSignChildAgreementsValidator(megaSignId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'megaSignId': megaSignId
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
      
      
      var returnType = MegaSignsIndex.MegaSignChildAgreements;

      return apiClient.callApi(
        '/megaSigns/{megaSignId}/agreements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves data entered by recipients into interactive form fields at the time they signed the child agreements of the specified MegaSign agreement
     * CSV file stream containing form data information
     * @function getMegaSignFormData
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.accept {String} Specify media types which are acceptable for the response. Currently only text/csv is supported.
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param megaSignId  {module:model/megaSigns/String}
         The identifier of the MegaSign parent agreement, as returned by the megaSign creation API or retrieved from the API to fetch megaSign agreements
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/megaSigns/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getMegaSignFormData = function(headerParameters, megaSignId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        MegaSignsApiValidator.getMegaSignFormDataValidator(megaSignId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'megaSignId': megaSignId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'accept': headerParameters.accept,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['text/csv'];
      
      var returnType ='Uint8Array';
      
      return apiClient.callApi(
        '/megaSigns/{megaSignId}/formData', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Cancel all the child agreements of the specified MegaSign agreement.
     * @function updateMegaSignStatus
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param megaSignId  {module:model/megaSigns/String}
         The identifier of the MegaSign parent agreement, as returned by the megaSign creation API or retrieved from the API to fetch megaSign agreements
     * @param megaSignStatusUpdateInfo  {module:model/megaSigns/MegaSignStatusUpdateInfo}
         MegaSign status update information object.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/megaSigns/MegaSignStatusUpdateResponse|MegaSignStatusUpdateResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.updateMegaSignStatus = function(headerParameters, megaSignStatusUpdateInfo, megaSignId, opts) {

      opts = opts || {};
      var postBody = megaSignStatusUpdateInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        MegaSignsApiValidator.updateMegaSignStatusValidator(megaSignStatusUpdateInfo, megaSignId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'megaSignId': megaSignId
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
      
      
      var returnType = MegaSignsIndex.MegaSignStatusUpdateResponse;

      return apiClient.callApi(
        '/megaSigns/{megaSignId}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return MegaSignsApi;
}));
