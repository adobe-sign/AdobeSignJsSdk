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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/UserUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, UserUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Get User Info API.
     */
    describe('GetUserInfoApiTest', function () {

        var assert = chai.assert;
        var usersApi = null;
        var userId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            usersApi = UserUtils.getUsersApi();
            UserUtils.getResourceId(TestData.USER_EMAIL)
                     .then(function (userIdResponse) {
                         userId = userIdResponse;
                         done();
                     })
                     .catch(function (apiError) {
                         done(apiError);
                     });

        });

        /**
         * Test for getting details through the getUserInfo endpoint. Case covered is successful execution
         * of the API call.
         *
         * @throws ApiError
         */
        it('testGetUserDetails', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getNullAccessTokenHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });
        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getEmptyXApiUserHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * INVALID_USER_ID: null user id.
         *
         * @throws ApiError
         */
        it('testNullUserId', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   TestData.NULL_PARAM,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                    });

        });

        /**
         * Test for getting details of a user. Negative scenarios covered:
         * INVALID_USER_ID: empty user id.
         *
         * @throws ApiError
         */
        it('testInvalidUserId', function (done) {
            var opts = {};
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   TestData.EMPTY_PARAM,
                                   opts)
                    .then(function (userDetailsInfo) {
                        assert.isNotNull(userDetailsInfo);
                        assert.isNotNull(userDetailsInfo.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                    });

        });

    });

}));
