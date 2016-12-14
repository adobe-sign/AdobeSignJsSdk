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
  root.AdobeSignSdk.AgreementUtils = factory(root.AdobeSignSdk, root.AdobeSignSdk.TransientDocumentUtils, root.AdobeSignSdk.Errors, root.AdobeSignSdk.ApiUtils, root.AdobeSignSdk.Constants);

}(this, function(AdobeSignSdk, TransientDocumentUtils, Errors, ApiUtils, Constants) {
  'use strict';

  /**
   * Util functions for Agreement resource.
   */
  var AgreementUtils = function(){};
  
  var agreementsApi = new AdobeSignSdk.AgreementsApi(ApiUtils.getContext());
  var agreementsModel = AdobeSignSdk.AgreementsModel;
  var headers = ApiUtils.getHeaderParams();

  var optKeys = {
    QUERY_KEY : 'query',
    EXTERNAL_ID_KEY : 'externalId',
    EXTERNAL_GROUP_KEY : 'externalGroup',
    EXTERNAL_NAMESPACE_KEY : 'externalNamespace'
  };

  //Document identifier to identify whether document is library document or transient document
  AgreementUtils.DocumentIdentifierType = {
    TRANSIENT_DOCUMENT_ID: "TRANSIENT_DOCUMENT_ID",
    LIBRARY_DOCUMENT_ID: "LIBRARY_DOCUMENT_ID",
    LIBRARY_DOCUMENT_NAME: "LIBRARY_DOCUMENT_NAME"
  };

  /**
   * Creates an agreement.
   *
   * @param recipientSetEmailList List containing email ids about the recipients.
   * @param documentId Id of the document
   * @param documentIdentifierType type of document
   * @param agreementName name of the agreement user wants to create
   * @return AgreementCreationResponse object containing information of the agreement.
   * @throws ApiError
   */
  AgreementUtils.createAgreement = function(recipientSetEmailList,
                                            documentId,
                                            documentIdentifierType,
                                            agreementName) {

    return AgreementUtils.createAgreementWithRecipientSetName(recipientSetEmailList,
                                                              null,
                                                              documentId,
                                                              documentIdentifierType,
                                                              agreementName)
                .catch(function(apiError) {
                  ApiUtils.logAndThrowError(Errors.CREATE_AGREEMENT,apiError);
                });
  };

  /**
   * Creates an agreement for given Recipient Set Name.
   *
   * @param recipientSetEmailList List containing email ids about the recipients.
   * @param recipientSetName The name of the recipient set.
   * @param documentId Id of the document
   * @param documentIdentifierType type of document
   * @param agreementName name of the agreement user wants to create
   * @return AgreementCreationResponse object containing information of the agreement.
   * @throws ApiError
   */
  AgreementUtils.createAgreementWithRecipientSetName = function(recipientSetEmailList,
                                                                recipientSetName,
                                                                documentId,
                                                                documentIdentifierType,
                                                                agreementName) {
    //Get recipient set info
    var recipientSetInfos = AgreementUtils.getRecipientSetInfoWithRecipientSetName(recipientSetEmailList,
                                                                                   recipientSetName);
    //Get file info and create a list of file info
    var fileInfo = AgreementUtils.getFileInfo(documentId,
                                              documentIdentifierType);

    var fileInfos = [];
    fileInfos.push(fileInfo);

    //Get document creation info
    var documentCreationInfo = AgreementUtils.getDocumentCreationInfo(agreementName,
                                                                      fileInfos,
                                                                      recipientSetInfos);

    //Get agreement creation info
    var agreementCreationInfo = AgreementUtils.getAgreementCreationInfo(documentCreationInfo,
                                                                        null);

    //Make API call to create agreement
    return agreementsApi.createAgreement(headers,
                                         agreementCreationInfo)
                        .then(function(agreementCreationResponse) {
                          return agreementCreationResponse;
                        })
                        .catch(function(apiError) {
                          ApiUtils.logAndThrowError(Errors.CREATE_AGREEMENT, apiError);
                        });

  };

  /**
   * Returns list containing information about the recipients.
   *
   * @param userEmails List containing email ids about the recipients.
   * @param recipientSetName The name of the recipient set.
   * @return RecipientSetInfo object containing information of the recipients.
   */
  AgreementUtils.getRecipientSetInfoWithRecipientSetName = function(userEmails,
                                                                    recipientSetName) {

    //Create an array of recipients from list of email ids.
    var recipientSetMemberInfos = [];
    for (var i=0; i < userEmails.length; i++) {
      var recipientInfo = new agreementsModel.RecipientInfo();
      recipientInfo.setEmail(userEmails[i]);
      recipientSetMemberInfos.push(recipientInfo);
    }

    //Create recipient set info
    var recipientSetInfo = new agreementsModel.RecipientSetInfo();
    recipientSetInfo.setRecipientSetMemberInfos(recipientSetMemberInfos);
    recipientSetInfo.setRecipientSetRole(agreementsModel.RecipientSetInfo.RecipientSetRoleEnum.SIGNER);

    if(recipientSetName) {
      recipientSetInfo.setRecipientSetName(recipientSetName);
    }

    var recipientSetInfos = [];
    recipientSetInfos.push(recipientSetInfo);
    return recipientSetInfos;

  };

  /**
   * Get document creation info.
   *
   * @param agreementName Name of the agreement
   * @param fileInfos List of file info objects
   * @param recipientSetInfos List containing information about the recipients.
   * @return DocumentCreationInfo object containing information required to create a document.
   */
  AgreementUtils.getDocumentCreationInfo = function(agreementName,
                                                    fileInfos,
                                                    recipientSetInfos) {

    //Create document creation info from the file info object
    var documentCreationInfo = new agreementsModel.DocumentCreationInfo();
    documentCreationInfo.setName(agreementName);
    documentCreationInfo.setFileInfos(fileInfos);
    documentCreationInfo.setRecipientSetInfos(recipientSetInfos);
    documentCreationInfo.setSignatureType(agreementsModel.DocumentCreationInfo.SignatureTypeEnum.ESIGN);
    documentCreationInfo.setSignatureFlow(agreementsModel.DocumentCreationInfo.SignatureFlowEnum.SENDER_SIGNATURE_NOT_REQUIRED);
    return documentCreationInfo;

  };

  /**
   * Get agreement creation info
   *
   * @param documentCreationInfo information about the document to be used in the agreement
   * @return AgreementCreationInfo object containing information required to create an agreement.
   */
  AgreementUtils.getAgreementCreationInfo = function(documentCreationInfo,
                                                     interactiveOptions) {
    var agreementCreationInfo = new agreementsModel.AgreementCreationInfo();
    agreementCreationInfo.setDocumentCreationInfo(documentCreationInfo);
    agreementCreationInfo.setOptions(interactiveOptions);
    return agreementCreationInfo;

  };

  /**
   * Get File info using document.
   *
   * @param documentId id of document
   * @param documentIdentifierType type of document
   * @return FileInfo object containing information about the file.
   */
  AgreementUtils.getFileInfo = function (documentId,
                                         documentIdentifierType) {

    //Create file info object using document id and name
    var fileInfo = new agreementsModel.FileInfo();
    if (documentIdentifierType === AgreementUtils.DocumentIdentifierType.TRANSIENT_DOCUMENT_ID) {
      fileInfo.setTransientDocumentId(documentId);
    }
    else if (documentIdentifierType === AgreementUtils.DocumentIdentifierType.LIBRARY_DOCUMENT_ID) {
      fileInfo.setLibraryDocumentId(documentId);
    }
    else if (documentIdentifierType === AgreementUtils.DocumentIdentifierType.LIBRARY_DOCUMENT_NAME) {
      fileInfo.setLibraryDocumentName(documentId);
    }
    return fileInfo;

  };

  /**
   * Retrieves the information of a given agreement.
   *
   * @param agreementId The agreement identifier.
   * @return Promise containing AgreementInfo containing details of agreement.
   * @throws ApiError
   */
  AgreementUtils.getAgreementInfo = function(agreementId) {

    return agreementsApi.getAgreementInfo(headers,
                                          agreementId)
                        .then(function(agreementInfo) {
                          return agreementInfo;
                        })
                        .catch(function(apiError) {
                          ApiUtils.logAndThrowError(Errors.GET_AGREEMENT_DETAILS, apiError);
                        });

  };

  /**
   * Returns url of the agreement identified by agreement id.
   *
   * @param agreementId The agreement id.
   * @return Promise containing SigningUrlSetInfo containing list of signing urls.
   * @throws ApiError
   */
  AgreementUtils.getSigningUrl = function(agreementId) {

    //Fetch the signing url for the specified agreement.
    return agreementsApi.getSigningUrl(headers,
                                       agreementId)
                        .then(function(signingUrlResponse) {

                          //Returning the Arraylist of the url's
                          return signingUrlResponse.getSigningUrlSetInfos();
                        })
                        .catch(function(apiError) {
                          ApiUtils.logAndThrowError(Errors.GET_SIGNING_URL, apiError);
                        });

  };

  /**
   * Return all the agreements of a user.
   *
   * @return Promise containing UserAgreements object containing all the agreements of a user.
   * @throws ApiError
   */
  AgreementUtils.getAllAgreements = function() {

    var opts = {};
    opts[optKeys.QUERY_KEY] = Constants.QUERY;
    opts[optKeys.EXTERNAL_ID_KEY] = Constants.EXTERNAL_ID;
    opts[optKeys.EXTERNAL_GROUP_KEY] = Constants.EXTERNAL_GROUP;
    opts[optKeys.EXTERNAL_NAMESPACE_KEY] = Constants.EXTERNAL_NAMESPACE;

    return agreementsApi.getAgreements(headers,
                                       opts)
                        .then(function(userAgreements) {
                          return userAgreements;
                        })
                        .catch(function(apiError) {
                          ApiUtils.logAndThrowError(Errors.GET_AGREEMENTS, apiError);
                        });

  };

  /**
   * Returns id of the agreement with given agreement name.
   *
   * @param agreementName name of the agreement.
   * @return Promise containing agreement id.
   * @throws ApiError
   */
  AgreementUtils.isExistingAgreement = function(agreementName) {

    //Make API call to get all the agreements of a user.
    return AgreementUtils.getAllAgreements()
                         .then(function(userAgreements) {
                           var userAgreementList = userAgreements.getUserAgreementList();

                           //Find first agreement which is out for signature and return its agreement id.
                           for (var i=0; i < userAgreementList.length; i++){
                             var userAgreement = userAgreementList[i];
                             if (userAgreement.getName() === agreementName && userAgreement.getStatus() === (agreementsModel.UserAgreement.StatusEnum.OUT_FOR_SIGNATURE)) {
                               return userAgreement.getAgreementId();
                             }
                           }
                           return null;
                         })
                         .catch(function(apiError) {
                           ApiUtils.logAndThrowError(Errors.CHECK_AGREEMENT_EXIST, apiError);
                         });

  };

  /**
   * Returns id of the agreement with given agreement name if exists else it creates a new agreement.
   *
   * @param agreementName name of the agreement.
   * @param file File Object.
   * @return Promise containing agreement id.
   * @throws ApiError
   */
  AgreementUtils.getAgreementId = function(agreementName,
                                           file) {

    //Check if agreement exist and return agreement id.
    return AgreementUtils.isExistingAgreement(agreementName)
                         .then(function(agreementId) {
                           if(agreementId != null) {
                             return agreementId;
                           }
                           else {
                             return AgreementUtils.createNewAgreement(agreementName, file);
                           }
                         })
                         .catch(function(apiError) {
                           ApiUtils.logAndThrowError(Errors.GET_AGREEMENT_ID, apiError);
                         });

  };

  /**
   * Retruns id of the agreement created with given agreement name.
   *
   * @param agreementName name of the agreement.
   * @param file File Object.
   * @return Promise containing agreement id.
   * @throws ApiError
   */
  AgreementUtils.createNewAgreement = function(agreementName,
                                               file) {

    return TransientDocumentUtils.createTransientDocument(Constants.INPUT_FILE_NAME,
                                                          file)
                                 .then(function (transientDocumentResponse) {

                                   //Get the id of the transient document.
                                   var transientDocumentId = transientDocumentResponse.getTransientDocumentId();

                                   //List containing email ids of recipients.
                                   var recipientSetEmailList = [];
                                   recipientSetEmailList.push(Constants.USER_EMAIL);

                                   //Create agreement using the transient document.
                                   return AgreementUtils.createAgreement(recipientSetEmailList,
                                                                         transientDocumentId,
                                                                         AgreementUtils.DocumentIdentifierType.TRANSIENT_DOCUMENT_ID,
                                                                         agreementName)
                                 })
                                 .then(function(agreementCreationResponse) {

                                   //Get agreement info using the agreement id.
                                   return agreementCreationResponse.getAgreementId();
                                 })
                                 .catch(function(apiError) {
                                   ApiUtils.logAndThrowError(Errors.CREATE_AGREEMENT, apiError);
                                 });

  };

  /**
   * Retrieves the IDs of all the main and supporting documents of an agreement identified by agreement id.
   *
   * @param agreementId The agreement identifier.
   * @return AgreementDocuments
   * @throws ApiError
   */
  AgreementUtils.getAllDocuments = function(agreementId) {

    //Fetch list of documents associated with the specified agreement.
    return agreementsApi.getAllDocuments(headers,
                                         agreementId)
                        .then(function(agreementDocuments) {
                          return agreementDocuments;
                        })
                        .catch(function(apiError) {
                          ApiUtils.logAndThrowError(Errors.GET_AGREEMENTS_DOCUMENTS, apiError);
                        });
  };

  /**
   * Return audit trail of the given agreement.
   *
   * @param agreementId Id of the agreement.
   * @return Promise containing audit trail.
   * @throws ApiError
   */
  AgreementUtils.getAuditTrail = function(agreementId) {

    return agreementsApi.getAuditTrail(headers,
                                       agreementId)
                        .then(function(auditTrail) {
                          return auditTrail;
                        })
                        .catch(function(apiError) {
                          ApiUtils.logAndThrowError(Errors.GET_AUDIT_TRAIL, apiError);
                        });

  };

  /**
   * Saves the contents of all the document associated with a specified agreement in files.<br>
   * Note: The format of content can either be PDF or original, depending upon the format associated with ID.
   *
   * @param agreementId       The agreement ID.
   * @param documentId        The document ID
   * @return document
   * @throws ApiError
   */
  AgreementUtils.downloadDocuments = function(agreementId,
                                              documentId) {

    //Download and save the documents.
    return agreementsApi.getDocument(headers,
                                     agreementId,
                                     documentId)
                        .then(function(docStream) {
                          return docStream;
                        })
                        .catch(function(apiError) {
                          ApiUtils.logAndThrowError(Errors.SAVE_DOCUMENTS, apiError);
                        });

  };

  return AgreementUtils;
}));
