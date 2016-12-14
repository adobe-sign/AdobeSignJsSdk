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
   * @module model/workflows/ExpirationFieldInfoDescription
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>ExpirationFieldInfoDescription</code>.
   * @alias module:model/workflows/ExpirationFieldInfoDescription
   * @class
   */
  var ExpirationFieldInfoDescription = function() {
    var _this = this;


    _this.defaultValue = undefined;

    _this.editable = undefined;

    _this.maxDays = undefined;

    _this.required = undefined;

    _this.visible = undefined;

   /**
    * default value of the field if input for this field is not provided and this field is required
    * @function getDefaultValue
    * @return  {module:model/workflows/String} default value of the field if input for this field is not provided and this field is required  
    * @instance
    */
    _this.getDefaultValue = function() {
      return _this.defaultValue;
    };

   /**
    * default value of the field if input for this field is not provided and this field is required
    * @function setDefaultValue
    * @param defaultValue {module:model/workflows/String} default value of the field if input for this field is not provided and this field is required
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
    * Maximum number of days for agreement expiration
    * @function getMaxDays
    * @return  {module:model/workflows/Integer} Maximum number of days for agreement expiration  
    * @instance
    */
    _this.getMaxDays = function() {
      return _this.maxDays;
    };

   /**
    * Maximum number of days for agreement expiration
    * @function setMaxDays
    * @param maxDays {module:model/workflows/Integer} Maximum number of days for agreement expiration
    * @instance
    */
    _this.setMaxDays = function(maxDays) {
      _this.maxDays = maxDays;
    };

   /**
    * Whether this field is required or optional
    * @function getRequired
    * @return  {module:model/workflows/Boolean} Whether this field is required or optional  
    * @instance
    */
    _this.getRequired = function() {
      return _this.required;
    };

   /**
    * Whether this field is required or optional
    * @function setRequired
    * @param required {module:model/workflows/Boolean} Whether this field is required or optional
    * @instance
    */
    _this.setRequired = function(required) {
      _this.required = required;
    };

   /**
    * Whether current field is visible or not. If visible attribute for this field is false then this field should not be visible in the agreement creation UI using this workflow to user
    * @function getVisible
    * @return  {module:model/workflows/Boolean} Whether current field is visible or not. If visible attribute for this field is false then this field should not be visible in the agreement creation UI using this workflow to user  
    * @instance
    */
    _this.getVisible = function() {
      return _this.visible;
    };

   /**
    * Whether current field is visible or not. If visible attribute for this field is false then this field should not be visible in the agreement creation UI using this workflow to user
    * @function setVisible
    * @param visible {module:model/workflows/Boolean} Whether current field is visible or not. If visible attribute for this field is false then this field should not be visible in the agreement creation UI using this workflow to user
    * @instance
    */
    _this.setVisible = function(visible) {
      _this.visible = visible;
    };

  };

  /**
   * @private
   * Constructs a <code>ExpirationFieldInfoDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/ExpirationFieldInfoDescription} obj Optional instance to populate.
   * @return {module:model/workflows/ExpirationFieldInfoDescription} The populated <code>ExpirationFieldInfoDescription</code> instance.
   */
  ExpirationFieldInfoDescription.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new ExpirationFieldInfoDescription();

      if (data.hasOwnProperty('defaultValue')) {
        obj.setDefaultValue(data.defaultValue);
      }
      if (data.hasOwnProperty('editable')) {
        obj.setEditable(data.editable);
      }
      if (data.hasOwnProperty('maxDays')) {
        obj.setMaxDays(data.maxDays);
      }
      if (data.hasOwnProperty('required')) {
        obj.setRequired(data.required);
      }
      if (data.hasOwnProperty('visible')) {
        obj.setVisible(data.visible);
      }
    }
    return obj;
  };


  return ExpirationFieldInfoDescription;
}));


