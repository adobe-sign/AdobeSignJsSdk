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
      module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'));
  
}(function(SdkErrorCodes, ApiValidatorHelper) {
  'use strict';

  /**
   * Validator for Users Api. The main purpose of this is to check the validity of the parameters passed to
   * the users API and throw ApiError with required error messages if the validation fails.
   */
  var  UsersApiValidator = function(){};
        
  /**
   * Validators for getUsers API that Gets all the users in an account.
   * @param {Object}   opts Optional parameters
   * @param            opts.xUserEmail The email address of the user whose details are being requested
   * @returns {Promise} A promise that returns UsersInfo if resolved and apiError if rejected.
   */
  
  UsersApiValidator.getUsersValidator = function(opts) {
  };

    var USER_CREATION_INFO = "userCreationInfo";
    var USER_MODIFICATION_INFO = "userModificationInfo";
    var USER_STATUS_UPDATE_INFO = "userStatusUpdateInfo";
    var FIRST_NAME = "firstName";
    var LAST_NAME = "lastName";
    var ROLES = "roles";
    var GROUP_ID = "groupId";
    var EMAIL = "email";



    /**
   * Validator for createUsers Api that creates a new user in the account of the user invoking this api.
   *
   * @param userCreationInfo  The object that has all the details/ required parameters for creating a new user.
   * @param {Object}          opts Optional parameters
   * @throws ApiError
   */
  
  UsersApiValidator.createUserValidator = function(userCreationInfo,
                                                   opts) {
      // Null and empty check for required params
      var paramList = [];
      ApiValidatorHelper.validateParameter(userCreationInfo,SdkErrorCodes.MISSING_REQUIRED_PARAM,USER_CREATION_INFO);
          
      paramList.push({paramKey:FIRST_NAME,sdkErrorCode:SdkErrorCodes.MISSING_REQUIRED_PARAM,param:userCreationInfo.getFirstName()});
      paramList.push({paramKey:LAST_NAME,sdkErrorCode:SdkErrorCodes.MISSING_REQUIRED_PARAM,param:userCreationInfo.getLastName()});
      paramList.push({param:userCreationInfo.getEmail(), sdkErrorCode:SdkErrorCodes.MUST_PROVIDE_EMAIL});
      
      ApiValidatorHelper.validateParameters(paramList);
      ApiValidatorHelper.validateEmailParameter(userCreationInfo.getEmail(), SdkErrorCodes.INVALID_EMAIL);

  };

  /**
   * Validator for getUserInfo Api that fetches the information of a user whose userId is provided.
   *
   * @param userId      The userId of the user whose details are to be fetched.
   * @param {Object}    opts Optional parameters
   * @throws ApiError
   */

  UsersApiValidator.getUserDetailValidator = function(userId, 
                                                      opts) {
      ApiValidatorHelper.validateId(userId,SdkErrorCodes.INVALID_USER_ID);
  };

  /**
   * Validator for modifyUser Api that modifies the information of a user whose userId is provided.
   *
   * @param userId                  The userId of the user whose details are to be modified.
   * @param userModificationInfo    The object that has all the details/ required parameters for modifying the user's details.
   * @param {Object}                opts Optional parameters
   * @throws ApiError
   */

   UsersApiValidator.modifyUserValidator = function(userModificationInfo,
                                                    userId,
                                                    opts) {
      var paramList = [];
      ApiValidatorHelper.validateParameter(userModificationInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, USER_MODIFICATION_INFO);

      paramList.push({paramKey:FIRST_NAME,sdkErrorCode:SdkErrorCodes.MISSING_REQUIRED_PARAM,param:userModificationInfo.getFirstName()});
      paramList.push({paramKey:LAST_NAME,sdkErrorCode:SdkErrorCodes.MISSING_REQUIRED_PARAM,param:userModificationInfo.getLastName()});
      paramList.push({paramKey:EMAIL,sdkErrorCode:SdkErrorCodes.MISSING_REQUIRED_PARAM,param:userModificationInfo.getEmail()});
      paramList.push({paramKey:GROUP_ID,sdkErrorCode:SdkErrorCodes.MISSING_REQUIRED_PARAM,param:userModificationInfo.getGroupId()});
      paramList.push({paramKey:ROLES,sdkErrorCode:SdkErrorCodes.MISSING_REQUIRED_PARAM,param:userModificationInfo.getRoles()});

      ApiValidatorHelper.validateId(userId, SdkErrorCodes.INVALID_USER_ID);
      ApiValidatorHelper.validateParameters(paramList);
      ApiValidatorHelper.validateEmailParameter(userModificationInfo.getEmail(), SdkErrorCodes.INVALID_EMAIL);
   };

  /**
   * Validator for modifyUserStatus Api that modifies the status of the user whose userId is provided.
   *
   * @param userId                  The userId of the user whose details are to be modified.
   * @param userStatusUpdateInfo    The object containing the User's status.
   * @param {Object}                opts Optional parameters
   * @throws ApiError 
   */

   UsersApiValidator.modifyUserStatusValidator = function (userStatusUpdateInfo,
                                                           userId,
                                                           opts) {
      var paramList = [];
      ApiValidatorHelper.validateId(userId, SdkErrorCodes.INVALID_USER_ID);
      ApiValidatorHelper.validateParameter(userStatusUpdateInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, USER_STATUS_UPDATE_INFO);

      paramList.push({param:userStatusUpdateInfo.getUserStatus(), sdkErrorCode: SdkErrorCodes.MUST_PROVIDE_VALID_USER_STATUS});
      ApiValidatorHelper.validateParameters(paramList);
   };
  
  return UsersApiValidator;
}));