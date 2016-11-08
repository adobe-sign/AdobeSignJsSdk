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
