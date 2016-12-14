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
   * @module model/widgets/UserWidget
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserWidget</code>.
   * @alias module:model/widgets/UserWidget
   * @class
   */
  var UserWidget = function() {
    var _this = this;


    _this.javascript = undefined;

    _this.modifiedDate = undefined;

    _this.name = undefined;

    _this.status = undefined;

    _this.url = undefined;

    _this.widgetId = undefined;

   /**
    * The embedded javascript code of the widget
    * @function getJavascript
    * @return  {module:model/widgets/String} The embedded javascript code of the widget  
    * @instance
    */
    _this.getJavascript = function() {
      return _this.javascript;
    };

   /**
    * The embedded javascript code of the widget
    * @function setJavascript
    * @param javascript {module:model/widgets/String} The embedded javascript code of the widget
    * @instance
    */
    _this.setJavascript = function(javascript) {
      _this.javascript = javascript;
    };

   /**
    * The day on which the widget was last modified
    * @function getModifiedDate
    * @return  {module:model/widgets/Date} The day on which the widget was last modified  
    * @instance
    */
    _this.getModifiedDate = function() {
      return _this.modifiedDate;
    };

   /**
    * The day on which the widget was last modified
    * @function setModifiedDate
    * @param modifiedDate {module:model/widgets/Date} The day on which the widget was last modified
    * @instance
    */
    _this.setModifiedDate = function(modifiedDate) {
      _this.modifiedDate = modifiedDate;
    };

   /**
    * The name of the widget.
    * @function getName
    * @return  {module:model/widgets/String} The name of the widget.  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the widget.
    * @function setName
    * @param name {module:model/widgets/String} The name of the widget.
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * The widget status (enabled or disabled or aborted or other)
    * @function getStatus
    * @return  {module:model/widgets/String} The widget status (enabled or disabled or aborted or other)  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * The widget status (enabled or disabled or aborted or other)
    * @function setStatus
    * @param status {module:model/widgets/String} The widget status (enabled or disabled or aborted or other)
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

   /**
    * The hosted url of the widget
    * @function getUrl
    * @return  {module:model/widgets/String} The hosted url of the widget  
    * @instance
    */
    _this.getUrl = function() {
      return _this.url;
    };

   /**
    * The hosted url of the widget
    * @function setUrl
    * @param url {module:model/widgets/String} The hosted url of the widget
    * @instance
    */
    _this.setUrl = function(url) {
      _this.url = url;
    };

   /**
    * The unique identifier of a widget
    * @function getWidgetId
    * @return  {module:model/widgets/String} The unique identifier of a widget  
    * @instance
    */
    _this.getWidgetId = function() {
      return _this.widgetId;
    };

   /**
    * The unique identifier of a widget
    * @function setWidgetId
    * @param widgetId {module:model/widgets/String} The unique identifier of a widget
    * @instance
    */
    _this.setWidgetId = function(widgetId) {
      _this.widgetId = widgetId;
    };

  };

  /**
   * @private
   * Constructs a <code>UserWidget</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/UserWidget} obj Optional instance to populate.
   * @return {module:model/widgets/UserWidget} The populated <code>UserWidget</code> instance.
   */
  UserWidget.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserWidget();

      if (data.hasOwnProperty('javascript')) {
        obj.setJavascript(data.javascript);
      }
      if (data.hasOwnProperty('modifiedDate')) {
        obj.setModifiedDate(data.modifiedDate);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('status')) {
        obj.setStatus(data.status);
      }
      if (data.hasOwnProperty('url')) {
        obj.setUrl(data.url);
      }
      if (data.hasOwnProperty('widgetId')) {
        obj.setWidgetId(data.widgetId);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
UserWidget.StatusEnum = {
  
  
    /**
     * value: ENABLED
     * @const
     */
    ENABLED: "ENABLED",
    
  
    /**
     * value: DISABLED
     * @const
     */
    DISABLED: "DISABLED",
    
  
    /**
     * value: ABORTED
     * @const
     */
    ABORTED: "ABORTED",
    
  
    /**
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };

  return UserWidget;
}));


