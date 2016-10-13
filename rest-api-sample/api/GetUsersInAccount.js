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
    module.exports = factory(require('../utils/UserUtils'), require('../utils/Errors'), require('../utils/ApiUtils'));
  
}(function(UserUtils, Errors, ApiUtils) {
  'use strict';

  /**
   * This sample client demonstrates how to get all the users in an account.
   *
   * <p>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function GetUsersInAccount() {

    /**
     * Entry point for this sample client program.
     */
    ApiUtils.configureProperty(GetUsersInAccount.name);

    //Make API call to create a user
    UserUtils.getUsers()
             .then(function(usersInfo) {
               var userInfos = usersInfo.getUserInfoList();
               for (var i = 0; i < userInfos.length; i++) {
                 var userInfo = userInfos[i];
                 ApiUtils.info("User ID : " + userInfo.getUserId());
                 ApiUtils.info("User Name : " + userInfo.getFullNameOrEmail());
                 ApiUtils.info("Email ID of User : " + userInfo.getEmail());
               }
             })
             .catch(function(apiError) {
               ApiUtils.logError(Errors.GET_USERS_IN_ACCOUNT, apiError);
             });
  })();

}));
