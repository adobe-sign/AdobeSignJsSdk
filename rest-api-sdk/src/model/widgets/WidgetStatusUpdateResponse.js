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
   * @module model/widgets/WidgetStatusUpdateResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetStatusUpdateResponse</code>.
   * @alias module:model/widgets/WidgetStatusUpdateResponse
   * @class
   */
  var WidgetStatusUpdateResponse = function() {
    var _this = this;


    _this.code = undefined;

    _this.message = undefined;

   /**
    * The result of the attempt to disable or enable the widget
    * @function getCode
    * @return  {module:model/widgets/String} The result of the attempt to disable or enable the widget  
    * @instance
    */
    _this.getCode = function() {
      return _this.code;
    };

   /**
    * The result of the attempt to disable or enable the widget
    * @function setCode
    * @param code {module:model/widgets/String} The result of the attempt to disable or enable the widget
    * @instance
    */
    _this.setCode = function(code) {
      _this.code = code;
    };

   /**
    * String result message if there was no error
    * @function getMessage
    * @return  {module:model/widgets/String} String result message if there was no error  
    * @instance
    */
    _this.getMessage = function() {
      return _this.message;
    };

   /**
    * String result message if there was no error
    * @function setMessage
    * @param message {module:model/widgets/String} String result message if there was no error
    * @instance
    */
    _this.setMessage = function(message) {
      _this.message = message;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetStatusUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetStatusUpdateResponse} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetStatusUpdateResponse} The populated <code>WidgetStatusUpdateResponse</code> instance.
   */
  WidgetStatusUpdateResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetStatusUpdateResponse();

      if (data.hasOwnProperty('code')) {
        obj.setCode(data.code);
      }
      if (data.hasOwnProperty('message')) {
        obj.setMessage(data.message);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
WidgetStatusUpdateResponse.CodeEnum = {
  
  
    /**
     * value: OK
     * @const
     */
    OK: "OK",
    
  
    /**
     * value: ALREADY_DISABLED
     * @const
     */
    ALREADY_DISABLED: "ALREADY_DISABLED",
    
  
    /**
     * value: ALREADY_ENABLED
     * @const
     */
    ALREADY_ENABLED: "ALREADY_ENABLED"
  
  
  };

  return WidgetStatusUpdateResponse;
}));


