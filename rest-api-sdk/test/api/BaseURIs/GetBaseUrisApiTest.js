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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/BaseUriUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, BaseUriUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for GetBaseUrisApi.
     */
    describe('BaseUrisApiTest', function () {

        var assert = chai.assert;
        var baseUrisApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            baseUrisApi = BaseUriUtils.getBaseUrisApi();
            done();
        });

        /**
         * Test for getting base uris through the getBaseUris.
         * Case covered is successful execution of the API call.
         *
         * @throws ApiError
         */
        it('testGetBaseUri', function (done) {
            baseUrisApi.getBaseUris(ApiUtils.getValidHeaderParams())
                       .then(function (baseUriInfo) {
                           assert.isNotNull(baseUriInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           done(apiError);
                       })
        });

        /**
         * Test for retrieving the base uri to access other APIs through the getBaseUris. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            baseUrisApi.getBaseUris(ApiUtils.getNullAccessTokenHeaderParams())
                       .then(function (baseUriInfo) {
                           assert.isNotNull(baseUriInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                       })
        });

        /**
         * Test for retrieving the base uri to access other APIs through the getBaseUris. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            baseUrisApi.getBaseUris(ApiUtils.getEmptyAccessTokenHeaderParams())
                       .then(function (baseUriInfo) {
                           assert.isNotNull(baseUriInfo);
                           done();
                       })
                       .catch(function (apiError) {
                           StringUtil.assertEqual(apiError,
                                                  SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                       })
        });

    });

}));
