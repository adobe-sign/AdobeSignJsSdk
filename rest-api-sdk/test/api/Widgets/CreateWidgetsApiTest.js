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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, WidgetUtils, TransientDocumentUtils, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Create Widgets Api.
     */
    describe('CreateWidgetsApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetsModel = AdobeSignSdk.WidgetsModel;
        var libraryDocumentId = null;
        var transientDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
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
         * Test for creating a widget through the createWidget api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCreateWidget', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(ApiUtils.getWidgetName())
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(ApiUtils.getWidgetName())
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getNullAccessTokenHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(ApiUtils.getWidgetName())
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(ApiUtils.getWidgetName())
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null widgetCreationRequest.
         *
         * @throws ApiError
         */
        it('testNullWidgetCreationRequest', function (done) {
            var opts = {};
            widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                    TestData.NULL_PARAM,
                                    opts)
                      .then(function (widgetCreationResponse) {
                          assert.isNotNull(widgetCreationResponse);
                          assert.isNotNull(widgetCreationResponse.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                      });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null widget name.
         *
         * @throws ApiError
         */
        it('testNullWidgetName', function (done) {
            var opts = {};
            WidgetUtils.getWidgetCreationRequest(TestData.NULL_PARAM)
                       .then(function (widgetCreationRequest) {
                           return widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                                          widgetCreationRequest,
                                                          opts)
                       })
                       .then(function (widgetCreationResponse) {
                           assert.isNotNull(widgetCreationResponse);
                           assert.isNotNull(widgetCreationResponse.getWidgetId());
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                       });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with all 4 parameters null;
         *
         * @throws ApiError
         */
        it('testInvalidFileInfo', function (done) {
            var opts = {};
            var fileInfo = new widgetsModel.WidgetFileInfo();
            var widgetCreationRequest = WidgetUtils.getWidgetCreationRequestWithFileInfo(TestData.WIDGET_NAME,
                                                                                         fileInfo);
            widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                    widgetCreationRequest,
                                    opts)
                      .then(function (widgetCreationResponse) {
                          assert.isNotNull(widgetCreationResponse);
                          assert.isNotNull(widgetCreationResponse.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                      });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * URL_INVALID: Invalid url specified in FileInfo's getDocumentUrl parameter.
         *
         * @throws ApiError
         */
        it('testInvalidUrl', function (done) {
            var opts = {};
            var fileInfo = new widgetsModel.WidgetFileInfo();
            var fileInfoUrl = new widgetsModel.WidgetURLFileInfo();
            fileInfoUrl.setUrl(TestData.INVALID_URL);
            fileInfo.setDocumentURL(fileInfoUrl);

            var widgetCreationRequest = WidgetUtils.getWidgetCreationRequestWithFileInfo(TestData.WIDGET_NAME,
                                                                                         fileInfo);
            widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                    widgetCreationRequest,
                                    opts)
                      .then(function (widgetCreationResponse) {
                          assert.isNotNull(widgetCreationResponse);
                          assert.isNotNull(widgetCreationResponse.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.URL_INVALID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for creating a widget through the createWidget api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with more than 1 parameter non-empty.
         *
         * @throws ApiError
         */
        it('testMoreThanOneParameterNonEmptyInFileInfo', function (done) {
            var opts = {};
            var fileInfo = new widgetsModel.WidgetFileInfo();
            fileInfo.getLibraryDocumentId(libraryDocumentId);
            fileInfo.getTransientDocumentId(transientDocumentId);
            fileInfo.getDocumentURL(TestData.NULL_PARAM);

            var widgetCreationRequest = WidgetUtils.getWidgetCreationRequestWithFileInfo(TestData.WIDGET_NAME,
                                                                                         fileInfo);
            widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                    widgetCreationRequest,
                                    opts)
                      .then(function (widgetCreationResponse) {
                          assert.isNotNull(widgetCreationResponse);
                          assert.isNotNull(widgetCreationResponse.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                      });

        });

    });

}));
