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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, AgreementUtils, LibraryDocumentUtils, TransientDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
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
