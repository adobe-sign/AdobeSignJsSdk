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
  
  var LIBRARY_CREATION_INFO = "libraryCreationInfo";
  var LIBRARY_SHARING_MODE = "librarySharingMode";
  var LIBRARY_TEMPLATE_TYPES = "libraryTemplateTypes";
  var NAME = "name";

  /**
   * Validator for libraryDocuments API. The main purpose of this is to check the validity of the parameters 
   * passed to the libraryDocuments API and throw ApiError with required error messages if the validation fails.
   */
  var  LibraryDocumentsApiValidator = function(){};
  
  /**
   * Validator for LibraryDocuments API that retrieves all the library documents of the user.
   *
   * @param opts optional params
   *
   * @throws ApiError
   */
  LibraryDocumentsApiValidator.getLibraryDocumentsValidator = function(opts) {

  };

  /**
   * Validator for createLibraryDocument API that creates a template that is placed in the user's library for reuse.
   *
   * @param libraryCreationInfo Information about the template that is to be created.
   * @param opts optional params
   *
   * @throws ApiError
   */
  LibraryDocumentsApiValidator.createLibraryDocumentValidator = function(libraryCreationInfo,
                                                                         opts) {
    var paramList = [];
    ApiValidatorHelper.validateParameter(libraryCreationInfo);

    var libraryDocumentCreationInfo = libraryCreationInfo.getLibraryDocumentCreationInfo();
    validateFileInfo(libraryDocumentCreationInfo.getFileInfos());

    paramList.push({param:libraryDocumentCreationInfo.getLibrarySharingMode(), sdkErrorCode: SdkErrorCodes.MISSING_REQUIRED_PARAM, paramKey: LIBRARY_CREATION_INFO});
    paramList.push({param:libraryDocumentCreationInfo.getLibraryTemplateTypes(), sdkErrorCode: SdkErrorCodes.MISSING_REQUIRED_PARAM, paramKey: LIBRARY_TEMPLATE_TYPES});
    paramList.push({param:libraryDocumentCreationInfo.getName(), sdkErrorCode:SdkErrorCodes.MISSING_REQUIRED_PARAM, paramKey: NAME});

    ApiValidatorHelper.validateParameters(paramList);

  };

  /**
   * Validator for getLibraryDocumentInfo API that retrieves the details of the library document identified by libraryDocumentId.
   *
   * @param libraryDocumentId The Id of the library document whose information is to be retrieved.
   * @param opts optional params
   * @throws ApiError
   */

  LibraryDocumentsApiValidator.getLibraryDocumentInfoValidator = function(libraryDocumentId,
                                                                          opts) {
    ApiValidatorHelper.validateId(libraryDocumentId,
                                  SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID);
  };

  /**
   * Validator for deleteLibraryDocument API that deletes the library document identified by libraryDocumentId.
   *
   * @param libraryDocumentId The Id of the library document which is to be deleted.
   * @param opts optional params
   * @throws ApiError
   */

  LibraryDocumentsApiValidator.deleteLibraryDocumentValidator = function(libraryDocumentId,
                                                                         opts) {
    ApiValidatorHelper.validateId(libraryDocumentId,
                                  SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID);
  };

  /**
   * Validator for getLibraryDocumentAuditTrail API that retrieves the audit trail of a library document identified by libraryDocumentId.
   *
   * @param libraryDocumentId The Id of library Document whose audit trail is to be retrieved.
   * @param opts optional params
   * @throws ApiError
   */
  LibraryDocumentsApiValidator.getLibraryDocumentAuditTrailValidator = function(libraryDocumentId,
                                                                                opts) {
    ApiValidatorHelper.validateId(libraryDocumentId,
                                  SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID);
  };

  /**
   * Validator for getCombinedDocument API that gets a single combined PDF document for the documents associated with the library document.
   *
   * @param libraryDocumentId The Id of the library document whose combined document stream is requested.
   * @param auditReport       When set to true, attach an audit report to the signed agreement PDF. Default value is false.
   * @param opts optional params
   * @throws ApiError
   */
  LibraryDocumentsApiValidator.getCombinedDocumentValidator = function(libraryDocumentId,
                                                                       auditReport,
                                                                       opts) {
    ApiValidatorHelper.validateId(libraryDocumentId,
                                  SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID);
  };

  /**
   * Validator for getDocuments API that retrieves the IDs of all the main and supporting documents of a library document identified by libraryDocumentId.
   *
   * @param libraryDocumentId The Id of library document whose documents are requested.
   * @param opts optional params
   * @throws ApiError
   */
  LibraryDocumentsApiValidator.getDocumentsValidator = function(libraryDocumentId) {
    ApiValidatorHelper.validateId(libraryDocumentId,
                                  SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID);
  };

  /**
   * Validator for getLibraryDocument API that retrieves the file stream of the specified document of a library document.
   *
   * @param libraryDocumentId The Id of library document which contains the document whose file stream is requested.
   * @param documentId        The Id of the document whose file stream is requested.
   * @param opts optional params
   * @throws ApiError
   */
  LibraryDocumentsApiValidator.getLibraryDocumentValidator = function(libraryDocumentId,
                                                                      documentId,
                                                                      opts ) {

    ApiValidatorHelper.validateId(libraryDocumentId,
                                  SdkErrorCodes.INVALID_LIBRARYDOCUMENT_ID);
    ApiValidatorHelper.validateId(documentId,
                                  SdkErrorCodes.INVALID_DOCUMENT_ID);
  };


  /**
   * Helper method that takes a list of FileInfo objects and validates them.
   *
   * @param fileInfos the fileInfo that needs to be validated
   * @param opts optional params
   * @throws ApiError
   */

    var validateFileInfo = function (fileInfos,
                                     opts) {
    if (!fileInfos)
      throw new ApiError(SdkErrorCodes.INVALID_FILE_INFO);
    for (var i=0; i< fileInfos.length; i++) {
      // Validating the FileInfo object.
      var fileInfo = fileInfos[i];
      if (!fileInfo)
          throw new ApiError(SdkErrorCodes.INVALID_FILE_INFO);

      var documentUrl = fileInfos[i].getDocumentURL();
      var url = documentUrl ? documentUrl.getUrl() : null ;

      ApiValidatorHelper.validateFileInfo(fileInfo.getDocumentURL(),
                                          fileInfo.getLibraryDocumentId(),
                                          fileInfo.getLibraryDocumentName(),
                                          fileInfo.getTransientDocumentId(),
                                          url);
    };

  };


return LibraryDocumentsApiValidator;
}));