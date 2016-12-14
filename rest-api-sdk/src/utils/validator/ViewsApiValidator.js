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
    module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'), require('../StringUtil'));
  
}(function(SdkErrorCodes, ApiValidatorHelper, StringUtil) {
  'use strict';

  var TARGET_VIEW_REQUEST = "targetViewRequest";
  var AGREEMENT_ASSET_REQUEST = "agreementAssetRequest";

  /**
   * Validator for Views Api. The main purpose of this is to check the validity of the parameters passed to
   * the Views API and throw ApiException with required error messages if the validation fails.
   */
  var  ViewsApiValidator = function(){};
  
  /**
   * Validator for getAgreementAssetListUrl API that returns the URL for manage page.
   *
   * @param opts optional params with agreementAssetListRequest Information about the type of url to be generated for Manage Page body.
   * @throws ApiError
   */
  ViewsApiValidator.createAgreementAssetListUrlValidator = function(opts) {
    var agreementAssetListRequest = opts.agreementAssetListRequest;
    if (!StringUtil.isNullOrUndefined(agreementAssetListRequest) && !StringUtil.isNullOrUndefined(agreementAssetListRequest.getAgreementAssetId()))
    {
      var paramList = [];
      paramList.push({param: agreementAssetListRequest.getAgreementAssetId(), sdkErrorCode: SdkErrorCodes.INVALID_AGREEMENT_ASSET_ID});
      ApiValidatorHelper.validateParameters(paramList);
    }
  };

  /**
   * Validator for getAgreementAssetUrl API that returns the URL which shows the view page of given agreement asset.
   *
   * @param agreementAssetRequest Information about the type of url to be generated for agreement asset page.
   * @param opts                  optional params
   * @throws ApiError
   */
  ViewsApiValidator.createAgreementAssetUrlValidator = function(agreementAssetRequest,
                                                                opts) {
    ApiValidatorHelper.validateParameter(agreementAssetRequest, SdkErrorCodes.MISSING_REQUIRED_PARAM, AGREEMENT_ASSET_REQUEST);
    var paramList = [];
    paramList.push({param: agreementAssetRequest.getAgreementAssetId(), sdkErrorCode: SdkErrorCodes.INVALID_AGREEMENT_ASSET_ID});
    ApiValidatorHelper.validateParameters(paramList);
  };

  /**
   * Validator for getSettingsUrl API that returns the URL for settings page.
   *
   * @param targetViewRequest Information about the type of url to be generated for various Settings page.
   * @param opts              optional params
   * @throws ApiError
   */
  ViewsApiValidator.createSettingsUrlValidator = function(targetViewRequest,
                                                          opts) {
    ApiValidatorHelper.validateParameter(targetViewRequest, SdkErrorCodes.MISSING_REQUIRED_PARAM, TARGET_VIEW_REQUEST);
    var paramList = [];
    paramList.push({param: targetViewRequest.getTargetView(), sdkErrorCode: SdkErrorCodes.INVALID_TARGET_VIEW});
    ApiValidatorHelper.validateParameters(paramList);
  };

return ViewsApiValidator;
}));