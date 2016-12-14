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
   * @module model/widgets/WidgetSecurityOption
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetSecurityOption</code>.
   * @alias module:model/widgets/WidgetSecurityOption
   * @class
   */
  var WidgetSecurityOption = function() {
    var _this = this;


    _this.externalPassword = undefined;

    _this.internalPassword = undefined;

    _this.kbaProtection = undefined;

    _this.openPassword = undefined;

    _this.passwordProtection = undefined;

    _this.protectOpen = undefined;

    _this.webIdentityProtection = undefined;

   /**
    * The secondary password that will be used to protect signing the widget for external signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for external signers or all signers
    * @function getExternalPassword
    * @return  {module:model/widgets/String} The secondary password that will be used to protect signing the widget for external signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for external signers or all signers  
    * @instance
    */
    _this.getExternalPassword = function() {
      return _this.externalPassword;
    };

   /**
    * The secondary password that will be used to protect signing the widget for external signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for external signers or all signers
    * @function setExternalPassword
    * @param externalPassword {module:model/widgets/String} The secondary password that will be used to protect signing the widget for external signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for external signers or all signers
    * @instance
    */
    _this.setExternalPassword = function(externalPassword) {
      _this.externalPassword = externalPassword;
    };

   /**
    * The secondary password that will be used to protect signing the widget for internal signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for internal signers or all signers
    * @function getInternalPassword
    * @return  {module:model/widgets/String} The secondary password that will be used to protect signing the widget for internal signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for internal signers or all signers  
    * @instance
    */
    _this.getInternalPassword = function() {
      return _this.internalPassword;
    };

   /**
    * The secondary password that will be used to protect signing the widget for internal signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for internal signers or all signers
    * @function setInternalPassword
    * @param internalPassword {module:model/widgets/String} The secondary password that will be used to protect signing the widget for internal signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for internal signers or all signers
    * @instance
    */
    _this.setInternalPassword = function(internalPassword) {
      _this.internalPassword = internalPassword;
    };

   /**
    * Signers need to pass Knowledge Based Authentication before they gain access to view and sign the widget.
    * @function getKbaProtection
    * @return  {module:model/widgets/String} Signers need to pass Knowledge Based Authentication before they gain access to view and sign the widget.  
    * @instance
    */
    _this.getKbaProtection = function() {
      return _this.kbaProtection;
    };

   /**
    * Signers need to pass Knowledge Based Authentication before they gain access to view and sign the widget.
    * @function setKbaProtection
    * @param kbaProtection {module:model/widgets/String} Signers need to pass Knowledge Based Authentication before they gain access to view and sign the widget.
    * @instance
    */
    _this.setKbaProtection = function(kbaProtection) {
      _this.kbaProtection = kbaProtection;
    };

   /**
    * The secondary password that will be used to secure the PDF document. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is used only if protectOpen field is set to true
    * @function getOpenPassword
    * @return  {module:model/widgets/String} The secondary password that will be used to secure the PDF document. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is used only if protectOpen field is set to true  
    * @instance
    */
    _this.getOpenPassword = function() {
      return _this.openPassword;
    };

   /**
    * The secondary password that will be used to secure the PDF document. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is used only if protectOpen field is set to true
    * @function setOpenPassword
    * @param openPassword {module:model/widgets/String} The secondary password that will be used to secure the PDF document. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is used only if protectOpen field is set to true
    * @instance
    */
    _this.setOpenPassword = function(openPassword) {
      _this.openPassword = openPassword;
    };

   /**
    * Specifies if signers are required to enter a password to have access to sign the widget.
    * @function getPasswordProtection
    * @return  {module:model/widgets/String} Specifies if signers are required to enter a password to have access to sign the widget.  
    * @instance
    */
    _this.getPasswordProtection = function() {
      return _this.passwordProtection;
    };

   /**
    * Specifies if signers are required to enter a password to have access to sign the widget.
    * @function setPasswordProtection
    * @param passwordProtection {module:model/widgets/String} Specifies if signers are required to enter a password to have access to sign the widget.
    * @instance
    */
    _this.setPasswordProtection = function(passwordProtection) {
      _this.passwordProtection = passwordProtection;
    };

   /**
    * If set to true, the document is always be encrypted with this password every time it is sent by email. Recipients need to provide the password to be able to view the PDF files
    * @function getProtectOpen
    * @return  {module:model/widgets/Boolean} If set to true, the document is always be encrypted with this password every time it is sent by email. Recipients need to provide the password to be able to view the PDF files  
    * @instance
    */
    _this.getProtectOpen = function() {
      return _this.protectOpen;
    };

   /**
    * If set to true, the document is always be encrypted with this password every time it is sent by email. Recipients need to provide the password to be able to view the PDF files
    * @function setProtectOpen
    * @param protectOpen {module:model/widgets/Boolean} If set to true, the document is always be encrypted with this password every time it is sent by email. Recipients need to provide the password to be able to view the PDF files
    * @instance
    */
    _this.setProtectOpen = function(protectOpen) {
      _this.protectOpen = protectOpen;
    };

   /**
    * Specifies if signers are required to provide their web identity, before they gain access to view and sign the widget.
    * @function getWebIdentityProtection
    * @return  {module:model/widgets/String} Specifies if signers are required to provide their web identity, before they gain access to view and sign the widget.  
    * @instance
    */
    _this.getWebIdentityProtection = function() {
      return _this.webIdentityProtection;
    };

   /**
    * Specifies if signers are required to provide their web identity, before they gain access to view and sign the widget.
    * @function setWebIdentityProtection
    * @param webIdentityProtection {module:model/widgets/String} Specifies if signers are required to provide their web identity, before they gain access to view and sign the widget.
    * @instance
    */
    _this.setWebIdentityProtection = function(webIdentityProtection) {
      _this.webIdentityProtection = webIdentityProtection;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetSecurityOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetSecurityOption} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetSecurityOption} The populated <code>WidgetSecurityOption</code> instance.
   */
  WidgetSecurityOption.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetSecurityOption();

      if (data.hasOwnProperty('externalPassword')) {
        obj.setExternalPassword(data.externalPassword);
      }
      if (data.hasOwnProperty('internalPassword')) {
        obj.setInternalPassword(data.internalPassword);
      }
      if (data.hasOwnProperty('kbaProtection')) {
        obj.setKbaProtection(data.kbaProtection);
      }
      if (data.hasOwnProperty('openPassword')) {
        obj.setOpenPassword(data.openPassword);
      }
      if (data.hasOwnProperty('passwordProtection')) {
        obj.setPasswordProtection(data.passwordProtection);
      }
      if (data.hasOwnProperty('protectOpen')) {
        obj.setProtectOpen(data.protectOpen);
      }
      if (data.hasOwnProperty('webIdentityProtection')) {
        obj.setWebIdentityProtection(data.webIdentityProtection);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>kbaProtection</code> property.
   * @enum {String}
   * @readonly
   */
WidgetSecurityOption.KbaProtectionEnum = {
  
  
    /**
     * value: NONE
     * @const
     */
    NONE: "NONE",
    
  
    /**
     * value: EXTERNAL_USERS
     * @const
     */
    EXTERNAL_USERS: "EXTERNAL_USERS",
    
  
    /**
     * value: INTERNAL_USERS
     * @const
     */
    INTERNAL_USERS: "INTERNAL_USERS",
    
  
    /**
     * value: ALL_USERS
     * @const
     */
    ALL_USERS: "ALL_USERS"
  
  
  };
  /**
   * Allowed values for the <code>passwordProtection</code> property.
   * @enum {String}
   * @readonly
   */
WidgetSecurityOption.PasswordProtectionEnum = {
  
  
    /**
     * value: NONE
     * @const
     */
    NONE: "NONE",
    
  
    /**
     * value: EXTERNAL_USERS
     * @const
     */
    EXTERNAL_USERS: "EXTERNAL_USERS",
    
  
    /**
     * value: INTERNAL_USERS
     * @const
     */
    INTERNAL_USERS: "INTERNAL_USERS",
    
  
    /**
     * value: ALL_USERS
     * @const
     */
    ALL_USERS: "ALL_USERS"
  
  
  };
  /**
   * Allowed values for the <code>webIdentityProtection</code> property.
   * @enum {String}
   * @readonly
   */
WidgetSecurityOption.WebIdentityProtectionEnum = {
  
  
    /**
     * value: NONE
     * @const
     */
    NONE: "NONE",
    
  
    /**
     * value: EXTERNAL_USERS
     * @const
     */
    EXTERNAL_USERS: "EXTERNAL_USERS",
    
  
    /**
     * value: INTERNAL_USERS
     * @const
     */
    INTERNAL_USERS: "INTERNAL_USERS",
    
  
    /**
     * value: ALL_USERS
     * @const
     */
    ALL_USERS: "ALL_USERS"
  
  
  };

  return WidgetSecurityOption;
}));


