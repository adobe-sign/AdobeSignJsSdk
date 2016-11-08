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
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../utils/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../utils/StringUtil'), require('chai'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil, chai) {
    'use strict';

    /**
     * Mocha unit tests for Get Agreement Document Info API.
     */
    describe('GetAgreementDocumentInfoApiTest', function () {

        var assert = chai.assert;
        var agreementsApi = null;
        var agreementId = null;
        var documentId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              return AgreementUtils.getFirstDocumentId(agreementId);
                          })
                          .then(function (documentIdResponse) {
                              documentId = documentIdResponse;
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });
        });

        /**
         * Test for fetching document file stream through the getDocument.
         *  Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testDocument', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      agreementId,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            agreementsApi.getDocument(ApiUtils.getNullAccessTokenHeaderParams(),
                                      agreementId,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            agreementsApi.getDocument(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                      agreementId,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            agreementsApi.getDocument(ApiUtils.getEmptyXApiUserHeaderParams(),
                                      agreementId,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      TestData.NULL_PARAM,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching document file stream through the getDocument. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      TestData.EMPTY_PARAM,
                                      documentId)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });


        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls endpoint. Negative scenarios covered:
         * INVALID_DOCUMENT_ID: null documentId.
         *
         * @throws ApiError
         */
        it('testNullDocumentId', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      agreementId,
                                      TestData.NULL_PARAM)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching imageUrl of given document through the getDocumentImageUrls endpoint. Negative scenarios covered:
         * INVALID_DOCUMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyDocumentId', function (done) {
            agreementsApi.getDocument(ApiUtils.getValidHeaderParams(),
                                      agreementId,
                                      TestData.EMPTY_PARAM)
                         .then(function (document) {
                             assert.isNotNull(document);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_DOCUMENT_ID) ? done() : done(apiError);
                         });

        });

    });

}));
