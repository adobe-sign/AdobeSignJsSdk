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

  var GROUP_CREATION_INFO = "groupCreationInfo";
  var GROUP_MODIFICATION_INFO = "groupModificationInfo";
  /**
   * Validator for Groups Api. The main purpose of this is to check the validity of the parameters passed to
   * the groups API and throw ApiError with required error messages if the validation fails.
   */
  var  GroupsApiValidator = function(){};

  /**
   * Validator for getGroups Api that fetches list of all the groups in the account.
   *
   */
  GroupsApiValidator.getGroupsValidator = function () {
    
  };

  /**
   * Validator for createGroup Api that creates a group in the account.
   *
   * @param groupCreationInfo The object that has all the details/ required parameters for creating a group.
   */
  GroupsApiValidator.createGroupValidator = function (groupCreationInfo) {
    ApiValidatorHelper.validateParameter(groupCreationInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, GROUP_CREATION_INFO);
    var list = [];
    list.push({param: groupCreationInfo.getGroupName(), sdkErrorCode: SdkErrorCodes.INVALID_GROUP_NAME});
    
    ApiValidatorHelper.validateParameters(list);
  };

  /**
   * Validator for getGroupDetails Api that fetches the details of the given group.
   *
   * @param groupId The Id of the Group whose details are to be fetched.
   */
  GroupsApiValidator.getGroupDetailsValidator = function (groupId) {
    ApiValidatorHelper.validateId(groupId, 
                                  SdkErrorCodes.INVALID_GROUP_ID);
  };
  
  /**
   * Validator for modifyGroup Api that modifies the given group.
   *
   * @param groupId               The Id of the Group to be modified.
   * @param groupModificationInfo The object that has all the details/ required parameters for modifying the group.
   */
  GroupsApiValidator.modifyGroupValidator = function (groupModificationInfo,
                                                      groupId,
                                                      opts) {
    ApiValidatorHelper.validateId(groupId,
                                  SdkErrorCodes.INVALID_GROUP_ID);
    ApiValidatorHelper.validateParameter(groupModificationInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, GROUP_MODIFICATION_INFO);
    var list = [];
    list.push({param: groupModificationInfo.getGroupName(), sdkErrorCode: SdkErrorCodes.INVALID_GROUP_NAME});

    ApiValidatorHelper.validateParameters(list);

  };

  /**
   * Validator for deleteGroup Api that deletes the given group.
   *
   * @param groupId The Id of the Group to be deleted.
   */
  GroupsApiValidator.deleteGroupValidator = function (groupId) {
    ApiValidatorHelper.validateId(groupId, 
                                  SdkErrorCodes.INVALID_GROUP_ID);
  };

  /**
   * Validator for getUsersInGroup Api that fetches all the users in the given group.
   *
   * @param groupId The Id of the Group from which the users are to be fetched.
   */
  GroupsApiValidator.getUsersInGroupValidator = function (groupId) {
    ApiValidatorHelper.validateId(groupId,
                                  SdkErrorCodes.INVALID_GROUP_ID);
  };
return GroupsApiValidator;
}));