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
    module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'));
  
}(function(SdkErrorCodes, ApiValidatorHelper) {
  'use strict';

  var REMINDER_CREATION_INFO = "reminderCreationInfo";

  /**
   * Validator for Reminders Api. The main purpose of this is to check the validity of the parameters passed 
   * to the Reminders API and throw ApiError with required error messages if the validation fails.
   */
  var RemindersApiValidator = function(){};
    
  /**
   * Validator for createReminder API that sends a reminder for an agreement.
   *
   * @param reminderCreationInfo  Information about reminder that needs to be created.
   * @param {Object}              opts Optional parameters
   * @throws ApiError
   */
  RemindersApiValidator.createReminderValidator = function(reminderCreationInfo,
                                                           opts) {
    ApiValidatorHelper.validateParameter(reminderCreationInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, REMINDER_CREATION_INFO);
    var paramList = [];
    paramList.push({param: reminderCreationInfo.getAgreementId(), sdkErrorCode: SdkErrorCodes.MUST_PROVIDE_AGREEMENT_ID});
    ApiValidatorHelper.validateParameters(paramList);
  };
  return RemindersApiValidator;
}));