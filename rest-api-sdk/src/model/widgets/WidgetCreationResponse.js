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
   * @module model/widgets/WidgetCreationResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetCreationResponse</code>.
   * A JSON object describing the widget
   * @alias module:model/widgets/WidgetCreationResponse
   * @class
   */
  var WidgetCreationResponse = function() {
    var _this = this;


    _this.javascript = undefined;

    _this.nextPageEmbeddedCode = undefined;

    _this.nextPageUrl = undefined;

    _this.url = undefined;

    _this.widgetId = undefined;

   /**
    * Javascript snippet suitable for an embedded page taking a user to a URL
    * @function getJavascript
    * @return  {module:model/widgets/String} Javascript snippet suitable for an embedded page taking a user to a URL  
    * @instance
    */
    _this.getJavascript = function() {
      return _this.javascript;
    };

   /**
    * Javascript snippet suitable for an embedded page taking a user to a URL
    * @function setJavascript
    * @param javascript {module:model/widgets/String} Javascript snippet suitable for an embedded page taking a user to a URL
    * @instance
    */
    _this.setJavascript = function(javascript) {
      _this.javascript = javascript;
    };

   /**
    * Javascript snippet suitable for an embedded page of the redirected URL that can be used by widget creators
    * @function getNextPageEmbeddedCode
    * @return  {module:model/widgets/String} Javascript snippet suitable for an embedded page of the redirected URL that can be used by widget creators  
    * @instance
    */
    _this.getNextPageEmbeddedCode = function() {
      return _this.nextPageEmbeddedCode;
    };

   /**
    * Javascript snippet suitable for an embedded page of the redirected URL that can be used by widget creators
    * @function setNextPageEmbeddedCode
    * @param nextPageEmbeddedCode {module:model/widgets/String} Javascript snippet suitable for an embedded page of the redirected URL that can be used by widget creators
    * @instance
    */
    _this.setNextPageEmbeddedCode = function(nextPageEmbeddedCode) {
      _this.nextPageEmbeddedCode = nextPageEmbeddedCode;
    };

   /**
    * Redirect URL once the widget is created
    * @function getNextPageUrl
    * @return  {module:model/widgets/String} Redirect URL once the widget is created  
    * @instance
    */
    _this.getNextPageUrl = function() {
      return _this.nextPageUrl;
    };

   /**
    * Redirect URL once the widget is created
    * @function setNextPageUrl
    * @param nextPageUrl {module:model/widgets/String} Redirect URL once the widget is created
    * @instance
    */
    _this.setNextPageUrl = function(nextPageUrl) {
      _this.nextPageUrl = nextPageUrl;
    };

   /**
    * Standalone URL to direct end users to
    * @function getUrl
    * @return  {module:model/widgets/String} Standalone URL to direct end users to  
    * @instance
    */
    _this.getUrl = function() {
      return _this.url;
    };

   /**
    * Standalone URL to direct end users to
    * @function setUrl
    * @param url {module:model/widgets/String} Standalone URL to direct end users to
    * @instance
    */
    _this.setUrl = function(url) {
      _this.url = url;
    };

   /**
    * The unique identifier of widget which can be used to retrieve the data entered by the signers.
    * @function getWidgetId
    * @return  {module:model/widgets/String} The unique identifier of widget which can be used to retrieve the data entered by the signers.  
    * @instance
    */
    _this.getWidgetId = function() {
      return _this.widgetId;
    };

   /**
    * The unique identifier of widget which can be used to retrieve the data entered by the signers.
    * @function setWidgetId
    * @param widgetId {module:model/widgets/String} The unique identifier of widget which can be used to retrieve the data entered by the signers.
    * @instance
    */
    _this.setWidgetId = function(widgetId) {
      _this.widgetId = widgetId;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetCreationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetCreationResponse} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetCreationResponse} The populated <code>WidgetCreationResponse</code> instance.
   */
  WidgetCreationResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetCreationResponse();

      if (data.hasOwnProperty('javascript')) {
        obj.setJavascript(data.javascript);
      }
      if (data.hasOwnProperty('nextPageEmbeddedCode')) {
        obj.setNextPageEmbeddedCode(data.nextPageEmbeddedCode);
      }
      if (data.hasOwnProperty('nextPageUrl')) {
        obj.setNextPageUrl(data.nextPageUrl);
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


  return WidgetCreationResponse;
}));


