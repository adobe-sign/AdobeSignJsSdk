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
    module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'));
  
}(function(SdkErrorCodes, ApiValidatorHelper) {
  'use strict';

  var AGREEMENT_ASSERT_EVENT_REQUEST = "agreementAssetEventRequest";

  /**
   * Validator for Search Api. The main purpose of this is to check the validity of the parameters passed to 
   * the search API and throw ApiError with required error messages if the validation fails.
   */
  var SearchApiValidator = function(){};

  /**
   * Validator for createAssetEvent API that creates a search object for agreement asset event.
   *
   * @param agreementAssetEventRequest Information about the Agreement Asset Events to be generated.
   * @param {Object}               opts Optional parameters
   * @throws ApiError
   */
  SearchApiValidator.createAssetEventValidator = function (agreementAssetEventRequest,
                                                           opts) {
    ApiValidatorHelper.validateParameter(agreementAssetEventRequest, SdkErrorCodes.MISSING_REQUIRED_PARAM, AGREEMENT_ASSERT_EVENT_REQUEST);

    ApiValidatorHelper.validateStartAndEndDatesParameter(agreementAssetEventRequest.getStartDate(),
                                                         agreementAssetEventRequest.getEndDate());
  };

  /**
   * Validator for getAssetEvent API that returns the result for the page which is described inside the Page Cursor Info.
   *
   * @param searchId    The search object identifier.
   * @param pageCursor  Page cursor of the page whose result will be fetched.
   * @param pageSize    Count of agreement asset events which will be returned in the response
   * @param {Object}    opts Optional parameters
   * @throws ApiError
   */
  SearchApiValidator.getAssetEventValidator = function (searchId,
                                                        pageCursor,
                                                        pageSize,
                                                        opts) {
    ApiValidatorHelper.validateId(searchId,
                                  SdkErrorCodes.INVALID_SEARCH_ID);
    var paramList = [];
    paramList.push({param: pageCursor, sdkErrorCode: SdkErrorCodes.INVALID_PAGE_CURSOR});
    ApiValidatorHelper.validateParameters(paramList);
  };
return SearchApiValidator;
}));