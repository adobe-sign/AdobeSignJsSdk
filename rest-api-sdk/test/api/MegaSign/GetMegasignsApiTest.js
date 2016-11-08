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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/MegaSignUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, MegaSignUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for for GetMegaSigns API.
     */
    describe('GetMegasignInfoApiTest', function () {

        var assert = chai.assert;
        var megaSignApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            megaSignApi = MegaSignUtils.getMegaSignsApi();
            done();
        });

        /**
         * Test for fetching all megaSign parent agreement through the getMegaSignsApi.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testMegaSigns', function (done) {
            var opts = {};
            megaSignApi.getMegaSigns(ApiUtils.getValidHeaderParams(),
                                     TestData.MEGASIGN_QUERY,
                                     opts)
                       .then(function (megaSignIdResponse) {
                           assert.isNotNull(megaSignIdResponse);
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       });

        });

        /**
         * Test for fetching all megaSign parent agreement through the getMegaSignsApi. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSigns(ApiUtils.getNullAccessTokenHeaderParams(),
                                     TestData.MEGASIGN_QUERY,
                                     opts)
                       .then(function (megaSigns) {
                           assert.isNotNull(megaSigns);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       });

        });

        /**
         * Test for fetching all megaSign parent agreement through the getMegaSignsApi. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            megaSignApi.getMegaSigns(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                     TestData.MEGASIGN_QUERY,
                                     opts)
                       .then(function (megaSigns) {
                           assert.isNotNull(megaSigns);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       });

        });

        /**
         * Test for fetching all megaSign parent agreement through the getMegaSignsApi. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            megaSignApi.getMegaSigns(ApiUtils.getEmptyXApiUserHeaderParams(),
                                     TestData.MEGASIGN_QUERY,
                                     opts)
                       .then(function (megaSigns) {
                           assert.isNotNull(megaSigns);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                       });

        });

    });

}));
