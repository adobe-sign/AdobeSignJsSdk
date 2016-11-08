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
    module.exports = factory(require('adobe-sign-sdk'), require('../utils/ReminderUtils'), require('../utils/AgreementUtils'), require('../utils/Constants'), require('../utils/Errors'), require('../utils/ApiUtils'));
  
}(function(AdobeSignSdk, ReminderUtils, AgreementUtils, Constants, Errors, ApiUtils) {
  'use strict';

  /**
   * This sample client demonstrates how to send reminders to active participants (those who are next in line in the signing process) of
   * various agreements. It retrieves all agreements of the current user, checks which agreements are out for signature, and if any of
   * them has a participant that has not signed for longer than a specified amount of time. If the time limit has been crossed, all active
   * participants of that agreement are sent a reminder email.
   *
   * <p>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function SendReminderOnPendingAgreements() {

    /**
     * Entry point for this sample client program.
     */
    var agreementsModel = AdobeSignSdk.AgreementsModel;

    ApiUtils.configureProperty(SendReminderOnPendingAgreements.name);

    // Set the number of agreements for which reminders are to be sent.
    var agreementCountLimit = Constants.AGREEMENT_COUNT_LIMIT;

    //Make API call to get all the agreements of a user.
    AgreementUtils.getAllAgreements()
                  .then(function(userAgreements) {

                    //Get list of all the agreements.
                    var userAgreementList = userAgreements.getUserAgreementList();

                    var promises = [];
                    for (var i = 0; i < userAgreementList.length; i++) {
                      var userAgreement = userAgreementList[i];
                      if (agreementCountLimit == 0)
                        break;
                      if (userAgreement.getStatus() === (agreementsModel.UserAgreement.StatusEnum.OUT_FOR_SIGNATURE)) {

                        //Send reminders for all the agreements which are out for signature.
                        promises.push(ReminderUtils.sendRemindersForAgreement(userAgreement.getAgreementId()));
                        agreementCountLimit--;
                      }
                    }
                    return Promise.all(promises);
                  })
                  .catch(function(apiError) {
                    ApiUtils.logError(Errors.SEND_REMINDER_PENDING_AGREEMENT, apiError);
                  });
  })();

}));

