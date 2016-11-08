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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/ViewUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, ViewUtils, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
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
