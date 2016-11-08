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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/GroupUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, GroupUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Post Groups API.
     */
    describe('CreateGroupApiTest', function () {

        var assert = chai.assert;
        var groupApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            groupApi = GroupUtils.getGroupsApi();
            done();

        });

        /**
         * Test for creating group through the CreateGroupApi.
         * Case covered: Successful creation of group.
         *
         * @throws ApiError
         */
        it('testCreateGroup', function (done) {
          var opts = {};
          var groupCreationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
          groupApi.createGroup(ApiUtils.getValidHeaderParams(),
                               groupCreationInfo,
                               opts)
                  .then(function (groupCreationResponse) {
                    assert.isNotNull(groupCreationResponse);
                    assert.isNotNull(groupCreationResponse.getGroupId());
                    return groupCreationResponse.getGroupId();
                  })
                  .then(function (groupId) {
                    return  groupApi.deleteGroup(ApiUtils.getValidHeaderParams(),
                                                 groupId,
                                                 opts);
                  })
                  .then(function () {
                    done();
                  })
                  .catch(function (apiError) {
                    done(apiError);
                  });
        });

      /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.createGroup(ApiUtils.getNullAccessTokenHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.createGroup(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiUser', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(ApiUtils.getGroupName());
            groupApi.createGroup(ApiUtils.getEmptyXApiUserHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null groupname.
         *
         * @throws ApiError
         */
        it('testNullGroupName', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(TestData.NULL_PARAM);
            groupApi.createGroup(ApiUtils.getValidHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_NAME) ? done() : done(apiError);
                    });

        });

        /**
         * Test for creating group through the createGroup Api. Negative scenarios covered:
         * INVALID_GROUP_NAME: empty group name.
         *
         * @throws ApiError
         */
        it('testEmptyGroupName', function (done) {
            var opts = {};
            var groupCreationInfo = GroupUtils.getGroupCreationInfo(TestData.EMPTY_PARAM);
            groupApi.createGroup(ApiUtils.getValidHeaderParams(),
                                 groupCreationInfo,
                                 opts)
                    .then(function (groupId) {
                        assert.isNotNull(groupId);
                        return groupId;
                    })
                    .catch(function (apiError) {
                        return StringUtil.assertEqual(apiError,
                                                      SdkErrorCodes.INVALID_GROUP_NAME) ? done() : done(apiError);
                    });

        });

    });

}));
