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
 */

(function (factory) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../../src/index'), require('../../utils/TestData'), require('../../utils/MegaSignUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (AdobeSignSdk, TestData, MegaSignUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for UpdateMegaSigns APIs.
     */
    describe('UpdateMegaSignsApiTest', function () {

        var assert = chai.assert;
        var megaSignApi = null;
        var megaSignsModel = AdobeSignSdk.MegaSignsModel;

        var megaSignId = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            megaSignApi = MegaSignUtils.getMegaSignsApi();
            MegaSignUtils.getResourceId(ApiUtils.getMegaSignName())
                         .then(function (megaSignIdResponse) {
                             megaSignId = megaSignIdResponse;
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });
        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testUpdateStatus', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getNullAccessTokenHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getEmptyXApiUserHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: null megaSignId.
         *
         * @throws ApiError
         */
        it('testNullMegaSignId', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             TestData.NULL_PARAM,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_MEGASIGN_ID: empty megaSignId.
         *
         * @throws ApiError
         */
        it('testEmptyMegaSignId', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(megaSignsModel.MegaSignStatusUpdateInfo.ValueEnum.CANCEL);

            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             TestData.EMPTY_PARAM,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_ID) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * INVALID_MEGASIGN_STATUS: invalid updateInfo status.
         *
         * @throws ApiError
         */
        it('testInvalidMegaSignStatus', function (done) {
            var opts = {};
            var megaSignStatusUpdateInfo = MegaSignUtils.getMegaSignStatusUpdateInfo(TestData.NULL_PARAM);

            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             megaSignStatusUpdateInfo,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_MEGASIGN_STATUS) ? done() : done(apiError);
                       });

        });

        /**
         * Test for cancelling all the child agreements of the specified megaSign agreement through the updateMegaSignStatus api. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: null updateInfo object.
         *
         * @throws ApiError
         */
        it('testInvalidMegaSignStatusUpdateInfo', function (done) {
            var opts = {};
            megaSignApi.updateMegaSignStatus(ApiUtils.getValidHeaderParams(),
                                             TestData.NULL_PARAM,
                                             megaSignId,
                                             opts)
                       .then(function (megaSignStatusUpdateResponse) {
                           assert.isNotNull(megaSignStatusUpdateResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                       });

        });

    });

}));
