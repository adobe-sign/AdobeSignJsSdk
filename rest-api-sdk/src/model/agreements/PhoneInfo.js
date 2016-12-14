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
   * @module model/agreements/PhoneInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>PhoneInfo</code>.
   * @alias module:model/agreements/PhoneInfo
   * @class
   */
  var PhoneInfo = function() {
    var _this = this;


    _this.countryCode = undefined;

    _this.phone = undefined;

   /**
    * The phoneInfo country code required for the recipient to view and sign the document if authentication type is PHONE
    * @function getCountryCode
    * @return  {module:model/agreements/String} The phoneInfo country code required for the recipient to view and sign the document if authentication type is PHONE  
    * @instance
    */
    _this.getCountryCode = function() {
      return _this.countryCode;
    };

   /**
    * The phoneInfo country code required for the recipient to view and sign the document if authentication type is PHONE
    * @function setCountryCode
    * @param countryCode {module:model/agreements/String} The phoneInfo country code required for the recipient to view and sign the document if authentication type is PHONE
    * @instance
    */
    _this.setCountryCode = function(countryCode) {
      _this.countryCode = countryCode;
    };

   /**
    * The phone number required for the recipient to view and sign the document if authentication type is PHONE
    * @function getPhone
    * @return  {module:model/agreements/String} The phone number required for the recipient to view and sign the document if authentication type is PHONE  
    * @instance
    */
    _this.getPhone = function() {
      return _this.phone;
    };

   /**
    * The phone number required for the recipient to view and sign the document if authentication type is PHONE
    * @function setPhone
    * @param phone {module:model/agreements/String} The phone number required for the recipient to view and sign the document if authentication type is PHONE
    * @instance
    */
    _this.setPhone = function(phone) {
      _this.phone = phone;
    };

  };

  /**
   * @private
   * Constructs a <code>PhoneInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/PhoneInfo} obj Optional instance to populate.
   * @return {module:model/agreements/PhoneInfo} The populated <code>PhoneInfo</code> instance.
   */
  PhoneInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new PhoneInfo();

      if (data.hasOwnProperty('countryCode')) {
        obj.setCountryCode(data.countryCode);
      }
      if (data.hasOwnProperty('phone')) {
        obj.setPhone(data.phone);
      }
    }
    return obj;
  };


  return PhoneInfo;
}));


