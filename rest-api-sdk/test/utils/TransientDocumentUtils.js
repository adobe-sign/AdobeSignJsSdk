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
        module.exports = factory(require('../../src/index'), require('../utils/TestData'), require('./ApiUtils'), require('path'), require('fs'));

}(function (AdobeSignSdk, TestData, ApiUtils, path, fs) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the TransientDocument API Tests.
     */
    var TransientDocumentUtils = function () {
    };
    var transientDocumentsApi = new AdobeSignSdk.TransientDocumentsApi(ApiUtils.getContext());

    var optKeys = {
        MIME_TYPE_KEY: "mimeType"
    };
    //Helper method that returns TransientDocumentsApi
    TransientDocumentUtils.getTransientDocumentsApi = function () {
        return transientDocumentsApi;
    };

    //Helper method that returns absolute path of a file
    TransientDocumentUtils.getFileAbsolutePath = function (dirName, fileName) {
        return path.join(dirName, fileName);
    };

    //Helper method that returns json of optional parameters with mimeType
    TransientDocumentUtils.getOptsWithMimeType = function (mimeType) {
        var opts = {};
        opts[optKeys.MIME_TYPE_KEY] = mimeType;
        return opts;
    };

    //Helper method that returns buffer stream of the file specified at the location in CommonJS environment & File Object set in window for browser.
    TransientDocumentUtils.getFile = function (fileName) {
        if (typeof window === 'undefined') {
            var absoluteFilePath = TransientDocumentUtils.getFileAbsolutePath(ApiUtils.getResourcesFolderPath(),
                                                                              fileName);
            var fileBytes = fs.readFileSync(absoluteFilePath);
            var buffer = new Buffer(fileBytes);
            return buffer;

        } else {
            if (AdobeSignSdk.TestFile) {
                return AdobeSignSdk.TestFile;
            }
        }
        return null;

    };

    //Helper method that creates the Transient Document
    TransientDocumentUtils.createTransientDocumentResource = function (transientDocumentName) {

        var absoluteFilePath = TransientDocumentUtils.getFileAbsolutePath(TestData.REQUEST_PATH, TestData.SAMPLE_FILE);
        var opts = {};
        opts[optKeys.MIME_TYPE_KEY] = TestData.VALID_MIME;
        return transientDocumentsApi.createTransientDocument(ApiUtils.getValidHeaderParams(),
                                                             transientDocumentName,
                                                             TransientDocumentUtils.getFile(TestData.SAMPLE_FILE),
                                                             opts)
                                    .catch(ApiUtils.throwError);
    };

    return TransientDocumentUtils;
}));
