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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/OAuthUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, OAuthUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    describe('RevokeTokenTest', function () {

        var oAuthApi = null;

        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            oAuthApi = OAuthUtils.getOAuthApi();
            done();
        });

        /**
         * Test for revoking token through the revokeAccessToken endpoint. Negative scenarios covered:
         * MISSING_REQUIRED_PARAM: token is null.
         *
         * @throws ApiError
         */
        it('testInvalidToken', function (done) {
            oAuthApi.revokeToken(TestData.NULL_PARAM)
                    .then(function () {
                        done();
                    })
                    .catch(function (apiError) {
                        StringUtil.assertEqual(apiError,
                                               SdkErrorCodes.MISSING_REQUIRED_PARAM) ? done() : done(apiError);
                    });
        });
    });
}));
