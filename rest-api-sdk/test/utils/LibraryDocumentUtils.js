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
        module.exports = factory(require('../../src/index'), require('../utils/ApiUtils'), require('../utils/TransientDocumentUtils'), require('../utils/TestData'));
}(function (AdobeSignSdk, ApiUtils, TransientDocumentUtils, TestData) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the LibraryDocuments API Tests. 
     */

    var LibraryDocumentsUtils = function () {
    };

    var libraryDocumentsApi = new AdobeSignSdk.LibraryDocumentsApi(ApiUtils.getContext());
    var libraryDocumentModel = AdobeSignSdk.LibraryDocumentsModel;

    /**
     * Helper method that returns LibraryDocumentsApi.
     * 
     * @return libraryDocumentsApi   The instance of LibraryDocumentsApi
     */
    LibraryDocumentsUtils.getLibraryDocumentsApi = function () {
        return libraryDocumentsApi;
    };

    /**
     * Method to return the resource id
     * @param libraryDocumentName The name of Library document
     * @param opts optional parameter
     *
     * @return libraryDocumentId The library document id
     */
    LibraryDocumentsUtils.getResourceId = function (libraryDocumentName,
                                                    opts) {
        return LibraryDocumentsUtils.isExistingLibraryDocument(libraryDocumentName)
                                    .then(function (libraryDocumentId) {
                                        if (libraryDocumentId === null) {
                                            return LibraryDocumentsUtils.createLibraryDocument(libraryDocumentName);
                                        }
                                        else {
                                            return libraryDocumentId;
                                        }
                                    })
                                    .catch(ApiUtils.throwError);
    };

    /**
     * Method to check if the library document already exits
     * @param libraryDocumentName The name of Library document
     * @param opts optional parameter
     *
     * @return libraryDocumentId The library document id
     */
    LibraryDocumentsUtils.isExistingLibraryDocument = function (libraryDocumentName,
                                                                opts) {

        var libraryDocumentId = null;

        return libraryDocumentsApi.getLibraryDocuments(ApiUtils.getValidHeaderParams())
                                  .then(function (documentLibraryItems) {
                                      var documentLibraryItems = documentLibraryItems.getLibraryDocumentList();
                                      for (var i; i < documentLibraryItems.length; i++) {
                                          var documentLibraryItem = documentLibraryItems[i];
                                          if ((documentLibraryItem.getName() === libraryDocumentName) && (documentLibraryItem.getName() === libraryDocumentModel.DocumentLibraryItem.ScopeEnum.PERSONAL)) {
                                              libraryDocumentId = documentLibraryItem.getLibraryDocumentId();
                                              return libraryDocumentId;
                                          }
                                      }
                                      return libraryDocumentId;
                                  })
                                  .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create library document
     * @param name The Library document name
     * @param opts optional parameter
     *
     * @return libraryDocumentId The library document id
     */
    LibraryDocumentsUtils.createLibraryDocument = function (name,
                                                            opts) {
        var opts = {};
        return LibraryDocumentsUtils.getLibraryCreationInfo(name)
                                    .then(function (libraryCreationInfo) {
                                        return libraryDocumentsApi.createLibraryDocument(ApiUtils.getValidHeaderParams(),
                                                                                         libraryCreationInfo,
                                                                                         opts)
                                    })
                                    .then(function (libraryDocumentCreationResponse) {
                                        return libraryDocumentCreationResponse.getLibraryDocumentId();
                                    })
                                    .catch(ApiUtils.throwError);

    };

    /**
     * Helper method to create library creation info
     * @param documentName The library document name
     * @param opts optional parameter
     *
     * @return LibraryCreationInfo The library creation info
     */
    LibraryDocumentsUtils.getLibraryCreationInfo = function (documentName,
                                                             opts) {

        var libraryTemplateTypesEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibraryTemplateTypesEnum;
        var librarySharingModeEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibrarySharingModeEnum;

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return LibraryDocumentsUtils.getLibraryCreationInfoUtil(new Array(libraryTemplateTypesEnum.DOCUMENT),
                                                                                                 librarySharingModeEnum.USER,
                                                                                                 TestData.NULL_PARAM,
                                                                                                 TestData.NULL_PARAM,
                                                                                                 transientDocumentResponse.getTransientDocumentId(),
                                                                                                 TestData.NULL_PARAM,
                                                                                                 documentName);

                                     })
                                     .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to create library document creation request
     * @param templateType type of LibraryTemplateTypesEnum
     * @param sharingMode type of LibrarySharingModeEnum
     * @param libraryDocumentId The file info library document id
     * @param libraryDocumentName The file info library document name
     * @param transientDocumentId The file info transient document id
     * @param fileInfoDocumentUrl The file info document Url
     * @param documentName The name of the document
     * @param opts optional parameter
     *
     * @return libraryCreationInfo
     */
    LibraryDocumentsUtils.getLibraryCreationInfoUtil = function (templateType,
                                                                 sharingMode,
                                                                 libraryDocumentId,
                                                                 libraryDocumentName,
                                                                 transientDocumentId,
                                                                 fileInfoDocumentUrl,
                                                                 documentName,
                                                                 opts) {

        var libraryCreationInfo = new libraryDocumentModel.LibraryCreationInfo();
        var libraryDocumentCreationInfo = new libraryDocumentModel.LibraryDocumentCreationInfo();

        libraryDocumentCreationInfo.setLibrarySharingMode(sharingMode);
        libraryDocumentCreationInfo.setLibraryTemplateTypes(templateType);
        var fileInfo = new libraryDocumentModel.FileInfo();

        fileInfo.setLibraryDocumentId(libraryDocumentId);
        fileInfo.setLibraryDocumentName(libraryDocumentName);
        fileInfo.setTransientDocumentId(transientDocumentId);

        if (fileInfoDocumentUrl) {
            var urlFileInfo = new libraryDocumentModel.URLFileInfo();
            urlFileInfo.setUrl(fileInfoDocumentUrl);
            fileInfo.documentURL = urlFileInfo;
        }
        var fileInfoList = new Array(fileInfo);

        libraryDocumentCreationInfo.setName(documentName);
        libraryDocumentCreationInfo.setFileInfos(fileInfoList);
        libraryCreationInfo.setLibraryDocumentCreationInfo(libraryDocumentCreationInfo);
        return libraryCreationInfo;
    };

    /**
     * Helper method to get document id
     * @param libraryDocumentId The library document id
     * @param opts optional parameter
     *
     * @return DocumentId document id
     */
    LibraryDocumentsUtils.getDocumentId = function (libraryDocumentId,
                                                    opts) {
        var opts = {};
        return libraryDocumentsApi.getDocuments(ApiUtils.getValidHeaderParams(),
                                                libraryDocumentId,
                                                opts)
                                  .then(function (documents) {
                                      return (documents.getDocuments()[0]).getDocumentId();
                                  })
                                  .catch(ApiUtils.throwError);
    };

    /**
     * Helper method to create library creation info with FileInfo options
     * @param documentName The library document name
     * @param fileInfo the fileInfo for libraryCreationInfo
     * @param opts optional parameter
     *
     * @return LibraryCreationInfo
     */
    LibraryDocumentsUtils.getLibraryCreationInfoWithFileInfo = function (documentName,
                                                                         fileInfo,
                                                                         opts) {
        var libraryTemplateTypesEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibraryTemplateTypesEnum;
        var librarySharingModeEnum = libraryDocumentModel.LibraryDocumentCreationInfo.LibrarySharingModeEnum;

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return LibraryDocumentsUtils.getLibraryCreationInfoUtil(new Array(libraryTemplateTypesEnum.DOCUMENT),
                                                                                                 librarySharingModeEnum.USER,
                                                                                                 fileInfo.getLibraryDocumentId(),
                                                                                                 fileInfo.getLibraryDocumentName(),
                                                                                                 fileInfo.getTransientDocumentId(),
                                                                                                 fileInfo.getDocumentURL(),
                                                                                                 documentName);

                                     })
                                     .catch(ApiUtils.throwError);

    };
    /**
     * Helper method to create library creation info with template type and sharing type
     * @param documentName The library document name
     * @param templateType The library template type
     * @param sharingMode  The library sharing mode
     * @param opts optional parameter
     *
     * @return LibraryCreationInfo The library creation info
     */
    LibraryDocumentsUtils.getLibraryCreationInfoWithTemplateTypeAndSharingType = function (documentName,
                                                                                           templateType,
                                                                                           sharingMode,
                                                                                           opts) {

        return TransientDocumentUtils.createTransientDocumentResource(TestData.TRANSIENT_DOCUMENT_NAME)
                                     .then(function (transientDocumentResponse) {
                                         return LibraryDocumentsUtils.getLibraryCreationInfoUtil(templateType,
                                                                                                 sharingMode,
                                                                                                 TestData.NULL_PARAM,
                                                                                                 TestData.NULL_PARAM,
                                                                                                 transientDocumentResponse.getTransientDocumentId(),
                                                                                                 TestData.NULL_PARAM,
                                                                                                 documentName);

                                     })
                                     .catch(ApiUtils.throwError);
    };
    return LibraryDocumentsUtils;
}));
