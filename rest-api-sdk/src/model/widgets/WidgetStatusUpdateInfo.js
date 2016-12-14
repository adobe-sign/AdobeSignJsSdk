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
   * @module model/widgets/WidgetStatusUpdateInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetStatusUpdateInfo</code>.
   * @alias module:model/widgets/WidgetStatusUpdateInfo
   * @class
   */
  var WidgetStatusUpdateInfo = function() {
    var _this = this;


    _this.message = undefined;

    _this.redirectUrl = undefined;

    _this.value = undefined;

   /**
    * Display this custom message to the user when the widget is accessed. Note that this can contain wiki markup to include clickable links in the message. This is required if redirectUrl is not provided. Both message and redirectUrl can not be specified.
    * @function getMessage
    * @return  {module:model/widgets/String} Display this custom message to the user when the widget is accessed. Note that this can contain wiki markup to include clickable links in the message. This is required if redirectUrl is not provided. Both message and redirectUrl can not be specified.  
    * @instance
    */
    _this.getMessage = function() {
      return _this.message;
    };

   /**
    * Display this custom message to the user when the widget is accessed. Note that this can contain wiki markup to include clickable links in the message. This is required if redirectUrl is not provided. Both message and redirectUrl can not be specified.
    * @function setMessage
    * @param message {module:model/widgets/String} Display this custom message to the user when the widget is accessed. Note that this can contain wiki markup to include clickable links in the message. This is required if redirectUrl is not provided. Both message and redirectUrl can not be specified.
    * @instance
    */
    _this.setMessage = function(message) {
      _this.message = message;
    };

   /**
    * Redirect the user to this URL when the widget is accessed. This is required if message is not provided. Both message and redirectUrl can not be specified.
    * @function getRedirectUrl
    * @return  {module:model/widgets/String} Redirect the user to this URL when the widget is accessed. This is required if message is not provided. Both message and redirectUrl can not be specified.  
    * @instance
    */
    _this.getRedirectUrl = function() {
      return _this.redirectUrl;
    };

   /**
    * Redirect the user to this URL when the widget is accessed. This is required if message is not provided. Both message and redirectUrl can not be specified.
    * @function setRedirectUrl
    * @param redirectUrl {module:model/widgets/String} Redirect the user to this URL when the widget is accessed. This is required if message is not provided. Both message and redirectUrl can not be specified.
    * @instance
    */
    _this.setRedirectUrl = function(redirectUrl) {
      _this.redirectUrl = redirectUrl;
    };

   /**
    * The status to which the widget is to be updated. The possible values for this variable are ENABLE and DISABLE
    * @function getValue
    * @return  {module:model/widgets/String} The status to which the widget is to be updated. The possible values for this variable are ENABLE and DISABLE  
    * @instance
    */
    _this.getValue = function() {
      return _this.value;
    };

   /**
    * The status to which the widget is to be updated. The possible values for this variable are ENABLE and DISABLE
    * @function setValue
    * @param value {module:model/widgets/String} The status to which the widget is to be updated. The possible values for this variable are ENABLE and DISABLE
    * @instance
    */
    _this.setValue = function(value) {
      _this.value = value;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetStatusUpdateInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetStatusUpdateInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetStatusUpdateInfo} The populated <code>WidgetStatusUpdateInfo</code> instance.
   */
  WidgetStatusUpdateInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetStatusUpdateInfo();

      if (data.hasOwnProperty('message')) {
        obj.setMessage(data.message);
      }
      if (data.hasOwnProperty('redirectUrl')) {
        obj.setRedirectUrl(data.redirectUrl);
      }
      if (data.hasOwnProperty('value')) {
        obj.setValue(data.value);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>value</code> property.
   * @enum {String}
   * @readonly
   */
WidgetStatusUpdateInfo.ValueEnum = {
  
  
    /**
     * value: DISABLE
     * @const
     */
    DISABLE: "DISABLE",
    
  
    /**
     * value: ENABLE
     * @const
     */
    ENABLE: "ENABLE"
  
  
  };

  return WidgetStatusUpdateInfo;
}));


