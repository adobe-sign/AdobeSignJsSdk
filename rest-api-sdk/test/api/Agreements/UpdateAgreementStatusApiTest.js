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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
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
