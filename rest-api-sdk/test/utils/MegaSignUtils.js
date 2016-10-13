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
        module.exports = factory(require('../../src/index'), require('../utils/ApiUtils'), require('./LibraryDocumentUtils'), require('../utils/TestData'));
}(function (AdobeSignSdk, ApiUtils, LibraryDocumentUtils, TestData) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the MegaSigns API Tests. 
     */
    var MegaSignUtils = function () {
    };

    var megaSignsApi = new AdobeSignSdk.MegaSignsApi(ApiUtils.getContext());
    var megaSignsModel = AdobeSignSdk.MegaSignsModel;

    /**
     * Helper method that returns MegaSigns Api.
     *
     * @return megaSignsApi   The instance of MegaSigns Api.
     */
    MegaSignUtils.getMegaSignsApi = function () {
        return megaSignsApi;
    };

    /**
     * Method to return the resource id
     * @param megaSignName The name of megaSign agreement
     * @return megaSignId The  id of megaSign agreement
     *
     * throws ApiError
     */
    MegaSignUtils.getResourceId = function (megaSignName) {
        return MegaSignUtils.isExistingMegaSign(megaSignName)
                            .then(function (megaSignId) {
                                if (megaSignId === null) {
                                    return MegaSignUtils.createMegaSign(megaSignName);
                                }
                                else {
                                    return megaSignId;
                                }
                            })
                            .catch(ApiUtils.throwError);

    };

    /**
     * Method to check if the MegaSign already exits
     * @param megaSignName The name of megaSign agreement
     * @return megaSignId The  id of megaSign agreement
     *
     * throws ApiError
     */
    MegaSignUtils.isExistingMegaSign = function (staticMegaSignName) {
        var opts = {};
        var megaSignId = null;

        return megaSignsApi.getMegaSigns(ApiUtils.getValidHeaderParams(),
                                         TestData.MEGASIGN_QUERY,
                                         opts)
                           .then(function (megaSign) {
                               var megaSignList = megaSign.megaSignList;
                               var length = megaSignList.length;
                               for (var i = 0; i < length; i++) {
                                   if (((megaSignList)[i].getName() === staticMegaSignName) && ((megaSignList)[i].getStatus() === (megaSignsModel.MegaSign.StatusEnum.OUT_FOR_SIGNATURE))) {
                                       megaSignId = megaSignList[i].getMegaSignId();
                                       return megaSignId;
                                   }
                               }
                               return megaSignId;
                           })
                           .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create the MegaSign
     * @param name The name of megaSign agreement
     *
     * @return megaSignId The  id of megaSign agreement
     */
    MegaSignUtils.createMegaSign = function (name) {
        return MegaSignUtils.getMegaSignCreationRequest(name)
                            .then(function (megaSignCreationRequest) {
                                var opts = {};
                                return megaSignsApi.createMegaSign(ApiUtils.getValidHeaderParams(),
                                                                   megaSignCreationRequest,
                                                                   opts);
                            })
                            .then(function (megaSignCreationResponse) {
                                return megaSignCreationResponse.getMegaSignId();
                            })
                            .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create MegaSignCreation request
     * @param documentName The name of megaSign agreement
     *
     * @return megaSignCreationRequest
     */
    MegaSignUtils.getMegaSignCreationRequest = function (documentName) {

        var signatureTypeEnum = megaSignsModel.MegaSignCreationInfo.SignatureTypeEnum;

        return LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                   .then(function (libraryDocumentId) {
                                       return MegaSignUtils.getMegaSignAgreementCreationRequest(TestData.POST_EMAIL,
                                                                                                TestData.NULL_PARAM,
                                                                                                libraryDocumentId,
                                                                                                TestData.NULL_PARAM,
                                                                                                TestData.NULL_PARAM,
                                                                                                TestData.NULL_PARAM,
                                                                                                documentName,
                                                                                                signatureTypeEnum.ESIGN,
                                                                                                null);

                                   })
                                   .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to fetch the library document id from MegaSign creation request
     * @param recipientEmail the recipient email
     * @param recipientFax the recipient fax
     * @param fileInfoLibraryDocumentId The file info library document id
     * @param fileInfoLibraryDocumentName The file info library document name
     * @param fileInfoTransientDocumentId The file info transient document id
     * @param fileInfoDocumentUrl The file info document Url
     * @param documentName The name of the document
     * @param signatureType type of LibraryTemplateTypesEnum
     * @param options type of LibrarySharingModeEnum
     *
     *  @return megaSignCreationRequest
     */
    MegaSignUtils.getMegaSignAgreementCreationRequest = function (recipientEmail,
                                                                  recipientFax,
                                                                  fileInfoLibraryDocumentId,
                                                                  fileInfoLibraryDocumentName,
                                                                  fileInfoTransientDocumentId,
                                                                  fileInfoDocumentUrl,
                                                                  documentName,
                                                                  signatureType,
                                                                  options) {

        var megaSignCreationRequest = new megaSignsModel.MegaSignCreationRequest();
        var megaSignCreationInfo = new megaSignsModel.MegaSignCreationInfo();
        var recipientInfo = new megaSignsModel.RecipientInfo();

        recipientInfo.setEmail(recipientEmail);
        recipientInfo.setFax(recipientFax);

        var recipientSetInfo = new megaSignsModel.RecipientSetInfo();

        recipientSetInfo.setRecipientSetMemberInfos(new Array(recipientInfo));
        megaSignCreationInfo.setRecipientSetInfos(new Array(recipientSetInfo));

        var fileInfo = new megaSignsModel.FileInfo();

        fileInfo.setLibraryDocumentId(fileInfoLibraryDocumentId);
        fileInfo.setLibraryDocumentName(fileInfoLibraryDocumentName);
        fileInfo.setTransientDocumentId(fileInfoTransientDocumentId);

        if (fileInfoDocumentUrl) {
            var urlFileInfo = new megaSignsModel.URLFileInfo();
            urlFileInfo.setUrl(fileInfoDocumentUrl);
            fileInfo.setDocumentURL(urlFileInfo);
        }
        var fileInfoList = new Array(fileInfo);

        megaSignCreationInfo.setName(documentName);
        megaSignCreationInfo.setFileInfos(fileInfoList);
        megaSignCreationInfo.setSignatureType(signatureType);
        megaSignCreationInfo.setPostSignOptions(options);

        megaSignCreationRequest.setMegaSignCreationInfo(megaSignCreationInfo);

        return megaSignCreationRequest;
    };

    /**
     * Helper method to create MegaSignCreation request with FileInfo options
     * @param documentName the MegaSign document name
     * @param fileInfo the fileInfo for megaSigncreationRequest
     *
     * @return megaSignCreationRequest
     */
    MegaSignUtils.getMegaSignCreationRequestWithFileInfo = function (documentName,
                                                                     fileInfo) {
        return MegaSignUtils.getMegaSignAgreementCreationRequest(TestData.POST_EMAIL,
                                                                 TestData.NULL_PARAM,
                                                                 fileInfo.getLibraryDocumentId(),
                                                                 fileInfo.getLibraryDocumentName(),
                                                                 fileInfo.getTransientDocumentId(),
                                                                 fileInfo.getDocumentURL(),
                                                                 documentName,
                                                                 megaSignsModel.MegaSignCreationInfo.SignatureTypeEnum.ESIGN,
                                                                 null);

    };

    /**
     * Helper method to create MegaSignCreation request with PostSign options
     * @param documentName the MegaSign document name
     * @param postSignOptions the postSigning options for megaSigncreation request
     *
     * @return megaSignCreationRequest
     */
    MegaSignUtils.getMegaSignCreationRequestWithPostSignOptions = function (documentName,
                                                                            postSignOptions) {
        var signatureTypeEnum = megaSignsModel.MegaSignCreationInfo.SignatureTypeEnum;

        return LibraryDocumentUtils.getResourceId(TestData.LIBRARY_DOCUMENT_NAME)
                                   .then(function (libraryDocumentId) {
                                       return MegaSignUtils.getMegaSignAgreementCreationRequest(TestData.POST_EMAIL,
                                                                                                TestData.NULL_PARAM,
                                                                                                libraryDocumentId,
                                                                                                TestData.NULL_PARAM,
                                                                                                TestData.NULL_PARAM,
                                                                                                TestData.NULL_PARAM,
                                                                                                documentName,
                                                                                                signatureTypeEnum.ESIGN,
                                                                                                postSignOptions);

                                   })
                                   .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create MegaSignStatusUpdateInfo
     * @param status the status that we need to set in megaSignStatusUpdateInfo
     *
     * @return megaSignStatusUpdateInfo
     */
    MegaSignUtils.getMegaSignStatusUpdateInfo = function (status) {
        var megaSignStatusUpdateInfo = new megaSignsModel.MegaSignStatusUpdateInfo();
        megaSignStatusUpdateInfo.setValue(status);
        return megaSignStatusUpdateInfo;

    };

    return MegaSignUtils;
}));
