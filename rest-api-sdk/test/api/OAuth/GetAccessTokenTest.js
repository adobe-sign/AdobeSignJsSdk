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

    describe('GetAccessTokenTest', function () {

        var CODE = "code";

        var assert = chai.assert;
        var oAuthApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            oAuthApi = OAuthUtils.getOAuthApi();
            done();
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientId null in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidClientId', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.NULL_PARAM,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.REDIRECT_URI,
                                                                      CODE,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientSecret null in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidClientSecret', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.NULL_PARAM,
                                                                      TestData.REDIRECT_URI,
                                                                      CODE,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: grantType null in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidGrantType', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.REDIRECT_URI,
                                                                      CODE,
                                                                      TestData.NULL_PARAM);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: redirectUri null in accessTokenRequest.
         * @throws ApiError
         */

        it('testNullRedirectUri', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.NULL_PARAM,
                                                                      CODE,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * INVALID_REQUEST : Invalid redirectUri specified in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidRedirectUri', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.INVALID_URL,
                                                                      CODE,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_REQUEST) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAccessToken Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: code null in accessTokenRequest.
         * @throws ApiError
         */
        it('testInvalidCode', function (done) {
            var accessTokenRequest = OAuthUtils.getAccessTokenRequest(TestData.CLIENT_ID,
                                                                      TestData.CLIENT_SECRET,
                                                                      TestData.REDIRECT_URI,
                                                                      TestData.NULL_PARAM,
                                                                      TestData.ACCESS_TOKEN_GRANT_TYPE);
            oAuthApi.getAccessToken(accessTokenRequest)
                    .then(function (accessTokenResponse) {
                        assert.isNotNull(accessTokenResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });
    });
}));
