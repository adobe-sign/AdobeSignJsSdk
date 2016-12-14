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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/users/UserCreationInfo'), require('../../model/users/UserCreationResponse'), require('../../model/users/UserDetailsInfo'), require('../../model/users/UserInfo'), require('../../model/users/UserModificationInfo'), require('../../model/users/UsersInfo'), require('../../model/users/UserStatusUpdateInfo'), require('../../model/users/UserStatusUpdateResponse'));

}(function(ApiClient, UserCreationInfo, UserCreationResponse, UserDetailsInfo, UserInfo, UserModificationInfo, UsersInfo, UserStatusUpdateInfo, UserStatusUpdateResponse) {
  'use strict';

  /**
   * @module UsersIndex
   * @version 1.1.0
   */
  var UsersIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The UserCreationInfo model constructor.
     * @property {module:model/users/UserCreationInfo}
     */
    UserCreationInfo: UserCreationInfo,
    /**
     * The UserCreationResponse model constructor.
     * @property {module:model/users/UserCreationResponse}
     */
    UserCreationResponse: UserCreationResponse,
    /**
     * The UserDetailsInfo model constructor.
     * @property {module:model/users/UserDetailsInfo}
     */
    UserDetailsInfo: UserDetailsInfo,
    /**
     * The UserInfo model constructor.
     * @property {module:model/users/UserInfo}
     */
    UserInfo: UserInfo,
    /**
     * The UserModificationInfo model constructor.
     * @property {module:model/users/UserModificationInfo}
     */
    UserModificationInfo: UserModificationInfo,
    /**
     * The UsersInfo model constructor.
     * @property {module:model/users/UsersInfo}
     */
    UsersInfo: UsersInfo,
    /**
     * The UserStatusUpdateInfo model constructor.
     * @property {module:model/users/UserStatusUpdateInfo}
     */
    UserStatusUpdateInfo: UserStatusUpdateInfo,
    /**
     * The UserStatusUpdateResponse model constructor.
     * @property {module:model/users/UserStatusUpdateResponse}
     */
    UserStatusUpdateResponse: UserStatusUpdateResponse
  };

  return UsersIndex ;
}));
