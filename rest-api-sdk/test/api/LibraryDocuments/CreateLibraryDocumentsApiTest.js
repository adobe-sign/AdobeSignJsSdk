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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/LibraryDocumentUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, LibraryDocumentUtils, TransientDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {

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
