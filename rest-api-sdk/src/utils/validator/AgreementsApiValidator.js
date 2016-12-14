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
  module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'), require('../ApiError'), require( '../StringUtil'));

}(function(SdkErrorCodes, ApiValidatorHelper , ApiError, StringUtil) {
  'use strict';

  var AGREEMENT_CREATION_INFO = "agreementCreationInfo";
  var DOCUMENT_CREATION_INFO = "documentCreationInfo";
  var NAME = "name";
  var RECIPIENT_SET_INFOS = "recipientSetInfos";
  var SIGNATURE_TYPE = "signatureType";
  var ALTERNATE_PARTICIPANT_INFO = "alternateParticipantInfo";
  var EMAIL = "email";
  var AGREEMENT_STATUS_UPATE_INFO = "agreementStatusUpdateInfo";
  var RECIPIENT_SET_MEMBER_INFO = "recipientSetMemberInfos";
  var RECIPIENT_SET_ROLE = "recipientSetRole";

  /**
   * Validator for Agreements API. The main purpose of this is to check the validity of the parameters passed
   * to the agreements API and throw ApiError with required error messages if the validation fails.
   */
  var AgreementsApiValidator = function(){};

  /**
   * Validator for getAgreements API that retrieves agreements for the user.
   * @param {Object}               opts Optional parameters
   * @param opts.externalId        ExternalID for which you would like to retrieve agreement information.
   * @param opts.externalGroup     ExternalGroup for which you would like to retrieve agreement information.
   * @param opts.externalNamespace ExternalNameSpace for which you would like to retrieve agreement information.
   * @throws ApiError
   *
   */
  AgreementsApiValidator.getAgreementsValidator= function(opts) {
    if (opts.externalNamespace || opts.externalGroup || opts.externalId)
      ApiValidatorHelper.validateId(opts.externalId,
                                    SdkErrorCodes.EMPTY_EXTERNALID_PARAMETER);
  };

  /**
   * Validator for getAgreementInfo API that retrieves the detailed information of an agreement.
   *
   * @param agreementId The agreementId of agreement whose status is to be retrieved.
   * @throws ApiError
   */
  AgreementsApiValidator.getAgreementInfoValidator = function(agreementId) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);
  };

  /**
   * Validator for getSigningUrl API that retrieves the URL for the eSign page for the current signer(s) of an agreement.
   *
   * @param agreementId The agreementId of agreement whose signing Url is to be retrieved.
   * @throws ApiError
   */
  AgreementsApiValidator.getSigningUrlValidator = function(agreementId) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);
  };

  /**
   * Validator for deleteAgreement API that deletes an agreement
   *
   * @param agreementId The agreementId of agreement which has to be deleted.
   * @throws ApiError
   */
  AgreementsApiValidator.deleteAgreementValidator = function(agreementId) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);
  };

  /**
   * Validator for updateStatus API that cancels an agreement.
   *
   * @param agreementId               The agreementId of agreement to be cancelled.
   * @param agreementStatusUpdateInfo Agreement status update information object.
   * @throws ApiError
   */
  AgreementsApiValidator.updateStatusValidator = function(agreementStatusUpdateInfo,
                                                          agreementId){

    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);

    ApiValidatorHelper.validateParameter(agreementStatusUpdateInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, AGREEMENT_STATUS_UPATE_INFO);
    var paramList = [];
    paramList.push({param: agreementStatusUpdateInfo.getValue(), sdkErrorCode: SdkErrorCodes.MUST_PROVIDE_VALID_AGREEMENT_STATUS});

    ApiValidatorHelper.validateParameters(paramList);
  };

  /**
   * Validator for createAgreement API that creates an agreement, sends it out for signatures and
   * returns the agreementID in the response to the client
   *
   * @param agreementCreationInfo Information about the agreement that is to be created.
   * @throws ApiError
   */
  AgreementsApiValidator.createAgreementValidator = function(agreementCreationInfo) {
    ApiValidatorHelper.validateParameter(agreementCreationInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, AGREEMENT_CREATION_INFO);

    var documentCreationInfo = agreementCreationInfo.getDocumentCreationInfo();
    ApiValidatorHelper.validateParameter(documentCreationInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, DOCUMENT_CREATION_INFO);

    var  fileInfos = documentCreationInfo.getFileInfos();
    validateFileInfo(fileInfos);

    ApiValidatorHelper.validateParameter(documentCreationInfo.getName(), SdkErrorCodes.MISSING_REQUIRED_PARAM, NAME);

    validatePostSignOptions(documentCreationInfo.getPostSignOptions());

    ApiValidatorHelper.validateParameter(documentCreationInfo.getRecipientSetInfos(), SdkErrorCodes.MISSING_REQUIRED_PARAM, RECIPIENT_SET_INFOS);

    var recipientSetInfos = documentCreationInfo.getRecipientSetInfos();
    validateRecipientSetInfos(recipientSetInfos);

    validateInteractiveOptions(agreementCreationInfo);

    ApiValidatorHelper.validateParameter(documentCreationInfo.getSignatureType(), SdkErrorCodes.MISSING_REQUIRED_PARAM, SIGNATURE_TYPE);

  };

  /**
   * Helper method that takes a list of FileInfo objects and validates them.
   */
  var validateFileInfo = function(fileInfos) {
    if (StringUtil.isNullOrUndefined(fileInfos))
      throw new ApiError(SdkErrorCodes.INVALID_FILE_INFO);

    for (var i = 0; i < fileInfos.length; i++) {
      // Validating the FileInfo object.
      var fileInfo = fileInfos[i];
      if (fileInfo === null)
        throw new ApiError(SdkErrorCodes.INVALID_FILE_INFO);
      var url = fileInfo.getDocumentURL() ? fileInfo.getDocumentURL().getUrl() : null;
      ApiValidatorHelper.validateFileInfo(fileInfo.getDocumentURL(),
                                          fileInfo.getLibraryDocumentId(),
                                          fileInfo.getLibraryDocumentName(),
                                          fileInfo.getTransientDocumentId(),
                                          url);
    }
  };

  /**
   * Helper method to validate recipient set.
   */
  var validateRecipientSetInfos = function(recipientSetInfos) {
    for (var i = 0;  i < recipientSetInfos.length; i++) {
      var recipientSetInfo = recipientSetInfos[i];
      ApiValidatorHelper.validateParameter(recipientSetInfo.getRecipientSetMemberInfos(), SdkErrorCodes.MISSING_REQUIRED_PARAM, RECIPIENT_SET_MEMBER_INFO);
      var recipientInfos = recipientSetInfo.getRecipientSetMemberInfos();
      var numberOfRecipients = recipientInfos.length;

      for (var j = 0; j < numberOfRecipients; j++) {
        ApiValidatorHelper.validateRecipientSetInfos(recipientInfos[j].getEmail(),
                                                     recipientInfos[j].getFax(),
                                                     numberOfRecipients);
      }
      ApiValidatorHelper.validateParameter(recipientSetInfo.getRecipientSetRole(), SdkErrorCodes.MISSING_REQUIRED_PARAM, RECIPIENT_SET_ROLE);
    }
  };

  /**
   * Helper method that checks the validity of post sign options
   */
  var validatePostSignOptions = function(postSignOptions) {
    if (!postSignOptions)
      return;
    ApiValidatorHelper.validatePostSignOptions(postSignOptions.getRedirectUrl(),
                                               postSignOptions.getRedirectDelay());
  };

  /**
   * Helper method to validate the Interactive Options with RecipientSetSize.
   */
  var validateInteractiveOptions= function(agreementCreationInfo) {
    var recipientSetInfos = agreementCreationInfo.getDocumentCreationInfo().getRecipientSetInfos();
    var interactiveOptions = agreementCreationInfo.getOptions();

    if (!interactiveOptions)
      return;

    for (var i=0; i < recipientSetInfos.length; i++) {
      var recipientSetInfo = recipientSetInfos[i];
      ApiValidatorHelper.validateParameter(recipientSetInfo.getRecipientSetMemberInfos(), SdkErrorCodes.MISSING_REQUIRED_PARAM, RECIPIENT_SET_MEMBER_INFO);
      var numberOfRecipients = recipientSetInfo.getRecipientSetMemberInfos().length;

      if ((interactiveOptions.getAuthoringRequested() || interactiveOptions.getSendThroughWeb()) && numberOfRecipients > 1)
        throw new ApiError(SdkErrorCodes.INVALID_ARGUMENTS);
    }
  };

  /**
   * Validator for createAlternateParticipant API that creates a new alternate participant.
   *
   * @param agreementId              The agreementId of agreement for which a participant is to be created.
   * @param participantSetId         The participant set identifier.
   * @param participantId            The participant identifier.
   * @param alternateParticipantInfo Information about the alternate participant.
   * @throws ApiError
   */
  AgreementsApiValidator.createAlternateParticipantValidator = function(alternateParticipantInfo,
                                                                        agreementId,
                                                                        participantSetId,
                                                                        participantId
  ) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);

    ApiValidatorHelper.validateId(participantId,
                                  SdkErrorCodes.INVALID_PARTICIPANT_ID);
    ApiValidatorHelper.validateId(participantSetId,
                                  SdkErrorCodes.INVALID_PARTICIPANT_SET_ID);

    ApiValidatorHelper.validateParameter(alternateParticipantInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, ALTERNATE_PARTICIPANT_INFO);

    ApiValidatorHelper.validateParameter(alternateParticipantInfo.getEmail(), SdkErrorCodes.MISSING_REQUIRED_PARAM, EMAIL);
    ApiValidatorHelper.validateEmailParameter(alternateParticipantInfo.getEmail());

    ApiValidatorHelper.validateParameter(alternateParticipantInfo.getPrivateMessage(),
                                         SdkErrorCodes.EMPTY_PRIVATE_MESSAGE);

  };

  /**
   * Validator for getAuditTrail API that retrieves the audit trail of an agreement identified by agreementId.
   *
   * @param agreementId The agreementId of agreement whose audit trail is to be retrieved.
   * @throws ApiError
   */
  AgreementsApiValidator.getAuditTrailValidator = function(agreementId) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);
  };

  /**
   * Validator for getFormData API that retrieves data entered by the user into interactive form fields at the time they signed the agreement
   *
   * @param agreementId The agreementId of agreement whose form data is to be retrieved.
   * @throws ApiError
   */
  AgreementsApiValidator.getFormDataValidator = function(agreementId) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);
  };

  /**
   * Validator for deleteDocuments API that deletes all the documents of an agreement
   *
   * @param agreementId The agreementId of agreement whose documents have to be deleted.
   * @throws ApiError
   */
  AgreementsApiValidator.deleteDocumentsValidator = function(agreementId) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);
  };


  /**
   * Validator for getCombinedDocumentPagesInfo API that retrieves info of all pages of a combined PDF document for the documents associated with an agreement.
   *
   * @param agreementId                                 The agreementId of agreement which contains the documents whose information is requested.
   * @param {Object}                                    opts Optional parameters
   * @param opts.includeSupportingDocumentsPagesInfo    When set to true, returns info of all pages of supporting documents as well. Else, return only original document's pages' info.
   * @throws ApiError
   */
  AgreementsApiValidator.getCombinedDocumentPagesInfoValidator = function (agreementId,
                                                                           opts) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);
  };

  /**
   * Validator for getCombinedDocument API that gets a single combined PDF document for the documents associated with an agreement.
   *
   * @param agreementId                       The agreementId of agreement whose combined document stream is requested.
   * @param {Object}                          opts Optional parameters
   * @param opts.versionId                    The version identifier of agreement as provided by getAgreementInfo API. If not provided then latest version will be used.
   * @param opts.participantEmail             The email address of the participant to be used to retrieve documents.
   * @param opts.attachSupportingDocuments    When set to true, attach corresponding supporting documents to the signed agreement PDF. Default value of this parameter is true.
   * @param opts.auditReport                  When set to true, attach an audit report to the signed agreement PDF. Default value is false.
   * @throws ApiError
   */
  AgreementsApiValidator.getCombinedDocumentValidator = function(agreementId,
                                                                 opts) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);

    ApiValidatorHelper.validateVersionIdAndParticipantEmail(opts.versionId,
                                                            opts.participantEmail);

  };

  /**
   * Validator for getCombinedDocumentUrl API that retrieves url of all visible pages of all the documents associated with an agreement
   *
   * @param agreementId                     The agreementId of agreement whose combined document stream is requested.
   * @param {Object}                        opts Optional parameters
   * @param opts.versionId                  The version identifier of agreement as provided by getAgreementInfo API. If not provided then latest version will be used.
   * @param opts.participantEmail           The email address of the participant to be used to retrieve documents.
   * @param opts.attachSupportingDocuments  When set to true, attach corresponding supporting documents to the signed agreement PDF. Default value of this parameter is true.
   * @param opts.auditReport                When set to true, attach an audit report to the signed agreement PDF. Default value is false.
   * @throws ApiError
   */
  AgreementsApiValidator.getCombinedDocumentUrlValidator = function(agreementId,
                                                                    opts) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);

    ApiValidatorHelper.validateVersionIdAndParticipantEmail(opts.versionId,
                                                            opts.participantEmail);

  };

  /**
   * Validator for getDocumentImageUrls API that retrieves image urls of all visible pages of a document associated with an agreement.
   *
   * @param agreementId                     The agreementId of agreement whose combined document stream is requested.
   * @param documentId                      The Id of document whose imageUrls are requested.
   * @param {Object}                        opts Optional parameters
   * @param opts.versionId                  The version identifier of agreement as provided by getAgreementInfo API. If not provided then latest version will be used.
   * @param opts.participantEmail           The email address of the participant to be used to retrieve documents.
   * @param opts.imageSizes                 A comma separated list of image sizes.
   * @param opts.showImageAvailabilityOnly  When set to true, returns only image availability. Else, returns both image urls and its availability.
   * @param opts.startPage                  Start of page number range for which imageUrls are requested. Starting page number should be greater than 0.
   * @param opts.endPage                    End of page number range for which imageUrls are requested.
   * @throws ApiError
   */
  AgreementsApiValidator.getDocumentImageUrlsValidator = function(agreementId,
                                                                  documentId,
                                                                  opts) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);

    ApiValidatorHelper.validateVersionIdAndParticipantEmail(opts.versionId,
                                                            opts.participantEmail);
    ApiValidatorHelper.validateId(documentId,
                                  SdkErrorCodes.INVALID_DOCUMENT_ID);

  };


  /**
   * Validator for getDocument API that retrieves the file stream of a document of an agreement.
   *
   * @param agreementId The agreementId of agreement which contains the document whose file stream is requested.
   * @param documentId  The Id of the document whose file stream is requested.
   * @throws ApiError
   */
  AgreementsApiValidator.getDocumentValidator = function(agreementId,
                                                         documentId,
                                                         opts) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);

    ApiValidatorHelper.validateId(documentId,
                                  SdkErrorCodes.INVALID_DOCUMENT_ID);

  };

  /**
   * Validator for getAllDocuments API that retrieves the IDs of all the main and supporting documents of an agreement identified by agreementid.
   *
   * @param agreementId                           The agreementId of agreement whose documents are requested.
   * @param {Object}                              opts Optional parameters
   * @param opts.versionId                        The version identifier of agreement as provided by getAgreementInfo API. If not provided then latest version will be used.
   * @param opts.participantEmail                 The email address of the participant to be used to retrieve documents.
   * @param opts.supportingDocumentContentFormat  Content format of the supported documents.
   * @throws ApiError
   */
  AgreementsApiValidator.getAllDocumentsValidator = function(agreementId,
                                                             opts) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);

    ApiValidatorHelper.validateVersionIdAndParticipantEmail(opts.versionId,
                                                            opts.participantEmail);


  };


  /**
   * Validator for getCombinedDocumentImageUrls API that retrieves image urls of all visible pages of a document associated with an agreement.
   *
   * @param agreementId                               The agreementId of agreement whose documents are requested.
   * @param {Object}                                  opts Optional parameters
   * @param opts.versionId                            The version identifier of agreement as provided by getAgreementInfo API. If not provided then latest version will be used.
   * @param opts.participantEmail                     The email address of the participant to be used to retrieve documents.
   * @param opts.imageSizes                           A comma separated list of image sizes.
   * @param opts.includeSupportingDocumentsImageUrls  When set to true, returns image urls of supporting documents as well. Else, return only original document's image urls.
   * @param opts.showImageAvailabilityOnly            When set to true, returns only image availability. Else, returns both image urls and its availability.
   * @throws ApiError
   */
  AgreementsApiValidator.getCombinedDocumentImageUrlsValidator = function(agreementId,
                                                                          opts) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);

    ApiValidatorHelper.validateVersionIdAndParticipantEmail(opts.versionId,
                                                            opts.participantEmail);

  };

  /**
   * Validator for getDocument API that retrieves the url of the document.
   *
   * @param agreementId           The agreementId of agreement which contained the document whose url are requested.
   * @param documentId            The Id of the document whose url is requested.
   * @param {Object}              opts Optional parameters
   * @param opts.versionId        The version identifier of agreement as provided by getAgreementInfo API. If not provided then latest version will be used.
   * @param opts.participantEmail The email address of the participant to be used to retrieve its visible document pages' image urls.
   * @throws ApiError
   */
  AgreementsApiValidator.getDocumentUrlValidator = function (agreementId,
                                                             documentId,
                                                             opts) {
    ApiValidatorHelper.validateId(agreementId,
                                  SdkErrorCodes.INVALID_AGREEMENT_ID);

    ApiValidatorHelper.validateId(documentId,
                                  SdkErrorCodes.INVALID_DOCUMENT_ID);

    ApiValidatorHelper.validateVersionIdAndParticipantEmail(opts.versionId,
                                                            opts.participantEmail);

  };

  return AgreementsApiValidator;
}));