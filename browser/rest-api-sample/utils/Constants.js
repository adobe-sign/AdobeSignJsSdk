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

(function(root, factory) {
  // Browser globals (root is window)
  if (!root.AdobeSignSdk) {
    root.AdobeSignSdk = {};
  }
  root.AdobeSignSdk.Constants = factory(root.AdobeSignSdk.Config);

}(this, function (Config) {
  'use strict';

  var Constants = function(){};

  var MINUS_ONE = -1;
  var ACCESS_TOKEN_KEY = "accessToken";

  var X_API_USER_KEY = "xApiUser";

  var USER_EMAIL_KEY = "userEmail";
  var USER_FIRST_NAME_KEY = "userFirstName";
  var USER_LAST_NAME_KEY = "userLastName";
  var X_USER_EMAIL_KEY = "xUserEmail";

  var AGREEMENT_NAME_KEY = "agreementName";

  var EXTERNAL_ID_KEY = "externalID";
  var EXTERNAL_GROUP_KEY = "externalGroup";
  var EXTERNAL_NAMESPACE_KEY = "externalNamespace";
  var QUERY_KEY = "query";
  var WIDGET_NAME_KEY = "widgetName";

  var INPUT_FILE_NAME_KEY = "inputFileName";
  var REQUEST_PATH_KEY = "requestPath";
  var OUTPUT_PATH_KEY = "outputPath";

  var AGREEMENT_DOCUMENT_KEY = "agreementDocument";
  var FORM_DATA_KEY = "formData";
  var AUDIT_TRAIL_KEY = "auditTrail";

  var MIME_TYPE_PDF_KEY = "mimeTypePdf";
  var WAITING_DAYS_KEY = "waitingDays";

  var FILE_OFFSET_KEY = "fileOffset";
  var INPUT_FORM_FIELD_FILE_NAME_KEY = "inputFormFieldFileName";

  var AGREEMENT_COUNT_LIMIT_KEY = "agreementCountLimit";
  var USER_EMAIL_PREFIX_KEY = "userEmailPrefix";
  var USER_EMAIL_DOMAIN_KEY = "userEmailDomain";

  var GROUP_NAME_KEY = "groupName";
  var SERVER_PORT_KEY = "oauthServerPortKey";
  var KEY_STORE_FILE_KEY = "keyStoreFile";
  var CERTIFICATE_FILE_KEY = "certificateFile";
  var OAUTH_HTML_FILE_KEY = "oAuthHtmlFile";
  var ACCESS_TOKEN_GRANT_TYPE_KEY = "accessTokenGrantType";
  var REFRESH_TOKEN_GRANT_TYPE_KEY = "refreshTokenGrantType";
  var RESPONSE_TYPE_KEY = "responseType";

  var ENV_HOST_NAME_KEY = "envHostName";

  //Common Parameters
  Constants.ACCESS_TOKEN = Config[ACCESS_TOKEN_KEY] === undefined ? null : Config[ACCESS_TOKEN_KEY];
  Constants.X_API_USER = Config[X_API_USER_KEY] === undefined ? null : Config[X_API_USER_KEY];

  Constants.USER_FIRST_NAME = Config[USER_FIRST_NAME_KEY] === undefined ? null : Config[USER_FIRST_NAME_KEY];
  Constants.USER_LAST_NAME = Config[USER_LAST_NAME_KEY] === undefined ? null : Config[USER_LAST_NAME_KEY];
  Constants.X_USER_EMAIL = Config[X_USER_EMAIL_KEY] === undefined ? null : Config[X_USER_EMAIL_KEY];
  Constants.AGREEMENT_NAME = Config[AGREEMENT_NAME_KEY] === undefined ? null : Config[AGREEMENT_NAME_KEY];
  Constants.WIDGET_NAME = Config[WIDGET_NAME_KEY] === undefined ? null : Config[WIDGET_NAME_KEY];
  Constants.EXTERNAL_ID = Config[EXTERNAL_ID_KEY] === undefined ? null : Config[EXTERNAL_ID_KEY];
  Constants.EXTERNAL_GROUP = Config[EXTERNAL_GROUP_KEY] === undefined ? null : Config[EXTERNAL_GROUP_KEY];
  Constants.EXTERNAL_NAMESPACE = Config[EXTERNAL_NAMESPACE_KEY] === undefined ? null : Config[EXTERNAL_NAMESPACE_KEY];
  Constants.QUERY = Config[QUERY_KEY] === undefined ? null : Config[QUERY_KEY];
  Constants.INPUT_FILE_NAME = Config[INPUT_FILE_NAME_KEY] === undefined ? null : Config[INPUT_FILE_NAME_KEY];
  Constants.REQUEST_PATH = Config[REQUEST_PATH_KEY] === undefined ? null : Config[REQUEST_PATH_KEY];
  Constants.OUTPUT_PATH = Config[OUTPUT_PATH_KEY] === undefined ? null : Config[OUTPUT_PATH_KEY];
  Constants.AGREEMENT_DOCUMENT = Config[AGREEMENT_DOCUMENT_KEY] === undefined ? null : Config[AGREEMENT_DOCUMENT_KEY];
  Constants.FORM_DATA = Config[FORM_DATA_KEY] === undefined ? null : Config[FORM_DATA_KEY];
  Constants.AUDIT_TRAIL = Config[AUDIT_TRAIL_KEY] === undefined ? null : Config[AUDIT_TRAIL_KEY];
  Constants.MIME_TYPE_PDF = Config[MIME_TYPE_PDF_KEY] === undefined ? null : Config[MIME_TYPE_PDF_KEY];
  Constants.WAITING_DAYS = Config[WAITING_DAYS_KEY] === undefined ? MINUS_ONE : Config[WAITING_DAYS_KEY];
  Constants.FILE_OFFSET = Config[FILE_OFFSET_KEY] === undefined ? MINUS_ONE : Config[FILE_OFFSET_KEY];
  Constants.INPUT_FORM_FIELD_FILE_NAME = Config[INPUT_FORM_FIELD_FILE_NAME_KEY] === undefined ? null : Config[INPUT_FORM_FIELD_FILE_NAME_KEY];

  Constants.AGREEMENT_COUNT_LIMIT = Config[AGREEMENT_COUNT_LIMIT_KEY] === undefined ? MINUS_ONE : Config[AGREEMENT_COUNT_LIMIT_KEY];

  Constants.USER_EMAIL_PREFIX = Config[USER_EMAIL_PREFIX_KEY] === undefined ? null : Config[USER_EMAIL_PREFIX_KEY];
  Constants.USER_EMAIL_DOMAIN = Config[USER_EMAIL_DOMAIN_KEY] === undefined ? null : Config[USER_EMAIL_DOMAIN_KEY];
  Constants.USER_EMAIL = Config[USER_EMAIL_KEY] === undefined ? null : Config[USER_EMAIL_KEY];

  Constants.GROUP_NAME = Config[GROUP_NAME_KEY] === undefined ? null : Config[GROUP_NAME_KEY];
  Constants.SERVER_PORT = Config[SERVER_PORT_KEY] === undefined ? MINUS_ONE : Config[SERVER_PORT_KEY];
  Constants.KEY_STORE_FILE = Config[KEY_STORE_FILE_KEY] === undefined ? null : Config[KEY_STORE_FILE_KEY];
  Constants.OAUTH_HTML_FILE = Config[OAUTH_HTML_FILE_KEY] === undefined ? null : Config[OAUTH_HTML_FILE_KEY];
  Constants.CERTIFICATE_FILE = Config[CERTIFICATE_FILE_KEY] === undefined ? null : Config[CERTIFICATE_FILE_KEY];
  Constants.ACCESS_TOKEN_GRANT_TYPE = Config[ACCESS_TOKEN_GRANT_TYPE_KEY] === undefined ? null : Config[ACCESS_TOKEN_GRANT_TYPE_KEY];
  Constants.REFRESH_TOKEN_GRANT_TYPE = Config[REFRESH_TOKEN_GRANT_TYPE_KEY] === undefined ? null : Config[REFRESH_TOKEN_GRANT_TYPE_KEY];
  Constants.RESPONSE_TYPE = Config[RESPONSE_TYPE_KEY] === undefined ? null : Config[RESPONSE_TYPE_KEY];

  Constants.ENV_HOST_NAME = Config[ENV_HOST_NAME_KEY] === undefined ? null : Config[ENV_HOST_NAME_KEY];

  return Constants;

}));

