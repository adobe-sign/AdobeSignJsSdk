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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/WorkFlowUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, WorkFlowUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Get WorkFlows APIs.
     */
    describe('GetWorkflowInfoApiTest', function () {

        var assert = chai.assert;
        var workFlowsApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            workFlowsApi = WorkFlowUtils.getWorkFlowsApi();
            done();
        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetWorkflowInfo', function (done) {
            workFlowsApi.getWorkflows(ApiUtils.getValidHeaderParams(),
                                      WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            done(apiError);
                        });

        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            workFlowsApi.getWorkflows(ApiUtils.getNullAccessTokenHeaderParams(),
                                      WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            workFlowsApi.getWorkflows(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                      WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {

            workFlowsApi.getWorkflows(ApiUtils.getEmptyXApiUserHeaderParams(),
                                      WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving workflows for a user through the GetWorkflowsApi. Negative scenarios covered:
         * INVALID_GROUP_ID: empty groupId.
         *
         * @throws ApiError
         */
        it('testEmptyGroupId', function (done) {
            workFlowsApi.getWorkflows(ApiUtils.getValidHeaderParams(),
                                      WorkFlowUtils.getOptionsWithEmptyGroupIdAndValidIncludeDraftWorkflows())
                        .then(function (userWorkflows) {
                            assert.isNotNull(userWorkflows);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_GROUP_ID) ? done() : done(apiError);
                        });

        });

    });

}));
