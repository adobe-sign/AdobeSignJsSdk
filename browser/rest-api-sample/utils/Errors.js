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
  root.AdobeSignSdk.Errors = factory();

}(this, function() {
  'use strict';

  var Errors = {
    CREATE_USER : "Failure in creating the user",
    GET_GROUPS  : "Failure in fetching the groups" ,
    CREATE_NEW_GROUP_IN_ACCOUNT : "Failure in creating new group in account",
    GET_USERS_IN_ACCOUNT : "Failure in fetching users in the account",
    CREATE_NEW_USER_IN_ACCOUNT : "Failure in creating new user in account",
    GET_AGREEMENTS : "Failure in fetching the agreements",
    CHECK_AGREEMENT_EXIST : "Failure in fetching the agreement with given agreement name",
    GET_AGREEMENT_ID : "Failure in fetching agreement id",
    CREATE_ALTERNATE_PARTICIPANT :"Failure in creating alternate participant",
    CREATE_TRANSIENT_DOCUMENT : "Failure in creating transient document",
    CALL_BACK_NOT_DEFINED : "Callback is not defined",
    GET_SIGNING_URL : "Failure in fetching signing url",
    GET_USERS : "Failure in fetching the users",
    SEND_REMINDER_PENDING_AGREEMENT : "Failure in sending the reminder on the pending agreement",
    GET_AGREEMENT_DETAILS : "Failure in fetching the agreement details",
    SEND_REMINDER : "Failure in sending the reminder",
    CREATE_WIDGET_WITH_COUNTER_SIGNERS : "Failure in creating a new widget for the user with counter signers",
    CREATE_WIDGET : "Failure in creating a new widget for the user",
    SEND_AGREEMENT_USING_TRANSIENT_DOCUMENT : "Failure in sending agreement using transient document",
    CREATE_AGREEMENT : "Failure in creating the agreement",
    GET_LIBRARY_DOCUMENTS : "Failure in fetching the library documents",
    GET_FIRST_LIBRARY_DOCUMENT : "Failure in fetching the first library document of user",
    NO_LIBRARY_DOCUMENTS : "No library documents found",
    SEND_AGREEMENT_USING_LIBRARY_DOCUMENT : "Failure in sending agreement using library document",
    GET_AGREEMENT_STATUS : "Failure in fetching status of the agreement",
    DOWNLOAD_DOCUMENT : "Failure in downloading documents of agreement",
    GET_AGREEMENTS_DOCUMENTS : "Failure in fetching documents of the agreement",
    SAVE_DOCUMENTS : "Failure in saving the contents of the documents",
    RETRIEVE_FORM_DATA_WIDGET : "Failure in retrieving the form data of widget",
    NO_WIDGET_FOUND : "No widget found",
    GET_WIDGET_FORM_DATA : "Failure in getting widget form data",
    GET_WIDGETS : "Failure in fetching widgets for the user",
    GET_FIRST_WIDGET : "Failure in fetching the id of first widget of user",
    DOWNLOAD_AUDIT_TRAIL : "Error while downloading the audit trail of the agreement",
    GET_AUDIT_TRAIL : "Error while fetching the audit trail",
    FILE_NOT_SAVED : "File not saved",
    SET_BASE_URI : "Error in setting the base uri",
    GET_GROUP_WITH_AUTH_CODE : "Error in getting group using auth code",
    CREATE_GROUP_WITH_AUTH_CODE : "Error in creating group using auth code"
  };

  return Errors;
}));
