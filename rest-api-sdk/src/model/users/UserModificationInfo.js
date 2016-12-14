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
   * @module model/users/UserModificationInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserModificationInfo</code>.
   * @alias module:model/users/UserModificationInfo
   * @class
   */
  var UserModificationInfo = function() {
    var _this = this;


    _this.company = undefined;

    _this.email = undefined;

    _this.firstName = undefined;

    _this.groupId = undefined;

    _this.lastName = undefined;

    _this.optIn = undefined;

    _this.phone = undefined;

    _this.roles = undefined;

    _this.title = undefined;

   /**
    * The new company name of the user. The server will reset to null if the value is not provided
    * @function getCompany
    * @return  {module:model/users/String} The new company name of the user. The server will reset to null if the value is not provided  
    * @instance
    */
    _this.getCompany = function() {
      return _this.company;
    };

   /**
    * The new company name of the user. The server will reset to null if the value is not provided
    * @function setCompany
    * @param company {module:model/users/String} The new company name of the user. The server will reset to null if the value is not provided
    * @instance
    */
    _this.setCompany = function(company) {
      _this.company = company;
    };

   /**
    * The new email address of the user
    * @function getEmail
    * @return  {module:model/users/String} The new email address of the user  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The new email address of the user
    * @function setEmail
    * @param email {module:model/users/String} The new email address of the user
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The new first name of the user
    * @function getFirstName
    * @return  {module:model/users/String} The new first name of the user  
    * @instance
    */
    _this.getFirstName = function() {
      return _this.firstName;
    };

   /**
    * The new first name of the user
    * @function setFirstName
    * @param firstName {module:model/users/String} The new first name of the user
    * @instance
    */
    _this.setFirstName = function(firstName) {
      _this.firstName = firstName;
    };

   /**
    * The new group in which the user should be added. It can be obtained through a call to the API which retrieves the list of users. The server will reset to default if the value is not provided
    * @function getGroupId
    * @return  {module:model/users/String} The new group in which the user should be added. It can be obtained through a call to the API which retrieves the list of users. The server will reset to default if the value is not provided  
    * @instance
    */
    _this.getGroupId = function() {
      return _this.groupId;
    };

   /**
    * The new group in which the user should be added. It can be obtained through a call to the API which retrieves the list of users. The server will reset to default if the value is not provided
    * @function setGroupId
    * @param groupId {module:model/users/String} The new group in which the user should be added. It can be obtained through a call to the API which retrieves the list of users. The server will reset to default if the value is not provided
    * @instance
    */
    _this.setGroupId = function(groupId) {
      _this.groupId = groupId;
    };

   /**
    * The new last name of the user
    * @function getLastName
    * @return  {module:model/users/String} The new last name of the user  
    * @instance
    */
    _this.getLastName = function() {
      return _this.lastName;
    };

   /**
    * The new last name of the user
    * @function setLastName
    * @param lastName {module:model/users/String} The new last name of the user
    * @instance
    */
    _this.setLastName = function(lastName) {
      _this.lastName = lastName;
    };

   /**
    * Whether or not the user has opted in to receive the marketing information from Adobe Sign and its partners. The server will reset to null if the value is not provided.
    * @function getOptIn
    * @return  {module:model/users/String} Whether or not the user has opted in to receive the marketing information from Adobe Sign and its partners. The server will reset to null if the value is not provided.  
    * @instance
    */
    _this.getOptIn = function() {
      return _this.optIn;
    };

   /**
    * Whether or not the user has opted in to receive the marketing information from Adobe Sign and its partners. The server will reset to null if the value is not provided.
    * @function setOptIn
    * @param optIn {module:model/users/String} Whether or not the user has opted in to receive the marketing information from Adobe Sign and its partners. The server will reset to null if the value is not provided.
    * @instance
    */
    _this.setOptIn = function(optIn) {
      _this.optIn = optIn;
    };

   /**
    * The new phone number of the user. The server will reset to null if the value is not provided
    * @function getPhone
    * @return  {module:model/users/String} The new phone number of the user. The server will reset to null if the value is not provided  
    * @instance
    */
    _this.getPhone = function() {
      return _this.phone;
    };

   /**
    * The new phone number of the user. The server will reset to null if the value is not provided
    * @function setPhone
    * @param phone {module:model/users/String} The new phone number of the user. The server will reset to null if the value is not provided
    * @instance
    */
    _this.setPhone = function(phone) {
      _this.phone = phone;
    };

   /**
    * The new roles of the user
    * @function getRoles
    * @return  {module:model/users/Array} The new roles of the user  
    * @instance
    */
    _this.getRoles = function() {
      return _this.roles;
    };

   /**
    * The new roles of the user
    * @function setRoles
    * @param roles {module:model/users/Array} The new roles of the user
    * @instance
    */
    _this.setRoles = function(roles) {
      _this.roles = roles;
    };

   /**
    * The new job title of the user. The server will reset to null if the value is not provided
    * @function getTitle
    * @return  {module:model/users/String} The new job title of the user. The server will reset to null if the value is not provided  
    * @instance
    */
    _this.getTitle = function() {
      return _this.title;
    };

   /**
    * The new job title of the user. The server will reset to null if the value is not provided
    * @function setTitle
    * @param title {module:model/users/String} The new job title of the user. The server will reset to null if the value is not provided
    * @instance
    */
    _this.setTitle = function(title) {
      _this.title = title;
    };

  };

  /**
   * @private
   * Constructs a <code>UserModificationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/users/UserModificationInfo} obj Optional instance to populate.
   * @return {module:model/users/UserModificationInfo} The populated <code>UserModificationInfo</code> instance.
   */
  UserModificationInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserModificationInfo();

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
UserModificationInfo.OptInEnum = {
  
  
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
UserModificationInfo.RolesEnum = {
  
  
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

  return UserModificationInfo;
}));


