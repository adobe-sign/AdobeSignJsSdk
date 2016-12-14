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

(function (root, factory) {
  // Browser globals (root is window)
  if (!root.AdobeSignSdk) {
    root.AdobeSignSdk = {};
  }
  root.AdobeSignSdk.Config = factory();

}(this, function () {
  'use strict';

  var Config = {

    //Access token to allow  the user to authorize API access. It can be generated from  the link 'https://api.echosign.com/public/static/oauthDoc.jsp'. It must have scopes required by the corresponding samples to grant the API different levels of access to data on behalf of the end user
    "accessToken" : "",

    //Null parameter
    "nullParam" : null,

    //Empty parameter
    "emptyParam" : "",

    //The userId or email of the user. If it is not specified, then the caller is inferred from the access token
    "xApiHeader" : null,

    //The email address of the user whose details are being requested in getUsers method
    "xUserEmail" : null,

    //Name of the group which will be prefixed while creating new group
    "groupNamePrefix" : "TestGroup",

    //Name of the group which will be passed while creating new group
    "groupName" : "TestGroup",

    //First name of the user which will be passed while creating new user
    "userFirstName" : "TestUser",

    //Last name of the user which will be passed while creating new user
    "userLastName" : "TestUser",

    //Prefix of email address which will be used for the sample user
    "emailPrefix" : "",

    //Domain of email address which will be used for the sample user
    "emailDomain" : "",

    //Email address of the user which will be used as a sample user while running samples
    "userEmail" : "",

    //Invalid email address to be passed in negative cases
    "invalidEmail" : "invalid.email",

    //Default values for image sizes i.e. {FIXED_WIDTH_50px, FIXED_WIDTH_250px, FIXED_WIDTH_675px, ZOOM_50_PERCENT, ZOOM_75_PERCENT, ZOOM_100_PERCENT,ZOOM_125_PERCENT, ZOOM_150_PERCENT, ZOOM_200_PERCENT}
    "imageSize" : "ZOOM_100_PERCENT",

    //Default version ID for agreements
    "versionId": null,

    //Default email address to be used while creating test users
    "postEmail" : "",

    //Default fax to be used while creating test users
    "postFax" : "1234567890",

    //Default url where the user will be redirected
    "redirectURL" : "https://www.adobe.com/",

    //Default email address of the participant of the agreement
    "participantEmail": null,

    //Default prefix for agreement name
    "agreementNamePrefix" : "TestAgreement",

    //Prefix for the agreement name which will be added while creating agreement name at runtime using timestamp
    "agreementName" : "TestAgreement",

    //Default query for getting all the agreements of a user
    "agreementQuery" : null,

    //ExternalID for which agreement information is to be retrieved, ExternalId is passed while getting Agreements of the user
    "agreementExternalId" : null,

    //ExternalGroup for which agreement information is to be retrieved
    "agreementExternalGroup" : null,

    //ExternalNameSpace for which agreement information is to be retrieved. ExternalId should be not null.if you are initializing ExternalNameSpace parameter
    "agreementExternalNamespace" : null,

    //Content format of agreement supporting document
    "agreementSupportingDocumentContentFormat" : null,

    //Default value for invalid url
    "invalidUrl" : "InvalidUrl",

    //Default boolean value for including supporting documents pages info
    "includeSupportingDocumentsPagesInfo" :true,

    //Default boolean value for attaching supporting documents
    "attachSupportingDocuments" : "true",

    //Default boolean value for attaching audit report
    "auditReport" : "true",

    //Default message to be passed while creating alternate participant
    "privateMessage" : "Added an alternate participant",

    //Delay in seconds before user is taken to success page
    "invalidRedirectDelay" : "-100",

    //Default library document name which will be used while creating new library document
    "libraryDocumentName" : "TestLibraryDocument",

    //Default library document name prefix which will be added while creating library document name at runtime using timestamp
    "libraryDocumentNamePrefix" : "TestLibraryDocument",

    //Default transient document name while be used while creating new transient document
    "transientDocumentName" : "TestTransientDocument",

    //Sample file Name
    "sampleFile" : "TestFile.pdf",

    //Default value if mime type is text/plain
    "validMime" : "application/pdf",

    //Prefix for the widget name which will be added while creating widget name at runtime using timestamp
    "widgetName" : "SampleWidget",

    //Prefix for the widget name which will be added while creating widget name at runtime using timestamp
    "widgetNamePrefix" : "TestWidget",

    //Default Widget update message to be used while updating widget info
    "widgetUpdateMessage" : "Widget updated",

    //Prefix for the megaSign parent agreement name which will be added while creating megaSign parent agreement name at runtime using timestamp
    "megaSignName" : "SampleMegaSign",

    //Default megaSign name prefix which will be added while creating megaSign parent agreement name at runtime using timestamp
    "megaSignNamePrefix":"TestMegaSign",

    //The query string used for the search. Multiple search terms can be provided, separated by spaces.Some of the search terms include document name, participant name or company, and form data
    "megaSignQuery" : null,

    //Default group ID to be used while testing groups
    "groupId" : null,

    //Default workflow ID to be used while setting up workflow resource
    "workflowId" : "",

    //Default name of the recipient list as returned in workflow description
    "workflowRecipientName" : "signerList",

    //Default boolean value to decide whether to include draft workflow or not
    "includeDraftWorkflows" : true,

    //Maximum number of agreement asset events to be returned in the response per page
    "pageSize" : 5,

    //The url where the end user will be redirected after successful completion of authorization. This value must belong to the set of values specified on the OAuth Configuration page
    "redirectUri" : "https://localhost:9000/redirectUri",

    //Value used to maintain state between the request and callback
    "state" : null,

    //Identifies the application configured on the OAuth Configuration page
    "clientId" : "",

    //Identifies the application configured on the OAuth Configuration page
    "clientSecret" : "",

    //Grant type for fetching the access token. Value must always be 'authorization_code'
    "accessTokenGrantType" : "authorization_code",

    //Grant type for refreshing the access token. Value must always be 'refresh_token'
    "refreshTokenGrantType" : "refresh_token",

    //Response type in the request for making authorization url used to fetch the access token. Value must always be 'code'
    "responseType" : "code",

    //Environment on which the sdk will run. If no Host Environment is provided here, default Host Environment [https://api.echosign.com/] will be used
    "envHostName" : "",

    //Path structure of directory containing resource files like Sample.pdf, DocumentWithFormFields.pdf, etc
    "requestPath" : "resources",

    //Number of days before the current date which will be used as START DATE in searching agreement asset event
    "daysBetweenStartDateAndCurrentDate" : 7,

    //Number of days before the current date which will be used as END DATE in searching agreement asset event
    "daysBetweenEndDateAndCurrentDate" : 0,

    //Maximum timeout for mocha tests
    "timeout" : "2*60*1000"
  };

  return Config;
}));