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
(function(factory) {
  // CommonJS-like environments that support module.exports, like Node.
  module.exports = factory();

}(function() {
  'use strict';

  var httpStatusCodes = {
    'UNAUTHORIZED' : 401,
    'BAD_REQUEST' : 400,
    'NOT_FOUND' : 404,
    'UNSUPPORTED_MEDIA_TYPE' : 415
  };

  /**
   * This is a REST API error class which contains a list of all the errors that can be thrown because of failure in validations for multiple resource end points.
   */
  var SdkErrorCodes = {

    'NO_ACCESS_TOKEN_HEADER' : {
      'httpCode' : httpStatusCodes.UNAUTHORIZED,
      'errorMessage' : 'Access token header not provided',
      'apiCode':'NO_ACCESS_TOKEN_HEADER'
    },
    'INVALID_ACCESS_TOKEN' : {
      'httpCode' : httpStatusCodes.UNAUTHORIZED,
      'errorMessage' : 'Access token provided is invalid or has expired',
      'apiCode':'INVALID_ACCESS_TOKEN'
    },
    'INVALID_X_API_USER_HEADER' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Value provided in x-api-user header is in invalid format',
      'apiCode':'INVALID_X_API_USER_HEADER'

    },
    'MISSING_REQUIRED_PARAM' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Required parameter is missing',
      'apiCode':'MISSING_REQUIRED_PARAM'

    },
    'INVALID_GROUP_NAME' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The group name provided is not valid or is already taken, group names must be a unique non-empty strings no longer than 255 characters.',
      'apiCode':'INVALID_GROUP_NAME'

    },
    'INVALID_GROUP_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Group ID specified is invalid.',
      'apiCode':'INVALID_GROUP_ID'
    },
    'NO_FILE_NAME' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide file name',
      'apiCode':'NO_FILE_NAME'

    },
    'NO_FILE_CONTENT' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide file body',
      'apiCode':'NO_FILE_CONTENT'

    },
    'NO_MEDIA_TYPE' : {
      'httpCode' : httpStatusCodes.UNSUPPORTED_MEDIA_TYPE,
      'errorMessage' : 'No media type specified',
      'apiCode':'NO_MEDIA_TYPE'

    },
    'INVALID_USER_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The User ID specified is invalid' ,
      'apiCode' : 'INVALID_USER_ID'
    },
    'INVALID_MEGASIGN_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Mega Sign ID specified is invalid',
      'apiCode':'INVALID_MEGASIGN_ID'

    },
    'INVALID_MEGASIGN_STATUS' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide a valid mega sign status.',
      'apiCode':'INVALID_MEGASIGN_STATUS'

    },
    'INVALID_FILE_INFO' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Invalid or no file info is provided',
      'apiCode':'INVALID_FILE_INFO'

    },
    'MUST_PROVIDE_EMAIL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide email for user creation',
      'apiCode' : 'MUST_PROVIDE_EMAIL'

    },
    'INVALID_ARGUMENTS' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'One or more arguments to the method are invalid',
      'apiCode':'INVALID_ARGUMENTS'

    },
    'INVALID_EMAIL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Email provided is invalid',
      'apiCode':'INVALID_EMAIL'

    },
    'MUST_PROVIDE_VALID_USER_STATUS' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide a valid user status',
      'apiCode' : 'MUST_PROVIDE_VALID_USER_STATUS'
    },
    'INVALID_URL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The redirect URL is not valid',
      'apiCode':'INVALID_URL'

    },
    'INVALID_REDIRECT_DELAY' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The redirectDelay specified in PostSignOptions must be nonnegative integer',
      'apiCode':'INVALID_REDIRECT_DELAY'

    },
    'INVALID_REDIRECT_URL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The redirectUrl specified in PostSignOptions is not a valid URL',
      'apiCode':'INVALID_REDIRECT_URL'

    },
    'EMPTY_REDIRECT_URL' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'If PostSignOptions are specified, the redirectUrl must not be empty',
      'apiCode':'EMPTY_REDIRECT_URL'

    },
    'INVALID_TRANSIENTDOCUMENT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Transient Document ID specified is invalid',
      'apiCode':'INVALID_TRANSIENTDOCUMENT_ID'

    },
    'INVALID_VERSION_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Version ID specified is invalid',
      'apiCode' : 'INVALID_VERSION_ID'

    },
    'INVALID_PARTICIPANT' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The participant email specified is invalid',
      'apiCode' : 'INVALID_PARTICIPANT'

    },
    'INVALID_LIBRARYDOCUMENT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Library Document ID specified is invalid',
      'apiCode':'INVALID_LIBRARYDOCUMENT_ID'

    },
    'RECIPIENT_SET_NOT_SUPPORTED' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Recipient set with multiple recipients is not supported for a Mega Sign.',
      'apiCode':'RECIPIENT_SET_NOT_SUPPORTED'

    },
    'INVALID_REQUEST' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The redirect_uri does not match configuration',
      'apiCode':'INVALID_REQUEST'

    },
    'INVALID_WORKFLOW_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Workflow ID specified is invalid',
      'apiCode':'INVALID_WORKFLOW_ID'
    },
    'MIN_ADDRESSES_NOT_MET' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Some fields minimum entries requirement is not met.',
      'apiCode':'MIN_ADDRESSES_NOT_MET'

    },
    'FILE_INFO_NAME_MISSING' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Name is missing in FileInfo field',
      'apiCode':'FILE_INFO_NAME_MISSING'

    },
    'EMPTY_EXTERNALID_PARAMETER' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'ExternalId parameter can not be empty',
      'apiCode':'EMPTY_EXTERNALID_PARAMETER'

    },
    'INVALID_AGREEMENT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Agreement ID specified is invalid',
      'apiCode':'INVALID_AGREEMENT_ID'

    },
    'MUST_PROVIDE_VALID_AGREEMENT_STATUS' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'Must provide a valid agreement status',
      'apiCode':'MUST_PROVIDE_VALID_AGREEMENT_STATUS'

    },
    'URL_INVALID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'Provided document URL is invalid.',
      'apiCode':'URL_INVALID'

    },
    'INVALID_PARTICIPANT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The participant ID specified is invalid',
      'apiCode':'INVALID_PARTICIPANT_ID'

    },
    'INVALID_PARTICIPANT_SET_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The participant set ID specified is invalid',
      'apiCode':'INVALID_PARTICIPANT_SET_ID'

    },
    'EMPTY_PRIVATE_MESSAGE' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The message specified for the alternate participant addition cannot be empty',
      'apiCode':'EMPTY_PRIVATE_MESSAGE'
    },
    'INVALID_DOCUMENT_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Document ID specified is invalid',
      'apiCode' : 'INVALID_DOCUMENT_ID'
    },
    'MUST_PROVIDE_AGREEMENT_ID' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide an Agreement ID',
      'apiCode':'MUST_PROVIDE_AGREEMENT_ID'

    },
    'INVALID_AGREEMENT_ASSET_ID' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'The Agreement Asset ID specified is invalid',
      'apiCode':'INVALID_AGREEMENT_ASSET_ID'

    },
    'INVALID_TARGET_VIEW' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Invalid Target View',
      'apiCode':'INVALID_TARGET_VIEW'

    },
    'INVALID_SEARCH_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'Search ID provided is invalid',
      'apiCode':'INVALID_SEARCH_ID'

    },
    'INVALID_PAGE_CURSOR' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Page cursor provided is invalid',
      'apiCode':'INVALID_PAGE_CURSOR'

    },
    'INVALID_DATE' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Date requested is invalid. Please check end date is greater than start date and range is not greater than 180 days',
      'apiCode':'INVALID_DATE'

    },
    'INVALID_SIGNATURE_FLOW' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Only SENDER_SIGNATURE_NOT_REQUIRED and SENDER_SIGNS_LAST are permitted for widgets',
      'apiCode':'INVALID_SIGNATURE_FLOW'

    },
    'INVALID_WIDGET_ID' : {
      'httpCode' : httpStatusCodes.NOT_FOUND,
      'errorMessage' : 'The Widget ID specified is invalid',
      'apiCode':'INVALID_WIDGET_ID'

    },
    'MUST_PROVIDE_VALID_WIDGET_STATUS' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Must provide a valid widget status',
      'apiCode':'MUST_PROVIDE_VALID_WIDGET_STATUS'

    },
    'TOO_MANY_ACTIONS_SPECIFIED' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Cannot specify both a redirectUrl and a message',
      'apiCode':'TOO_MANY_ACTIONS_SPECIFIED'

    },
    'NO_ACTION_SPECIFIED' : {
      'httpCode' : httpStatusCodes.BAD_REQUEST,
      'errorMessage' : 'Either a redirectUrl or a message is required',
      'apiCode':'NO_ACTION_SPECIFIED'

    }
  };
  return SdkErrorCodes;
}));
