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
    module.exports = factory(require('../utils/AgreementUtils'), require('../utils/Constants'), require('../utils/Errors'), require('../utils/ApiUtils'));
  
}(function(AgreementUtils, Constants, Errors, ApiUtils) {
  'use strict';

  /**
   * This sample client demonstrates how to get the signing url for an agreement of the user.
   *
   * <p>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function GetSigningUrl() {

    /**
     * Entry point for this sample client program.
     */
    ApiUtils.configureProperty(GetSigningUrl.name);

    //Get agreement id.
    AgreementUtils.getAgreementId(Constants.AGREEMENT_NAME)
                  .then(function(agreementId) {
                    return AgreementUtils.getSigningUrl(agreementId);
                  })
                  .then(function(signingUrlSetInfos) {
                    for (var i = 0; i < signingUrlSetInfos.length; i++) {
                      var signingUrls = signingUrlSetInfos[i].getSigningUrls();
                      for (var j = 0; j < signingUrls.length; j++) {
                        var signingUrl = signingUrls[j];
                        ApiUtils.info("Signing url: " + signingUrl.getEsignUrl());
                      }
                    }
                  })
                  .catch(function(apiError){
                    ApiUtils.logError(Errors.GET_SIGNING_URL, apiError);
                  });
  })();

}));
