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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/agreements/AgreementsIndex'), require('../utils/validator/AgreementsApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, AgreementsIndex, AgreementsApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module AgreementsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new AgreementsApi. 
   * @alias module:AgreementsApi
   * @class
   */
  var AgreementsApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Retrieves agreements for the user.
     * @function getAgreements
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param {Object} opts Optional parameters
     * @param  {String} opts.query The query string used for the search. Multiple search terms can be provided, separated by spaces. Some of the search terms include document name, participant name or company, and form data
     * @param  {String} opts.externalId ExternalID for which you would like to retrieve agreement information. ExternalId is passed in the call to the agreement creation API
     * @param  {String} opts.externalGroup ExternalGroup for which you would like to retrieve agreement information. ExternalGroup is passed in the call to the agreement creation API. You must pass ExternalId if passing ExternalGroup parameter
     * @param  {String} opts.externalNamespace ExternalNameSpace for which you would like to retrieve agreement information. ExternalNameSpace is passed in the call to the agreement creation API. You must pass ExternalId if passing ExternalNameSpace parameter
     * @returns {Promise} A promise that returns {@link module:model/agreements/UserAgreements|UserAgreements} if resolved and apiError if rejected.
     * @instance
     */
    _this.getAgreements = function(headerParameters, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getAgreementsValidator(opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
        'query': opts['query'],
        'externalId': opts['externalId'],
        'externalGroup': opts['externalGroup'],
        'externalNamespace': opts['externalNamespace']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = AgreementsIndex.UserAgreements;

      return apiClient.callApi(
        '/agreements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Creates an agreement. Sends it out for signatures, and returns the agreementID in the response to the client.
     * @function createAgreement
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_send - If both authoringRequested and sendThroughWeb parameter are set to false agreement_write - If any of the authoringRequested or sendThroughWeb parameter is set to true user_login - Required additionally if the autoLoginUser parameter is set to true
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementCreationInfo  {module:model/agreements/AgreementCreationInfo}
         Information about the agreement that you want to send and authoring options that you want to apply at the time of sending.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/agreements/AgreementCreationResponse|AgreementCreationResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createAgreement = function(headerParameters, agreementCreationInfo, opts) {

      opts = opts || {};
      var postBody = agreementCreationInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.createAgreementValidator(agreementCreationInfo, opts);
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
      
      
      var returnType = AgreementsIndex.AgreementCreationResponse;

      return apiClient.callApi(
        '/agreements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the latest status of an agreement.
     * @function getAgreementInfo
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/agreements/AgreementInfo|AgreementInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getAgreementInfo = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getAgreementInfoValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
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
      
      
      var returnType = AgreementsIndex.AgreementInfo;

      return apiClient.callApi(
        '/agreements/{agreementId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Deletes an agreement. Agreement will no longer be visible in the Manage Page of the user.
     * @function deleteAgreement
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_retention
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @instance
     */
    _this.deleteAgreement = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.deleteAgreementValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
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
        '/agreements/{agreementId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the audit trail of an agreement identified by agreementid.
     * PDF file stream containing audit trail information
     * @function getAuditTrail
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/agreements/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getAuditTrail = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getAuditTrailValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
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
        '/agreements/{agreementId}/auditTrail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Gets a single combined PDF document for the documents associated with an agreement.
     * A File Stream of combined PDF document
     * @function getCombinedDocument
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @param  {String} opts.versionId The version identifier of agreement as provided by the API which retrieves information of a specific agreement. If not provided then latest version will be used.
     * @param  {String} opts.participantEmail The email address of the participant to be used to retrieve documents.
     * @param  {Boolean} opts.attachSupportingDocuments When set to true, attach corresponding supporting documents to the signed agreement PDF. Default value of this parameter is true.
     * @param  {Boolean} opts.auditReport When set to true, attach an audit report to the signed agreement PDF. Default value is false
     * @returns {Promise} A promise that returns {@link module:model/agreements/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getCombinedDocument = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getCombinedDocumentValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
      };
      var queryParams = {
        'versionId': opts['versionId'],
        'participantEmail': opts['participantEmail'],
        'attachSupportingDocuments': opts['attachSupportingDocuments'],
        'auditReport': opts['auditReport']
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
        '/agreements/{agreementId}/combinedDocument', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Retrieves info of all pages of a combined PDF document for the documents associated with an agreement.
     * @function getCombinedDocumentPagesInfo
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @param  {Boolean} opts.includeSupportingDocumentsPagesInfo When set to true, returns info of all pages of supporting documents as well. Else, return the info of pages of only the original document.
     * @returns {Promise} A promise that returns {@link module:model/agreements/CombinedDocumentPagesInfo|CombinedDocumentPagesInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getCombinedDocumentPagesInfo = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getCombinedDocumentPagesInfoValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
      };
      var queryParams = {
        'includeSupportingDocumentsPagesInfo': opts['includeSupportingDocumentsPagesInfo']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = AgreementsIndex.CombinedDocumentPagesInfo;

      return apiClient.callApi(
        '/agreements/{agreementId}/combinedDocument/pagesInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves url of all visible pages of all the documents associated with an agreement.
     * @function getCombinedDocumentUrl
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @param  {String} opts.versionId The version identifier of agreement as provided by the API which retrieves information of a specific agreement. If not provided then latest version will be used.
     * @param  {String} opts.participantEmail The email address of the participant to be used to retrieve its document url.
     * @param  {Boolean} opts.attachSupportingDocuments When set to true, attach corresponding supporting documents to the signed agreement PDF. Default value of this parameter is true.
     * @param  {Boolean} opts.auditReport When set to true, attach an audit report to the signed agreement PDF. Default value is false
     * @returns {Promise} A promise that returns {@link module:model/agreements/DocumentUrl|DocumentUrl} if resolved and apiError if rejected.
     * @instance
     */
    _this.getCombinedDocumentUrl = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getCombinedDocumentUrlValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
      };
      var queryParams = {
        'versionId': opts['versionId'],
        'participantEmail': opts['participantEmail'],
        'attachSupportingDocuments': opts['attachSupportingDocuments'],
        'auditReport': opts['auditReport']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = AgreementsIndex.DocumentUrl;

      return apiClient.callApi(
        '/agreements/{agreementId}/combinedDocument/url', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the IDs of all the main and supporting documents of an agreement identified by agreementid.
     * @function getAllDocuments
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @param  {String} opts.versionId The version identifier of agreement as provided by the API which retrieves information of a specific agreement. If not provided then latest version will be used.
     * @param  {String} opts.participantEmail The email address of the participant to be used to retrieve documents.
     * @param  {String} opts.supportingDocumentContentFormat Content format of the supported documents. It can have two possible values ORIGINAL or CONVERTED_PDF.
     * @returns {Promise} A promise that returns {@link module:model/agreements/AgreementDocuments|AgreementDocuments} if resolved and apiError if rejected.
     * @instance
     */
    _this.getAllDocuments = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getAllDocumentsValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
      };
      var queryParams = {
        'versionId': opts['versionId'],
        'participantEmail': opts['participantEmail'],
        'supportingDocumentContentFormat': opts['supportingDocumentContentFormat']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = AgreementsIndex.AgreementDocuments;

      return apiClient.callApi(
        '/agreements/{agreementId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Deletes all the documents of an agreement. Agreement will be visible in the Manage Page of the user.
     * @function deleteDocuments
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_retention
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @instance
     */
    _this.deleteDocuments = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.deleteDocumentsValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
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
        '/agreements/{agreementId}/documents', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves image urls of all visible pages of all the documents associated with an agreement.
     * @function getCombinedDocumentImageUrls
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @param  {String} opts.versionId The version identifier of agreement as provided by the API which retrieves information of a specific agreement. If not provided then latest version will be used.
     * @param  {String} opts.participantEmail The email address of the participant to be used to retrieve its visible document page image urls.
     * @param  {String} opts.imageSizes A comma separated list of image sizes i.e. (FIXED_WIDTH_50px, FIXED_WIDTH_250px, FIXED_WIDTH_675px, ZOOM_50_PERCENT, ZOOM_75_PERCENT, ZOOM_100_PERCENT, ZOOM_125_PERCENT, ZOOM_150_PERCENT, ZOOM_200_PERCENT). Default sizes returned are (FIXED_WIDTH_50px, FIXED_WIDTH_250px, FIXED_WIDTH_675px, ZOOM_100_PERCENT).
     * @param  {Boolean} opts.includeSupportingDocumentsImageUrls When set to true, returns image urls of supporting documents as well. Else, return image urls of only the original document.
     * @param  {Boolean} opts.showImageAvailabilityOnly When set to true, returns only image availability. Else, returns both image urls and its availability.
     * @returns {Promise} A promise that returns {@link module:model/agreements/DocumentImageUrls|DocumentImageUrls} if resolved and apiError if rejected.
     * @instance
     */
    _this.getCombinedDocumentImageUrls = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getCombinedDocumentImageUrlsValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
      };
      var queryParams = {
        'versionId': opts['versionId'],
        'participantEmail': opts['participantEmail'],
        'imageSizes': opts['imageSizes'],
        'includeSupportingDocumentsImageUrls': opts['includeSupportingDocumentsImageUrls'],
        'showImageAvailabilityOnly': opts['showImageAvailabilityOnly']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = AgreementsIndex.DocumentImageUrls;

      return apiClient.callApi(
        '/agreements/{agreementId}/documents/imageUrls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the file stream of a document of an agreement.
     * Raw stream of the file
     * @function getDocument
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param documentId  {module:model/agreements/String}
         The document identifier, as retrieved from the API which fetches the documents of a specified agreement
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/agreements/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getDocument = function(headerParameters, agreementId, documentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getDocumentValidator(agreementId, documentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId,
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
        '/agreements/{agreementId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Retrieves image urls of all visible pages of a document associated with an agreement.
     * @function getDocumentImageUrls
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param documentId  {module:model/agreements/String}
         The document identifier, as retrieved from the API which fetches the documents of a specified agreement
     * @param {Object} opts Optional parameters
     * @param  {String} opts.versionId The version identifier of agreement as provided by the API which retrieves information of a specific agreement. If not provided then latest version will be used.
     * @param  {String} opts.participantEmail The email address of the participant to be used to retrieve its visible document page image urls.
     * @param  {String} opts.imageSizes A comma separated list of image sizes i.e. (FIXED_WIDTH_50px, FIXED_WIDTH_250px, FIXED_WIDTH_675px, ZOOM_50_PERCENT, ZOOM_75_PERCENT, ZOOM_100_PERCENT, ZOOM_125_PERCENT, ZOOM_150_PERCENT, ZOOM_200_PERCENT). Default sizes returned are (FIXED_WIDTH_50px, FIXED_WIDTH_250px, FIXED_WIDTH_675px, ZOOM_100_PERCENT).
     * @param  {Boolean} opts.showImageAvailabilityOnly When set to true, returns only image availability. Else, returns both image urls and its availability.
     * @param  {Integer} opts.startPage Start of page number range for which imageUrls are requested. Starting page number should be greater than 0.
     * @param  {Integer} opts.endPage End of page number range for which imageUrls are requested.
     * @returns {Promise} A promise that returns {@link module:model/agreements/DocumentImageUrl|DocumentImageUrl} if resolved and apiError if rejected.
     * @instance
     */
    _this.getDocumentImageUrls = function(headerParameters, agreementId, documentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getDocumentImageUrlsValidator(agreementId, documentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId,
        'documentId': documentId
      };
      var queryParams = {
        'versionId': opts['versionId'],
        'participantEmail': opts['participantEmail'],
        'imageSizes': opts['imageSizes'],
        'showImageAvailabilityOnly': opts['showImageAvailabilityOnly'],
        'startPage': opts['startPage'],
        'endPage': opts['endPage']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = AgreementsIndex.DocumentImageUrl;

      return apiClient.callApi(
        '/agreements/{agreementId}/documents/{documentId}/imageUrls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the url of the document
     * @function getDocumentUrl
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param documentId  {module:model/agreements/String}
         The document identifier, as retrieved from the API which fetches the documents of a specified agreement
     * @param {Object} opts Optional parameters
     * @param  {String} opts.versionId The version identifier of agreement as provided by the API which retrieves information of a specific agreement. If not provided then latest version will be used.
     * @param  {String} opts.participantEmail The email address of the participant to be used to retrieve its document url.
     * @returns {Promise} A promise that returns {@link module:model/agreements/DocumentUrl|DocumentUrl} if resolved and apiError if rejected.
     * @instance
     */
    _this.getDocumentUrl = function(headerParameters, agreementId, documentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getDocumentUrlValidator(agreementId, documentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId,
        'documentId': documentId
      };
      var queryParams = {
        'versionId': opts['versionId'],
        'participantEmail': opts['participantEmail']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = AgreementsIndex.DocumentUrl;

      return apiClient.callApi(
        '/agreements/{agreementId}/documents/{documentId}/url', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves data entered by the user into interactive form fields at the time they signed the agreement
     * CSV file stream containing form data information
     * @function getFormData
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/agreements/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getFormData = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getFormDataValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
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
      var accepts = ['text/csv'];
      
      var returnType ='Uint8Array';
      
      return apiClient.callApi(
        '/agreements/{agreementId}/formData', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Creates a new alternate participant
     * @function createAlternateParticipant
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param participantSetId  {module:model/agreements/String}
         The participant set identifier
     * @param participantId  {module:model/agreements/String}
         The participant identifier
     * @param alternateParticipantInfo  {module:model/agreements/AlternateParticipantInfo}
         Information about the alternate participant
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/agreements/AlternateParticipantResponse|AlternateParticipantResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createAlternateParticipant = function(headerParameters, alternateParticipantInfo, agreementId, participantSetId, participantId, opts) {

      opts = opts || {};
      var postBody = alternateParticipantInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.createAlternateParticipantValidator(alternateParticipantInfo, agreementId, participantSetId, participantId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId,
        'participantSetId': participantSetId,
        'participantId': participantId
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
      
      
      var returnType = AgreementsIndex.AlternateParticipantResponse;

      return apiClient.callApi(
        '/agreements/{agreementId}/participantSets/{participantSetId}/participants/{participantId}/alternateParticipants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the URL for the e-sign page for the current signer(s) of an agreement.
     * @function getSigningUrl
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/agreements/SigningUrlResponse|SigningUrlResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.getSigningUrl = function(headerParameters, agreementId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.getSigningUrlValidator(agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
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
      
      
      var returnType = AgreementsIndex.SigningUrlResponse;

      return apiClient.callApi(
        '/agreements/{agreementId}/signingUrls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Cancels an agreement.
     * @function updateStatus
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: agreement_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param agreementId  {module:model/agreements/String}
         The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.
     * @param agreementStatusUpdateInfo  {module:model/agreements/AgreementStatusUpdateInfo}
         Agreement status update information object.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/agreements/AgreementStatusUpdateResponse|AgreementStatusUpdateResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.updateStatus = function(headerParameters, agreementStatusUpdateInfo, agreementId, opts) {

      opts = opts || {};
      var postBody = agreementStatusUpdateInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        AgreementsApiValidator.updateStatusValidator(agreementStatusUpdateInfo, agreementId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'agreementId': agreementId
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
      
      
      var returnType = AgreementsIndex.AgreementStatusUpdateResponse;

      return apiClient.callApi(
        '/agreements/{agreementId}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return AgreementsApi;
}));
