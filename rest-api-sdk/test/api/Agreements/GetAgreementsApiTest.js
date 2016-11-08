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
