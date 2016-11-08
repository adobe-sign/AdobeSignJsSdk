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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/UserUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, UserUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Create User Api.
     */
    describe('CreateUserApiTest', function () {

        var assert = chai.assert;
        var usersApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            usersApi = UserUtils.getUsersApi();
            done();
        });

        /**
         * Test for creating user through the createUser api. Case covered is
         * successful creation of user.
         *
         * @throws ApiError
         */
        it('testCreateUser', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });
        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getNullAccessTokenHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });
        });

        /**
         * Test for creating user through the createUser api. Negative
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup endpoint. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getEmptyXApiUserHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });
        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MISSING_REQUIRED_PARAM: null first name
         *
         * @throws ApiError
         */
        it('testNullFirstName', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(TestData.NULL_PARAM,
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MISSING_REQUIRED_PARAM: null second name
         *
         * @throws ApiError
         */
        it('testNullSecondName', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 TestData.NULL_PARAM,
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MISSING_REQUIRED_PARAM: empty first name
         *
         * @throws ApiError
         */
        it('testEmptyFirstName', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(TestData.EMPTY_PARAM,
                                                                 ApiUtils.getLastName(),
                                                                 ApiUtils.getEmail());
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MUST_PROVIDE_EMAIL: null email.
         *
         * @throws ApiError
         */

        it('testNullEmail', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 TestData.NULL_PARAM);
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MUST_PROVIDE_EMAIL) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MUST_PROVIDE_EMAIL: empty email.
         *
         * @throws ApiError
         */

        it('testEmptyEmail', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 TestData.EMPTY_PARAM);
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MUST_PROVIDE_EMAIL) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating user through the createUser api. Negative
         * scenarios covered: MUST_PROVIDE_EMAIL: invalid email.
         *
         * @throws ApiError
         */

        it('testInvalidEmail', function (done) {
            var opts = {};
            var userCreationInfo = UserUtils.getUserCreationInfo(ApiUtils.getFirstName(),
                                                                 ApiUtils.getLastName(),
                                                                 TestData.INVALID_EMAIL);
            usersApi.createUser(ApiUtils.getValidHeaderParams(),
                                userCreationInfo,
                                opts)
                    .then(function (userId) {
                        assert.isNotNull(userId);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                    });

        });

    });

}));
