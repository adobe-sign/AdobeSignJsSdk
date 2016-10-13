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

(function (factory) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../src/index'), require('./ApiUtils'));
    
}(function (AdobeSignSdk, ApiUtils) {
    'use strict';
    /**
     * This file contains basic utility functions which will be used by Reminders API Tests.
     */
    var ReminderUtils = function () {
    };

    var remindersApi = new AdobeSignSdk.RemindersApi(ApiUtils.getContext());
    var remindersModel = AdobeSignSdk.RemindersModel;

    ReminderUtils.getRemindersApi = function () {
        return remindersApi;
    };

    ReminderUtils.getReminderCreationInfo = function (agreementId) {
        var reminderCreationInfo = new remindersModel.ReminderCreationInfo();
        reminderCreationInfo.setAgreementId(agreementId);
        return reminderCreationInfo;
    };

    return ReminderUtils;
}));
