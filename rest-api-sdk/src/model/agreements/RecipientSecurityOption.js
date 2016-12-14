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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/PhoneInfo'));

}(function(ApiClient, PhoneInfo) {
  'use strict';


  /**
   * @module model/agreements/RecipientSecurityOption
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>RecipientSecurityOption</code>.
   * @alias module:model/agreements/RecipientSecurityOption
   * @class
   */
  var RecipientSecurityOption = function() {
    var _this = this;


    _this.authenticationMethod = undefined;

    _this.password = undefined;

    _this.phoneInfos = undefined;

   /**
    * The authentication method for the recipients to have access to view and sign the document
    * @function getAuthenticationMethod
    * @return  {module:model/agreements/String} The authentication method for the recipients to have access to view and sign the document  
    * @instance
    */
    _this.getAuthenticationMethod = function() {
      return _this.authenticationMethod;
    };

   /**
    * The authentication method for the recipients to have access to view and sign the document
    * @function setAuthenticationMethod
    * @param authenticationMethod {module:model/agreements/String} The authentication method for the recipients to have access to view and sign the document
    * @instance
    */
    _this.setAuthenticationMethod = function(authenticationMethod) {
      _this.authenticationMethod = authenticationMethod;
    };

   /**
    * The password required for the recipient to view and sign the document
    * @function getPassword
    * @return  {module:model/agreements/String} The password required for the recipient to view and sign the document  
    * @instance
    */
    _this.getPassword = function() {
      return _this.password;
    };

   /**
    * The password required for the recipient to view and sign the document
    * @function setPassword
    * @param password {module:model/agreements/String} The password required for the recipient to view and sign the document
    * @instance
    */
    _this.setPassword = function(password) {
      _this.password = password;
    };

   /**
    * The phoneInfo required for the recipient to view and sign the document
    * @function getPhoneInfos
    * @return  {module:model/agreements/Array} The phoneInfo required for the recipient to view and sign the document  
    * @instance
    */
    _this.getPhoneInfos = function() {
      return _this.phoneInfos;
    };

   /**
    * The phoneInfo required for the recipient to view and sign the document
    * @function setPhoneInfos
    * @param phoneInfos {module:model/agreements/Array} The phoneInfo required for the recipient to view and sign the document
    * @instance
    */
    _this.setPhoneInfos = function(phoneInfos) {
      _this.phoneInfos = phoneInfos;
    };

  };

  /**
   * @private
   * Constructs a <code>RecipientSecurityOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/RecipientSecurityOption} obj Optional instance to populate.
   * @return {module:model/agreements/RecipientSecurityOption} The populated <code>RecipientSecurityOption</code> instance.
   */
  RecipientSecurityOption.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new RecipientSecurityOption();

      if (data.hasOwnProperty('authenticationMethod')) {
        obj.setAuthenticationMethod(data.authenticationMethod);
      }
      if (data.hasOwnProperty('password')) {
        obj.setPassword(data.password);
      }
      if (data.hasOwnProperty('phoneInfos')) {
        obj.setPhoneInfos(ApiClient.convertToType(data.phoneInfos,[PhoneInfo]));
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>authenticationMethod</code> property.
   * @enum {String}
   * @readonly
   */
RecipientSecurityOption.AuthenticationMethodEnum = {
  
  
    /**
     * value: NONE
     * @const
     */
    NONE: "NONE",
    
  
    /**
     * value: INHERITED_FROM_DOCUMENT
     * @const
     */
    INHERITED_FROM_DOCUMENT: "INHERITED_FROM_DOCUMENT",
    
  
    /**
     * value: PASSWORD
     * @const
     */
    PASSWORD: "PASSWORD",
    
  
    /**
     * value: WEB_IDENTITY
     * @const
     */
    WEB_IDENTITY: "WEB_IDENTITY",
    
  
    /**
     * value: KBA
     * @const
     */
    KBA: "KBA",
    
  
    /**
     * value: PHONE
     * @const
     */
    PHONE: "PHONE"
  
  
  };

  return RecipientSecurityOption;
}));


