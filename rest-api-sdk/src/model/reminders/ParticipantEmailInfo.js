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
   * @module model/reminders/ParticipantEmailInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>ParticipantEmailInfo</code>.
   * @alias module:model/reminders/ParticipantEmailInfo
   * @class
   */
  var ParticipantEmailInfo = function() {
    var _this = this;


    _this.participantEmail = undefined;

   /**
    * The email address of the user to whom the reminder was sent. This may either be the sender or the recipient of the document depending on the selected workflow, and on whose turn it was to sign. In the current release, the reminder is sent to that user that is currently expected to sign a given document
    * @function getParticipantEmail
    * @return  {module:model/reminders/String} The email address of the user to whom the reminder was sent. This may either be the sender or the recipient of the document depending on the selected workflow, and on whose turn it was to sign. In the current release, the reminder is sent to that user that is currently expected to sign a given document  
    * @instance
    */
    _this.getParticipantEmail = function() {
      return _this.participantEmail;
    };

   /**
    * The email address of the user to whom the reminder was sent. This may either be the sender or the recipient of the document depending on the selected workflow, and on whose turn it was to sign. In the current release, the reminder is sent to that user that is currently expected to sign a given document
    * @function setParticipantEmail
    * @param participantEmail {module:model/reminders/String} The email address of the user to whom the reminder was sent. This may either be the sender or the recipient of the document depending on the selected workflow, and on whose turn it was to sign. In the current release, the reminder is sent to that user that is currently expected to sign a given document
    * @instance
    */
    _this.setParticipantEmail = function(participantEmail) {
      _this.participantEmail = participantEmail;
    };

  };

  /**
   * @private
   * Constructs a <code>ParticipantEmailInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/reminders/ParticipantEmailInfo} obj Optional instance to populate.
   * @return {module:model/reminders/ParticipantEmailInfo} The populated <code>ParticipantEmailInfo</code> instance.
   */
  ParticipantEmailInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new ParticipantEmailInfo();

      if (data.hasOwnProperty('participantEmail')) {
        obj.setParticipantEmail(data.participantEmail);
      }
    }
    return obj;
  };


  return ParticipantEmailInfo;
}));


