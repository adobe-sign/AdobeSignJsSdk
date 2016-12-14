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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/transientDocuments/TransientDocumentsIndex'), require('../utils/validator/TransientDocumentsApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, TransientDocumentsIndex, TransientDocumentsApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module TransientDocumentsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new TransientDocumentsApi. 
   * @alias module:TransientDocumentsApi
   * @class
   */
  var TransientDocumentsApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Uploads a document and obtains the ID of the document.
     * The document uploaded through this call is referred to as transient since it is available only for 7 days after the upload. The returned transient document ID can be used to refer to the document in api calls like POST /agreements where uploaded file needs to be referred. The transient document request is a multipart request consisting of three parts - filename, mime type and the file stream. You can only upload one file at a time in this request.
     * @function createTransientDocument
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with any of the following scopes: agreement_write agreement_send widget_write library_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param fileName  {module:model/transientDocuments/String}
         A name for the document being uploaded.
     * @param file  {module:model/transientDocuments/File}
         The file part of the multipart request for document upload. You can upload only one file at a time.
     * @param {Object} opts Optional parameters
     * @param  {String} opts.mimeType The mime type of the document being uploaded. If not specified here then mime type is picked up from the file object. If mime type is not present there either then mime type is inferred from file name extension.
     * @returns {Promise} A promise that returns {@link module:model/transientDocuments/TransientDocumentResponse|TransientDocumentResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createTransientDocument = function(headerParameters, fileName, file, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        TransientDocumentsApiValidator.createTransientDocumentValidator(fileName, file, opts);
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
        'File-Name': fileName,
        'Mime-Type': opts['mimeType'],
        'File': file
      };

      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      
      
      var returnType = TransientDocumentsIndex.TransientDocumentResponse;

      return apiClient.callApi(
        '/transientDocuments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return TransientDocumentsApi;
}));
