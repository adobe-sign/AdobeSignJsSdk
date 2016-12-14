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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/groups/GroupCreationInfo'), require('../../model/groups/GroupCreationResponse'), require('../../model/groups/GroupDetailsInfo'), require('../../model/groups/GroupInfo'), require('../../model/groups/GroupModificationInfo'), require('../../model/groups/GroupModificationResponse'), require('../../model/groups/GroupsInfo'), require('../../model/groups/UserInfo'), require('../../model/groups/UsersInfo'));

}(function(ApiClient, GroupCreationInfo, GroupCreationResponse, GroupDetailsInfo, GroupInfo, GroupModificationInfo, GroupModificationResponse, GroupsInfo, UserInfo, UsersInfo) {
  'use strict';

  /**
   * @module GroupsIndex
   * @version 1.1.0
   */
  var GroupsIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The GroupCreationInfo model constructor.
     * @property {module:model/groups/GroupCreationInfo}
     */
    GroupCreationInfo: GroupCreationInfo,
    /**
     * The GroupCreationResponse model constructor.
     * @property {module:model/groups/GroupCreationResponse}
     */
    GroupCreationResponse: GroupCreationResponse,
    /**
     * The GroupDetailsInfo model constructor.
     * @property {module:model/groups/GroupDetailsInfo}
     */
    GroupDetailsInfo: GroupDetailsInfo,
    /**
     * The GroupInfo model constructor.
     * @property {module:model/groups/GroupInfo}
     */
    GroupInfo: GroupInfo,
    /**
     * The GroupModificationInfo model constructor.
     * @property {module:model/groups/GroupModificationInfo}
     */
    GroupModificationInfo: GroupModificationInfo,
    /**
     * The GroupModificationResponse model constructor.
     * @property {module:model/groups/GroupModificationResponse}
     */
    GroupModificationResponse: GroupModificationResponse,
    /**
     * The GroupsInfo model constructor.
     * @property {module:model/groups/GroupsInfo}
     */
    GroupsInfo: GroupsInfo,
    /**
     * The UserInfo model constructor.
     * @property {module:model/groups/UserInfo}
     */
    UserInfo: UserInfo,
    /**
     * The UsersInfo model constructor.
     * @property {module:model/groups/UsersInfo}
     */
    UsersInfo: UsersInfo
  };

  return GroupsIndex ;
}));
