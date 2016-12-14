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
   * @module model/workflows/PasswordFieldInfoDescription
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>PasswordFieldInfoDescription</code>.
   * @alias module:model/workflows/PasswordFieldInfoDescription
   * @class
   */
  var PasswordFieldInfoDescription = function() {
    var _this = this;


    _this.defaultValue = undefined;

    _this.label = undefined;

    _this.name = undefined;

    _this.required = undefined;

    _this.visible = undefined;

   /**
    * Default value of the password info field
    * @function getDefaultValue
    * @return  {module:model/workflows/String} Default value of the password info field  
    * @instance
    */
    _this.getDefaultValue = function() {
      return _this.defaultValue;
    };

   /**
    * Default value of the password info field
    * @function setDefaultValue
    * @param defaultValue {module:model/workflows/String} Default value of the password info field
    * @instance
    */
    _this.setDefaultValue = function(defaultValue) {
      _this.defaultValue = defaultValue;
    };

   /**
    * Label of password field
    * @function getLabel
    * @return  {module:model/workflows/String} Label of password field  
    * @instance
    */
    _this.getLabel = function() {
      return _this.label;
    };

   /**
    * Label of password field
    * @function setLabel
    * @param label {module:model/workflows/String} Label of password field
    * @instance
    */
    _this.setLabel = function(label) {
      _this.label = label;
    };

   /**
    * Name of password field
    * @function getName
    * @return  {module:model/workflows/String} Name of password field  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of password field
    * @function setName
    * @param name {module:model/workflows/String} Name of password field
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
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
    * Whether password info field is visible on agreement creation page
    * @function getVisible
    * @return  {module:model/workflows/Boolean} Whether password info field is visible on agreement creation page  
    * @instance
    */
    _this.getVisible = function() {
      return _this.visible;
    };

   /**
    * Whether password info field is visible on agreement creation page
    * @function setVisible
    * @param visible {module:model/workflows/Boolean} Whether password info field is visible on agreement creation page
    * @instance
    */
    _this.setVisible = function(visible) {
      _this.visible = visible;
    };

  };

  /**
   * @private
   * Constructs a <code>PasswordFieldInfoDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/PasswordFieldInfoDescription} obj Optional instance to populate.
   * @return {module:model/workflows/PasswordFieldInfoDescription} The populated <code>PasswordFieldInfoDescription</code> instance.
   */
  PasswordFieldInfoDescription.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new PasswordFieldInfoDescription();

      if (data.hasOwnProperty('defaultValue')) {
        obj.setDefaultValue(data.defaultValue);
      }
      if (data.hasOwnProperty('label')) {
        obj.setLabel(data.label);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
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


  return PasswordFieldInfoDescription;
}));


