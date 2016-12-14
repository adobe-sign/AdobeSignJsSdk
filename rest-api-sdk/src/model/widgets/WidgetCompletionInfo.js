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
   * @module model/widgets/WidgetCompletionInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetCompletionInfo</code>.
   * @alias module:model/widgets/WidgetCompletionInfo
   * @class
   */
  var WidgetCompletionInfo = function() {
    var _this = this;


    _this.deframe = undefined;

    _this.delay = undefined;

    _this.url = undefined;

   /**
    * If deframe is false, the success page will be shown inside the widget frame. If deframe is true, the success page will be shown in the full browser window. Note that if this widget is loaded through javascript returned from this end point, browser security restrictions do not permit automatic redirection in the full browser window, so if deframe is true the user will instead just see a link to the success page. We recommend this scenario be avoided - in other words, setting deframe to false is recommended for this case.
    * @function getDeframe
    * @return  {module:model/widgets/Boolean} If deframe is false, the success page will be shown inside the widget frame. If deframe is true, the success page will be shown in the full browser window. Note that if this widget is loaded through javascript returned from this end point, browser security restrictions do not permit automatic redirection in the full browser window, so if deframe is true the user will instead just see a link to the success page. We recommend this scenario be avoided - in other words, setting deframe to false is recommended for this case.  
    * @instance
    */
    _this.getDeframe = function() {
      return _this.deframe;
    };

   /**
    * If deframe is false, the success page will be shown inside the widget frame. If deframe is true, the success page will be shown in the full browser window. Note that if this widget is loaded through javascript returned from this end point, browser security restrictions do not permit automatic redirection in the full browser window, so if deframe is true the user will instead just see a link to the success page. We recommend this scenario be avoided - in other words, setting deframe to false is recommended for this case.
    * @function setDeframe
    * @param deframe {module:model/widgets/Boolean} If deframe is false, the success page will be shown inside the widget frame. If deframe is true, the success page will be shown in the full browser window. Note that if this widget is loaded through javascript returned from this end point, browser security restrictions do not permit automatic redirection in the full browser window, so if deframe is true the user will instead just see a link to the success page. We recommend this scenario be avoided - in other words, setting deframe to false is recommended for this case.
    * @instance
    */
    _this.setDeframe = function(deframe) {
      _this.deframe = deframe;
    };

   /**
    * The delay (in seconds) before the user is taken to the success page. If this value is greater than 0, the user will first see the standard Adobe Sign success message, and then after a delay will be redirected to your success page. Note that this parameter has no effect for widgets loaded with javascript when deframe is true.
    * @function getDelay
    * @return  {module:model/widgets/Integer} The delay (in seconds) before the user is taken to the success page. If this value is greater than 0, the user will first see the standard Adobe Sign success message, and then after a delay will be redirected to your success page. Note that this parameter has no effect for widgets loaded with javascript when deframe is true.  
    * @instance
    */
    _this.getDelay = function() {
      return _this.delay;
    };

   /**
    * The delay (in seconds) before the user is taken to the success page. If this value is greater than 0, the user will first see the standard Adobe Sign success message, and then after a delay will be redirected to your success page. Note that this parameter has no effect for widgets loaded with javascript when deframe is true.
    * @function setDelay
    * @param delay {module:model/widgets/Integer} The delay (in seconds) before the user is taken to the success page. If this value is greater than 0, the user will first see the standard Adobe Sign success message, and then after a delay will be redirected to your success page. Note that this parameter has no effect for widgets loaded with javascript when deframe is true.
    * @instance
    */
    _this.setDelay = function(delay) {
      _this.delay = delay;
    };

   /**
    * A publicly accessible url to which the user will be sent after successfully completing the widget. If the URL you provide includes information that allows you to identify the specific transaction, such as your own unique identifier, you can use the browser request to this URL as a callback to notify you that this transaction is completed. In addition, Adobe Sign will append a documentKey parameter to the URL which will contain the Adobe Sign DocumentKey for this signed widget, but only if the sender is the same as the API key user. Your application can use this value to get the form data for this widget.
    * @function getUrl
    * @return  {module:model/widgets/String} A publicly accessible url to which the user will be sent after successfully completing the widget. If the URL you provide includes information that allows you to identify the specific transaction, such as your own unique identifier, you can use the browser request to this URL as a callback to notify you that this transaction is completed. In addition, Adobe Sign will append a documentKey parameter to the URL which will contain the Adobe Sign DocumentKey for this signed widget, but only if the sender is the same as the API key user. Your application can use this value to get the form data for this widget.  
    * @instance
    */
    _this.getUrl = function() {
      return _this.url;
    };

   /**
    * A publicly accessible url to which the user will be sent after successfully completing the widget. If the URL you provide includes information that allows you to identify the specific transaction, such as your own unique identifier, you can use the browser request to this URL as a callback to notify you that this transaction is completed. In addition, Adobe Sign will append a documentKey parameter to the URL which will contain the Adobe Sign DocumentKey for this signed widget, but only if the sender is the same as the API key user. Your application can use this value to get the form data for this widget.
    * @function setUrl
    * @param url {module:model/widgets/String} A publicly accessible url to which the user will be sent after successfully completing the widget. If the URL you provide includes information that allows you to identify the specific transaction, such as your own unique identifier, you can use the browser request to this URL as a callback to notify you that this transaction is completed. In addition, Adobe Sign will append a documentKey parameter to the URL which will contain the Adobe Sign DocumentKey for this signed widget, but only if the sender is the same as the API key user. Your application can use this value to get the form data for this widget.
    * @instance
    */
    _this.setUrl = function(url) {
      _this.url = url;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetCompletionInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetCompletionInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetCompletionInfo} The populated <code>WidgetCompletionInfo</code> instance.
   */
  WidgetCompletionInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetCompletionInfo();

      if (data.hasOwnProperty('deframe')) {
        obj.setDeframe(data.deframe);
      }
      if (data.hasOwnProperty('delay')) {
        obj.setDelay(data.delay);
      }
      if (data.hasOwnProperty('url')) {
        obj.setUrl(data.url);
      }
    }
    return obj;
  };


  return WidgetCompletionInfo;
}));


