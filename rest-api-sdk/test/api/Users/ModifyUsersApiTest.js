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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/UserUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));

}(function (AdobeSignSdk, TestData, UserUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     *  Mocha unit tests for Modify Groups API.
     */
    describe('ModifyUsersApiTest', function () {

        var assert = chai.assert;
        var usersModel = AdobeSignSdk.UsersModel;
        var usersApi = null;
        var userId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            usersApi = UserUtils.getUsersApi();
            UserUtils.createUser()
                     .then(function (userIdResponse) {
                         userId = userIdResponse;
                         done();
                     })
                     .catch(function (apiError) {
                         done(apiError);
                     });

        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var userModificationInfo = new usersModel.UserModificationInfo();
            usersApi.modifyUser(ApiUtils.getNullAccessTokenHeaderParams(),
                                userModificationInfo,
                                userId,
                                opts)
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty
         * access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var userModificationInfo = new usersModel.UserModificationInfo();
            usersApi.modifyUser(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                userModificationInfo,
                                userId,
                                opts)
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            var userModificationInfo = new usersModel.UserModificationInfo();
            usersApi.modifyUser(ApiUtils.getEmptyXApiUserHeaderParams(),
                                userModificationInfo,
                                userId,
                                opts)
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null user id.
         *
         * @throws ApiError
         */
        it('testNullUserId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   TestData.NULL_PARAM,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });


        });

        /**
         * Test for modifying a user. Negative scenarios covered:
         * INVALID_USER_ID: invalid user id.
         *
         * @throws ApiError
         */
        it('testInvalidUserId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   TestData.INVALID_USER_ID,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });


        /**
         * Test for modifying a user. Negative scenarios covered:
         * INVALID_USER_ID: empty user id.
         *
         * @throws ApiError
         */
        it('testEmptyUserId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   TestData.EMPTY_PARAM,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.INVALID_USER_ID) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null group id.
         *
         * @throws ApiError
         */
        it('testNullGroupId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 TestData.NULL_PARAM,
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: empty group id.
         *
         * @throws ApiError
         */
        it('testEmptyGroupId', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 TestData.EMPTY_PARAM,
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                                       .then(function (userModificationResponse) {
                                           assert.isNotNull(userModificationResponse);
                                           assert.isNotNull(userModificationResponse.getEmail());
                                           done();
                                       })
                                       .catch(function (apiError) {
                                           return StringUtil.assertEqual(apiError,
                                                                         SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                                       });
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: empty first name.
         *
         * @throws ApiError
         */
        it('testEmptyFirstName', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(TestData.EMPTY_PARAM,
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });


        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null first name.
         *
         * @throws ApiError
         */
        it('testNullFirstName', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(TestData.NULL_PARAM,
                                                                                 userDetailsInfo.getLastName(),
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });


        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null last name.
         *
         * @throws ApiError
         */
        it('testNullLastName', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 TestData.NULL_PARAM,
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });


        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: empty last name.
         *
         * @throws ApiError
         */
        it('testEmptyLastName', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 TestData.EMPTY_PARAM,
                                                                                 userDetailsInfo.getEmail(),
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });


        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null email.
         *
         * @throws ApiError
         */
        it('testNullEmail', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 TestData.NULL_PARAM,
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });


        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: empty email.
         *
         * @throws ApiError
         */
        it('testEmptyEmail', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(),
                                   userId,
                                   opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 TestData.EMPTY_PARAM,
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts);
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        assert.isNotNull(userModificationResponse.getEmail());
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });

        });

        /**
         * Test for modifying a group. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: invalid email.
         *
         * @throws ApiError
         */
        it('testInvalidEmail', function (done) {
            var opts = {};
            var userModificationInfo = null;
            usersApi.getUserDetail(ApiUtils.getValidHeaderParams(), userId, opts)
                    .then(function (userDetailsInfo) {
                        userModificationInfo = UserUtils.getUserModificationInfo(userDetailsInfo.getFirstName(),
                                                                                 userDetailsInfo.getLastName(),
                                                                                 TestData.INVALID_EMAIL,
                                                                                 userDetailsInfo.getGroupId(),
                                                                                 usersModel.UserModificationInfo.RolesEnum.NORMAL_USER);
                        return usersApi.modifyUser(ApiUtils.getValidHeaderParams(),
                                                   userModificationInfo,
                                                   userId,
                                                   opts)
                    })
                    .then(function (userModificationResponse) {
                        assert.isNotNull(userModificationResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                    });

        });


    });

}));
