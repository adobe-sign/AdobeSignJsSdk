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
        module.exports = factory(require('../../src/index'), require('./ApiUtils'), require('./TestData'));
    
}(function (AdobeSignSdk, ApiUtils, TestData) {
    'use strict';
    /**
     * This file contains basic utility functions which will be used by the Search API Tests.
     */
    var SearchUtils = function () {
    };

    var searchApi = new AdobeSignSdk.SearchApi(ApiUtils.getContext());
    var searchModel = AdobeSignSdk.SearchModel;

    var searchId = null;
    var pageCursor = null;

    var optKeys = {
        PAGE_SIZE_KEY: "pageSize"
    };

    SearchUtils.getSearchApi = function () {
        return searchApi;
    };

    SearchUtils.getPageCursor = function () {
        return pageCursor;
    };

    SearchUtils.createSearch = function (startDate,
                                         endDate) {
        var request = SearchUtils.getAgreementAssetEventRequest(startDate,
                                                                endDate);
        return searchApi.createAssetEvent(ApiUtils.getValidHeaderParams(),
                                          request)
                        .then(function (response) {
                            searchId = response.getSearchId();
                            pageCursor = response.getCurrentPageCursor();
                            return searchId;
                        })
                        .catch(ApiUtils.throwError);
    };

    SearchUtils.getResourceId = function () {
        return SearchUtils.createSearch(ApiUtils.getDate(TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE),
                                        ApiUtils.getDate(TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE));
    };

    SearchUtils.getAgreementAssetEventRequest = function (startDate,
                                                          endDate) {
        var request = new searchModel.AgreementAssetEventRequest();
        request.setStartDate(startDate);
        request.setEndDate(endDate);
        return request;
    };

    SearchUtils.getOptsWithPageSize = function (pageSize) {
        var opts = {};
        opts[optKeys.PAGE_SIZE_KEY] = pageSize;
        return opts;
    };


    return SearchUtils;
}));

