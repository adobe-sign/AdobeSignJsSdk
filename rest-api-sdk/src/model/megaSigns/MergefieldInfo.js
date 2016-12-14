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
   * @module model/megaSigns/MergefieldInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MergefieldInfo</code>.
   * @alias module:model/megaSigns/MergefieldInfo
   * @class
   */
  var MergefieldInfo = function() {
    var _this = this;


    _this.defaultValue = undefined;

    _this.fieldName = undefined;

   /**
    * The default value of the field
    * @function getDefaultValue
    * @return  {module:model/megaSigns/String} The default value of the field  
    * @instance
    */
    _this.getDefaultValue = function() {
      return _this.defaultValue;
    };

   /**
    * The default value of the field
    * @function setDefaultValue
    * @param defaultValue {module:model/megaSigns/String} The default value of the field
    * @instance
    */
    _this.setDefaultValue = function(defaultValue) {
      _this.defaultValue = defaultValue;
    };

   /**
    * The name of the field
    * @function getFieldName
    * @return  {module:model/megaSigns/String} The name of the field  
    * @instance
    */
    _this.getFieldName = function() {
      return _this.fieldName;
    };

   /**
    * The name of the field
    * @function setFieldName
    * @param fieldName {module:model/megaSigns/String} The name of the field
    * @instance
    */
    _this.setFieldName = function(fieldName) {
      _this.fieldName = fieldName;
    };

  };

  /**
   * @private
   * Constructs a <code>MergefieldInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MergefieldInfo} obj Optional instance to populate.
   * @return {module:model/megaSigns/MergefieldInfo} The populated <code>MergefieldInfo</code> instance.
   */
  MergefieldInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MergefieldInfo();

      if (data.hasOwnProperty('defaultValue')) {
        obj.setDefaultValue(data.defaultValue);
      }
      if (data.hasOwnProperty('fieldName')) {
        obj.setFieldName(data.fieldName);
      }
    }
    return obj;
  };


  return MergefieldInfo;
}));


