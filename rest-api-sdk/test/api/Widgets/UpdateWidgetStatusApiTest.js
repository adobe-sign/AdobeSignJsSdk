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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/WidgetUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, WidgetUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Update Widget Status API.
     */
    describe('UpdateWidgetStatusApiTest', function () {

        var assert = chai.assert;
        var widgetsModel = AdobeSignSdk.WidgetsModel;
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
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Positive scenarios covered: Enable
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testUpdateWidgetStatusDisable', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Case covered is successful execution of the api call.
         * Positive scenarios covered: Disable
         *
         * @throws ApiError
         */
        it('testUpdateWidgetStatusEnable', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.ENABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getNullAccessTokenHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: empty widgetId.
         *
         * @throws ApiError
         */
        it('testEmptyWidgetId', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          TestData.EMPTY_PARAM,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_WIDGET_ID: null widgetId.
         *
         * @throws ApiError
         */
        it('testNullWidgetId', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.NULL_PARAM),
                                          TestData.NULL_PARAM,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_WIDGET_ID) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * NO_ACTION_SPECIFIED: null values specified in widgetStatusUpdateInfo's message and redirectUrl parameter.
         *
         * @throws ApiError
         */
        it('testNoActionSpecified', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.NULL_PARAM,
                                                                                TestData.NULL_PARAM),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.NO_ACTION_SPECIFIED) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * INVALID_URL: Invalid url specified in widgetStatusUpdateInfo's redirectUrl parameter.
         *
         * @throws ApiError
         */
        it('testInvalidUrl', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.NULL_PARAM,
                                                                                TestData.INVALID_URL),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.INVALID_URL) ? done() : done(apiError);
                      });

        });

        /**
         * Test for updating the status of a widget through the updateWidgetStatus api.
         * Negative scenarios covered:
         * TOO_MANY_ACTIONS_SPECIFIED : Specify both message and redirectUrl parameter in widgetStatusUpdateInfo's.
         *
         * @throws ApiError
         */
        it('testTooManyActionsSpecified', function (done) {
            var opts = {};
            widgetsApi.updateWidgetStatus(ApiUtils.getValidHeaderParams(),
                                          WidgetUtils.getWidgetStatusUpdateInfo(widgetsModel.WidgetStatusUpdateInfo.ValueEnum.DISABLE,
                                                                                TestData.WIDGET_UPDATE_MESSAGE,
                                                                                TestData.REDIRECT_URL),
                                          widgetId,
                                          opts)
                      .then(function (widgetStatusUpdateResponse) {
                          assert.isNotNull(widgetStatusUpdateResponse);
                          assert.isNotNull(widgetStatusUpdateResponse.getCode());
                          assert.equal(widgetStatusUpdateResponse.getCode(),
                                       widgetsModel.WidgetStatusUpdateResponse.CodeEnum.OK);
                          done();
                      })
                      .catch(function (apiError) {
                          StringUtil.assertEqual(apiError,
                                                 SdkErrorCodes.TOO_MANY_ACTIONS_SPECIFIED) ? done() : done(apiError);
                      });

        });

    });

}));
