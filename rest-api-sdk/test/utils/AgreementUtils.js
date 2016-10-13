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
        module.exports = factory(require('../../src/index'), require('./ApiUtils'), require('./TransientDocumentUtils'), require('./LibraryDocumentUtils'), require('./TestData'));
}(function (AdobeSignSdk, ApiUtils, TransientDocumentUtils, LibraryDocumentUtils, TestData) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the Agreements API Tests.
     */
    var AgreementUtils = function () {
    };

    var agreementsApi = new AdobeSignSdk.AgreementsApi(ApiUtils.getContext());
    var agreementsModel = AdobeSignSdk.AgreementsModel;

    var optKeys = {
        AGREEMENT_QUERY_KEY: "agreementQuery",
        AGREEMENT_EXTERNAL_ID_KEY: "agreementExternalId",
        AGREEMENT_EXTERNAL_GROUP_KEY: "agreementExternalGroup",
        AGREEMENT_EXTERNAL_NAMESPACE_KEY: "agreementExternalNamespace",
        VERSION_ID_KEY: "versionId",
        ATTACH_SUPPORTING_DOCUMENTS_KEY: "attachSupportingDocuments",
        PARTICIPANT_EMAIL_KEY: "participantEmail",
        AUDIT_REPORT_KEY: "auditReport",
        INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY: "includeSupportingDocumentsPagesInfo",
        IMAGE_SIZE_KEY: "imageSizes",
        SHOW_IMAGE_AVAILIBILITY_KEY: "showImageAvailabilityOnly",
        START_PAGE_KEY: "startPage",
        END_PAGE_KEY: "endPage",
        AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY: "agreementSupportingDocumentContentFormat"

    };
    
    /**
     * Helper method that returns AgreementsApi
     * @return agreementsApi The instance of AgreementsApi
     */
    AgreementUtils.getAgreementsApi = function () {
        return agreementsApi;
    };

    /**
     * Method to return the resource id
     * @param agreementName     The name of the agreement
     * @return agreementId      The agreement id
     * @throws ApiError
     */
    AgreementUtils.getResourceId = function (agreementName) {

        return AgreementUtils.isExistingAgreement(agreementName)
                             .then(function (agreementId) {
                                 if (agreementId === null) {
                                     return AgreementUtils.createAgreement(agreementName);
                                 }
                                 else {
                                     return agreementId;
                                 }
                             })
                             .catch(ApiUtils.throwError);

    };

    /**
     * Method to check if the agreement already exits
     * @param agreementName     The name of agreement
     * @return agreementId      The agreement id
     *
     * @throws ApiError
     */
    AgreementUtils.isExistingAgreement = function (agreementName) {
        var opts = {};
        var agreementId = null;

        return agreementsApi.getAgreements(ApiUtils.getValidHeaderParams(),
                                           AgreementUtils.getOptionalParams(TestData.AGREEMENT_QUERY,
                                                                            TestData.AGREEMENT_EXTERNAL_ID,
                                                                            TestData.AGREEMENT_EXTERNAL_GROUP,
                                                                            TestData.AGREEMENT_EXTERNAL_NAMESPACE))
                            .then(function (userAgreements) {
                                var userAgreementList = userAgreements.getUserAgreementList();
                                for (var i = 0; i < userAgreementList.length; i++) {
                                    if ((userAgreementList[i].getName() === agreementName) && (userAgreementList[i].getStatus() === (agreementsModel.UserAgreement.StatusEnum.OUT_FOR_SIGNATURE))) {
                                        agreementId = userAgreementList[i].getAgreementId();
                                        return agreementId;
                                    }
                                }
                                return agreementId;
                            })
                            .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create the the agreement
     * @param name          The name of agreement
     * @return agreementId  The agreement id
     * @throws ApiError
     */
    AgreementUtils.createAgreement = function (name) {

        var agreementId = null;
        return AgreementUtils.getAgreementCreationInfo(name)
                             .then(function (agreementCreationInfo) {
                                 return agreementsApi.createAgreement(ApiUtils.getValidHeaderParams(),
                                                                      agreementCreationInfo);
                             })
                             .then(function (agreementCreationResponse) {
                                 return agreementCreationResponse.getAgreementId();
                             })
                             .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create AgreementCreation request
     * @param documentName              The agreement document name
     * @return AgreementCreationInfo    The agreement creation info
     * @throws ApiError
     */
    AgreementUtils.getAgreementCreationInfo = function (documentName) {
        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return AgreementUtils.getAgreementCreationInfoBasic(TestData.POST_EMAIL,
                                                                                             TestData.NULL_PARAM,
                                                                                             agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                                                             TestData.NULL_PARAM,
                                                                                             TestData.NULL_PARAM,
                                                                                             transientDocumentResponse.getTransientDocumentId(),
                                                                                             TestData.NULL_PARAM,
                                                                                             documentName,
                                                                                             agreementsModel.DocumentCreationInfo.SignatureTypeEnum.ESIGN,
                                                                                             null);
                                     })
                                     .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to to create AgreementCreation request
     *
     * @param recipientEmail                The recipient email
     * @param recipientFax                  The recipient fax
     * @param fileInfoLibraryDocumentId     The file info library document id
     * @param fileInfoLibraryDocumentName   The file info library document name
     * @param fileInfoTransientDocumentId   The file info transient document id
     * @param fileInfoDocumentUrl           The file info document Url
     * @param documentName                  The name of the document
     * @param signatureType                 The type of LibraryTemplateTypesEnum
     * @param options                       The type of LibrarySharingModeEnum
     *
     * @return AgreementCreationInfo        The agreement creation info
     * @throws ApiError
     */
    AgreementUtils.getAgreementCreationInfoBasic = function (recipientEmail,
                                                             recipientFax,
                                                             recipientRole,
                                                             fileInfoLibraryDocumentId,
                                                             fileInfoLibraryDocumentName,
                                                             fileInfoTransientDocumentId,
                                                             fileInfoDocumentUrl,
                                                             documentName,
                                                             signatureType,
                                                             options) {
        var agreementCreationInfo = new agreementsModel.AgreementCreationInfo();
        var documentCreationInfo = new agreementsModel.DocumentCreationInfo();

        var recipientInfo = new agreementsModel.RecipientInfo();
        recipientInfo.setEmail(recipientEmail);
        recipientInfo.setFax(recipientFax);

        var recipientInfoList = [];
        recipientInfoList.push(recipientInfo);

        var recipientSetInfo = new agreementsModel.RecipientSetInfo();
        recipientSetInfo.setRecipientSetMemberInfos(recipientInfoList);
        recipientSetInfo.setRecipientSetRole(recipientRole);

        var recipientSetInfoList = [];
        recipientSetInfoList.push(recipientSetInfo);
        var fileInfo = new agreementsModel.FileInfo();

        fileInfo.setLibraryDocumentId(fileInfoLibraryDocumentId);
        fileInfo.setLibraryDocumentName(fileInfoLibraryDocumentName);
        fileInfo.setTransientDocumentId(fileInfoTransientDocumentId);

        if (fileInfoDocumentUrl) {
            var urlInfo = new agreementsModel.URLFileInfo();
            urlInfo.setUrl(fileInfoDocumentUrl);
            fileInfo.setDocumentURL(urlInfo);
        }

        var fileInfoList = [];
        fileInfoList.push(fileInfo);

        documentCreationInfo.setName(documentName);
        documentCreationInfo.setRecipientSetInfos(recipientSetInfoList);

        documentCreationInfo.setFileInfos(fileInfoList);
        documentCreationInfo.setSignatureType(signatureType);
        documentCreationInfo.setSignatureFlow(agreementsModel.DocumentCreationInfo.SignatureFlowEnum.SENDER_SIGNATURE_NOT_REQUIRED);
        documentCreationInfo.setPostSignOptions(options);

        agreementCreationInfo.setDocumentCreationInfo(documentCreationInfo);

        return agreementCreationInfo;
    };
    /**
     * Helper method to get OptionalParams that will be used to get agreements through the getAgreements api.
     *
     */
    AgreementUtils.getOptionalParams = function (agreementQuery,
                                                 agreementExternalId,
                                                 agreementExternalGroup,
                                                 agreementExteranlNamespace) {
        var opts = {};
        opts[optKeys.AGREEMENT_QUERY_KEY] = agreementQuery;
        opts[optKeys.AGREEMENT_EXTERNAL_ID_KEY] = agreementExternalId;
        opts[optKeys.AGREEMENT_EXTERNAL_GROUP_KEY] = agreementExternalGroup;
        opts[optKeys.AGREEMENT_EXTERNAL_NAMESPACE_KEY] = agreementExteranlNamespace;
        return opts;
    };

    /**
     * Helper method to get Agreement statusUpdateInfo
     * @param status the status to set in AgreementStatusUpdateInfo
     *
     *  @return AgreementStatusUpdateInfo The agreement status update info
     */
    AgreementUtils.getAgreementStatusUpdateInfo = function (status) {
        var updateInfo = new agreementsModel.AgreementStatusUpdateInfo();
        updateInfo.setValue(status);
        return updateInfo;
    };

    /**
     * Helper method to create AgreementCreation request
     *
     * @param documentName            The agreement document name
     * @param fileInfo                      The fileInfo that will used in agreementCreation request
     *
     * @return AgreementCreationInfo  The agreement creation info
     */
    AgreementUtils.getAgreementCreationInfoWithFileInfo = function (documentName,
                                                                    fileInfo) {
        return AgreementUtils.getAgreementCreationInfoBasic(TestData.POST_EMAIL,
                                                            TestData.NULL_PARAM,
                                                            agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                            fileInfo.getLibraryDocumentId(),
                                                            fileInfo.getLibraryDocumentName(),
                                                            fileInfo.getTransientDocumentId(),
                                                            fileInfo.getDocumentURL() ? fileInfo.getDocumentURL().getUrl() : TestData.NULL_PARAM,
                                                            documentName,
                                                            agreementsModel.DocumentCreationInfo.SignatureTypeEnum.ESIGN,
                                                            null)
    };

    /**
     * Helper method to create AgreementCreation request
     * @param documentName              The agreement document name
     * @param options                   The PostSignOptions that will used in agreementCreation request
     *
     * @return AgreementCreationInfo    The agreement creation info
     */
    AgreementUtils.getAgreementCreationInfoWithPostSignOptions = function (documentName,
                                                                           options) {
        return AgreementUtils.getLibraryDocumentId()
                             .then(function (libraryDocumentId) {
                                 return AgreementUtils.getAgreementCreationInfoBasic(TestData.POST_EMAIL,
                                                                                     TestData.NULL_PARAM,
                                                                                     agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                                                     libraryDocumentId,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     documentName,
                                                                                     agreementsModel.DocumentCreationInfo.SignatureTypeEnum.ESIGN,
                                                                                     options);
                             })
                             .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to fetch libraryDocumentId
     *
     * @return id    The LibraryDocumentId
     */
    AgreementUtils.getLibraryDocumentId = function () {
        return LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                   .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create AgreementCreation request
     *
     * @param recipientEmail the recipient email
     * @param recipientFax the recipient fax
     * @param recipientRole the reci[ient role
     * @param documentName The name of the document
     *
     *  @return AgreementCreationInfo The agreement creation info
     */
    AgreementUtils.getAgreementCreationInfoWithRecipientInfo = function (recipientEmail,
                                                                         recipientFax,
                                                                         recipientRole,
                                                                         documentName) {
        return AgreementUtils.getLibraryDocumentId()
                             .then(function (libraryDocumentId) {
                                 return AgreementUtils.getAgreementCreationInfoBasic(recipientEmail,
                                                                                     recipientFax,
                                                                                     recipientRole,
                                                                                     libraryDocumentId,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     documentName,
                                                                                     agreementsModel.DocumentCreationInfo.SignatureTypeEnum.ESIGN,
                                                                                     TestData.NULL_PARAM);
                             })
                             .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create AgreementCreation request
     * @param signatureType             The type of LibraryTemplateTypesEnum
     * @param documentName              The name of the document
     *
     * @return AgreementCreationInfo    The agreement creation info
     */
    AgreementUtils.getAgreementCreationInfoWithSignatureType = function (signatureType,
                                                                         documentName) {
        return AgreementUtils.getLibraryDocumentId()
                             .then(function (libraryDocumentId) {
                                 return AgreementUtils.getAgreementCreationInfoBasic(TestData.POST_EMAIL,
                                                                                     TestData.NULL_PARAM,
                                                                                     agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER,
                                                                                     libraryDocumentId,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     TestData.NULL_PARAM,
                                                                                     documentName,
                                                                                     signatureType,
                                                                                     null);
                             })
                             .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create AgreementCreation request
     * @param email             The email that needs to be set in AlternateParticipantInfo
     * @param privateMessage    The privateMessage that needs to be set in AlternateParticipantInfo
     *
     *  @return AgreementCreationInfo The agreement creation info
     */
    AgreementUtils.getAlternateParticipantInfo = function (email,
                                                           privateMessage) {
        var updateInfo = new agreementsModel.AlternateParticipantInfo();
        updateInfo.email = email;
        updateInfo.privateMessage = privateMessage;
        return updateInfo;

    }

    AgreementUtils.getFirstDocumentId = function (agreementId) {
        return agreementsApi.getAllDocuments(ApiUtils.getValidHeaderParams(),
                                             agreementId)
                            .then(function (agreementDocuments) {
                                var documents = agreementDocuments.getDocuments();
                                var documentId = documents[0].getDocumentId();
                                return documentId;
                            })

    };

    AgreementUtils.getOptsForDocumentUrl = function (versionId,
                                                     participantEmail) {
        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        return opts;

    };

    AgreementUtils.getOptsForCombinedDocPagesInfo = function (includeSupportingDocumentsPagesInfo) {
        var opts = {};
        opts[optKeys.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY] = includeSupportingDocumentsPagesInfo;
        return opts;

    };

    AgreementUtils.getOptsForCombinedDocumentAndDocUrl = function (versionId,
                                                                   participantEmail,
                                                                   attachSupportingDocuments,
                                                                   auditReport) {
        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        opts[optKeys.ATTACH_SUPPORTING_DOCUMENTS_KEY] = attachSupportingDocuments;
        opts[optKeys.AUDIT_REPORT_KEY] = auditReport;
        return opts;

    };

    AgreementUtils.getOptsForDocumentImageUrl = function (versionId,
                                                          participantEmail,
                                                          imageSizes,
                                                          showImageAvailabilityOnly,
                                                          startPage,
                                                          endPage) {
        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        opts[optKeys.IMAGE_SIZE_KEY] = imageSizes;
        opts[optKeys.SHOW_IMAGE_AVAILIBILITY_KEY] = showImageAvailabilityOnly;
        opts[optKeys.START_PAGE_KEY] = startPage;
        opts[optKeys.END_PAGE_KEY] = endPage;
        return opts;

    };

    AgreementUtils.getOptsForDocuments = function (versionId,
                                                   participantEmail,
                                                   supportingDocumentContentFormat) {
        var opts = {};
        opts[optKeys.VERSION_ID_KEY] = versionId;
        opts[optKeys.PARTICIPANT_EMAIL_KEY] = participantEmail;
        opts[optKeys.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY] = supportingDocumentContentFormat;
        return opts;

    };

    return AgreementUtils;
}));

