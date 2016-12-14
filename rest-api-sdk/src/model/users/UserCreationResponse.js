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
   * @module model/users/UserCreationResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserCreationResponse</code>.
   * @alias module:model/users/UserCreationResponse
   * @class
   */
  var UserCreationResponse = function() {
    var _this = this;


    _this.userId = undefined;

    _this.userStatus = undefined;

   /**
    * The unique identifier for user in REST APIs. This identifier will not be compatible with any existing SOAP APIs and is different from user key that SOAP APIs provide and consume. userid being provided here and userkey that SOAP uses are different and the two can not be interchanged with each other
    * @function getUserId
    * @return  {module:model/users/String} The unique identifier for user in REST APIs. This identifier will not be compatible with any existing SOAP APIs and is different from user key that SOAP APIs provide and consume. userid being provided here and userkey that SOAP uses are different and the two can not be interchanged with each other  
    * @instance
    */
    _this.getUserId = function() {
      return _this.userId;
    };

   /**
    * The unique identifier for user in REST APIs. This identifier will not be compatible with any existing SOAP APIs and is different from user key that SOAP APIs provide and consume. userid being provided here and userkey that SOAP uses are different and the two can not be interchanged with each other
    * @function setUserId
    * @param userId {module:model/users/String} The unique identifier for user in REST APIs. This identifier will not be compatible with any existing SOAP APIs and is different from user key that SOAP APIs provide and consume. userid being provided here and userkey that SOAP uses are different and the two can not be interchanged with each other
    * @instance
    */
    _this.setUserId = function(userId) {
      _this.userId = userId;
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
   * Constructs a <code>UserCreationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/users/UserCreationResponse} obj Optional instance to populate.
   * @return {module:model/users/UserCreationResponse} The populated <code>UserCreationResponse</code> instance.
   */
  UserCreationResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserCreationResponse();

      if (data.hasOwnProperty('userId')) {
        obj.setUserId(data.userId);
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
UserCreationResponse.UserStatusEnum = {
  
  
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

  return UserCreationResponse;
}));


