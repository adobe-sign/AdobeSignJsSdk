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
   * @module model/users/UserStatusUpdateResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserStatusUpdateResponse</code>.
   * @alias module:model/users/UserStatusUpdateResponse
   * @class
   */
  var UserStatusUpdateResponse = function() {
    var _this = this;


    _this.code = undefined;

    _this.message = undefined;

    _this.userStatus = undefined;

   /**
    * The result of the attempt to activate or deactivate the user
    * @function getCode
    * @return  {module:model/users/String} The result of the attempt to activate or deactivate the user  
    * @instance
    */
    _this.getCode = function() {
      return _this.code;
    };

   /**
    * The result of the attempt to activate or deactivate the user
    * @function setCode
    * @param code {module:model/users/String} The result of the attempt to activate or deactivate the user
    * @instance
    */
    _this.setCode = function(code) {
      _this.code = code;
    };

   /**
    * String result message if there was no error
    * @function getMessage
    * @return  {module:model/users/String} String result message if there was no error  
    * @instance
    */
    _this.getMessage = function() {
      return _this.message;
    };

   /**
    * String result message if there was no error
    * @function setMessage
    * @param message {module:model/users/String} String result message if there was no error
    * @instance
    */
    _this.setMessage = function(message) {
      _this.message = message;
    };

   /**
    * A status value showing the result of this operation
    * @function getUserStatus
    * @return  {module:model/users/String} A status value showing the result of this operation  
    * @instance
    */
    _this.getUserStatus = function() {
      return _this.userStatus;
    };

   /**
    * A status value showing the result of this operation
    * @function setUserStatus
    * @param userStatus {module:model/users/String} A status value showing the result of this operation
    * @instance
    */
    _this.setUserStatus = function(userStatus) {
      _this.userStatus = userStatus;
    };

  };

  /**
   * @private
   * Constructs a <code>UserStatusUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/users/UserStatusUpdateResponse} obj Optional instance to populate.
   * @return {module:model/users/UserStatusUpdateResponse} The populated <code>UserStatusUpdateResponse</code> instance.
   */
  UserStatusUpdateResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserStatusUpdateResponse();

      if (data.hasOwnProperty('code')) {
        obj.setCode(data.code);
      }
      if (data.hasOwnProperty('message')) {
        obj.setMessage(data.message);
      }
      if (data.hasOwnProperty('userStatus')) {
        obj.setUserStatus(data.userStatus);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
UserStatusUpdateResponse.CodeEnum = {
  
  
    /**
     * value: ALREADY_ACTIVE
     * @const
     */
    ALREADY_ACTIVE: "ALREADY_ACTIVE",
    
  
    /**
     * value: ALREADY_INACTIVE
     * @const
     */
    ALREADY_INACTIVE: "ALREADY_INACTIVE",
    
  
    /**
     * value: OK
     * @const
     */
    OK: "OK",
    
  
    /**
     * value: RESET_PASSWORD_WORKFLOW_INITIATED
     * @const
     */
    RESET_PASSWORD_WORKFLOW_INITIATED: "RESET_PASSWORD_WORKFLOW_INITIATED",
    
  
    /**
     * value: SET_PASSWORD_WORKFLOW_INITIATED
     * @const
     */
    SET_PASSWORD_WORKFLOW_INITIATED: "SET_PASSWORD_WORKFLOW_INITIATED"
  
  
  };
  /**
   * Allowed values for the <code>userStatus</code> property.
   * @enum {String}
   * @readonly
   */
UserStatusUpdateResponse.UserStatusEnum = {
  
  
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

  return UserStatusUpdateResponse;
}));


