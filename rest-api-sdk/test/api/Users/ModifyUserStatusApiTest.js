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
     * Mocha unit tests for Modify User Status API.
     */
    describe('ModifyUserStatusApiTest', function () {

        var assert = chai.assert;
        var userId = null;
        var usersApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            usersApi = UserUtils.getUsersApi();
            UserUtils.createUser()
                     .then(function (userIdResponse) {
                         userId = userIdResponse;
                         done();
                     }).catch(function (apiError) {
                done(apiError);
            });
        });

        /**
         * Test to modify user status through modifyUserStatus api. Negative
         * scenarios covered: MUST_PROVIDE_VALID_USER_STATUS: provided with null
         * userStatus enum
         *
         * @throws ApiError
         */
        it('testInvalidUserStatus', function (done) {
            var options = {};
            var userStatusUpdateInfo = null;
            userStatusUpdateInfo = UserUtils.getUserStatusUpdateInfo(TestData.NULL_PARAM);
            usersApi.modifyUserStatus(ApiUtils.getValidHeaderParams(),
                                      userStatusUpdateInfo,
                                      userId,
                                      options)
                    .then(function (userStatusUpdateResponse) {
                        assert.isNotNull(userStatusUpdateResponse);
                        done();
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.MUST_PROVIDE_VALID_USER_STATUS) ? done() : done(apiError);
                    });

        });


    });

}));
