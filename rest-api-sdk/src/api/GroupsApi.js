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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/groups/GroupsIndex'), require('../utils/validator/GroupsApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, GroupsIndex, GroupsApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module GroupsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:GroupsApi
   * @class
   */
  var GroupsApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Gets all the groups in an account.
     * @function getGroups
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/groups/GroupsInfo|GroupsInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getGroups = function(headerParameters, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        GroupsApiValidator.getGroupsValidator(opts);
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
      
      
      var returnType = GroupsIndex.GroupsInfo;

      return apiClient.callApi(
        '/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Creates a new group in an account.
     * @function createGroup
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param groupCreationInfo  {module:model/groups/GroupCreationInfo}
         
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/groups/GroupCreationResponse|GroupCreationResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createGroup = function(headerParameters, groupCreationInfo, opts) {

      opts = opts || {};
      var postBody = groupCreationInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        GroupsApiValidator.createGroupValidator(groupCreationInfo, opts);
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
      
      
      var returnType = GroupsIndex.GroupCreationResponse;

      return apiClient.callApi(
        '/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieve detailed information about the group.
     * @function getGroupDetails
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param groupId  {module:model/groups/String}
         The group identifier, as returned by the group creation API or retrieved from the API to fetch groups
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/groups/GroupDetailsInfo|GroupDetailsInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getGroupDetails = function(headerParameters, groupId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        GroupsApiValidator.getGroupDetailsValidator(groupId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'groupId': groupId
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
      
      
      var returnType = GroupsIndex.GroupDetailsInfo;

      return apiClient.callApi(
        '/groups/{groupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Update an existing group.
     * @function modifyGroup
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param groupId  {module:model/groups/String}
         The group identifier, as returned by the group creation API or retrieved from the API to fetch groups
     * @param groupModificationInfo  {module:model/groups/GroupModificationInfo}
         
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/groups/GroupModificationResponse|GroupModificationResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.modifyGroup = function(headerParameters, groupModificationInfo, groupId, opts) {

      opts = opts || {};
      var postBody = groupModificationInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        GroupsApiValidator.modifyGroupValidator(groupModificationInfo, groupId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'groupId': groupId
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
      
      
      var returnType = GroupsIndex.GroupModificationResponse;

      return apiClient.callApi(
        '/groups/{groupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Delete an existing group.
     * @function deleteGroup
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param groupId  {module:model/groups/String}
         The group identifier, as returned by the group creation API or retrieved from the API to fetch groups
     * @param {Object} opts Optional parameters
     * @instance
     */
    _this.deleteGroup = function(headerParameters, groupId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        GroupsApiValidator.deleteGroupValidator(groupId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'groupId': groupId
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
      
      
      var returnType = null;

      return apiClient.callApi(
        '/groups/{groupId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Gets all the users in a group.
     * @function getUsersInGroup
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: user_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param groupId  {module:model/groups/String}
         The group identifier, as returned by the group creation API or retrieved from the API to fetch groups
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/groups/UsersInfo|UsersInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getUsersInGroup = function(headerParameters, groupId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        GroupsApiValidator.getUsersInGroupValidator(groupId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'groupId': groupId
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
      
      
      var returnType = GroupsIndex.UsersInfo;

      return apiClient.callApi(
        '/groups/{groupId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return GroupsApi;
}));
