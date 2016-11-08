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
        module.exports = factory(require('adobe-sign-sdk'), require('./Errors'), require('./ApiUtils'), require('./Constants'), require('path'), require('fs'));

}(function (AdobeSignSdk, Errors, ApiUtils, Constants, path, fs) {
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
     * @param dirName name of the directory containing the file
     * @param fileName name of the file
     * @return TransientDocumentResponse
     */
    TransientDocumentUtils.createTransientDocument = function (dirName,
                                                               fileName) {

        //Get absolute Path to the file to be uploaded to Adobe Sign.
        var absoluteFilePath = path.join(dirName,
                                         fileName);

        var fileBytes = fs.readFileSync(absoluteFilePath);
        var buffer = new Buffer(fileBytes);

        var opts = {};
        opts[optKeys.MIME_TYPE_KEY] = Constants.MIME_TYPE_PDF;

        //Make API call to create transient document.
        return transientDocumentsApi.createTransientDocument(headers,
                                                             fileName,
                                                             buffer,
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
