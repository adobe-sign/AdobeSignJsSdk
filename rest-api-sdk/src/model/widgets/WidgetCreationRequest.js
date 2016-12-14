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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/WidgetCreationInfo'));

}(function(ApiClient, WidgetCreationInfo) {
  'use strict';


  /**
   * @module model/widgets/WidgetCreationRequest
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetCreationRequest</code>.
   * @alias module:model/widgets/WidgetCreationRequest
   * @class
   */
  var WidgetCreationRequest = function() {
    var _this = this;


    _this.widgetCreationInfo = undefined;

   /**
    * Information about the widget that you want to create.
    * @function getWidgetCreationInfo
    * @return  {module:model/widgets/WidgetCreationInfo} Information about the widget that you want to create.  
    * @instance
    */
    _this.getWidgetCreationInfo = function() {
      return _this.widgetCreationInfo;
    };

   /**
    * Information about the widget that you want to create.
    * @function setWidgetCreationInfo
    * @param widgetCreationInfo {module:model/widgets/WidgetCreationInfo} Information about the widget that you want to create.
    * @instance
    */
    _this.setWidgetCreationInfo = function(widgetCreationInfo) {
      _this.widgetCreationInfo = widgetCreationInfo;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetCreationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetCreationRequest} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetCreationRequest} The populated <code>WidgetCreationRequest</code> instance.
   */
  WidgetCreationRequest.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetCreationRequest();

      if (data.hasOwnProperty('widgetCreationInfo')) {
        obj.setWidgetCreationInfo(ApiClient.convertToType(data.widgetCreationInfo,WidgetCreationInfo));
      }
    }
    return obj;
  };


  return WidgetCreationRequest;
}));


