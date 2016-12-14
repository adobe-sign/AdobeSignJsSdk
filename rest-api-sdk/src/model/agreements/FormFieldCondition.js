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
   * @module model/agreements/FormFieldCondition
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>FormFieldCondition</code>.
   * @alias module:model/agreements/FormFieldCondition
   * @class
   */
  var FormFieldCondition = function() {
    var _this = this;


    _this.value = undefined;

    _this.whenFieldLocationIndex = undefined;

    _this.whenFieldName = undefined;

   /**
    * Value to compare the value of the whenField with, to evaluate the condition
    * @function getValue
    * @return  {module:model/agreements/String} Value to compare the value of the whenField with, to evaluate the condition  
    * @instance
    */
    _this.getValue = function() {
      return _this.value;
    };

   /**
    * Value to compare the value of the whenField with, to evaluate the condition
    * @function setValue
    * @param value {module:model/agreements/String} Value to compare the value of the whenField with, to evaluate the condition
    * @instance
    */
    _this.setValue = function(value) {
      _this.value = value;
    };

   /**
    * Index of the location of the whenField whose value is the basis of the condition
    * @function getWhenFieldLocationIndex
    * @return  {module:model/agreements/Integer} Index of the location of the whenField whose value is the basis of the condition  
    * @instance
    */
    _this.getWhenFieldLocationIndex = function() {
      return _this.whenFieldLocationIndex;
    };

   /**
    * Index of the location of the whenField whose value is the basis of the condition
    * @function setWhenFieldLocationIndex
    * @param whenFieldLocationIndex {module:model/agreements/Integer} Index of the location of the whenField whose value is the basis of the condition
    * @instance
    */
    _this.setWhenFieldLocationIndex = function(whenFieldLocationIndex) {
      _this.whenFieldLocationIndex = whenFieldLocationIndex;
    };

   /**
    * Name of the field whose value is the basis of condition
    * @function getWhenFieldName
    * @return  {module:model/agreements/String} Name of the field whose value is the basis of condition  
    * @instance
    */
    _this.getWhenFieldName = function() {
      return _this.whenFieldName;
    };

   /**
    * Name of the field whose value is the basis of condition
    * @function setWhenFieldName
    * @param whenFieldName {module:model/agreements/String} Name of the field whose value is the basis of condition
    * @instance
    */
    _this.setWhenFieldName = function(whenFieldName) {
      _this.whenFieldName = whenFieldName;
    };

  };

  /**
   * @private
   * Constructs a <code>FormFieldCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/FormFieldCondition} obj Optional instance to populate.
   * @return {module:model/agreements/FormFieldCondition} The populated <code>FormFieldCondition</code> instance.
   */
  FormFieldCondition.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new FormFieldCondition();

      if (data.hasOwnProperty('value')) {
        obj.setValue(data.value);
      }
      if (data.hasOwnProperty('whenFieldLocationIndex')) {
        obj.setWhenFieldLocationIndex(data.whenFieldLocationIndex);
      }
      if (data.hasOwnProperty('whenFieldName')) {
        obj.setWhenFieldName(data.whenFieldName);
      }
    }
    return obj;
  };


  return FormFieldCondition;
}));


