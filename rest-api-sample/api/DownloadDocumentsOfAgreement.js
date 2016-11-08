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
    module.exports = factory(require('../utils/FileUtils'), require('../utils/AgreementUtils'), require('../utils/Constants'), require('../utils/Errors'), require('../utils/ApiUtils'), require('path'));
  
}(function(FileUtils, AgreementUtils, Constants, Errors, ApiUtils, path) {
  'use strict';

  /**
   * This sample client demonstrates how to to download documents of the specified agreement.
   *
   * <p>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function DownloadDocumentsOfAgreement() {

    /**
     * Entry point for this sample client program.
     */
    var agreementId = null;

    ApiUtils.configureProperty(DownloadDocumentsOfAgreement.name);

    //Get agreement ID
    AgreementUtils.getAgreementId(Constants.AGREEMENT_NAME)
                  .then(function(agreementIdResponse) {
                    agreementId = agreementIdResponse;

                    //Fetch list of documents associated with the specified agreement.
                    return AgreementUtils.getAllDocuments(agreementId);
                  })
                  .then(function(agreementDocuments) {
                    var agreementDocumentsList = agreementDocuments.getDocuments();

                    var promises = [];
                    for (var i = 0; i < agreementDocumentsList.length; i++) {
                      var document = agreementDocumentsList[i];

                      //Download all the documents of the given agreement
                      promises.push(AgreementUtils.downloadDocuments(agreementId,
                                                                     document.getDocumentId())
                                                  .then(function(docStream) {

                                                    //Generate a running file name for storing locally.
                                                    var fileName = document.getName() + "_" + Date.now().toString() + ".pdf";

                                                    var agreementDocumentsFolderPath = path.join(ApiUtils.getOutputFolderPath(), Constants.AGREEMENT_DOCUMENT);

                                                    //Save the documents to file.
                                                    if (docStream != null) {
                                                      return FileUtils.saveToFile(docStream,
                                                                                  agreementDocumentsFolderPath,
                                                                                  fileName);
                                                    }
                                                  }));
                    }
                    return Promise.all(promises);
                  })
                  .catch(function(apiError) {
                    ApiUtils.logError(Errors.DOWNLOAD_DOCUMENT, apiError);
                  })

  })();

}));
