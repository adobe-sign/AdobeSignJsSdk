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
     * Mocha unit tests for Update Widget Personalize API.
     */
    describe('UpdateWidgetsPersonalizeApiTest', function () {

        var assert = chai.assert;
        var widgetsApi = null;
        var widgetId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            widgetsApi = WidgetUtils.getWidgetsApi();
            WidgetUtils.createWidget(ApiUtils.getWidgetName())
                       .then(function (widgetIdResponse) {
                           widgetId = widgetIdResponse;
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });
        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testUpdateWidgetPersonalize', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getNullAccessTokenHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });
        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getEmptyXApiUserHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               TestData.EMPTY_PARAM,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.POST_EMAIL),
                                               TestData.NULL_PARAM,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_EMAIL: empty e-mail.
         *
         * @throws ApiError
         */
        it('testNullEmail', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.NULL_PARAM),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                      });

        });

        /**
         * Test for personalizing the widget to a signable document for a specific known user through the updateWidgetPersonalize api.
         * Negative scenarios covered:
         * INVALID_EMAIL: invalid e-mail.
         *
         * @throws ApiError
         */
        it('testInvalidEmail', function (done) {
            var opts = {};
            widgetsApi.updateWidgetPersonalize(ApiUtils.getValidHeaderParams(),
                                               WidgetUtils.getwidgetPersonalizationInfo(TestData.INVALID_EMAIL),
                                               widgetId,
                                               opts)
                      .then(function (widgetPersonalizeResponse) {
                          assert.isNotNull(widgetPersonalizeResponse);
                          assert.isNotNull(widgetPersonalizeResponse.getWidgetId());
                          assert.isNotNull(widgetPersonalizeResponse.getJavascript());
                          assert.isNotNull(widgetPersonalizeResponse.getUrl());
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                      });

        });

    });

}));
