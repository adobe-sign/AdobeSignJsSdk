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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/libraryDocuments/LibraryDocumentsIndex'), require('../utils/validator/LibraryDocumentsApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, LibraryDocumentsIndex, LibraryDocumentsApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module LibraryDocumentsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new LibraryDocumentsApi. 
   * @alias module:LibraryDocumentsApi
   * @class
   */
  var LibraryDocumentsApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Retrieves library documents for a user.
     * @function getLibraryDocuments
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: library_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/libraryDocuments/DocumentLibraryItems|DocumentLibraryItems} if resolved and apiError if rejected.
     * @instance
     */
    _this.getLibraryDocuments = function(headerParameters, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        LibraryDocumentsApiValidator.getLibraryDocumentsValidator(opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = LibraryDocumentsIndex.DocumentLibraryItems;

      return apiClient.callApi(
        '/libraryDocuments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Creates a template that is placed in the library of the user for reuse.
     * @function createLibraryDocument
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: library_write user_login - Required additionally if the autoLoginUser parameter is set to true
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param libraryCreationInfo  {module:model/libraryDocuments/LibraryCreationInfo}
         Information about the library document that you want to create and authoring options that you want to apply at the time of creation.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/libraryDocuments/LibraryDocumentCreationResponse|LibraryDocumentCreationResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createLibraryDocument = function(headerParameters, libraryCreationInfo, opts) {

      opts = opts || {};
      var postBody = libraryCreationInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        LibraryDocumentsApiValidator.createLibraryDocumentValidator(libraryCreationInfo, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = LibraryDocumentsIndex.LibraryDocumentCreationResponse;

      return apiClient.callApi(
        '/libraryDocuments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the details of a library document.
     * @function getLibraryDocumentInfo
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: library_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param libraryDocumentId  {module:model/libraryDocuments/String}
         The document identifier, as retrieved from the API to fetch library documents.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/libraryDocuments/LibraryDocumentInfo|LibraryDocumentInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getLibraryDocumentInfo = function(headerParameters, libraryDocumentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        LibraryDocumentsApiValidator.getLibraryDocumentInfoValidator(libraryDocumentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'libraryDocumentId': libraryDocumentId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = LibraryDocumentsIndex.LibraryDocumentInfo;

      return apiClient.callApi(
        '/libraryDocuments/{libraryDocumentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Deletes a library document. Library document will no longer be visible in the Manage Page of the user.
     * This API will delete the library document. However, the agreements created using this library document will not be impacted.
     * @function deleteLibraryDocument
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: library_retention
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param libraryDocumentId  {module:model/libraryDocuments/String}
         The document identifier, as retrieved from the API to fetch library documents.
     * @param {Object} opts Optional parameters
     * @instance
     */
    _this.deleteLibraryDocument = function(headerParameters, libraryDocumentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        LibraryDocumentsApiValidator.deleteLibraryDocumentValidator(libraryDocumentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'libraryDocumentId': libraryDocumentId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = null;

      return apiClient.callApi(
        '/libraryDocuments/{libraryDocumentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the audit trail associated with a library document.
     * File Stream of PDF file
     * @function getLibraryDocumentAuditTrail
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: library_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param libraryDocumentId  {module:model/libraryDocuments/String}
         The document identifier, as retrieved from the API to fetch library documents.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/libraryDocuments/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getLibraryDocumentAuditTrail = function(headerParameters, libraryDocumentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        LibraryDocumentsApiValidator.getLibraryDocumentAuditTrailValidator(libraryDocumentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'libraryDocumentId': libraryDocumentId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/pdf'];
      
      var returnType ='Uint8Array';
      
      return apiClient.callApi(
        '/libraryDocuments/{libraryDocumentId}/auditTrail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Retrieves the combined document associated with a library document.
     * File Stream of PDF file
     * @function getCombinedDocument
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: library_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param libraryDocumentId  {module:model/libraryDocuments/String}
         The document identifier, as retrieved from the API to fetch library documents.
     * @param {Object} opts Optional parameters
     * @param  {Boolean} opts.auditReport When set to YES attach an audit report to the library document PDF. Default value will be false.
     * @returns {Promise} A promise that returns {@link module:model/libraryDocuments/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getCombinedDocument = function(headerParameters, libraryDocumentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        LibraryDocumentsApiValidator.getCombinedDocumentValidator(libraryDocumentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'libraryDocumentId': libraryDocumentId
      };
      var queryParams = {
        'auditReport': opts['auditReport']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/pdf'];
      
      var returnType ='Uint8Array';
      
      return apiClient.callApi(
        '/libraryDocuments/{libraryDocumentId}/combinedDocument', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Retrieves the ID of the document associated with library document.
     * @function getDocuments
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: library_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param libraryDocumentId  {module:model/libraryDocuments/String}
         The document identifier, as retrieved from the API to fetch library documents.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/libraryDocuments/Documents|Documents} if resolved and apiError if rejected.
     * @instance
     */
    _this.getDocuments = function(headerParameters, libraryDocumentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        LibraryDocumentsApiValidator.getDocumentsValidator(libraryDocumentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'libraryDocumentId': libraryDocumentId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = LibraryDocumentsIndex.Documents;

      return apiClient.callApi(
        '/libraryDocuments/{libraryDocumentId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the file stream of a library document.
     * Raw stream of the file
     * @function getLibraryDocument
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: library_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param libraryDocumentId  {module:model/libraryDocuments/String}
         The document identifier, as retrieved from the API to fetch library documents.
     * @param documentId  {module:model/libraryDocuments/String}
         The document identifier, as retrieved from the API which fetches the documents of a specified library document
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/libraryDocuments/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getLibraryDocument = function(headerParameters, libraryDocumentId, documentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        LibraryDocumentsApiValidator.getLibraryDocumentValidator(libraryDocumentId, documentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'libraryDocumentId': libraryDocumentId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = [' */* '];
      
      var returnType ='Uint8Array';
      
      return apiClient.callApi(
        '/libraryDocuments/{libraryDocumentId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };
  };

  return LibraryDocumentsApi;
}));
