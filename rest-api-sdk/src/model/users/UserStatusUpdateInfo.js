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
    module.exports = factory(require('../../utils/ApiClient'));

}(function(ApiClient) {
  'use strict';


  /**
   * @module model/users/UserStatusUpdateInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserStatusUpdateInfo</code>.
   * @alias module:model/users/UserStatusUpdateInfo
   * @class
   */
  var UserStatusUpdateInfo = function() {
    var _this = this;


    _this.comment = undefined;

    _this.userStatus = undefined;

   /**
    * An optional comment describing why you want to activate/deactivate a given user
    * @function getComment
    * @return  {module:model/users/String} An optional comment describing why you want to activate/deactivate a given user  
    * @instance
    */
    _this.getComment = function() {
      return _this.comment;
    };

   /**
    * An optional comment describing why you want to activate/deactivate a given user
    * @function setComment
    * @param comment {module:model/users/String} An optional comment describing why you want to activate/deactivate a given user
    * @instance
    */
    _this.setComment = function(comment) {
      _this.comment = comment;
    };

   /**
    * The state to which the user is to be updated. The valid states for this variable is currently, ACTIVE and INACTIVE
    * @function getUserStatus
    * @return  {module:model/users/String} The state to which the user is to be updated. The valid states for this variable is currently, ACTIVE and INACTIVE  
    * @instance
    */
    _this.getUserStatus = function() {
      return _this.userStatus;
    };

   /**
    * The state to which the user is to be updated. The valid states for this variable is currently, ACTIVE and INACTIVE
    * @function setUserStatus
    * @param userStatus {module:model/users/String} The state to which the user is to be updated. The valid states for this variable is currently, ACTIVE and INACTIVE
    * @instance
    */
    _this.setUserStatus = function(userStatus) {
      _this.userStatus = userStatus;
    };

  };

  /**
   * @private
   * Constructs a <code>UserStatusUpdateInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/users/UserStatusUpdateInfo} obj Optional instance to populate.
   * @return {module:model/users/UserStatusUpdateInfo} The populated <code>UserStatusUpdateInfo</code> instance.
   */
  UserStatusUpdateInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserStatusUpdateInfo();

      if (data.hasOwnProperty('comment')) {
        obj.setComment(data.comment);
      }
      if (data.hasOwnProperty('userStatus')) {
        obj.setUserStatus(data.userStatus);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>userStatus</code> property.
   * @enum {String}
   * @readonly
   */
UserStatusUpdateInfo.UserStatusEnum = {
  
  
    /**
     * value: ACTIVE
     * @const
     */
    ACTIVE: "ACTIVE",
    
  
    /**
     * value: INACTIVE
     * @const
     */
    INACTIVE: "INACTIVE"
  
  
  };

  return UserStatusUpdateInfo;
}));


