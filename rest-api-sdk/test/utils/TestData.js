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
        module.exports = factory(require('../resources/config'));
    
}(function (Config) {
    'use strict';

    var TestData = function () {
    };

    var ACCESS_TOKEN_KEY = "accessToken";
    var NULL_PARAM_KEY = "nullParam";
    var EMPTY_PARAM_KEY = "emptyParam";
    var X_API_HEADER_KEY = "xApiHeader";
    var X_USER_EMAIL_KEY = "xUserEmail";
    var GROUP_NAME_KEY = "groupName";
    var GROUP_NAME_PREFIX_KEY = "groupNamePrefix";
    var FIRST_NAME_KEY = "userFirstName";
    var LAST_NAME_KEY = "userLastName";
    var EMAIL_PREFIX_KEY = "emailPrefix";
    var EMAIL_DOMAIN_KEY = "emailDomain";
    var USER_EMAIL_KEY = "userEmail";
    var INVALID_EMAIL_KEY = "invalidEmail";
    var START_PAGE_KEY = "startPage";
    var END_PAGE_KEY = "endPage";
    var IMAGE_SIZE_KEY = "imageSize";
    var VERSION_ID_KEY = "versionId";
    var POST_EMAIL_KEY = "postEmail";
    var POST_FAX_KEY = "postFax";
    var REDIRECT_URL_KEY = "redirectURL";
    var PARTICIPANT_EMAIL_KEY = "participantEmail";
    var AGREEMENT_NAME_PREFIX_KEY = "agreementNamePrefix";
    var AGREEMENT_NAME_KEY = "agreementName";
    var AGREEMENT_QUERY_KEY = "agreementQuery";
    var AGREEMENT_EXTERNAL_ID_KEY = "agreementExternalId";
    var AGREEMENT_EXTERNAL_GROUP_KEY = "agreementExternalGroup";
    var AGREEMENT_EXTERNAL_NAMESPACE_KEY = "agreementExternalNamespace";
    var AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY = "agreementSupportingDocumentContentFormat";
    var INVALID_URL_KEY = "invalidUrl";
    var INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY = "includeSupportingDocumentsPagesInfo";
    var ATTACH_SUPPORTING_DOCUMENTS_KEY = "attachSupportingDocuments";
    var AUDIT_REPORT_KEY = "auditReport";
    var SHOW_IMAGE_AVAILIBILITY_KEY = "showImageAvailability";
    var PRIVATE_MESSAGE_KEY = "privateMessage";
    var INVALID_REDIRECT_DELAY_KEY = "invalidRedirectDelay";
    var LIBRARY_DOCUMENT_NAME_KEY = "libraryDocumentName";
    var LIBRARY_DOCUMENT_NAME_PREFIX_KEY = "libraryDocumentNamePrefix";
    var TRANSIENT_DOCUMENT_NAME_KEY = "transientDocumentName";
    var SAMPLE_FILE_KEY = "sampleFile";
    var VALID_MIME_KEY = "validMime";
    var WIDGET_NAME_KEY = "widgetName";
    var WIDGET_NAME_PREFIX_KEY = "widgetNamePrefix";
    var WIDGET_UPDATE_MESSAGE_KEY = "widgetUpdateMessage";
    var MEGASIGN_NAME_KEY = "megaSignName";
    var MEGASIGN_NAME_PREFIX_KEY = "megaSignNamePrefix";
    var MEGASIGN_QUERY_KEY = "megaSignQuery";
    var GROUP_ID_KEY = "groupId";
    var WORKFLOW_ID_KEY = "workflowId";
    var INCLUDE_DRAFT_WORKFLOWS_KEY = "includeDraftWorkflows";
    var WORKFLOW_RECIPIENT_INFO_NAME_KEY = "workflowRecipientName";
    var DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE_KEY = "daysBetweenStartDateAndCurrentDate";
    var DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE_KEY = "daysBetweenEndDateAndCurrentDate";

    var REDIRECT_URI_KEY = "redirectUri";
    var STATE_KEY = "state";
    var CLIENT_ID_KEY = "clientId";
    var CLIENT_SECRET_KEY = "clientSecret";
    var ACCESS_TOKEN_GRANT_TYPE_KEY = "accessTokenGrantType";
    var REFRESH_TOKEN_GRANT_TYPE_KEY = "refreshTokenGrantType";
    var RESPONSE_TYPE_KEY = "responseType";
    var REQUEST_PATH_KEY = "requestPath";

    var ENV_HOST_NAME_KEY = "envHostName";

    var PAGE_SIZE_KEY = "pageSize";
    var TIMEOUT_KEY = "timeout";

    //Common Parameters
    TestData.ACCESS_TOKEN = Config[ACCESS_TOKEN_KEY] === undefined ? null : Config[ACCESS_TOKEN_KEY];
    TestData.NULL_PARAM = Config[NULL_PARAM_KEY] === undefined ? null : Config[NULL_PARAM_KEY];
    TestData.EMPTY_PARAM = Config[EMPTY_PARAM_KEY] === undefined ? null : Config[EMPTY_PARAM_KEY];
    TestData.X_API_HEADER = Config[X_API_HEADER_KEY] === undefined ? null : Config[X_API_HEADER_KEY];
    TestData.X_USER_EMAIL = Config[X_USER_EMAIL_KEY] === undefined ? null : Config[X_USER_EMAIL_KEY];
    TestData.ENV_HOST_NAME = Config[ENV_HOST_NAME_KEY] === undefined ? null : Config[ENV_HOST_NAME_KEY];

    // Group creation details
    TestData.GROUP_NAME_PREFIX = Config[GROUP_NAME_PREFIX_KEY] === undefined ? null : Config[GROUP_NAME_PREFIX_KEY];
    TestData.GROUP_NAME = Config[GROUP_NAME_KEY] === undefined ? null : Config[GROUP_NAME_KEY];

    // User creation details
    TestData.FIRST_NAME = Config[FIRST_NAME_KEY] === undefined ? null : Config[FIRST_NAME_KEY];
    TestData.LAST_NAME = Config[LAST_NAME_KEY] === undefined ? null : Config[LAST_NAME_KEY];
    TestData.EMAIL_PREFIX = Config[EMAIL_PREFIX_KEY] === undefined ? null : Config[EMAIL_PREFIX_KEY];
    TestData.EMAIL_DOMAIN = Config[EMAIL_DOMAIN_KEY] === undefined ? null : Config[EMAIL_DOMAIN_KEY];
    TestData.USER_EMAIL = Config[USER_EMAIL_KEY] === undefined ? null : Config[USER_EMAIL_KEY];
    TestData.INVALID_EMAIL = Config[INVALID_EMAIL_KEY] === undefined ? null : Config[INVALID_EMAIL_KEY];

    // Agreement Parameters
    TestData.START_PAGE = Config[START_PAGE_KEY] === undefined ? null : Config[START_PAGE_KEY];
    TestData.END_PAGE = Config[END_PAGE_KEY] === undefined ? null : Config[END_PAGE_KEY];
    TestData.IMAGE_SIZE = Config[IMAGE_SIZE_KEY] === undefined ? null : Config[IMAGE_SIZE_KEY];
    TestData.VERSION_ID = Config[VERSION_ID_KEY] === undefined ? null : Config[VERSION_ID_KEY];
    TestData.POST_EMAIL = Config[POST_EMAIL_KEY] === undefined ? null : Config[POST_EMAIL_KEY];
    TestData.POST_FAX = Config[POST_FAX_KEY] === undefined ? null : Config[POST_FAX_KEY];
    TestData.PARTICIPANT_EMAIL = Config[PARTICIPANT_EMAIL_KEY] === undefined ? null : Config[PARTICIPANT_EMAIL_KEY];
    TestData.AGREEMENT_NAME_PREFIX = Config[AGREEMENT_NAME_PREFIX_KEY] === undefined ? null : Config[AGREEMENT_NAME_PREFIX_KEY];
    TestData.AGREEMENT_NAME = Config[AGREEMENT_NAME_KEY] === undefined ? null : Config[AGREEMENT_NAME_KEY];
    TestData.AGREEMENT_QUERY = Config[AGREEMENT_QUERY_KEY] === undefined ? null : Config[AGREEMENT_QUERY_KEY];
    TestData.AGREEMENT_EXTERNAL_ID = Config[AGREEMENT_EXTERNAL_ID_KEY] === undefined ? null : Config[AGREEMENT_EXTERNAL_ID_KEY];
    TestData.AGREEMENT_EXTERNAL_GROUP = Config[AGREEMENT_EXTERNAL_GROUP_KEY] === undefined ? null : Config[AGREEMENT_EXTERNAL_GROUP_KEY];
    TestData.AGREEMENT_EXTERNAL_NAMESPACE = Config[AGREEMENT_EXTERNAL_NAMESPACE_KEY] === undefined ? null : Config[AGREEMENT_EXTERNAL_NAMESPACE_KEY];
    TestData.AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT = Config[AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY] === undefined ? null : Config[AGREEMENT_SUPPORTING_DOCUMENT_CONTENT_FORMAT_KEY];
    TestData.REQUEST_PATH = Config[REQUEST_PATH_KEY] === undefined ? null : Config[REQUEST_PATH_KEY];

    TestData.INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO = Config[INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY] === undefined ? null : Config[INCLUDE_SUPPORTING_DOCUMENTS_PAGES_INFO_KEY];
    TestData.ATTACH_SUPPORTING_DOCUMENTS = Config[ATTACH_SUPPORTING_DOCUMENTS_KEY] === undefined ? null : Config[ATTACH_SUPPORTING_DOCUMENTS_KEY];
    TestData.AUDIT_REPORT = Config[AUDIT_REPORT_KEY] === undefined ? null : Config[AUDIT_REPORT_KEY];
    TestData.SHOW_IMAGE_AVAILIBILITY = Config[SHOW_IMAGE_AVAILIBILITY_KEY] === undefined ? null : Config[SHOW_IMAGE_AVAILIBILITY_KEY];

    TestData.REDIRECT_URL = Config[REDIRECT_URL_KEY] === undefined ? null : Config[REDIRECT_URL_KEY];
    TestData.INVALID_URL = Config[INVALID_URL_KEY] === undefined ? null : Config[INVALID_URL_KEY];

    TestData.PRIVATE_MESSAGE = Config[PRIVATE_MESSAGE_KEY] === undefined ? null : Config[PRIVATE_MESSAGE_KEY];
    TestData.INVALID_REDIRECT_DELAY = Config[INVALID_REDIRECT_DELAY_KEY] === undefined ? null : Config[INVALID_REDIRECT_DELAY_KEY];

    // Library document Parameters
    TestData.LIBRARY_DOCUMENT_NAME = Config[LIBRARY_DOCUMENT_NAME_KEY] === undefined ? null : Config[LIBRARY_DOCUMENT_NAME_KEY];
    TestData.LIBRARY_DOCUMENT_NAME_PREFIX = Config[LIBRARY_DOCUMENT_NAME_PREFIX_KEY] === undefined ? null : Config[LIBRARY_DOCUMENT_NAME_PREFIX_KEY];

    // Transient Document Parameters
    TestData.TRANSIENT_DOCUMENT_NAME = Config[TRANSIENT_DOCUMENT_NAME_KEY] === undefined ? null : Config[TRANSIENT_DOCUMENT_NAME_KEY];
    TestData.SAMPLE_FILE = Config[SAMPLE_FILE_KEY] === undefined ? null : Config[SAMPLE_FILE_KEY];
    TestData.VALID_MIME = Config[VALID_MIME_KEY] === undefined ? null : Config[VALID_MIME_KEY];

    // Widget parameters
    TestData.WIDGET_NAME = Config[WIDGET_NAME_KEY] === undefined ? null : Config[WIDGET_NAME_KEY];
    TestData.WIDGET_NAME_PREFIX = Config[WIDGET_NAME_PREFIX_KEY] === undefined ? null : Config[WIDGET_NAME_PREFIX_KEY];
    TestData.WIDGET_UPDATE_MESSAGE = Config[WIDGET_UPDATE_MESSAGE_KEY] === undefined ? null : Config[WIDGET_UPDATE_MESSAGE_KEY];

    // MegaSign parameters
    TestData.MEGASIGN_NAME = Config[MEGASIGN_NAME_KEY] === undefined ? null : Config[MEGASIGN_NAME_KEY];
    TestData.MEGASIGN_NAME_PREFIX = Config[MEGASIGN_NAME_PREFIX_KEY] === undefined ? null : Config[MEGASIGN_NAME_PREFIX_KEY];
    TestData.MEGASIGN_QUERY = Config[MEGASIGN_QUERY_KEY] === undefined ? null : Config[MEGASIGN_QUERY_KEY];

    //Search parameters
    TestData.DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE = Config[DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE_KEY] === undefined ? null : Config[DAYS_BETWEEN_START_DATE_AND_CURRENT_DATE_KEY];
    TestData.DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE = Config[DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE_KEY] === undefined ? null : Config[DAYS_BETWEEN_END_DATE_AND_CURRENT_DATE_KEY];

    TestData.PAGE_SIZE = Config[PAGE_SIZE_KEY] === undefined ? null : Config[PAGE_SIZE_KEY];

    // Workflows parameters
    TestData.INCLUDE_DRAFT_WORKFLOWS = Config[INCLUDE_DRAFT_WORKFLOWS_KEY] === undefined ? null : Config[INCLUDE_DRAFT_WORKFLOWS_KEY];
    TestData.GROUP_ID = Config[GROUP_ID_KEY] === undefined ? null : Config[GROUP_ID_KEY];
    TestData.WORKFLOW_ID = Config[WORKFLOW_ID_KEY] === undefined ? null : Config[WORKFLOW_ID_KEY];
    TestData.WORKFLOW_RECIPIENT_INFO_NAME = Config[WORKFLOW_RECIPIENT_INFO_NAME_KEY] === undefined ? null : Config[WORKFLOW_RECIPIENT_INFO_NAME_KEY];

    //OAuth workflow parameters
    TestData.REDIRECT_URI = Config[REDIRECT_URI_KEY] === undefined ? null : Config[REDIRECT_URI_KEY];
    TestData.STATE = Config[STATE_KEY] === undefined ? null : Config[STATE_KEY];
    TestData.CLIENT_ID = Config[CLIENT_ID_KEY] === undefined ? null : Config[CLIENT_ID_KEY];
    TestData.CLIENT_SECRET = Config[CLIENT_SECRET_KEY] === undefined ? null : Config[CLIENT_SECRET_KEY];
    TestData.ACCESS_TOKEN_GRANT_TYPE = Config[ACCESS_TOKEN_GRANT_TYPE_KEY] === undefined ? null : Config[ACCESS_TOKEN_GRANT_TYPE_KEY];
    TestData.REFRESH_TOKEN_GRANT_TYPE = Config[REFRESH_TOKEN_GRANT_TYPE_KEY] === undefined ? null : Config[REFRESH_TOKEN_GRANT_TYPE_KEY];
    TestData.RESPONSE_TYPE = Config[RESPONSE_TYPE_KEY] === undefined ? null : Config[RESPONSE_TYPE_KEY];

    TestData.TIME_OUT = Config[TIMEOUT_KEY] === undefined ? null : Config[TIMEOUT_KEY];

    return TestData;
}));
