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
   * @module model/workflows/RecipientsListInfoDescription
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>RecipientsListInfoDescription</code>.
   * @alias module:model/workflows/RecipientsListInfoDescription
   * @class
   */
  var RecipientsListInfoDescription = function() {
    var _this = this;


    _this.allowfax = undefined;

    _this.allowSender = undefined;

    _this.authenticationMethod = undefined;

    _this.defaultValue = undefined;

    _this.editable = undefined;

    _this.label = undefined;

    _this.maxListCount = undefined;

    _this.minListCount = undefined;

    _this.name = undefined;

    _this.visible = undefined;

   /**
    * whether fax is allowed or not
    * @function getAllowfax
    * @return  {module:model/workflows/Boolean} whether fax is allowed or not  
    * @instance
    */
    _this.getAllowfax = function() {
      return _this.allowfax;
    };

   /**
    * whether fax is allowed or not
    * @function setAllowfax
    * @param allowfax {module:model/workflows/Boolean} whether fax is allowed or not
    * @instance
    */
    _this.setAllowfax = function(allowfax) {
      _this.allowfax = allowfax;
    };

   /**
    * whether sender is allowed as a recipient
    * @function getAllowSender
    * @return  {module:model/workflows/Boolean} whether sender is allowed as a recipient  
    * @instance
    */
    _this.getAllowSender = function() {
      return _this.allowSender;
    };

   /**
    * whether sender is allowed as a recipient
    * @function setAllowSender
    * @param allowSender {module:model/workflows/Boolean} whether sender is allowed as a recipient
    * @instance
    */
    _this.setAllowSender = function(allowSender) {
      _this.allowSender = allowSender;
    };

   /**
    * authentication method for the current recipient list to have access to view and sign the document
    * @function getAuthenticationMethod
    * @return  {module:model/workflows/String} authentication method for the current recipient list to have access to view and sign the document  
    * @instance
    */
    _this.getAuthenticationMethod = function() {
      return _this.authenticationMethod;
    };

   /**
    * authentication method for the current recipient list to have access to view and sign the document
    * @function setAuthenticationMethod
    * @param authenticationMethod {module:model/workflows/String} authentication method for the current recipient list to have access to view and sign the document
    * @instance
    */
    _this.setAuthenticationMethod = function(authenticationMethod) {
      _this.authenticationMethod = authenticationMethod;
    };

   /**
    * A default email or fax number
    * @function getDefaultValue
    * @return  {module:model/workflows/String} A default email or fax number  
    * @instance
    */
    _this.getDefaultValue = function() {
      return _this.defaultValue;
    };

   /**
    * A default email or fax number
    * @function setDefaultValue
    * @param defaultValue {module:model/workflows/String} A default email or fax number
    * @instance
    */
    _this.setDefaultValue = function(defaultValue) {
      _this.defaultValue = defaultValue;
    };

   /**
    * Whether current field can be edited. If editable attribute for this field is false then this field should not be provided in the agreement creation request and default value of this field will be used in agreement creation
    * @function getEditable
    * @return  {module:model/workflows/Boolean} Whether current field can be edited. If editable attribute for this field is false then this field should not be provided in the agreement creation request and default value of this field will be used in agreement creation  
    * @instance
    */
    _this.getEditable = function() {
      return _this.editable;
    };

   /**
    * Whether current field can be edited. If editable attribute for this field is false then this field should not be provided in the agreement creation request and default value of this field will be used in agreement creation
    * @function setEditable
    * @param editable {module:model/workflows/Boolean} Whether current field can be edited. If editable attribute for this field is false then this field should not be provided in the agreement creation request and default value of this field will be used in agreement creation
    * @instance
    */
    _this.setEditable = function(editable) {
      _this.editable = editable;
    };

   /**
    * A display text for the workflow user that can be used for the current recipients list
    * @function getLabel
    * @return  {module:model/workflows/String} A display text for the workflow user that can be used for the current recipients list  
    * @instance
    */
    _this.getLabel = function() {
      return _this.label;
    };

   /**
    * A display text for the workflow user that can be used for the current recipients list
    * @function setLabel
    * @param label {module:model/workflows/String} A display text for the workflow user that can be used for the current recipients list
    * @instance
    */
    _this.setLabel = function(label) {
      _this.label = label;
    };

   /**
    * maximum number of entries allowed in the current recipient list
    * @function getMaxListCount
    * @return  {module:model/workflows/Integer} maximum number of entries allowed in the current recipient list  
    * @instance
    */
    _this.getMaxListCount = function() {
      return _this.maxListCount;
    };

   /**
    * maximum number of entries allowed in the current recipient list
    * @function setMaxListCount
    * @param maxListCount {module:model/workflows/Integer} maximum number of entries allowed in the current recipient list
    * @instance
    */
    _this.setMaxListCount = function(maxListCount) {
      _this.maxListCount = maxListCount;
    };

   /**
    * minimum number of entries allowed in the current recipient list
    * @function getMinListCount
    * @return  {module:model/workflows/Integer} minimum number of entries allowed in the current recipient list  
    * @instance
    */
    _this.getMinListCount = function() {
      return _this.minListCount;
    };

   /**
    * minimum number of entries allowed in the current recipient list
    * @function setMinListCount
    * @param minListCount {module:model/workflows/Integer} minimum number of entries allowed in the current recipient list
    * @instance
    */
    _this.setMinListCount = function(minListCount) {
      _this.minListCount = minListCount;
    };

   /**
    * Name of the current RecipientInfo list
    * @function getName
    * @return  {module:model/workflows/String} Name of the current RecipientInfo list  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of the current RecipientInfo list
    * @function setName
    * @param name {module:model/workflows/String} Name of the current RecipientInfo list
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Whether current field is visible. If visible attribute for this field is false then this field should not be shown in the agreement creation UI using this workflow to user
    * @function getVisible
    * @return  {module:model/workflows/Boolean} Whether current field is visible. If visible attribute for this field is false then this field should not be shown in the agreement creation UI using this workflow to user  
    * @instance
    */
    _this.getVisible = function() {
      return _this.visible;
    };

   /**
    * Whether current field is visible. If visible attribute for this field is false then this field should not be shown in the agreement creation UI using this workflow to user
    * @function setVisible
    * @param visible {module:model/workflows/Boolean} Whether current field is visible. If visible attribute for this field is false then this field should not be shown in the agreement creation UI using this workflow to user
    * @instance
    */
    _this.setVisible = function(visible) {
      _this.visible = visible;
    };

  };

  /**
   * @private
   * Constructs a <code>RecipientsListInfoDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/RecipientsListInfoDescription} obj Optional instance to populate.
   * @return {module:model/workflows/RecipientsListInfoDescription} The populated <code>RecipientsListInfoDescription</code> instance.
   */
  RecipientsListInfoDescription.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new RecipientsListInfoDescription();

      if (data.hasOwnProperty('allowfax')) {
        obj.setAllowfax(data.allowfax);
      }
      if (data.hasOwnProperty('allowSender')) {
        obj.setAllowSender(data.allowSender);
      }
      if (data.hasOwnProperty('authenticationMethod')) {
        obj.setAuthenticationMethod(data.authenticationMethod);
      }
      if (data.hasOwnProperty('defaultValue')) {
        obj.setDefaultValue(data.defaultValue);
      }
      if (data.hasOwnProperty('editable')) {
        obj.setEditable(data.editable);
      }
      if (data.hasOwnProperty('label')) {
        obj.setLabel(data.label);
      }
      if (data.hasOwnProperty('maxListCount')) {
        obj.setMaxListCount(data.maxListCount);
      }
      if (data.hasOwnProperty('minListCount')) {
        obj.setMinListCount(data.minListCount);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('visible')) {
        obj.setVisible(data.visible);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>authenticationMethod</code> property.
   * @enum {String}
   * @readonly
   */
RecipientsListInfoDescription.AuthenticationMethodEnum = {
  
  
    /**
     * value: NONE
     * @const
     */
    NONE: "NONE",
    
  
    /**
     * value: KBA
     * @const
     */
    KBA: "KBA",
    
  
    /**
     * value: PASSWORD
     * @const
     */
    PASSWORD: "PASSWORD",
    
  
    /**
     * value: WEB_IDENTITY
     * @const
     */
    WEB_IDENTITY: "WEB_IDENTITY"
  
  
  };

  return RecipientsListInfoDescription;
}));


