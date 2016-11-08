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
    module.exports = factory(require('adobe-sign-sdk'), require('./Errors'), require('./ApiUtils'));
  
}(function(AdobeSignSdk, Errors, ApiUtils) {
  'use strict';

  /**
   * Util functions for library documents resource.
   */
  var LibraryDocumentUtils = function(){};

  var libraryDocumentsApi = new AdobeSignSdk.LibraryDocumentsApi(ApiUtils.getContext());
  var libraryDocumentsModel = AdobeSignSdk.LibraryDocumentsModel;
  var headers = ApiUtils.getHeaderParams();

  /**
   * Retrieves library documents for a user.
   *
   * @return DocumentLibraryItems
   */
  LibraryDocumentUtils.getLibraryDocuments = function () {
    return libraryDocumentsApi.getLibraryDocuments(headers)
                              .then(function(documentLibraryItems) {
                                return documentLibraryItems;
                              })
                              .catch(function(apiError) {
                                ApiUtils.logAndThrowError(Errors.GET_LIBRARY_DOCUMENTS, apiError);
                              });
  };

  /**
   * Returns library document id of first library document(shared or personal).
   *
   * @return String containing id of first library document(shared or personal).
   */
  LibraryDocumentUtils.getFirstLibraryDocumentId = function () {

   return LibraryDocumentUtils.getLibraryDocuments()
                              .then(function(documentLibraryItems) {
                                var documentLibraryItemList = documentLibraryItems.getLibraryDocumentList();

                                for (var i = 0; i < documentLibraryItemList.length; i++) {
                                  var documentLibraryItem = documentLibraryItemList[i];

                                  if (documentLibraryItem.getScope() === libraryDocumentsModel.DocumentLibraryItem.ScopeEnum.SHARED || documentLibraryItem.getScope() === libraryDocumentsModel.DocumentLibraryItem.ScopeEnum.PERSONAL) {
                                    return documentLibraryItem.getLibraryDocumentId();
                                  }
                                }
                                return null;
                              })
                              .catch(function(apiError) {
                                ApiUtils.logAndThrowError(Errors.GET_FIRST_LIBRARY_DOCUMENT, apiError);
                              });

  };

  return LibraryDocumentUtils;
}));
