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
   * @module model/reminders/ReminderCreationInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>ReminderCreationInfo</code>.
   * @alias module:model/reminders/ReminderCreationInfo
   * @class
   */
  var ReminderCreationInfo = function() {
    var _this = this;


    _this.agreementId = undefined;

    _this.comment = undefined;

   /**
    * The agreement identifier
    * @function getAgreementId
    * @return  {module:model/reminders/String} The agreement identifier  
    * @instance
    */
    _this.getAgreementId = function() {
      return _this.agreementId;
    };

   /**
    * The agreement identifier
    * @function setAgreementId
    * @param agreementId {module:model/reminders/String} The agreement identifier
    * @instance
    */
    _this.setAgreementId = function(agreementId) {
      _this.agreementId = agreementId;
    };

   /**
    * An optional message sent to the recipients, describing what is being sent and why their signatures are required.
    * @function getComment
    * @return  {module:model/reminders/String} An optional message sent to the recipients, describing what is being sent and why their signatures are required.  
    * @instance
    */
    _this.getComment = function() {
      return _this.comment;
    };

   /**
    * An optional message sent to the recipients, describing what is being sent and why their signatures are required.
    * @function setComment
    * @param comment {module:model/reminders/String} An optional message sent to the recipients, describing what is being sent and why their signatures are required.
    * @instance
    */
    _this.setComment = function(comment) {
      _this.comment = comment;
    };

  };

  /**
   * @private
   * Constructs a <code>ReminderCreationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/reminders/ReminderCreationInfo} obj Optional instance to populate.
   * @return {module:model/reminders/ReminderCreationInfo} The populated <code>ReminderCreationInfo</code> instance.
   */
  ReminderCreationInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new ReminderCreationInfo();

      if (data.hasOwnProperty('agreementId')) {
        obj.setAgreementId(data.agreementId);
      }
      if (data.hasOwnProperty('comment')) {
        obj.setComment(data.comment);
      }
    }
    return obj;
  };


  return ReminderCreationInfo;
}));


