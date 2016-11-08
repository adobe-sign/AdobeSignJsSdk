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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Get Widget Info API.
     */
    describe('GetWidgetInfoApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.getResourceId(TestData.WIDGET_NAME)
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetWidgetInfo', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getValidHeaderParams(),
                                     widgetId,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getNullAccessTokenHeaderParams(),
                                     widgetId,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                     widgetId,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getEmptyXApiUserHeaderParams(),
                                     widgetId,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getValidHeaderParams(),
                                     TestData.EMPTY_PARAM,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for retrieving the details of the widget through the getWidgetInfo api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.getWidgetInfo(ApiUtils.getValidHeaderParams(),
                                     TestData.NULL_PARAM,
                                     opts)
                      .then(function (widgetInfo) {
                          assert.isNotNull(widgetInfo);
                          assert.isNotNull(widgetInfo.getWidgetId());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

    });

}));
