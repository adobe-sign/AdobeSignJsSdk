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
   * @module model/megaSigns/MegaSignStatusUpdateInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MegaSignStatusUpdateInfo</code>.
   * @alias module:model/megaSigns/MegaSignStatusUpdateInfo
   * @class
   */
  var MegaSignStatusUpdateInfo = function() {
    var _this = this;


    _this.comment = undefined;

    _this.notifySigner = undefined;

    _this.value = undefined;

   /**
    * Comment describing to the recipient why you want to cancel the transaction
    * @function getComment
    * @return  {module:model/megaSigns/String} Comment describing to the recipient why you want to cancel the transaction  
    * @instance
    */
    _this.getComment = function() {
      return _this.comment;
    };

   /**
    * Comment describing to the recipient why you want to cancel the transaction
    * @function setComment
    * @param comment {module:model/megaSigns/String} Comment describing to the recipient why you want to cancel the transaction
    * @instance
    */
    _this.setComment = function(comment) {
      _this.comment = comment;
    };

   /**
    * Whether or not you would like the recipient to be notified that the transaction has been cancelled. The default value is false
    * @function getNotifySigner
    * @return  {module:model/megaSigns/Boolean} Whether or not you would like the recipient to be notified that the transaction has been cancelled. The default value is false  
    * @instance
    */
    _this.getNotifySigner = function() {
      return _this.notifySigner;
    };

   /**
    * Whether or not you would like the recipient to be notified that the transaction has been cancelled. The default value is false
    * @function setNotifySigner
    * @param notifySigner {module:model/megaSigns/Boolean} Whether or not you would like the recipient to be notified that the transaction has been cancelled. The default value is false
    * @instance
    */
    _this.setNotifySigner = function(notifySigner) {
      _this.notifySigner = notifySigner;
    };

   /**
    * The state to which the megaSign is to be updated. The only valid state for this variable is currently, CANCEL
    * @function getValue
    * @return  {module:model/megaSigns/String} The state to which the megaSign is to be updated. The only valid state for this variable is currently, CANCEL  
    * @instance
    */
    _this.getValue = function() {
      return _this.value;
    };

   /**
    * The state to which the megaSign is to be updated. The only valid state for this variable is currently, CANCEL
    * @function setValue
    * @param value {module:model/megaSigns/String} The state to which the megaSign is to be updated. The only valid state for this variable is currently, CANCEL
    * @instance
    */
    _this.setValue = function(value) {
      _this.value = value;
    };

  };

  /**
   * @private
   * Constructs a <code>MegaSignStatusUpdateInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MegaSignStatusUpdateInfo} obj Optional instance to populate.
   * @return {module:model/megaSigns/MegaSignStatusUpdateInfo} The populated <code>MegaSignStatusUpdateInfo</code> instance.
   */
  MegaSignStatusUpdateInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MegaSignStatusUpdateInfo();

      if (data.hasOwnProperty('comment')) {
        obj.setComment(data.comment);
      }
      if (data.hasOwnProperty('notifySigner')) {
        obj.setNotifySigner(data.notifySigner);
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
MegaSignStatusUpdateInfo.ValueEnum = {
  
  
    /**
     * value: CANCEL
     * @const
     */
    CANCEL: "CANCEL"
  
  
  };

  return MegaSignStatusUpdateInfo;
}));


