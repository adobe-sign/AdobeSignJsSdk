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

(function(root, factory) {
  // Browser globals (root is window)
  if (!root.AdobeSignSdk) {
    root.AdobeSignSdk = {};
  }
  root.AdobeSignSdk.ReminderUtils = factory(root.AdobeSignSdk, root.AdobeSignSdk.AgreementUtils, root.AdobeSignSdk.Errors, root.AdobeSignSdk.ApiUtils);

}(this, function(AdobeSignSdk, AgreementUtils, Errors, ApiUtils) {
  'use strict';

  var ReminderUtils = function(){};

  var remindersApi = new AdobeSignSdk.RemindersApi(ApiUtils.getContext());
  var remindersModel = AdobeSignSdk.RemindersModel;
  var headers = ApiUtils.getHeaderParams();

  /**
   * Sends reminders to active participants of an agreement if any of them is taking too long to sign.
   *
   * @param agreementId id of the agreement.
   * @throws Error
   */
  ReminderUtils.sendRemindersForAgreement = function (agreementId) {

    //Get the current system date.
    var now = new Date();

    //Get list of NextParticipantSet
    AgreementUtils.getAgreementInfo(agreementId)
                  .then(function(agreementInfo) {
                    var nextParticipantSetInfoList = agreementInfo.getNextParticipantSetInfos();
                    if (nextParticipantSetInfoList == null)
                      return;

                    var promises = [];
                    // For each next active participant, check if her waiting time exceeds the limit and if so send a reminder.
                    for (var i = 0; i < nextParticipantSetInfoList.length; i++) {
                      var nextParticipantSetInfo = nextParticipantSetInfoList[i];
                      if (ReminderUtils.hasWaitingTimeExceededLimit(nextParticipantSetInfo, now)) {

                        // Time limit exceeded. Send a reminder to all active participants of the agreement.
                        promises.push(ReminderUtils.createReminder(agreementId)
                                                   .then(function(reminderCreationResult) {

                                                     //Display agreement name and result of the operation.
                                                     ApiUtils.info("Sent a reminder to the next participant in line to sign the agreement '" + agreementInfo.getName()
                                                             + "'. Result: " + reminderCreationResult.getResult() + ".");
                                                   }));
                      }
                    }
                    return Promise.all(promises);
                  })
                  .catch(function(apiError) {
                    ApiUtils.logAndThrowError(Errors.SEND_REMINDER, apiError);
                  });

  };

  /**
   * Checks whether an agreement participant has taken too long to sign the agreement.
   *
   * @param nextParticipantSetInfo information about the next participant.
   * @param now Current time.
   * @return True if the participant is taking too long.
   */
  ReminderUtils.hasWaitingTimeExceededLimit = function(nextParticipantSetInfo,
                                                       now) {
    //Get the first participant from the next participant set.
    var nextParticipant = nextParticipantSetInfo.getNextParticipantSetMemberInfos()[0];

    //Check how long this participant has been next in line but idle.
    var waitingSince = nextParticipant.getWaitingSince();

    //Check if waiting time exceeds given limit
    var timeExceeded = ((now.getTime() - (new Date(waitingSince)).getTime()) >= ApiUtils.getWaitingTimeLimit());
    return timeExceeded;

  };

  /**
   * Sends a reminder for an agreement.
   * @param agreementId Id of the agreement.
   * @return ReminderCreationResult
   */
  ReminderUtils.createReminder = function(agreementId) {
    var reminderCreationInfo = new remindersModel.ReminderCreationInfo();
    reminderCreationInfo.setAgreementId(agreementId);
    return remindersApi.createReminder(headers,
                                       reminderCreationInfo)
                       .then(function(reminderCreationResult) {
                         return reminderCreationResult;
                       })
                       .catch(function(apiError) {
                         ApiUtils.logAndThrowError(Errors.SEND_REMINDER, apiError);
                       });

  };

  return ReminderUtils;
}));
