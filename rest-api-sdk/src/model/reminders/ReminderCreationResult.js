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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/reminders/ParticipantEmailSetInfo'));

}(function(ApiClient, ParticipantEmailSetInfo) {
  'use strict';


  /**
   * @module model/reminders/ReminderCreationResult
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>ReminderCreationResult</code>.
   * @alias module:model/reminders/ReminderCreationResult
   * @class
   */
  var ReminderCreationResult = function() {
    var _this = this;


    _this.participantEmailsSet = undefined;

    _this.result = undefined;

   /**
    * The info of the party (participant sets) that was reminded.
    * @function getParticipantEmailsSet
    * @return  {module:model/reminders/Array} The info of the party (participant sets) that was reminded.  
    * @instance
    */
    _this.getParticipantEmailsSet = function() {
      return _this.participantEmailsSet;
    };

   /**
    * The info of the party (participant sets) that was reminded.
    * @function setParticipantEmailsSet
    * @param participantEmailsSet {module:model/reminders/Array} The info of the party (participant sets) that was reminded.
    * @instance
    */
    _this.setParticipantEmailsSet = function(participantEmailsSet) {
      _this.participantEmailsSet = participantEmailsSet;
    };

   /**
    * A status value indicating the result of the operation
    * @function getResult
    * @return  {module:model/reminders/String} A status value indicating the result of the operation  
    * @instance
    */
    _this.getResult = function() {
      return _this.result;
    };

   /**
    * A status value indicating the result of the operation
    * @function setResult
    * @param result {module:model/reminders/String} A status value indicating the result of the operation
    * @instance
    */
    _this.setResult = function(result) {
      _this.result = result;
    };

  };

  /**
   * @private
   * Constructs a <code>ReminderCreationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/reminders/ReminderCreationResult} obj Optional instance to populate.
   * @return {module:model/reminders/ReminderCreationResult} The populated <code>ReminderCreationResult</code> instance.
   */
  ReminderCreationResult.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new ReminderCreationResult();

      if (data.hasOwnProperty('participantEmailsSet')) {
        obj.setParticipantEmailsSet(ApiClient.convertToType(data.participantEmailsSet,[ParticipantEmailSetInfo]));
      }
      if (data.hasOwnProperty('result')) {
        obj.setResult(data.result);
      }
    }
    return obj;
  };


  return ReminderCreationResult;
}));


