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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/groups/UserInfo'));

}(function(ApiClient, UserInfo) {
  'use strict';


  /**
   * @module model/groups/GroupDetailsInfo
   * @version 1.0.0
   */
  /**
   * Constructs a new <code>GroupDetailsInfo</code>.
   * @alias module:model/groups/GroupDetailsInfo
   * @class
   */
  var GroupDetailsInfo = function() {
    var _this = this;


    _this.dateCreated = undefined;

    _this.groupAdmins = undefined;

    _this.groupId = undefined;

    _this.groupName = undefined;

   /**
    * Date of creation of the group
    * @function getDateCreated
    * @return  Date of creation of the group { Date }
    * @instance
    */
    _this.getDateCreated = function() {
      return _this.dateCreated;
    };

   /**
    * Date of creation of the group
    * @function setDateCreated
    * @param dateCreated { Date } Date of creation of the group
    * @instance
    */
    _this.setDateCreated = function(dateCreated) {
      _this.dateCreated = dateCreated;
    };

   /**
    * The list of admins of the group.
    * @function getGroupAdmins
    * @return  The list of admins of the group. { Array }
    * @instance
    */
    _this.getGroupAdmins = function() {
      return _this.groupAdmins;
    };

   /**
    * The list of admins of the group.
    * @function setGroupAdmins
    * @param groupAdmins { Array } The list of admins of the group.
    * @instance
    */
    _this.setGroupAdmins = function(groupAdmins) {
      _this.groupAdmins = groupAdmins;
    };

   /**
    * Unique identifier of the group
    * @function getGroupId
    * @return  Unique identifier of the group { String }
    * @instance
    */
    _this.getGroupId = function() {
      return _this.groupId;
    };

   /**
    * Unique identifier of the group
    * @function setGroupId
    * @param groupId { String } Unique identifier of the group
    * @instance
    */
    _this.setGroupId = function(groupId) {
      _this.groupId = groupId;
    };

   /**
    * Name of the group
    * @function getGroupName
    * @return  Name of the group { String }
    * @instance
    */
    _this.getGroupName = function() {
      return _this.groupName;
    };

   /**
    * Name of the group
    * @function setGroupName
    * @param groupName { String } Name of the group
    * @instance
    */
    _this.setGroupName = function(groupName) {
      _this.groupName = groupName;
    };

  };

  /**
   * @private
   * Constructs a <code>GroupDetailsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/groups/GroupDetailsInfo} obj Optional instance to populate.
   * @return {module:model/groups/GroupDetailsInfo} The populated <code>GroupDetailsInfo</code> instance.
   */
  GroupDetailsInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new GroupDetailsInfo();

      if (data.hasOwnProperty('dateCreated')) {
        obj.setDateCreated(data.dateCreated);
      }
      if (data.hasOwnProperty('groupAdmins')) {
        obj.setGroupAdmins(ApiClient.convertToType(data.groupAdmins,[UserInfo]));
      }
      if (data.hasOwnProperty('groupId')) {
        obj.setGroupId(data.groupId);
      }
      if (data.hasOwnProperty('groupName')) {
        obj.setGroupName(data.groupName);
      }
    }
    return obj;
  };


  return GroupDetailsInfo;
}));


