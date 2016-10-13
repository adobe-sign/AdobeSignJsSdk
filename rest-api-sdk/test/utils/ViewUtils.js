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
        module.exports = factory(require('../../src/index'), require('./ApiUtils'));
    
}(function (AdobeSignSdk, ApiUtils) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the Views API Tests.
     */
    var ViewUtils = function () {
    };

    var viewsApi = new AdobeSignSdk.ViewsApi(ApiUtils.getContext());
    var viewsModel = AdobeSignSdk.ViewsModel;

    var optKeys = {
        AGREEMENT_ASSET_LIST_REQUEST_KEY: "agreementAssetListRequest"
    };

    ViewUtils.getViewsApi = function () {
        return viewsApi;
    };

    ViewUtils.getOptionsWithDefaultAgreementAssetListRequest = function () {
        var opts = {};
        opts[optKeys.AGREEMENT_ASSET_LIST_REQUEST_KEY] = new viewsModel.AgreementAssetListRequest();
        return opts;
    };

    ViewUtils.getAgreementAssetRequest = function (libraryDocumentId) {
        var agreementAssetRequest = new viewsModel.AgreementAssetRequest();
        agreementAssetRequest.setAgreementAssetId(libraryDocumentId);
        return agreementAssetRequest;
    };

    ViewUtils.getTargetViewRequest = function (targetViewEnum) {
        var targetViewRequest = new viewsModel.TargetViewRequest();
        targetViewRequest.setTargetView(targetViewEnum);
        return targetViewRequest;
    };

    return ViewUtils;

}));

