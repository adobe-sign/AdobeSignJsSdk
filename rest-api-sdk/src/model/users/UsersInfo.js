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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/users/UserInfo'));

}(function(ApiClient, UserInfo) {
  'use strict';


  /**
   * @module model/users/UsersInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UsersInfo</code>.
   * @alias module:model/users/UsersInfo
   * @class
   */
  var UsersInfo = function() {
    var _this = this;


    _this.userInfoList = undefined;

   /**
    * The list of users in the account
    * @function getUserInfoList
    * @return  {module:model/users/Array} The list of users in the account  
    * @instance
    */
    _this.getUserInfoList = function() {
      return _this.userInfoList;
    };

   /**
    * The list of users in the account
    * @function setUserInfoList
    * @param userInfoList {module:model/users/Array} The list of users in the account
    * @instance
    */
    _this.setUserInfoList = function(userInfoList) {
      _this.userInfoList = userInfoList;
    };

  };

  /**
   * @private
   * Constructs a <code>UsersInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/users/UsersInfo} obj Optional instance to populate.
   * @return {module:model/users/UsersInfo} The populated <code>UsersInfo</code> instance.
   */
  UsersInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UsersInfo();

      if (data.hasOwnProperty('userInfoList')) {
        obj.setUserInfoList(ApiClient.convertToType(data.userInfoList,[UserInfo]));
      }
    }
    return obj;
  };


  return UsersInfo;
}));


