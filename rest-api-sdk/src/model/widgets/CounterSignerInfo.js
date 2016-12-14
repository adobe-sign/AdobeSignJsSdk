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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/WidgetSignerSecurityOption'));

}(function(ApiClient, WidgetSignerSecurityOption) {
  'use strict';


  /**
   * @module model/widgets/CounterSignerInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>CounterSignerInfo</code>.
   * @alias module:model/widgets/CounterSignerInfo
   * @class
   */
  var CounterSignerInfo = function() {
    var _this = this;


    _this.email = undefined;

    _this.securityOptions = undefined;

   /**
    * Email of the recipient
    * @function getEmail
    * @return  {module:model/widgets/String} Email of the recipient  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * Email of the recipient
    * @function setEmail
    * @param email {module:model/widgets/String} Email of the recipient
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * Security options that apply to the counter signers
    * @function getSecurityOptions
    * @return  {module:model/widgets/Array} Security options that apply to the counter signers  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Security options that apply to the counter signers
    * @function setSecurityOptions
    * @param securityOptions {module:model/widgets/Array} Security options that apply to the counter signers
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

  };

  /**
   * @private
   * Constructs a <code>CounterSignerInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/CounterSignerInfo} obj Optional instance to populate.
   * @return {module:model/widgets/CounterSignerInfo} The populated <code>CounterSignerInfo</code> instance.
   */
  CounterSignerInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new CounterSignerInfo();

      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('securityOptions')) {
        obj.setSecurityOptions(ApiClient.convertToType(data.securityOptions,[WidgetSignerSecurityOption]));
      }
    }
    return obj;
  };


  return CounterSignerInfo;
}));


