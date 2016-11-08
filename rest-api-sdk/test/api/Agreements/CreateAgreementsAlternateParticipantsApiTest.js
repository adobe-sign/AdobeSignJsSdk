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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Post Agreements Alternate Participants API.
     */
    describe('CreateAgreementsAlternateParticipantsApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        var participantSetId = null;
        var participantId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.createAgreement(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              return agreementsApi.getAgreementInfo(ApiUtils.getValidHeaderParams(),
                                                                    agreementId);
                          })
                          .then(function (agreementInfo) {
                              assert.isNotNull(agreementInfo);
                              assert.isNotNull(agreementInfo.getParticipantSetInfos());
                              var participantInfo = agreementInfo.getParticipantSetInfos()[0];
                              participantSetId = participantInfo.getParticipantSetId();
                              assert.isNotNull(participantInfo.getParticipantSetMemberInfos());
                              participantId = participantInfo.getParticipantSetMemberInfos()[0].getParticipantId();
                              done();

                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api.
         *
         * @throws ApiError
         */
        it('testCreateAlternateParticipant', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAlternateParticipantInfo(ApiUtils.getUserEmail(),
                                                                        TestData.PRIVATE_MESSAGE);
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     updateInfo,
                                                     agreementId,
                                                     participantSetId,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         })

        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.createAlternateParticipant(ApiUtils.getNullAccessTokenHeaderParams(),
                                                     TestData.NULL_PARAM,
                                                     agreementId,
                                                     participantSetId,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.createAlternateParticipant(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                     TestData.NULL_PARAM,
                                                     agreementId,
                                                     participantSetId,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.createAlternateParticipant(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                     TestData.NULL_PARAM,
                                                     agreementId,
                                                     participantSetId,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     TestData.NULL_PARAM,
                                                     TestData.NULL_PARAM,
                                                     participantSetId,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementId', function (done) {
            var opts = {};
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     TestData.NULL_PARAM,
                                                     TestData.EMPTY_PARAM,
                                                     participantSetId,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * INVALID_PARTICIPANT_ID: null participantId.
         *
         * @throws ApiError
         */
        it('testNullParticipantId', function (done) {
            var opts = {};
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     TestData.NULL_PARAM,
                                                     agreementId,
                                                     participantSetId,
                                                     TestData.NULL_PARAM,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT_ID) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * INVALID_PARTICIPANT_ID: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantId', function (done) {
            var opts = {};
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     TestData.NULL_PARAM,
                                                     agreementId,
                                                     participantSetId,
                                                     TestData.EMPTY_PARAM,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT_ID) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * INVALID_PARTICIPANT_SET_ID: null participantSetId.
         *
         * @throws ApiError
         */
        it('testNullParticipantSetId', function (done) {
            var opts = {};
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     TestData.NULL_PARAM,
                                                     agreementId,
                                                     TestData.NULL_PARAM,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT_SET_ID) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * INVALID_PARTICIPANT_SET_ID: empty participantSetId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantSetId', function (done) {
            var opts = {};
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     TestData.NULL_PARAM,
                                                     agreementId,
                                                     TestData.EMPTY_PARAM,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT_SET_ID) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null email.
         *
         * @throws ApiError
         */
        it('testInvalidAlternateParticipantInfoWithNullEmail', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAlternateParticipantInfo(TestData.NULL_PARAM,
                                                                        TestData.PRIVATE_MESSAGE);
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     updateInfo,
                                                     agreementId,
                                                     participantSetId,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                         })

        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * INVALID_EMAIL: invalid email.
         *
         * @throws ApiError
         */
        it('testInvalidAlternateParticipantInfoWithInvalidEmail', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAlternateParticipantInfo(TestData.INVALID_EMAIL,
                                                                        TestData.PRIVATE_MESSAGE);
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     updateInfo,
                                                     agreementId,
                                                     participantSetId,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                         })

        });

        /**
         * Test for creating an alternate participant set through the createAlternateParticipant api. Negative scenarios covered:
         * EMPTY_PRIVATE_MESSAGE: empty message in AlternateParticipantInfo
         *
         * @throws ApiError
         */
        it('testInvalidAlternateParticipantInfoWithInvalidPrivateMessage', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAlternateParticipantInfo(TestData.POST_EMAIL,
                                                                        TestData.EMPTY_PARAM);
            agreementsApi.createAlternateParticipant(ApiUtils.getValidHeaderParams(),
                                                     updateInfo,
                                                     agreementId,
                                                     participantSetId,
                                                     participantId,
                                                     opts)
                         .then(function (alternateParticipantResponse) {
                             assert.isNotNull(alternateParticipantResponse);
                             assert.isNotNull(alternateParticipantResponse.getParticipantId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.EMPTY_PRIVATE_MESSAGE) ? done() : done(apiError);
                         })

        });

    });

}));
