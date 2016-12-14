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
  root.AdobeSignSdk.TransientDocumentUtils = factory(root.AdobeSignSdk, root.AdobeSignSdk.Errors, root.AdobeSignSdk.ApiUtils, root.AdobeSignSdk.Constants);

}(this, function (AdobeSignSdk, Errors, ApiUtils, Constants) {
    'use strict';

    /**
     * Util functions related to transient document.
     */
    var TransientDocumentUtils = function () {
    };

    var transientDocumentsApi = new AdobeSignSdk.TransientDocumentsApi(ApiUtils.getContext());
    var headers = ApiUtils.getHeaderParams();

    var optKeys = {
        MIME_TYPE_KEY: "mimeType"
    };

    /**
     * Uploads a document and obtains the document ID.
     * The document uploaded through this call is referred to as transient since it is available only for 7 days after the upload.
     * The returned transient document ID can be used to refer to the document in api calls like create agreements where uploaded file needs to be referred.
     * The transient document request is a multipart request consisting of three parts - filename, mime type and the file stream.
     * You can only upload one file at a time in this request.
     * @param fileName name of the file
     * @param file File Object
     * @return TransientDocumentResponse
     */
    TransientDocumentUtils.createTransientDocument = function (fileName,
                                                               file) {

        var opts = {};
        opts[optKeys.MIME_TYPE_KEY] = Constants.MIME_TYPE_PDF;

        //Make API call to create transient document.
        return transientDocumentsApi.createTransientDocument(headers,
                                                             fileName,
                                                             file,
                                                             opts)
                                    .then(function (transientDocumentResponse) {
                                        return transientDocumentResponse;
                                    })
                                    .catch(function (apiError) {
                                        ApiUtils.logAndThrowError(Errors.CREATE_TRANSIENT_DOCUMENT, apiError);
                                    });

    };

    return TransientDocumentUtils;
}));
