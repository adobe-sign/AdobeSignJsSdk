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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/UserWidget'));

}(function(ApiClient, UserWidget) {
  'use strict';


  /**
   * @module model/widgets/UserWidgets
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserWidgets</code>.
   * @alias module:model/widgets/UserWidgets
   * @class
   */
  var UserWidgets = function() {
    var _this = this;


    _this.userWidgetList = undefined;

   /**
    * An array of widget items
    * @function getUserWidgetList
    * @return  {module:model/widgets/Array} An array of widget items  
    * @instance
    */
    _this.getUserWidgetList = function() {
      return _this.userWidgetList;
    };

   /**
    * An array of widget items
    * @function setUserWidgetList
    * @param userWidgetList {module:model/widgets/Array} An array of widget items
    * @instance
    */
    _this.setUserWidgetList = function(userWidgetList) {
      _this.userWidgetList = userWidgetList;
    };

  };

  /**
   * @private
   * Constructs a <code>UserWidgets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/UserWidgets} obj Optional instance to populate.
   * @return {module:model/widgets/UserWidgets} The populated <code>UserWidgets</code> instance.
   */
  UserWidgets.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserWidgets();

      if (data.hasOwnProperty('userWidgetList')) {
        obj.setUserWidgetList(ApiClient.convertToType(data.userWidgetList,[UserWidget]));
      }
    }
    return obj;
  };


  return UserWidgets;
}));


