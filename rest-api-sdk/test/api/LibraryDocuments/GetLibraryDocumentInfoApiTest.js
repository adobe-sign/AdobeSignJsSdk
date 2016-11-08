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
