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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/WidgetHistoryEvent'), require('../../model/widgets/WidgetParticipantSetInfo'));

}(function(ApiClient, WidgetHistoryEvent, WidgetParticipantSetInfo) {
  'use strict';


  /**
   * @module model/widgets/WidgetInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetInfo</code>.
   * @alias module:model/widgets/WidgetInfo
   * @class
   */
  var WidgetInfo = function() {
    var _this = this;


    _this.events = undefined;

    _this.javascript = undefined;

    _this.latestVersionId = undefined;

    _this.locale = undefined;

    _this.message = undefined;

    _this.name = undefined;

    _this.participantSetInfos = undefined;

    _this.securityOptions = undefined;

    _this.status = undefined;

    _this.url = undefined;

    _this.widgetId = undefined;

   /**
    * An ordered list of the events in the audit trail of this widget
    * @function getEvents
    * @return  {module:model/widgets/Array} An ordered list of the events in the audit trail of this widget  
    * @instance
    */
    _this.getEvents = function() {
      return _this.events;
    };

   /**
    * An ordered list of the events in the audit trail of this widget
    * @function setEvents
    * @param events {module:model/widgets/Array} An ordered list of the events in the audit trail of this widget
    * @instance
    */
    _this.setEvents = function(events) {
      _this.events = events;
    };

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
    * An ID which uniquely identifies the current version of the widget
    * @function getLatestVersionId
    * @return  {module:model/widgets/String} An ID which uniquely identifies the current version of the widget  
    * @instance
    */
    _this.getLatestVersionId = function() {
      return _this.latestVersionId;
    };

   /**
    * An ID which uniquely identifies the current version of the widget
    * @function setLatestVersionId
    * @param latestVersionId {module:model/widgets/String} An ID which uniquely identifies the current version of the widget
    * @instance
    */
    _this.setLatestVersionId = function(latestVersionId) {
      _this.latestVersionId = latestVersionId;
    };

   /**
    * The locale associated with this widget - for example, en_US or fr_FR
    * @function getLocale
    * @return  {module:model/widgets/String} The locale associated with this widget - for example, en_US or fr_FR  
    * @instance
    */
    _this.getLocale = function() {
      return _this.locale;
    };

   /**
    * The locale associated with this widget - for example, en_US or fr_FR
    * @function setLocale
    * @param locale {module:model/widgets/String} The locale associated with this widget - for example, en_US or fr_FR
    * @instance
    */
    _this.setLocale = function(locale) {
      _this.locale = locale;
    };

   /**
    * The message associated with the widget that the sender has provided
    * @function getMessage
    * @return  {module:model/widgets/String} The message associated with the widget that the sender has provided  
    * @instance
    */
    _this.getMessage = function() {
      return _this.message;
    };

   /**
    * The message associated with the widget that the sender has provided
    * @function setMessage
    * @param message {module:model/widgets/String} The message associated with the widget that the sender has provided
    * @instance
    */
    _this.setMessage = function(message) {
      _this.message = message;
    };

   /**
    * The widget name specified by the sender
    * @function getName
    * @return  {module:model/widgets/String} The widget name specified by the sender  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The widget name specified by the sender
    * @function setName
    * @param name {module:model/widgets/String} The widget name specified by the sender
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Information about the participant sets of the widget.
    * @function getParticipantSetInfos
    * @return  {module:model/widgets/Array} Information about the participant sets of the widget.  
    * @instance
    */
    _this.getParticipantSetInfos = function() {
      return _this.participantSetInfos;
    };

   /**
    * Information about the participant sets of the widget.
    * @function setParticipantSetInfos
    * @param participantSetInfos {module:model/widgets/Array} Information about the participant sets of the widget.
    * @instance
    */
    _this.setParticipantSetInfos = function(participantSetInfos) {
      _this.participantSetInfos = participantSetInfos;
    };

   /**
    * Security information about the widget that specifies whether or not a password is required to view and sign the widget
    * @function getSecurityOptions
    * @return  {module:model/widgets/Array} Security information about the widget that specifies whether or not a password is required to view and sign the widget  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Security information about the widget that specifies whether or not a password is required to view and sign the widget
    * @function setSecurityOptions
    * @param securityOptions {module:model/widgets/Array} Security information about the widget that specifies whether or not a password is required to view and sign the widget
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * The current status of the widget
    * @function getStatus
    * @return  {module:model/widgets/String} The current status of the widget  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * The current status of the widget
    * @function setStatus
    * @param status {module:model/widgets/String} The current status of the widget
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
    * A resource identifier that can be used to uniquely identify the widget in other apis
    * @function getWidgetId
    * @return  {module:model/widgets/String} A resource identifier that can be used to uniquely identify the widget in other apis  
    * @instance
    */
    _this.getWidgetId = function() {
      return _this.widgetId;
    };

   /**
    * A resource identifier that can be used to uniquely identify the widget in other apis
    * @function setWidgetId
    * @param widgetId {module:model/widgets/String} A resource identifier that can be used to uniquely identify the widget in other apis
    * @instance
    */
    _this.setWidgetId = function(widgetId) {
      _this.widgetId = widgetId;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetInfo} The populated <code>WidgetInfo</code> instance.
   */
  WidgetInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetInfo();

      if (data.hasOwnProperty('events')) {
        obj.setEvents(ApiClient.convertToType(data.events,[WidgetHistoryEvent]));
      }
      if (data.hasOwnProperty('javascript')) {
        obj.setJavascript(data.javascript);
      }
      if (data.hasOwnProperty('latestVersionId')) {
        obj.setLatestVersionId(data.latestVersionId);
      }
      if (data.hasOwnProperty('locale')) {
        obj.setLocale(data.locale);
      }
      if (data.hasOwnProperty('message')) {
        obj.setMessage(data.message);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('participantSetInfos')) {
        obj.setParticipantSetInfos(ApiClient.convertToType(data.participantSetInfos,[WidgetParticipantSetInfo]));
      }
      if (data.hasOwnProperty('securityOptions')) {
        obj.setSecurityOptions(data.securityOptions);
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
   * Allowed values for the <code>securityOptions</code> property.
   * @enum {String}
   * @readonly
   */
WidgetInfo.SecurityOptionsEnum = {
  
  
    /**
     * value: OPEN_PROTECTED
     * @const
     */
    OPEN_PROTECTED: "OPEN_PROTECTED",
    
  
    /**
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };
  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
WidgetInfo.StatusEnum = {
  
  
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

  return WidgetInfo;
}));


