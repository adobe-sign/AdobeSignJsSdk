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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/RecipientInfo'), require('../../model/agreements/RecipientSecurityOption'));

}(function(ApiClient, RecipientInfo, RecipientSecurityOption) {
  'use strict';


  /**
   * @module model/agreements/RecipientSetInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>RecipientSetInfo</code>.
   * @alias module:model/agreements/RecipientSetInfo
   * @class
   */
  var RecipientSetInfo = function() {
    var _this = this;


    _this.privateMessage = undefined;

    _this.recipientSetMemberInfos = undefined;

    _this.recipientSetName = undefined;

    _this.recipientSetRole = undefined;

    _this.securityOptions = undefined;

    _this.signingOrder = undefined;

   /**
    * Private message for the recipients in the set
    * @function getPrivateMessage
    * @return  {module:model/agreements/String} Private message for the recipients in the set  
    * @instance
    */
    _this.getPrivateMessage = function() {
      return _this.privateMessage;
    };

   /**
    * Private message for the recipients in the set
    * @function setPrivateMessage
    * @param privateMessage {module:model/agreements/String} Private message for the recipients in the set
    * @instance
    */
    _this.setPrivateMessage = function(privateMessage) {
      _this.privateMessage = privateMessage;
    };

   /**
    * Information about the members of the recipient set
    * @function getRecipientSetMemberInfos
    * @return  {module:model/agreements/Array} Information about the members of the recipient set  
    * @instance
    */
    _this.getRecipientSetMemberInfos = function() {
      return _this.recipientSetMemberInfos;
    };

   /**
    * Information about the members of the recipient set
    * @function setRecipientSetMemberInfos
    * @param recipientSetMemberInfos {module:model/agreements/Array} Information about the members of the recipient set
    * @instance
    */
    _this.setRecipientSetMemberInfos = function(recipientSetMemberInfos) {
      _this.recipientSetMemberInfos = recipientSetMemberInfos;
    };

   /**
    * Specify the name of Recipient set. Maximum no of characters in recipient set name is restricted to 255.
    * @function getRecipientSetName
    * @return  {module:model/agreements/String} Specify the name of Recipient set. Maximum no of characters in recipient set name is restricted to 255.  
    * @instance
    */
    _this.getRecipientSetName = function() {
      return _this.recipientSetName;
    };

   /**
    * Specify the name of Recipient set. Maximum no of characters in recipient set name is restricted to 255.
    * @function setRecipientSetName
    * @param recipientSetName {module:model/agreements/String} Specify the name of Recipient set. Maximum no of characters in recipient set name is restricted to 255.
    * @instance
    */
    _this.setRecipientSetName = function(recipientSetName) {
      _this.recipientSetName = recipientSetName;
    };

   /**
    * Specify the role of recipient set
    * @function getRecipientSetRole
    * @return  {module:model/agreements/String} Specify the role of recipient set  
    * @instance
    */
    _this.getRecipientSetRole = function() {
      return _this.recipientSetRole;
    };

   /**
    * Specify the role of recipient set
    * @function setRecipientSetRole
    * @param recipientSetRole {module:model/agreements/String} Specify the role of recipient set
    * @instance
    */
    _this.setRecipientSetRole = function(recipientSetRole) {
      _this.recipientSetRole = recipientSetRole;
    };

   /**
    * Security options that apply to the recipient
    * @function getSecurityOptions
    * @return  {module:model/agreements/Array} Security options that apply to the recipient  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Security options that apply to the recipient
    * @function setSecurityOptions
    * @param securityOptions {module:model/agreements/Array} Security options that apply to the recipient
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * Index indicating sequential signing group (specify for hybrid routing)
    * @function getSigningOrder
    * @return  {module:model/agreements/Integer} Index indicating sequential signing group (specify for hybrid routing)  
    * @instance
    */
    _this.getSigningOrder = function() {
      return _this.signingOrder;
    };

   /**
    * Index indicating sequential signing group (specify for hybrid routing)
    * @function setSigningOrder
    * @param signingOrder {module:model/agreements/Integer} Index indicating sequential signing group (specify for hybrid routing)
    * @instance
    */
    _this.setSigningOrder = function(signingOrder) {
      _this.signingOrder = signingOrder;
    };

  };

  /**
   * @private
   * Constructs a <code>RecipientSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/RecipientSetInfo} obj Optional instance to populate.
   * @return {module:model/agreements/RecipientSetInfo} The populated <code>RecipientSetInfo</code> instance.
   */
  RecipientSetInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new RecipientSetInfo();

      if (data.hasOwnProperty('privateMessage')) {
        obj.setPrivateMessage(data.privateMessage);
      }
      if (data.hasOwnProperty('recipientSetMemberInfos')) {
        obj.setRecipientSetMemberInfos(ApiClient.convertToType(data.recipientSetMemberInfos,[RecipientInfo]));
      }
      if (data.hasOwnProperty('recipientSetName')) {
        obj.setRecipientSetName(data.recipientSetName);
      }
      if (data.hasOwnProperty('recipientSetRole')) {
        obj.setRecipientSetRole(data.recipientSetRole);
      }
      if (data.hasOwnProperty('securityOptions')) {
        obj.setSecurityOptions(ApiClient.convertToType(data.securityOptions,[RecipientSecurityOption]));
      }
      if (data.hasOwnProperty('signingOrder')) {
        obj.setSigningOrder(data.signingOrder);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>recipientSetRole</code> property.
   * @enum {String}
   * @readonly
   */
RecipientSetInfo.RecipientSetRoleEnum = {
  
  
    /**
     * value: SIGNER
     * @const
     */
    SIGNER: "SIGNER",
    
  
    /**
     * value: APPROVER
     * @const
     */
    APPROVER: "APPROVER",
    
  
    /**
     * value: DELEGATE_TO_SIGNER
     * @const
     */
    DELEGATE_TO_SIGNER: "DELEGATE_TO_SIGNER",
    
  
    /**
     * value: DELEGATE_TO_APPROVER
     * @const
     */
    DELEGATE_TO_APPROVER: "DELEGATE_TO_APPROVER"
  
  
  };

  return RecipientSetInfo;
}));


