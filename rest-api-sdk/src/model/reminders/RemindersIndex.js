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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/reminders/ParticipantEmailInfo'), require('../../model/reminders/ParticipantEmailSetInfo'), require('../../model/reminders/ReminderCreationInfo'), require('../../model/reminders/ReminderCreationResult'));

}(function(ApiClient, ParticipantEmailInfo, ParticipantEmailSetInfo, ReminderCreationInfo, ReminderCreationResult) {
  'use strict';

  /**
   * @module RemindersIndex
   * @version 1.1.0
   */
  var RemindersIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ParticipantEmailInfo model constructor.
     * @property {module:model/reminders/ParticipantEmailInfo}
     */
    ParticipantEmailInfo: ParticipantEmailInfo,
    /**
     * The ParticipantEmailSetInfo model constructor.
     * @property {module:model/reminders/ParticipantEmailSetInfo}
     */
    ParticipantEmailSetInfo: ParticipantEmailSetInfo,
    /**
     * The ReminderCreationInfo model constructor.
     * @property {module:model/reminders/ReminderCreationInfo}
     */
    ReminderCreationInfo: ReminderCreationInfo,
    /**
     * The ReminderCreationResult model constructor.
     * @property {module:model/reminders/ReminderCreationResult}
     */
    ReminderCreationResult: ReminderCreationResult
  };

  return RemindersIndex ;
}));
