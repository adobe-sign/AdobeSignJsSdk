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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/reminders/RemindersIndex'), require('../utils/validator/RemindersApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, RemindersIndex, RemindersApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module RemindersApi
   * @version 1.1.0
   */

  /**
   * Constructs a new RemindersApi. 
   * @alias module:RemindersApi
   * @class
   */
  var RemindersApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Sends a reminder for an agreement.
     * Sends a reminder for an agreement.
     * @function createReminder
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param reminderCreationInfo  {module:model/reminders/ReminderCreationInfo}
         The agreement identifier.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/reminders/ReminderCreationResult|ReminderCreationResult} if resolved and apiError if rejected.
     * @instance
     */
    _this.createReminder = function(headerParameters, reminderCreationInfo, opts) {

      opts = opts || {};
      var postBody = reminderCreationInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        RemindersApiValidator.createReminderValidator(reminderCreationInfo, opts);
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
      
      
      var returnType = RemindersIndex.ReminderCreationResult;

      return apiClient.callApi(
        '/reminders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return RemindersApi;
}));
