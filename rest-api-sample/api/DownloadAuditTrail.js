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
    module.exports = factory(require('../utils/AgreementUtils'), require('../utils/Constants'), require('../utils/Errors'), require('../utils/ApiUtils'), require('../utils/FileUtils'), require('path'));
  
}(function(AgreementUtils, Constants, Errors, ApiUtils, FileUtils, path) {
  'use strict';

  /**
   * This sample client demonstrates how to to download audit trail of the specified agreement.
   *
   * <p>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function DownloadAuditTrail() {

    /**
     * Entry point for this sample client program.
     */
    var agreementName = null;

    ApiUtils.configureProperty(DownloadAuditTrail.name);
    var agreementId = null;

    //Get agreement id.
    AgreementUtils.getAgreementId(Constants.AGREEMENT_NAME)
                  .then(function(agreementIdResponse) {
                    agreementId = agreementIdResponse;
                    return AgreementUtils.getAgreementInfo(agreementId);
                  })
                  .then(function(agreementInfo) {

                    //Display name of the agreement associated with the specified agreement ID.
                    agreementName = agreementInfo.getName();
                    ApiUtils.info("Agreement name: " + agreementName);

                    //Make API call to get audit trail of this agreement.
                    return AgreementUtils.getAuditTrail(agreementId);
                  })
                  .then(function(auditStream) {

                    //Generate a running file name for storing locally.
                    var fileName = agreementName + "_" + Date.now().toString() + ".pdf";

                    var auditTrailFolderPath = path.join(ApiUtils.getOutputFolderPath(), Constants.AUDIT_TRAIL);

                    //Save audit stream to file
                    if(auditStream) {
                      return FileUtils.saveToFile(auditStream,
                                                  auditTrailFolderPath,
                                                  fileName);
                    }
                  })
                  .catch(function(apiError){
                    ApiUtils.logError(Errors.DOWNLOAD_AUDIT_TRAIL, apiError);
                  });
    
  })();

}));

