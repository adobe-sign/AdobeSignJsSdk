(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
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

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],2:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, LibraryDocumentUtils, TransientDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for  Post Agreements API.
     */
    describe('CreateAgreementsApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementsModel = AdobeSignSdk.AgreementsModel;
        var libraryDocumentId = null;
        var transientDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            Promise.all([LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME),
                            TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)])
                   .then(function (ids) {
                       libraryDocumentId = ids[0];
                       transientDocumentId = ids[1];
                       done();
                   })
                   .catch(function (apiError) {
                       done(apiError);
                   });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testCreateAgreement', function (done) {
            var opts = {};
            AgreementUtils.getAgreementCreationInfo(ApiUtils.getAgreementName())
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts);

                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            AgreementUtils.getAgreementCreationInfo(ApiUtils.getAgreementName())
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getNullAccessTokenHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts);

                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            AgreementUtils.getAgreementCreationInfo(ApiUtils.getAgreementName())
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts);

                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            AgreementUtils.getAgreementCreationInfo(ApiUtils.getAgreementName())
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts);

                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                          })

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with all 4 parameters null
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithInvalidFileInfo', function (done) {
            var opts = {};
            var fileInfo = new agreementsModel.FileInfo();
            var agreementCreationInfo = AgreementUtils.getAgreementCreationInfoWithFileInfo(ApiUtils.getAgreementName(),
                                                                                            fileInfo);
            agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                          agreementCreationInfo,
                                          opts)
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             assert.isNotNull(agreementCreationResponse.getAgreementId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                         })

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * URL_INVALID: Invalid url specified in FileInfo's getDocumentUrl parameter.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithUrlInvalid', function (done) {
            var opts = {};
            var fileInfo = new agreementsModel.FileInfo();
            var urlInfo = new agreementsModel.URLFileInfo();
            urlInfo.url = TestData.INVALID_URL;
            fileInfo.documentURL = urlInfo;
            var updateInfo = AgreementUtils.getAgreementStatusUpdateInfo(agreementsModel.AgreementStatusUpdateInfo.ValueEnum.CANCEL);

            var agreementCreationInfo = AgreementUtils.getAgreementCreationInfoWithFileInfo(ApiUtils.getAgreementName(),
                                                                                            fileInfo);
            agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                          agreementCreationInfo,
                                          opts)
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             assert.isNotNull(agreementCreationResponse.getAgreementId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.URL_INVALID) ? done() : done(apiError);
                         })

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null  documentUrl in documentCreationInfo
         *
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithNullDocumentUrl', function (done) {
            var opts = {};
            var fileInfo = new agreementsModel.FileInfo();
            fileInfo.libraryDocumentId = libraryDocumentId;
            fileInfo.transientDocumentId = transientDocumentId;
            fileInfo.documentURL = TestData.NULL_PARAM;

            var agreementCreationInfo = AgreementUtils.getAgreementCreationInfoWithFileInfo(ApiUtils.getAgreementName(),
                                                                                            fileInfo);
            agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                          agreementCreationInfo,
                                          opts)
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             assert.isNotNull(agreementCreationResponse.getAgreementId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                         })

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: Name null in documentCreationInfo;
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithNullNameInDocumentCreationInfo', function (done) {
            var opts = {};
            var fileInfo = new agreementsModel.FileInfo();
            fileInfo.libraryDocumentId = libraryDocumentId;
            fileInfo.transientDocumentId = TestData.NULL_PARAM;
            fileInfo.documentURL = TestData.NULL_PARAM;

            var agreementCreationInfo = AgreementUtils.getAgreementCreationInfoWithFileInfo(TestData.NULL_PARAM,
                                                                                            fileInfo);
            agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                          agreementCreationInfo,
                                          opts)
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             assert.isNotNull(agreementCreationResponse.getAgreementId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                         })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * EMPTY_REDIRECT_URL: Redirect url set to empty in PostSignOptions, if specified.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithEmptyRedirectUrl', function (done) {
            var opts = {};
            var options = new agreementsModel.PostSignOptions();
            options.redirectUrl = TestData.EMPTY_PARAM;
            AgreementUtils.getAgreementCreationInfoWithPostSignOptions(ApiUtils.getAgreementName(),
                                                                       options)
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts)
                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.EMPTY_REDIRECT_URL) ? done() : done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_REDIRECT_URL: Invalid url specified in PostSignOption.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithInvalidRedirectUrl', function (done) {
            var opts = {};
            var options = new agreementsModel.PostSignOptions();
            options.redirectUrl = TestData.INVALID_URL;
            AgreementUtils.getAgreementCreationInfoWithPostSignOptions(ApiUtils.getAgreementName(),
                                                                       options)
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts)
                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.INVALID_REDIRECT_URL) ? done() : done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_REDIRECT_DELAY: Negative redirect delay set in PostSignOptions.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithInvalidRedirectDelay', function (done) {
            var opts = {};
            var options = new agreementsModel.PostSignOptions();
            options.redirectUrl = TestData.REDIRECT_URL;
            options.redirectDelay = TestData.INVALID_REDIRECT_DELAY;
            AgreementUtils.getAgreementCreationInfoWithPostSignOptions(ApiUtils.getAgreementName(),
                                                                       options)
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts);
                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.INVALID_REDIRECT_DELAY) ? done() : done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM:RecipientSetRole set to null;
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithNullRecipientSetRole', function (done) {
            var opts = {};
            AgreementUtils.getAgreementCreationInfoWithRecipientInfo(TestData.POST_EMAIL,
                                                                     TestData.NULL_PARAM,
                                                                     TestData.NULL_PARAM,
                                                                     ApiUtils.getAgreementName())
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts)
                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM:null fax and null email specified in RecipientInfo.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithNullEmailAndNullFax', function (done) {
            var opts = {};
            AgreementUtils.getAgreementCreationInfoWithRecipientInfo(TestData.NULL_PARAM,
                                                                     TestData.NULL_PARAM,
                                                                     agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                                     ApiUtils.getAgreementName())
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts)
                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_EMAIL: Wrong email set in recipientInfo.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithInvalidEmailInRecipientSetRole', function (done) {
            var opts = {};
            AgreementUtils.getAgreementCreationInfoWithRecipientInfo(TestData.INVALID_EMAIL,
                                                                     TestData.NULL_PARAM,
                                                                     agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                                     ApiUtils.getAgreementName())
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts);
                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_ARGUMENTS: Both email and fax specified in RecipientInfo.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithValidEmailAndValidFax', function (done) {
            var opts = {};
            AgreementUtils.getAgreementCreationInfoWithRecipientInfo(TestData.POST_EMAIL,
                                                                     TestData.POST_FAX,
                                                                     agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                                     ApiUtils.getAgreementName())
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                   agreementCreationInfo,
                                                                   opts)
                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.INVALID_ARGUMENTS) ? done() : done(apiError);
                          })
        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM:Signature type set to null.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementCreationInfoWithNullSignatureType', function (done) {
            var opts = {};
            AgreementUtils.getAgreementCreationInfoWithSignatureType(TestData.NULL_PARAM,
                                                                     ApiUtils.getAgreementName())
                          .then(function (agreementCreationInfo) {
                              return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                   agreementCreationInfo)
                          })
                          .then(function (agreementCreationResponse) {
                              assert.isNotNull(agreementCreationResponse);
                              assert.isNotNull(agreementCreationResponse.getAgreementId());
                              done();
                          })
                          .catch(function (apiError) {
                              StringUtil.assertEqual(apiError,
                                                     SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                          })
        });


    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/TransientDocumentUtils":82}],3:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Delete Agreement API.
     */
    describe('DeleteAgreementApiTest', function () {

        var agreementsApi = null;
        var agreementId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.createAgreement(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for deleting an agreement through the deleteAgreement api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testDeleteAgreement', function (done) {
            var opts = {};
            agreementsApi.deleteAgreement(ApiUtils.getValidHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         })
        });

        /**
         * Test for retrieving the base uri to access other APIs throughthe deleteAgreement api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.deleteAgreement(ApiUtils.getNullAccessTokenHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         })
        });

        /**
         * Test for retrieving the base uri to access other APIs the deleteAgreement api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.deleteAgreement(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         })
        });

        /**
         * Test for retrieving the details of a workflow through the deleteAgreement api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.deleteAgreement(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         })

        });

        /**
         * Test for deleting an agreement through the deleteAgreement api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.deleteAgreement(ApiUtils.getValidHeaderParams(),
                                          TestData.NULL_PARAM,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

        /**
         * Test for deleting an agreement through the deleteAgreement api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            var opts = {};
            agreementsApi.deleteAgreement(ApiUtils.getValidHeaderParams(),
                                          TestData.EMPTY_PARAM,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],4:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Delete Agreement Documents Api.
     */
    describe('DeleteAgreementDocumentsApiTest', function () {

        var agreementsApi = null;
        var agreementId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();

                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testDeleteDocuments', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getValidHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getNullAccessTokenHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          TestData.NULL_PARAM,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          TestData.EMPTY_PARAM,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });


    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],5:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Agreement Audit API.
     */
    describe('GetAgreementAuditApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
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
         * Test for fetching  fetching an agreement's audit trail through the getAuditTrail api.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testGetAuditTrail', function (done) {
            var opts = {};
            agreementsApi.getAuditTrail(ApiUtils.getValidHeaderParams(),
                                        agreementId,
                                        opts)
                         .then(function (audit) {
                             assert.isNotNull(audit);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         })
        });

        /**
         * Test for fetching an agreement's audit trail through the getAuditTrail api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.getAuditTrail(ApiUtils.getNullAccessTokenHeaderParams(),
                                        agreementId,
                                        opts)
                         .then(function (audit) {
                             assert.isNotNull(audit);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         })
        });

        /**
         * Test for fetching an agreement's audit trail through the getAuditTrail api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.getAuditTrail(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                        agreementId,
                                        opts)
                         .then(function (audit) {
                             assert.isNotNull(audit);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         })
        });

        /**
         *  Test for fetching an agreement's audit trail through the getAuditTrail api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.getAuditTrail(ApiUtils.getEmptyXApiUserHeaderParams(),
                                        agreementId,
                                        opts)
                         .then(function (audit) {
                             assert.isNotNull(audit);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         })

        });

        /**
         * Test for fetching an agreement's audit trail through the getAuditTrail api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.getAuditTrail(ApiUtils.getValidHeaderParams(),
                                        TestData.NULL_PARAM,
                                        opts)
                         .then(function (audit) {
                             assert.isNotNull(audit);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

        /**
         * Test for fetching an agreement's audit trail through the getAuditTrail api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            var opts = {};
            agreementsApi.getAuditTrail(ApiUtils.getValidHeaderParams(),
                                        TestData.EMPTY_PARAM,
                                        opts)
                         .then(function (audit) {
                             assert.isNotNull(audit);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],6:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Agreement Combined Document Pages Info API.
     */
    describe('GetAgreementCombinedDocPagesInfoApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();

                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetCombinedDocumentPagesInfo', function (done) {
            agreementsApi.getCombinedDocumentPagesInfo(ApiUtils.getValidHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForCombinedDocPagesInfo(TestData.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO))
                         .then(function (combinedDocumentPagesInfo) {
                             assert.isNotNull(combinedDocumentPagesInfo);
                             assert.isNotNull(combinedDocumentPagesInfo.getDocumentPagesInfo());
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            agreementsApi.getCombinedDocumentPagesInfo(ApiUtils.getNullAccessTokenHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForCombinedDocPagesInfo(TestData.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO))
                         .then(function (combinedDocumentPagesInfoPagesInfo) {
                             assert.isNotNull(combinedDocumentPagesInfoPagesInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            agreementsApi.getCombinedDocumentPagesInfo(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForCombinedDocPagesInfo(TestData.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO))
                         .then(function (combinedDocumentPagesInfoPagesInfo) {
                             assert.isNotNull(combinedDocumentPagesInfoPagesInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            agreementsApi.getCombinedDocumentPagesInfo(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForCombinedDocPagesInfo(TestData.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO))
                         .then(function (combinedDocumentPagesInfoPagesInfo) {
                             assert.isNotNull(combinedDocumentPagesInfoPagesInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            agreementsApi.getCombinedDocumentPagesInfo(ApiUtils.getValidHeaderParams(),
                                                       TestData.NULL_PARAM,
                                                       AgreementUtils.getOptsForCombinedDocPagesInfo(TestData.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO))
                         .then(function (combinedDocumentPagesInfoPagesInfo) {
                             assert.isNotNull(combinedDocumentPagesInfoPagesInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getCombinedDocument(ApiUtils.getValidHeaderParams(),
                                              TestData.EMPTY_PARAM,
                                              AgreementUtils.getOptsForCombinedDocPagesInfo(TestData.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO))
                         .then(function (combinedDocumentPagesInfoPagesInfo) {
                             assert.isNotNull(combinedDocumentPagesInfoPagesInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],7:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Agreement Combined Document Url API.
     */
    describe('GetAgreementCombinedDocUrlApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        var documentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });


        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetCombinedDocumentUrl', function (done) {

            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getNullAccessTokenHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl . Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 TestData.NULL_PARAM,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 TestData.EMPTY_PARAM,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl. Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.EMPTY_PARAM,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl. Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.EMPTY_PARAM,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],8:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Agreement Combined Document API.
     */
    describe('GetAgreementCombinedDocumentApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();

                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for fetching a single combined PDF document for the documents associated with an agreement through the getCombinedDocument.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetCombinedDocument', function (done) {
            agreementsApi.getCombinedDocument(ApiUtils.getValidHeaderParams(),
                                              agreementId,
                                              AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                 TestData.AUDIT_REPORT))
                         .then(function (combinedDocument) {
                             assert.isNotNull(combinedDocument);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching a single combined PDF document for the documents associated with an agreement through the getCombinedDocument. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            agreementsApi.getCombinedDocument(ApiUtils.getNullAccessTokenHeaderParams(),
                                              agreementId,
                                              AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                 TestData.AUDIT_REPORT))
                         .then(function (combinedDocument) {
                             assert.isNotNull(combinedDocument);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching a single combined PDF document for the documents associated with an agreement through the getCombinedDocument. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            agreementsApi.getCombinedDocument(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                              agreementId,
                                              AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                 TestData.AUDIT_REPORT))
                         .then(function (combinedDocument) {
                             assert.isNotNull(combinedDocument);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching a single combined PDF document for the documents associated with an agreement through the getCombinedDocument. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            agreementsApi.getCombinedDocument(ApiUtils.getEmptyXApiUserHeaderParams(),
                                              agreementId,
                                              AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                 TestData.AUDIT_REPORT))
                         .then(function (combinedDocument) {
                             assert.isNotNull(combinedDocument);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching a single combined PDF document for the documents associated with an agreement through the getCombinedDocument. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            agreementsApi.getCombinedDocument(ApiUtils.getValidHeaderParams(),
                                              TestData.NULL_PARAM,
                                              AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                 TestData.AUDIT_REPORT))
                         .then(function (combinedDocument) {
                             assert.isNotNull(combinedDocument);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching a single combined PDF document for the documents associated with an agreement through the getCombinedDocument. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getCombinedDocument(ApiUtils.getValidHeaderParams(),
                                              TestData.EMPTY_PARAM,
                                              AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                 TestData.AUDIT_REPORT))
                         .then(function (combinedDocument) {
                             assert.isNotNull(combinedDocument);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching a single combined PDF document for the documents associated with an agreement through the getCombinedDocument. Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            agreementsApi.getCombinedDocument(ApiUtils.getValidHeaderParams(),
                                              agreementId,
                                              AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.EMPTY_PARAM,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                 TestData.AUDIT_REPORT))
                         .then(function (combinedDocument) {
                             assert.isNotNull(combinedDocument);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching a single combined PDF document for the documents associated with an agreement through the getCombinedDocument. Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            agreementsApi.getCombinedDocument(ApiUtils.getValidHeaderParams(),
                                              agreementId,
                                              AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                 TestData.EMPTY_PARAM,
                                                                                                 TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                 TestData.AUDIT_REPORT))
                         .then(function (combinedDocument) {
                             assert.isNotNull(combinedDocument);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],9:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Agreement Document Image Url API.
     */
    describe('GetAgreementDocumentImageUrlsApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        var documentId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              return AgreementUtils.getFirstDocumentId(agreementId);
                          })
                          .then(function (documentIdResponse) {
                              documentId = documentIdResponse;
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testDocumentImageUrls', function (done) {

            agreementsApi.getDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                               agreementId,
                                               documentId,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                         TestData.PARTICIPANT_EMAIL,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             assert.isNotNull(documentImageUrl.getImageUrls());
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls . Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {

            agreementsApi.getDocumentImageUrls(ApiUtils.getNullAccessTokenHeaderParams(),
                                               agreementId,
                                               documentId,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                         TestData.PARTICIPANT_EMAIL,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            agreementsApi.getDocumentImageUrls(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                               agreementId,
                                               documentId,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                         TestData.PARTICIPANT_EMAIL,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls . Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            agreementsApi.getDocumentImageUrls(ApiUtils.getEmptyXApiUserHeaderParams(),
                                               agreementId,
                                               documentId,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                         TestData.PARTICIPANT_EMAIL,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls . Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            agreementsApi.getDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                               TestData.NULL_PARAM,
                                               documentId,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                         TestData.PARTICIPANT_EMAIL,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls . Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                               TestData.EMPTY_PARAM,
                                               documentId,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                         TestData.PARTICIPANT_EMAIL,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });


        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls . Negative scenarios covered:
         * INVALID_DOCUMENT_ID: null documentId.
         *
         * @throws ApiError
         */
        it('testNullDocumentId', function (done) {
            agreementsApi.getDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                               agreementId,
                                               TestData.NULL_PARAM,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                         TestData.PARTICIPANT_EMAIL,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls . Negative scenarios covered:
         * INVALID_DOCUMENT_ID: empty documentId.
         *
         * @throws ApiError
         */
        it('testEmptyDocumentId', function (done) {
            agreementsApi.getDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                               agreementId,
                                               TestData.EMPTY_PARAM,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                         TestData.PARTICIPANT_EMAIL,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls . Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            agreementsApi.getDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                               agreementId,
                                               documentId,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.EMPTY_PARAM,
                                                                                         TestData.PARTICIPANT_EMAIL,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls . Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            agreementsApi.getDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                               agreementId,
                                               documentId,
                                               AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                         TestData.EMPTY_PARAM,
                                                                                         TestData.IMAGE_SIZE,
                                                                                         TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                         TestData.START_PAGE,
                                                                                         TestData.END_PAGE))
                         .then(function (documentImageUrl) {
                             assert.isNotNull(documentImageUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],10:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Agreement Document Info API.
     */
    describe('GetAgreementDocumentInfoApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        var documentId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              return AgreementUtils.getFirstDocumentId(agreementId);
                          })
                          .then(function (documentIdResponse) {
                              documentId = documentIdResponse;
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });
        });

        /**
         * Test for fetching document file stream through the getDocument.
         *  Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testDocument', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      agreementId,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            agreementsApi.getDocument(ApiUtils.getNullAccessTokenHeaderParams(),
                                      agreementId,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            agreementsApi.getDocument(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                      agreementId,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            agreementsApi.getDocument(ApiUtils.getEmptyXApiUserHeaderParams(),
                                      agreementId,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      TestData.NULL_PARAM,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      TestData.EMPTY_PARAM,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });


        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls endpoint. Negative scenarios covered:
         * INVALID_DOCUMENT_ID: null documentId.
         *
         * @throws ApiError
         */
        it('testNullDocumentId', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      agreementId,
                                      TestData.NULL_PARAM)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls endpoint. Negative scenarios covered:
         * INVALID_DOCUMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyDocumentId', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      agreementId,
                                      TestData.EMPTY_PARAM)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],11:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for for Get Agreement Document Url API.
     */
    describe('GetAgreementDocumentUrlApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        var documentId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              return AgreementUtils.getFirstDocumentId(agreementId);
                          })
                          .then(function (documentIdResponse) {
                              documentId = documentIdResponse;
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl .
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testDocumentUrl', function (done) {

            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             assert.isNotNull(documentUrl.getUrl());
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getNullAccessTokenHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getEmptyXApiUserHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         TestData.NULL_PARAM,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         TestData.EMPTY_PARAM,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });


        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullDocumentId', function (done) {
            var opts = {};
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         TestData.NULL_PARAM,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyDocumentId', function (done) {
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         TestData.EMPTY_PARAM,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             return StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.EMPTY_PARAM,
                                                                              TestData.PARTICIPANT_EMAIL))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             return StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of given document through the getDocumentUrl. Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            agreementsApi.getDocumentUrl(ApiUtils.getValidHeaderParams(),
                                         agreementId,
                                         documentId,
                                         AgreementUtils.getOptsForDocumentUrl(TestData.VERSION_ID,
                                                                              TestData.EMPTY_PARAM))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             return StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],12:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get All Agreement Documents API.
     */
    describe('GetAgreementDocumentsApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();

                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for fetching all documents through the getAllDocuments.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetAllDocuments', function (done) {
            agreementsApi.getAllDocuments(ApiUtils.getValidHeaderParams(),
                                          agreementId,
                                          AgreementUtils.getOptsForDocuments(TestData.VERSION_ID,
                                                                             TestData.PARTICIPANT_EMAIL,
                                                                             TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT))
                         .then(function (agreementDocuments) {
                             assert.isNotNull(agreementDocuments);
                             assert.isNotNull(agreementDocuments.getDocuments());
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching all documents through the getAllDocuments endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            agreementsApi.getAllDocuments(ApiUtils.getNullAccessTokenHeaderParams(),
                                          agreementId,
                                          AgreementUtils.getOptsForDocuments(TestData.VERSION_ID,
                                                                             TestData.PARTICIPANT_EMAIL,
                                                                             TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT))
                         .then(function (agreementDocuments) {
                             assert.isNotNull(agreementDocuments);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching all documents through the getAllDocuments endpoint. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            agreementsApi.getAllDocuments(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                          agreementId,
                                          AgreementUtils.getOptsForDocuments(TestData.VERSION_ID,
                                                                             TestData.PARTICIPANT_EMAIL,
                                                                             TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT))
                         .then(function (agreementDocuments) {
                             assert.isNotNull(agreementDocuments);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching all documents through the getAllDocuments endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            agreementsApi.getAllDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          agreementId,
                                          AgreementUtils.getOptsForDocuments(TestData.VERSION_ID,
                                                                             TestData.PARTICIPANT_EMAIL,
                                                                             TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT))
                         .then(function (agreementDocuments) {
                             assert.isNotNull(agreementDocuments);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching all documents through the getAllDocuments endpoint. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            agreementsApi.getAllDocuments(ApiUtils.getValidHeaderParams(),
                                          TestData.NULL_PARAM,
                                          AgreementUtils.getOptsForDocuments(TestData.VERSION_ID,
                                                                             TestData.PARTICIPANT_EMAIL,
                                                                             TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT))
                         .then(function (agreementDocuments) {
                             assert.isNotNull(agreementDocuments);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching all documents through the getAllDocuments endpoint. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getAllDocuments(ApiUtils.getValidHeaderParams(),
                                          TestData.EMPTY_PARAM,
                                          AgreementUtils.getOptsForDocuments(TestData.VERSION_ID,
                                                                             TestData.PARTICIPANT_EMAIL,
                                                                             TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT))
                         .then(function (agreementDocuments) {
                             assert.isNotNull(agreementDocuments);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching all documents through the getAllDocuments endpoint. Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            agreementsApi.getAllDocuments(ApiUtils.getValidHeaderParams(),
                                          agreementId,
                                          AgreementUtils.getOptsForDocuments(TestData.EMPTY_PARAM,
                                                                             TestData.PARTICIPANT_EMAIL,
                                                                             TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT))
                         .then(function (agreementDocuments) {
                             assert.isNotNull(agreementDocuments);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching a single combined PDF document for the documents associated with an agreement through the getCombinedDocument endpoint. Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            agreementsApi.getAllDocuments(ApiUtils.getValidHeaderParams(),
                                          agreementId,
                                          AgreementUtils.getOptsForDocuments(TestData.VERSION_ID,
                                                                             TestData.EMPTY_PARAM,
                                                                             TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT))
                         .then(function (agreementDocuments) {
                             assert.isNotNull(agreementDocuments);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],13:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Agreement Combined Document Pages Info API.
     */
    describe('GetAgreementDocumentsImageUrlsApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();

                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for fetching ImageUrls of all the documents combined through the getCombinedDocumentImageUrls .
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCombinedDocumentImageUrls', function (done) {

            agreementsApi.getCombinedDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.IMAGE_SIZE,
                                                                                                 TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                                 TestData.START_PAGE,
                                                                                                 TestData.END_PAGE))
                         .then(function (documentImageUrls) {
                             assert.isNotNull(documentImageUrls);
                             assert.isNotNull(documentImageUrls.getDocumentsImageUrls());
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching ImageUrls of all the documents combined through the getCombinedDocumentImageUrls . Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentImageUrls(ApiUtils.getNullAccessTokenHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.IMAGE_SIZE,
                                                                                                 TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                                 TestData.START_PAGE,
                                                                                                 TestData.END_PAGE))
                         .then(function (documentImageUrls) {
                             assert.isNotNull(documentImageUrls);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching ImageUrls of all the documents combined through the getCombinedDocumentImageUrls . Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentImageUrls(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.IMAGE_SIZE,
                                                                                                 TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                                 TestData.START_PAGE,
                                                                                                 TestData.END_PAGE))
                         .then(function (documentImageUrls) {
                             assert.isNotNull(documentImageUrls);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching ImageUrls of all the documents combined through the getCombinedDocumentImageUrls . Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentImageUrls(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.IMAGE_SIZE,
                                                                                                 TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                                 TestData.START_PAGE,
                                                                                                 TestData.END_PAGE))
                         .then(function (documentImageUrls) {
                             assert.isNotNull(documentImageUrls);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching ImageUrls of all the documents combined through the getCombinedDocumentImageUrls . Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            agreementsApi.getCombinedDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                                       TestData.NULL_PARAM,
                                                       AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.IMAGE_SIZE,
                                                                                                 TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                                 TestData.START_PAGE,
                                                                                                 TestData.END_PAGE))
                         .then(function (documentImageUrls) {
                             assert.isNotNull(documentImageUrls);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching ImageUrls of all the documents combined through the getCombinedDocumentImageUrls . Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getCombinedDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                                       TestData.EMPTY_PARAM,
                                                       AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.IMAGE_SIZE,
                                                                                                 TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                                 TestData.START_PAGE,
                                                                                                 TestData.END_PAGE))
                         .then(function (documentImageUrls) {
                             assert.isNotNull(documentImageUrls);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching ImageUrls of all the documents combined through the getCombinedDocumentImageUrls . Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            agreementsApi.getCombinedDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForDocumentImageUrl(TestData.EMPTY_PARAM,
                                                                                                 TestData.PARTICIPANT_EMAIL,
                                                                                                 TestData.IMAGE_SIZE,
                                                                                                 TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                                 TestData.START_PAGE,
                                                                                                 TestData.END_PAGE))
                         .then(function (documentImageUrls) {
                             assert.isNotNull(documentImageUrls);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching ImageUrls of all the documents combined through the getCombinedDocumentImageUrls . Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            agreementsApi.getCombinedDocumentImageUrls(ApiUtils.getValidHeaderParams(),
                                                       agreementId,
                                                       AgreementUtils.getOptsForDocumentImageUrl(TestData.VERSION_ID,
                                                                                                 TestData.EMPTY_PARAM,
                                                                                                 TestData.IMAGE_SIZE,
                                                                                                 TestData.SHOW_IMAGE_AVAILIBILITY,
                                                                                                 TestData.START_PAGE,
                                                                                                 TestData.END_PAGE))
                         .then(function (documentImageUrls) {
                             assert.isNotNull(documentImageUrls);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],14:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for  Get Agreements API.
     */
    describe('GetAgreementFormDataApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
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
         * Test for fetching an agreement's form data through the getFormData api.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testgetFormData', function (done) {
            var opts = {};
            agreementsApi.getFormData(ApiUtils.getValidHeaderParams(),
                                      agreementId,
                                      opts)
                         .then(function (formData) {
                             assert.isNotNull(formData);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         })
        });

        /**
         * Test for fetching an agreement's form data through the getFormData api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.getFormData(ApiUtils.getNullAccessTokenHeaderParams(),
                                      agreementId,
                                      opts)
                         .then(function (formData) {
                             assert.isNotNull(formData);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         })
        });

        /**
         * Test for fetching an agreement's form data through the getFormData api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.getFormData(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                      agreementId,
                                      opts)
                         .then(function (formData) {
                             assert.isNotNull(formData);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         })
        });

        /**
         * Test for fetching an agreement's form data through the getFormData api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.getFormData(ApiUtils.getEmptyXApiUserHeaderParams(),
                                      agreementId,
                                      opts)
                         .then(function (formData) {
                             assert.isNotNull(formData);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         })

        });

        /**
         * Test for fetching an agreement's form data through the getFormData api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.getFormData(ApiUtils.getValidHeaderParams(),
                                      TestData.NULL_PARAM,
                                      opts)
                         .then(function (formData) {
                             assert.isNotNull(formData);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

        /**
         * Test for fetching an agreement's form data through the getFormData api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            var opts = {};
            agreementsApi.getFormData(ApiUtils.getValidHeaderParams(),
                                      TestData.EMPTY_PARAM,
                                      opts)
                         .then(function (formData) {
                             assert.isNotNull(formData);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],15:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for  Get Agreement Signing Urls API.
     */
    describe('GetAgreementInfoApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
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
         * Test for fetching the details of the given agreement through the getAgreementInfo api.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('GetAgreementInfoApiTest', function (done) {
            var opts = {};
            agreementsApi.getAgreementInfo(ApiUtils.getValidHeaderParams(),
                                           agreementId,
                                           opts)
                         .then(function (agreementInfo) {
                             assert.isNotNull(agreementInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         })
        });

        /**
         * Test for fetching the details of the given agreement through the getAgreementInfo api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.getAgreementInfo(ApiUtils.getNullAccessTokenHeaderParams(),
                                           agreementId,
                                           opts)
                         .then(function (agreementInfo) {
                             assert.isNotNull(agreementInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         })
        });

        /**
         * Test for fetching the details of the given agreement through the getAgreementInfo api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.getAgreementInfo(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                           agreementId,
                                           opts)
                         .then(function (agreementInfo) {
                             assert.isNotNull(agreementInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         })
        });

        /**
         * Test for fetching the details of the given agreement through the getAgreementInfo api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.getAgreementInfo(ApiUtils.getEmptyXApiUserHeaderParams(),
                                           agreementId,
                                           opts)
                         .then(function (agreementInfo) {
                             assert.isNotNull(agreementInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         })

        });

        /**
         * Test for fetching the details of the given agreement through the getAgreementInfo api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.getAgreementInfo(ApiUtils.getValidHeaderParams(),
                                           TestData.NULL_PARAM,
                                           opts)
                         .then(function (agreementInfo) {
                             assert.isNotNull(agreementInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

        /**
         * Test for fetching the details of the given agreement through the getAgreementInfo api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            var opts = {};
            agreementsApi.getAgreementInfo(ApiUtils.getValidHeaderParams(),
                                           TestData.EMPTY_PARAM,
                                           opts)
                         .then(function (agreementInfo) {
                             assert.isNotNull(agreementInfo);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],16:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Agreement Signing Urls API.
     */
    describe('GetAgreementSigningUrlsApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
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
         * Test for fetching an agreement's signing link through the getSigningUrl api.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testSigningUrl', function (done) {
            var opts = {};
            agreementsApi.getSigningUrl(ApiUtils.getValidHeaderParams(),
                                        agreementId,
                                        opts)
                         .then(function (signingUrlResponse) {
                             assert.isNotNull(signingUrlResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         })
        });

        /**
         *  Test for fetching an agreement's signing link through the getSigningUrl api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.getSigningUrl(ApiUtils.getNullAccessTokenHeaderParams(),
                                        agreementId,
                                        opts)
                         .then(function (signingUrlResponse) {
                             assert.isNotNull(signingUrlResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         })
        });

        /**
         * Test for fetching an agreement's signing link through the getSigningUrl api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.getSigningUrl(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                        agreementId,
                                        opts)
                         .then(function (signingUrlResponse) {
                             assert.isNotNull(signingUrlResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         })
        });

        /**
         * Test for fetching an agreement's signing link through the getSigningUrl api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.getSigningUrl(ApiUtils.getEmptyXApiUserHeaderParams(),
                                        agreementId,
                                        opts)
                         .then(function (signingUrlResponse) {
                             assert.isNotNull(signingUrlResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         })

        });

        /**
         * Test for fetching an agreement's signing link through the getSigningUrl api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.getSigningUrl(ApiUtils.getValidHeaderParams(),
                                        TestData.NULL_PARAM,
                                        opts)
                         .then(function (signingUrlResponse) {
                             assert.isNotNull(signingUrlResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

        /**
         * Test for fetching an agreement's signing link through the getSigningUrl api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            var opts = {};
            agreementsApi.getSigningUrl(ApiUtils.getValidHeaderParams(),
                                        TestData.EMPTY_PARAM,
                                        opts)
                         .then(function (signingUrlResponse) {
                             assert.isNotNull(signingUrlResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],17:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for  Get Agreements API.
     */
    describe('GetAgreementsApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            done();
        });

        /**
         * Test for fetching all user agreements through the getAgreements api.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testAgreements', function (done) {

            agreementsApi.getAgreements(ApiUtils.getValidHeaderParams(),
                                        AgreementUtils.getOptionalParams(TestData.AGREEMENT_QUERY,
                                                                         TestData.AGREEMENT_EXTERNAL_ID,
                                                                         TestData.AGREEMENT_EXTERNAL_GROUP,
                                                                         TestData.AGREEMENT_EXTERNAL_NAMESPACE))
                         .then(function (userAgreements) {
                             assert.isNotNull(userAgreements);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         })
        });

        /**
         * Test for fetching all user agreements through the getAgreements api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {

            agreementsApi.getAgreements(ApiUtils.getNullAccessTokenHeaderParams(),
                                        AgreementUtils.getOptionalParams(TestData.AGREEMENT_QUERY,
                                                                         TestData.AGREEMENT_EXTERNAL_ID,
                                                                         TestData.AGREEMENT_EXTERNAL_GROUP,
                                                                         TestData.AGREEMENT_EXTERNAL_NAMESPACE))
                         .then(function (userAgreements) {
                             assert.isNotNull(userAgreements);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         })
        });

        /**
         * Test for fetching all user agreements through the getAgreements api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {

            agreementsApi.getAgreements(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                        AgreementUtils.getOptionalParams(TestData.AGREEMENT_QUERY,
                                                                         TestData.AGREEMENT_EXTERNAL_ID,
                                                                         TestData.AGREEMENT_EXTERNAL_GROUP,
                                                                         TestData.AGREEMENT_EXTERNAL_NAMESPACE))
                         .then(function (userAgreements) {
                             assert.isNotNull(userAgreements);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         })
        });

        /**
         * Test for fetching all user agreements through the getAgreements api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {

            agreementsApi.getAgreements(ApiUtils.getEmptyXApiUserHeaderParams(),
                                        AgreementUtils.getOptionalParams(TestData.AGREEMENT_QUERY,
                                                                         TestData.AGREEMENT_EXTERNAL_ID,
                                                                         TestData.AGREEMENT_EXTERNAL_GROUP,
                                                                         TestData.AGREEMENT_EXTERNAL_NAMESPACE))
                         .then(function (userAgreements) {
                             assert.isNotNull(userAgreements);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         })

        });

        /**
         * Test for fetching all user agreements through the getAgreements api. Negative scenarios covered:
         * EMPTY_EXTERNAL_ID_PARAMETER: when externalId is empty but at least one of externalGroup or externalNamespace is non-empty.
         *
         * @throws ApiError
         */
        it('testEmptyExternalId', function (done) {

            agreementsApi.getAgreements(ApiUtils.getValidHeaderParams(),
                                        AgreementUtils.getOptionalParams(TestData.AGREEMENT_QUERY,
                                                                         TestData.EMPTY_PARAM,
                                                                         TestData.AGREEMENT_EXTERNAL_GROUP,
                                                                         TestData.AGREEMENT_EXTERNAL_NAMESPACE))
                         .then(function (userAgreements) {
                             assert.isNotNull(userAgreements);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.EMPTY_EXTERNALID_PARAMETER) ? done() : done(apiError);
                         })

        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],18:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Put Agreement Status API.
     */
    describe('UpdateAgreementStatusApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementsModel = AdobeSignSdk.AgreementsModel;
        var agreementId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.createAgreement(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         *  Test for modifying an agreement's status through the updateStatus api.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testUpdateStatus', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAgreementStatusUpdateInfo(agreementsModel.AgreementStatusUpdateInfo.ValueEnum.CANCEL);
            agreementsApi.updateStatus(ApiUtils.getValidHeaderParams(),
                                       updateInfo,
                                       agreementId,
                                       opts)
                         .then(function (agreementStatusUpdateResponse) {
                             assert.isNotNull(agreementStatusUpdateResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         })
        });

        /**
         * Test for modifying an agreement's status through the updateStatus api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAgreementStatusUpdateInfo(agreementsModel.AgreementStatusUpdateInfo.ValueEnum.CANCEL);
            agreementsApi.updateStatus(ApiUtils.getNullAccessTokenHeaderParams(),
                                       updateInfo,
                                       agreementId, opts)
                         .then(function (agreementStatusUpdateResponse) {
                             assert.isNotNull(agreementStatusUpdateResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         })
        });

        /**
         * Test for modifying an agreement's status through the updateStatus api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAgreementStatusUpdateInfo(agreementsModel.AgreementStatusUpdateInfo.ValueEnum.CANCEL);
            agreementsApi.updateStatus(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                       updateInfo,
                                       agreementId, opts)
                         .then(function (agreementStatusUpdateResponse) {
                             assert.isNotNull(agreementStatusUpdateResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         })
        });

        /**
         * Test for modifying an agreement's status through the updateStatus api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAgreementStatusUpdateInfo(agreementsModel.AgreementStatusUpdateInfo.ValueEnum.CANCEL);
            agreementsApi.updateStatus(ApiUtils.getEmptyXApiUserHeaderParams(),
                                       updateInfo,
                                       agreementId,
                                       opts)
                         .then(function (agreementStatusUpdateResponse) {
                             assert.isNotNull(agreementStatusUpdateResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         })

        });

        /**
         * Test for modifying an agreement's status through the updateStatus api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAgreementStatusUpdateInfo(agreementsModel.AgreementStatusUpdateInfo.ValueEnum.CANCEL);
            agreementsApi.updateStatus(ApiUtils.getValidHeaderParams(),
                                       updateInfo,
                                       TestData.NULL_PARAM,
                                       opts)
                         .then(function (agreementStatusUpdateResponse) {
                             assert.isNotNull(agreementStatusUpdateResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

        /**
         * Test for modifying an agreement's status through the updateStatus api. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAgreementStatusUpdateInfo(agreementsModel.AgreementStatusUpdateInfo.ValueEnum.CANCEL);
            agreementsApi.updateStatus(ApiUtils.getValidHeaderParams(),
                                       updateInfo,
                                       TestData.EMPTY_PARAM,
                                       opts)
                         .then(function (agreementStatusUpdateResponse) {
                             assert.isNotNull(agreementStatusUpdateResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         })

        });

        /**
         * Test for modifying an agreement's status through the updateStatus api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null updateInfo object.
         *
         * @throws ApiError
         */
        it('testInvalidAgreementStatus', function (done) {
            var opts = {};
            agreementsApi.updateStatus(ApiUtils.getValidHeaderParams(),
                                       TestData.NULL_PARAM,
                                       agreementId,
                                       opts)
                         .then(function (agreementStatusUpdateResponse) {
                             assert.isNotNull(agreementStatusUpdateResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                         })

        });

        /**
         * Test for modifying an agreement's status through the updateStatus api. Negative scenarios covered:
         * MUST_PROVIDE_VALID_AGREEMENT_STATUS: invalid updateInfo status.
         *
         * @throws ApiError
         */
        it('testNullAgreementStatus', function (done) {
            var opts = {};
            var updateInfo = AgreementUtils.getAgreementStatusUpdateInfo(TestData.NULL_PARAM);
            agreementsApi.updateStatus(ApiUtils.getValidHeaderParams(),
                                       updateInfo,
                                       agreementId,
                                       opts)
                         .then(function (agreementStatusUpdateResponse) {
                             assert.isNotNull(agreementStatusUpdateResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MUST_PROVIDE_VALID_AGREEMENT_STATUS) ? done() : done(apiError);
                         })
        });

    });

}));

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],19:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/BaseUriUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, BaseUriUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for GetBaseUrisApi.
     */
    describe('BaseUrisApiTest', function () {

        var assert = chai.assert;
        var baseUrisApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            baseUrisApi = BaseUriUtils.getBaseUrisApi();
            done();
        });

        /**
         * Test for getting base uris through the getBaseUris.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testGetBaseUri', function (done) {
            baseUrisApi.getBaseUris(ApiUtils.getValidHeaderParams())
                       .then(function (baseUriInfo) {
                           assert.isNotNull(baseUriInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       })
        });

        /**
         * Test for retrieving the base uri to access other APIs through the getBaseUris. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            baseUrisApi.getBaseUris(ApiUtils.getNullAccessTokenHeaderParams())
                       .then(function (baseUriInfo) {
                           assert.isNotNull(baseUriInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       })
        });

        /**
         * Test for retrieving the base uri to access other APIs through the getBaseUris. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            baseUrisApi.getBaseUris(ApiUtils.getEmptyAccessTokenHeaderParams())
                       .then(function (baseUriInfo) {
                           assert.isNotNull(baseUriInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       })
        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/BaseUriUtils":72,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],20:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/GroupUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, GroupUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Post Groups API.
     */
    describe('CreateGroupApiTest', function () {

        var assert = chai.assert;
        var groupApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            groupApi = GroupUtils.getGroupsApi();
            done();

        });

        /**
         * Test for creating group through the CreateGroupApi.
         * Case covered: Successful creation of group.
         *
         * @throws ApiError
         */
        it('testCreateGroup', function (done) {
          var opts = {};
          var groupCreationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
          groupApi.createGroup(ApiUtils.getValidHeaderParams(),
                               groupCreationInfo,
                               opts)
                  .then(function (groupCreationResponse) {
                    assert.isNotNull(groupCreationResponse);
                    assert.isNotNull(groupCreationResponse.getGroupId());
                    return groupCreationResponse.getGroupId();
                  })
                  .then(function (groupId) {
                    return  groupApi.deleteGroup(ApiUtils.getValidHeaderParams(),
                                                 groupId,
                                                 opts);
                  })
                  .then(function () {
                    done();
                  })
                  .catch(function (apiError) {
                    done(apiError);
                  });
        });

      /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.createGroup(ApiUtils.getNullAccessTokenHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.createGroup(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.createGroup(ApiUtils.getEmptyXApiUserHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null groupname.
         *
         * @throws ApiError
         */
        it('testNullGroupName', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(TestData.NULL_PARAM);
            groupApi.createGroup(ApiUtils.getValidHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_NAME) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * INVALID_GROUP_NAME: empty group name.
         *
         * @throws ApiError
         */
        it('testEmptyGroupName', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(TestData.EMPTY_PARAM);
            groupApi.createGroup(ApiUtils.getValidHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_NAME) ? done() : done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/GroupUtils":73,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],21:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/GroupUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, GroupUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Delete Group Api.
     */
    describe('testDeleteGroup', function () {

        var assert = chai.assert;
        var groupApi = null;
        var groupId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            groupApi = GroupUtils.getGroupsApi();
            GroupUtils.createGroup(ApiUtils.getGroupName())
                      .then(function (groupIdResponse) {
                          groupId = groupIdResponse;
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for deleting a group. Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testGetGroupDetails', function (done) {
            var opts = {};
            groupApi.deleteGroup(ApiUtils.getValidHeaderParams(),
                                 groupId,
                                 opts)
                    .then(function () {
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/GroupUtils":73,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],22:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/GroupUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, GroupUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Group Info API.
     */
    describe('GetGroupInfoApiTest', function () {

        var assert = chai.assert;
        var groupApi = null;
        var groupId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            groupApi = GroupUtils.getGroupsApi();
            GroupUtils.getResourceId(TestData.GROUP_NAME)
                      .then(function (groupIdResponse) {
                          groupId = groupIdResponse;
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for getting details of a group. Case covered is successful execution
         * of the API call.
         *
         * @throws ApiError
         */
        it('testGetGroupDetails', function (done) {
            var opts = {};
            groupApi.getGroupDetails(ApiUtils.getValidHeaderParams(),
                                     groupId,
                                     opts)
                    .then(function (groupDetailsInfo) {
                        assert.isNotNull(groupDetailsInfo);
                        assert.isNotNull(groupDetailsInfo.getGroupId());
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for getting details of a group. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            groupApi.getGroupDetails(ApiUtils.getNullAccessTokenHeaderParams(),
                                     groupId,
                                     opts)
                    .then(function (groupDetailsInfo) {
                        assert.isNotNull(groupDetailsInfo);
                        assert.isNotNull(groupDetailsInfo.getGroupId());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a group. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            groupApi.getGroupDetails(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                     groupId,
                                     opts)
                    .then(function (groupDetailsInfo) {
                        assert.isNotNull(groupDetailsInfo);
                        assert.isNotNull(groupDetailsInfo.getGroupId());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a group. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            groupApi.getGroupDetails(ApiUtils.getEmptyXApiUserHeaderParams(),
                                     groupId,
                                     opts)
                    .then(function (groupDetailsInfo) {
                        assert.isNotNull(groupDetailsInfo);
                        assert.isNotNull(groupDetailsInfo.getGroupId());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a group. Negative scenarios covered:
         * INVALID_GROUP_ID: null group id.
         *
         * @throws ApiError
         */
        it('testNullGroupId', function (done) {
            var opts = {};
            groupApi.getGroupDetails(ApiUtils.getValidHeaderParams(),
                                     TestData.NULL_PARAM,
                                     opts)
                    .then(function (groupDetailsInfo) {
                        assert.isNotNull(groupDetailsInfo);
                        assert.isNotNull(groupDetailsInfo.getGroupId());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_ID) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a group. Negative scenarios covered:
         * INVALID_GROUP_ID: empty group id.
         *
         * @throws ApiError
         */
        it('testInvalidGroupId', function (done) {
            var opts = {};
            groupApi.getGroupDetails(ApiUtils.getValidHeaderParams(),
                                     TestData.EMPTY_PARAM,
                                     opts)
                    .then(function (groupDetailsInfo) {
                        assert.isNotNull(groupDetailsInfo);
                        assert.isNotNull(groupDetailsInfo.getGroupId());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_ID) ? done() : done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/GroupUtils":73,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],23:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/GroupUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, GroupUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Groups API.
     */
    describe('GetUsersInGroupApiTest', function () {

        var assert = chai.assert;
        var groupApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            groupApi = GroupUtils.getGroupsApi();
            done();
        });

        /**
         * Test for getting groups in account.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testGetGroups', function (done) {
            var options = {};
            groupApi.getGroups(ApiUtils.getValidHeaderParams(),
                               options)
                    .then(function (groupsInfo) {
                        assert.isNotNull(groupsInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for getting groups in account. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var options = {};
            groupApi.getGroups(ApiUtils.getNullAccessTokenHeaderParams(),
                               options)
                    .then(function (groupsInfo) {
                        assert.isNotNull(groupsInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting groups in account. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var options = {};
            groupApi.getGroups(ApiUtils.getEmptyAccessTokenHeaderParams(),
                               options)
                    .then(function (groupsInfo) {
                        assert.isNotNull(groupsInfo);
                        done();
                    }).catch(function (apiError) {
                return StringUtil.assertEqual(apiError,
                                              SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);

            });

        });

        /**
         * Test for getting groups in account. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var options = {};
            groupApi.getGroups(ApiUtils.getEmptyXApiUserHeaderParams(),
                               options)
                    .then(function (groupsInfo) {
                        assert.isNotNull(groupsInfo);
                        done();
                    }).catch(function (apiError) {
                return StringUtil.assertEqual(apiError,
                                              SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
            });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/GroupUtils":73,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],24:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/GroupUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, GroupUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Users In Group API.
     */
    describe('GetUsersInGroupApiTest', function () {

        var assert = chai.assert;
        var groupApi = null;
        var groupId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            groupApi = GroupUtils.getGroupsApi();
            GroupUtils.getResourceId(TestData.GROUP_NAME)
                      .then(function (groupIdResponse) {
                          groupId = groupIdResponse;
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });
        });

        /**
         * Test for creating a transientDocument through the createTransientDocuments Api.
         *
         * @throws ApiError
         */

        it('testGetUsersInGroup', function (done) {
            var opts = {};
            groupApi.getUsersInGroup(ApiUtils.getValidHeaderParams(),
                                     groupId,
                                     opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (error) {
                        done(error);
                    });

        });

        /**
         * Test for getting users in a group. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            groupApi.getUsersInGroup(ApiUtils.getNullAccessTokenHeaderParams(),
                                     groupId,
                                     opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });
        });

        /**
         * Test for getting users in a group. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            groupApi.getUsersInGroup(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                     groupId,
                                     opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });
        });

        /**
         * Test for getting users in a group. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            groupApi.getUsersInGroup(ApiUtils.getEmptyXApiUserHeaderParams(),
                                     groupId,
                                     opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });
        });

        /**
         * Test for getting users in a group. Negative scenarios covered:
         * INVALID_GROUP_ID: null group id.
         *
         * @throws ApiError
         */
        it('testNullAndInvalidGroupId', function (done) {
            var opts = {};
            groupApi.getUsersInGroup(ApiUtils.getValidHeaderParams(),
                                     TestData.NULL_PARAM,
                                     opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_ID) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting users in a group. Negative scenarios covered:
         * INVALID_GROUP_ID: empty group id.
         * MISSING_REQUIRED_PARAM: null group id.
         *
         * @throws ApiError
         */
        it('testInvalidGroupId', function (done) {
            var opts = {};
            groupApi.getUsersInGroup(ApiUtils.getValidHeaderParams(),
                                     TestData.EMPTY_PARAM,
                                     opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_ID) ? done() : done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/GroupUtils":73,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],25:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/GroupUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, GroupUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     *  Mocha unit tests for Put Groups API.
     */
    describe('UpdateGroupApiTest', function () {

        var assert = chai.assert;
        var groupApi = null;
        var groupId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            groupApi = GroupUtils.getGroupsApi();
            GroupUtils.getResourceId(TestData.GROUP_NAME)
                      .then(function (groupIdResponse) {
                          groupId = groupIdResponse;
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });
        });

        /**
         * Test for updating a group. Case covered is successful execution of the
         * api call.
         *
         * @throws ApiError
         */
        it('testUpdateGroup', function (done) {
            var opts = {};
            var groupModificationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.modifyGroup(ApiUtils.getValidHeaderParams(),
                                 groupModificationInfo,
                                 groupId,
                                 opts)
                    .then(function (groupModificationResponse) {
                        assert.isNotNull(groupModificationResponse);
                        assert.isNotNull(groupModificationResponse.getGroupName());
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var groupModificationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.modifyGroup(ApiUtils.getNullAccessTokenHeaderParams(),
                                 groupModificationInfo,
                                 groupId,
                                 opts)
                    .then(function (groupModificationResponse) {
                        assert.isNotNull(groupModificationResponse);
                        assert.isNotNull(groupModificationResponse.getGroupName());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty
         * access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var groupModificationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.modifyGroup(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                 groupModificationInfo,
                                 groupId,
                                 opts)
                    .then(function (groupModificationResponse) {
                        assert.isNotNull(groupModificationResponse);
                        assert.isNotNull(groupModificationResponse.getGroupName());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            var groupModificationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.modifyGroup(ApiUtils.getEmptyXApiUserHeaderParams(),
                                 groupModificationInfo,
                                 groupId,
                                 opts)
                    .then(function (groupModificationResponse) {
                        assert.isNotNull(groupModificationResponse);
                        assert.isNotNull(groupModificationResponse.getGroupName());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null group name.
         *
         * @throws ApiError
         */
        it('testNullGroupName', function (done) {
            var opts = {};
            var groupModificationInfo = GroupUtils.getGroupCreationInfo(TestData.NULL_PARAM);
            groupApi.modifyGroup(ApiUtils.getValidHeaderParams(),
                                 groupModificationInfo,
                                 groupId,
                                 opts)
                    .then(function (groupModificationResponse) {
                        assert.isNotNull(groupModificationResponse);
                        assert.isNotNull(groupModificationResponse.getGroupName());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_NAME) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * INVALID_GROUP_NAME: empty group  name.
         *
         * @throws ApiError
         */
        it('testInvalidGroupName', function (done) {
            var opts = {};
            var groupModificationInfo = GroupUtils.getGroupCreationInfo(TestData.EMPTY_PARAM);
            groupApi.modifyGroup(ApiUtils.getValidHeaderParams(),
                                 groupModificationInfo,
                                 groupId,
                                 opts)
                    .then(function (groupModificationResponse) {
                        assert.isNotNull(groupModificationResponse);
                        assert.isNotNull(groupModificationResponse.getGroupName());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_NAME) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null group id.
         *
         * @throws ApiError
         */
        it('testInvalidGroupId', function (done) {
            var opts = {};
            var groupModificationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.modifyGroup(ApiUtils.getValidHeaderParams(),
                                 groupModificationInfo,
                                 TestData.NULL_PARAM,
                                 opts)
                    .then(function (groupModificationResponse) {
                        assert.isNotNull(groupModificationResponse);
                        assert.isNotNull(groupModificationResponse.getGroupName());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_ID) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * INVALID_GROUP_ID: empty group id.
         *
         * @throws ApiError
         */
        it('testEmptyGroupId', function (done) {
            var opts = {};
            var groupModificationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.modifyGroup(ApiUtils.getValidHeaderParams(),
                                 groupModificationInfo,
                                 TestData.EMPTY_PARAM,
                                 opts)
                    .then(function (groupModificationResponse) {
                        assert.isNotNull(groupModificationResponse);
                        assert.isNotNull(groupModificationResponse.getGroupName());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_ID) ? done() : done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/GroupUtils":73,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],26:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, LibraryDocumentUtils, TransientDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {

    'use strict';

    /**
     * Mocha unit tests for CreateLibraryDocument APIs.
     */
    describe('CreateLibraryDocumentsApiTest', function () {

        var assert = chai.assert;
        var libraryDocumentsApi = null;
        var libraryDocumentModel = AdobeSignSdk.LibraryDocumentsModel;

        var libraryDocumentId = null;
        var transientDocumentId = null;

        this.timeout(TestData.TIME_OUT);


        before(function (done) {

            ApiUtils.configureProperty();
            libraryDocumentsApi = LibraryDocumentUtils.getLibraryDocumentsApi();
            Promise.all([LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME),
                            TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)])
                   .then(function (ids) {
                       libraryDocumentId = ids[0];
                       transientDocumentId = ids[1].getTransientDocumentId();
                       done();
                   })
                   .catch(function (apiError) {
                       done(apiError);
                   });
        });


        /**
         * Test for creating a libraryDocument through the createLibraryDocument endpoint.
         *
         * Case covered is successful execution of the api call.
         * @throws ApiError
         */

        it('testCreateLibraryDocument', function (done) {
            var opts = {};
            LibraryDocumentUtils.getLibraryCreationInfo(ApiUtils.getLibraryDocumentName())
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    done(apiError);
                                });

        });

        /**
         * Test for creating a libraryDocument through the createLibraryDocument endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            LibraryDocumentUtils.getLibraryCreationInfo(ApiUtils.getLibraryDocumentName())
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getNullAccessTokenHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                                });

        });

        /**
         * Test for creating a libraryDocument through the createLibraryDocument endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            LibraryDocumentUtils.getLibraryCreationInfo(ApiUtils.getLibraryDocumentName())
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                                });

        });

        /**
         * Test for creating a libraryDocument through the createLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            LibraryDocumentUtils.getLibraryCreationInfo(ApiUtils.getLibraryDocumentName())
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                                });

        });

        /**
         * Test for creating a libraryDocument through the createLibraryDocument api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with all 4 parameters null; FileInfo with more than 1 parameter non-empty.
         *
         * @throws ApiError
         */

        it('testCreateLibraryDocumentApiWithInvalidFileInfo', function (done) {
            var opts = {};
            var fileInfo = new libraryDocumentModel.FileInfo();
            LibraryDocumentUtils.getLibraryCreationInfoWithFileInfo(ApiUtils.getLibraryDocumentName(),
                                                                    fileInfo)
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                                });

        });

        /**
         * Test for creating a libraryDocument through the createLibraryDocument api. Negative scenarios covered:
         * URL_INVALID: Invalid url specified in FileInfo's getDocumentUrl parameter.
         *
         * @throws ApiError
         */

        it('testCreateLibraryDocumentApiWithInvalidUrl', function (done) {
            var opts = {};
            var fileInfo = new libraryDocumentModel.FileInfo();
            fileInfo.documentURL = TestData.INVALID_URL;

            LibraryDocumentUtils.getLibraryCreationInfoWithFileInfo(ApiUtils.getLibraryDocumentName(),
                                                                    fileInfo)
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.URL_INVALID) ? done() : done(apiError);
                                });

        });


        /**
         * Test for creating a libraryDocument through the createLibraryDocument api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with more than 1 parameter non-empty
         *
         * @throws ApiError
         */

        it('testCreateLibraryDocumentApiWithMoreThanOneParameterNonEmptyInFileInfo', function (done) {
            var opts = {};
            var url = TestData.NULL_PARAM;

            var fileInfo = new libraryDocumentModel.FileInfo();
            fileInfo.libraryDocumentName = ApiUtils.getLibraryDocumentName();
            fileInfo.libraryDocumentId = libraryDocumentId;
            fileInfo.transientDocumentId = transientDocumentId;
            fileInfo.documentURL = TestData.NULL_PARAM;
            LibraryDocumentUtils.getLibraryCreationInfoWithFileInfo(ApiUtils.getLibraryDocumentName(),
                                                                    fileInfo)
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                                });

        });


        /**
         * Test for creating a libraryDocument through the createLibraryDocument api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: name null in LibraryCreationInfo
         *
         * @throws ApiError
         */

        it('testCreateLibraryDocumentApiWithNullName', function (done) {
            var opts = {};
            LibraryDocumentUtils.getLibraryCreationInfo(TestData.NULL_PARAM)
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                                });

        });

        /**
         * Test for creating a libraryDocument through the createLibraryDocument api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: SharingType null in libraryDocumentCreationInfo
         *
         * @throws ApiError
         */

        it('testCreateLibraryDocumentApiWithNullSharingType', function (done) {
            var opts = {};
            var libraryTemplateTypesEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibraryTemplateTypesEnum;

            LibraryDocumentUtils.getLibraryCreationInfoWithTemplateTypeAndSharingType(ApiUtils.getLibraryDocumentName(),
                                                                                      new Array(libraryTemplateTypesEnum.DOCUMENT),
                                                                                      TestData.NULL_PARAM)
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                                });

        });

        /**
         * Test for creating a libraryDocument through the createLibraryDocument api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: TemplateType null in libraryDocumentCreationInfo
         *
         * @throws ApiError
         */

        it('testCreateLibraryDocumentApiWithNullTemplateType', function (done) {
            var opts = {};
            var librarySharingModeEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibrarySharingModeEnum;

            LibraryDocumentUtils.getLibraryCreationInfoWithTemplateTypeAndSharingType(ApiUtils.getLibraryDocumentName(),
                                                                                      TestData.NULL_PARAM,
                                                                                      librarySharingModeEnum.USER)
                                .then(function (libraryCreationInfo) {
                                    return libraryDocumentsApi.createLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                                                     libraryCreationInfo,
                                                                                     opts);
                                })
                                .then(function (libraryDocumentCreationResponse) {
                                    assert.isNotNull(libraryDocumentCreationResponse);
                                    assert.isNotNull(libraryDocumentCreationResponse.libraryDocumentId);
                                    done();
                                })
                                .catch(function (apiError) {
                                    StringUtil.assertEqual(apiError,
                                                           SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                                });

        });


    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/TransientDocumentUtils":82}],27:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for DeleteLibraryDocument APIs.
     */
    describe('DeleteLibraryDocumentApiTest', function () {

        var libraryDocumentsApi = null;
        var libraryDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {

            ApiUtils.configureProperty();
            libraryDocumentsApi = LibraryDocumentUtils.getLibraryDocumentsApi();
            LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                .then(function (libraryDocumentIdResponse) {
                                    libraryDocumentId = libraryDocumentIdResponse;
                                    done();
                                })
                                .catch(function (apiError) {
                                    done(apiError);
                                });
        });

        /**
         * Test for deleting the library document through the deleteLibraryDocument endpoint.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testDeleteLibraryDocument', function (done) {
            var opts = {};
            libraryDocumentsApi.deleteLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                      libraryDocumentId,
                                                      opts)
                               .then(function () {
                                   done();
                               })
                               .catch(function (apiError) {
                                   done(apiError);
                               });

        });

        /**
         * Test for deleting the library document through the deleteLibraryDocument endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.deleteLibraryDocument(ApiUtils.getNullAccessTokenHeaderParams(),
                                                      libraryDocumentId,
                                                      opts)
                               .then(function () {
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for deleting the library document through the deleteLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.deleteLibraryDocument(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                      libraryDocumentId,
                                                      opts)
                               .then(function () {
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                               });

        });

        /**
         * Test for deleting the library document through the deleteLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            libraryDocumentsApi.deleteLibraryDocument(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                      libraryDocumentId,
                                                      opts)
                               .then(function () {
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for deleting the library document through the deleteLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: null libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testNullLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.deleteLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                      TestData.NULL_PARAM,
                                                      opts)
                               .then(function () {
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

        /**
         * Test for deleting the library document through the deleteLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: empty libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testEmptyLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.deleteLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                      TestData.EMPTY_PARAM,
                                                      opts)
                               .then(function () {
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],28:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for GetAuditTrailApiTest APIs.
     */
    describe('GetAuditTrailApiTest', function () {

        var assert = chai.assert;
        var libraryDocumentsApi = null;

        var libraryDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {

            ApiUtils.configureProperty();
            libraryDocumentsApi = LibraryDocumentUtils.getLibraryDocumentsApi();
            LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                .then(function (libraryDocumentIdResponse) {
                                    libraryDocumentId = libraryDocumentIdResponse;
                                    done();
                                })
                                .catch(function (apiError) {
                                    done(apiError);
                                });
        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocumentAuditTrail API endpoint.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetDocuments', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentAuditTrail(ApiUtils.getValidHeaderParams(),
                                                             libraryDocumentId,
                                                             opts)
                               .then(function (auditTrail) {
                                   assert.isNotNull(auditTrail);
                                   done();
                               })
                               .catch(function (apiError) {
                                   done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocumentAuditTrail endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentAuditTrail(ApiUtils.getNullAccessTokenHeaderParams(),
                                                             libraryDocumentId,
                                                             opts)
                               .then(function (auditTrail) {
                                   assert.isNotNull(auditTrail);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocumentAuditTrail endpoint. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentAuditTrail(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                             libraryDocumentId,
                                                             opts)
                               .then(function (auditTrail) {
                                   assert.isNotNull(auditTrail);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocumentAuditTrail endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentAuditTrail(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                             libraryDocumentId,
                                                             opts)
                               .then(function (auditTrail) {
                                   assert.isNotNull(auditTrail);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocumentAuditTrail endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: null libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testNullLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentAuditTrail(ApiUtils.getValidHeaderParams(),
                                                             TestData.NULL_PARAM,
                                                             opts)
                               .then(function (auditTrail) {
                                   assert.isNotNull(auditTrail);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocumentAuditTrail endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: empty libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testEmptyLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentAuditTrail(ApiUtils.getValidHeaderParams(),
                                                             TestData.EMPTY_PARAM,
                                                             opts)
                               .then(function (auditTrail) {
                                   assert.isNotNull(auditTrail);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],29:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for GetCombinedDocument APIs.
     */
    describe('GetCombinedDocumentApiTest', function () {

        var assert = chai.assert;
        var libraryDocumentsApi = null;
        var libraryDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {

            ApiUtils.configureProperty();
            libraryDocumentsApi = LibraryDocumentUtils.getLibraryDocumentsApi();
            LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                .then(function (libraryDocumentIdResponse) {
                                    libraryDocumentId = libraryDocumentIdResponse;
                                    done();
                                })
                                .catch(function (apiError) {
                                    done(apiError);
                                });
        });

        /**
         * Test for retrieving the details of the library document through the getCombinedDocument endpoint.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCombinedDocument', function (done) {
            var opts = {};
            libraryDocumentsApi.getCombinedDocument(ApiUtils.getValidHeaderParams(),
                                                    libraryDocumentId,
                                                    opts)
                               .then(function (combinedDocument) {
                                   assert.isNotNull(combinedDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getCombinedDocument endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getCombinedDocument(ApiUtils.getNullAccessTokenHeaderParams(),
                                                    libraryDocumentId,
                                                    opts)
                               .then(function (combinedDocument) {
                                   assert.isNotNull(combinedDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getCombinedDocument endpoint. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getCombinedDocument(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                    libraryDocumentId,
                                                    opts)
                               .then(function (combinedDocument) {
                                   assert.isNotNull(combinedDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getCombinedDocument endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            libraryDocumentsApi.getCombinedDocument(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                    libraryDocumentId,
                                                    opts)
                               .then(function (combinedDocument) {
                                   assert.isNotNull(combinedDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getCombinedDocument endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: null libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testNullLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getCombinedDocument(ApiUtils.getValidHeaderParams(),
                                                    TestData.NULL_PARAM,
                                                    opts)
                               .then(function (combinedDocument) {
                                   assert.isNotNull(combinedDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getCombinedDocument endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: empty libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testEmptyLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getCombinedDocument(ApiUtils.getValidHeaderParams(),
                                                    TestData.EMPTY_PARAM,
                                                    opts)
                               .then(function (combinedDocument) {
                                   assert.isNotNull(combinedDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],30:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for GetLibraryDocumentInfo APIs.
     */
    describe('GetDocumentsApiTest', function () {

        var assert = chai.assert;
        var libraryDocumentsApi = null;
        var libraryDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {

            ApiUtils.configureProperty();
            libraryDocumentsApi = LibraryDocumentUtils.getLibraryDocumentsApi();
            LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                .then(function (libraryDocumentIdResponse) {
                                    libraryDocumentId = libraryDocumentIdResponse;
                                    done();
                                })
                                .catch(function (apiError) {
                                    done(apiError);
                                });
        });

        /**
         * Test for retrieving the details of the document through the getDocuments API endpoint.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetDocuments', function (done) {
            var opts = {};
            libraryDocumentsApi.getDocuments(ApiUtils.getValidHeaderParams(),
                                             libraryDocumentId,
                                             opts)
                               .then(function (documents) {
                                   assert.isNotNull(documents);
                                   done();
                               })
                               .catch(function (apiError) {
                                   done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getDocuments endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getDocuments(ApiUtils.getNullAccessTokenHeaderParams(),
                                             libraryDocumentId,
                                             opts)
                               .then(function (documents) {
                                   assert.isNotNull(documents);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getDocuments endpoint. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getDocuments(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                             libraryDocumentId,
                                             opts)
                               .then(function (documents) {
                                   assert.isNotNull(documents);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getDocuments endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            libraryDocumentsApi.getDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                             libraryDocumentId,
                                             opts)
                               .then(function (documents) {
                                   assert.isNotNull(documents);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getDocuments endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: null libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testNullLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getDocuments(ApiUtils.getValidHeaderParams(),
                                             TestData.NULL_PARAM,
                                             opts)
                               .then(function (documents) {
                                   assert.isNotNull(documents);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getDocuments endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: empty libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testEmptyLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getDocuments(ApiUtils.getValidHeaderParams(),
                                             TestData.EMPTY_PARAM,
                                             opts)
                               .then(function (documents) {
                                   assert.isNotNull(documents);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],31:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for GetLibraryDocumentApi APIs.
     */
    describe('GetLibraryDocumentApiTest', function () {

        var assert = chai.assert;
        var libraryDocumentsApi = null;
        var libraryDocumentId = null;
        var documentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();

            libraryDocumentsApi = LibraryDocumentUtils.getLibraryDocumentsApi();
            LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                .then(function (libraryDocumentIdResponse) {
                                    libraryDocumentId = libraryDocumentIdResponse;
                                    return LibraryDocumentUtils.getDocumentId(libraryDocumentId);
                                })
                                .then(function (documentIdResponse) {
                                    documentId = documentIdResponse;
                                    done();
                                })
                                .catch(function (apiError) {
                                    done(apiError);
                                });
        });

        /**
         * Test for retrieving the details of the document through the getDocuments API endpoint.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetLibraryDocument', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                   libraryDocumentId,
                                                   documentId,
                                                   opts)
                               .then(function (libraryDocument) {
                                   assert.isNotNull(libraryDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocument endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocument(ApiUtils.getNullAccessTokenHeaderParams(),
                                                   libraryDocumentId,
                                                   documentId,
                                                   opts)
                               .then(function (libraryDocument) {
                                   assert.isNotNull(libraryDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocument(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                   libraryDocumentId,
                                                   documentId,
                                                   opts)
                               .then(function (libraryDocument) {
                                   assert.isNotNull(libraryDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocument(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                   libraryDocumentId,
                                                   documentId,
                                                   opts)
                               .then(function (libraryDocument) {
                                   assert.isNotNull(libraryDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: null libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testNullLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                   TestData.NULL_PARAM,
                                                   documentId,
                                                   opts)
                               .then(function (libraryDocument) {
                                   assert.isNotNull(libraryDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the document through the getLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: empty libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testEmptyLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                   TestData.EMPTY_PARAM,
                                                   documentId,
                                                   opts)
                               .then(function (libraryDocument) {
                                   assert.isNotNull(libraryDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the file stream of the specified document of a library document through the getLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_DOCUMENT_ID: null libraryDocumentId.
         *
         * @throws ApiException
         */
        it('testNullDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                   libraryDocumentId,
                                                   TestData.NULL_PARAM,
                                                   opts)
                               .then(function (libraryDocument) {
                                   assert.isNotNull(libraryDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the file stream of the specified document of a library document through the getLibraryDocument endpoint. Negative scenarios covered:
         * INVALID_DOCUMENT_ID: empty libraryDocumentId.
         *
         * @throws ApiException
         */
        it('testEmptyDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                   libraryDocumentId,
                                                   TestData.EMPTY_PARAM,
                                                   opts)
                               .then(function (libraryDocument) {
                                   assert.isNotNull(libraryDocument);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                               });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],32:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for GetLibraryDocumentInfo APIs.
     */
    describe('GetLibraryDocumentInfoApiTest', function () {

        var assert = chai.assert;
        var libraryDocumentsApi = null;
        var libraryDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            libraryDocumentsApi = LibraryDocumentUtils.getLibraryDocumentsApi();
            LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                .then(function (libraryDocumentIdResponse) {
                                    libraryDocumentId = libraryDocumentIdResponse;
                                    done();
                                })
                                .catch(function (apiError) {
                                    done(apiError);
                                });
        });

        /**
         * Test for retrieving the details of the library document through the getLibraryDocumentInfo endpoint.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testLibraryDocumentInfo', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentInfo(ApiUtils.getValidHeaderParams(),
                                                       libraryDocumentId,
                                                       opts)
                               .then(function (libraryDocumentInfo) {
                                   assert.isNotNull(libraryDocumentInfo);
                                   assert.isNotNull(libraryDocumentInfo.getLibraryDocumentId());
                                   done();
                               })
                               .catch(function (apiError) {
                                   done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getLibraryDocumentInfo endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentInfo(ApiUtils.getNullAccessTokenHeaderParams(),
                                                       libraryDocumentId,
                                                       opts)
                               .then(function (libraryDocumentInfo) {
                                   assert.isNotNull(libraryDocumentInfo);
                                   assert.isNotNull(libraryDocumentInfo.getLibraryDocumentId());

                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getLibraryDocumentInfo endpoint. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentInfo(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                       libraryDocumentId,
                                                       opts)
                               .then(function (libraryDocumentInfo) {
                                   assert.isNotNull(libraryDocumentInfo);
                                   assert.isNotNull(libraryDocumentInfo.getLibraryDocumentId());
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getLibraryDocumentInfo endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentInfo(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                       libraryDocumentId,
                                                       opts)
                               .then(function (libraryDocumentInfo) {
                                   assert.isNotNull(libraryDocumentInfo);
                                   assert.isNotNull(libraryDocumentInfo.getLibraryDocumentId());
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getLibraryDocumentInfo endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: null libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testNullLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentInfo(ApiUtils.getValidHeaderParams(),
                                                       TestData.NULL_PARAM,
                                                       opts)
                               .then(function (libraryDocumentInfo) {
                                   assert.isNotNull(libraryDocumentInfo);
                                   assert.isNotNull(libraryDocumentInfo.getLibraryDocumentId());
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

        /**
         * Test for retrieving the details of the library document through the getLibraryDocumentInfo endpoint. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: empty libraryDocumentId.
         *
         * @throws ApiError
         */
        it('testEmptyLibraryDocumentId', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocumentInfo(ApiUtils.getValidHeaderParams(),
                                                       TestData.EMPTY_PARAM,
                                                       opts)
                               .then(function (libraryDocumentInfo) {
                                   assert.isNotNull(libraryDocumentInfo);
                                   assert.isNotNull(libraryDocumentInfo.getLibraryDocumentId());
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                               });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],33:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for for GetLibraryDocuments API.
     */
    describe('GetLibraryDocumentsApiTest', function () {

        var assert = chai.assert;
        var libraryDocumentsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            libraryDocumentsApi = LibraryDocumentUtils.getLibraryDocumentsApi();
            done();
        });

        /**
         * Test for fetching all library documents through the getLibraryDocuments endpoint.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testLibraryDocuments', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocuments(ApiUtils.getValidHeaderParams(),
                                                    opts)
                               .then(function (documentLibraryItems) {
                                   assert.isNotNull(documentLibraryItems);
                                   done();
                               })
                               .catch(function (apiError) {
                                   done(apiError);
                               });

        });

        /**
         * Test for fetching all library documents through the getLibraryDocuments endpoint. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocuments(ApiUtils.getNullAccessTokenHeaderParams(),
                                                    opts)
                               .then(function (documentLibraryItems) {
                                   assert.isNotNull(documentLibraryItems);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                               });

        });

        /**
         * Test for fetching all library documents through the getLibraryDocuments endpoint. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocuments(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                    opts)
                               .then(function (documentLibraryItems) {
                                   assert.isNotNull(documentLibraryItems);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                               });

        });

        /**
         * Test for fetching all library documents through the getLibraryDocuments endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            libraryDocumentsApi.getLibraryDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                    opts)
                               .then(function (documentLibraryItems) {
                                   assert.isNotNull(documentLibraryItems);
                                   done();
                               })
                               .catch(function (apiError) {
                                   StringUtil.assertEqual(apiError,
                                                          SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                               });


        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],34:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/MegaSignUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, MegaSignUtils, LibraryDocumentUtils, TransientDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for CreateMegaSign APIs.
     */
    describe('CreateMegaSignApiTest', function () {

        var assert = chai.assert;
        var megaSignApi = null;
        var megaSignsModel = AdobeSignSdk.MegaSignsModel;

        var libraryDocumentId = null;
        var transientDocumentId = null;

        this.timeout(TestData.TIME_OUT);


        before(function (done) {
            ApiUtils.configureProperty();
            megaSignApi = MegaSignUtils.getMegaSignsApi();
            Promise.all([LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME),
                            TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)])
                   .then(function (ids) {
                       libraryDocumentId = ids[0];
                       transientDocumentId = ids[1].getTransientDocumentId();
                       done();
                   })
                   .catch(function (apiError) {
                       done(apiError);
                   });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testMegaSigns', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(ApiUtils.getMegaSignName())
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(ApiUtils.getMegaSignName())
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getNullAccessTokenHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(ApiUtils.getMegaSignName())
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                               megaSignCreationRequest);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });
        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(ApiUtils.getMegaSignName())
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: Null MegaSignCreationRequest;
         *
         * @throws ApiError
         */
        it('testNullMegaSignCreationRequest', function (done) {
            var opts = {};
            megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                       TestData.NULL_PARAM,
                                       opts)
                       .then(function (megaSignCreationResponse) {
                           assert.isNotNull(megaSignCreationResponse);
                           assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: name null in MegaSignCreationRequest
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithNullName', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(TestData.NULL_PARAM)
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with all 4 parameters null; FileInfo with more than 1 parameter non-empty.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithInValidFileInfo', function (done) {
            var opts = {};
            var fileInfo = new megaSignsModel.FileInfo();
            var megaSignCreationRequest = MegaSignUtils.getMegaSignCreationRequestWithFileInfo(ApiUtils.getMegaSignName(),
                                                                                               fileInfo);
            megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                       megaSignCreationRequest,
                                       opts)
                       .then(function (megaSignCreationResponse) {
                           assert.isNotNull(megaSignCreationResponse);
                           assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * URL_INVALID: Invalid url specified in FileInfo's getDocumentUrl parameter.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithInValidUrl', function (done) {
            var opts = {};
            var url = TestData.INVALID_URL;
            var fileInfo = new megaSignsModel.FileInfo();
            fileInfo.setDocumentURL(url);
            var megaSignCreationRequest = MegaSignUtils.getMegaSignCreationRequestWithFileInfo(ApiUtils.getMegaSignName(),
                                                                                               fileInfo);
            megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                       megaSignCreationRequest,
                                       opts)
                       .then(function (megaSignCreationResponse) {
                           assert.isNotNull(megaSignCreationResponse);
                           assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.URL_INVALID) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_FILE_INFO: null documentUrl in FileInfo
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithNullDocumentUrl', function (done) {
            var opts = {};
            var fileInfo = new megaSignsModel.FileInfo();
            fileInfo.setLibraryDocumentId(libraryDocumentId);
            fileInfo.setTransientDocumentId(transientDocumentId);
            fileInfo.setDocumentURL(TestData.NULL_PARAM);

            var megaSignCreationRequest = MegaSignUtils.getMegaSignCreationRequestWithFileInfo(ApiUtils.getMegaSignName(),
                                                                                               fileInfo);
            megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                       megaSignCreationRequest,
                                       opts)
                       .then(function (megaSignCreationResponse) {
                           assert.isNotNull(megaSignCreationResponse);
                           assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * EMPTY_REDIRECT_URL: Redirect url set to empty in PostSignOptions, if specified.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithEmptyRedirectUrl', function (done) {
            var opts = {};
            var postSignOptions = new megaSignsModel.PostSignOptions();
            postSignOptions.setRedirectUrl(TestData.EMPTY_PARAM);

            MegaSignUtils.getMegaSignCreationRequestWithPostSignOptions(ApiUtils.getMegaSignName(),
                                                                        postSignOptions)
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.EMPTY_REDIRECT_URL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_REDIRECT_URL: Invalid url specified in PostSignOption.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithInvalidRedirectUrl', function (done) {
            var opts = {};
            var postSignOptions = new megaSignsModel.PostSignOptions();
            postSignOptions.setRedirectUrl(TestData.INVALID_URL);

            MegaSignUtils.getMegaSignCreationRequestWithPostSignOptions(ApiUtils.getMegaSignName(), postSignOptions)
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_REDIRECT_URL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_REDIRECT_DELAY: Negative redirect delay set in PostSignOptions.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithInvalidRedirectDelay', function (done) {
            var opts = {};
            var postSignOptions = new megaSignsModel.PostSignOptions();
            postSignOptions.setRedirectUrl(TestData.REDIRECT_URL);
            postSignOptions.setRedirectDelay(TestData.INVALID_REDIRECT_DELAY);

            MegaSignUtils.getMegaSignCreationRequestWithPostSignOptions(ApiUtils.getMegaSignName(), postSignOptions)
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_REDIRECT_DELAY) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/MegaSignUtils":75,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/TransientDocumentUtils":82}],35:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/MegaSignUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, MegaSignUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get MegaSign Agreements APIs.
     */
    describe('GetMegaSignAgreementsApiTest', function () {

        var assert = chai.assert;
        var megaSignApi = null;
        var megaSignId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            megaSignApi = MegaSignUtils.getMegaSignsApi();
            MegaSignUtils.getResourceId(TestData.MEGASIGN_NAME)
                         .then(function (megaSignIdResponse) {
                             megaSignId = megaSignIdResponse;
                             done();
                         }).catch(function (apiError) {
                done(apiError);
            });

        });

        /**
         * Test for retrieving the the child agreements of the specified megaSign parent agreement through the GetAgreeement api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetAgreement', function (done) {
            var opts = {};
            megaSignApi.getMegaSignChildAgreements(ApiUtils.getValidHeaderParams(),
                                                   megaSignId,
                                                   opts)
                       .then(function (MegaSignChildAgreements) {
                           assert.isNotNull(MegaSignChildAgreements);
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for retrieving the the child agreements of the specified megaSign parent agreement through the GetAgreeement api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSignChildAgreements(ApiUtils.getNullAccessTokenHeaderParams(),
                                                   megaSignId,
                                                   opts)
                       .then(function (megaSignChildAgreements) {
                           assert.isNotNull(megaSignChildAgreements);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       });
        });

        /**
         * Test for retrieving the the child agreements of the specified megaSign parent agreement through the GetAgreeement api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSignChildAgreements(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                   megaSignId,
                                                   opts)
                       .then(function (megaSignChildAgreements) {
                           assert.isNotNull(megaSignChildAgreements);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       });
        });

        /**
         * Test for retrieving the the child agreements of the specified megaSign parent agreement through the GetAgreeement api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            megaSignApi.getMegaSignChildAgreements(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                   megaSignId,
                                                   opts)
                       .then(function (megaSignChildAgreements) {
                           assert.isNotNull(megaSignChildAgreements);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for retrieving the the child agreements of the specified megaSign parent agreement through the GetAgreeement api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: null megaSignId.
         *
         * @throws ApiError
         */
        it('testNullMegaSignId', function (done) {
            var opts = {};
            megaSignApi.getMegaSignChildAgreements(ApiUtils.getValidHeaderParams(),
                                                   TestData.NULL_PARAM,
                                                   opts)
                       .then(function (megaSignChildAgreements) {
                           assert.isNotNull(megaSignChildAgreements);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

        /**
         * Test for retrieving the the child agreements of the specified megaSign parent agreement through the GetAgreeement api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: empty megaSignId.
         *
         * @throws ApiError
         */
        it('testEmptyMegaSignId', function (done) {
            var opts = {};
            megaSignApi.getMegaSignChildAgreements(ApiUtils.getValidHeaderParams(),
                                                   TestData.EMPTY_PARAM,
                                                   opts)
                       .then(function (megaSignChildAgreements) {
                           assert.isNotNull(megaSignChildAgreements);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/MegaSignUtils":75,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],36:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/MegaSignUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, MegaSignUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get MegaSign FormData APIs.
     */
    describe('GetMegaSignFormDataApiTest', function () {

        var assert = chai.assert;
        var megaSignApi = null;
        var megaSignId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            megaSignApi = MegaSignUtils.getMegaSignsApi();
            MegaSignUtils.getResourceId(TestData.MEGASIGN_NAME)
                         .then(function (megaSignIdResponse) {
                             megaSignId = megaSignIdResponse;
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching data entered by recipients into interactive form fields at the time they signed the child agreements of the specified megaSign through the getMegaSignFormData api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetFormData', function (done) {
            var opts = {};
            megaSignApi.getMegaSignFormData(ApiUtils.getValidHeaderParams(),
                                            megaSignId,
                                            opts)
                       .then(function (megaSignFormData) {
                           assert.isNotNull(megaSignFormData);
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for fetching data entered by recipients into interactive form fields at the time they signed the child agreements of the specified megaSign through the getMegaSignFormData api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSignFormData(ApiUtils.getNullAccessTokenHeaderParams(),
                                            megaSignId,
                                            opts)
                       .then(function (megaSignFormData) {
                           assert.isNotNull(megaSignFormData);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       });
        });

        /**
         * Test for fetching data entered by recipients into interactive form fields at the time they signed the child agreements of the specified megaSign through the getMegaSignFormData api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSignFormData(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                            megaSignId,
                                            opts)
                       .then(function (megaSignFormData) {
                           assert.isNotNull(megaSignFormData);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       });
        });

        /**
         * Test for fetching data entered by recipients into interactive form fields at the time they signed the child agreements of the specified megaSign through the getMegaSignFormData api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            megaSignApi.getMegaSignFormData(ApiUtils.getEmptyXApiUserHeaderParams(),
                                            megaSignId,
                                            opts)
                       .then(function (megaSignFormData) {
                           assert.isNotNull(megaSignFormData);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for fetching data entered by recipients into interactive form fields at the time they signed the child agreements of the specified megaSign through the getMegaSignFormData api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: null megaSignId.
         *
         * @throws ApiError
         */
        it('testNullMegaSignId', function (done) {
            var opts = {};
            megaSignApi.getMegaSignFormData(ApiUtils.getValidHeaderParams(),
                                            TestData.NULL_PARAM,
                                            opts)
                       .then(function (megaSignFormData) {
                           assert.isNotNull(megaSignFormData);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

        /**
         * Test for fetching data entered by recipients into interactive form fields at the time they signed the child agreements of the specified megaSign through the getMegaSignFormData api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: empty megaSignId.
         *
         * @throws ApiError
         */
        it('testEmptyMegaSignId', function (done) {
            var opts = {};
            megaSignApi.getMegaSignFormData(ApiUtils.getValidHeaderParams(),
                                            TestData.EMPTY_PARAM,
                                            opts)
                       .then(function (megaSignFormData) {
                           assert.isNotNull(megaSignFormData);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/MegaSignUtils":75,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],37:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/MegaSignUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, MegaSignUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for GetMegaSignInfo APIs.
     */
    describe('GetMegasignInfoApiTest', function () {

        var assert = chai.assert;
        var megaSignApi = null;
        var megaSignId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            megaSignApi = MegaSignUtils.getMegaSignsApi();
            MegaSignUtils.getResourceId(TestData.MEGASIGN_NAME)
                         .then(function (megaSignIdResponse) {
                             megaSignId = megaSignIdResponse;
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });
        });

        /**
         * Test for retrieving the details of the specified megaSign parent agreement through the getMegaSignInfo api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testMegaSignInfo', function (done) {
            var opts = {};
            megaSignApi.getMegaSignInfo(ApiUtils.getValidHeaderParams(),
                                        megaSignId,
                                        opts)
                       .then(function (megaSignInfo) {
                           assert.isNotNull(megaSignInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });

        });

        /**
         * Test for retrieving the details of the specified megaSign parent agreement through the getMegaSignInfo api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSignInfo(ApiUtils.getNullAccessTokenHeaderParams(),
                                        megaSignId,
                                        opts)
                       .then(function (megaSignInfo) {
                           assert.isNotNull(megaSignInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for retrieving the details of the specified megaSign parent agreement through the getMegaSignInfo api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSignInfo(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                        megaSignId,
                                        opts)
                       .then(function (megaSignInfo) {
                           assert.isNotNull(megaSignInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       });

        });

        /**
         * Test for retrieving the details of the specified megaSign parent agreement through the getMegaSignInfo api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            megaSignApi.getMegaSignInfo(ApiUtils.getEmptyXApiUserHeaderParams(),
                                        megaSignId,
                                        opts)
                       .then(function (megaSignInfo) {
                           assert.isNotNull(megaSignInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for retrieving the details of the specified megaSign parent agreement through the getMegaSignInfo api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: null megaSignId.
         *
         * @throws ApiError
         */
        it('testNullMegaSignId', function (done) {
            var opts = {};
            megaSignApi.getMegaSignInfo(ApiUtils.getValidHeaderParams(),
                                        TestData.NULL_PARAM,
                                        opts)
                       .then(function (megaSignInfo) {
                           assert.isNotNull(megaSignInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

        /**
         * Test for retrieving the details of the specified megaSign parent agreement through the getMegaSignInfo api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: empty megaSignId.
         *
         * @throws ApiError
         */
        it('testEmptyMegaSignId', function (done) {
            var opts = {};
            megaSignApi.getMegaSignInfo(ApiUtils.getValidHeaderParams(),
                                        TestData.EMPTY_PARAM,
                                        opts)
                       .then(function (megaSignInfo) {
                           assert.isNotNull(megaSignInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/MegaSignUtils":75,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],38:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/MegaSignUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, MegaSignUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for for GetMegaSigns API.
     */
    describe('GetMegasignInfoApiTest', function () {

        var assert = chai.assert;
        var megaSignApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            megaSignApi = MegaSignUtils.getMegaSignsApi();
            done();
        });

        /**
         * Test for fetching all megaSign parent agreement through the getMegaSignsApi.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testMegaSigns', function (done) {
            var opts = {};
            megaSignApi.getMegaSigns(ApiUtils.getValidHeaderParams(),
                                     TestData.MEGASIGN_QUERY,
                                     opts)
                       .then(function (megaSignIdResponse) {
                           assert.isNotNull(megaSignIdResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });

        });

        /**
         * Test for fetching all megaSign parent agreement through the getMegaSignsApi. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSigns(ApiUtils.getNullAccessTokenHeaderParams(),
                                     TestData.MEGASIGN_QUERY,
                                     opts)
                       .then(function (megaSigns) {
                           assert.isNotNull(megaSigns);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for fetching all megaSign parent agreement through the getMegaSignsApi. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSigns(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                     TestData.MEGASIGN_QUERY,
                                     opts)
                       .then(function (megaSigns) {
                           assert.isNotNull(megaSigns);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       });

        });

        /**
         * Test for fetching all megaSign parent agreement through the getMegaSignsApi. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            megaSignApi.getMegaSigns(ApiUtils.getEmptyXApiUserHeaderParams(),
                                     TestData.MEGASIGN_QUERY,
                                     opts)
                       .then(function (megaSigns) {
                           assert.isNotNull(megaSigns);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                       });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/MegaSignUtils":75,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],39:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/MegaSignUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, MegaSignUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for UpdateMegaSigns APIs.
     */
    describe('UpdateMegaSignsApiTest', function () {

        var assert = chai.assert;
        var megaSignApi = null;
        var megaSignsModel = AdobeSignSdk.MegaSignsModel;

        var megaSignId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            megaSignApi = MegaSignUtils.getMegaSignsApi();
            MegaSignUtils.getResourceId(ApiUtils.getMegaSignName())
                         .then(function (megaSignIdResponse) {
                             megaSignId = megaSignIdResponse;
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });
        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testUpdateStatus', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getNullAccessTokenHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getEmptyXApiUserHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: null megaSignId.
         *
         * @throws ApiError
         */
        it('testNullMegaSignId', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             TestData.NULL_PARAM,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: empty megaSignId.
         *
         * @throws ApiError
         */
        it('testEmptyMegaSignId', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             TestData.EMPTY_PARAM,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_MEGASIGN_STATUS: invalid updateInfo status.
         *
         * @throws ApiError
         */
        it('testInvalidMegaSignStatus', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(TestData.NULL_PARAM);

            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_STATUS) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null updateInfo object.
         *
         * @throws ApiError
         */
        it('testInvalidMegaSignStatusUpdateInfo', function (done) {
            var opts = {};
            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             TestData.NULL_PARAM,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                       });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/MegaSignUtils":75,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],40:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/OAuthUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, OAuthUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    describe('GetAccessTokenTest', function () {

        var CODE = "code";

        var assert = chai.assert;
        var oAuthApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            oAuthApi = OAuthUtils.getOAuthApi();
            done();
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientId null in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidClientId', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.NULL_PARAM,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.REDIRECT_URI,
                                                                      CODE,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientSecret null in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidClientSecret', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.NULL_PARAM,
                                                                      TestData.REDIRECT_URI,
                                                                      CODE,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: grantType null in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidGrantType', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.REDIRECT_URI,
                                                                      CODE,
                                                                      TestData.NULL_PARAM);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: redirectUri null in accessTokenRequest.
         * @throws ApiError
         */

        it('testNullRedirectUri', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.NULL_PARAM,
                                                                      CODE,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * INVALID_REQUEST : Invalid redirectUri specified in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidRedirectUri', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.INVALID_URL,
                                                                      CODE,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_REQUEST) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: code null in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidCode', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.REDIRECT_URI,
                                                                      TestData.NULL_PARAM,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });
    });
}));

},{"../../utils/ApiUtils":71,"../../utils/OAuthUtils":76,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],41:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/OAuthUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, OAuthUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    describe('GetAuthorizationUrlTest', function () {

        var oAuthApi = null;
        var assert = chai.assert;
        var scopes = [];

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            oAuthApi = OAuthUtils.getOAuthApi();

            var scope = new AdobeSignSdk.OAuthModel.Scope();
            scope.setTarget("user_write");
            scope.setModifier("account");
            scopes.push(scope);
            done();
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api.
         * Case covered: authorizationUrl fetched successfully.
         *
         * @throws ApiError
         */
        it('testGetAuthorizationUrl', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.REDIRECT_URI,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAuthorizationRequest Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientId null in authorizationRequest.
         * @throws ApiError
         */
        it('testInvalidClientId', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.NULL_PARAM,
                                                                          TestData.REDIRECT_URI,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api. Negative scenarios covered:
         * INVALID_REQUEST : Invalid redirectUri specified in authorizationRequest.
         *
         * @throws ApiError
         */
        it('testEmptyRedirectUri', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.NULL_PARAM,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api. Negative scenarios covered:
         * INVALID_REQUEST : Invalid redirectUri specified in authorizationRequest.
         *
         * @throws ApiError
         */
        it('testNullRedirectUri', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.INVALID_URL,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_URL) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: scopes null in authorizationRequest.
         *
         * @throws ApiError
         */
        it('testInvalidScopes', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.REDIRECT_URI,
                                                                          TestData.NULL_PARAM,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: responseType null in authorizationRequest.
         *
         * @throws ApiError
         */
        it('testInvalidResponseType', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.REDIRECT_URI,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.NULL_PARAM);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });
    });
}));

},{"../../utils/ApiUtils":71,"../../utils/OAuthUtils":76,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],42:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/OAuthUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, OAuthUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    describe('RefreshAccessTokenTest', function () {

        var oAuthApi = null;
        var assert = chai.assert;

        var REFRESH_TOKEN = "refreshToken";
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            oAuthApi = OAuthUtils.getOAuthApi();
            done();
        });

        /**
         * Test for refreshing the access token through the refreshAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientId null in accessTokenRefreshRequest.
         * @throws ApiError
         */
        it('testInvalidClientId', function (done) {
            //ClientId Null in accessTokenRefreshRequest
            var accessTokenRefreshRequest = OAuthUtils.getAccessTokenRefreshRequest(TestData.NULL_PARAM,
                                                                                    TestData.CLIENT_SECRET,
                                                                                    REFRESH_TOKEN,
                                                                                    TestData.REFRESH_TOKEN_GRANT_TYPE);
            oAuthApi.refreshAccessToken(accessTokenRefreshRequest)
                    .then(function (accessTokenRefreshResponse) {
                        assert.isNotNull(accessTokenRefreshResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for refreshing the access token through the refreshAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientSecret null in accessTokenRefreshRequest.
         * @throws ApiError
         */
        it('testInvalidClientSecret', function (done) {
            //ClientSecret Null in accessTokenRefreshRequest
            var accessTokenRefreshRequest = OAuthUtils.getAccessTokenRefreshRequest(TestData.CLIENT_ID,
                                                                                    TestData.NULL_PARAM,
                                                                                    REFRESH_TOKEN,
                                                                                    TestData.REFRESH_TOKEN_GRANT_TYPE);
            oAuthApi.refreshAccessToken(accessTokenRefreshRequest)
                    .then(function (accessTokenRefreshResponse) {
                        assert.isNotNull(accessTokenRefreshResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for refreshing the access token through the refreshAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: grantType null in accessTokenRefreshRequest.
         * @throws ApiError
         */
        it('testInvalidGrantType', function (done) {
            //grantType Null in accessTokenRefreshRequest
            var accessTokenRefreshRequest = OAuthUtils.getAccessTokenRefreshRequest(TestData.CLIENT_ID,
                                                                                    TestData.CLIENT_SECRET,
                                                                                    REFRESH_TOKEN,
                                                                                    TestData.NULL_PARAM);
            oAuthApi.refreshAccessToken(accessTokenRefreshRequest)
                    .then(function (accessTokenRefreshResponse) {
                        assert.isNotNull(accessTokenRefreshResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for refreshing the access token through the refreshAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: code null in accessTokenRefreshRequest.
         *
         * @throws ApiError
         */
        it('testInvalidRefreshToken', function (done) {
            var accessTokenRefreshRequest = OAuthUtils.getAccessTokenRefreshRequest(TestData.CLIENT_ID,
                                                                                    TestData.CLIENT_SECRET,
                                                                                    TestData.NULL_PARAM,
                                                                                    TestData.REFRESH_TOKEN_GRANT_TYPE);
            oAuthApi.refreshAccessToken(accessTokenRefreshRequest)
                    .then(function (accessTokenRefreshResponse) {
                        assert.isNotNull(accessTokenRefreshResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });
    });
}));


},{"../../utils/ApiUtils":71,"../../utils/OAuthUtils":76,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],43:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/OAuthUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, OAuthUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    describe('RevokeTokenTest', function () {

        var oAuthApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            oAuthApi = OAuthUtils.getOAuthApi();
            done();
        });

        /**
         * Test for revoking token through the revokeAccessToken endpoint. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: token is null.
         *
         * @throws ApiError
         */
        it('testInvalidToken', function (done) {
            oAuthApi.revokeToken(TestData.NULL_PARAM)
                    .then(function () {
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });
    });
}));

},{"../../utils/ApiUtils":71,"../../utils/OAuthUtils":76,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],44:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/ReminderUtils'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, ReminderUtils, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
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

},{"../../utils/AgreementUtils":70,"../../utils/ApiUtils":71,"../../utils/ReminderUtils":77,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81}],45:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/SearchUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, SearchUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Create Search Api.
     */
    describe('CreateSearchApiTest', function () {

        var assert = chai.assert;
        var searchApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            searchApi = SearchUtils.getSearchApi();
            done();
        });

        /**
         * Test for creating a search object for agreement asset event through the createAssetEvent api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCreateAssetEvent', function (done) {
            var opts = {};
            var agreementAssetEventRequest = SearchUtils.getAgreementAssetEventRequest(ApiUtils.getDate(TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE),
                                                                                       ApiUtils.getDate(TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE));
            searchApi.createAssetEvent(ApiUtils.getValidHeaderParams(),
                                       agreementAssetEventRequest,
                                       opts)
                     .then(function (agreementAssetEventPostResponse) {
                         assert.isNotNull(agreementAssetEventPostResponse);
                         assert.isNotNull(agreementAssetEventPostResponse.getSearchId());
                         done();
                     })
                     .catch(function (apiError) {
                         done(apiError);
                     });

        });

        /**
         * Test for creating a search object for agreement asset event through the createAssetEvent api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var agreementAssetEventRequest = SearchUtils.getAgreementAssetEventRequest(ApiUtils.getDate(TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE),
                                                                                       ApiUtils.getDate(TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE));
            searchApi.createAssetEvent(ApiUtils.getNullAccessTokenHeaderParams(),
                                       agreementAssetEventRequest,
                                       opts)
                     .then(function (agreementAssetEventPostResponse) {
                         assert.isNotNull(agreementAssetEventPostResponse);
                         assert.isNotNull(agreementAssetEventPostResponse.getSearchId());
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                     });

        });

        /**
         * Test for creating a search object for agreement asset event through the createAssetEvent api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var agreementAssetEventRequest = SearchUtils.getAgreementAssetEventRequest(ApiUtils.getDate(TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE),
                                                                                       ApiUtils.getDate(TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE));
            searchApi.createAssetEvent(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                       agreementAssetEventRequest,
                                       opts)
                     .then(function (agreementAssetEventPostResponse) {
                         assert.isNotNull(agreementAssetEventPostResponse);
                         assert.isNotNull(agreementAssetEventPostResponse.getSearchId());
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                     });

        });

        /**
         * Test for creating a search object for agreement asset event through the createAssetEvent api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            var agreementAssetEventRequest = SearchUtils.getAgreementAssetEventRequest(ApiUtils.getDate(TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE),
                                                                                       ApiUtils.getDate(TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE));
            searchApi.createAssetEvent(ApiUtils.getEmptyXApiUserHeaderParams(),
                                       agreementAssetEventRequest,
                                       opts)
                     .then(function (agreementAssetEventPostResponse) {
                         assert.isNotNull(agreementAssetEventPostResponse);
                         assert.isNotNull(agreementAssetEventPostResponse.getSearchId());
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                     });

        });

        /**
         * Test for creating a search object for agreement asset event through the createAssetEvent api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null AgreementAssetEventRequest.
         *
         * @throws ApiError
         */
        it('testNullAgreementAssetEventRequest', function (done) {
            var opts = {};
            searchApi.createAssetEvent(ApiUtils.getValidHeaderParams(),
                                       TestData.NULL_PARAM,
                                       opts)
                     .then(function (agreementAssetEventPostResponse) {
                         assert.isNotNull(agreementAssetEventPostResponse);
                         assert.isNotNull(agreementAssetEventPostResponse.getSearchId());
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                     });

        });

        /**
         * Test for creating a search object for agreement asset event through the createAssetEvent api. Negative scenarios covered:
         * INVALID_DATE: null startDate.
         *
         * @throws ApiError
         */
        it('testNullStartDate', function (done) {
            var opts = {};
            var agreementAssetEventRequest = SearchUtils.getAgreementAssetEventRequest(TestData.NULL_PARAM,
                                                                                       ApiUtils.getDate(TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE));
            searchApi.createAssetEvent(ApiUtils.getValidHeaderParams(),
                                       agreementAssetEventRequest,
                                       opts)
                     .then(function (agreementAssetEventPostResponse) {
                         assert.isNotNull(agreementAssetEventPostResponse);
                         assert.isNotNull(agreementAssetEventPostResponse.getSearchId());
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_DATE) ? done() : done(apiError);
                     });

        });

        /**
         * Test for creating a search object for agreement asset event through the createAssetEvent api. Negative scenarios covered:
         * INVALID_DATE: null endDate.
         *
         * @throws ApiError
         */
        it('testNullEndDate', function (done) {
            var opts = {};
            var agreementAssetEventRequest = SearchUtils.getAgreementAssetEventRequest(ApiUtils.getDate(TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE),
                                                                                       TestData.NULL_PARAM);
            searchApi.createAssetEvent(ApiUtils.getValidHeaderParams(),
                                       agreementAssetEventRequest,
                                       opts)
                     .then(function (agreementAssetEventPostResponse) {
                         assert.isNotNull(agreementAssetEventPostResponse);
                         assert.isNotNull(agreementAssetEventPostResponse.getSearchId());
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_DATE) ? done() : done(apiError);
                     });

        });

        /**
         * Test for creating a search object for agreement asset event through the createAssetEvent api. Negative scenarios covered:
         * INVALID_DATE: endDate earlier than startDate.
         *
         * @throws ApiError
         */
        it('testEndDateEarlierThanStartDate', function (done) {
            var opts = {};
            var agreementAssetEventRequest = SearchUtils.getAgreementAssetEventRequest(ApiUtils.getDate(TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE),
                                                                                       ApiUtils.getDate(TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE));
            searchApi.createAssetEvent(ApiUtils.getValidHeaderParams(),
                                       agreementAssetEventRequest,
                                       opts)
                     .then(function (agreementAssetEventPostResponse) {
                         assert.isNotNull(agreementAssetEventPostResponse);
                         assert.isNotNull(agreementAssetEventPostResponse.getSearchId());
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_DATE) ? done() : done(apiError);
                     });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/SearchUtils":79,"../../utils/StringUtil":80,"../../utils/TestData":81}],46:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/SearchUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, SearchUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Search API.
     */
    describe('GetSearchApiTest', function () {

        var assert = chai.assert;
        var searchApi = null;
        var searchId = null;
        var pageCursor = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            searchApi = SearchUtils.getSearchApi();
            SearchUtils.getResourceId()
                       .then(function (searchIdResponse) {
                           searchId = searchIdResponse;
                           pageCursor = SearchUtils.getPageCursor();
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for fetching the result for the page which is described inside the Page Cursor Info through the createAssetEvent api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetAssetEvent', function (done) {
            searchApi.getAssetEvent(ApiUtils.getValidHeaderParams(),
                                    searchId,
                                    pageCursor,
                                    SearchUtils.getOptsWithPageSize(TestData.PAGE_SIZE))
                     .then(function (agreementAssetEventGetResponse) {
                         assert.isNotNull(agreementAssetEventGetResponse);
                         done();
                     })
                     .catch(function (apiError) {
                         done(apiError);
                     });

        });

        /**
         * Test for fetching the result for the page which is described inside the Page Cursor Info through the createAssetEvent api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            searchApi.getAssetEvent(ApiUtils.getNullAccessTokenHeaderParams(),
                                    searchId,
                                    pageCursor,
                                    SearchUtils.getOptsWithPageSize(TestData.PAGE_SIZE))
                     .then(function (agreementAssetEventGetResponse) {
                         assert.isNotNull(agreementAssetEventGetResponse);
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                     });

        });

        /**
         * Test for fetching the result for the page which is described inside the Page Cursor Info through the createAssetEvent api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            searchApi.getAssetEvent(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                    searchId,
                                    pageCursor,
                                    SearchUtils.getOptsWithPageSize(TestData.PAGE_SIZE))
                     .then(function (agreementAssetEventGetResponse) {
                         assert.isNotNull(agreementAssetEventGetResponse);
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                     });

        });

        /**
         * Test for fetching the result for the page which is described inside the Page Cursor Info through the createAssetEvent api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            searchApi.getAssetEvent(ApiUtils.getEmptyXApiUserHeaderParams(),
                                    searchId,
                                    pageCursor,
                                    SearchUtils.getOptsWithPageSize(TestData.PAGE_SIZE))
                     .then(function (agreementAssetEventGetResponse) {
                         assert.isNotNull(agreementAssetEventGetResponse);
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                     });

        });

        /**
         * Test for fetching the result for the page which is described inside the Page Cursor Info through the createAssetEvent api.
         * Negative scenarios covered:
         * INVALID_SEARCH_ID: null searchId.
         *
         * @throws ApiError
         */
        it('testNullSearchId', function (done) {
            searchApi.getAssetEvent(ApiUtils.getValidHeaderParams(),
                                    TestData.NULL_PARAM,
                                    pageCursor,
                                    SearchUtils.getOptsWithPageSize(TestData.PAGE_SIZE))
                     .then(function (agreementAssetEventGetResponse) {
                         assert.isNotNull(agreementAssetEventGetResponse);
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_SEARCH_ID) ? done() : done(apiError);
                     });

        });

        /**
         * Test for fetching the result for the page which is described inside the Page Cursor Info through the createAssetEvent api.
         * Negative scenarios covered:
         * INVALID_SEARCH_ID: empty searchId.
         *
         * @throws ApiError
         */
        it('testEmptySearchId', function (done) {
            searchApi.getAssetEvent(ApiUtils.getValidHeaderParams(),
                                    TestData.EMPTY_PARAM,
                                    pageCursor,
                                    SearchUtils.getOptsWithPageSize(TestData.PAGE_SIZE))
                     .then(function (agreementAssetEventGetResponse) {
                         assert.isNotNull(agreementAssetEventGetResponse);
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_SEARCH_ID) ? done() : done(apiError);
                     });

        });

        /**
         * Test for fetching the result for the page which is described inside the Page Cursor Info through the createAssetEvent api.
         * Negative scenarios covered:
         * INVALID_PAGE_CURSOR: null endDate.
         *
         * @throws ApiError
         */
        it('testNullPageCursor', function (done) {
            searchApi.getAssetEvent(ApiUtils.getValidHeaderParams(),
                                    searchId,
                                    TestData.NULL_PARAM,
                                    SearchUtils.getOptsWithPageSize(TestData.PAGE_SIZE))
                     .then(function (agreementAssetEventGetResponse) {
                         assert.isNotNull(agreementAssetEventGetResponse);
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_PAGE_CURSOR) ? done() : done(apiError);
                     });

        });

        /**
         * Test for fetching the result for the page which is described inside the Page Cursor Info through the createAssetEvent api.
         * Negative scenarios covered:
         * INVALID_PAGE_CURSOR: empty pageCursor.
         *
         * @throws ApiError
         */
        it('testEmptyPageCursor', function (done) {
            searchApi.getAssetEvent(ApiUtils.getValidHeaderParams(),
                                    searchId,
                                    TestData.EMPTY_PARAM,
                                    SearchUtils.getOptsWithPageSize(TestData.PAGE_SIZE))
                     .then(function (agreementAssetEventGetResponse) {
                         assert.isNotNull(agreementAssetEventGetResponse);
                         done();
                     })
                     .catch(function (apiError) {
                         StringUtil.assertEqual(apiError,
                                                SdkErrorCodes.INVALID_PAGE_CURSOR) ? done() : done(apiError);
                     });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/SearchUtils":79,"../../utils/StringUtil":80,"../../utils/TestData":81}],47:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/TransientDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));

}(function (TestData, TransientDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Create Transient Documents Api.
     */
    describe('CreateTransientDocumentsApiTest', function () {

        var assert = chai.assert;
        var transientDocumentsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            transientDocumentsApi = TransientDocumentUtils.getTransientDocumentsApi();
            done();
        });

        /**
         * Test for creating a transientDocument through the createTransientDocumentApi.
         *
         * @throws ApiError
         */
        it('testCreateTransientDocument', function (done) {
            transientDocumentsApi.createTransientDocument(ApiUtils.getValidHeaderParams(),
                                                          TestData.TRANSIENT_DOCUMENT_NAME,
                                                          TransientDocumentUtils.getFile(TestData.SAMPLE_FILE),
                                                          TransientDocumentUtils.getOptsWithMimeType(TestData.VALID_MIME))
                                 .then(function (TransientDocumentResponse) {
                                     assert.isNotNull(TransientDocumentResponse);
                                     assert.isNotNull(TransientDocumentResponse.getTransientDocumentId());
                                     done();
                                 })
                                 .catch(function (apiError) {
                                     done(apiError);
                                 });

        });

        /**
         * Test for creating a transientDocument through the createTransientDocumentApi. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            transientDocumentsApi.createTransientDocument(ApiUtils.getNullAccessTokenHeaderParams(),
                                                          TestData.TRANSIENT_DOCUMENT_NAME,
                                                          TransientDocumentUtils.getFile(TestData.SAMPLE_FILE),
                                                          TransientDocumentUtils.getOptsWithMimeType(TestData.VALID_MIME))
                                 .then(function (transientDocumentResponse) {
                                     assert.isNotNull(transientDocumentResponse);
                                     assert.isNotNull(transientDocumentResponse.getTransientDocumentId());
                                     done();

                                 })
                                 .catch(function (apiError) {
                                     StringUtil.assertEqual(apiError,
                                                            SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                                 });

        });

        /**
         * Test for creating a transientDocument through the createTransientDocumentApi. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            transientDocumentsApi.createTransientDocument(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                          TestData.TRANSIENT_DOCUMENT_NAME,
                                                          TransientDocumentUtils.getFile(TestData.SAMPLE_FILE),
                                                          TransientDocumentUtils.getOptsWithMimeType(TestData.VALID_MIME))
                                 .then(function (transientDocumentResponse) {
                                     assert.isNotNull(transientDocumentResponse);
                                     assert.isNotNull(transientDocumentResponse.getTransientDocumentId());
                                     done();

                                 })
                                 .catch(function (apiError) {
                                     StringUtil.assertEqual(apiError,
                                                            SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                                 });

        });

        /**
         * Test for creating a transientDocument through the createTransientDocumentApi. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            transientDocumentsApi.createTransientDocument(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                          TestData.TRANSIENT_DOCUMENT_NAME,
                                                          TransientDocumentUtils.getFile(TestData.SAMPLE_FILE),
                                                          TransientDocumentUtils.getOptsWithMimeType(TestData.VALID_MIME))
                                 .then(function (transientDocumentResponse) {
                                     assert.isNotNull(transientDocumentResponse);
                                     assert.isNotNull(transientDocumentResponse.getTransientDocumentId());
                                     done();
                                 })
                                 .catch(function (apiError) {
                                     StringUtil.assertEqual(apiError,
                                                            SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                                 });

        });

        /**
         * Test for creating a transientDocument through the createTransientDocumentApi. Negative scenarios covered:
         * NO_FILE_CONTENT: null file.
         *
         * @throws ApiError
         */
        it('testInvalidFile', function (done) {
            transientDocumentsApi.createTransientDocument(ApiUtils.getValidHeaderParams(),
                                                          TestData.TRANSIENT_DOCUMENT_NAME,
                                                          TestData.NULL_PARAM,
                                                          TransientDocumentUtils.getOptsWithMimeType(TestData.VALID_MIME))
                                 .then(function (transientDocumentResponse) {
                                     assert.isNotNull(transientDocumentResponse);
                                     assert.isNotNull(transientDocumentResponse.getTransientDocumentId());
                                     done();
                                 })
                                 .catch(function (apiError) {
                                     StringUtil.assertEqual(apiError,
                                                            SdkErrorCodes.NO_FILE_CONTENT) ? done() : done(apiError);
                                 });

        });

        /**
         * Test for creating a transientDocument through the createTransientDocumentApi. Negative scenarios covered:
         * NO_FILE_NAME: empty file name.
         *
         * @throws ApiError
         */
        it('testInvalidFileName', function (done) {
            transientDocumentsApi.createTransientDocument(ApiUtils.getValidHeaderParams(),
                                                          TestData.NULL_PARAM,
                                                          TransientDocumentUtils.getFile(TestData.SAMPLE_FILE),
                                                          TransientDocumentUtils.getOptsWithMimeType(TestData.VALID_MIME))
                                 .then(function (transientDocumentResponse) {
                                     assert.isNotNull(transientDocumentResponse);
                                     assert.isNotNull(transientDocumentResponse.getTransientDocumentId());
                                     done();
                                 })
                                 .catch(function (apiError) {
                                     StringUtil.assertEqual(apiError,
                                                            SdkErrorCodes.NO_FILE_NAME) ? done() : done(apiError);
                                 });

        });

        /**
         * Test for creating a transientDocument through the createTransientDocumentApi. Negative scenarios covered:
         * NO_MEDIA_TYPE: empty file extension and empty mime.
         * UNSUPPORTED_MEDIA_TYPE: non-empty and non matching file extension and mime.
         *
         * @throws ApiError
         */
        it('testInvalidFileExtensionAndMime', function (done) {
            transientDocumentsApi.createTransientDocument(ApiUtils.getValidHeaderParams(),
                                                          TestData.TRANSIENT_DOCUMENT_NAME,
                                                          TransientDocumentUtils.getFile(TestData.SAMPLE_FILE),
                                                          TransientDocumentUtils.getOptsWithMimeType(TestData.EMPTY_PARAM))
                                 .then(function (transientDocumentResponse) {
                                     assert.isNotNull(transientDocumentResponse);
                                     assert.isNotNull(transientDocumentResponse.getTransientDocumentId());
                                     done();
                                 })
                                 .catch(function (apiError) {
                                     StringUtil.assertEqual(apiError,
                                                            SdkErrorCodes.NO_MEDIA_TYPE) ? done() : done(apiError);
                                 });
        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/TransientDocumentUtils":82}],48:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/UserUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, UserUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Create User Api.
     */
    describe('CreateUserApiTest', function () {

        var assert = chai.assert;
        var usersApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            usersApi = UserUtils.getUsersApi();
            done();
        });

        /**
         * Test for creating user through the createUser api. Case covered is
         * successful creation of user.
         *
         * @throws ApiError
         */
        it('testCreateUser', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });
        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getNullAccessTokenHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });
        });

        /**
         * Test for creating user through the createUser api. Negative
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getEmptyXApiUserHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });
        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MISSING_REQUIRED_PARAM: null first name
         *
         * @throws ApiError
         */
        it('testNullFirstName', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(TestData.NULL_PARAM,
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MISSING_REQUIRED_PARAM: null second name
         *
         * @throws ApiError
         */
        it('testNullSecondName', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 TestData.NULL_PARAM,
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MISSING_REQUIRED_PARAM: empty first name
         *
         * @throws ApiError
         */
        it('testEmptyFirstName', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(TestData.EMPTY_PARAM,
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MUST_PROVIDE_EMAIL: null email.
         *
         * @throws ApiError
         */

        it('testNullEmail', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 TestData.NULL_PARAM);
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MUST_PROVIDE_EMAIL) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MUST_PROVIDE_EMAIL: empty email.
         *
         * @throws ApiError
         */

        it('testEmptyEmail', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 TestData.EMPTY_PARAM);
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MUST_PROVIDE_EMAIL) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MUST_PROVIDE_EMAIL: invalid email.
         *
         * @throws ApiError
         */

        it('testInvalidEmail', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 TestData.INVALID_EMAIL);
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/UserUtils":83}],49:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/UserUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, UserUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get User Info API.
     */
    describe('GetUserInfoApiTest', function () {

        var assert = chai.assert;
        var usersApi = null;
        var userId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            usersApi = UserUtils.getUsersApi();
            UserUtils.getResourceId(TestData.USER_EMAIL)
                     .then(function (userIdResponse) {
                         userId = userIdResponse;
                         done();
                     })
                     .catch(function (apiError) {
                         done(apiError);
                     });

        });

        /**
         * Test for getting details through the getUserInfo endpoint. Case covered is successful execution
         * of the API call.
         *
         * @throws ApiError
         */
        it('testGetUserDetails', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getNullAccessTokenHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });
        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getEmptyXApiUserHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * INVALID_USER_ID: null user id.
         *
         * @throws ApiError
         */
        it('testNullUserId', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   TestData.NULL_PARAM,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * INVALID_USER_ID: empty user id.
         *
         * @throws ApiError
         */
        it('testInvalidUserId', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   TestData.EMPTY_PARAM,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/UserUtils":83}],50:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/UserUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, UserUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Users API.
     */
    describe('GetUsersApiTest', function () {

        var assert = chai.assert;
        var usersApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            usersApi = UserUtils.getUsersApi();
            done();
        });

        /**
         * Test for getting users in account.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testGetUsers', function (done) {
            var opts = {};
            usersApi.getUsers(ApiUtils.getValidHeaderParams(),
                              opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for getting users in account. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            usersApi.getUsers(ApiUtils.getNullAccessTokenHeaderParams(),
                              opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting users in account. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            usersApi.getUsers(ApiUtils.getEmptyAccessTokenHeaderParams(),
                              opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);

                    });

        });

        /**
         * Test for getting users in account. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError\
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            usersApi.getUsers(ApiUtils.getEmptyXApiUserHeaderParams(),
                              opts)
                    .then(function (usersInfo) {
                        assert.isNotNull(usersInfo);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/UserUtils":83}],51:[function(require,module,exports){
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
    module.exports = factory(require('../../utils/TestData'), require('../../utils/UserUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));

}(function (TestData, UserUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Modify User Status API.
     */
    describe('ModifyUserStatusApiTest', function () {

        var assert = chai.assert;
        var userId = null;
        var usersApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            usersApi = UserUtils.getUsersApi();
            UserUtils.createUser()
                     .then(function (userIdResponse) {
                         userId = userIdResponse;
                         done();
                     }).catch(function (apiError) {
                done(apiError);
            });
        });

        /**
         * Test to modify user status through modifyUserStatus api. Negative
         * scenarios covered: MUST_PROVIDE_VALID_USER_STATUS: provided with null
         * userStatus enum
         *
         * @throws ApiError
         */
        it('testInvalidUserStatus', function (done) {
            var options = {};
            var userStatusUpdateInfo = null;
            userStatusUpdateInfo = UserUtils.getUserStatusUpdateInfo(TestData.NULL_PARAM);
            usersApi.modifyUserStatus(ApiUtils.getValidHeaderParams(),
                                      userStatusUpdateInfo,
                                      userId,
                                      options)
                    .then(function (userStatusUpdateResponse) {
                        assert.isNotNull(userStatusUpdateResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MUST_PROVIDE_VALID_USER_STATUS) ? done() : done(apiError);
                    });

        });


    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/UserUtils":83}],52:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/UserUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));

}(function (TestData, UserUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     *  Mocha unit tests for Modify Groups API.
     */
    describe('ModifyUsersApiTest', function () {

        var assert = chai.assert;
        var usersModel = AdobeSignSdk.UsersModel;
        var usersApi = null;
        var userId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            usersApi = UserUtils.getUsersApi();
            UserUtils.createUser()
                     .then(function (userIdResponse) {
                         userId = userIdResponse;
                         done();
                     })
                     .catch(function (apiError) {
                         done(apiError);
                     });

        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var userModificationInfo = new usersModel.UserModificationInfo();
            usersApi.modifyUser(ApiUtils.getNullAccessTokenHeaderParams(),
                                userModificationInfo,
                                userId,
                                opts)
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty
         * access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var userModificationInfo = new usersModel.UserModificationInfo();
            usersApi.modifyUser(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                userModificationInfo,
                                userId,
                                opts)
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            var userModificationInfo = new usersModel.UserModificationInfo();
            usersApi.modifyUser(ApiUtils.getEmptyXApiUserHeaderParams(),
                                userModificationInfo,
                                userId,
                                opts)
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null user id.
         *
         * @throws ApiError
         */
        it('testNullUserId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   TestData.NULL_PARAM,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });


        });

        /**
         * Test for modifying a user. Negative scenarios covered:
         * INVALID_USER_ID: invalid user id.
         *
         * @throws ApiError
         */
        it('testInvalidUserId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   TestData.INVALID_USER_ID,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });


        /**
         * Test for modifying a user. Negative scenarios covered:
         * INVALID_USER_ID: empty user id.
         *
         * @throws ApiError
         */
        it('testEmptyUserId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   TestData.EMPTY_PARAM,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null group id.
         *
         * @throws ApiError
         */
        it('testNullGroupId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 TestData.NULL_PARAM,
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: empty group id.
         *
         * @throws ApiError
         */
        it('testEmptyGroupId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 TestData.EMPTY_PARAM,
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: empty first name.
         *
         * @throws ApiError
         */
        it('testEmptyFirstName', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(TestData.EMPTY_PARAM,
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });


        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null first name.
         *
         * @throws ApiError
         */
        it('testNullFirstName', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(TestData.NULL_PARAM,
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });


        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null last name.
         *
         * @throws ApiError
         */
        it('testNullLastName', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 TestData.NULL_PARAM,
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });


        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: empty last name.
         *
         * @throws ApiError
         */
        it('testEmptyLastName', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 TestData.EMPTY_PARAM,
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });


        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null email.
         *
         * @throws ApiError
         */
        it('testNullEmail', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 TestData.NULL_PARAM,
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: empty email.
         *
         * @throws ApiError
         */
        it('testEmptyEmail', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 TestData.EMPTY_PARAM,
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts);
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: invalid email.
         *
         * @throws ApiError
         */
        it('testInvalidEmail', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(), userId, opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 TestData.INVALID_EMAIL,
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                    });

        });


    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/UserUtils":83}],53:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/ViewUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, ViewUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Create View Agreement Asset List APIs.
     */
    describe('CreateViewAgreementAssetListApiTest', function () {

        var assert = chai.assert;

        var viewsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            viewsApi = ViewUtils.getViewsApi();
            done();
        });

        /**
         * Test for returning the URL for manage page through the getAgreementAssetListUrl api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCreateAgreementAssetListUrl', function (done) {
            viewsApi.createAgreementAssetListUrl(ApiUtils.getValidHeaderParams(),
                                                 ViewUtils.getOptionsWithDefaultAgreementAssetListRequest())
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for returning the URL for manage page through the getAgreementAssetListUrl api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            viewsApi.createAgreementAssetListUrl(ApiUtils.getNullAccessTokenHeaderParams(),
                                                 ViewUtils.getOptionsWithDefaultAgreementAssetListRequest())
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for returning the URL for manage page through the getAgreementAssetListUrl api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            viewsApi.createAgreementAssetListUrl(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                 ViewUtils.getOptionsWithDefaultAgreementAssetListRequest())
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for returning the URL for manage page through the getAgreementAssetListUrl api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            viewsApi.createAgreementAssetListUrl(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                 ViewUtils.getOptionsWithDefaultAgreementAssetListRequest())
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/ViewUtils":84}],54:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/ViewUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, ViewUtils, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Create View Agreement Asset List APIs.
     */
    describe('CreateViewAgreementAssetsApiTest', function () {

        var assert = chai.assert;
        var libraryDocumentId = null;
        var viewsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            viewsApi = ViewUtils.getViewsApi();
            LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                .then(function (libraryDocumentIdResponse) {
                                    libraryDocumentId = libraryDocumentIdResponse;
                                    done();
                                })
                                .catch(function (apiError) {
                                    done(apiError);
                                });
        });

        /**
         * Test for returning the URL which shows the view page of given agreement asset through the getAgreementAssetUrl api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCreateAgreementAssetListUrl', function (done) {
            var opts = {};
            viewsApi.createAgreementAssetUrl(ApiUtils.getValidHeaderParams(),
                                             ViewUtils.getAgreementAssetRequest(libraryDocumentId),
                                             opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for returning the URL which shows the view page of given agreement asset through the getAgreementAssetUrl api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            viewsApi.createAgreementAssetUrl(ApiUtils.getNullAccessTokenHeaderParams(),
                                             ViewUtils.getAgreementAssetRequest(libraryDocumentId),
                                             opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for returning the URL which shows the view page of given agreement asset through the getAgreementAssetUrl api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            viewsApi.createAgreementAssetUrl(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                             ViewUtils.getAgreementAssetRequest(libraryDocumentId),
                                             opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for returning the URL which shows the view page of given agreement asset through the getAgreementAssetUrl api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            viewsApi.createAgreementAssetUrl(ApiUtils.getEmptyXApiUserHeaderParams(),
                                             ViewUtils.getAgreementAssetRequest(libraryDocumentId),
                                             opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for returning the URL which shows the view page of given agreement asset through the getAgreementAssetUrl api. Negative scenarios covered:
         * INVALID_AGREEMENT_ASSET_ID: null agreement asset Id.
         *
         * @throws ApiError
         */
        it('testNullAgreementAssetId', function (done) {
            var opts = {};
            viewsApi.createAgreementAssetUrl(ApiUtils.getValidHeaderParams(),
                                             ViewUtils.getAgreementAssetRequest(TestData.NULL_PARAM),
                                             opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_AGREEMENT_ASSET_ID) ? done() : done(apiError);
                    });

        });

        /**
         * Test for returning the URL which shows the view page of given agreement asset through the getAgreementAssetUrl api. Negative scenarios covered:
         * INVALID_AGREEMENT_ASSET_ID: empty agreement asset Id.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementAssetId', function (done) {
            var opts = {};
            viewsApi.createAgreementAssetUrl(ApiUtils.getValidHeaderParams(),
                                             ViewUtils.getAgreementAssetRequest(TestData.EMPTY_PARAM),
                                             opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_AGREEMENT_ASSET_ID) ? done() : done(apiError);
                    });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/ViewUtils":84}],55:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/ViewUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, ViewUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Create View Agreement Asset List APIs.
     */
    describe('CreateViewSettingsApiTest', function () {

        var assert = chai.assert;
        var viewsModel = AdobeSignSdk.ViewsModel;
        var viewsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            viewsApi = ViewUtils.getViewsApi();
            done();
        });

        /**
         * Test for returning the URL for settings page through the getSettingsUrl api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCreateSettingsUrl', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getValidHeaderParams(),
                                       ViewUtils.getTargetViewRequest(viewsModel.TargetViewRequest.TargetViewEnum.USER_PROFILE),
                                       opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for returning the URL for settings page through the getSettingsUrl api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getNullAccessTokenHeaderParams(),
                                       ViewUtils.getTargetViewRequest(viewsModel.TargetViewRequest.TargetViewEnum.USER_PROFILE),
                                       opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for returning the URL for settings page through the getSettingsUrl api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                       ViewUtils.getTargetViewRequest(viewsModel.TargetViewRequest.TargetViewEnum.USER_PROFILE),
                                       opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for returning the URL for settings page through the getSettingsUrl api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getEmptyXApiUserHeaderParams(),
                                       ViewUtils.getTargetViewRequest(viewsModel.TargetViewRequest.TargetViewEnum.USER_PROFILE),
                                       opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for returning the URL for settings page through the getSettingsUrl api. Negative scenarios covered:
         * INVALID_TARGET_VIEW: null agreement asset Id.
         *
         * @throws ApiError
         */
        it('testNullTargetView', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getValidHeaderParams(),
                                       ViewUtils.getTargetViewRequest(TestData.NULL_PARAM),
                                       opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_TARGET_VIEW) ? done() : done(apiError);
                    });

        });

    });

}));


},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/ViewUtils":84}],56:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, TransientDocumentUtils, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Create Widgets Api.
     */
    describe('CreateWidgetsApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetsModel = AdobeSignSdk.WidgetsModel;
        var libraryDocumentId = null;
        var transientDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            Promise.all([LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME),
                            TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)])
                   .then(function (ids) {
                       libraryDocumentId = ids[0];
                       transientDocumentId = ids[1].getTransientDocumentId();
                       done();
                   })
                   .catch(function (apiError) {
                       done(apiError);
                   });
        });

        /**
         * Test for creating a widget through the createWidget api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCreateWidget', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(ApiUtils.getWidgetName())
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(ApiUtils.getWidgetName())
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getNullAccessTokenHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(ApiUtils.getWidgetName())
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(ApiUtils.getWidgetName())
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null widgetCreationRequest.
         *
         * @throws ApiError
         */
        it('testNullWidgetCreationRequest', function (done) {
            var opts = {};
            widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                    TestData.NULL_PARAM,
                                    opts)
                      .then(function (widgetCreationResponse) {
                          assert.isNotNull(widgetCreationResponse);
                          assert.isNotNull(widgetCreationResponse.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                      });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null widget name.
         *
         * @throws ApiError
         */
        it('testNullWidgetName', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(TestData.NULL_PARAM)
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with all 4 parameters null;
         *
         * @throws ApiError
         */
        it('testInvalidFileInfo', function (done) {
            var opts = {};
            var fileInfo = new widgetsModel.WidgetFileInfo();
            var widgetCreationRequest = WidgetUtils.getWidgetCreationRequestWithFileInfo(TestData.WIDGET_NAME,
                                                                                         fileInfo);
            widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                    widgetCreationRequest,
                                    opts)
                      .then(function (widgetCreationResponse) {
                          assert.isNotNull(widgetCreationResponse);
                          assert.isNotNull(widgetCreationResponse.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                      });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * URL_INVALID: Invalid url specified in FileInfo's getDocumentUrl parameter.
         *
         * @throws ApiError
         */
        it('testInvalidUrl', function (done) {
            var opts = {};
            var fileInfo = new widgetsModel.WidgetFileInfo();
            var fileInfoUrl = new widgetsModel.WidgetURLFileInfo();
            fileInfoUrl.setUrl(TestData.INVALID_URL);
            fileInfo.setDocumentURL(fileInfoUrl);

            var widgetCreationRequest = WidgetUtils.getWidgetCreationRequestWithFileInfo(TestData.WIDGET_NAME,
                                                                                         fileInfo);
            widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                    widgetCreationRequest,
                                    opts)
                      .then(function (widgetCreationResponse) {
                          assert.isNotNull(widgetCreationResponse);
                          assert.isNotNull(widgetCreationResponse.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.URL_INVALID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with more than 1 parameter non-empty.
         *
         * @throws ApiError
         */
        it('testMoreThanOneParameterNonEmptyInFileInfo', function (done) {
            var opts = {};
            var fileInfo = new widgetsModel.WidgetFileInfo();
            fileInfo.getLibraryDocumentId(libraryDocumentId);
            fileInfo.getTransientDocumentId(transientDocumentId);
            fileInfo.getDocumentURL(TestData.NULL_PARAM);

            var widgetCreationRequest = WidgetUtils.getWidgetCreationRequestWithFileInfo(TestData.WIDGET_NAME,
                                                                                         fileInfo);
            widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                    widgetCreationRequest,
                                    opts)
                      .then(function (widgetCreationResponse) {
                          assert.isNotNull(widgetCreationResponse);
                          assert.isNotNull(widgetCreationResponse.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                      });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/TransientDocumentUtils":82,"../../utils/WidgetUtils":85}],57:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Widget Agreements API.
     */
    describe('GetWidgetAgreementsApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.getResourceId(TestData.WIDGET_NAME)
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for retrieving the agreements of the widget through the GetWidgetAgreements api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetWidgetAgreements', function (done) {
            var opts = {};
            widgetsApi.getWidgetAgreements(ApiUtils.getValidHeaderParams(),
                                           widgetId,
                                           opts)
                      .then(function (widgetAgreements) {
                          assert.isNotNull(widgetAgreements);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for retrieving the agreements of the widget through the GetWidgetAgreements api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetAgreements(ApiUtils.getNullAccessTokenHeaderParams(),
                                           widgetId,
                                           opts)
                      .then(function (widgetAgreements) {
                          assert.isNotNull(widgetAgreements);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the agreements of the widget through the GetWidgetAgreements api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetAgreements(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                           widgetId,
                                           opts)
                      .then(function (widgetAgreements) {
                          assert.isNotNull(widgetAgreements);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the agreements of the widget through the GetWidgetAgreements api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.getWidgetAgreements(ApiUtils.getEmptyXApiUserHeaderParams(),
                                           widgetId,
                                           opts)
                      .then(function (widgetAgreements) {
                          assert.isNotNull(widgetAgreements);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the agreements of the widget through the GetWidgetAgreements api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetAgreements(ApiUtils.getValidHeaderParams(),
                                           TestData.EMPTY_PARAM,
                                           opts)
                      .then(function (widgetAgreements) {
                          assert.isNotNull(widgetAgreements);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the agreements of the widget through the GetWidgetAgreements api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetAgreements(ApiUtils.getValidHeaderParams(),
                                           TestData.NULL_PARAM,
                                           opts)
                      .then(function (widgetAgreements) {
                          assert.isNotNull(widgetAgreements);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],58:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Widget Audit Trail API.
     */
    describe('GetWidgetAuditTrailApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.getResourceId(TestData.WIDGET_NAME)
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for retrieving the audit trail of a widget through the getWidgetAuditTrail api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetWidgetAuditTrail', function (done) {
            var opts = {};
            widgetsApi.getWidgetAuditTrail(ApiUtils.getValidHeaderParams(),
                                           widgetId,
                                           opts)
                      .then(function (auditTrail) {
                          assert.isNotNull(auditTrail);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for retrieving the audit trail of a widget through the getWidgetAuditTrail api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetAuditTrail(ApiUtils.getNullAccessTokenHeaderParams(),
                                           widgetId,
                                           opts)
                      .then(function (auditTrail) {
                          assert.isNotNull(auditTrail);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the audit trail of a widget through the getWidgetAuditTrail api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetAuditTrail(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                           widgetId,
                                           opts)
                      .then(function (auditTrail) {
                          assert.isNotNull(auditTrail);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the audit trail of a widget through the getWidgetAuditTrail api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.getWidgetAuditTrail(ApiUtils.getEmptyXApiUserHeaderParams(),
                                           widgetId,
                                           opts)
                      .then(function (auditTrail) {
                          assert.isNotNull(auditTrail);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the audit trail of a widget through the getWidgetAuditTrail api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetAuditTrail(ApiUtils.getValidHeaderParams(),
                                           TestData.EMPTY_PARAM,
                                           opts)
                      .then(function (auditTrail) {
                          assert.isNotNull(auditTrail);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the audit trail of a widget through the getWidgetAuditTrail api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetAuditTrail(ApiUtils.getValidHeaderParams(),
                                           TestData.NULL_PARAM,
                                           opts)
                      .then(function (auditTrail) {
                          assert.isNotNull(auditTrail);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],59:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Widget Combined Doc API.
     */
    describe('GetWidgetCombinedDocApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.getResourceId(TestData.WIDGET_NAME)
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for retrieving the single combined PDF document for the documents associated with the widget through the getWidgetCombinedDocument api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetCombinedDocument', function (done) {
            widgetsApi.getWidgetCombinedDocument(ApiUtils.getValidHeaderParams(),
                                                 widgetId,
                                                 WidgetUtils.getOptsForCombinedDocument(TestData.VERSION_ID,
                                                                                        TestData.PARTICIPANT_EMAIL,
                                                                                        TestData.AUDIT_REPORT))
                      .then(function (widgetCombinedDocument) {
                          assert.isNotNull(widgetCombinedDocument);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for retrieving the single combined PDF document for the documents associated with the widget through the getWidgetCombinedDocument api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            widgetsApi.getWidgetCombinedDocument(ApiUtils.getNullAccessTokenHeaderParams(),
                                                 widgetId,
                                                 WidgetUtils.getOptsForCombinedDocument(TestData.VERSION_ID,
                                                                                        TestData.PARTICIPANT_EMAIL,
                                                                                        TestData.AUDIT_REPORT))
                      .then(function (widgetCombinedDocument) {
                          assert.isNotNull(widgetCombinedDocument);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the single combined PDF document for the documents associated with the widget through the getWidgetCombinedDocument api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            widgetsApi.getWidgetCombinedDocument(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                 widgetId,
                                                 WidgetUtils.getOptsForCombinedDocument(TestData.VERSION_ID,
                                                                                        TestData.PARTICIPANT_EMAIL,
                                                                                        TestData.AUDIT_REPORT))
                      .then(function (widgetCombinedDocument) {
                          assert.isNotNull(widgetCombinedDocument);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the single combined PDF document for the documents associated with the widget through the getWidgetCombinedDocument api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            widgetsApi.getWidgetCombinedDocument(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                 widgetId,
                                                 WidgetUtils.getOptsForCombinedDocument(TestData.VERSION_ID,
                                                                                        TestData.PARTICIPANT_EMAIL,
                                                                                        TestData.AUDIT_REPORT))
                      .then(function (widgetCombinedDocument) {
                          assert.isNotNull(widgetCombinedDocument);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the single combined PDF document for the documents associated with the widget through the getWidgetCombinedDocument api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            widgetsApi.getWidgetCombinedDocument(ApiUtils.getValidHeaderParams(),
                                                 TestData.EMPTY_PARAM,
                                                 WidgetUtils.getOptsForCombinedDocument(TestData.VERSION_ID,
                                                                                        TestData.PARTICIPANT_EMAIL,
                                                                                        TestData.AUDIT_REPORT))
                      .then(function (widgetCombinedDocument) {
                          assert.isNotNull(widgetCombinedDocument);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the single combined PDF document for the documents associated with the widget through the getWidgetCombinedDocument api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            widgetsApi.getWidgetCombinedDocument(ApiUtils.getValidHeaderParams(),
                                                 TestData.NULL_PARAM,
                                                 WidgetUtils.getOptsForCombinedDocument(TestData.VERSION_ID,
                                                                                        TestData.PARTICIPANT_EMAIL,
                                                                                        TestData.AUDIT_REPORT))
                      .then(function (widgetCombinedDocument) {
                          assert.isNotNull(widgetCombinedDocument);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the single combined PDF document for the documents associated with the widget through the getWidgetCombinedDocument api.
         * Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            widgetsApi.getWidgetCombinedDocument(ApiUtils.getValidHeaderParams(),
                                                 widgetId,
                                                 WidgetUtils.getOptsForCombinedDocument(TestData.EMPTY_PARAM,
                                                                                        TestData.PARTICIPANT_EMAIL,
                                                                                        TestData.AUDIT_REPORT))
                      .then(function (widgetCombinedDocument) {
                          assert.isNotNull(widgetCombinedDocument);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the single combined PDF document for the documents associated with the widget through the getWidgetCombinedDocument api.
         * Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            widgetsApi.getWidgetCombinedDocument(ApiUtils.getValidHeaderParams(),
                                                 widgetId,
                                                 WidgetUtils.getOptsForCombinedDocument(TestData.VERSION_ID,
                                                                                        TestData.EMPTY_PARAM,
                                                                                        TestData.AUDIT_REPORT))
                      .then(function (widgetCombinedDocument) {
                          assert.isNotNull(widgetCombinedDocument);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                      });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],60:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Widget Audit Trail API.
     */
    describe('GetWidgetDocumentInfoApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetId = null;
        var documentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.getResourceId(TestData.WIDGET_NAME)
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           return WidgetUtils.getFirstWidgetDocumentId(widgetId);
                       })
                       .then(function (documentIdResponse) {
                           documentId = documentIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for retrieving the file stream of the given document of the widget through the getWidgetDocumentInfo api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetWidgetDocumentInfo', function (done) {
            var opts = {};
            widgetsApi.getWidgetDocumentInfo(ApiUtils.getValidHeaderParams(),
                                             widgetId,
                                             documentId,
                                             opts)
                      .then(function (widgetDocumentInfo) {
                          assert.isNotNull(widgetDocumentInfo);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for retrieving the file stream of the given document of the widget through the getWidgetDocumentInfo api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetDocumentInfo(ApiUtils.getNullAccessTokenHeaderParams(),
                                             widgetId,
                                             documentId,
                                             opts)
                      .then(function (widgetDocumentInfo) {
                          assert.isNotNull(widgetDocumentInfo);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the file stream of the given document of the widget through the getWidgetDocumentInfo api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetDocumentInfo(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                             widgetId,
                                             documentId,
                                             opts)
                      .then(function (widgetDocumentInfo) {
                          assert.isNotNull(widgetDocumentInfo);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the file stream of the given document of the widget through the getWidgetDocumentInfo api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.getWidgetDocumentInfo(ApiUtils.getEmptyXApiUserHeaderParams(),
                                             widgetId,
                                             documentId,
                                             opts)
                      .then(function (widgetDocumentInfo) {
                          assert.isNotNull(widgetDocumentInfo);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the file stream of the given document of the widget through the getWidgetDocumentInfo api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetDocumentInfo(ApiUtils.getValidHeaderParams(),
                                             TestData.EMPTY_PARAM,
                                             documentId,
                                             opts)
                      .then(function (widgetDocumentInfo) {
                          assert.isNotNull(widgetDocumentInfo);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the file stream of the given document of the widget through the getWidgetDocumentInfo api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetDocumentInfo(ApiUtils.getValidHeaderParams(),
                                             TestData.NULL_PARAM,
                                             documentId,
                                             opts)
                      .then(function (widgetDocumentInfo) {
                          assert.isNotNull(widgetDocumentInfo);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the file stream of the given document of the widget through the getWidgetDocumentInfo api.
         * Negative scenarios covered:
         * INVALID_DOCUMENT_ID: empty widgetDocumentId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetDocumentId', function (done) {
            var opts = {};
            widgetsApi.getWidgetDocumentInfo(ApiUtils.getValidHeaderParams(),
                                             widgetId,
                                             TestData.EMPTY_PARAM,
                                             opts)
                      .then(function (widgetDocumentInfo) {
                          assert.isNotNull(widgetDocumentInfo);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the file stream of the given document of the widget through the getWidgetDocumentInfo api.
         * Negative scenarios covered:
         * INVALID_DOCUMENT_ID: null widgetDocumentId.
         *
         * @throws ApiError
         */
        it('testNullWidgetDocumentId', function (done) {
            var opts = {};
            widgetsApi.getWidgetDocumentInfo(ApiUtils.getValidHeaderParams(),
                                             widgetId,
                                             TestData.NULL_PARAM,
                                             opts)
                      .then(function (widgetDocumentInfo) {
                          assert.isNotNull(widgetDocumentInfo);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                      });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],61:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Widget Documents API.
     */
    describe('GetWidgetDocumentsApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.getResourceId(TestData.WIDGET_NAME)
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for retrieving the IDs of all the main and supporting documents of the widget through the getWidgetDocuments api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetWidgetDocuments', function (done) {
            widgetsApi.getWidgetDocuments(ApiUtils.getValidHeaderParams(),
                                          widgetId,
                                          WidgetUtils.getOptsForWidgetDocuments(TestData.VERSION_ID,
                                                                                TestData.PARTICIPANT_EMAIL))
                      .then(function (widgetDocuments) {
                          assert.isNotNull(widgetDocuments);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for retrieving the IDs of all the main and supporting documents of the widget through the getWidgetDocuments api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            widgetsApi.getWidgetDocuments(ApiUtils.getNullAccessTokenHeaderParams(),
                                          widgetId,
                                          WidgetUtils.getOptsForWidgetDocuments(TestData.VERSION_ID,
                                                                                TestData.PARTICIPANT_EMAIL))
                      .then(function (widgetDocuments) {
                          assert.isNotNull(widgetDocuments);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the IDs of all the main and supporting documents of the widget through the getWidgetDocuments api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            widgetsApi.getWidgetDocuments(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                          widgetId,
                                          WidgetUtils.getOptsForWidgetDocuments(TestData.VERSION_ID,
                                                                                TestData.PARTICIPANT_EMAIL))
                      .then(function (widgetDocuments) {
                          assert.isNotNull(widgetDocuments);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the IDs of all the main and supporting documents of the widget through the getWidgetDocuments api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            widgetsApi.getWidgetDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          widgetId,
                                          WidgetUtils.getOptsForWidgetDocuments(TestData.VERSION_ID,
                                                                                TestData.PARTICIPANT_EMAIL))
                      .then(function (widgetDocuments) {
                          assert.isNotNull(widgetDocuments);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the IDs of all the main and supporting documents of the widget through the getWidgetDocuments api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            widgetsApi.getWidgetDocuments(ApiUtils.getValidHeaderParams(),
                                          TestData.EMPTY_PARAM,
                                          WidgetUtils.getOptsForWidgetDocuments(TestData.VERSION_ID,
                                                                                TestData.PARTICIPANT_EMAIL))
                      .then(function (widgetDocuments) {
                          assert.isNotNull(widgetDocuments);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the IDs of all the main and supporting documents of the widget through the getWidgetDocuments api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            widgetsApi.getWidgetDocuments(ApiUtils.getValidHeaderParams(),
                                          TestData.NULL_PARAM,
                                          WidgetUtils.getOptsForWidgetDocuments(TestData.VERSION_ID,
                                                                                TestData.PARTICIPANT_EMAIL))
                      .then(function (widgetDocuments) {
                          assert.isNotNull(widgetDocuments);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the IDs of all the main and supporting documents of the widget through the getWidgetDocuments api.
         * Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            widgetsApi.getWidgetDocuments(ApiUtils.getValidHeaderParams(),
                                          widgetId,
                                          WidgetUtils.getOptsForWidgetDocuments(TestData.EMPTY_PARAM,
                                                                                TestData.PARTICIPANT_EMAIL))
                      .then(function (widgetDocuments) {
                          assert.isNotNull(widgetDocuments);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the IDs of all the main and supporting documents of the widget through the getWidgetDocuments api.
         * Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            widgetsApi.getWidgetDocuments(ApiUtils.getValidHeaderParams(),
                                          widgetId,
                                          WidgetUtils.getOptsForWidgetDocuments(TestData.VERSION_ID,
                                                                                TestData.EMPTY_PARAM))
                      .then(function (widgetDocuments) {
                          assert.isNotNull(widgetDocuments);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                      });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],62:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Widget Form Data API.
     */
    describe('GetWidgetFormDataApiTest', function () {

        var assert = chai.assert;

        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.getResourceId(TestData.WIDGET_NAME)
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for fetching an widget's form data through the getWidgetFormData api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetFormData', function (done) {
            var opts = {};
            widgetsApi.getWidgetFormData(ApiUtils.getValidHeaderParams(),
                                         widgetId,
                                         opts)
                      .then(function (formData) {
                          assert.isNotNull(formData);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for fetching an widget's form data through the getWidgetFormData api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetFormData(ApiUtils.getNullAccessTokenHeaderParams(),
                                         widgetId,
                                         opts)
                      .then(function (formData) {
                          assert.isNotNull(formData);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for fetching an widget's form data through the getWidgetFormData api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetFormData(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                         widgetId,
                                         opts)
                      .then(function (formData) {
                          assert.isNotNull(formData);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for fetching an widget's form data through the getWidgetFormData api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.getWidgetFormData(ApiUtils.getEmptyXApiUserHeaderParams(),
                                         widgetId,
                                         opts)
                      .then(function (formData) {
                          assert.isNotNull(formData);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for fetching an widget's form data through the getWidgetFormData api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetFormData(ApiUtils.getValidHeaderParams(),
                                         TestData.EMPTY_PARAM,
                                         opts)
                      .then(function (formData) {
                          assert.isNotNull(formData);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for fetching an widget's form data through the getWidgetFormData api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetFormData(ApiUtils.getValidHeaderParams(),
                                         TestData.NULL_PARAM,
                                         opts)
                      .then(function (formData) {
                          assert.isNotNull(formData);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });
        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],63:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Widget Info API.
     */
    describe('GetWidgetInfoApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.getResourceId(TestData.WIDGET_NAME)
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetWidgetInfo', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getValidHeaderParams(),
                                     widgetId,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getNullAccessTokenHeaderParams(),
                                     widgetId,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                     widgetId,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getEmptyXApiUserHeaderParams(),
                                     widgetId,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getValidHeaderParams(),
                                     TestData.EMPTY_PARAM,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getValidHeaderParams(),
                                     TestData.NULL_PARAM,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],64:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get Widgets API.
     */
    describe('GetWidgetsApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            done();
        });

        /**
         * Test for fetching all widgets through the getWidgets api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetWidgets', function (done) {
            var opts = {};
            widgetsApi.getWidgets(ApiUtils.getValidHeaderParams(),
                                  opts)
                      .then(function (userWidgets) {
                          assert.isNotNull(userWidgets);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for fetching all widgets through the getWidgets api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgets(ApiUtils.getNullAccessTokenHeaderParams(),
                                  opts)
                      .then(function (userWidgets) {
                          assert.isNotNull(userWidgets);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for fetching all widgets through the getWidgets api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgets(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                  opts)
                      .then(function (userWidgets) {
                          assert.isNotNull(userWidgets);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for fetching all widgets through the getWidgets api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.getWidgets(ApiUtils.getEmptyXApiUserHeaderParams(),
                                  opts)
                      .then(function (userWidgets) {
                          assert.isNotNull(userWidgets);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

    });

}));


},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],65:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Update Widget Status API.
     */
    describe('UpdateWidgetStatusApiTest', function () {

        var assert = chai.assert;
        var widgetsModel = AdobeSignSdk.WidgetsModel;
        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.createWidget(ApiUtils.getWidgetName())
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Positive scenarios covered: Enable
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testUpdateWidgetStatusDisable', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Case covered is successful execution of the api call.
         * Positive scenarios covered: Disable
         *
         * @throws ApiError
         */
        it('testUpdateWidgetStatusEnable', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.ENABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getNullAccessTokenHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          TestData.EMPTY_PARAM,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          TestData.NULL_PARAM,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * NO_ACTION_SPECIFIED: null values specified in widgetStatusUpdateInfo's message and redirectUrl parameter.
         *
         * @throws ApiError
         */
        it('testNoActionSpecified', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.NULL_PARAM,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACTION_SPECIFIED) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_URL: Invalid url specified in widgetStatusUpdateInfo's redirectUrl parameter.
         *
         * @throws ApiError
         */
        it('testInvalidUrl', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.NULL_PARAM,
                                                                                TestData.INVALID_URL),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_URL) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * TOO_MANY_ACTIONS_SPECIFIED : Specify both message and redirectUrl parameter in widgetStatusUpdateInfo's.
         *
         * @throws ApiError
         */
        it('testTooManyActionsSpecified', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.REDIRECT_URL),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.TOO_MANY_ACTIONS_SPECIFIED) ? done() : done(apiError);
                      });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],66:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Update Widget Personalize API.
     */
    describe('UpdateWidgetsPersonalizeApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.createWidget(ApiUtils.getWidgetName())
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testUpdateWidgetPersonalize', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getNullAccessTokenHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });
        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getEmptyXApiUserHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               TestData.EMPTY_PARAM,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               TestData.NULL_PARAM,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_EMAIL: empty e-mail.
         *
         * @throws ApiError
         */
        it('testNullEmail', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.NULL_PARAM),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_EMAIL: invalid e-mail.
         *
         * @throws ApiError
         */
        it('testInvalidEmail', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.INVALID_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                      });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WidgetUtils":85}],67:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WorkFlowUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WorkFlowUtils, TransientDocumentUtils, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for CreateWorkFlowsAgreements APIs
     */
    describe('testCreateWorkflowAgreement', function () {

        var assert = chai.assert;
        var workFlowsApi = null;
        var workFlowId = null;
        var workflowModel = AdobeSignSdk.WorkflowsModel;
        var libraryDocumentId = null;
        var transientDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            workFlowsApi = WorkFlowUtils.getWorkFlowsApi();
            workFlowId = WorkFlowUtils.getResourceId();
            Promise.all([LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME),
                            TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)])
                   .then(function (ids) {
                       libraryDocumentId = ids[0];
                       transientDocumentId = ids[1].getTransientDocumentId();
                       done();
                   })
                   .catch(function (apiError) {
                       done(apiError);
                   });
        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api.
         *
         * @throws ApiError
         */
        it('testCreateWorkflowAgreement', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiException
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getNullAccessTokenHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });
        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiException
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)
                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });
        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiException
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios
         * covered:
         * INVALID_WORKFLOW_ID: null workflowId.
         *
         * @throws ApiException
         */
        it('testNullWorkflowId', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         TestData.NULL_PARAM,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_WORKFLOW_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios
         * covered:
         * INVALID_WORKFLOW_ID: Empty workflowId.
         *
         * @throws ApiException
         */
        it('testEmptyWorkflowId', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         TestData.EMPTY_PARAM,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_WORKFLOW_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * CUSTOMWORKFLOW_AGREEMENT_CREATION_REQUEST: null.
         *
         * @throws ApiException
         */
        it('testNullAgreementCreationRequest', function (done) {
            var opts = {};
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 TestData.NULL_PARAM,
                                                 workFlowId,
                                                 opts)
                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with all 4 parameters null.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithNullFileInfo', function (done) {
            var opts = {};
            var fileInfo = new workflowModel.CustomWorkflowFileInfo();
            var customWorkflowAgreementCreationRequest = WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo(fileInfo,
                                                                                                                             ApiUtils.getAgreementName());
            customWorkflowAgreementCreationRequest.getDocumentCreationInfo().setFileInfos(null);
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 customWorkflowAgreementCreationRequest,
                                                 workFlowId,
                                                 opts)

                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * FILE_INFO_NAME_MISSING: name field in FileInfo null.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithMissingFileInfoName', function (done) {
            var opts = {};
            var fileInfo = new workflowModel.CustomWorkflowFileInfo();
            fileInfo.name = TestData.EMPTY_PARAM;
            fileInfo.workflowLibraryDocumentId = libraryDocumentId;
            fileInfo.transientDocumentId = transientDocumentId;
            var customWorkflowAgreementCreationRequest = WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo(fileInfo,
                                                                                                                             ApiUtils.getAgreementName());
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 customWorkflowAgreementCreationRequest,
                                                 workFlowId,
                                                 opts)
                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.FILE_INFO_NAME_MISSING) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_TRANSIENTDOCUMENT_ID: empty TransientId in FileInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithEmptyTransientDocumentId', function (done) {
            var opts = {};
            var fileInfo = new workflowModel.CustomWorkflowFileInfo();
            fileInfo.name = TestData.AGREEMENT_NAME;
            fileInfo.workflowLibraryDocumentId = TestData.NULL_PARAM;
            fileInfo.transientDocumentId = TestData.EMPTY_PARAM;
            var customWorkflowAgreementCreationRequest = WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo(fileInfo,
                                                                                                                             ApiUtils.getAgreementName());
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 customWorkflowAgreementCreationRequest,
                                                 workFlowId,
                                                 opts)

                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_TRANSIENTDOCUMENT_ID) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: empty workflowLibraryDocumentId in FileInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithEmptyWorkflowLibraryDocumentId', function (done) {
            var opts = {};
            var fileInfo = new workflowModel.CustomWorkflowFileInfo();
            fileInfo.name = TestData.AGREEMENT_NAME;
            fileInfo.workflowLibraryDocumentId = TestData.EMPTY_PARAM;
            fileInfo.transientDocumentId = TestData.NULL_PARAM;
            var customWorkflowAgreementCreationRequest = WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo(fileInfo,
                                                                                                                             ApiUtils.getAgreementName());
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 customWorkflowAgreementCreationRequest,
                                                 workFlowId,
                                                 opts)
                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: Name null in documentCreationInfo;
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithNullNameInDocumentCreationInfo', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(TestData.NULL_PARAM)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * EMPTY_REDIRECT_URL: Redirect url set to empty in PostSignOptions, if specified.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithEmptyRedirectUrlInPostSignOptions', function (done) {
            var opts = {};
            var postSignOptions = new workflowModel.PostSignOptions();
            postSignOptions.redirectUrl = TestData.EMPTY_PARAM;
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithPostSignOptions(ApiUtils.getAgreementName(),
                                                                                       postSignOptions)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.EMPTY_REDIRECT_URL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_REDIRECT_URL: Invalid url specified in PostSignOption.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithInvalidRedirectUrlInPostSignOptions', function (done) {
            var opts = {};
            var postSignOptions = new workflowModel.PostSignOptions();
            postSignOptions.redirectUrl = TestData.INVALID_URL;
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithPostSignOptions(ApiUtils.getAgreementName(),
                                                                                       postSignOptions)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_REDIRECT_URL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_REDIRECT_DELAY: Negative redirect delay set in PostSignOptions.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithInvalidRedirectDelaylInPostSignOptions', function (done) {
            var opts = {};
            var postSignOptions = new workflowModel.PostSignOptions();
            postSignOptions.redirectUrl = TestData.REDIRECT_URL;
            postSignOptions.redirectDelay = TestData.INVALID_REDIRECT_DELAY;
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithPostSignOptions(ApiUtils.getAgreementName(),
                                                                                       postSignOptions)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_REDIRECT_DELAY) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * MIN_ADDRESSES_NOT_MET: Both email and fax null in recipientInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithNullEmailAndNullFaxRecipientInfo', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFaxAndEmail(ApiUtils.getAgreementName(),
                                                                                   TestData.NULL_PARAM,
                                                                                   TestData.NULL_PARAM)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MIN_ADDRESSES_NOT_MET) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_EMAIL: Wrong email set in recipientInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithInvalidEmailAndNullFaxRecipientInfo', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFaxAndEmail(ApiUtils.getAgreementName(),
                                                                                   TestData.INVALID_EMAIL,
                                                                                   TestData.NULL_PARAM)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_ARGUMENTS: Both email and fax specified in RecipientInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithValidEmailAndValidFaxInRecipientInfo', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFaxAndEmail(ApiUtils.getAgreementName(),
                                                                                   TestData.POST_EMAIL,
                                                                                   TestData.POST_FAX)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ARGUMENTS) ? done() : done(apiError);
                         });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/LibraryDocumentUtils":74,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/TransientDocumentUtils":82,"../../utils/WorkFlowUtils":86}],68:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WorkFlowUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WorkFlowUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Get WorkFlows APIs.
     */
    describe('GetWorkflowInfoApiTest', function () {

        var assert = chai.assert;
        var workFlowsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            workFlowsApi = WorkFlowUtils.getWorkFlowsApi();
            done();
        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetWorkflowInfo', function (done) {
            workFlowsApi.getWorkflows(ApiUtils.getValidHeaderParams(),
                                      WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            done(apiError);
                        });

        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            workFlowsApi.getWorkflows(ApiUtils.getNullAccessTokenHeaderParams(),
                                      WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            workFlowsApi.getWorkflows(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                      WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {

            workFlowsApi.getWorkflows(ApiUtils.getEmptyXApiUserHeaderParams(),
                                      WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi. Negative scenarios covered:
         * INVALID_GROUP_ID: empty groupId.
         *
         * @throws ApiError
         */
        it('testEmptyGroupId', function (done) {
            workFlowsApi.getWorkflows(ApiUtils.getValidHeaderParams(),
                                      WorkFlowUtils.getOptionsWithEmptyGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_GROUP_ID) ? done() : done(apiError);
                        });

        });

    });

}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WorkFlowUtils":86}],69:[function(require,module,exports){
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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WorkFlowUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'));
    
}(function (TestData, WorkFlowUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for for Get Workflow Info APIs.
     */
    describe('GetWorkflowInfoApiTest', function () {

        var assert = chai.assert;
        var workFlowsApi = null;
        var workFlowId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            workFlowsApi = WorkFlowUtils.getWorkFlowsApi();
            workFlowId = WorkFlowUtils.getResourceId();
            done();
        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi
         *
         * @throws ApiError
         */
        it('testGetWorkflowInfo', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getValidHeaderParams(),
                                         workFlowId)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getNullAccessTokenHeaderParams(),
                                         workFlowId)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                         workFlowId)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getEmptyXApiUserHeaderParams(),
                                         workFlowId)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * INVALID_WORKFLOW_ID: Null workflowId.
         *
         * @throws ApiError
         */
        it('testNullWorkflowId', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getValidHeaderParams(),
                                         TestData.NULL_PARAM)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_WORKFLOW_ID) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * INVALID_WORKFLOW_ID: Empty workflowId.
         *
         * @throws ApiError
         */
        it('testEmptyWorkflowId', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getValidHeaderParams(),
                                         TestData.EMPTY_PARAM)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_WORKFLOW_ID) ? done() : done(apiError);
                        });

        });

    });


}));

},{"../../utils/ApiUtils":71,"../../utils/SdkErrorCodes":78,"../../utils/StringUtil":80,"../../utils/TestData":81,"../../utils/WorkFlowUtils":86}],70:[function(require,module,exports){
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
        module.exports = factory(require('./ApiUtils'), require('./TransientDocumentUtils'), require('./LibraryDocumentUtils'), require('./TestData'));
}(function (ApiUtils, TransientDocumentUtils, LibraryDocumentUtils, TestData) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the Agreements API Tests.
     */
    var AgreementUtils = function () {
    };

    var agreementsApi = new AdobeSignSdk.AgreementsApi(ApiUtils.getContext());
    var agreementsModel = AdobeSignSdk.AgreementsModel;

    var optKeys = {
        AGREEMENT_QUERY_KEY: "agreementQuery",
        AGREEMENT_EXTERNAL_ID_KEY: "agreementExternalId",
        AGREEMENT_EXTERNAL_GROUP_KEY: "agreementExternalGroup",
        AGREEMENT_EXTERNAL_NAMESPACE_KEY: "agreementExternalNamespace",
        VERSION_ID_KEY: "versionId",
        ATTACH_SUPPORTING_DOCUMENTS_KEY: "attachSupportingDocuments",
        PARTICIPANT_EMAIL_KEY: "participantEmail",
        AUDIT_REPORT_KEY: "auditReport",
        INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY: "includeSupportingDocumentsPagesInfo",
        IMAGE_SIZE_KEY: "imageSizes",
        SHOW_IMAGE_AVAILIBILITY_KEY: "showImageAvailabilityOnly",
        START_PAGE_KEY: "startPage",
        END_PAGE_KEY: "endPage",
        AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY: "agreementSupportingDocumentContentFormat"

    };
    
    /**
     * Helper method that returns AgreementsApi
     * @return agreementsApi The instance of AgreementsApi
     */
    AgreementUtils.getAgreementsApi = function () {
        return agreementsApi;
    };

    /**
     * Method to return the resource id
     * @param agreementName     The name of the agreement
     * @return agreementId      The agreement id
     * @throws ApiError
     */
    AgreementUtils.getResourceId = function (agreementName) {

        return AgreementUtils.isExistingAgreement(agreementName)
                             .then(function (agreementId) {
                                 if (agreementId === null) {
                                     return AgreementUtils.createAgreement(agreementName);
                                 }
                                 else {
                                     return agreementId;
                                 }
                             })
                             .catch(ApiUtils.throwError);

    };

    /**
     * Method to check if the agreement already exits
     * @param agreementName     The name of agreement
     * @return agreementId      The agreement id
     *
     * @throws ApiError
     */
    AgreementUtils.isExistingAgreement = function (agreementName) {
        var opts = {};
        var agreementId = null;

        return agreementsApi.getAgreements(ApiUtils.getValidHeaderParams(),
                                           AgreementUtils.getOptionalParams(TestData.AGREEMENT_QUERY,
                                                                            TestData.AGREEMENT_EXTERNAL_ID,
                                                                            TestData.AGREEMENT_EXTERNAL_GROUP,
                                                                            TestData.AGREEMENT_EXTERNAL_NAMESPACE))
                            .then(function (userAgreements) {
                                var userAgreementList = userAgreements.getUserAgreementList();
                                for (var i = 0; i < userAgreementList.length; i++) {
                                    if ((userAgreementList[i].getName() === agreementName) && (userAgreementList[i].getStatus() === (agreementsModel.UserAgreement.StatusEnum.OUT_FOR_SIGNATURE))) {
                                        agreementId = userAgreementList[i].getAgreementId();
                                        return agreementId;
                                    }
                                }
                                return agreementId;
                            })
                            .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create the the agreement
     * @param name          The name of agreement
     * @return agreementId  The agreement id
     * @throws ApiError
     */
    AgreementUtils.createAgreement = function (name) {

        var agreementId = null;
        return AgreementUtils.getAgreementCreationInfo(name)
                             .then(function (agreementCreationInfo) {
                                 return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                      agreementCreationInfo);
                             })
                             .then(function (agreementCreationResponse) {
                                 return agreementCreationResponse.getAgreementId();
                             })
                             .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create AgreementCreation request
     * @param documentName              The agreement document name
     * @return AgreementCreationInfo    The agreement creation info
     * @throws ApiError
     */
    AgreementUtils.getAgreementCreationInfo = function (documentName) {
        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return AgreementUtils.getAgreementCreationInfoBasic(TestData.POST_EMAIL,
                                                                                             TestData.NULL_PARAM,
                                                                                             agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                                                             TestData.NULL_PARAM,
                                                                                             TestData.NULL_PARAM,
                                                                                             transientDocumentResponse.getTransientDocumentId(),
                                                                                             TestData.NULL_PARAM,
                                                                                             documentName,
                                                                                             agreementsModel.DocumentCreationInfo.SignatureTypeEnum.ESIGN,
                                                                                             null);
                                     })
                                     .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to to create AgreementCreation request
     *
     * @param recipientEmail                The recipient email
     * @param recipientFax                  The recipient fax
     * @param fileInfoLibraryDocumentId     The file info library document id
     * @param fileInfoLibraryDocumentName   The file info library document name
     * @param fileInfoTransientDocumentId   The file info transient document id
     * @param fileInfoDocumentUrl           The file info document Url
     * @param documentName                  The name of the document
     * @param signatureType                 The type of LibraryTemplateTypesEnum
     * @param options                       The type of LibrarySharingModeEnum
     *
     * @return AgreementCreationInfo        The agreement creation info
     * @throws ApiError
     */
    AgreementUtils.getAgreementCreationInfoBasic = function (recipientEmail,
                                                             recipientFax,
                                                             recipientRole,
                                                             fileInfoLibraryDocumentId,
                                                             fileInfoLibraryDocumentName,
                                                             fileInfoTransientDocumentId,
                                                             fileInfoDocumentUrl,
                                                             documentName,
                                                             signatureType,
                                                             options) {
        var agreementCreationInfo = new agreementsModel.AgreementCreationInfo();
        var documentCreationInfo = new agreementsModel.DocumentCreationInfo();

        var recipientInfo = new agreementsModel.RecipientInfo();
        recipientInfo.setEmail(recipientEmail);
        recipientInfo.setFax(recipientFax);

        var recipientInfoList = [];
        recipientInfoList.push(recipientInfo);

        var recipientSetInfo = new agreementsModel.RecipientSetInfo();
        recipientSetInfo.setRecipientSetMemberInfos(recipientInfoList);
        recipientSetInfo.setRecipientSetRole(recipientRole);

        var recipientSetInfoList = [];
        recipientSetInfoList.push(recipientSetInfo);
        var fileInfo = new agreementsModel.FileInfo();

        fileInfo.setLibraryDocumentId(fileInfoLibraryDocumentId);
        fileInfo.setLibraryDocumentName(fileInfoLibraryDocumentName);
        fileInfo.setTransientDocumentId(fileInfoTransientDocumentId);

        if (fileInfoDocumentUrl) {
            var urlInfo = new agreementsModel.URLFileInfo();
            urlInfo.setUrl(fileInfoDocumentUrl);
            fileInfo.setDocumentURL(urlInfo);
        }

        var fileInfoList = [];
        fileInfoList.push(fileInfo);

        documentCreationInfo.setName(documentName);
        documentCreationInfo.setRecipientSetInfos(recipientSetInfoList);

        documentCreationInfo.setFileInfos(fileInfoList);
        documentCreationInfo.setSignatureType(signatureType);
        documentCreationInfo.setSignatureFlow(agreementsModel.DocumentCreationInfo.SignatureFlowEnum.SENDER_SIGNATURE_NOT_REQUIRED);
        documentCreationInfo.setPostSignOptions(options);

        agreementCreationInfo.setDocumentCreationInfo(documentCreationInfo);

        return agreementCreationInfo;
    };
    /**
     * Helper method to get OptionalParams that will be used to get agreements through the getAgreements api.
     *
     */
    AgreementUtils.getOptionalParams = function (agreementQuery,
                                                 agreementExternalId,
                                                 agreementExternalGroup,
                                                 agreementExteranlNamespace) {
        var opts = {};
        opts[optKeys.AGREEMENT_QUERY_KEY] = agreementQuery;
        opts[optKeys.AGREEMENT_EXTERNAL_ID_KEY] = agreementExternalId;
        opts[optKeys.AGREEMENT_EXTERNAL_GROUP_KEY] = agreementExternalGroup;
        opts[optKeys.AGREEMENT_EXTERNAL_NAMESPACE_KEY] = agreementExteranlNamespace;
        return opts;
    };

    /**
     * Helper method to get Agreement statusUpdateInfo
     * @param status the status to set in AgreementStatusUpdateInfo
     *
     *  @return AgreementStatusUpdateInfo The agreement status update info
     */
    AgreementUtils.getAgreementStatusUpdateInfo = function (status) {
        var updateInfo = new agreementsModel.AgreementStatusUpdateInfo();
        updateInfo.setValue(status);
        return updateInfo;
    };

    /**
     * Helper method to create AgreementCreation request
     *
     * @param documentName            The agreement document name
     * @param fileInfo                      The fileInfo that will used in agreementCreation request
     *
     * @return AgreementCreationInfo  The agreement creation info
     */
    AgreementUtils.getAgreementCreationInfoWithFileInfo = function (documentName,
                                                                    fileInfo) {
        return AgreementUtils.getAgreementCreationInfoBasic(TestData.POST_EMAIL,
                                                            TestData.NULL_PARAM,
                                                            agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                            fileInfo.getLibraryDocumentId(),
                                                            fileInfo.getLibraryDocumentName(),
                                                            fileInfo.getTransientDocumentId(),
                                                            fileInfo.getDocumentURL() ? fileInfo.getDocumentURL().getUrl() : TestData.NULL_PARAM,
                                                            documentName,
                                                            agreementsModel.DocumentCreationInfo.SignatureTypeEnum.ESIGN,
                                                            null)
    };

    /**
     * Helper method to create AgreementCreation request
     * @param documentName              The agreement document name
     * @param options                   The PostSignOptions that will used in agreementCreation request
     *
     * @return AgreementCreationInfo    The agreement creation info
     */
    AgreementUtils.getAgreementCreationInfoWithPostSignOptions = function (documentName,
                                                                           options) {
        return AgreementUtils.getLibraryDocumentId()
                             .then(function (libraryDocumentId) {
                                 return AgreementUtils.getAgreementCreationInfoBasic(TestData.POST_EMAIL,
                                                                                     TestData.NULL_PARAM,
                                                                                     agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                                                     libraryDocumentId,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     documentName,
                                                                                     agreementsModel.DocumentCreationInfo.SignatureTypeEnum.ESIGN,
                                                                                     options);
                             })
                             .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to fetch libraryDocumentId
     *
     * @return id    The LibraryDocumentId
     */
    AgreementUtils.getLibraryDocumentId = function () {
        return LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                   .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create AgreementCreation request
     *
     * @param recipientEmail the recipient email
     * @param recipientFax the recipient fax
     * @param recipientRole the reci[ient role
     * @param documentName The name of the document
     *
     *  @return AgreementCreationInfo The agreement creation info
     */
    AgreementUtils.getAgreementCreationInfoWithRecipientInfo = function (recipientEmail,
                                                                         recipientFax,
                                                                         recipientRole,
                                                                         documentName) {
        return AgreementUtils.getLibraryDocumentId()
                             .then(function (libraryDocumentId) {
                                 return AgreementUtils.getAgreementCreationInfoBasic(recipientEmail,
                                                                                     recipientFax,
                                                                                     recipientRole,
                                                                                     libraryDocumentId,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     documentName,
                                                                                     agreementsModel.DocumentCreationInfo.SignatureTypeEnum.ESIGN,
                                                                                     TestData.NULL_PARAM);
                             })
                             .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create AgreementCreation request
     * @param signatureType             The type of LibraryTemplateTypesEnum
     * @param documentName              The name of the document
     *
     * @return AgreementCreationInfo    The agreement creation info
     */
    AgreementUtils.getAgreementCreationInfoWithSignatureType = function (signatureType,
                                                                         documentName) {
        return AgreementUtils.getLibraryDocumentId()
                             .then(function (libraryDocumentId) {
                                 return AgreementUtils.getAgreementCreationInfoBasic(TestData.POST_EMAIL,
                                                                                     TestData.NULL_PARAM,
                                                                                     agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                                                     libraryDocumentId,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     documentName,
                                                                                     signatureType,
                                                                                     null);
                             })
                             .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create AgreementCreation request
     * @param email             The email that needs to be set in AlternateParticipantInfo
     * @param privateMessage    The privateMessage that needs to be set in AlternateParticipantInfo
     *
     *  @return AgreementCreationInfo The agreement creation info
     */
    AgreementUtils.getAlternateParticipantInfo = function (email,
                                                           privateMessage) {
        var updateInfo = new agreementsModel.AlternateParticipantInfo();
        updateInfo.email = email;
        updateInfo.privateMessage = privateMessage;
        return updateInfo;

    }

    AgreementUtils.getFirstDocumentId = function (agreementId) {
        return agreementsApi.getAllDocuments(ApiUtils.getValidHeaderParams(),
                                             agreementId)
                            .then(function (agreementDocuments) {
                                var documents = agreementDocuments.getDocuments();
                                var documentId = documents[0].getDocumentId();
                                return documentId;
                            })

    };

    AgreementUtils.getOptsForDocumentUrl = function (versionId,
                                                     participantEmail) {
        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        return opts;

    };

    AgreementUtils.getOptsForCombinedDocPagesInfo = function (includeSupportingDocumentsPagesInfo) {
        var opts = {};
        opts[optKeys.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY] = includeSupportingDocumentsPagesInfo;
        return opts;

    };

    AgreementUtils.getOptsForCombinedDocumentAndDocUrl = function (versionId,
                                                                   participantEmail,
                                                                   attachSupportingDocuments,
                                                                   auditReport) {
        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        opts[optKeys.ATTACH_SUPPORTING_DOCUMENTS_KEY] = attachSupportingDocuments;
        opts[optKeys.AUDIT_REPORT_KEY] = auditReport;
        return opts;

    };

    AgreementUtils.getOptsForDocumentImageUrl = function (versionId,
                                                          participantEmail,
                                                          imageSizes,
                                                          showImageAvailabilityOnly,
                                                          startPage,
                                                          endPage) {
        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        opts[optKeys.IMAGE_SIZE_KEY] = imageSizes;
        opts[optKeys.SHOW_IMAGE_AVAILIBILITY_KEY] = showImageAvailabilityOnly;
        opts[optKeys.START_PAGE_KEY] = startPage;
        opts[optKeys.END_PAGE_KEY] = endPage;
        return opts;

    };

    AgreementUtils.getOptsForDocuments = function (versionId,
                                                   participantEmail,
                                                   supportingDocumentContentFormat) {
        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        opts[optKeys.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY] = supportingDocumentContentFormat;
        return opts;

    };

    return AgreementUtils;
}));


},{"./ApiUtils":71,"./LibraryDocumentUtils":74,"./TestData":81,"./TransientDocumentUtils":82}],71:[function(require,module,exports){
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
        module.exports = factory(require('./TestData'));
   
}(function (TestData) {
  'use strict';

  /**
   * This file contains basic utility functions which will be used by the Tests.
   */
  var ApiUtils = function () {
  };

  var context = new AdobeSignSdk.Context();

  /**
   *
   * Helper method to get Context.
   */
  ApiUtils.getContext = function() {
    return context;
  };

  /**
   *
   * Helper method to set Context
   */
  ApiUtils.setContext = function(newContext) {
    context = newContext;
  };

  /**
   *
   * Helper method to configure Property
   */
  ApiUtils.configureProperty = function () {
    ApiUtils.configureEnvHostName();
  };

  /**
   * Helper method to configure Environment host name
   */
  ApiUtils.configureEnvHostName = function () {
    context.setEnvHostName(TestData.ENV_HOST_NAME);
  };
  var HEADER_PARAM_KEYS = {
    ACCESS_TOKEN_KEY: "accessToken",
    X_API_USER_KEY: "xApiUser"
  };

  /**
   * Returns a JSON of Valid Hearder Params
   */
  ApiUtils.getValidHeaderParams = function () {
    var headerParams = {};
    headerParams[HEADER_PARAM_KEYS.ACCESS_TOKEN_KEY] = TestData.ACCESS_TOKEN;
    headerParams[HEADER_PARAM_KEYS.X_API_USER_KEY] = TestData.X_API_HEADER;
    return headerParams;
  };

  /**
   * Returns a JSON of Hearder Params with NULL Access_Token and Valid X_API_USER
   */
  ApiUtils.getNullAccessTokenHeaderParams = function () {
    var headerParams = {};
    headerParams[HEADER_PARAM_KEYS.ACCESS_TOKEN_KEY] = TestData.NULL_PARAM;
    headerParams[HEADER_PARAM_KEYS.X_API_USER_KEY] = TestData.X_API_HEADER;
    return headerParams;
  };

  /**
   * Returns a JSON of Hearder Params with Empty Access_Token and Valid X_API_USER
   */
  ApiUtils.getEmptyAccessTokenHeaderParams = function () {
    var headerParams = {};
    headerParams[HEADER_PARAM_KEYS.ACCESS_TOKEN_KEY] = TestData.EMPTY_PARAM;
    headerParams[HEADER_PARAM_KEYS.X_API_USER_KEY] = TestData.X_API_HEADER;
    return headerParams;
  };

  /**
   * Returns a JSON of Hearder Params with Valid Access_Token and Empty X_API_USER
   */
  ApiUtils.getEmptyXApiUserHeaderParams = function () {
    var headerParams = {};
    headerParams[HEADER_PARAM_KEYS.ACCESS_TOKEN_KEY] = TestData.ACCESS_TOKEN;
    headerParams[HEADER_PARAM_KEYS.X_API_USER_KEY] = TestData.EMPTY_PARAM;
    return headerParams;
  };

  /**
   * Helper method that returns a Group name appending the time stamp
   */
  ApiUtils.getGroupName = function () {
    return TestData.GROUP_NAME_PREFIX + Number(new Date());
  };

  /**
   * Helper method that returns a Agreement name appending the time stamp
   */
  ApiUtils.getAgreementName = function () {
    return TestData.AGREEMENT_NAME_PREFIX + Number(new Date());
  };

  /**
   * Helper method returns First name
   */
  ApiUtils.getFirstName = function () {
    return TestData.FIRST_NAME;
  };

  /**
   * Helper method returns Last name
   */
  ApiUtils.getLastName = function () {
    return TestData.LAST_NAME;
  };

  /**
   * Helper method returns Email appending the time stamp
   */
  ApiUtils.getEmail = function () {
    return TestData.EMAIL_PREFIX + Number(Date.now().toString()) + TestData.EMAIL_DOMAIN;
  };

  /**
   * Helper method that returns a Group name appending the time stamp
   */
  ApiUtils.getMegaSignName = function () {
    return TestData.MEGASIGN_NAME_PREFIX + Date.now().toString();
  };

  /**
   * Helper method that returns a Group name appending the time stamp
   */
  ApiUtils.getAgreementName = function () {
    return TestData.AGREEMENT_NAME_PREFIX + Date.now().toString();
  };

  /**
   * Helper method that throws an Api Error
   */
  ApiUtils.throwError = function (apiError) {
    throw apiError;
  };

  /**
   * Helper method that log the error on console
   */
  ApiUtils.logError = function (apiError) {
    console.log(apiError);
  };

  /**
   * Helper method that returns the resources folder path
   */
  ApiUtils.getResourcesFolderPath = function () {
    //return path.join(path.dirname(__dirname), TestData.REQUEST_PATH);
  };

  //Helper method to get user email
  ApiUtils.getUserEmail = function () {
    return TestData.EMAIL_PREFIX + Date.now().toString() + TestData.EMAIL_DOMAIN;
  };
  /*
   * Helper method that returns the library document name
   */
  ApiUtils.getLibraryDocumentName = function () {
    return TestData.LIBRARY_DOCUMENT_NAME_PREFIX + Date.now().toString();
  };

  /*
   * Helper method that returns the widget name
   */
  ApiUtils.getWidgetName = function () {
    return TestData.WIDGET_NAME_PREFIX + Date.now().toString();
  };

  /**
   * Helper method that gets Date for given offset from current date in ISO format
   */
  ApiUtils.getDate = function (offset) {
    var currentDate = new Date();
    var newDate = new Date();
    newDate.setDate(currentDate.getDate() - offset);
    return newDate.toISOString();
  };


  return ApiUtils;
}));

},{"./TestData":81}],72:[function(require,module,exports){
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
        module.exports = factory(require('./ApiUtils'));
    
}(function (ApiUtils) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the BaseUris API Tests.
     */
    var BaseUriUtils = function () {
    };

    var baseUrisApi = new AdobeSignSdk.BaseUrisApi(ApiUtils.getContext());
    
    /**
    * Helper method that returns baseUrisApi
    * @return baseUrisApi   The instance of BaseUrisApi
    */
    BaseUriUtils.getBaseUrisApi = function () {
        return baseUrisApi;
    };

    return BaseUriUtils;
}));


},{"./ApiUtils":71}],73:[function(require,module,exports){
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
        module.exports = factory(require('./ApiUtils'));
  
}(function (ApiUtils) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the Group Api Tests.
     */
    var GroupUtils = function () {
    };

    var groupsApi = new AdobeSignSdk.GroupsApi(ApiUtils.getContext());
    var groupsModel = AdobeSignSdk.GroupsModel;

    GroupUtils.getGroupsApi = function () {
        return groupsApi;
    };

    GroupUtils.getResourceId = function (groupName) {
        return GroupUtils.isExistingGroup(groupName)
                         .then(function (groupId) {
                             if (groupId == null) {
                                 return GroupUtils.createGroup(groupName);
                             }
                             else {
                                 return groupId;
                             }
                         })
                         .catch(ApiUtils.throwError);
    };

    GroupUtils.isExistingGroup = function (groupName) {
        var opts = {};
        var groupId = null;

        return groupsApi.getGroups(ApiUtils.getValidHeaderParams(),
                                   opts)
                        .then(function (GroupsInfo) {
                            var groupInfoList = GroupsInfo.getGroupInfoList();
                            for (var i = 0; i < groupInfoList.length; i++) {
                                if (groupInfoList[i].getGroupName() === groupName) {
                                    groupId = groupInfoList[i].getGroupId();
                                    return groupId;
                                }
                            }
                            return groupId;
                        })
                        .catch(ApiUtils.throwError);

    };

    GroupUtils.createGroup = function (name) {
        var opts = {};
        var groupCreationInfo = new groupsModel.GroupCreationInfo();
        groupCreationInfo.setGroupName(name);
        return groupsApi.createGroup(ApiUtils.getValidHeaderParams(),
                                     groupCreationInfo,
                                     opts)
                        .then(function (groupCreationResponse) {
                            return groupCreationResponse.getGroupId();
                        })
                        .catch(ApiUtils.throwError);

    };

    GroupUtils.getGroupCreationInfo = function (groupName) {
        var groupCreationInfo = new groupsModel.GroupCreationInfo();
        groupCreationInfo.setGroupName(groupName);
        return groupCreationInfo;
    };


    return GroupUtils;

}));

},{"./ApiUtils":71}],74:[function(require,module,exports){
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
        module.exports = factory(require('../utils/ApiUtils'), require('../utils/TransientDocumentUtils'), require('../utils/TestData'));
}(function (ApiUtils, TransientDocumentUtils, TestData) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the LibraryDocuments API Tests. 
     */

    var LibraryDocumentsUtils = function () {
    };

    var libraryDocumentsApi = new AdobeSignSdk.LibraryDocumentsApi(ApiUtils.getContext());
    var libraryDocumentModel = AdobeSignSdk.LibraryDocumentsModel;

    /**
     * Helper method that returns LibraryDocumentsApi.
     * 
     * @return libraryDocumentsApi   The instance of LibraryDocumentsApi
     */
    LibraryDocumentsUtils.getLibraryDocumentsApi = function () {
        return libraryDocumentsApi;
    };

    /**
     * Method to return the resource id
     * @param libraryDocumentName The name of Library document
     * @param opts optional parameter
     *
     * @return libraryDocumentId The library document id
     */
    LibraryDocumentsUtils.getResourceId = function (libraryDocumentName,
                                                    opts) {
        return LibraryDocumentsUtils.isExistingLibraryDocument(libraryDocumentName)
                                    .then(function (libraryDocumentId) {
                                        if (libraryDocumentId === null) {
                                            return LibraryDocumentsUtils.createLibraryDocument(libraryDocumentName);
                                        }
                                        else {
                                            return libraryDocumentId;
                                        }
                                    })
                                    .catch(ApiUtils.throwError);
    };

    /**
     * Method to check if the library document already exits
     * @param libraryDocumentName The name of Library document
     * @param opts optional parameter
     *
     * @return libraryDocumentId The library document id
     */
    LibraryDocumentsUtils.isExistingLibraryDocument = function (libraryDocumentName,
                                                                opts) {

        var libraryDocumentId = null;

        return libraryDocumentsApi.getLibraryDocuments(ApiUtils.getValidHeaderParams())
                                  .then(function (documentLibraryItems) {
                                      var documentLibraryItems = documentLibraryItems.getLibraryDocumentList();
                                      for (var i; i < documentLibraryItems.length; i++) {
                                          var documentLibraryItem = documentLibraryItems[i];
                                          if ((documentLibraryItem.getName() === libraryDocumentName) && (documentLibraryItem.getName() === libraryDocumentModel.DocumentLibraryItem.ScopeEnum.PERSONAL)) {
                                              libraryDocumentId = documentLibraryItem.getLibraryDocumentId();
                                              return libraryDocumentId;
                                          }
                                      }
                                      return libraryDocumentId;
                                  })
                                  .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create library document
     * @param name The Library document name
     * @param opts optional parameter
     *
     * @return libraryDocumentId The library document id
     */
    LibraryDocumentsUtils.createLibraryDocument = function (name,
                                                            opts) {
        var opts = {};
        return LibraryDocumentsUtils.getLibraryCreationInfo(name)
                                    .then(function (libraryCreationInfo) {
                                        return libraryDocumentsApi.createLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                                                         libraryCreationInfo,
                                                                                         opts)
                                    })
                                    .then(function (libraryDocumentCreationResponse) {
                                        return libraryDocumentCreationResponse.getLibraryDocumentId();
                                    })
                                    .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create library creation info
     * @param documentName The library document name
     * @param opts optional parameter
     *
     * @return LibraryCreationInfo The library creation info
     */
    LibraryDocumentsUtils.getLibraryCreationInfo = function (documentName,
                                                             opts) {

        var libraryTemplateTypesEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibraryTemplateTypesEnum;
        var librarySharingModeEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibrarySharingModeEnum;

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return LibraryDocumentsUtils.getLibraryCreationInfoUtil(new Array(libraryTemplateTypesEnum.DOCUMENT),
                                                                                                 librarySharingModeEnum.USER,
                                                                                                 TestData.NULL_PARAM,
                                                                                                 TestData.NULL_PARAM,
                                                                                                 transientDocumentResponse.getTransientDocumentId(),
                                                                                                 TestData.NULL_PARAM,
                                                                                                 documentName);

                                     })
                                     .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to create library document creation request
     * @param templateType type of LibraryTemplateTypesEnum
     * @param sharingMode type of LibrarySharingModeEnum
     * @param libraryDocumentId The file info library document id
     * @param libraryDocumentName The file info library document name
     * @param transientDocumentId The file info transient document id
     * @param fileInfoDocumentUrl The file info document Url
     * @param documentName The name of the document
     * @param opts optional parameter
     *
     * @return libraryCreationInfo
     */
    LibraryDocumentsUtils.getLibraryCreationInfoUtil = function (templateType,
                                                                 sharingMode,
                                                                 libraryDocumentId,
                                                                 libraryDocumentName,
                                                                 transientDocumentId,
                                                                 fileInfoDocumentUrl,
                                                                 documentName,
                                                                 opts) {

        var libraryCreationInfo = new libraryDocumentModel.LibraryCreationInfo();
        var libraryDocumentCreationInfo = new libraryDocumentModel.LibraryDocumentCreationInfo();

        libraryDocumentCreationInfo.setLibrarySharingMode(sharingMode);
        libraryDocumentCreationInfo.setLibraryTemplateTypes(templateType);
        var fileInfo = new libraryDocumentModel.FileInfo();

        fileInfo.setLibraryDocumentId(libraryDocumentId);
        fileInfo.setLibraryDocumentName(libraryDocumentName);
        fileInfo.setTransientDocumentId(transientDocumentId);

        if (fileInfoDocumentUrl) {
            var urlFileInfo = new libraryDocumentModel.URLFileInfo();
            urlFileInfo.setUrl(fileInfoDocumentUrl);
            fileInfo.documentURL = urlFileInfo;
        }
        var fileInfoList = new Array(fileInfo);

        libraryDocumentCreationInfo.setName(documentName);
        libraryDocumentCreationInfo.setFileInfos(fileInfoList);
        libraryCreationInfo.setLibraryDocumentCreationInfo(libraryDocumentCreationInfo);
        return libraryCreationInfo;
    };

    /**
     * Helper method to get document id
     * @param libraryDocumentId The library document id
     * @param opts optional parameter
     *
     * @return DocumentId document id
     */
    LibraryDocumentsUtils.getDocumentId = function (libraryDocumentId,
                                                    opts) {
        var opts = {};
        return libraryDocumentsApi.getDocuments(ApiUtils.getValidHeaderParams(),
                                                libraryDocumentId,
                                                opts)
                                  .then(function (documents) {
                                      return (documents.getDocuments()[0]).getDocumentId();
                                  })
                                  .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to create library creation info with FileInfo options
     * @param documentName The library document name
     * @param fileInfo the fileInfo for libraryCreationInfo
     * @param opts optional parameter
     *
     * @return LibraryCreationInfo
     */
    LibraryDocumentsUtils.getLibraryCreationInfoWithFileInfo = function (documentName,
                                                                         fileInfo,
                                                                         opts) {
        var libraryTemplateTypesEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibraryTemplateTypesEnum;
        var librarySharingModeEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibrarySharingModeEnum;

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return LibraryDocumentsUtils.getLibraryCreationInfoUtil(new Array(libraryTemplateTypesEnum.DOCUMENT),
                                                                                                 librarySharingModeEnum.USER,
                                                                                                 fileInfo.getLibraryDocumentId(),
                                                                                                 fileInfo.getLibraryDocumentName(),
                                                                                                 fileInfo.getTransientDocumentId(),
                                                                                                 fileInfo.getDocumentURL(),
                                                                                                 documentName);

                                     })
                                     .catch(ApiUtils.throwError);

    };
    /**
     * Helper method to create library creation info with template type and sharing type
     * @param documentName The library document name
     * @param templateType The library template type
     * @param sharingMode  The library sharing mode
     * @param opts optional parameter
     *
     * @return LibraryCreationInfo The library creation info
     */
    LibraryDocumentsUtils.getLibraryCreationInfoWithTemplateTypeAndSharingType = function (documentName,
                                                                                           templateType,
                                                                                           sharingMode,
                                                                                           opts) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return LibraryDocumentsUtils.getLibraryCreationInfoUtil(templateType,
                                                                                                 sharingMode,
                                                                                                 TestData.NULL_PARAM,
                                                                                                 TestData.NULL_PARAM,
                                                                                                 transientDocumentResponse.getTransientDocumentId(),
                                                                                                 TestData.NULL_PARAM,
                                                                                                 documentName);

                                     })
                                     .catch(ApiUtils.throwError);
    };
    return LibraryDocumentsUtils;
}));

},{"../utils/ApiUtils":71,"../utils/TestData":81,"../utils/TransientDocumentUtils":82}],75:[function(require,module,exports){
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
        module.exports = factory(require('../utils/ApiUtils'), require('./LibraryDocumentUtils'), require('../utils/TestData'));
}(function (ApiUtils, LibraryDocumentUtils, TestData) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the MegaSigns API Tests. 
     */
    var MegaSignUtils = function () {
    };

    var megaSignsApi = new AdobeSignSdk.MegaSignsApi(ApiUtils.getContext());
    var megaSignsModel = AdobeSignSdk.MegaSignsModel;

    /**
     * Helper method that returns MegaSigns Api.
     *
     * @return megaSignsApi   The instance of MegaSigns Api.
     */
    MegaSignUtils.getMegaSignsApi = function () {
        return megaSignsApi;
    };

    /**
     * Method to return the resource id
     * @param megaSignName The name of megaSign agreement
     * @return megaSignId The  id of megaSign agreement
     *
     * throws ApiError
     */
    MegaSignUtils.getResourceId = function (megaSignName) {
        return MegaSignUtils.isExistingMegaSign(megaSignName)
                            .then(function (megaSignId) {
                                if (megaSignId === null) {
                                    return MegaSignUtils.createMegaSign(megaSignName);
                                }
                                else {
                                    return megaSignId;
                                }
                            })
                            .catch(ApiUtils.throwError);

    };

    /**
     * Method to check if the MegaSign already exits
     * @param megaSignName The name of megaSign agreement
     * @return megaSignId The  id of megaSign agreement
     *
     * throws ApiError
     */
    MegaSignUtils.isExistingMegaSign = function (staticMegaSignName) {
        var opts = {};
        var megaSignId = null;

        return megaSignsApi.getMegaSigns(ApiUtils.getValidHeaderParams(),
                                         TestData.MEGASIGN_QUERY,
                                         opts)
                           .then(function (megaSign) {
                               var megaSignList = megaSign.megaSignList;
                               var length = megaSignList.length;
                               for (var i = 0; i < length; i++) {
                                   if (((megaSignList)[i].getName() === staticMegaSignName) && ((megaSignList)[i].getStatus() === (megaSignsModel.MegaSign.StatusEnum.OUT_FOR_SIGNATURE))) {
                                       megaSignId = megaSignList[i].getMegaSignId();
                                       return megaSignId;
                                   }
                               }
                               return megaSignId;
                           })
                           .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create the MegaSign
     * @param name The name of megaSign agreement
     *
     * @return megaSignId The  id of megaSign agreement
     */
    MegaSignUtils.createMegaSign = function (name) {
        return MegaSignUtils.getMegaSignCreationRequest(name)
                            .then(function (megaSignCreationRequest) {
                                var opts = {};
                                return megaSignsApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                                   megaSignCreationRequest,
                                                                   opts);
                            })
                            .then(function (megaSignCreationResponse) {
                                return megaSignCreationResponse.getMegaSignId();
                            })
                            .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create MegaSignCreation request
     * @param documentName The name of megaSign agreement
     *
     * @return megaSignCreationRequest
     */
    MegaSignUtils.getMegaSignCreationRequest = function (documentName) {

        var signatureTypeEnum = megaSignsModel.MegaSignCreationInfo.SignatureTypeEnum;

        return LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                   .then(function (libraryDocumentId) {
                                       return MegaSignUtils.getMegaSignAgreementCreationRequest(TestData.POST_EMAIL,
                                                                                                TestData.NULL_PARAM,
                                                                                                libraryDocumentId,
                                                                                                TestData.NULL_PARAM,
                                                                                                TestData.NULL_PARAM,
                                                                                                TestData.NULL_PARAM,
                                                                                                documentName,
                                                                                                signatureTypeEnum.ESIGN,
                                                                                                null);

                                   })
                                   .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to fetch the library document id from MegaSign creation request
     * @param recipientEmail the recipient email
     * @param recipientFax the recipient fax
     * @param fileInfoLibraryDocumentId The file info library document id
     * @param fileInfoLibraryDocumentName The file info library document name
     * @param fileInfoTransientDocumentId The file info transient document id
     * @param fileInfoDocumentUrl The file info document Url
     * @param documentName The name of the document
     * @param signatureType type of LibraryTemplateTypesEnum
     * @param options type of LibrarySharingModeEnum
     *
     *  @return megaSignCreationRequest
     */
    MegaSignUtils.getMegaSignAgreementCreationRequest = function (recipientEmail,
                                                                  recipientFax,
                                                                  fileInfoLibraryDocumentId,
                                                                  fileInfoLibraryDocumentName,
                                                                  fileInfoTransientDocumentId,
                                                                  fileInfoDocumentUrl,
                                                                  documentName,
                                                                  signatureType,
                                                                  options) {

        var megaSignCreationRequest = new megaSignsModel.MegaSignCreationRequest();
        var megaSignCreationInfo = new megaSignsModel.MegaSignCreationInfo();
        var recipientInfo = new megaSignsModel.RecipientInfo();

        recipientInfo.setEmail(recipientEmail);
        recipientInfo.setFax(recipientFax);

        var recipientSetInfo = new megaSignsModel.RecipientSetInfo();

        recipientSetInfo.setRecipientSetMemberInfos(new Array(recipientInfo));
        megaSignCreationInfo.setRecipientSetInfos(new Array(recipientSetInfo));

        var fileInfo = new megaSignsModel.FileInfo();

        fileInfo.setLibraryDocumentId(fileInfoLibraryDocumentId);
        fileInfo.setLibraryDocumentName(fileInfoLibraryDocumentName);
        fileInfo.setTransientDocumentId(fileInfoTransientDocumentId);

        if (fileInfoDocumentUrl) {
            var urlFileInfo = new megaSignsModel.URLFileInfo();
            urlFileInfo.setUrl(fileInfoDocumentUrl);
            fileInfo.setDocumentURL(urlFileInfo);
        }
        var fileInfoList = new Array(fileInfo);

        megaSignCreationInfo.setName(documentName);
        megaSignCreationInfo.setFileInfos(fileInfoList);
        megaSignCreationInfo.setSignatureType(signatureType);
        megaSignCreationInfo.setPostSignOptions(options);

        megaSignCreationRequest.setMegaSignCreationInfo(megaSignCreationInfo);

        return megaSignCreationRequest;
    };

    /**
     * Helper method to create MegaSignCreation request with FileInfo options
     * @param documentName the MegaSign document name
     * @param fileInfo the fileInfo for megaSigncreationRequest
     *
     * @return megaSignCreationRequest
     */
    MegaSignUtils.getMegaSignCreationRequestWithFileInfo = function (documentName,
                                                                     fileInfo) {
        return MegaSignUtils.getMegaSignAgreementCreationRequest(TestData.POST_EMAIL,
                                                                 TestData.NULL_PARAM,
                                                                 fileInfo.getLibraryDocumentId(),
                                                                 fileInfo.getLibraryDocumentName(),
                                                                 fileInfo.getTransientDocumentId(),
                                                                 fileInfo.getDocumentURL(),
                                                                 documentName,
                                                                 megaSignsModel.MegaSignCreationInfo.SignatureTypeEnum.ESIGN,
                                                                 null);

    };

    /**
     * Helper method to create MegaSignCreation request with PostSign options
     * @param documentName the MegaSign document name
     * @param postSignOptions the postSigning options for megaSigncreation request
     *
     * @return megaSignCreationRequest
     */
    MegaSignUtils.getMegaSignCreationRequestWithPostSignOptions = function (documentName,
                                                                            postSignOptions) {
        var signatureTypeEnum = megaSignsModel.MegaSignCreationInfo.SignatureTypeEnum;

        return LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                   .then(function (libraryDocumentId) {
                                       return MegaSignUtils.getMegaSignAgreementCreationRequest(TestData.POST_EMAIL,
                                                                                                TestData.NULL_PARAM,
                                                                                                libraryDocumentId,
                                                                                                TestData.NULL_PARAM,
                                                                                                TestData.NULL_PARAM,
                                                                                                TestData.NULL_PARAM,
                                                                                                documentName,
                                                                                                signatureTypeEnum.ESIGN,
                                                                                                postSignOptions);

                                   })
                                   .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create MegaSignStatusUpdateInfo
     * @param status the status that we need to set in megaSignStatusUpdateInfo
     *
     * @return megaSignStatusUpdateInfo
     */
    MegaSignUtils.getMegaSignStatusUpdateInfo = function (status) {
        var megaSignStatusUpdateInfo = new megaSignsModel.MegaSignStatusUpdateInfo();
        megaSignStatusUpdateInfo.setValue(status);
        return megaSignStatusUpdateInfo;

    };

    return MegaSignUtils;
}));

},{"../utils/ApiUtils":71,"../utils/TestData":81,"./LibraryDocumentUtils":74}],76:[function(require,module,exports){
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
        module.exports = factory(require('./ApiUtils'));
    
}(function (ApiUtils) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the OAuth API Tests. 
     */
    var OAuthUtils = function () {
    };

    var oAuthApi = new AdobeSignSdk.OAuthApi(ApiUtils.getContext());
    var oAuthModel = AdobeSignSdk.OAuthModel;

    OAuthUtils.getOAuthApi = function () {
        return oAuthApi;
    };

    /**
     * Get AccessTokenRequest Object
     * @param clientId
     * @param clientSecret
     * @param redirectUri
     * @param code
     * @param grantType
     * @return AccessTokenRequest Object
     */
    OAuthUtils.getAccessTokenRequest = function (clientId,
                                                 clientSecret,
                                                 redirectUri,
                                                 code,
                                                 grantType) {

        var accessTokenRequest = new oAuthModel.AccessTokenRequest();
        accessTokenRequest.setClientId(clientId);
        accessTokenRequest.setClientSecret(clientSecret);
        accessTokenRequest.setRedirectUri(redirectUri);
        accessTokenRequest.setCode(code);
        accessTokenRequest.setGrantType(grantType);
        return accessTokenRequest;
    };

    /**
     * Get AccessTokenRefreshRequest Object
     *
     * @param clientId
     * @param clientSecret
     * @param refreshToken
     * @param grantType
     * @return AccessTokenRefreshRequest Object
     */
    OAuthUtils.getAccessTokenRefreshRequest = function (clientId,
                                                        clientSecret,
                                                        refreshToken,
                                                        grantType) {

        var accessTokenRefreshRequest = new oAuthModel.AccessTokenRefreshRequest();
        accessTokenRefreshRequest.setClientId(clientId);
        accessTokenRefreshRequest.setClientSecret(clientSecret);
        accessTokenRefreshRequest.setRefreshToken(refreshToken);
        accessTokenRefreshRequest.setGrantType(grantType);
        return accessTokenRefreshRequest;
    };

    /**
     * Get AuthorizationRequest Object
     * @param clientId
     * @param redirectUri
     * @param scopes
     * @param state
     * @param responseType
     * @return AuthorizationRequest Object
     */
    OAuthUtils.getAuthorizationRequest = function (clientId,
                                                   redirectUri,
                                                   scopes,
                                                   state,
                                                   responseType) {

        var authorizationRequest = new oAuthModel.AuthorizationRequest();
        authorizationRequest.setClientId(clientId);
        authorizationRequest.setRedirectUri(redirectUri);
        authorizationRequest.setScopes(scopes);
        authorizationRequest.setState(state);
        authorizationRequest.setResponseType(responseType);
        return authorizationRequest;

    };

    return OAuthUtils;

}));

},{"./ApiUtils":71}],77:[function(require,module,exports){
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
        module.exports = factory(require('./ApiUtils'));
    
}(function (ApiUtils) {
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

},{"./ApiUtils":71}],78:[function(require,module,exports){
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
  module.exports = factory();

}(function() {
  'use strict';

  var httpStatusCodes = {
    'UNAUTHORIZED' : 401,
    'BAD_REQUEST' : 400,
    'NOT_FOUND' : 404,
    'UNSUPPORTED_MEDIA_TYPE' : 415
  };

  /**
   * This is a REST API error class which contains a list of all the errors that can be thrown because of failure in validations for multiple resource end points.
   */
  var SdkErrorCodes = {

    'NO_ACCESS_TOKEN_HEADER' : {
      'httpCode' : httpStatusCodes.UNAUTHORIZED,
      'errorMessage' : 'Access token header not provided',
      'apiCode':'NO_ACCESS_TOKEN_HEADER'
    },
    'INVALID_ACCESS_TOKEN' : {
      'httpCode' : httpStatusCodes.UNAUTHORIZED,
      'errorMessage' : 'Access token provided is invalid or has expired',
      'apiCode':'INVALID_ACCESS_TOKEN'
    },
    'INVALID_X_API_USER_HEADER' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Value provided in x-api-user header is in invalid format',
      'apiCode':'INVALID_X_API_USER_HEADER'

    },
    'MISSING_REQUIRED_PARAM' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Required parameter is missing',
      'apiCode':'MISSING_REQUIRED_PARAM'

    },
    'INVALID_GROUP_NAME' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The group name provided is not valid or is already taken, group names must be a unique non-empty strings no longer than 255 characters.',
      'apiCode':'INVALID_GROUP_NAME'

    },
    'INVALID_GROUP_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Group ID specified is invalid.',
      'apiCode':'INVALID_GROUP_ID'
    },
    'NO_FILE_NAME' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide file name',
      'apiCode':'NO_FILE_NAME'

    },
    'NO_FILE_CONTENT' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide file body',
      'apiCode':'NO_FILE_CONTENT'

    },
    'NO_MEDIA_TYPE' : {
      'httpCode' : httpStatusCodes.UNSUPPORTED_MEDIA_TYPE,
      'errorMessage' : 'No media type specified',
      'apiCode':'NO_MEDIA_TYPE'

    },
    'INVALID_USER_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The User ID specified is invalid' ,
      'apiCode' : 'INVALID_USER_ID'
    },
    'INVALID_MEGASIGN_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Mega Sign ID specified is invalid',
      'apiCode':'INVALID_MEGASIGN_ID'

    },
    'INVALID_MEGASIGN_STATUS' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide a valid mega sign status.',
      'apiCode':'INVALID_MEGASIGN_STATUS'

    },
    'INVALID_FILE_INFO' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Invalid or no file info is provided',
      'apiCode':'INVALID_FILE_INFO'

    },
    'MUST_PROVIDE_EMAIL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide email for user creation',
      'apiCode' : 'MUST_PROVIDE_EMAIL'

    },
    'INVALID_ARGUMENTS' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'One or more arguments to the method are invalid',
      'apiCode':'INVALID_ARGUMENTS'

    },
    'INVALID_EMAIL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Email provided is invalid',
      'apiCode':'INVALID_EMAIL'

    },
    'MUST_PROVIDE_VALID_USER_STATUS' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide a valid user status',
      'apiCode' : 'MUST_PROVIDE_VALID_USER_STATUS'
    },
    'INVALID_URL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The redirect URL is not valid',
      'apiCode':'INVALID_URL'

    },
    'INVALID_REDIRECT_DELAY' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The redirectDelay specified in PostSignOptions must be nonnegative integer',
      'apiCode':'INVALID_REDIRECT_DELAY'

    },
    'INVALID_REDIRECT_URL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The redirectUrl specified in PostSignOptions is not a valid URL',
      'apiCode':'INVALID_REDIRECT_URL'

    },
    'EMPTY_REDIRECT_URL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'If PostSignOptions are specified, the redirectUrl must not be empty',
      'apiCode':'EMPTY_REDIRECT_URL'

    },
    'INVALID_TRANSIENTDOCUMENT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Transient Document ID specified is invalid',
      'apiCode':'INVALID_TRANSIENTDOCUMENT_ID'

    },
    'INVALID_VERSION_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Version ID specified is invalid',
      'apiCode' : 'INVALID_VERSION_ID'

    },
    'INVALID_PARTICIPANT' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The participant email specified is invalid',
      'apiCode' : 'INVALID_PARTICIPANT'

    },
    'INVALID_LIBRARYDOCUMENT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Library Document ID specified is invalid',
      'apiCode':'INVALID_LIBRARYDOCUMENT_ID'

    },
    'RECIPIENT_SET_NOT_SUPPORTED' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Recipient set with multiple recipients is not supported for a Mega Sign.',
      'apiCode':'RECIPIENT_SET_NOT_SUPPORTED'

    },
    'INVALID_REQUEST' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The redirect_uri does not match configuration',
      'apiCode':'INVALID_REQUEST'

    },
    'INVALID_WORKFLOW_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Workflow ID specified is invalid',
      'apiCode':'INVALID_WORKFLOW_ID'
    },
    'MIN_ADDRESSES_NOT_MET' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Some fields minimum entries requirement is not met.',
      'apiCode':'MIN_ADDRESSES_NOT_MET'

    },
    'FILE_INFO_NAME_MISSING' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Name is missing in FileInfo field',
      'apiCode':'FILE_INFO_NAME_MISSING'

    },
    'EMPTY_EXTERNALID_PARAMETER' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'ExternalId parameter can not be empty',
      'apiCode':'EMPTY_EXTERNALID_PARAMETER'

    },
    'INVALID_AGREEMENT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Agreement ID specified is invalid',
      'apiCode':'INVALID_AGREEMENT_ID'

    },
    'MUST_PROVIDE_VALID_AGREEMENT_STATUS' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'Must provide a valid agreement status',
      'apiCode':'MUST_PROVIDE_VALID_AGREEMENT_STATUS'

    },
    'URL_INVALID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'Provided document URL is invalid.',
      'apiCode':'URL_INVALID'

    },
    'INVALID_PARTICIPANT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The participant ID specified is invalid',
      'apiCode':'INVALID_PARTICIPANT_ID'

    },
    'INVALID_PARTICIPANT_SET_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The participant set ID specified is invalid',
      'apiCode':'INVALID_PARTICIPANT_SET_ID'

    },
    'EMPTY_PRIVATE_MESSAGE' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The message specified for the alternate participant addition cannot be empty',
      'apiCode':'EMPTY_PRIVATE_MESSAGE'
    },
    'INVALID_DOCUMENT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Document ID specified is invalid',
      'apiCode' : 'INVALID_DOCUMENT_ID'
    },
    'MUST_PROVIDE_AGREEMENT_ID' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide an Agreement ID',
      'apiCode':'MUST_PROVIDE_AGREEMENT_ID'

    },
    'INVALID_AGREEMENT_ASSET_ID' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The Agreement Asset ID specified is invalid',
      'apiCode':'INVALID_AGREEMENT_ASSET_ID'

    },
    'INVALID_TARGET_VIEW' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Invalid Target View',
      'apiCode':'INVALID_TARGET_VIEW'

    },
    'INVALID_SEARCH_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'Search ID provided is invalid',
      'apiCode':'INVALID_SEARCH_ID'

    },
    'INVALID_PAGE_CURSOR' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Page cursor provided is invalid',
      'apiCode':'INVALID_PAGE_CURSOR'

    },
    'INVALID_DATE' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Date requested is invalid. Please check end date is greater than start date and range is not greater than 180 days',
      'apiCode':'INVALID_DATE'

    },
    'INVALID_SIGNATURE_FLOW' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Only SENDER_SIGNATURE_NOT_REQUIRED and SENDER_SIGNS_LAST are permitted for widgets',
      'apiCode':'INVALID_SIGNATURE_FLOW'

    },
    'INVALID_WIDGET_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Widget ID specified is invalid',
      'apiCode':'INVALID_WIDGET_ID'

    },
    'MUST_PROVIDE_VALID_WIDGET_STATUS' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide a valid widget status',
      'apiCode':'MUST_PROVIDE_VALID_WIDGET_STATUS'

    },
    'TOO_MANY_ACTIONS_SPECIFIED' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Cannot specify both a redirectUrl and a message',
      'apiCode':'TOO_MANY_ACTIONS_SPECIFIED'

    },
    'NO_ACTION_SPECIFIED' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Either a redirectUrl or a message is required',
      'apiCode':'NO_ACTION_SPECIFIED'

    }
  };
  return SdkErrorCodes;
}));

},{}],79:[function(require,module,exports){
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
        module.exports = factory(require('./ApiUtils'), require('./TestData'));
    
}(function (ApiUtils, TestData) {
    'use strict';
    /**
     * This file contains basic utility functions which will be used by the Search API Tests.
     */
    var SearchUtils = function () {
    };

    var searchApi = new AdobeSignSdk.SearchApi(ApiUtils.getContext());
    var searchModel = AdobeSignSdk.SearchModel;

    var searchId = null;
    var pageCursor = null;

    var optKeys = {
        PAGE_SIZE_KEY: "pageSize"
    };

    SearchUtils.getSearchApi = function () {
        return searchApi;
    };

    SearchUtils.getPageCursor = function () {
        return pageCursor;
    };

    SearchUtils.createSearch = function (startDate,
                                         endDate) {
        var request = SearchUtils.getAgreementAssetEventRequest(startDate,
                                                                endDate);
        return searchApi.createAssetEvent(ApiUtils.getValidHeaderParams(),
                                          request)
                        .then(function (response) {
                            searchId = response.getSearchId();
                            pageCursor = response.getCurrentPageCursor();
                            return searchId;
                        })
                        .catch(ApiUtils.throwError);
    };

    SearchUtils.getResourceId = function () {
        return SearchUtils.createSearch(ApiUtils.getDate(TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE),
                                        ApiUtils.getDate(TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE));
    };

    SearchUtils.getAgreementAssetEventRequest = function (startDate,
                                                          endDate) {
        var request = new searchModel.AgreementAssetEventRequest();
        request.setStartDate(startDate);
        request.setEndDate(endDate);
        return request;
    };

    SearchUtils.getOptsWithPageSize = function (pageSize) {
        var opts = {};
        opts[optKeys.PAGE_SIZE_KEY] = pageSize;
        return opts;
    };


    return SearchUtils;
}));


},{"./ApiUtils":71,"./TestData":81}],80:[function(require,module,exports){
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
    module.exports = factory();
  
}(function() {
  'use strict';
  
  /**
   * This file contains basic utility functions which will be used for String manipulations
   */
  var StringUtil = function (){};
  
    /**
     * Check if the apiCode of apiError and sdkErrorCode is equal
     *
     * @param apiError ApiError Object
     * @param sdkErrorCode SdkErrorCode to validate against
     * @return true if apiCode of apiError and sdkErrorCode is equal
     */
    StringUtil.assertEqual = function (apiError, sdkErrorCode) {
      if (sdkErrorCode.apiCode === apiError.apiCode) {
        return true;
      }
      else {
        return false;
      }
    };

    /**
     * To make a case insensitive matching
     *
     * @param string1 The first string to compare
     * @param string2 The second string to compare
     * @return true if value matches
     */
    StringUtil.equalIgnoreCase = function (string1, string2) {
      return (string1.toLowerCase() === string2.toLowerCase());
    };

    /**
     * Checks if the value passed is Null or Undefined
     *
     * @param value Object that needs to checked
     * @return true if value passed is null or undefined
     */
    StringUtil.isNullOrUndefined = function (value) {
      if((value == null) ||(value == undefined)){
        return true;
      }
      else{
        return false;
      }
    };

    /**
     * Checks if the value passed is a empty object
     *
     * @param object Object that needs to checked
     * @return true if value passed is empty object
     */
    StringUtil.isEmpty = function (object) {
      for(var i in object) {
        return false;
      }
      return true;
    };
    
  return StringUtil;
}));

},{}],81:[function(require,module,exports){
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
        module.exports = factory(AdobeSignSdk.Config);
    
}(function (Config) {
    'use strict';

    var TestData = function () {
    };

    var ACCESS_TOKEN_KEY = "accessToken";
    var NULL_PARAM_KEY = "nullParam";
    var EMPTY_PARAM_KEY = "emptyParam";
    var X_API_HEADER_KEY = "xApiHeader";
    var X_USER_EMAIL_KEY = "xUserEmail";
    var GROUP_NAME_KEY = "groupName";
    var GROUP_NAME_PREFIX_KEY = "groupNamePrefix";
    var FIRST_NAME_KEY = "userFirstName";
    var LAST_NAME_KEY = "userLastName";
    var EMAIL_PREFIX_KEY = "emailPrefix";
    var EMAIL_DOMAIN_KEY = "emailDomain";
    var USER_EMAIL_KEY = "userEmail";
    var INVALID_EMAIL_KEY = "invalidEmail";
    var START_PAGE_KEY = "startPage";
    var END_PAGE_KEY = "endPage";
    var IMAGE_SIZE_KEY = "imageSize";
    var VERSION_ID_KEY = "versionId";
    var POST_EMAIL_KEY = "postEmail";
    var POST_FAX_KEY = "postFax";
    var REDIRECT_URL_KEY = "redirectURL";
    var PARTICIPANT_EMAIL_KEY = "participantEmail";
    var AGREEMENT_NAME_PREFIX_KEY = "agreementNamePrefix";
    var AGREEMENT_NAME_KEY = "agreementName";
    var AGREEMENT_QUERY_KEY = "agreementQuery";
    var AGREEMENT_EXTERNAL_ID_KEY = "agreementExternalId";
    var AGREEMENT_EXTERNAL_GROUP_KEY = "agreementExternalGroup";
    var AGREEMENT_EXTERNAL_NAMESPACE_KEY = "agreementExternalNamespace";
    var AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY = "agreementSupportingDocumentContentFormat";
    var INVALID_URL_KEY = "invalidUrl";
    var INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY = "includeSupportingDocumentsPagesInfo";
    var ATTACH_SUPPORTING_DOCUMENTS_KEY = "attachSupportingDocuments";
    var AUDIT_REPORT_KEY = "auditReport";
    var SHOW_IMAGE_AVAILIBILITY_KEY = "showImageAvailability";
    var PRIVATE_MESSAGE_KEY = "privateMessage";
    var INVALID_REDIRECT_DELAY_KEY = "invalidRedirectDelay";
    var LIBRARY_DOCUMENT_NAME_KEY = "libraryDocumentName";
    var LIBRARY_DOCUMENT_NAME_PREFIX_KEY = "libraryDocumentNamePrefix";
    var TRANSIENT_DOCUMENT_NAME_KEY = "transientDocumentName";
    var SAMPLE_FILE_KEY = "sampleFile";
    var VALID_MIME_KEY = "validMime";
    var WIDGET_NAME_KEY = "widgetName";
    var WIDGET_NAME_PREFIX_KEY = "widgetNamePrefix";
    var WIDGET_UPDATE_MESSAGE_KEY = "widgetUpdateMessage";
    var MEGASIGN_NAME_KEY = "megaSignName";
    var MEGASIGN_NAME_PREFIX_KEY = "megaSignNamePrefix";
    var MEGASIGN_QUERY_KEY = "megaSignQuery";
    var GROUP_ID_KEY = "groupId";
    var WORKFLOW_ID_KEY = "workflowId";
    var INCLUDE_DRAFT_WORKFLOWS_KEY = "includeDraftWorkflows";
    var WORKFLOW_RECIPIENT_INFO_NAME_KEY = "workflowRecipientName";
    var DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE_KEY = "daysBetweenStartDateAndCurrentDate";
    var DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE_KEY = "daysBetweenEndDateAndCurrentDate";

    var REDIRECT_URI_KEY = "redirectUri";
    var STATE_KEY = "state";
    var CLIENT_ID_KEY = "clientId";
    var CLIENT_SECRET_KEY = "clientSecret";
    var ACCESS_TOKEN_GRANT_TYPE_KEY = "accessTokenGrantType";
    var REFRESH_TOKEN_GRANT_TYPE_KEY = "refreshTokenGrantType";
    var RESPONSE_TYPE_KEY = "responseType";
    var REQUEST_PATH_KEY = "requestPath";

    var ENV_HOST_NAME_KEY = "envHostName";

    var PAGE_SIZE_KEY = "pageSize";
    var TIMEOUT_KEY = "timeout";

    //Common Parameters
    TestData.ACCESS_TOKEN = Config[ACCESS_TOKEN_KEY] === undefined ? null : Config[ACCESS_TOKEN_KEY];
    TestData.NULL_PARAM = Config[NULL_PARAM_KEY] === undefined ? null : Config[NULL_PARAM_KEY];
    TestData.EMPTY_PARAM = Config[EMPTY_PARAM_KEY] === undefined ? null : Config[EMPTY_PARAM_KEY];
    TestData.X_API_HEADER = Config[X_API_HEADER_KEY] === undefined ? null : Config[X_API_HEADER_KEY];
    TestData.X_USER_EMAIL = Config[X_USER_EMAIL_KEY] === undefined ? null : Config[X_USER_EMAIL_KEY];
    TestData.ENV_HOST_NAME = Config[ENV_HOST_NAME_KEY] === undefined ? null : Config[ENV_HOST_NAME_KEY];

    // Group creation details
    TestData.GROUP_NAME_PREFIX = Config[GROUP_NAME_PREFIX_KEY] === undefined ? null : Config[GROUP_NAME_PREFIX_KEY];
    TestData.GROUP_NAME = Config[GROUP_NAME_KEY] === undefined ? null : Config[GROUP_NAME_KEY];

    // User creation details
    TestData.FIRST_NAME = Config[FIRST_NAME_KEY] === undefined ? null : Config[FIRST_NAME_KEY];
    TestData.LAST_NAME = Config[LAST_NAME_KEY] === undefined ? null : Config[LAST_NAME_KEY];
    TestData.EMAIL_PREFIX = Config[EMAIL_PREFIX_KEY] === undefined ? null : Config[EMAIL_PREFIX_KEY];
    TestData.EMAIL_DOMAIN = Config[EMAIL_DOMAIN_KEY] === undefined ? null : Config[EMAIL_DOMAIN_KEY];
    TestData.USER_EMAIL = Config[USER_EMAIL_KEY] === undefined ? null : Config[USER_EMAIL_KEY];
    TestData.INVALID_EMAIL = Config[INVALID_EMAIL_KEY] === undefined ? null : Config[INVALID_EMAIL_KEY];

    // Agreement Parameters
    TestData.START_PAGE = Config[START_PAGE_KEY] === undefined ? null : Config[START_PAGE_KEY];
    TestData.END_PAGE = Config[END_PAGE_KEY] === undefined ? null : Config[END_PAGE_KEY];
    TestData.IMAGE_SIZE = Config[IMAGE_SIZE_KEY] === undefined ? null : Config[IMAGE_SIZE_KEY];
    TestData.VERSION_ID = Config[VERSION_ID_KEY] === undefined ? null : Config[VERSION_ID_KEY];
    TestData.POST_EMAIL = Config[POST_EMAIL_KEY] === undefined ? null : Config[POST_EMAIL_KEY];
    TestData.POST_FAX = Config[POST_FAX_KEY] === undefined ? null : Config[POST_FAX_KEY];
    TestData.PARTICIPANT_EMAIL = Config[PARTICIPANT_EMAIL_KEY] === undefined ? null : Config[PARTICIPANT_EMAIL_KEY];
    TestData.AGREEMENT_NAME_PREFIX = Config[AGREEMENT_NAME_PREFIX_KEY] === undefined ? null : Config[AGREEMENT_NAME_PREFIX_KEY];
    TestData.AGREEMENT_NAME = Config[AGREEMENT_NAME_KEY] === undefined ? null : Config[AGREEMENT_NAME_KEY];
    TestData.AGREEMENT_QUERY = Config[AGREEMENT_QUERY_KEY] === undefined ? null : Config[AGREEMENT_QUERY_KEY];
    TestData.AGREEMENT_EXTERNAL_ID = Config[AGREEMENT_EXTERNAL_ID_KEY] === undefined ? null : Config[AGREEMENT_EXTERNAL_ID_KEY];
    TestData.AGREEMENT_EXTERNAL_GROUP = Config[AGREEMENT_EXTERNAL_GROUP_KEY] === undefined ? null : Config[AGREEMENT_EXTERNAL_GROUP_KEY];
    TestData.AGREEMENT_EXTERNAL_NAMESPACE = Config[AGREEMENT_EXTERNAL_NAMESPACE_KEY] === undefined ? null : Config[AGREEMENT_EXTERNAL_NAMESPACE_KEY];
    TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT = Config[AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY] === undefined ? null : Config[AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY];
    TestData.REQUEST_PATH = Config[REQUEST_PATH_KEY] === undefined ? null : Config[REQUEST_PATH_KEY];

    TestData.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO = Config[INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY] === undefined ? null : Config[INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY];
    TestData.ATTACH_SUPPORTING_DOCUMENTS = Config[ATTACH_SUPPORTING_DOCUMENTS_KEY] === undefined ? null : Config[ATTACH_SUPPORTING_DOCUMENTS_KEY];
    TestData.AUDIT_REPORT = Config[AUDIT_REPORT_KEY] === undefined ? null : Config[AUDIT_REPORT_KEY];
    TestData.SHOW_IMAGE_AVAILIBILITY = Config[SHOW_IMAGE_AVAILIBILITY_KEY] === undefined ? null : Config[SHOW_IMAGE_AVAILIBILITY_KEY];

    TestData.REDIRECT_URL = Config[REDIRECT_URL_KEY] === undefined ? null : Config[REDIRECT_URL_KEY];
    TestData.INVALID_URL = Config[INVALID_URL_KEY] === undefined ? null : Config[INVALID_URL_KEY];

    TestData.PRIVATE_MESSAGE = Config[PRIVATE_MESSAGE_KEY] === undefined ? null : Config[PRIVATE_MESSAGE_KEY];
    TestData.INVALID_REDIRECT_DELAY = Config[INVALID_REDIRECT_DELAY_KEY] === undefined ? null : Config[INVALID_REDIRECT_DELAY_KEY];

    // Library document Parameters
    TestData.LIBRARY_DOCUMENT_NAME = Config[LIBRARY_DOCUMENT_NAME_KEY] === undefined ? null : Config[LIBRARY_DOCUMENT_NAME_KEY];
    TestData.LIBRARY_DOCUMENT_NAME_PREFIX = Config[LIBRARY_DOCUMENT_NAME_PREFIX_KEY] === undefined ? null : Config[LIBRARY_DOCUMENT_NAME_PREFIX_KEY];

    // Transient Document Parameters
    TestData.TRANSIENT_DOCUMENT_NAME = Config[TRANSIENT_DOCUMENT_NAME_KEY] === undefined ? null : Config[TRANSIENT_DOCUMENT_NAME_KEY];
    TestData.SAMPLE_FILE = Config[SAMPLE_FILE_KEY] === undefined ? null : Config[SAMPLE_FILE_KEY];
    TestData.VALID_MIME = Config[VALID_MIME_KEY] === undefined ? null : Config[VALID_MIME_KEY];

    // Widget parameters
    TestData.WIDGET_NAME = Config[WIDGET_NAME_KEY] === undefined ? null : Config[WIDGET_NAME_KEY];
    TestData.WIDGET_NAME_PREFIX = Config[WIDGET_NAME_PREFIX_KEY] === undefined ? null : Config[WIDGET_NAME_PREFIX_KEY];
    TestData.WIDGET_UPDATE_MESSAGE = Config[WIDGET_UPDATE_MESSAGE_KEY] === undefined ? null : Config[WIDGET_UPDATE_MESSAGE_KEY];

    // MegaSign parameters
    TestData.MEGASIGN_NAME = Config[MEGASIGN_NAME_KEY] === undefined ? null : Config[MEGASIGN_NAME_KEY];
    TestData.MEGASIGN_NAME_PREFIX = Config[MEGASIGN_NAME_PREFIX_KEY] === undefined ? null : Config[MEGASIGN_NAME_PREFIX_KEY];
    TestData.MEGASIGN_QUERY = Config[MEGASIGN_QUERY_KEY] === undefined ? null : Config[MEGASIGN_QUERY_KEY];

    //Search parameters
    TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE = Config[DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE_KEY] === undefined ? null : Config[DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE_KEY];
    TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE = Config[DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE_KEY] === undefined ? null : Config[DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE_KEY];

    TestData.PAGE_SIZE = Config[PAGE_SIZE_KEY] === undefined ? null : Config[PAGE_SIZE_KEY];

    // Workflows parameters
    TestData.INCLUDE_DRAFT_WORKFLOWS = Config[INCLUDE_DRAFT_WORKFLOWS_KEY] === undefined ? null : Config[INCLUDE_DRAFT_WORKFLOWS_KEY];
    TestData.GROUP_ID = Config[GROUP_ID_KEY] === undefined ? null : Config[GROUP_ID_KEY];
    TestData.WORKFLOW_ID = Config[WORKFLOW_ID_KEY] === undefined ? null : Config[WORKFLOW_ID_KEY];
    TestData.WORKFLOW_RECIPIENT_INFO_NAME = Config[WORKFLOW_RECIPIENT_INFO_NAME_KEY] === undefined ? null : Config[WORKFLOW_RECIPIENT_INFO_NAME_KEY];

    //OAuth workflow parameters
    TestData.REDIRECT_URI = Config[REDIRECT_URI_KEY] === undefined ? null : Config[REDIRECT_URI_KEY];
    TestData.STATE = Config[STATE_KEY] === undefined ? null : Config[STATE_KEY];
    TestData.CLIENT_ID = Config[CLIENT_ID_KEY] === undefined ? null : Config[CLIENT_ID_KEY];
    TestData.CLIENT_SECRET = Config[CLIENT_SECRET_KEY] === undefined ? null : Config[CLIENT_SECRET_KEY];
    TestData.ACCESS_TOKEN_GRANT_TYPE = Config[ACCESS_TOKEN_GRANT_TYPE_KEY] === undefined ? null : Config[ACCESS_TOKEN_GRANT_TYPE_KEY];
    TestData.REFRESH_TOKEN_GRANT_TYPE = Config[REFRESH_TOKEN_GRANT_TYPE_KEY] === undefined ? null : Config[REFRESH_TOKEN_GRANT_TYPE_KEY];
    TestData.RESPONSE_TYPE = Config[RESPONSE_TYPE_KEY] === undefined ? null : Config[RESPONSE_TYPE_KEY];

    TestData.TIME_OUT = Config[TIMEOUT_KEY] === undefined ? null : Config[TIMEOUT_KEY];

    return TestData;
}));

},{}],82:[function(require,module,exports){
(function (Buffer){
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
        module.exports = factory(require('../utils/TestData'), require('./ApiUtils'), require('fs'));

}(function (TestData, ApiUtils, fs) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the TransientDocument API Tests.
     */
    var TransientDocumentUtils = function () {
    };
    var transientDocumentsApi = new AdobeSignSdk.TransientDocumentsApi(ApiUtils.getContext());

    var optKeys = {
        MIME_TYPE_KEY: "mimeType"
    };
    //Helper method that returns TransientDocumentsApi
    TransientDocumentUtils.getTransientDocumentsApi = function () {
        return transientDocumentsApi;
    };

    //Helper method that returns absolute path of a file
    TransientDocumentUtils.getFileAbsolutePath = function (dirName, fileName) {
        //return path.join(dirName, fileName);
    };

    //Helper method that returns json of optional parameters with mimeType
    TransientDocumentUtils.getOptsWithMimeType = function (mimeType) {
        var opts = {};
        opts[optKeys.MIME_TYPE_KEY] = mimeType;
        return opts;
    };

    //Helper method that returns buffer stream of the file specified at the location in CommonJS environment & File Object set in window for browser.
    TransientDocumentUtils.getFile = function (fileName) {
        if (typeof window === 'undefined') {
            var absoluteFilePath = TransientDocumentUtils.getFileAbsolutePath(ApiUtils.getResourcesFolderPath(),
                                                                              fileName);
            var fileBytes = fs.readFileSync(absoluteFilePath);
            var buffer = new Buffer(fileBytes);
            return buffer;

        } else {
            if (AdobeSignSdk.TestFile) {
                return AdobeSignSdk.TestFile;
            }
        }
        return null;

    };

    //Helper method that creates the Transient Document
    TransientDocumentUtils.createTransientDocumentResource = function (transientDocumentName) {

        var absoluteFilePath = TransientDocumentUtils.getFileAbsolutePath(TestData.REQUEST_PATH, TestData.SAMPLE_FILE);
        var opts = {};
        opts[optKeys.MIME_TYPE_KEY] = TestData.VALID_MIME;
        return transientDocumentsApi.createTransientDocument(ApiUtils.getValidHeaderParams(),
                                                             transientDocumentName,
                                                             TransientDocumentUtils.getFile(TestData.SAMPLE_FILE),
                                                             opts)
                                    .catch(ApiUtils.throwError);
    };

    return TransientDocumentUtils;
}));

}).call(this,require("buffer").Buffer)
},{"../utils/TestData":81,"./ApiUtils":71,"buffer":88,"fs":87}],83:[function(require,module,exports){
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
        module.exports = factory(require('../utils/TestData'), require('./ApiUtils'));

}(function (TestData, ApiUtils) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the Users API Tests.
     */
    var UserUtils = function () {
    };

    var usersApi = new AdobeSignSdk.UsersApi(ApiUtils.getContext(ApiUtils.getContext()));
    var usersModel = AdobeSignSdk.UsersModel;

    //Helper method that returns UsersApi
    UserUtils.getUsersApi = function () {
        return usersApi;
    };

    //Helper function to create a user and validate that user is actually being created.
    UserUtils.createUser = function () {
        var opts = {};
        var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                             ApiUtils.getLastName(),
                                                             ApiUtils.getEmail());
        return usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                   userCreationInfo,
                                   opts)
                       .then(function (userCreationResponse) {
                           return userCreationResponse.getUserId();
                       })
                       .catch(ApiUtils.throwError);

    };

    //Helper function to get user creation info
    UserUtils.getUserCreationInfo = function (firstName,
                                              lastName,
                                              email) {
        var userCreationInfo = new usersModel.UserCreationInfo();
        userCreationInfo.setFirstName(firstName);
        userCreationInfo.setLastName(lastName);
        userCreationInfo.setEmail(email);
        return userCreationInfo;
    };

    UserUtils.getResourceId = function (email) {
        var opts = {};
        return UserUtils.isExistingUser(email)
                        .then(function (userId) {
                            if (userId === null) {
                                var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                                     ApiUtils.getLastName(),
                                                                                     email);
                                return UserUtils.createUser(ApiUtils.getValidHeaderParams(),
                                                            userCreationInfo,
                                                            opts);
                            }
                            else {
                                return userId;
                            }
                        })
                        .catch(ApiUtils.throwError);
    };

    UserUtils.isExistingUser = function (email) {
        var opts = {};
        var userId = null;
        return usersApi.getUsers(ApiUtils.getValidHeaderParams(),
                                 opts,
                                 null)
                       .then(function (UsersInfo) {
                           var userInfoList = UsersInfo.getUserInfoList();
                           for (var i = 0; i < userInfoList.length; i++) {
                               if (userInfoList[i].getEmail() === email) {
                                   userId = userInfoList[i].getUserId();
                                   return userId;
                               }
                           }
                           return userId;
                       })
                       .catch(ApiUtils.throwError);

    };

    //Helper function to get user modification info
    UserUtils.getUserModificationInfo = function (firstName,
                                                  lastName,
                                                  email,
                                                  groupId,
                                                  roles) {
        var userModificationInfo = new usersModel.UserModificationInfo();
        userModificationInfo.setFirstName(firstName);
        userModificationInfo.setLastName(lastName);
        userModificationInfo.setEmail(email);
        userModificationInfo.setGroupId(groupId);
        userModificationInfo.setRoles(roles);
        return userModificationInfo;
    };

    UserUtils.getUserStatusUpdateInfo = function (userStatus) {
        var userStatusUpdateInfo = new usersModel.UserStatusUpdateInfo();
        userStatusUpdateInfo.setUserStatus(userStatus);
        return userStatusUpdateInfo;
    };

    return UserUtils;
}));

},{"../utils/TestData":81,"./ApiUtils":71}],84:[function(require,module,exports){
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
        module.exports = factory(require('./ApiUtils'));
    
}(function (ApiUtils) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the Views API Tests.
     */
    var ViewUtils = function () {
    };

    var viewsApi = new AdobeSignSdk.ViewsApi(ApiUtils.getContext());
    var viewsModel = AdobeSignSdk.ViewsModel;

    var optKeys = {
        AGREEMENT_ASSET_LIST_REQUEST_KEY: "agreementAssetListRequest"
    };

    ViewUtils.getViewsApi = function () {
        return viewsApi;
    };

    ViewUtils.getOptionsWithDefaultAgreementAssetListRequest = function () {
        var opts = {};
        opts[optKeys.AGREEMENT_ASSET_LIST_REQUEST_KEY] = new viewsModel.AgreementAssetListRequest();
        return opts;
    };

    ViewUtils.getAgreementAssetRequest = function (libraryDocumentId) {
        var agreementAssetRequest = new viewsModel.AgreementAssetRequest();
        agreementAssetRequest.setAgreementAssetId(libraryDocumentId);
        return agreementAssetRequest;
    };

    ViewUtils.getTargetViewRequest = function (targetViewEnum) {
        var targetViewRequest = new viewsModel.TargetViewRequest();
        targetViewRequest.setTargetView(targetViewEnum);
        return targetViewRequest;
    };

    return ViewUtils;

}));


},{"./ApiUtils":71}],85:[function(require,module,exports){
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
        module.exports = factory(require('./ApiUtils'), require('./TransientDocumentUtils'), require('./TestData'));
    
}(function (ApiUtils, TransientDocumentUtils, TestData) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the Widgets API Tests.
     */
    var WidgetUtils = function () {
    };

    var widgetsApi = new AdobeSignSdk.WidgetsApi(ApiUtils.getContext());
    var widgetsModel = AdobeSignSdk.WidgetsModel;

    var optKeys = {
        VERSION_ID_KEY: "versionId",
        PARTICIPANT_EMAIL_KEY: "participantEmail",
        AUDIT_REPORT_KEY: "auditReport"
    };

    //Helper method that returns widgetsApi
    WidgetUtils.getWidgetsApi = function () {
        return widgetsApi;
    };

    /**
     * Returns id of the agreement with given agreement name if exists else it creates a new agreement.
     * @param widgetName name of the widget.
     * @return Promise   resource id.
     *
     * @throws ApiError
     */
    WidgetUtils.getResourceId = function (widgetName) {

        return WidgetUtils.isExistingWidget(widgetName)
                          .then(function (widgetId) {
                              if (widgetId != null) {
                                  return widgetId;
                              }
                              else {
                                  return WidgetUtils.createWidget(widgetName);
                              }
                          })
                          .catch(ApiUtils.throwError);

    };

    /**
     * Method to check if the widget already exits
     * @param widgetName The name of widget
     * @return widgetId  The widget id
     *
     * @throws ApiError
     */
    WidgetUtils.isExistingWidget = function (widgetName) {

        var widgetId = null;
        return widgetsApi.getWidgets(ApiUtils.getValidHeaderParams())
                         .then(function (userWidgets) {
                             var userWidgetList = userWidgets.userWidgetList;
                             for (var i = 0; i < userWidgetList.length; i++) {
                                 var widget = userWidgetList[i];
                                 if ((widget.getName() === widgetName) && (userWidgetList[i].getStatus() === (widgetsModel.UserWidget.StatusEnum.ENABLED))) {
                                     widgetId = widget.getWidgetId();
                                     return widgetId;
                                 }
                             }
                             return widgetId;
                         })
                         .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create the the widget
     * @param widgetName   The name of widget
     * @return widgetId    The agreement id
     *
     * @throws ApiError
     */
    WidgetUtils.createWidget = function (widgetName) {

        return WidgetUtils.getWidgetCreationRequest(widgetName)
                          .then(function (widgetCreationRequest) {
                              return widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                                             widgetCreationRequest);
                          })
                          .then(function (widgetCreationResponse) {
                              return widgetCreationResponse.getWidgetId();
                          })
                          .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create widget creation request
     * @param documentName The widget name
     * @return WidgetCreationRequest The widget creation request
     *
     * @throws ApiError
     */
    WidgetUtils.getWidgetCreationRequest = function (documentName) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return WidgetUtils.getWidgetCreationRequestUtil(TestData.NULL_PARAM,
                                                                                         TestData.NULL_PARAM,
                                                                                         transientDocumentResponse.getTransientDocumentId(),
                                                                                         TestData.NULL_PARAM,
                                                                                         documentName,
                                                                                         widgetsModel.WidgetCreationInfo.SignatureFlowEnum.SENDER_SIGNATURE_NOT_REQUIRED);
                                     })
                                     .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create widget creation request
     * @param documentName The widget name
     * @param fileInfo the fileInfo for widgetCreationRequest
     *
     * @return WidgetCreationRequest The widget creation request
     */
    WidgetUtils.getWidgetCreationRequestWithFileInfo = function (documentName,
                                                                 fileInfo) {

        return WidgetUtils.getWidgetCreationRequestUtil(fileInfo.getLibraryDocumentId(),
                                                        fileInfo.getLibraryDocumentName(),
                                                        fileInfo.getTransientDocumentId(),
                                                        fileInfo.getDocumentURL() ? fileInfo.getDocumentURL().getUrl() : TestData.NULL_PARAM,
                                                        documentName,
                                                        widgetsModel.WidgetCreationInfo.SignatureFlowEnum.SENDER_SIGNATURE_NOT_REQUIRED);

    };

    /**
     * Helper method to create widget creation request
     * @param fileInfoLibraryDocumentId   The file info library document id
     * @param fileInfoLibraryDocumentName The file info library document name
     * @param fileInfoTransientDocumentId The file info transient document id
     * @param fileInfoDocumentUrl         The file info document Url
     * @param documentName                The widget name
     * @param signatureFlowEnum           signature flow Type
     *
     * @return WidgetCreationRequest The widget creation request
     */
    WidgetUtils.getWidgetCreationRequestUtil = function (fileInfoLibraryDocumentId,
                                                         fileInfoLibraryDocumentName,
                                                         fileInfoTransientDocumentId,
                                                         fileInfoDocumentUrl,
                                                         documentName,
                                                         signatureFlowEnum) {

        var widgetCreationRequest = new widgetsModel.WidgetCreationRequest();
        var widgetCreationInfo = new widgetsModel.WidgetCreationInfo();
        var fileInfo = new widgetsModel.WidgetFileInfo();

        fileInfo.setLibraryDocumentId(fileInfoLibraryDocumentId);
        fileInfo.setLibraryDocumentName(fileInfoLibraryDocumentName);
        fileInfo.setTransientDocumentId(fileInfoTransientDocumentId);

        if (fileInfoDocumentUrl) {
            var widgetURLFileInfo = new widgetsModel.WidgetURLFileInfo();
            widgetURLFileInfo.setUrl(fileInfoDocumentUrl);
            fileInfo.setDocumentURL(widgetURLFileInfo);
        }

        var fileInfoList = [];
        fileInfoList.push(fileInfo);

        widgetCreationInfo.setName(documentName);
        widgetCreationInfo.setFileInfos(fileInfoList);
        widgetCreationInfo.setSignatureFlow(signatureFlowEnum);

        widgetCreationRequest.setWidgetCreationInfo(widgetCreationInfo);
        return widgetCreationRequest;

    };

    /**
     * Helper method to create the the widget
     * @param widgetName   The name of widget
     * @return widgetId    The agreement id
     *
     * @throws ApiError
     */
    WidgetUtils.getFirstWidgetDocumentId = function (widgetId) {
        return widgetsApi.getWidgetDocuments(ApiUtils.getValidHeaderParams(),
                                             widgetId,
                                             TestData.VERSION_ID,
                                             TestData.PARTICIPANT_EMAIL)
                         .then(function (widgetDocuments) {
                             var widgetsDocumentsList = widgetDocuments.getDocuments();
                             var documentId = widgetsDocumentsList[0].getDocumentId();
                             return documentId;
                         })
                         .catch(ApiUtils.throwError);
    };

    WidgetUtils.getwidgetPersonalizationInfo = function (email) {
        var widgetPersonalizationInfo = new widgetsModel.WidgetPersonalizationInfo();
        widgetPersonalizationInfo.setEmail(email);
        return widgetPersonalizationInfo;
    };

    WidgetUtils.getWidgetStatusUpdateInfo = function (value, message, redirectUrl) {
        var widgetStatusUpdateInfo = new widgetsModel.WidgetStatusUpdateInfo();
        widgetStatusUpdateInfo.setValue(value);
        widgetStatusUpdateInfo.setMessage(message);
        widgetStatusUpdateInfo.setRedirectUrl(redirectUrl);
        return widgetStatusUpdateInfo;
    };

    /**
     * Helper method to create options for combined document
     * @param versionId         version ID for agreement
     * @param participantEmail  email address of the participant of the agreement
     * @param auditReport       boolean value for attaching audit report
     *
     * @return opts options for combined document
     */
    WidgetUtils.getOptsForCombinedDocument = function (versionId,
                                                       participantEmail,
                                                       auditReport) {

        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        opts[optKeys.AUDIT_REPORT_KEY] = auditReport;
        return opts;

    };

    /**
     * Helper method to create options for widget documents
     * @param versionId         version ID for agreement
     * @param participantEmail  email address of the participant of the agreement
     *
     * @return opts options for widget documents
     */
    WidgetUtils.getOptsForWidgetDocuments = function (versionId,
                                                      participantEmail) {

        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        return opts;

    };

    return WidgetUtils;
}));


},{"./ApiUtils":71,"./TestData":81,"./TransientDocumentUtils":82}],86:[function(require,module,exports){
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
        module.exports = factory(require('./ApiUtils'), require('./TransientDocumentUtils'), require('./TestData'));
    
}(function (ApiUtils, TransientDocumentUtils, TestData) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the WorkFlows API Tests.
     */
    var WorkFlowUtils = function () {
    };

    var workFlowsApi = new AdobeSignSdk.WorkflowsApi(ApiUtils.getContext());
    var workflowsModel = AdobeSignSdk.WorkflowsModel;

    var optKeys = {
        INCLUDE_DRAFT_WORKFLOWS_KEY: "includeDraftWorkflows",
        GROUP_ID_KEY: "groupId"
    };

    //Helper method that returns TransientDocumentsApi
    WorkFlowUtils.getWorkFlowsApi = function () {
        return workFlowsApi;
    };

    //Helper method that returns workflowId
    WorkFlowUtils.getResourceId = function () {
        return TestData.WORKFLOW_ID;
    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest accepting fileInfo as param
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo = function (fileInfo,
                                                                                    documentName) {
        return WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic(TestData.POST_EMAIL,
                                                                            TestData.NULL_PARAM,
                                                                            fileInfo.getWorkflowLibraryDocumentId(),
                                                                            fileInfo.getName(),
                                                                            fileInfo.getTransientDocumentId(),
                                                                            documentName,
                                                                            null);

    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequest = function (documentName) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic(TestData.POST_EMAIL,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.TRANSIENT_DOCUMENT_NAME,
                                                                                                             transientDocumentResponse.getTransientDocumentId(),
                                                                                                             documentName,
                                                                                                             null)
                                     })
                                     .catch(ApiUtils.throwError);
    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest accepting postSingingOptions as param
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithPostSignOptions = function (documentName,
                                                                                           postSignOptions) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic(TestData.POST_EMAIL,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.TRANSIENT_DOCUMENT_NAME,
                                                                                                             transientDocumentResponse.getTransientDocumentId(),
                                                                                                             documentName,
                                                                                                             postSignOptions);
                                     })
                                     .catch(ApiUtils.throwError);
    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest accepting email and fax as params
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFaxAndEmail = function (documentName,
                                                                                       recipientEmail,
                                                                                       recipientFax) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic(recipientEmail,
                                                                                                             recipientFax,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.TRANSIENT_DOCUMENT_NAME,
                                                                                                             transientDocumentResponse.getTransientDocumentId(),
                                                                                                             documentName,
                                                                                                             null);
                                     })
                                     .catch(ApiUtils.throwError);
    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic = function (recipientEmail,
                                                                             recipientFax,
                                                                             fileInfoLibraryDocumentId,
                                                                             fileInfoName,
                                                                             fileInfoTransientDocumentId,
                                                                             documentName,
                                                                             postSignOptions) {

        var customWorkflowAgreementCreationRequest = new workflowsModel.CustomWorkflowAgreementCreationRequest();
        var documentCreationInfo = new workflowsModel.DocumentCreationInfo();

        var recipientInfo = new workflowsModel.RecipientInfo();
        recipientInfo.setEmail(recipientEmail);
        recipientInfo.setFax(recipientFax);
        var recipientInfoList = [];
        recipientInfoList.push(recipientInfo);

        var recipientsInfo = new workflowsModel.RecipientsInfo();
        recipientsInfo.setRecipients(recipientInfoList);
        recipientsInfo.setName(TestData.WORKFLOW_RECIPIENT_INFO_NAME);

        var recipientsInfoList = [];
        recipientsInfoList.push(recipientsInfo);

        var fileInfo = new workflowsModel.CustomWorkflowFileInfo();
        fileInfo.setWorkflowLibraryDocumentId(fileInfoLibraryDocumentId);
        fileInfo.setName(fileInfoName);
        fileInfo.setTransientDocumentId(fileInfoTransientDocumentId);

        var fileInfoList = [];
        fileInfoList.push(fileInfo);

        documentCreationInfo.setName(documentName);
        documentCreationInfo.setRecipientsListInfo(recipientsInfoList);

        documentCreationInfo.setFileInfos(fileInfoList);
        documentCreationInfo.setPostSignOptions(postSignOptions);

        customWorkflowAgreementCreationRequest.setDocumentCreationInfo(documentCreationInfo);
        return customWorkflowAgreementCreationRequest;
    };

    //Helper method that returns json of optional parameters with valid GroupId and valid IncludeDraftWorkflows
    WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows = function () {
        var opts = {};
        opts[optKeys.GROUP_ID_KEY] = TestData.GROUP_ID;
        opts[optKeys.INCLUDE_DRAFT_WORKFLOWS_KEY] = TestData.INCLUDE_DRAFT_WORKFLOWS;
        return opts;

    };

    //Helper method that returns json of optional parameters with invalid GroupId and valid IncludeDraftWorkflows
    WorkFlowUtils.getOptionsWithEmptyGroupIdAndValidIncludeDraftWorkflows = function () {
        var opts = {};
        opts[optKeys.GROUP_ID_KEY] = TestData.EMPTY_PARAM;
        opts[optKeys.INCLUDE_DRAFT_WORKFLOWS_KEY] = TestData.INCLUDE_DRAFT_WORKFLOWS;
        return opts;

    };

    return WorkFlowUtils;
}));


},{"./ApiUtils":71,"./TestData":81,"./TransientDocumentUtils":82}],87:[function(require,module,exports){

},{}],88:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":89,"ieee754":90,"isarray":91}],89:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],90:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],91:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69]);
