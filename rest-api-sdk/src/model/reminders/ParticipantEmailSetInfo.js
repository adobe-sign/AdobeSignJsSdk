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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/reminders/ParticipantEmailInfo'));

}(function(ApiClient, ParticipantEmailInfo) {
  'use strict';


  /**
   * @module model/reminders/ParticipantEmailSetInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>ParticipantEmailSetInfo</code>.
   * @alias module:model/reminders/ParticipantEmailSetInfo
   * @class
   */
  var ParticipantEmailSetInfo = function() {
    var _this = this;


    _this.participantEmailSetInfo = undefined;

   /**
    * The info about the members of the participant set
    * @function getParticipantEmailSetInfo
    * @return  {module:model/reminders/Array} The info about the members of the participant set  
    * @instance
    */
    _this.getParticipantEmailSetInfo = function() {
      return _this.participantEmailSetInfo;
    };

   /**
    * The info about the members of the participant set
    * @function setParticipantEmailSetInfo
    * @param participantEmailSetInfo {module:model/reminders/Array} The info about the members of the participant set
    * @instance
    */
    _this.setParticipantEmailSetInfo = function(participantEmailSetInfo) {
      _this.participantEmailSetInfo = participantEmailSetInfo;
    };

  };

  /**
   * @private
   * Constructs a <code>ParticipantEmailSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/reminders/ParticipantEmailSetInfo} obj Optional instance to populate.
   * @return {module:model/reminders/ParticipantEmailSetInfo} The populated <code>ParticipantEmailSetInfo</code> instance.
   */
  ParticipantEmailSetInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new ParticipantEmailSetInfo();

      if (data.hasOwnProperty('participantEmailSetInfo')) {
        obj.setParticipantEmailSetInfo(ApiClient.convertToType(data.participantEmailSetInfo,[ParticipantEmailInfo]));
      }
    }
    return obj;
  };


  return ParticipantEmailSetInfo;
}));


