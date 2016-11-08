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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/OAuthUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, OAuthUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    describe('RefreshAccessTokenTest', function () {

        var oAuthApi = null;
        var assert = chai.assert;

        var REFRESH_TOKEN = "refreshToken";
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            oAuthApi = OAuthUtils.getOAuthApi();
            done();
        });

        /**
         * Test for refreshing the access token through the refreshAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientId null in accessTokenRefreshRequest.
         * @throws ApiError
         */
        it('testInvalidClientId', function (done) {
            //ClientId Null in accessTokenRefreshRequest
            var accessTokenRefreshRequest = OAuthUtils.getAccessTokenRefreshRequest(TestData.NULL_PARAM,
                                                                                    TestData.CLIENT_SECRET,
                                                                                    REFRESH_TOKEN,
                                                                                    TestData.REFRESH_TOKEN_GRANT_TYPE);
            oAuthApi.refreshAccessToken(accessTokenRefreshRequest)
                    .then(function (accessTokenRefreshResponse) {
                        assert.isNotNull(accessTokenRefreshResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for refreshing the access token through the refreshAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientSecret null in accessTokenRefreshRequest.
         * @throws ApiError
         */
        it('testInvalidClientSecret', function (done) {
            //ClientSecret Null in accessTokenRefreshRequest
            var accessTokenRefreshRequest = OAuthUtils.getAccessTokenRefreshRequest(TestData.CLIENT_ID,
                                                                                    TestData.NULL_PARAM,
                                                                                    REFRESH_TOKEN,
                                                                                    TestData.REFRESH_TOKEN_GRANT_TYPE);
            oAuthApi.refreshAccessToken(accessTokenRefreshRequest)
                    .then(function (accessTokenRefreshResponse) {
                        assert.isNotNull(accessTokenRefreshResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for refreshing the access token through the refreshAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: grantType null in accessTokenRefreshRequest.
         * @throws ApiError
         */
        it('testInvalidGrantType', function (done) {
            //grantType Null in accessTokenRefreshRequest
            var accessTokenRefreshRequest = OAuthUtils.getAccessTokenRefreshRequest(TestData.CLIENT_ID,
                                                                                    TestData.CLIENT_SECRET,
                                                                                    REFRESH_TOKEN,
                                                                                    TestData.NULL_PARAM);
            oAuthApi.refreshAccessToken(accessTokenRefreshRequest)
                    .then(function (accessTokenRefreshResponse) {
                        assert.isNotNull(accessTokenRefreshResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for refreshing the access token through the refreshAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: code null in accessTokenRefreshRequest.
         *
         * @throws ApiError
         */
        it('testInvalidRefreshToken', function (done) {
            var accessTokenRefreshRequest = OAuthUtils.getAccessTokenRefreshRequest(TestData.CLIENT_ID,
                                                                                    TestData.CLIENT_SECRET,
                                                                                    TestData.NULL_PARAM,
                                                                                    TestData.REFRESH_TOKEN_GRANT_TYPE);
            oAuthApi.refreshAccessToken(accessTokenRefreshRequest)
                    .then(function (accessTokenRefreshResponse) {
                        assert.isNotNull(accessTokenRefreshResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });
    });
}));

