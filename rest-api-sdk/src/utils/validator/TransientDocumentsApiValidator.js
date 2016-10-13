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
        module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'),require('../ApiError'));

}(function(SdkErrorCode, ApiValidatorHelper, ApiError) {
    'use strict';

    /**
     * Validator for TransientDocuments Api. The main purpose of this is to check the validity of the
     * parameters passed to the transientDocuments API and throw ApiError with required error messages if the validation fails.
     */
    var TransientDocumentsApiValidator = function(){};

    /**
     * Validator for createTransientDocument API that Uploads a document and obtains the document's ID.
     *
     * @param file              The uploaded file.
     * @param {Object}          opts Optional parameters
     * @param opts.fileName     Name of the uploaded file.
     * @throws ApiError
     */
    TransientDocumentsApiValidator.createTransientDocumentValidator = function(fileName,
                                                                               file,
                                                                               opts) {
        var list = [];
        list.push({param: fileName, sdkErrorCode: SdkErrorCode.NO_FILE_NAME});
        list.push({param: file, sdkErrorCode: SdkErrorCode.NO_FILE_CONTENT});

        ApiValidatorHelper.validateParameters(list);

        var extensionPos = fileName.lastIndexOf('.');
        if(extensionPos < 0 && !opts.mimeType){
            throw new ApiError(SdkErrorCode.NO_MEDIA_TYPE);
        }
    };
    return TransientDocumentsApiValidator;
}));