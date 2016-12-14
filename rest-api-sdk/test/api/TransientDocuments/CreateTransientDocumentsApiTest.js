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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/TransientDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));

}(function (TestData, TransientDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
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
