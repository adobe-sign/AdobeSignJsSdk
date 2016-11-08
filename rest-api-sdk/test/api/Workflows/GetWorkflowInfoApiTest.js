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
     * Mocha unit tests for for Get Workflow Info APIs.
     */
    describe('GetWorkflowInfoApiTest', function () {

        var assert = chai.assert;
        var workFlowsApi = null;
        var workFlowId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            workFlowsApi = WorkFlowUtils.getWorkFlowsApi();
            workFlowId = WorkFlowUtils.getResourceId();
            done();
        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi
         *
         * @throws ApiError
         */
        it('testGetWorkflowInfo', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getValidHeaderParams(),
                                         workFlowId)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getNullAccessTokenHeaderParams(),
                                         workFlowId)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                         workFlowId)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getEmptyXApiUserHeaderParams(),
                                         workFlowId)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * INVALID_WORKFLOW_ID: Null workflowId.
         *
         * @throws ApiError
         */
        it('testNullWorkflowId', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getValidHeaderParams(),
                                         TestData.NULL_PARAM)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_WORKFLOW_ID) ? done() : done(apiError);
                        });

        });

        /**
         * Test for retrieving the details of a workflow through the GetWorkflowInfoApi. Negative scenarios covered:
         * INVALID_WORKFLOW_ID: Empty workflowId.
         *
         * @throws ApiError
         */
        it('testEmptyWorkflowId', function (done) {
            workFlowsApi.getWorkflowInfo(ApiUtils.getValidHeaderParams(),
                                         TestData.EMPTY_PARAM)
                        .then(function (workflowDescription) {
                            assert.isNotNull(workflowDescription);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_WORKFLOW_ID) ? done() : done(apiError);
                        });

        });

    });


}));
