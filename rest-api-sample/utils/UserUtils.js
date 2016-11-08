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
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('adobe-sign-sdk'), require('./Errors'), require('./ApiUtils'), require('./Constants'));
  }
}(function(AdobeSignSdk, Errors, ApiUtils, Constants) {
  'use strict';
  
  var UserUtils = function(){};
  
  var usersApi = new AdobeSignSdk.UsersApi(ApiUtils.getContext());
  var usersModel = AdobeSignSdk.UsersModel;
  var headers = ApiUtils.getHeaderParams();

  /**
   * Create a sample user in the group.
   *
   * @param userEmail Email Id of the user
   * @param firstName First Name of the user
   * @param lastName  Last Name of the user
   * @return String containing id of the newly created user.
   * @throws ApiError
   */
  UserUtils.createUser = function(userEmail,
                                  firstName,
                                  lastName) {

      var userCreationInfo = new usersModel.UserCreationInfo();
      userCreationInfo.setEmail(userEmail);
      userCreationInfo.setFirstName(firstName);
      userCreationInfo.setLastName(lastName);

      return usersApi.createUser(headers,
                                 userCreationInfo)
                     .then(function(userCreationResponse) {
                       return userCreationResponse.getUserId();
                     })
                     .catch(function(apiError) {
                       ApiUtils.logAndThrowError(Errors.CREATE_USER, apiError);
                     });

  };

  /**
   * Gets all the users in an account.
   *
   * @return UsersInfo Information about all the users in the account
   */
  UserUtils.getUsers = function() {

      return usersApi.getUsers(headers,
                               Constants.X_USER_EMAIL)
                     .then(function(usersInfo) {
                       return usersInfo;
                     })
                     .catch(function(apiError) {
                       ApiUtils.logAndThrowError(Errors.GET_USERS, apiError);
                     });

  };

  return UserUtils;
}));
