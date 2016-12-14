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
    module.exports = factory(require('./SdkErrorCodes'), require('../ApiError') ,require('../StringUtil'), require('validator'));
  
}(function(SdkErrorCodes, ApiError, StringUtil, validator) {
  'use strict';

  /**
   * Utility for handling the validations of the common and generic parameters used in different ApiValidators.
   */
  var ApiValidatorHelper = function(){};
  

  var DATA = {
    X_API_USER_ID_FORMAT_BEGINNING : "userid:",
    X_API_USER_EMAIL_ID_FORMAT_BEGINNING : "email:",
    ACCESS_TOKEN_KEY : "accessToken",
    X_API_USER_KEY : "xApiUser"
  };

  var FAX = "fax";
  var EMAIL = "email";
  var COMMA = " , ";

  /**
   * Common method for validating header parameters, which are used in all the API's.
   *
   * @param headerParams Map containing headers parameters including accessToken of the API caller and userId or email of the API caller.
   * @throws ApiError
   */
  ApiValidatorHelper.validateHeaderParams = function (headerParams) {
    var accessToken = false;
    for (var key in headerParams) {
      if (StringUtil.equalIgnoreCase(key, DATA.ACCESS_TOKEN_KEY)){
        ApiValidatorHelper.validateAccessToken(headerParams[key]);
        accessToken = true;
      }
      else if(StringUtil.equalIgnoreCase(key, DATA.X_API_USER_KEY)){
        ApiValidatorHelper.validateXApiUser(headerParams[key]);
      }
    }
    if(accessToken === false){
      throw new ApiError(SdkErrorCodes.NO_ACCESS_TOKEN_HEADER);
    }
  };

  /**
   * Common method for validating access token, which are used in all the API's.
   *
   * @param accessToken accessToken of the API caller.
   * @throws ApiError
   */
  ApiValidatorHelper.validateAccessToken = function (accessToken) {
    if(StringUtil.isNullOrUndefined(accessToken)){
      throw new ApiError(SdkErrorCodes.NO_ACCESS_TOKEN_HEADER);
    }
    if (!accessToken) {
      throw new ApiError(SdkErrorCodes.INVALID_ACCESS_TOKEN);
    }
  };

  /**
   * Helper function that accepts an xApiHeader parameter and validates it.
   */
  ApiValidatorHelper.validateXApiUser = function (xApiUser) {
    if (StringUtil.isNullOrUndefined(xApiUser)) {
      return;
    }
    else if(!xApiUser || !(xApiUser.includes(DATA.X_API_USER_EMAIL_ID_FORMAT_BEGINNING) || xApiUser.includes(DATA.X_API_USER_ID_FORMAT_BEGINNING))){
      throw new ApiError(SdkErrorCodes.INVALID_X_API_USER_HEADER);
    }
  };

  /**
   * Helper method that validates the Id.
   *
   * @param id Identifier used.
   * @throws ApiError
   */
  ApiValidatorHelper.validateId = function (id,
                                            sdkErrorCode) {
    ApiValidatorHelper.validateParameter(id,
                                         sdkErrorCode);
  };

  /**
   * A generic helper function  that can accept any type of parameter and validate it.
   *
   * @param param The parameter that needs to be validated.
   * @param sdkErrorCode The error message that needs to be thrown.
   * @throws ApiError
   */
  ApiValidatorHelper.validateParameter = function (param,
                                                   sdkErrorCode,
                                                   missingField) {
    if(StringUtil.isNullOrUndefined(sdkErrorCode)){
      sdkErrorCode = SdkErrorCodes.MISSING_REQUIRED_PARAM;
    }
    if(!param || StringUtil.isEmpty(param)){
      throw new ApiError(sdkErrorCode, missingField);
    }
  };

  /**
   * Helper function to validate the parameters in a list.
   *
   * @param paramList List of parameter to be validated.
   */
  ApiValidatorHelper.validateParameters = function (paramList) {
    for(var i = 0; i < paramList.length; i++) {
       ApiValidatorHelper.validateParameter(paramList[i].param, paramList[i].sdkErrorCode, paramList[i].paramKey);
     }
  };
  /**
   * Helper method that takes FileInfo objects and validates them
   *
   * @param documentUrl           A url for the file.
   * @param libraryDocumentId     A libraryDocument to be used for creating the file.
   * @param libraryDocumentName   The name of the document to be used for creating the file.
   * @param transientDocumentId   A transient document to be used for creating the file.
   * @param url                   The url for the file in string format.
   * @throws ApiError
   */
  ApiValidatorHelper.validateFileInfo = function (documentUrl,
                                                  libraryDocumentId,
                                                  libraryDocumentName,
                                                  transientDocumentId,
                                                  url) {
    var count = (documentUrl  ? 1 : 0)
      + ((!libraryDocumentId) ? 0 : 1)
      + ((!libraryDocumentName) ? 0 : 1)
      + ((!transientDocumentId) ? 0 : 1);

    if (count != 1)
      throw new ApiError(SdkErrorCodes.INVALID_FILE_INFO);

    if (url)
      ApiValidatorHelper.validateUrlParameter(url,
                                 SdkErrorCodes.URL_INVALID);
  };

  /**
   * Helper function to validate the url passed to it.
   *
   * @param url          The url that needs to be validated.
   * @param sdkErrorCode The error message that needs to be thrown.
   * @throws ApiError
   */
  ApiValidatorHelper.validateUrlParameter = function (url,
                                                      sdkErrorCode) {
    if(!validator.isURL(url)){
      throw new ApiError(sdkErrorCode);
    }

  };

  /**
   * Helper method that checks the validity of post sign options
   *
   * @param email               The recipient email.
   * @param fax                 The recipent fax.
   * @param numberOfRecipients  The total number of recipients.
   * @throws ApiError
   */
  ApiValidatorHelper.validateRecipientSetInfos = function (email,
                                                           fax,
                                                           numberOfRecipients) {
    if (!fax && !email)
      throw new ApiError(SdkErrorCodes.MISSING_REQUIRED_PARAM, EMAIL + COMMA + FAX);

    if (fax && email)
      throw new ApiError(SdkErrorCodes.INVALID_ARGUMENTS);

    if (fax && numberOfRecipients > 1)
      throw new ApiError(SdkErrorCodes.INVALID_ARGUMENTS);

    if (email)
      ApiValidatorHelper.validateEmailParameter(email);
    if (fax)
      ApiValidatorHelper.validateParameter(fax, SdkErrorCodes.MISSING_REQUIRED_PARAM, FAX);

  };

  /**
   * Helper function to validate the email passed to it.
   *
   * @param email The email that needs to be validated.
   * @throws ApiError
   */
  ApiValidatorHelper.validateEmailParameter = function (email) {
    if(!email || !validator.isEmail(email)){
      throw new ApiError(SdkErrorCodes.INVALID_EMAIL);
    }
  };

  /**
   * Helper method that checks the validity of post sign options
   *
   * @param redirectUrl   The redirectUrl that needs to be validated.
   * @param redirectDelay The redirectDelay that needs to be validated.
   * @throws ApiError
   */
  ApiValidatorHelper.validatePostSignOptions = function (redirectUrl,
                                                         redirectDelay) {
    if (!redirectUrl)
      throw new ApiError(SdkErrorCodes.EMPTY_REDIRECT_URL);

    if (redirectDelay && redirectDelay < 0)
      throw new ApiError(SdkErrorCodes.INVALID_REDIRECT_DELAY);

    if (!validator.isURL(redirectUrl))
      throw new ApiError(SdkErrorCodes.INVALID_REDIRECT_URL);
  };

  /**
   * Helper method that checks the validity of post sign options in workflows
   *
   * @param email              The recipient email.
   * @param fax                The recipent fax.
   * @param numberOfRecipients The total number of recipients.
   * @throws ApiError
   */
  ApiValidatorHelper.validateWorkflowRecipientSetInfos = function(email,
                                                                  fax,
                                                                  numberOfRecipients){
    if (!fax && !email)
      throw new ApiError(SdkErrorCodes.MIN_ADDRESSES_NOT_MET);

      ApiValidatorHelper.validateRecipientSetInfos(email,
                                                   fax,
                                                   numberOfRecipients);

  };

  /**
   * Helper function to validate the dates passed to it.
   *
   * @param startDate The start date of search that needs to be validated.
   * @param endDate   The end date of search that needs to be validated.
   * @throws ApiError
   */
  ApiValidatorHelper.validateStartAndEndDatesParameter = function (startDate,
                                                                   endDate) {
    var paramList = [];
    paramList.push({param: startDate, sdkErrorCode: SdkErrorCodes.INVALID_DATE});
    paramList.push({param: endDate, sdkErrorCode: SdkErrorCodes.INVALID_DATE});
    ApiValidatorHelper.validateParameters(paramList);

    if (new Date(startDate) > new Date(endDate)){
      throw new ApiError(SdkErrorCodes.INVALID_DATE);
    }

  };

  /**
   * Common method that validates the versionId and participantEmail
   */
  ApiValidatorHelper.validateVersionIdAndParticipantEmail = function(versionId,
                                                                     participantEmail) {
    ApiValidatorHelper.validateVersionId(versionId);
    ApiValidatorHelper.validateParticipantEmail(participantEmail);
  };

  /**
   * Helper method that validates the versionId.
   *
   * @param versionId
   * @throws ApiException
   */
  ApiValidatorHelper.validateVersionId = function(versionId) {
    if (versionId === null || versionId === undefined){
      return;
    }

    if (versionId){
      throw new ApiError(SdkErrorCodes.INVALID_VERSION_ID);
    }
  };

  /**
   * Helper method that validates the participantEmail.
   *
   * @param participantEmail
   * @throws ApiError
   */
  ApiValidatorHelper.validateParticipantEmail = function(participantEmail) {
    if (participantEmail === null || participantEmail === undefined){
      return;
    }

    if(!validator.isEmail(participantEmail)){
      throw new ApiError(SdkErrorCodes.INVALID_PARTICIPANT);
    }

  };

return ApiValidatorHelper;
}));
