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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/SearchUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, SearchUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
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
