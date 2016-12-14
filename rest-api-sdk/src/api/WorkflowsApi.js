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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/workflows/WorkflowsIndex'), require('../utils/validator/WorkflowsApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, WorkflowsIndex, WorkflowsApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module WorkflowsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new WorkflowsApi. 
   * @alias module:WorkflowsApi
   * @class
   */
  var WorkflowsApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Retrieves workflows for a user.
     * @function getWorkflows
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: workflow_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param {Object} opts Optional parameters
     * @param  {Boolean} opts.includeDraftWorkflows Include draft workflows
     * @param  {String} opts.groupId The group identifier for which the workflows will be fetched
     * @returns {Promise} A promise that returns {@link module:model/workflows/UserWorkflows|UserWorkflows} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWorkflows = function(headerParameters, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WorkflowsApiValidator.getWorkflowsValidator(opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
        'includeDraftWorkflows': opts['includeDraftWorkflows'],
        'groupId': opts['groupId']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = WorkflowsIndex.UserWorkflows;

      return apiClient.callApi(
        '/workflows', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the details of a workflow.
     * @function getWorkflowInfo
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: workflow_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param workflowId  {module:model/workflows/String}
         The workflow identifier, as retrieved from the API to fetch workflows.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/workflows/WorkflowDescription|WorkflowDescription} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWorkflowInfo = function(headerParameters, workflowId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WorkflowsApiValidator.getWorkflowInfoValidator(workflowId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'workflowId': workflowId
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
      
      
      var returnType = WorkflowsIndex.WorkflowDescription;

      return apiClient.callApi(
        '/workflows/{workflowId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Creates an agreement. Sends it out for signatures, and returns the agreementID in the response to the client.
     * @function createWorkflowAgreement
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: workflow_read - To read the workflow resource which will be used for agreement creation agreement_send - If authoringRequested parameter is set to false agreement_write - If authoringRequested parameter is set to true user_login - Required additionally if the autoLoginUser parameter is set to true
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param workflowId  {module:model/workflows/String}
         The workflow identifier, as retrieved from the API to fetch workflows.
     * @param customWorkflowAgreementCreationRequest  {module:model/workflows/CustomWorkflowAgreementCreationRequest}
         Information about the agreement that you want to send and authoring options that you want to apply at the time of sending. NOTE: optional specified with the input parameters is a general guideline on normal request sent to this endpoint. You need to check the actual workflow definition to determine whether a parameter is required or optional.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/workflows/AgreementCreationResponse|AgreementCreationResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createWorkflowAgreement = function(headerParameters, customWorkflowAgreementCreationRequest, workflowId, opts) {

      opts = opts || {};
      var postBody = customWorkflowAgreementCreationRequest;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WorkflowsApiValidator.createWorkflowAgreementValidator(customWorkflowAgreementCreationRequest, workflowId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'workflowId': workflowId
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
      
      
      var returnType = WorkflowsIndex.AgreementCreationResponse;

      return apiClient.callApi(
        '/workflows/{workflowId}/agreements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return WorkflowsApi;
}));
