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
    module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'), require('../ApiError'));
  
}(function(SdkErrorCodes, ApiValidatorHelper , ApiError) {
  'use strict';
  
  var MEGA_SIGN_CREATION_REQUEST = "megaSignCreationRequest";
  var MEGA_SIGN_CREATION_INFO = "megasignCreationInfo";
  var NAME = "name";
  var SIGNATURE_TYPE = "signatureType";
  var MEGA_SIGN_STATUS_UPDATE_INFO = "megaSignStatusUpdateInfo";
  var RECIPIENT_SET_MEMBER_INFOS = "recipientSetMemberInfos";

  /**
   * Validator for Megasigns Api. The main purpose of this is to check the validity of the parameters passed 
   * to the megaSign API and throw ApiError with required error messages if the validation fails.
   */
  var  MegaSignApiValidator = function(){};
    
  /**
   * Validator for getMegaSigns API that retrieves all the megaSign parent agreements of the user.
   *
   * @param opts optional params
   *
   * @throws ApiError
   */
  MegaSignApiValidator.getMegaSignsValidator = function(opts) {
    
  };

  /**
   * Validator for createMegaSign API that sends an agreement out for signature to multiple recipients
   *
   * @param megaSignCreationRequest Information about the MegaSign agreement that you want to send.
   * @param opts optional params
   *
   * @throws ApiError
   */
  MegaSignApiValidator.createMegaSignValidator = function(megaSignCreationRequest,
                                                          opts) {
    ApiValidatorHelper.validateParameter(megaSignCreationRequest, SdkErrorCodes.MISSING_REQUIRED_PARAM, MEGA_SIGN_CREATION_REQUEST);

    var megaSignCreationInfo = megaSignCreationRequest.getMegaSignCreationInfo();
    ApiValidatorHelper.validateParameter(megaSignCreationInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, MEGA_SIGN_CREATION_INFO);

    var fileInfos = megaSignCreationInfo.getFileInfos();
    validateFileInfo(fileInfos);

    ApiValidatorHelper.validateParameter(megaSignCreationInfo.getName(), SdkErrorCodes.MISSING_REQUIRED_PARAM, NAME);

    MegaSignApiValidator.validatePostSignOptions(megaSignCreationInfo.getPostSignOptions());
    var recipientSetInfos = megaSignCreationInfo.getRecipientSetInfos();
    if (recipientSetInfos)
      validateRecipientSetInfos(recipientSetInfos);
    
    ApiValidatorHelper.validateParameter(megaSignCreationInfo.getSignatureType(), SdkErrorCodes.MISSING_REQUIRED_PARAM, SIGNATURE_TYPE);

  };

  /**
   * Validator for getMegaSignInfo API that retrieves the detailed information of the specified megaSign parent agreement.
   *
   * @param megaSignId The Id of megaSign whose information is to be retrieved.
   * @param opts optional params
   *
   * @throws ApiError
   */
  MegaSignApiValidator.getMegaSignInfoValidator = function(megaSignId,
                                                           opts) {
    ApiValidatorHelper.validateId(megaSignId,
                                  SdkErrorCodes.INVALID_MEGASIGN_ID);
  };

  /**
   * Validator for getMegaSignChildAgreements API that retrieves all the child agreements of the specified megaSign parent agreement.
   *
   * @param megaSignId The Id of megaSign whose child agreements are to be retrieved.
   * @param opts optional params
   * 
   * @throws ApiError
   */
  MegaSignApiValidator.getMegaSignChildAgreementsValidator = function(megaSignId,
                                                                      opts) {
    ApiValidatorHelper.validateId(megaSignId,
                                  SdkErrorCodes.INVALID_MEGASIGN_ID);
  };

  /**
   * Validator for getMegaSignFormData API that retrieves data entered by recipients into interactive form fields at the time they signed the
   * child agreements of the specified MegaSign agreement.
   *
   * @param megaSignId The agreementId of agreement whose form data is to be retrieved.
   * @param opts optional params
   *
   * @throws ApiError
   */
  MegaSignApiValidator.getMegaSignFormDataValidator = function(megaSignId,
                                                               opts) {
    ApiValidatorHelper.validateId(megaSignId,
                                  SdkErrorCodes.INVALID_MEGASIGN_ID);
  };

  /**
   * Validator for updateMegaSignStatus API that cancels all the child agreements of the specified MegaSign agreement.
   *
   * @param megaSignStatusUpdateInfo megaSign status update information object.
   * @param megaSignId The Id of megaSign whose status is to be cancelled.
   * @param opts optional params
   *
   * @throws ApiError
   */

  MegaSignApiValidator.updateMegaSignStatusValidator = function (megaSignStatusUpdateInfo,
                                                                 megaSignId,
                                                                 opts) {
    ApiValidatorHelper.validateId(megaSignId,
                                  SdkErrorCodes.INVALID_MEGASIGN_ID);

    ApiValidatorHelper.validateParameter(megaSignStatusUpdateInfo, SdkErrorCodes.MISSING_REQUIRED_PARAM, MEGA_SIGN_STATUS_UPDATE_INFO);
    var paramList = [];
    var updateValue = megaSignStatusUpdateInfo.getValue();

    paramList.push({param: updateValue, sdkErrorCode: SdkErrorCodes.INVALID_MEGASIGN_STATUS});

    ApiValidatorHelper.validateParameters(paramList);
  };

  /**
   * Helper method that takes a list of FileInfo objects and validates them.
   * 
   * @param fileInfos the fileInfo that needs to be validated
   * @throws ApiError
   */

  var validateFileInfo = function (fileInfos) {
    if (!fileInfos)
      throw new ApiError(SdkErrorCodes.INVALID_FILE_INFO);
    var length = fileInfos.length;
    for (var i=0; i< length; i++) {
      // Validating the FileInfo object.
      if (!fileInfos[i])
        throw new ApiError(SdkErrorCodes.INVALID_FILE_INFO);
      
      var documentUrl = fileInfos[i].getDocumentURL();
      var url = documentUrl ? documentUrl.getUrl() : null ;
    
      ApiValidatorHelper.validateFileInfo(fileInfos[i].getDocumentURL(),
                                          fileInfos[i].getLibraryDocumentId(),
                                          fileInfos[i].getLibraryDocumentName(),
                                          fileInfos[i].getTransientDocumentId(),
                                          url);
    }
    
  }

  /**
   * Helper method to validate recipient set.
   * 
   * @param recipientSetInfos the recipientSetInfo that needs to be validated
   * @throws ApiError
   */
  var validateRecipientSetInfos = function (recipientSetInfos) {
    
    for (var i=0; i < recipientSetInfos.length; i++) {

      ApiValidatorHelper.validateParameter(recipientSetInfos[i].getRecipientSetMemberInfos(), SdkErrorCodes.MISSING_REQUIRED_PARAM, RECIPIENT_SET_MEMBER_INFOS);
      var recipientInfos = recipientSetInfos[i].getRecipientSetMemberInfos();
      var numberOfRecipients = recipientInfos.length;

      if (numberOfRecipients > 1) {
        throw new ApiError(SdkErrorCodes.RECIPIENT_SET_NOT_SUPPORTED);
      }
      for (var j = 0; j < numberOfRecipients; j++) {
        ApiValidatorHelper.validateRecipientSetInfos(recipientInfos[j].getEmail(),
                                                     recipientInfos[j].getFax(),
                                                     numberOfRecipients);

      }
    }

  };

  /**
   * Helper method that checks the validity of post sign options
   *
   * @param postSignOptions The postSignOptions that need to be validated
   * @throws ApiError
   */
  MegaSignApiValidator.validatePostSignOptions = function(postSignOptions) {
    if (!postSignOptions)
      return;
    ApiValidatorHelper.validatePostSignOptions(postSignOptions.getRedirectUrl(),
                                               postSignOptions.getRedirectDelay());
  };

return MegaSignApiValidator;
}));