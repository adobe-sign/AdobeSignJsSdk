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
 */
(function (factory) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../utils/TestData'), require('../../utils/ReminderUtils'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, ReminderUtils, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Create Reminders Api.
     */
    describe('CreateRemindersApiTest', function () {

        var assert = chai.assert;
        var remindersApi = null;
        var agreementId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            remindersApi = ReminderUtils.getRemindersApi();
            AgreementUtils.getResourceId(TestData.AGREEMENT_NAME)
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });
        });

        /**
         * Test for creating a reminder through the createReminder api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCreateReminder', function (done) {
            var opts = {};
            var reminderCreationInfo = ReminderUtils.getReminderCreationInfo(agreementId);
            remindersApi.createReminder(ApiUtils.getValidHeaderParams(),
                                        reminderCreationInfo,
                                        opts)
                        .then(function (reminderCreationResult) {
                            assert.isNotNull(reminderCreationResult);
                            assert.isNotNull(reminderCreationResult.getResult());
                            assert.isNotNull(reminderCreationResult.getParticipantEmailsSet());
                            done();
                        })
                        .catch(function (apiError) {
                            done(apiError);
                        });

        });

        /**
         * Test for creating a reminder through the createReminder api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var reminderCreationInfo = ReminderUtils.getReminderCreationInfo(agreementId);
            remindersApi.createReminder(ApiUtils.getNullAccessTokenHeaderParams(),
                                        reminderCreationInfo,
                                        opts)
                        .then(function (reminderCreationResult) {
                            assert.isNotNull(reminderCreationResult);
                            assert.isNotNull(reminderCreationResult.getResult());
                            assert.isNotNull(reminderCreationResult.getParticipantEmailsSet());
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating a reminder through the createReminder api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var reminderCreationInfo = ReminderUtils.getReminderCreationInfo(agreementId);
            remindersApi.createReminder(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                        reminderCreationInfo,
                                        opts)
                        .then(function (reminderCreationResult) {
                            assert.isNotNull(reminderCreationResult);
                            assert.isNotNull(reminderCreationResult.getResult());
                            assert.isNotNull(reminderCreationResult.getParticipantEmailsSet());
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating a reminder through the createReminder api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            var reminderCreationInfo = ReminderUtils.getReminderCreationInfo(agreementId);
            remindersApi.createReminder(ApiUtils.getEmptyXApiUserHeaderParams(),
                                        reminderCreationInfo,
                                        opts)
                        .then(function (reminderCreationResult) {
                            assert.isNotNull(reminderCreationResult);
                            assert.isNotNull(reminderCreationResult.getResult());
                            assert.isNotNull(reminderCreationResult.getParticipantEmailsSet());
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating a reminder through the createReminder api. Negative scenarios covered:
         * MUST_PROVIDE_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            var reminderCreationInfo = ReminderUtils.getReminderCreationInfo(TestData.NULL_PARAM);
            remindersApi.createReminder(ApiUtils.getValidHeaderParams(),
                                        reminderCreationInfo,
                                        opts)
                        .then(function (reminderCreationResult) {
                            assert.isNotNull(reminderCreationResult);
                            assert.isNotNull(reminderCreationResult.getResult());
                            assert.isNotNull(reminderCreationResult.getParticipantEmailsSet());
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.MUST_PROVIDE_AGREEMENT_ID) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating a reminder through the createReminder api. Negative scenarios covered:
         * MUST_PROVIDE_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            var opts = {};
            var reminderCreationInfo = ReminderUtils.getReminderCreationInfo(TestData.EMPTY_PARAM);
            remindersApi.createReminder(ApiUtils.getValidHeaderParams(),
                                        reminderCreationInfo,
                                        opts)
                        .then(function (reminderCreationResult) {
                            assert.isNotNull(reminderCreationResult);
                            assert.isNotNull(reminderCreationResult.getResult());
                            assert.isNotNull(reminderCreationResult.getParticipantEmailsSet());
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.MUST_PROVIDE_AGREEMENT_ID) ? done() : done(apiError);
                        });

        });

    });

}));
