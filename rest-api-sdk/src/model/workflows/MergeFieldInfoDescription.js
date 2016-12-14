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
   * @module model/workflows/MergeFieldInfoDescription
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MergeFieldInfoDescription</code>.
   * @alias module:model/workflows/MergeFieldInfoDescription
   * @class
   */
  var MergeFieldInfoDescription = function() {
    var _this = this;


    _this.defaultValue = undefined;

    _this.displayName = undefined;

    _this.editable = undefined;

    _this.fieldName = undefined;

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
    * The display text that can be shown for this custom field
    * @function getDisplayName
    * @return  {module:model/workflows/String} The display text that can be shown for this custom field  
    * @instance
    */
    _this.getDisplayName = function() {
      return _this.displayName;
    };

   /**
    * The display text that can be shown for this custom field
    * @function setDisplayName
    * @param displayName {module:model/workflows/String} The display text that can be shown for this custom field
    * @instance
    */
    _this.setDisplayName = function(displayName) {
      _this.displayName = displayName;
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
    * Name of the custom field in this workflow
    * @function getFieldName
    * @return  {module:model/workflows/String} Name of the custom field in this workflow  
    * @instance
    */
    _this.getFieldName = function() {
      return _this.fieldName;
    };

   /**
    * Name of the custom field in this workflow
    * @function setFieldName
    * @param fieldName {module:model/workflows/String} Name of the custom field in this workflow
    * @instance
    */
    _this.setFieldName = function(fieldName) {
      _this.fieldName = fieldName;
    };

   /**
    * Whether current field should be visible on agreement creation page. If visible attribute for this field is false then this field should not be shown on the agreement creation page using this workflow
    * @function getVisible
    * @return  {module:model/workflows/Boolean} Whether current field should be visible on agreement creation page. If visible attribute for this field is false then this field should not be shown on the agreement creation page using this workflow  
    * @instance
    */
    _this.getVisible = function() {
      return _this.visible;
    };

   /**
    * Whether current field should be visible on agreement creation page. If visible attribute for this field is false then this field should not be shown on the agreement creation page using this workflow
    * @function setVisible
    * @param visible {module:model/workflows/Boolean} Whether current field should be visible on agreement creation page. If visible attribute for this field is false then this field should not be shown on the agreement creation page using this workflow
    * @instance
    */
    _this.setVisible = function(visible) {
      _this.visible = visible;
    };

  };

  /**
   * @private
   * Constructs a <code>MergeFieldInfoDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/MergeFieldInfoDescription} obj Optional instance to populate.
   * @return {module:model/workflows/MergeFieldInfoDescription} The populated <code>MergeFieldInfoDescription</code> instance.
   */
  MergeFieldInfoDescription.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MergeFieldInfoDescription();

      if (data.hasOwnProperty('defaultValue')) {
        obj.setDefaultValue(data.defaultValue);
      }
      if (data.hasOwnProperty('displayName')) {
        obj.setDisplayName(data.displayName);
      }
      if (data.hasOwnProperty('editable')) {
        obj.setEditable(data.editable);
      }
      if (data.hasOwnProperty('fieldName')) {
        obj.setFieldName(data.fieldName);
      }
      if (data.hasOwnProperty('visible')) {
        obj.setVisible(data.visible);
      }
    }
    return obj;
  };


  return MergeFieldInfoDescription;
}));


