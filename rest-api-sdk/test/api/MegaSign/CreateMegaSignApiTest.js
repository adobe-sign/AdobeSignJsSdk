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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/MegaSignUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, MegaSignUtils, LibraryDocumentUtils, TransientDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for CreateMegaSign APIs.
     */
    describe('CreateMegaSignApiTest', function () {

        var assert = chai.assert;
        var megaSignApi = null;
        var megaSignsModel = AdobeSignSdk.MegaSignsModel;

        var libraryDocumentId = null;
        var transientDocumentId = null;

        this.timeout(TestData.TIME_OUT);


        before(function (done) {
            ApiUtils.configureProperty();
            megaSignApi = MegaSignUtils.getMegaSignsApi();
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
         * Test for creating a megasign agreement through the createMegaSign api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testMegaSigns', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(ApiUtils.getMegaSignName())
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(ApiUtils.getMegaSignName())
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getNullAccessTokenHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(ApiUtils.getMegaSignName())
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                               megaSignCreationRequest);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });
        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(ApiUtils.getMegaSignName())
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: Null MegaSignCreationRequest;
         *
         * @throws ApiError
         */
        it('testNullMegaSignCreationRequest', function (done) {
            var opts = {};
            megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                       TestData.NULL_PARAM,
                                       opts)
                       .then(function (megaSignCreationResponse) {
                           assert.isNotNull(megaSignCreationResponse);
                           assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: name null in MegaSignCreationRequest
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithNullName', function (done) {
            var opts = {};
            MegaSignUtils.getMegaSignCreationRequest(TestData.NULL_PARAM)
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with all 4 parameters null; FileInfo with more than 1 parameter non-empty.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithInValidFileInfo', function (done) {
            var opts = {};
            var fileInfo = new megaSignsModel.FileInfo();
            var megaSignCreationRequest = MegaSignUtils.getMegaSignCreationRequestWithFileInfo(ApiUtils.getMegaSignName(),
                                                                                               fileInfo);
            megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                       megaSignCreationRequest,
                                       opts)
                       .then(function (megaSignCreationResponse) {
                           assert.isNotNull(megaSignCreationResponse);
                           assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * URL_INVALID: Invalid url specified in FileInfo's getDocumentUrl parameter.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithInValidUrl', function (done) {
            var opts = {};
            var url = TestData.INVALID_URL;
            var fileInfo = new megaSignsModel.FileInfo();
            fileInfo.setDocumentURL(url);
            var megaSignCreationRequest = MegaSignUtils.getMegaSignCreationRequestWithFileInfo(ApiUtils.getMegaSignName(),
                                                                                               fileInfo);
            megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                       megaSignCreationRequest,
                                       opts)
                       .then(function (megaSignCreationResponse) {
                           assert.isNotNull(megaSignCreationResponse);
                           assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.URL_INVALID) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_FILE_INFO: null documentUrl in FileInfo
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithNullDocumentUrl', function (done) {
            var opts = {};
            var fileInfo = new megaSignsModel.FileInfo();
            fileInfo.setLibraryDocumentId(libraryDocumentId);
            fileInfo.setTransientDocumentId(transientDocumentId);
            fileInfo.setDocumentURL(TestData.NULL_PARAM);

            var megaSignCreationRequest = MegaSignUtils.getMegaSignCreationRequestWithFileInfo(ApiUtils.getMegaSignName(),
                                                                                               fileInfo);
            megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                       megaSignCreationRequest,
                                       opts)
                       .then(function (megaSignCreationResponse) {
                           assert.isNotNull(megaSignCreationResponse);
                           assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * EMPTY_REDIRECT_URL: Redirect url set to empty in PostSignOptions, if specified.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithEmptyRedirectUrl', function (done) {
            var opts = {};
            var postSignOptions = new megaSignsModel.PostSignOptions();
            postSignOptions.setRedirectUrl(TestData.EMPTY_PARAM);

            MegaSignUtils.getMegaSignCreationRequestWithPostSignOptions(ApiUtils.getMegaSignName(),
                                                                        postSignOptions)
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.EMPTY_REDIRECT_URL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_REDIRECT_URL: Invalid url specified in PostSignOption.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithInvalidRedirectUrl', function (done) {
            var opts = {};
            var postSignOptions = new megaSignsModel.PostSignOptions();
            postSignOptions.setRedirectUrl(TestData.INVALID_URL);

            MegaSignUtils.getMegaSignCreationRequestWithPostSignOptions(ApiUtils.getMegaSignName(), postSignOptions)
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_REDIRECT_URL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating a megasign agreement through the createMegaSign api. Negative scenarios covered:
         * INVALID_REDIRECT_DELAY: Negative redirect delay set in PostSignOptions.
         *
         * @throws ApiError
         */
        it('testMegaSignCreationRequestWithInvalidRedirectDelay', function (done) {
            var opts = {};
            var postSignOptions = new megaSignsModel.PostSignOptions();
            postSignOptions.setRedirectUrl(TestData.REDIRECT_URL);
            postSignOptions.setRedirectDelay(TestData.INVALID_REDIRECT_DELAY);

            MegaSignUtils.getMegaSignCreationRequestWithPostSignOptions(ApiUtils.getMegaSignName(), postSignOptions)
                         .then(function (megaSignCreationRequest) {
                             return megaSignApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                               megaSignCreationRequest,
                                                               opts);
                         })
                         .then(function (megaSignCreationResponse) {
                             assert.isNotNull(megaSignCreationResponse);
                             assert.isNotNull(megaSignCreationResponse.getMegaSignId());
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_REDIRECT_DELAY) ? done() : done(apiError);
                         });

        });

    });

}));
