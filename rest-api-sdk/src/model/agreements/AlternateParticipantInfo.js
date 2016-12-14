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
   * @module model/agreements/AlternateParticipantInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>AlternateParticipantInfo</code>.
   * @alias module:model/agreements/AlternateParticipantInfo
   * @class
   */
  var AlternateParticipantInfo = function() {
    var _this = this;


    _this.countryCode = undefined;

    _this.email = undefined;

    _this.phone = undefined;

    _this.privateMessage = undefined;

   /**
    * The country code for the alternate participant
    * @function getCountryCode
    * @return  {module:model/agreements/String} The country code for the alternate participant  
    * @instance
    */
    _this.getCountryCode = function() {
      return _this.countryCode;
    };

   /**
    * The country code for the alternate participant
    * @function setCountryCode
    * @param countryCode {module:model/agreements/String} The country code for the alternate participant
    * @instance
    */
    _this.setCountryCode = function(countryCode) {
      _this.countryCode = countryCode;
    };

   /**
    * The email of the alternate participant. This is required if fax is not provided. Both fax and email can not be provided
    * @function getEmail
    * @return  {module:model/agreements/String} The email of the alternate participant. This is required if fax is not provided. Both fax and email can not be provided  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email of the alternate participant. This is required if fax is not provided. Both fax and email can not be provided
    * @function setEmail
    * @param email {module:model/agreements/String} The email of the alternate participant. This is required if fax is not provided. Both fax and email can not be provided
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The phone number for the alternate participant
    * @function getPhone
    * @return  {module:model/agreements/String} The phone number for the alternate participant  
    * @instance
    */
    _this.getPhone = function() {
      return _this.phone;
    };

   /**
    * The phone number for the alternate participant
    * @function setPhone
    * @param phone {module:model/agreements/String} The phone number for the alternate participant
    * @instance
    */
    _this.setPhone = function(phone) {
      _this.phone = phone;
    };

   /**
    * The private message for the alternate participant
    * @function getPrivateMessage
    * @return  {module:model/agreements/String} The private message for the alternate participant  
    * @instance
    */
    _this.getPrivateMessage = function() {
      return _this.privateMessage;
    };

   /**
    * The private message for the alternate participant
    * @function setPrivateMessage
    * @param privateMessage {module:model/agreements/String} The private message for the alternate participant
    * @instance
    */
    _this.setPrivateMessage = function(privateMessage) {
      _this.privateMessage = privateMessage;
    };

  };

  /**
   * @private
   * Constructs a <code>AlternateParticipantInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/AlternateParticipantInfo} obj Optional instance to populate.
   * @return {module:model/agreements/AlternateParticipantInfo} The populated <code>AlternateParticipantInfo</code> instance.
   */
  AlternateParticipantInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AlternateParticipantInfo();

      if (data.hasOwnProperty('countryCode')) {
        obj.setCountryCode(data.countryCode);
      }
      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('phone')) {
        obj.setPhone(data.phone);
      }
      if (data.hasOwnProperty('privateMessage')) {
        obj.setPrivateMessage(data.privateMessage);
      }
    }
    return obj;
  };


  return AlternateParticipantInfo;
}));


