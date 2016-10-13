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
    module.exports = factory(require('../utils/UserUtils'), require('../utils/Constants'), require('../utils/Errors'), require('../utils/ApiUtils'));
  
}(function(UserUtils, Constants, Errors, ApiUtils) {
  'use strict';

  /**
   * This sample client demonstrates how to create a new user in an account.
   *
   * <p>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function CreateNewUserInAccount() {

    /**
     * Entry point for this sample client program.
     */
    ApiUtils.configureProperty(CreateNewUserInAccount.name);

    //Make API call to create a user
    UserUtils.createUser(ApiUtils.getUserEmail(),
                         Constants.USER_FIRST_NAME,
                         Constants.USER_LAST_NAME)
             .then(function(userId) {
               ApiUtils.info("User created with User ID = " + userId);
             })
             .catch(function(apiError) {
               ApiUtils.logError(Errors.CREATE_NEW_USER_IN_ACCOUNT, apiError);
             });
  })();

}));

