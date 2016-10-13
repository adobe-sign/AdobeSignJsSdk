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

(function (factory) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../src/index'), require('../utils/TestData'), require('./ApiUtils'), require('path'));

}(function (AdobeSignSdk, TestData, ApiUtils, path) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the Users API Tests.
     */
    var UserUtils = function () {
    };

    var usersApi = new AdobeSignSdk.UsersApi(ApiUtils.getContext(ApiUtils.getContext()));
    var usersModel = AdobeSignSdk.UsersModel;

    //Helper method that returns UsersApi
    UserUtils.getUsersApi = function () {
        return usersApi;
    };

    //Helper function to create a user and validate that user is actually being created.
    UserUtils.createUser = function () {
        var opts = {};
        var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                             ApiUtils.getLastName(),
                                                             ApiUtils.getEmail());
        return usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                   userCreationInfo,
                                   opts)
                       .then(function (userCreationResponse) {
                           return userCreationResponse.getUserId();
                       })
                       .catch(ApiUtils.throwError);

    };

    //Helper function to get user creation info
    UserUtils.getUserCreationInfo = function (firstName,
                                              lastName,
                                              email) {
        var userCreationInfo = new usersModel.UserCreationInfo();
        userCreationInfo.setFirstName(firstName);
        userCreationInfo.setLastName(lastName);
        userCreationInfo.setEmail(email);
        return userCreationInfo;
    };

    UserUtils.getResourceId = function (email) {
        var opts = {};
        return UserUtils.isExistingUser(email)
                        .then(function (userId) {
                            if (userId === null) {
                                var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                                     ApiUtils.getLastName(),
                                                                                     email);
                                return UserUtils.createUser(ApiUtils.getValidHeaderParams(),
                                                            userCreationInfo,
                                                            opts);
                            }
                            else {
                                return userId;
                            }
                        })
                        .catch(ApiUtils.throwError);
    };

    UserUtils.isExistingUser = function (email) {
        var opts = {};
        var userId = null;
        return usersApi.getUsers(ApiUtils.getValidHeaderParams(),
                                 opts,
                                 null)
                       .then(function (UsersInfo) {
                           var userInfoList = UsersInfo.getUserInfoList();
                           for (var i = 0; i < userInfoList.length; i++) {
                               if (userInfoList[i].getEmail() === email) {
                                   userId = userInfoList[i].getUserId();
                                   return userId;
                               }
                           }
                           return userId;
                       })
                       .catch(ApiUtils.throwError);

    };

    //Helper function to get user modification info
    UserUtils.getUserModificationInfo = function (firstName,
                                                  lastName,
                                                  email,
                                                  groupId,
                                                  roles) {
        var userModificationInfo = new usersModel.UserModificationInfo();
        userModificationInfo.setFirstName(firstName);
        userModificationInfo.setLastName(lastName);
        userModificationInfo.setEmail(email);
        userModificationInfo.setGroupId(groupId);
        userModificationInfo.setRoles(roles);
        return userModificationInfo;
    };

    UserUtils.getUserStatusUpdateInfo = function (userStatus) {
        var userStatusUpdateInfo = new usersModel.UserStatusUpdateInfo();
        userStatusUpdateInfo.setUserStatus(userStatus);
        return userStatusUpdateInfo;
    };

    return UserUtils;
}));
