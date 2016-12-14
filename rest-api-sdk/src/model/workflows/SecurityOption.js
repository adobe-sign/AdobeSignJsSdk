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
   * @module model/workflows/SecurityOption
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>SecurityOption</code>.
   * @alias module:model/workflows/SecurityOption
   * @class
   */
  var SecurityOption = function() {
    var _this = this;


    _this.externalPassword = undefined;

    _this.internalPassword = undefined;

    _this.openPassword = undefined;

    _this.protectOpen = undefined;

   /**
    * The secondary password that will be used to protect signing the document for external signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for external signers or all signers
    * @function getExternalPassword
    * @return  {module:model/workflows/String} The secondary password that will be used to protect signing the document for external signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for external signers or all signers  
    * @instance
    */
    _this.getExternalPassword = function() {
      return _this.externalPassword;
    };

   /**
    * The secondary password that will be used to protect signing the document for external signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for external signers or all signers
    * @function setExternalPassword
    * @param externalPassword {module:model/workflows/String} The secondary password that will be used to protect signing the document for external signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for external signers or all signers
    * @instance
    */
    _this.setExternalPassword = function(externalPassword) {
      _this.externalPassword = externalPassword;
    };

   /**
    * The secondary password that will be used to protect signing the document for internal signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for internal signers or all signers
    * @function getInternalPassword
    * @return  {module:model/workflows/String} The secondary password that will be used to protect signing the document for internal signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for internal signers or all signers  
    * @instance
    */
    _this.getInternalPassword = function() {
      return _this.internalPassword;
    };

   /**
    * The secondary password that will be used to protect signing the document for internal signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for internal signers or all signers
    * @function setInternalPassword
    * @param internalPassword {module:model/workflows/String} The secondary password that will be used to protect signing the document for internal signers. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is applied only if password protection is specified for internal signers or all signers
    * @instance
    */
    _this.setInternalPassword = function(internalPassword) {
      _this.internalPassword = internalPassword;
    };

   /**
    * The secondary password that will be used to secure the PDF document. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is used only if protectOpen field is set to true
    * @function getOpenPassword
    * @return  {module:model/workflows/String} The secondary password that will be used to secure the PDF document. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is used only if protectOpen field is set to true  
    * @instance
    */
    _this.getOpenPassword = function() {
      return _this.openPassword;
    };

   /**
    * The secondary password that will be used to secure the PDF document. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is used only if protectOpen field is set to true
    * @function setOpenPassword
    * @param openPassword {module:model/workflows/String} The secondary password that will be used to secure the PDF document. Note that Adobe Sign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. This password is used only if protectOpen field is set to true
    * @instance
    */
    _this.setOpenPassword = function(openPassword) {
      _this.openPassword = openPassword;
    };

   /**
    * If set to true, the document is always be encrypted with this password every time it is sent by email. Recipients need to provide the password to be able to view the PDF files
    * @function getProtectOpen
    * @return  {module:model/workflows/Boolean} If set to true, the document is always be encrypted with this password every time it is sent by email. Recipients need to provide the password to be able to view the PDF files  
    * @instance
    */
    _this.getProtectOpen = function() {
      return _this.protectOpen;
    };

   /**
    * If set to true, the document is always be encrypted with this password every time it is sent by email. Recipients need to provide the password to be able to view the PDF files
    * @function setProtectOpen
    * @param protectOpen {module:model/workflows/Boolean} If set to true, the document is always be encrypted with this password every time it is sent by email. Recipients need to provide the password to be able to view the PDF files
    * @instance
    */
    _this.setProtectOpen = function(protectOpen) {
      _this.protectOpen = protectOpen;
    };

  };

  /**
   * @private
   * Constructs a <code>SecurityOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/SecurityOption} obj Optional instance to populate.
   * @return {module:model/workflows/SecurityOption} The populated <code>SecurityOption</code> instance.
   */
  SecurityOption.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new SecurityOption();

      if (data.hasOwnProperty('externalPassword')) {
        obj.setExternalPassword(data.externalPassword);
      }
      if (data.hasOwnProperty('internalPassword')) {
        obj.setInternalPassword(data.internalPassword);
      }
      if (data.hasOwnProperty('openPassword')) {
        obj.setOpenPassword(data.openPassword);
      }
      if (data.hasOwnProperty('protectOpen')) {
        obj.setProtectOpen(data.protectOpen);
      }
    }
    return obj;
  };


  return SecurityOption;
}));


