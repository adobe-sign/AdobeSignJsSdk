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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/OAuthUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, OAuthUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    describe('GetAuthorizationUrlTest', function () {

        var oAuthApi = null;
        var assert = chai.assert;
        var scopes = [];

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            oAuthApi = OAuthUtils.getOAuthApi();

            var scope = new AdobeSignSdk.OAuthModel.Scope();
            scope.setTarget("user_write");
            scope.setModifier("account");
            scopes.push(scope);
            done();
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api.
         * Case covered: authorizationUrl fetched successfully.
         *
         * @throws ApiError
         */
        it('testGetAuthorizationUrl', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.REDIRECT_URI,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });
        });

        /**
         * Test for fetching the access token through the getAuthorizationRequest Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: ClientId null in authorizationRequest.
         * @throws ApiError
         */
        it('testInvalidClientId', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.NULL_PARAM,
                                                                          TestData.REDIRECT_URI,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api. Negative scenarios covered:
         * INVALID_REQUEST : Invalid redirectUri specified in authorizationRequest.
         *
         * @throws ApiError
         */
        it('testEmptyRedirectUri', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.NULL_PARAM,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api. Negative scenarios covered:
         * INVALID_REQUEST : Invalid redirectUri specified in authorizationRequest.
         *
         * @throws ApiError
         */
        it('testNullRedirectUri', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.INVALID_URL,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.INVALID_URL) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: scopes null in authorizationRequest.
         *
         * @throws ApiError
         */
        it('testInvalidScopes', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.REDIRECT_URI,
                                                                          TestData.NULL_PARAM,
                                                                          TestData.STATE,
                                                                          TestData.RESPONSE_TYPE);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });

        /**
         * Test for fetching the authorizationUrl through the getAuthorizationUrl Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: responseType null in authorizationRequest.
         *
         * @throws ApiError
         */
        it('testInvalidResponseType', function (done) {
            var authorizationRequest = OAuthUtils.getAuthorizationRequest(TestData.CLIENT_ID,
                                                                          TestData.REDIRECT_URI,
                                                                          scopes,
                                                                          TestData.STATE,
                                                                          TestData.NULL_PARAM);
            oAuthApi.getAuthorizationUrl(authorizationRequest)
                    .then(function (authorizationUrl) {
                        assert.isNotNull(authorizationUrl);
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });
    });
}));
