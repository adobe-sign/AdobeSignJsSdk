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

(function(root, factory) {
  // Browser globals (root is window)
  if (!root.AdobeSignSdk) {
    root.AdobeSignSdk = {};
  }
  root.AdobeSignSdk.WidgetUtils = factory(root.AdobeSignSdk, root.AdobeSignSdk.Errors, root.AdobeSignSdk.ApiUtils);

}(this, function(AdobeSignSdk, Errors, ApiUtils) {
  'use strict';

  var WidgetUtils = function(){};

  var widgetsApi = new AdobeSignSdk.WidgetsApi(ApiUtils.getContext());
  var widgetsModel = AdobeSignSdk.WidgetsModel;
  var headers = ApiUtils.getHeaderParams();

  //Document identifier to identify whether document is library document or transient document
  WidgetUtils.DocumentIdentifierType = {
    TRANSIENT_DOCUMENT_ID: "TRANSIENT_DOCUMENT_ID",
    LIBRARY_DOCUMENT_ID: "LIBRARY_DOCUMENT_ID",
    LIBRARY_DOCUMENT_NAME: "LIBRARY_DOCUMENT_NAME"
  };

  /**
   * Creates a widget and adds counter signer to it.
   *
   * @param documentIdentifier The identifier of the document.
   * @param documentIdentifierType Type of the documentIdentifier.
   * @param formFieldDocumentId The identifier of the document containing form fields.
   * @param formFieldIdType The type of the form field document.
   * @param widgetName The name of the widget that will be used to identify it.
   * @param counterSignerMemberList List of the email of the counter signers for counter signer set.
   * @return widgetCreationResponse object.
   * @throws Error
   */
  WidgetUtils.createWidgetWithCounterSigner = function(documentIdentifier,
                                                       documentIdentifierType,
                                                       formFieldDocumentId,
                                                       formFieldIdType,
                                                       widgetName,
                                                       counterSignerMemberList) {

    var widgetCreationRequest = getWidgetCreationRequest(documentIdentifier,
                                                         documentIdentifierType,
                                                         formFieldDocumentId,
                                                         formFieldIdType,
                                                         widgetName,
                                                         counterSignerMemberList);
    return widgetsApi.createWidget(headers,
                                   widgetCreationRequest)
                     .then(function(widgetCreationResponse) {
                       return widgetCreationResponse;
                     })
                     .catch(function(apiError) {
                       ApiUtils.logAndThrowError(Errors.CREATE_WIDGET, apiError);
                     });

  };

   /**
   * Get widgetCreationRequest object.
   *
   * @param documentIdentifier The identifier of the document.
   * @param documentIdentifierType Type of the documentIdentifier.
   * @param formFieldDocumentId The identifier of the document containing form fields.
   * @param formFieldIdType The type of the form field document.
   * @param widgetName The name of the widget that will be used to identify it.
   * @param counterSignerMemberList List of the email of the counter signers for counter signer set.
   * @return widgetCreationRequest object.
   */
   var getWidgetCreationRequest = function(documentIdentifier,
                                           documentIdentifierType,
                                           formFieldDocumentId,
                                           formFieldIdType,
                                           widgetName,
                                           counterSignerMemberList) {

     var widgetCreationRequest = new widgetsModel.WidgetCreationRequest();
     var widgetCreationInfo = getWidgetCreationInfo(documentIdentifier,
                                                    documentIdentifierType,
                                                    formFieldDocumentId,
                                                    formFieldIdType,
                                                    widgetName,
                                                    counterSignerMemberList);

     widgetCreationRequest.setWidgetCreationInfo(widgetCreationInfo);
     return widgetCreationRequest;

   };

  /**
   * Get widgetCreationInfo object.
   *
   * @param documentIdentifier The identifier of the document.
   * @param documentIdentifierType Type of the documentIdentifier.
   * @param formFieldDocumentId The identifier of the document containing form fields.
   * @param formFieldIdType The type of the form field document.
   * @param widgetName The name of the widget that will be used to identify it.
   * @param counterSignerMemberList List of the email of the counter signers for counter signer set.
   * @return widgetCreationInfo object.
   */
  var getWidgetCreationInfo = function(documentIdentifier,
                                       documentIdentifierType,
                                       formFieldDocumentId,
                                       formFieldIdType,
                                       widgetName,
                                       counterSignerMemberList) {

    var widgetCreationInfo = new widgetsModel.WidgetCreationInfo();
    var fileInfos = [];

    //Based on the document type retrieved from above, set the corresponding parameter.
    var fileInfo = getFileInfo(documentIdentifier, documentIdentifierType);
    if(fileInfo != null)
      fileInfos.push(fileInfo);

    //Based on the document type retrieved from above, set the formFieldIdType.
    var formFieldLayerTemplates = [];
    fileInfo = getFileInfo(formFieldDocumentId, formFieldIdType);
    if(fileInfo != null)
      formFieldLayerTemplates.push(fileInfo);

    widgetCreationInfo.setFormFieldLayerTemplates(formFieldLayerTemplates);
    widgetCreationInfo.setFileInfos(fileInfos);
    widgetCreationInfo.setName(widgetName);
    widgetCreationInfo.setSignatureFlow(widgetsModel.WidgetCreationInfo.SignatureFlowEnum.SENDER_SIGNATURE_NOT_REQUIRED);

    if(counterSignerMemberList != null){
      var counterSignerSetInfo = getCounterSignerSetInfo(counterSignerMemberList);
      var counterSignerSetInfos = [];
      counterSignerSetInfos.push(counterSignerSetInfo);

      widgetCreationInfo.setCounterSignerSetInfos(counterSignerSetInfos);
    }
    return widgetCreationInfo;

  };

  /**
   * Get fileInfos using document.
   *
   * @param documentId Id of document.
   * @return fileInfo object.
   */
  var getFileInfo = function(documentId,
                             documentIdentifierType) {

    //Create file info object using document id or name
    var fileInfo = new widgetsModel.WidgetFileInfo();

    if (documentIdentifierType === (WidgetUtils.DocumentIdentifierType.TRANSIENT_DOCUMENT_ID)) {
      fileInfo.setTransientDocumentId(documentId);
    }
    else if(documentIdentifierType === (WidgetUtils.DocumentIdentifierType.LIBRARY_DOCUMENT_ID)){
      fileInfo.setLibraryDocumentId(documentId);
    }
    else if(documentIdentifierType === (WidgetUtils.DocumentIdentifierType.LIBRARY_DOCUMENT_NAME)){
      fileInfo.setLibraryDocumentName(documentId);
    }
    return fileInfo;

  };

  /**
   * Get counterSignerSetInfo object.
   *
   * @param counterSignerMemberList List of the email of the counter signers for counter signer set.
   * @return counterSignerSetInfo object.
   */
  var getCounterSignerSetInfo = function(counterSignerMemberList) {

    var counterSignerSetInfo = new widgetsModel.CounterSignerSetInfo();

    var counterSignerSetMemberInfos = getCounterSignerMemberInfos(counterSignerMemberList);

    counterSignerSetInfo.setCounterSignerSetMemberInfos(counterSignerSetMemberInfos);
    counterSignerSetInfo.setCounterSignerSetRole(widgetsModel.CounterSignerSetInfo.CounterSignerSetRoleEnum.SIGNER);

    return counterSignerSetInfo;

  };

  /**
   * Get counterSignerMemberInfo object.
   *
   * @param counterSignerMemberList List of the email of the counter signers for counter signer set.
   * @return counterSignerMemberInfo object.
   */
  var getCounterSignerMemberInfos = function(counterSignerMemberList) {

    var counterSignerSetMemberInfos = [];
    for (var i = 0; i < counterSignerMemberList.length; i++) {
      var email = counterSignerMemberList[i];
      var counterSignerInfo = new widgetsModel.CounterSignerInfo();
      counterSignerInfo.setEmail(email);
      counterSignerSetMemberInfos.push(counterSignerInfo);
    }
    return counterSignerSetMemberInfos;

  };

  /**
   * Retrieves data entered by the user into interactive form fields at the time they signed the widget
   * CSV file stream containing form data information
   *
   * @param widgetId The widget identifier.
   * @return byte[]
   */
  WidgetUtils.getWidgetFormData = function(widgetId) {

    return widgetsApi.getWidgetFormData(headers,
                                        widgetId)
                     .then(function(widgetFormData) {
                       return widgetFormData;
                     })
                     .catch(function(apiError) {
                       ApiUtils.logAndThrowError(Errors.GET_WIDGET_FORM_DATA, apiError);
                     });

  };

  /**
   * Retrieves the details of a widget.
   *
   * @param widgetId The widget identifier.
   * @return WidgetInfo
   */
  WidgetUtils.getWidgetInfo = function(widgetId) {

    return widgetsApi.getWidgetInfo(headers,
                                    widgetId)
                     .then(function(widgetInfo) {
                       return widgetInfo;
                     })
                     .catch(function(apiError) {
                       ApiUtils.logAndThrowError(Errors.GET_WIDGET_FORM_DATA, apiError);
                     });

  };

  /**
   * Retrieves widgets for a user.
   *
   * @return UserWidgets
   */
  WidgetUtils.getWidgets = function() {

    return widgetsApi.getWidgets(headers)
                     .then(function(userWidgets) {
                       return userWidgets;
                     })
                     .catch(function(apiError) {
                       ApiUtils.logAndThrowError(Errors.GET_WIDGETS, apiError);
                     });

  };

  /**
   * Returns id of first widget of user which is enabled.
   *
   * @return String containing id of first widget of the user.
   */
  WidgetUtils.getFirstWidgetId = function() {

    //Get the list of user widgets
    return WidgetUtils.getWidgets()
                      .then(function(userWidgets) {
                        var userWidgetList = userWidgets.userWidgetList;

                        //Return the id of first widget which is enabled.
                        for (var i = 0; i < userWidgetList.length; i++) {
                          var userWidget = userWidgetList[i];
                          if(userWidget.getStatus() === (widgetsModel.UserWidget.StatusEnum.ENABLED)) {
                            return userWidget.getWidgetId();
                          }
                        }
                        return null;
                      })
                      .catch(function(apiError) {
                        ApiUtils.logAndThrowError(Errors.GET_FIRST_WIDGET, apiError);
                      });

  };

  return WidgetUtils;
}));
