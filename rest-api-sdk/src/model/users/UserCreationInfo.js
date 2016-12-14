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
   * @module model/users/UserCreationInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserCreationInfo</code>.
   * @alias module:model/users/UserCreationInfo
   * @class
   */
  var UserCreationInfo = function() {
    var _this = this;


    _this.company = undefined;

    _this.email = undefined;

    _this.firstName = undefined;

    _this.groupId = undefined;

    _this.lastName = undefined;

    _this.optIn = undefined;

    _this.password = undefined;

    _this.phone = undefined;

    _this.roles = undefined;

    _this.title = undefined;

   /**
    * The name of the company of the new user
    * @function getCompany
    * @return  {module:model/users/String} The name of the company of the new user  
    * @instance
    */
    _this.getCompany = function() {
      return _this.company;
    };

   /**
    * The name of the company of the new user
    * @function setCompany
    * @param company {module:model/users/String} The name of the company of the new user
    * @instance
    */
    _this.setCompany = function(company) {
      _this.company = company;
    };

   /**
    * The email address of the new user
    * @function getEmail
    * @return  {module:model/users/String} The email address of the new user  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email address of the new user
    * @function setEmail
    * @param email {module:model/users/String} The email address of the new user
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The first name of the new user
    * @function getFirstName
    * @return  {module:model/users/String} The first name of the new user  
    * @instance
    */
    _this.getFirstName = function() {
      return _this.firstName;
    };

   /**
    * The first name of the new user
    * @function setFirstName
    * @param firstName {module:model/users/String} The first name of the new user
    * @instance
    */
    _this.setFirstName = function(firstName) {
      _this.firstName = firstName;
    };

   /**
    * Group in which the new user should be added. It can be obtained through a call to the API which retrieves users. Default is Group of the user making this call. The user is inferred from the access_token header.
    * @function getGroupId
    * @return  {module:model/users/String} Group in which the new user should be added. It can be obtained through a call to the API which retrieves users. Default is Group of the user making this call. The user is inferred from the access_token header.  
    * @instance
    */
    _this.getGroupId = function() {
      return _this.groupId;
    };

   /**
    * Group in which the new user should be added. It can be obtained through a call to the API which retrieves users. Default is Group of the user making this call. The user is inferred from the access_token header.
    * @function setGroupId
    * @param groupId {module:model/users/String} Group in which the new user should be added. It can be obtained through a call to the API which retrieves users. Default is Group of the user making this call. The user is inferred from the access_token header.
    * @instance
    */
    _this.setGroupId = function(groupId) {
      _this.groupId = groupId;
    };

   /**
    * The last name of the new user
    * @function getLastName
    * @return  {module:model/users/String} The last name of the new user  
    * @instance
    */
    _this.getLastName = function() {
      return _this.lastName;
    };

   /**
    * The last name of the new user
    * @function setLastName
    * @param lastName {module:model/users/String} The last name of the new user
    * @instance
    */
    _this.setLastName = function(lastName) {
      _this.lastName = lastName;
    };

   /**
    * Whether or not the user has opted in to receive marketing information from Adobe Sign and its partners. Default value is UNKNOWN
    * @function getOptIn
    * @return  {module:model/users/String} Whether or not the user has opted in to receive marketing information from Adobe Sign and its partners. Default value is UNKNOWN  
    * @instance
    */
    _this.getOptIn = function() {
      return _this.optIn;
    };

   /**
    * Whether or not the user has opted in to receive marketing information from Adobe Sign and its partners. Default value is UNKNOWN
    * @function setOptIn
    * @param optIn {module:model/users/String} Whether or not the user has opted in to receive marketing information from Adobe Sign and its partners. Default value is UNKNOWN
    * @instance
    */
    _this.setOptIn = function(optIn) {
      _this.optIn = optIn;
    };

   /**
    * The password of the new user
    * @function getPassword
    * @return  {module:model/users/String} The password of the new user  
    * @instance
    */
    _this.getPassword = function() {
      return _this.password;
    };

   /**
    * The password of the new user
    * @function setPassword
    * @param password {module:model/users/String} The password of the new user
    * @instance
    */
    _this.setPassword = function(password) {
      _this.password = password;
    };

   /**
    * The phone number of the new user
    * @function getPhone
    * @return  {module:model/users/String} The phone number of the new user  
    * @instance
    */
    _this.getPhone = function() {
      return _this.phone;
    };

   /**
    * The phone number of the new user
    * @function setPhone
    * @param phone {module:model/users/String} The phone number of the new user
    * @instance
    */
    _this.setPhone = function(phone) {
      _this.phone = phone;
    };

   /**
    * The current roles of the user
    * @function getRoles
    * @return  {module:model/users/Array} The current roles of the user  
    * @instance
    */
    _this.getRoles = function() {
      return _this.roles;
    };

   /**
    * The current roles of the user
    * @function setRoles
    * @param roles {module:model/users/Array} The current roles of the user
    * @instance
    */
    _this.setRoles = function(roles) {
      _this.roles = roles;
    };

   /**
    * The job title of the new user
    * @function getTitle
    * @return  {module:model/users/String} The job title of the new user  
    * @instance
    */
    _this.getTitle = function() {
      return _this.title;
    };

   /**
    * The job title of the new user
    * @function setTitle
    * @param title {module:model/users/String} The job title of the new user
    * @instance
    */
    _this.setTitle = function(title) {
      _this.title = title;
    };

  };

  /**
   * @private
   * Constructs a <code>UserCreationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/users/UserCreationInfo} obj Optional instance to populate.
   * @return {module:model/users/UserCreationInfo} The populated <code>UserCreationInfo</code> instance.
   */
  UserCreationInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserCreationInfo();

      if (data.hasOwnProperty('company')) {
        obj.setCompany(data.company);
      }
      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('firstName')) {
        obj.setFirstName(data.firstName);
      }
      if (data.hasOwnProperty('groupId')) {
        obj.setGroupId(data.groupId);
      }
      if (data.hasOwnProperty('lastName')) {
        obj.setLastName(data.lastName);
      }
      if (data.hasOwnProperty('optIn')) {
        obj.setOptIn(data.optIn);
      }
      if (data.hasOwnProperty('password')) {
        obj.setPassword(data.password);
      }
      if (data.hasOwnProperty('phone')) {
        obj.setPhone(data.phone);
      }
      if (data.hasOwnProperty('roles')) {
        obj.setRoles(data.roles);
      }
      if (data.hasOwnProperty('title')) {
        obj.setTitle(data.title);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>optIn</code> property.
   * @enum {String}
   * @readonly
   */
UserCreationInfo.OptInEnum = {
  
  
    /**
     * value: YES
     * @const
     */
    YES: "YES",
    
  
    /**
     * value: NO
     * @const
     */
    NO: "NO",
    
  
    /**
     * value: UNKNOWN
     * @const
     */
    UNKNOWN: "UNKNOWN"
  
  
  };

  /**
   * Allowed values for the <code>roles</code> property.
   * @enum {String}
   * @readonly
   */
UserCreationInfo.RolesEnum = {
  
  
    /**
     * value: ACCOUNT_ADMIN
     * @const
     */
    ACCOUNT_ADMIN: "ACCOUNT_ADMIN",
    
  
    /**
     * value: GROUP_ADMIN
     * @const
     */
    GROUP_ADMIN: "GROUP_ADMIN",
    
  
    /**
     * value: NORMAL_USER
     * @const
     */
    NORMAL_USER: "NORMAL_USER"
  
  
  };

  return UserCreationInfo;
}));


