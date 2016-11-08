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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/ViewUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, ViewUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Create View Agreement Asset List APIs.
     */
    describe('CreateViewSettingsApiTest', function () {

        var assert = chai.assert;
        var viewsModel = AdobeSignSdk.ViewsModel;
        var viewsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            viewsApi = ViewUtils.getViewsApi();
            done();
        });

        /**
         * Test for returning the URL for settings page through the getSettingsUrl api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testCreateSettingsUrl', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getValidHeaderParams(),
                                       ViewUtils.getTargetViewRequest(viewsModel.TargetViewRequest.TargetViewEnum.USER_PROFILE),
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
         * Test for returning the URL for settings page through the getSettingsUrl api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getNullAccessTokenHeaderParams(),
                                       ViewUtils.getTargetViewRequest(viewsModel.TargetViewRequest.TargetViewEnum.USER_PROFILE),
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
         * Test for returning the URL for settings page through the getSettingsUrl api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                       ViewUtils.getTargetViewRequest(viewsModel.TargetViewRequest.TargetViewEnum.USER_PROFILE),
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
         * Test for returning the URL for settings page through the getSettingsUrl api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getEmptyXApiUserHeaderParams(),
                                       ViewUtils.getTargetViewRequest(viewsModel.TargetViewRequest.TargetViewEnum.USER_PROFILE),
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
         * Test for returning the URL for settings page through the getSettingsUrl api. Negative scenarios covered:
         * INVALID_TARGET_VIEW: null agreement asset Id.
         *
         * @throws ApiError
         */
        it('testNullTargetView', function (done) {
            var opts = {};
            viewsApi.createSettingsUrl(ApiUtils.getValidHeaderParams(),
                                       ViewUtils.getTargetViewRequest(TestData.NULL_PARAM),
                                       opts)
                    .then(function (viewUrl) {
                        assert.isNotNull(viewUrl);
                        assert.isNotNull(viewUrl.getViewURL());
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_TARGET_VIEW) ? done() : done(apiError);
                    });

        });

    });

}));

