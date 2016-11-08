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
    module.exports = factory(require('../utils/AgreementUtils'), require('../utils/BaseUriUtils'), require('../utils/Constants'), require('../utils/Errors'), require('../utils/ApiUtils'));
  
}(function(AgreementUtils, BaseUriUtils, Constants, Errors, ApiUtils) {
  'use strict';

  /**
   * This sample client demonstrates how to get status of all the agreements of a user.
   *
   * <p>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function GetStatusOfAgreements() {

    /**
     * Entry point for this sample client program.
     */

    ApiUtils.configureProperty(GetStatusOfAgreements.name);

    // Set the number of agreements for which status is to be logged.
    var agreementCountLimit = Constants.AGREEMENT_COUNT_LIMIT;

    BaseUriUtils.setBaseUri()
                .then(function() {
                  //Make API call to get all the agreements of a user.
                  return AgreementUtils.getAllAgreements();
                })
                .then(function(userAgreements) {

                  //Display details of each agreement.
                  var userAgreementList = userAgreements.getUserAgreementList();
                  for (var i = 0; i < userAgreementList.length; i++) {
                    if (agreementCountLimit === 0) {
                      break;
                    }

                    //Display agreement details
                    ApiUtils.info("Agreement ID = " + userAgreementList[i].getAgreementId());
                    ApiUtils.info("Agreement Name = " + userAgreementList[i].getName());
                    ApiUtils.info("Agreement Status = " + userAgreementList[i].getStatus());

                    agreementCountLimit--;
                  }
                })
                .catch(function(apiError) {
                  ApiUtils.logError(Errors.GET_AGREEMENT_STATUS,
                                    apiError);
                })

  })();

}));
