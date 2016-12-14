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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/users/UsersIndex'), require('../utils/validator/UsersApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, UsersIndex, UsersApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module UsersApi
   * @version 1.1.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:UsersApi
   * @class
   */
  var UsersApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Gets all the users in an account.
     * @function getUsers
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param {Object} opts Optional parameters
     * @param  {String} opts.xUserEmail The email address of the user whose details are being requested
     * @returns {Promise} A promise that returns {@link module:model/users/UsersInfo|UsersInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getUsers = function(headerParameters, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        UsersApiValidator.getUsersValidator(opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
        'x-user-email': opts['xUserEmail']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = UsersIndex.UsersInfo;

      return apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Creates a new user in the Adobe Sign system
     * @function createUser
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param userCreationInfo  {module:model/users/UserCreationInfo}
         
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/users/UserCreationResponse|UserCreationResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createUser = function(headerParameters, userCreationInfo, opts) {

      opts = opts || {};
      var postBody = userCreationInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        UsersApiValidator.createUserValidator(userCreationInfo, opts);
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
      
      
      var returnType = UsersIndex.UserCreationResponse;

      return apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieve detailed information about the user in the caller account.
     * If caller is neither an account admin nor group admin then some user information will not be returned.
     * @function getUserDetail
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param userId  {module:model/users/String}
         The user identifier, as returned by the user creation API or retrieved from the API to fetch users. To get the details for the token owner, UserId can be replaced by \&quot;me\&quot; without quotes.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/users/UserDetailsInfo|UserDetailsInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getUserDetail = function(headerParameters, userId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        UsersApiValidator.getUserDetailValidator(userId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'userId': userId
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
      
      
      var returnType = UsersIndex.UserDetailsInfo;

      return apiClient.callApi(
        '/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Update an existing user.
     * @function modifyUser
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param userId  {module:model/users/String}
         The user identifier, as provided by the APIs to retrieve or create users
     * @param userModificationInfo  {module:model/users/UserModificationInfo}
         
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/users/UserDetailsInfo|UserDetailsInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.modifyUser = function(headerParameters, userModificationInfo, userId, opts) {

      opts = opts || {};
      var postBody = userModificationInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        UsersApiValidator.modifyUserValidator(userModificationInfo, userId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'userId': userId
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
      
      
      var returnType = UsersIndex.UserDetailsInfo;

      return apiClient.callApi(
        '/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Activate/Deactivate a given user.
     * @function modifyUserStatus
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param userId  {module:model/users/String}
         The user identifier, as provided by the APIs to retrieve or create users
     * @param userStatusUpdateInfo  {module:model/users/UserStatusUpdateInfo}
         User status update information object.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/users/UserStatusUpdateResponse|UserStatusUpdateResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.modifyUserStatus = function(headerParameters, userStatusUpdateInfo, userId, opts) {

      opts = opts || {};
      var postBody = userStatusUpdateInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        UsersApiValidator.modifyUserStatusValidator(userStatusUpdateInfo, userId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'userId': userId
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
      
      
      var returnType = UsersIndex.UserStatusUpdateResponse;

      return apiClient.callApi(
        '/users/{userId}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return UsersApi;
}));
