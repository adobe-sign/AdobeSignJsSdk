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
   * @module model/users/UserDetailsInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserDetailsInfo</code>.
   * @alias module:model/users/UserDetailsInfo
   * @class
   */
  var UserDetailsInfo = function() {
    var _this = this;


    _this.account = undefined;

    _this.accountType = undefined;

    _this.capabilityFlags = undefined;

    _this.channel = undefined;

    _this.company = undefined;

    _this.email = undefined;

    _this.firstName = undefined;

    _this.group = undefined;

    _this.groupId = undefined;

    _this.initials = undefined;

    _this.lastName = undefined;

    _this.locale = undefined;

    _this.optIn = undefined;

    _this.passwordExpiration = undefined;

    _this.phone = undefined;

    _this.roles = undefined;

    _this.title = undefined;

    _this.userStatus = undefined;

   /**
    * Nickname of the account to which the user belongs
    * @function getAccount
    * @return  {module:model/users/String} Nickname of the account to which the user belongs  
    * @instance
    */
    _this.getAccount = function() {
      return _this.account;
    };

   /**
    * Nickname of the account to which the user belongs
    * @function setAccount
    * @param account {module:model/users/String} Nickname of the account to which the user belongs
    * @instance
    */
    _this.setAccount = function(account) {
      _this.account = account;
    };

   /**
    * Type of account to which the user belongs (null if no account)
    * @function getAccountType
    * @return  {module:model/users/String} Type of account to which the user belongs (null if no account)  
    * @instance
    */
    _this.getAccountType = function() {
      return _this.accountType;
    };

   /**
    * Type of account to which the user belongs (null if no account)
    * @function setAccountType
    * @param accountType {module:model/users/String} Type of account to which the user belongs (null if no account)
    * @instance
    */
    _this.setAccountType = function(accountType) {
      _this.accountType = accountType;
    };

   /**
    * A set of capabilities applicable to the user
    * @function getCapabilityFlags
    * @return  {module:model/users/Array} A set of capabilities applicable to the user  
    * @instance
    */
    _this.getCapabilityFlags = function() {
      return _this.capabilityFlags;
    };

   /**
    * A set of capabilities applicable to the user
    * @function setCapabilityFlags
    * @param capabilityFlags {module:model/users/Array} A set of capabilities applicable to the user
    * @instance
    */
    _this.setCapabilityFlags = function(capabilityFlags) {
      _this.capabilityFlags = capabilityFlags;
    };

   /**
    * Name of the channel to which the user belongs
    * @function getChannel
    * @return  {module:model/users/String} Name of the channel to which the user belongs  
    * @instance
    */
    _this.getChannel = function() {
      return _this.channel;
    };

   /**
    * Name of the channel to which the user belongs
    * @function setChannel
    * @param channel {module:model/users/String} Name of the channel to which the user belongs
    * @instance
    */
    _this.setChannel = function(channel) {
      _this.channel = channel;
    };

   /**
    * The name of company of the user
    * @function getCompany
    * @return  {module:model/users/String} The name of company of the user  
    * @instance
    */
    _this.getCompany = function() {
      return _this.company;
    };

   /**
    * The name of company of the user
    * @function setCompany
    * @param company {module:model/users/String} The name of company of the user
    * @instance
    */
    _this.setCompany = function(company) {
      _this.company = company;
    };

   /**
    * The email address of the user
    * @function getEmail
    * @return  {module:model/users/String} The email address of the user  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email address of the user
    * @function setEmail
    * @param email {module:model/users/String} The email address of the user
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The first name of the user
    * @function getFirstName
    * @return  {module:model/users/String} The first name of the user  
    * @instance
    */
    _this.getFirstName = function() {
      return _this.firstName;
    };

   /**
    * The first name of the user
    * @function setFirstName
    * @param firstName {module:model/users/String} The first name of the user
    * @instance
    */
    _this.setFirstName = function(firstName) {
      _this.firstName = firstName;
    };

   /**
    * Name of the group to which the user belongs
    * @function getGroup
    * @return  {module:model/users/String} Name of the group to which the user belongs  
    * @instance
    */
    _this.getGroup = function() {
      return _this.group;
    };

   /**
    * Name of the group to which the user belongs
    * @function setGroup
    * @param group {module:model/users/String} Name of the group to which the user belongs
    * @instance
    */
    _this.setGroup = function(group) {
      _this.group = group;
    };

   /**
    * The identifier that can be used in group management methods
    * @function getGroupId
    * @return  {module:model/users/String} The identifier that can be used in group management methods  
    * @instance
    */
    _this.getGroupId = function() {
      return _this.groupId;
    };

   /**
    * The identifier that can be used in group management methods
    * @function setGroupId
    * @param groupId {module:model/users/String} The identifier that can be used in group management methods
    * @instance
    */
    _this.setGroupId = function(groupId) {
      _this.groupId = groupId;
    };

   /**
    * The initials of the user
    * @function getInitials
    * @return  {module:model/users/String} The initials of the user  
    * @instance
    */
    _this.getInitials = function() {
      return _this.initials;
    };

   /**
    * The initials of the user
    * @function setInitials
    * @param initials {module:model/users/String} The initials of the user
    * @instance
    */
    _this.setInitials = function(initials) {
      _this.initials = initials;
    };

   /**
    * The last name of the user
    * @function getLastName
    * @return  {module:model/users/String} The last name of the user  
    * @instance
    */
    _this.getLastName = function() {
      return _this.lastName;
    };

   /**
    * The last name of the user
    * @function setLastName
    * @param lastName {module:model/users/String} The last name of the user
    * @instance
    */
    _this.setLastName = function(lastName) {
      _this.lastName = lastName;
    };

   /**
    * The UI locale of the user
    * @function getLocale
    * @return  {module:model/users/String} The UI locale of the user  
    * @instance
    */
    _this.getLocale = function() {
      return _this.locale;
    };

   /**
    * The UI locale of the user
    * @function setLocale
    * @param locale {module:model/users/String} The UI locale of the user
    * @instance
    */
    _this.setLocale = function(locale) {
      _this.locale = locale;
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
    * The date of password expiration
    * @function getPasswordExpiration
    * @return  {module:model/users/Date} The date of password expiration  
    * @instance
    */
    _this.getPasswordExpiration = function() {
      return _this.passwordExpiration;
    };

   /**
    * The date of password expiration
    * @function setPasswordExpiration
    * @param passwordExpiration {module:model/users/Date} The date of password expiration
    * @instance
    */
    _this.setPasswordExpiration = function(passwordExpiration) {
      _this.passwordExpiration = passwordExpiration;
    };

   /**
    * The phone number of the user
    * @function getPhone
    * @return  {module:model/users/String} The phone number of the user  
    * @instance
    */
    _this.getPhone = function() {
      return _this.phone;
    };

   /**
    * The phone number of the user
    * @function setPhone
    * @param phone {module:model/users/String} The phone number of the user
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
    * The job title of the user
    * @function getTitle
    * @return  {module:model/users/String} The job title of the user  
    * @instance
    */
    _this.getTitle = function() {
      return _this.title;
    };

   /**
    * The job title of the user
    * @function setTitle
    * @param title {module:model/users/String} The job title of the user
    * @instance
    */
    _this.setTitle = function(title) {
      _this.title = title;
    };

   /**
    * Status of the user
    * @function getUserStatus
    * @return  {module:model/users/String} Status of the user  
    * @instance
    */
    _this.getUserStatus = function() {
      return _this.userStatus;
    };

   /**
    * Status of the user
    * @function setUserStatus
    * @param userStatus {module:model/users/String} Status of the user
    * @instance
    */
    _this.setUserStatus = function(userStatus) {
      _this.userStatus = userStatus;
    };

  };

  /**
   * @private
   * Constructs a <code>UserDetailsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/users/UserDetailsInfo} obj Optional instance to populate.
   * @return {module:model/users/UserDetailsInfo} The populated <code>UserDetailsInfo</code> instance.
   */
  UserDetailsInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserDetailsInfo();

      if (data.hasOwnProperty('account')) {
        obj.setAccount(data.account);
      }
      if (data.hasOwnProperty('accountType')) {
        obj.setAccountType(data.accountType);
      }
      if (data.hasOwnProperty('capabilityFlags')) {
        obj.setCapabilityFlags(data.capabilityFlags);
      }
      if (data.hasOwnProperty('channel')) {
        obj.setChannel(data.channel);
      }
      if (data.hasOwnProperty('company')) {
        obj.setCompany(data.company);
      }
      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('firstName')) {
        obj.setFirstName(data.firstName);
      }
      if (data.hasOwnProperty('group')) {
        obj.setGroup(data.group);
      }
      if (data.hasOwnProperty('groupId')) {
        obj.setGroupId(data.groupId);
      }
      if (data.hasOwnProperty('initials')) {
        obj.setInitials(data.initials);
      }
      if (data.hasOwnProperty('lastName')) {
        obj.setLastName(data.lastName);
      }
      if (data.hasOwnProperty('locale')) {
        obj.setLocale(data.locale);
      }
      if (data.hasOwnProperty('optIn')) {
        obj.setOptIn(data.optIn);
      }
      if (data.hasOwnProperty('passwordExpiration')) {
        obj.setPasswordExpiration(data.passwordExpiration);
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
      if (data.hasOwnProperty('userStatus')) {
        obj.setUserStatus(data.userStatus);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>accountType</code> property.
   * @enum {String}
   * @readonly
   */
UserDetailsInfo.AccountTypeEnum = {
  
  
    /**
     * value: FREE
     * @const
     */
    FREE: "FREE",
    
  
    /**
     * value: PRO
     * @const
     */
    PRO: "PRO",
    
  
    /**
     * value: TEAM
     * @const
     */
    TEAM: "TEAM",
    
  
    /**
     * value: TEAM_TRIAL
     * @const
     */
    TEAM_TRIAL: "TEAM_TRIAL",
    
  
    /**
     * value: ENTERPRISE
     * @const
     */
    ENTERPRISE: "ENTERPRISE",
    
  
    /**
     * value: ENTERPRISE_TRIAL
     * @const
     */
    ENTERPRISE_TRIAL: "ENTERPRISE_TRIAL",
    
  
    /**
     * value: GLOBAL
     * @const
     */
    GLOBAL: "GLOBAL",
    
  
    /**
     * value: GLOBAL_TRIAL
     * @const
     */
    GLOBAL_TRIAL: "GLOBAL_TRIAL"
  
  
  };

  /**
   * Allowed values for the <code>capabilityFlags</code> property.
   * @enum {String}
   * @readonly
   */
UserDetailsInfo.CapabilityFlagsEnum = {
  
  
    /**
     * value: CAN_SEND
     * @const
     */
    CAN_SEND: "CAN_SEND",
    
  
    /**
     * value: CAN_SIGN
     * @const
     */
    CAN_SIGN: "CAN_SIGN",
    
  
    /**
     * value: CAN_REPLACE_SIGNER
     * @const
     */
    CAN_REPLACE_SIGNER: "CAN_REPLACE_SIGNER",
    
  
    /**
     * value: VAULT_ENABLED
     * @const
     */
    VAULT_ENABLED: "VAULT_ENABLED",
    
  
    /**
     * value: VAULT_PER_AGREEMENT
     * @const
     */
    VAULT_PER_AGREEMENT: "VAULT_PER_AGREEMENT",
    
  
    /**
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };
  /**
   * Allowed values for the <code>optIn</code> property.
   * @enum {String}
   * @readonly
   */
UserDetailsInfo.OptInEnum = {
  
  
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
UserDetailsInfo.RolesEnum = {
  
  
    /**
     * value: API
     * @const
     */
    API: "API",
    
  
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
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };
  /**
   * Allowed values for the <code>userStatus</code> property.
   * @enum {String}
   * @readonly
   */
UserDetailsInfo.UserStatusEnum = {
  
  
    /**
     * value: ACTIVE
     * @const
     */
    ACTIVE: "ACTIVE",
    
  
    /**
     * value: INACTIVE
     * @const
     */
    INACTIVE: "INACTIVE",
    
  
    /**
     * value: CREATED
     * @const
     */
    CREATED: "CREATED",
    
  
    /**
     * value: PENDING
     * @const
     */
    PENDING: "PENDING",
    
  
    /**
     * value: UNVERIFIED
     * @const
     */
    UNVERIFIED: "UNVERIFIED"
  
  
  };

  return UserDetailsInfo;
}));


