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
     * Mocha unit tests for Get Agreement Combined Document Url API.
     */
    describe('GetAgreementCombinedDocUrlApiTest', function () {

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
                              done();
                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });


        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testGetCombinedDocumentUrl', function (done) {

            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getNullAccessTokenHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl . Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getEmptyXApiUserHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 TestData.NULL_PARAM,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching info of all pages of a combined PDF document for the documents associated with an agreement through the getCombinedDocumentPagesInfo. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 TestData.EMPTY_PARAM,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_AGREEMENT_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl. Negative scenarios covered:
         * INVALID_VERSION_ID: empty versionId.
         *
         * @throws ApiError
         */
        it('testInvalidVersionId', function (done) {
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.EMPTY_PARAM,
                                                                                                    TestData.PARTICIPANT_EMAIL,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_VERSION_ID) ? done() : done(apiError);
                         });

        });

        /**
         * Test for fetching url of all documents combined through the getCombinedDocumentUrl. Negative scenarios covered:
         * INVALID_PARTICIPANT: empty participantId.
         *
         * @throws ApiError
         */
        it('testInvalidParticipantEmail', function (done) {
            agreementsApi.getCombinedDocumentUrl(ApiUtils.getValidHeaderParams(),
                                                 agreementId,
                                                 AgreementUtils.getOptsForCombinedDocumentAndDocUrl(TestData.VERSION_ID,
                                                                                                    TestData.EMPTY_PARAM,
                                                                                                    TestData.ATTACH_SUPPORTING_DOCUMENTS,
                                                                                                    TestData.AUDIT_REPORT))
                         .then(function (documentUrl) {
                             assert.isNotNull(documentUrl);
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_PARTICIPANT) ? done() : done(apiError);
                         });

        });

    });

}));
