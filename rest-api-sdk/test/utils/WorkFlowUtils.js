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
        module.exports = factory(require('../../src/index'), require('./ApiUtils'), require('./TransientDocumentUtils'), require('./TestData'));
    
}(function (AdobeSignSdk, ApiUtils, TransientDocumentUtils, TestData) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the WorkFlows API Tests.
     */
    var WorkFlowUtils = function () {
    };

    var workFlowsApi = new AdobeSignSdk.WorkflowsApi(ApiUtils.getContext());
    var workflowsModel = AdobeSignSdk.WorkflowsModel;

    var optKeys = {
        INCLUDE_DRAFT_WORKFLOWS_KEY: "includeDraftWorkflows",
        GROUP_ID_KEY: "groupId"
    };

    //Helper method that returns TransientDocumentsApi
    WorkFlowUtils.getWorkFlowsApi = function () {
        return workFlowsApi;
    };

    //Helper method that returns workflowId
    WorkFlowUtils.getResourceId = function () {
        return TestData.WORKFLOW_ID;
    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest accepting fileInfo as param
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFileInfo = function (fileInfo,
                                                                                    documentName) {
        return WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic(TestData.POST_EMAIL,
                                                                            TestData.NULL_PARAM,
                                                                            fileInfo.getWorkflowLibraryDocumentId(),
                                                                            fileInfo.getName(),
                                                                            fileInfo.getTransientDocumentId(),
                                                                            documentName,
                                                                            null);

    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequest = function (documentName) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic(TestData.POST_EMAIL,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.TRANSIENT_DOCUMENT_NAME,
                                                                                                             transientDocumentResponse.getTransientDocumentId(),
                                                                                                             documentName,
                                                                                                             null)
                                     })
                                     .catch(ApiUtils.throwError);
    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest accepting postSingingOptions as param
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithPostSignOptions = function (documentName,
                                                                                           postSignOptions) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic(TestData.POST_EMAIL,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.TRANSIENT_DOCUMENT_NAME,
                                                                                                             transientDocumentResponse.getTransientDocumentId(),
                                                                                                             documentName,
                                                                                                             postSignOptions);
                                     })
                                     .catch(ApiUtils.throwError);
    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest accepting email and fax as params
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequestWithFaxAndEmail = function (documentName,
                                                                                       recipientEmail,
                                                                                       recipientFax) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic(recipientEmail,
                                                                                                             recipientFax,
                                                                                                             TestData.NULL_PARAM,
                                                                                                             TestData.TRANSIENT_DOCUMENT_NAME,
                                                                                                             transientDocumentResponse.getTransientDocumentId(),
                                                                                                             documentName,
                                                                                                             null);
                                     })
                                     .catch(ApiUtils.throwError);
    };

    //Helper method that returns CustomWorkflowAgreementCreationRequest
    WorkFlowUtils.getCustomWorkflowAgreementCreationRequestBasic = function (recipientEmail,
                                                                             recipientFax,
                                                                             fileInfoLibraryDocumentId,
                                                                             fileInfoName,
                                                                             fileInfoTransientDocumentId,
                                                                             documentName,
                                                                             postSignOptions) {

        var customWorkflowAgreementCreationRequest = new workflowsModel.CustomWorkflowAgreementCreationRequest();
        var documentCreationInfo = new workflowsModel.DocumentCreationInfo();

        var recipientInfo = new workflowsModel.RecipientInfo();
        recipientInfo.setEmail(recipientEmail);
        recipientInfo.setFax(recipientFax);
        var recipientInfoList = [];
        recipientInfoList.push(recipientInfo);

        var recipientsInfo = new workflowsModel.RecipientsInfo();
        recipientsInfo.setRecipients(recipientInfoList);
        recipientsInfo.setName(TestData.WORKFLOW_RECIPIENT_INFO_NAME);

        var recipientsInfoList = [];
        recipientsInfoList.push(recipientsInfo);

        var fileInfo = new workflowsModel.CustomWorkflowFileInfo();
        fileInfo.setWorkflowLibraryDocumentId(fileInfoLibraryDocumentId);
        fileInfo.setName(fileInfoName);
        fileInfo.setTransientDocumentId(fileInfoTransientDocumentId);

        var fileInfoList = [];
        fileInfoList.push(fileInfo);

        documentCreationInfo.setName(documentName);
        documentCreationInfo.setRecipientsListInfo(recipientsInfoList);

        documentCreationInfo.setFileInfos(fileInfoList);
        documentCreationInfo.setPostSignOptions(postSignOptions);

        customWorkflowAgreementCreationRequest.setDocumentCreationInfo(documentCreationInfo);
        return customWorkflowAgreementCreationRequest;
    };

    //Helper method that returns json of optional parameters with valid GroupId and valid IncludeDraftWorkflows
    WorkFlowUtils.getOptionsWithValidGroupIdAndValidIncludeDraftWorkflows = function () {
        var opts = {};
        opts[optKeys.GROUP_ID_KEY] = TestData.GROUP_ID;
        opts[optKeys.INCLUDE_DRAFT_WORKFLOWS_KEY] = TestData.INCLUDE_DRAFT_WORKFLOWS;
        return opts;

    };

    //Helper method that returns json of optional parameters with invalid GroupId and valid IncludeDraftWorkflows
    WorkFlowUtils.getOptionsWithEmptyGroupIdAndValidIncludeDraftWorkflows = function () {
        var opts = {};
        opts[optKeys.GROUP_ID_KEY] = TestData.EMPTY_PARAM;
        opts[optKeys.INCLUDE_DRAFT_WORKFLOWS_KEY] = TestData.INCLUDE_DRAFT_WORKFLOWS;
        return opts;

    };

    return WorkFlowUtils;
}));

