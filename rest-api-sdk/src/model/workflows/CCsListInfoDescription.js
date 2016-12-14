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
   * @module model/workflows/CCsListInfoDescription
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>CCsListInfoDescription</code>.
   * @alias module:model/workflows/CCsListInfoDescription
   * @class
   */
  var CCsListInfoDescription = function() {
    var _this = this;


    _this.defaultValue = undefined;

    _this.editable = undefined;

    _this.label = undefined;

    _this.maxListCount = undefined;

    _this.minListCount = undefined;

    _this.name = undefined;

    _this.visible = undefined;

   /**
    * A default email that will be used if no input is provided for this list element
    * @function getDefaultValue
    * @return  {module:model/workflows/String} A default email that will be used if no input is provided for this list element  
    * @instance
    */
    _this.getDefaultValue = function() {
      return _this.defaultValue;
    };

   /**
    * A default email that will be used if no input is provided for this list element
    * @function setDefaultValue
    * @param defaultValue {module:model/workflows/String} A default email that will be used if no input is provided for this list element
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
    * A display text for the workflow user that can be used for the current CC list
    * @function getLabel
    * @return  {module:model/workflows/String} A display text for the workflow user that can be used for the current CC list  
    * @instance
    */
    _this.getLabel = function() {
      return _this.label;
    };

   /**
    * A display text for the workflow user that can be used for the current CC list
    * @function setLabel
    * @param label {module:model/workflows/String} A display text for the workflow user that can be used for the current CC list
    * @instance
    */
    _this.setLabel = function(label) {
      _this.label = label;
    };

   /**
    * maximum number of entries allowed in the current CC list
    * @function getMaxListCount
    * @return  {module:model/workflows/Integer} maximum number of entries allowed in the current CC list  
    * @instance
    */
    _this.getMaxListCount = function() {
      return _this.maxListCount;
    };

   /**
    * maximum number of entries allowed in the current CC list
    * @function setMaxListCount
    * @param maxListCount {module:model/workflows/Integer} maximum number of entries allowed in the current CC list
    * @instance
    */
    _this.setMaxListCount = function(maxListCount) {
      _this.maxListCount = maxListCount;
    };

   /**
    * minimum number of entries allowed in the current CC list
    * @function getMinListCount
    * @return  {module:model/workflows/Integer} minimum number of entries allowed in the current CC list  
    * @instance
    */
    _this.getMinListCount = function() {
      return _this.minListCount;
    };

   /**
    * minimum number of entries allowed in the current CC list
    * @function setMinListCount
    * @param minListCount {module:model/workflows/Integer} minimum number of entries allowed in the current CC list
    * @instance
    */
    _this.setMinListCount = function(minListCount) {
      _this.minListCount = minListCount;
    };

   /**
    * Name of the current CC list
    * @function getName
    * @return  {module:model/workflows/String} Name of the current CC list  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of the current CC list
    * @function setName
    * @param name {module:model/workflows/String} Name of the current CC list
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Whether current field is visible or not. If visible attribute for this field is false then this field should not be shown in the agreement creation page using this workflow
    * @function getVisible
    * @return  {module:model/workflows/Boolean} Whether current field is visible or not. If visible attribute for this field is false then this field should not be shown in the agreement creation page using this workflow  
    * @instance
    */
    _this.getVisible = function() {
      return _this.visible;
    };

   /**
    * Whether current field is visible or not. If visible attribute for this field is false then this field should not be shown in the agreement creation page using this workflow
    * @function setVisible
    * @param visible {module:model/workflows/Boolean} Whether current field is visible or not. If visible attribute for this field is false then this field should not be shown in the agreement creation page using this workflow
    * @instance
    */
    _this.setVisible = function(visible) {
      _this.visible = visible;
    };

  };

  /**
   * @private
   * Constructs a <code>CCsListInfoDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/CCsListInfoDescription} obj Optional instance to populate.
   * @return {module:model/workflows/CCsListInfoDescription} The populated <code>CCsListInfoDescription</code> instance.
   */
  CCsListInfoDescription.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new CCsListInfoDescription();

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


  return CCsListInfoDescription;
}));


