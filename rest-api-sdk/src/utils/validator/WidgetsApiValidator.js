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
(function(factory) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'), require('../ApiError'));
  
}(function(SdkErrorCodes, ApiValidatorHelper, ApiError) {
  'use strict';

  var WIDGET_CREATION_REQUEST = "widgetCreationRequest";
  var WIDGET_CREATION_INFO = "widgetCreationInfo";
  var NAME = "name";
  var WIDGET_STATUS_UPDATE_INFO = "widgetStatusUpdateInfo";
  var COUNTER_SINGER_SET_MEMBER_INFOS = "counterSignerSetMemberInfos";
  var COUNTER_SINGER_SET_ROLE = "counterSignerSetRole";
  var WIDGET_PERSONALIZATION_INFO = "widgetPersonalizationInfo";

  /**
   * Validator for Widgets Api. The main purpose of this is to check the validity of the parameters passed to
   * the widgets API and throw ApiError with required error messages if the validation fails.
   */
  var WidgetsApiValidator = function(){};
    
  /**
   * Validator for getWidgets API that retrieves widgets for the user.
   * @param {Object}   opts Optional parameters
   * @throws ApiError
   */
  WidgetsApiValidator.getWidgetsValidator = function (opts) {
  };

  /**
   * Validator for createWidget API that Creates a widget and returns the Javascript snippet and URL
   * to access the widget and widgetID in response to the client.
   *
   * @param widgetCreationRequest   Information about the widget that is to be created.
   * @param {Object}                opts Optional parameters
   * @throws ApiError
   */
  WidgetsApiValidator.createWidgetValidator = function (widgetCreationRequest,
                                                        opts) {

    var paramList = [];
    ApiValidatorHelper.validateParameter(widgetCreationRequest, SdkErrorCodes.MISSING_REQUIRED_PARAM, WIDGET_CREATION_REQUEST);

    var widgetCreationInfo = widgetCreationRequest.getWidgetCreationInfo();
    ApiValidatorHelper.validateParameter(widgetCreationInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, WIDGET_CREATION_INFO);

    validateFileInfo(widgetCreationInfo.getFileInfos());
    paramList.push({param: widgetCreationInfo.getName(), sdkErrorCode: SdkErrorCodes.MISSING_REQUIRED_PARAM, paramKey: NAME});

    var signatureFlow = widgetCreationInfo.getSignatureFlow();
    if (signatureFlow)
      paramList.push({param: signatureFlow, sdkErrorCode: SdkErrorCodes.INVALID_SIGNATURE_FLOW});

    ApiValidatorHelper.validateParameters(paramList);

    var counterSignerSetInfos = widgetCreationInfo.getCounterSignerSetInfos();
    if (counterSignerSetInfos)
      validateCounterSignerSetInfo(counterSignerSetInfos);

  };

  /**
   * Validator for getWidgetInfo API that retrieves the detailed information of a widget.
   *
   * @param widgetId   The Id of the widget whose status is to be retrieved.
   * @param {Object}   opts Optional parameters
   * @throws ApiError
   */
  WidgetsApiValidator.getWidgetInfoValidator = function(widgetId,
                                                        opts) {
    ApiValidatorHelper.validateId(widgetId,
                                  SdkErrorCodes.INVALID_WIDGET_ID);

  };

  /**
   * Validator for getWidgetAgreements API that retrieves the agreements of a widget.
   *
   * @param widgetId   The Id of the widget whose agreements are to be retrieved.
   * @param {Object}   opts Optional parameters
   * @throws ApiError
   */
  WidgetsApiValidator.getWidgetAgreementsValidator = function (widgetId,
                                                               opts) {
    ApiValidatorHelper.validateId(widgetId,
                                  SdkErrorCodes.INVALID_WIDGET_ID);

  };

  /**
   * Validator for getWidgetAuditTrail API that retrieves the audit trail of the widget identified by widgetId.
   *
   * @param widgetId   The Id of the widget whose audit trail is to be retrieved.
   * @param {Object}   opts Optional parameters
   * @throws ApiError
   */
  WidgetsApiValidator.getWidgetAuditTrailValidator = function (widgetId,
                                                               opts) {
    ApiValidatorHelper.validateId(widgetId,
                                  SdkErrorCodes.INVALID_WIDGET_ID);

  };

  /**
   * Validator for getWidgetCombinedDocument API that gets a single combined PDF document for the documents associated with a widget.
   *
   * @param widgetId                The Id of widget whose combined document stream is requested.
   * @param {Object}                opts Optional parameters
   * @param opts.versionId          The version identifier of widget as provided by getWidgetInfo API. If not provided then latest version will be used..
   * @param opts.participantEmail   The email address of the participant to be used to retrieve documents.
   * @param opts.auditReport        When set to YES, attach an audit report to the signed Widget PDF. Default value is false
   * @throws ApiError
   */
  WidgetsApiValidator.getWidgetCombinedDocumentValidator = function (widgetId,
                                                                     opts) {
    var versionId = opts.versionId;
    var participantEmail = opts.participantEmail;
    ApiValidatorHelper.validateId(widgetId,
                                  SdkErrorCodes.INVALID_WIDGET_ID);
    ApiValidatorHelper.validateVersionIdAndParticipantEmail(versionId,
                                                            participantEmail);

  };

  /**
   * Validator for getWidgetDocuments API that retrieves the IDs of all the main and supporting documents of a widget identified by widgetId.
   *
   * @param widgetId                The Id of widget whose documents are requested.
   * @param {Object}                opts Optional parameters
   * @param opts.versionId          The version identifier of agreement as provided by getWidgetInfo API. If not provided then latest version will be used.
   * @param opts.participantEmail   The email address of the participant to be used to retrieve documents.
   * @throws ApiError
   */
  WidgetsApiValidator.getWidgetDocumentsValidator = function(widgetId,
                                                             opts) {
    var versionId = opts.versionId;
    var participantEmail = opts.participantEmail;
    ApiValidatorHelper.validateId(widgetId,
                                  SdkErrorCodes.INVALID_WIDGET_ID);
    ApiValidatorHelper.validateVersionIdAndParticipantEmail(versionId,
                                                            participantEmail);

  };

  /**
   * Validator for getWidgetDocumentInfo API that retrieves the file stream of the given document of a widget identified by widgetId.
   *
   * @param widgetId    The Id of widget which contains the document whose file stream is requested.
   * @param documentId  The Id of the document whose file stream is requested.
   * @param {Object}    opts Optional parameters
   * @throws ApiError
   */
  WidgetsApiValidator.getWidgetDocumentInfoValidator = function(widgetId,
                                                                documentId,
                                                                opts) {
    ApiValidatorHelper.validateId(widgetId,
                                  SdkErrorCodes.INVALID_WIDGET_ID);
    ApiValidatorHelper.validateId(documentId,
                                  SdkErrorCodes.INVALID_DOCUMENT_ID);

  };

  /**
   * Validator for getWidgetFormData API that retrieves data entered by the user into interactive form fields at the time they signed the widget.
   *
   * @param widgetId   The Id of widget whose form data is to be retrieved.
   * @param {Object}   opts Optional parameters
   * @throws ApiError
   */
  WidgetsApiValidator.getWidgetFormDataValidator = function(widgetId,
                                                            opts) {
    ApiValidatorHelper.validateId(widgetId,
                                  SdkErrorCodes.INVALID_WIDGET_ID);
  };


  /**
   * Validator for updateWidgetPersonalize API that personalize the widget to a signable document for a specific known user.
   *
   * @param widgetId                    The Id of widget that has to be personalized.
   * @param widgetPersonalizationInfo   Widget personalization information object.
   * @param {Object}                    opts Optional parameters
   * @throws ApiError
   */
  WidgetsApiValidator.updateWidgetPersonalizeValidator = function(widgetPersonalizationInfo,
                                                                  widgetId,
                                                                  opts) {
    ApiValidatorHelper.validateId(widgetId,
                                  SdkErrorCodes.INVALID_WIDGET_ID);
    ApiValidatorHelper.validateParameter(widgetPersonalizationInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, WIDGET_PERSONALIZATION_INFO);
    ApiValidatorHelper.validateEmailParameter(widgetPersonalizationInfo.email);

  };

  /**
   * Validator for updateWidgetStatus API that enables or disables a widget.
   *
   * @param widgetId                The Id of widget that has to be updated.
   * @param widgetStatusUpdateInfo  Widget status update information object.
   * @param {Object}                opts Optional parameters
   * @throws ApiError
   */
  WidgetsApiValidator.updateWidgetStatusValidator = function(widgetStatusUpdateInfo,
                                                             widgetId,
                                                             opts) {
    var paramList = [];
    ApiValidatorHelper.validateId(widgetId,
                                  SdkErrorCodes.INVALID_WIDGET_ID);
    ApiValidatorHelper.validateParameter(widgetStatusUpdateInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, WIDGET_STATUS_UPDATE_INFO);
    paramList.push({param: widgetStatusUpdateInfo.getValue(), sdkErrorCode: SdkErrorCodes.MUST_PROVIDE_VALID_WIDGET_STATUS});
    ApiValidatorHelper.validateParameters(paramList);

    //validate the message and redirectUrl combination.
    var message = widgetStatusUpdateInfo.getMessage();
    var redirectUrl = widgetStatusUpdateInfo.getRedirectUrl();

    if (message && redirectUrl)
      throw new ApiError(SdkErrorCodes.TOO_MANY_ACTIONS_SPECIFIED);

    if (!message && !redirectUrl)
      throw new ApiError(SdkErrorCodes.NO_ACTION_SPECIFIED);

    if (redirectUrl)
      ApiValidatorHelper.validateUrlParameter(redirectUrl,
                                              SdkErrorCodes.INVALID_URL);
  };

  /**
   * Helper method that takes a list of FileInfo objects and validates them.
   *
   * @param fileInfos the fileInfo that needs to be validated.
   * @throws ApiError
   */
  var validateFileInfo = function (fileInfos) {
    if (!fileInfos)
      throw new ApiError(SdkErrorCodes.INVALID_FILE_INFO);
    for (var i = 0; i < fileInfos.length; i++) {
      var fileInfo = fileInfos[i];
      if (!fileInfo)
        throw new ApiError(SdkErrorCodes.INVALID_FILE_INFO);

      var documentUrl = fileInfos[i].getDocumentURL();
      var url = documentUrl ? documentUrl.getUrl() : null;

      ApiValidatorHelper.validateFileInfo(fileInfo.getDocumentURL(),
                                          fileInfo.getLibraryDocumentId(),
                                          fileInfo.getLibraryDocumentName(),
                                          fileInfo.getTransientDocumentId(),
                                          url);
    }

  };

  /**
   * Helper method that takes a list of FileInfo objects and validates them.
   *
   * @param counterSignerSetInfos the counteSignerSetInfos that needs to be validated.
   * @throws ApiError
   */
  var validateCounterSignerSetInfo = function (counterSignerSetInfos) {
    for (var i = 0; i < counterSignerSetInfos.length; i++) {
      var counterSignerSetInfo = counterSignerSetInfos[i];
      var counterSignerInfos = counterSignerSetInfo.getCounterSignerSetMemberInfos();
      ApiValidatorHelper.validateParameter(counterSignerInfos, SdkErrorCodes.MISSING_REQUIRED_PARAM, COUNTER_SINGER_SET_MEMBER_INFOS);
      var numberOfRecipients = counterSignerInfos.length;

      for (var j = 0; j < numberOfRecipients; j++) {
        var counterSignerInfo = counterSignerInfos[i];
        ApiValidatorHelper.validateRecipientSetInfos(counterSignerInfo.email, null, numberOfRecipients);
      }
      ApiValidatorHelper.validateParameter(counterSignerSetInfo.getCounterSignerSetRole(), SdkErrorCodes.MISSING_REQUIRED_PARAM, COUNTER_SINGER_SET_ROLE);
    }
  };
  
  return WidgetsApiValidator;
}));