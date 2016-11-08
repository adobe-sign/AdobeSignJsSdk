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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/GroupUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, GroupUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Delete Group Api.
     */
    describe('testDeleteGroup', function () {

        var assert = chai.assert;
        var groupApi = null;
        var groupId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            groupApi = GroupUtils.getGroupsApi();
            GroupUtils.createGroup(ApiUtils.getGroupName())
                      .then(function (groupIdResponse) {
                          groupId = groupIdResponse;
                          done();
                      })
                      .catch(function (apiError) {
                          done(apiError);
                      });

        });

        /**
         * Test for deleting a group. Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testGetGroupDetails', function (done) {
            var opts = {};
            groupApi.deleteGroup(ApiUtils.getValidHeaderParams(),
                                 groupId,
                                 opts)
                    .then(function () {
                        done();
                    })
                    .catch(function (apiError) {
                        done(apiError);
                    });

        });

    });

}));
