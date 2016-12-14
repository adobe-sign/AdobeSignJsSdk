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
   * @module model/groups/UserInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserInfo</code>.
   * @alias module:model/groups/UserInfo
   * @class
   */
  var UserInfo = function() {
    var _this = this;


    _this.company = undefined;

    _this.email = undefined;

    _this.fullNameOrEmail = undefined;

    _this.groupId = undefined;

    _this.userId = undefined;

   /**
    * The name of company of the user
    * @function getCompany
    * @return  {module:model/groups/String} The name of company of the user  
    * @instance
    */
    _this.getCompany = function() {
      return _this.company;
    };

   /**
    * The name of company of the user
    * @function setCompany
    * @param company {module:model/groups/String} The name of company of the user
    * @instance
    */
    _this.setCompany = function(company) {
      _this.company = company;
    };

   /**
    * The email address of the user
    * @function getEmail
    * @return  {module:model/groups/String} The email address of the user  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email address of the user
    * @function setEmail
    * @param email {module:model/groups/String} The email address of the user
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The full name of the user, if available; or their email address
    * @function getFullNameOrEmail
    * @return  {module:model/groups/String} The full name of the user, if available; or their email address  
    * @instance
    */
    _this.getFullNameOrEmail = function() {
      return _this.fullNameOrEmail;
    };

   /**
    * The full name of the user, if available; or their email address
    * @function setFullNameOrEmail
    * @param fullNameOrEmail {module:model/groups/String} The full name of the user, if available; or their email address
    * @instance
    */
    _this.setFullNameOrEmail = function(fullNameOrEmail) {
      _this.fullNameOrEmail = fullNameOrEmail;
    };

   /**
    * The identifier that can be used in group management methods
    * @function getGroupId
    * @return  {module:model/groups/String} The identifier that can be used in group management methods  
    * @instance
    */
    _this.getGroupId = function() {
      return _this.groupId;
    };

   /**
    * The identifier that can be used in group management methods
    * @function setGroupId
    * @param groupId {module:model/groups/String} The identifier that can be used in group management methods
    * @instance
    */
    _this.setGroupId = function(groupId) {
      _this.groupId = groupId;
    };

   /**
    * A unique identifier of the user resource for REST APIs. This identifier can not be used in SOAP APIs
    * @function getUserId
    * @return  {module:model/groups/String} A unique identifier of the user resource for REST APIs. This identifier can not be used in SOAP APIs  
    * @instance
    */
    _this.getUserId = function() {
      return _this.userId;
    };

   /**
    * A unique identifier of the user resource for REST APIs. This identifier can not be used in SOAP APIs
    * @function setUserId
    * @param userId {module:model/groups/String} A unique identifier of the user resource for REST APIs. This identifier can not be used in SOAP APIs
    * @instance
    */
    _this.setUserId = function(userId) {
      _this.userId = userId;
    };

  };

  /**
   * @private
   * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/groups/UserInfo} obj Optional instance to populate.
   * @return {module:model/groups/UserInfo} The populated <code>UserInfo</code> instance.
   */
  UserInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserInfo();

      if (data.hasOwnProperty('company')) {
        obj.setCompany(data.company);
      }
      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('fullNameOrEmail')) {
        obj.setFullNameOrEmail(data.fullNameOrEmail);
      }
      if (data.hasOwnProperty('groupId')) {
        obj.setGroupId(data.groupId);
      }
      if (data.hasOwnProperty('userId')) {
        obj.setUserId(data.userId);
      }
    }
    return obj;
  };


  return UserInfo;
}));


