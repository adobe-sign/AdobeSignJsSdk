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
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/WorkFlowUtils'), require('../../utils/TransientDocumentUtils'), require('../../utils/LibraryDocumentUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, WorkFlowUtils, TransientDocumentUtils, LibraryDocumentUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for CreateWorkFlowsAgreements APIs
     */
    describe('testCreateWorkflowAgreement', function () {

        var assert = chai.assert;
        var workFlowsApi = null;
        var workFlowId = null;
        var workflowModel = AdobeSignSdk.WorkflowsModel;
        var libraryDocumentId = null;
        var transientDocumentId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            workFlowsApi = WorkFlowUtils.getWorkFlowsApi();
            workFlowId = WorkFlowUtils.getResourceId();
            Promise.all([LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME),
                            TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)])
                   .then(function (ids) {
                       libraryDocumentId = ids[0];
                       transientDocumentId = ids[1].getTransientDocumentId();
                       done();
                   })
                   .catch(function (apiError) {
                       done(apiError);
                   });
        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api.
         *
         * @throws ApiError
         */
        it('testCreateWorkflowAgreement', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiException
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getNullAccessTokenHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });
        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiException
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)
                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });
        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiException
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios
         * covered:
         * INVALID_WORKFLOW_ID: null workflowId.
         *
         * @throws ApiException
         */
        it('testNullWorkflowId', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         TestData.NULL_PARAM,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_WORKFLOW_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the CreateWorkFlowAgreement api. Negative scenarios
         * covered:
         * INVALID_WORKFLOW_ID: Empty workflowId.
         *
         * @throws ApiException
         */
        it('testEmptyWorkflowId', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(ApiUtils.getAgreementName())
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         TestData.EMPTY_PARAM,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_WORKFLOW_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * CUSTOMWORKFLOW_AGREEMENT_CREATION_REQUEST: null.
         *
         * @throws ApiException
         */
        it('testNullAgreementCreationRequest', function (done) {
            var opts = {};
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 TestData.NULL_PARAM,
                                                 workFlowId,
                                                 opts)
                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_FILE_INFO: FileInfo with all 4 parameters null.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithNullFileInfo', function (done) {
            var opts = {};
            var fileInfo = new workflowModel.CustomWorkflowFileInfo();
            var customWorkflowAgreementCreationRequest = WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo(fileInfo,
                                                                                                                             ApiUtils.getAgreementName());
            customWorkflowAgreementCreationRequest.getDocumentCreationInfo().setFileInfos(null);
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 customWorkflowAgreementCreationRequest,
                                                 workFlowId,
                                                 opts)

                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_FILE_INFO) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * FILE_INFO_NAME_MISSING: name field in FileInfo null.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithMissingFileInfoName', function (done) {
            var opts = {};
            var fileInfo = new workflowModel.CustomWorkflowFileInfo();
            fileInfo.name = TestData.EMPTY_PARAM;
            fileInfo.workflowLibraryDocumentId = libraryDocumentId;
            fileInfo.transientDocumentId = transientDocumentId;
            var customWorkflowAgreementCreationRequest = WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo(fileInfo,
                                                                                                                             ApiUtils.getAgreementName());
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 customWorkflowAgreementCreationRequest,
                                                 workFlowId,
                                                 opts)
                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.FILE_INFO_NAME_MISSING) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_TRANSIENTDOCUMENT_ID: empty TransientId in FileInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithEmptyTransientDocumentId', function (done) {
            var opts = {};
            var fileInfo = new workflowModel.CustomWorkflowFileInfo();
            fileInfo.name = TestData.AGREEMENT_NAME;
            fileInfo.workflowLibraryDocumentId = TestData.NULL_PARAM;
            fileInfo.transientDocumentId = TestData.EMPTY_PARAM;
            var customWorkflowAgreementCreationRequest = WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo(fileInfo,
                                                                                                                             ApiUtils.getAgreementName());
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 customWorkflowAgreementCreationRequest,
                                                 workFlowId,
                                                 opts)

                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_TRANSIENTDOCUMENT_ID) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_LIBRARYDOCUMENT_ID: empty workflowLibraryDocumentId in FileInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithEmptyWorkflowLibraryDocumentId', function (done) {
            var opts = {};
            var fileInfo = new workflowModel.CustomWorkflowFileInfo();
            fileInfo.name = TestData.AGREEMENT_NAME;
            fileInfo.workflowLibraryDocumentId = TestData.EMPTY_PARAM;
            fileInfo.transientDocumentId = TestData.NULL_PARAM;
            var customWorkflowAgreementCreationRequest = WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo(fileInfo,
                                                                                                                             ApiUtils.getAgreementName());
            workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                 customWorkflowAgreementCreationRequest,
                                                 workFlowId,
                                                 opts)
                        .then(function (agreementCreationResponse) {
                            assert.isNotNull(agreementCreationResponse);
                            done();
                        })
                        .catch(function (apiError) {
                            StringUtil.assertEqual(apiError,
                                                   SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID) ? done() : done(apiError);
                        });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: Name null in documentCreationInfo;
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithNullNameInDocumentCreationInfo', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequest(TestData.NULL_PARAM)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * EMPTY_REDIRECT_URL: Redirect url set to empty in PostSignOptions, if specified.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithEmptyRedirectUrlInPostSignOptions', function (done) {
            var opts = {};
            var postSignOptions = new workflowModel.PostSignOptions();
            postSignOptions.redirectUrl = TestData.EMPTY_PARAM;
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithPostSignOptions(ApiUtils.getAgreementName(),
                                                                                       postSignOptions)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.EMPTY_REDIRECT_URL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_REDIRECT_URL: Invalid url specified in PostSignOption.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithInvalidRedirectUrlInPostSignOptions', function (done) {
            var opts = {};
            var postSignOptions = new workflowModel.PostSignOptions();
            postSignOptions.redirectUrl = TestData.INVALID_URL;
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithPostSignOptions(ApiUtils.getAgreementName(),
                                                                                       postSignOptions)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_REDIRECT_URL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_REDIRECT_DELAY: Negative redirect delay set in PostSignOptions.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithInvalidRedirectDelaylInPostSignOptions', function (done) {
            var opts = {};
            var postSignOptions = new workflowModel.PostSignOptions();
            postSignOptions.redirectUrl = TestData.REDIRECT_URL;
            postSignOptions.redirectDelay = TestData.INVALID_REDIRECT_DELAY;
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithPostSignOptions(ApiUtils.getAgreementName(),
                                                                                       postSignOptions)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_REDIRECT_DELAY) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * MIN_ADDRESSES_NOT_MET: Both email and fax null in recipientInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithNullEmailAndNullFaxRecipientInfo', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFaxAndEmail(ApiUtils.getAgreementName(),
                                                                                   TestData.NULL_PARAM,
                                                                                   TestData.NULL_PARAM)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.MIN_ADDRESSES_NOT_MET) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_EMAIL: Wrong email set in recipientInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithInvalidEmailAndNullFaxRecipientInfo', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFaxAndEmail(ApiUtils.getAgreementName(),
                                                                                   TestData.INVALID_EMAIL,
                                                                                   TestData.NULL_PARAM)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_EMAIL) ? done() : done(apiError);
                         });

        });

        /**
         * Test for creating an agreement and sending it out for signature through the createAgreement api. Negative scenarios covered:
         * INVALID_ARGUMENTS: Both email and fax specified in RecipientInfo.
         *
         * @throws ApiException
         */
        it('testInvalidAgreementCreationInfoWithValidEmailAndValidFaxInRecipientInfo', function (done) {
            var opts = {};
            WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFaxAndEmail(ApiUtils.getAgreementName(),
                                                                                   TestData.POST_EMAIL,
                                                                                   TestData.POST_FAX)
                         .then(function (customWorkflowAgreementCreationRequest) {
                             return workFlowsApi.createWorkflowAgreement(ApiUtils.getValidHeaderParams(),
                                                                         customWorkflowAgreementCreationRequest,
                                                                         workFlowId,
                                                                         opts)

                         })
                         .then(function (agreementCreationResponse) {
                             assert.isNotNull(agreementCreationResponse);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ARGUMENTS) ? done() : done(apiError);
                         });

        });

    });

}));
