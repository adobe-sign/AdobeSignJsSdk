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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
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
