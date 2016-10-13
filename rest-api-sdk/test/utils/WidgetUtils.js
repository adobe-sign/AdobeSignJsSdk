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
     * This file contains basic utility functions which will be used by the Widgets API Tests.
     */
    var WidgetUtils = function () {
    };

    var widgetsApi = new AdobeSignSdk.WidgetsApi(ApiUtils.getContext());
    var widgetsModel = AdobeSignSdk.WidgetsModel;

    var optKeys = {
        VERSION_ID_KEY: "versionId",
        PARTICIPANT_EMAIL_KEY: "participantEmail",
        AUDIT_REPORT_KEY: "auditReport"
    };

    //Helper method that returns widgetsApi
    WidgetUtils.getWidgetsApi = function () {
        return widgetsApi;
    };

    /**
     * Returns id of the agreement with given agreement name if exists else it creates a new agreement.
     * @param widgetName name of the widget.
     * @return Promise   resource id.
     *
     * @throws ApiError
     */
    WidgetUtils.getResourceId = function (widgetName) {

        return WidgetUtils.isExistingWidget(widgetName)
                          .then(function (widgetId) {
                              if (widgetId != null) {
                                  return widgetId;
                              }
                              else {
                                  return WidgetUtils.createWidget(widgetName);
                              }
                          })
                          .catch(ApiUtils.throwError);

    };

    /**
     * Method to check if the widget already exits
     * @param widgetName The name of widget
     * @return widgetId  The widget id
     *
     * @throws ApiError
     */
    WidgetUtils.isExistingWidget = function (widgetName) {

        var widgetId = null;
        return widgetsApi.getWidgets(ApiUtils.getValidHeaderParams())
                         .then(function (userWidgets) {
                             var userWidgetList = userWidgets.userWidgetList;
                             for (var i = 0; i < userWidgetList.length; i++) {
                                 var widget = userWidgetList[i];
                                 if ((widget.getName() === widgetName) && (userWidgetList[i].getStatus() === (widgetsModel.UserWidget.StatusEnum.ENABLED))) {
                                     widgetId = widget.getWidgetId();
                                     return widgetId;
                                 }
                             }
                             return widgetId;
                         })
                         .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create the the widget
     * @param widgetName   The name of widget
     * @return widgetId    The agreement id
     *
     * @throws ApiError
     */
    WidgetUtils.createWidget = function (widgetName) {

        return WidgetUtils.getWidgetCreationRequest(widgetName)
                          .then(function (widgetCreationRequest) {
                              return widgetsApi.createWidget(ApiUtils.getValidHeaderParams(),
                                                             widgetCreationRequest);
                          })
                          .then(function (widgetCreationResponse) {
                              return widgetCreationResponse.getWidgetId();
                          })
                          .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create widget creation request
     * @param documentName The widget name
     * @return WidgetCreationRequest The widget creation request
     *
     * @throws ApiError
     */
    WidgetUtils.getWidgetCreationRequest = function (documentName) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return WidgetUtils.getWidgetCreationRequestUtil(TestData.NULL_PARAM,
                                                                                         TestData.NULL_PARAM,
                                                                                         transientDocumentResponse.getTransientDocumentId(),
                                                                                         TestData.NULL_PARAM,
                                                                                         documentName,
                                                                                         widgetsModel.WidgetCreationInfo.SignatureFlowEnum.SENDER_SIGNATURE_NOT_REQUIRED);
                                     })
                                     .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create widget creation request
     * @param documentName The widget name
     * @param fileInfo the fileInfo for widgetCreationRequest
     *
     * @return WidgetCreationRequest The widget creation request
     */
    WidgetUtils.getWidgetCreationRequestWithFileInfo = function (documentName,
                                                                 fileInfo) {

        return WidgetUtils.getWidgetCreationRequestUtil(fileInfo.getLibraryDocumentId(),
                                                        fileInfo.getLibraryDocumentName(),
                                                        fileInfo.getTransientDocumentId(),
                                                        fileInfo.getDocumentURL() ? fileInfo.getDocumentURL().getUrl() : TestData.NULL_PARAM,
                                                        documentName,
                                                        widgetsModel.WidgetCreationInfo.SignatureFlowEnum.SENDER_SIGNATURE_NOT_REQUIRED);

    };

    /**
     * Helper method to create widget creation request
     * @param fileInfoLibraryDocumentId   The file info library document id
     * @param fileInfoLibraryDocumentName The file info library document name
     * @param fileInfoTransientDocumentId The file info transient document id
     * @param fileInfoDocumentUrl         The file info document Url
     * @param documentName                The widget name
     * @param signatureFlowEnum           signature flow Type
     *
     * @return WidgetCreationRequest The widget creation request
     */
    WidgetUtils.getWidgetCreationRequestUtil = function (fileInfoLibraryDocumentId,
                                                         fileInfoLibraryDocumentName,
                                                         fileInfoTransientDocumentId,
                                                         fileInfoDocumentUrl,
                                                         documentName,
                                                         signatureFlowEnum) {

        var widgetCreationRequest = new widgetsModel.WidgetCreationRequest();
        var widgetCreationInfo = new widgetsModel.WidgetCreationInfo();
        var fileInfo = new widgetsModel.WidgetFileInfo();

        fileInfo.setLibraryDocumentId(fileInfoLibraryDocumentId);
        fileInfo.setLibraryDocumentName(fileInfoLibraryDocumentName);
        fileInfo.setTransientDocumentId(fileInfoTransientDocumentId);

        if (fileInfoDocumentUrl) {
            var widgetURLFileInfo = new widgetsModel.WidgetURLFileInfo();
            widgetURLFileInfo.setUrl(fileInfoDocumentUrl);
            fileInfo.setDocumentURL(widgetURLFileInfo);
        }

        var fileInfoList = [];
        fileInfoList.push(fileInfo);

        widgetCreationInfo.setName(documentName);
        widgetCreationInfo.setFileInfos(fileInfoList);
        widgetCreationInfo.setSignatureFlow(signatureFlowEnum);

        widgetCreationRequest.setWidgetCreationInfo(widgetCreationInfo);
        return widgetCreationRequest;

    };

    /**
     * Helper method to create the the widget
     * @param widgetName   The name of widget
     * @return widgetId    The agreement id
     *
     * @throws ApiError
     */
    WidgetUtils.getFirstWidgetDocumentId = function (widgetId) {
        return widgetsApi.getWidgetDocuments(ApiUtils.getValidHeaderParams(),
                                             widgetId,
                                             TestData.VERSION_ID,
                                             TestData.PARTICIPANT_EMAIL)
                         .then(function (widgetDocuments) {
                             var widgetsDocumentsList = widgetDocuments.getDocuments();
                             var documentId = widgetsDocumentsList[0].getDocumentId();
                             return documentId;
                         })
                         .catch(ApiUtils.throwError);
    };

    WidgetUtils.getwidgetPersonalizationInfo = function (email) {
        var widgetPersonalizationInfo = new widgetsModel.WidgetPersonalizationInfo();
        widgetPersonalizationInfo.setEmail(email);
        return widgetPersonalizationInfo;
    };

    WidgetUtils.getWidgetStatusUpdateInfo = function (value, message, redirectUrl) {
        var widgetStatusUpdateInfo = new widgetsModel.WidgetStatusUpdateInfo();
        widgetStatusUpdateInfo.setValue(value);
        widgetStatusUpdateInfo.setMessage(message);
        widgetStatusUpdateInfo.setRedirectUrl(redirectUrl);
        return widgetStatusUpdateInfo;
    };

    /**
     * Helper method to create options for combined document
     * @param versionId         version ID for agreement
     * @param participantEmail  email address of the participant of the agreement
     * @param auditReport       boolean value for attaching audit report
     *
     * @return opts options for combined document
     */
    WidgetUtils.getOptsForCombinedDocument = function (versionId,
                                                       participantEmail,
                                                       auditReport) {

        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        opts[optKeys.AUDIT_REPORT_KEY] = auditReport;
        return opts;

    };

    /**
     * Helper method to create options for widget documents
     * @param versionId         version ID for agreement
     * @param participantEmail  email address of the participant of the agreement
     *
     * @return opts options for widget documents
     */
    WidgetUtils.getOptsForWidgetDocuments = function (versionId,
                                                      participantEmail) {

        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        return opts;

    };

    return WidgetUtils;
}));

