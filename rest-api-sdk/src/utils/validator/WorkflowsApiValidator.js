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
    module.exports = factory(require('./SdkErrorCodes'), require('./ApiValidatorHelper'), require('../ApiError'), require( '../StringUtil'));
  
}(function(SdkErrorCode, ApiValidatorHelper , ApiError, StringUtil) {
  'use strict';

  /**
   * Validator for Workflows Api. The main purpose of this is to check the validity of the parameters passed to
   * the Workflows API and throw ApiError with required error messages if the validation fails.
   */
  var WorkFlowsApiValidator = function(){};
  
  /**
   * Validator for getWorkflows API that retrieves workflows for a user.
   *
   * @param {Object}                        opts Optional parameters
   * @param opts.includeDraftWorkflows      Include draft workflows.
   * @param opts.groupId                    The group identifier for which the workflows will be fetched
   * @throws ApiError
   */
  WorkFlowsApiValidator.getWorkflowsValidator = function(opts) {
    var groupId = opts.groupId;
    if (groupId)
      ApiValidatorHelper.validateId(groupId,
                                    SdkErrorCode.INVALID_GROUP_ID);
  };

  /**
   * Validator for getWorkflowInfo API that retrieves the details of a workflow.
   *
   * @param workflowId    The workflow identifier, as provided by getWorkflows API.
   * @throws ApiError
   */
  WorkFlowsApiValidator.getWorkflowInfoValidator = function(workflowId,
                                                            opts) {
    ApiValidatorHelper.validateId(workflowId,
                                  SdkErrorCode.INVALID_WORKFLOW_ID);
  };
  /**
   * Validator for createWorkflowAgreement API that creates an agreement, sends it out for signatures,
   * and returns the agreementID in the response to the client.
   * @param customWorkflowAgreementCreationRequest  Information about the agreement that you want to send and authoring 
   *                                                options that you want to apply at the time of sending.
   *
   * @param workflowId                             The workflow identifier, as provided by getWorkflows API.
   * @throws ApiError
   */
  WorkFlowsApiValidator.createWorkflowAgreementValidator = function(customWorkflowAgreementCreationRequest,
                                                                    workflowId,
                                                                    opts) {

    ApiValidatorHelper.validateId(workflowId, SdkErrorCode.INVALID_WORKFLOW_ID);
    ApiValidatorHelper.validateParameter(customWorkflowAgreementCreationRequest);

    var documentCreationInfo = customWorkflowAgreementCreationRequest.getDocumentCreationInfo();
    ApiValidatorHelper.validateParameter(documentCreationInfo);
    ApiValidatorHelper.validateParameter(documentCreationInfo.getName());

    var fileInfos = documentCreationInfo.getFileInfos();
    if (!fileInfos)
      throw new ApiError(SdkErrorCode.INVALID_FILE_INFO);

    for(var i=0; i < fileInfos.length; i++){
      var fileInfo = fileInfos[i];
      if (!fileInfo)
        throw new ApiError(SdkErrorCode.INVALID_FILE_INFO);

      ApiValidatorHelper.validateParameter(fileInfo.getName(),
                                           SdkErrorCode.FILE_INFO_NAME_MISSING);

      if (!StringUtil.isNullOrUndefined(fileInfo.getTransientDocumentId()))
        ApiValidatorHelper.validateId(fileInfo.getTransientDocumentId(),
                                      SdkErrorCode.INVALID_TRANSIENTDOCUMENT_ID);

      if (!StringUtil.isNullOrUndefined(fileInfo.getWorkflowLibraryDocumentId()))
        ApiValidatorHelper.validateId(fileInfo.getWorkflowLibraryDocumentId(),
                                      SdkErrorCode.INVALID_LIBRARYDOCUMENT_ID);

    }
    validatePostSignOptions(documentCreationInfo.getPostSignOptions());

    var recipientSetInfos = documentCreationInfo.getRecipientsListInfo();
    validateRecipientSetInfos(recipientSetInfos);

  };

  /**
   * Helper method to validate recipient set.
   */
  var validateRecipientSetInfos = function (recipientSetInfos) {
    for (var i=0; i < recipientSetInfos.length; i++) {

      ApiValidatorHelper.validateParameter(recipientSetInfos[i].getRecipients());
      var recipientInfos = recipientSetInfos[i].getRecipients();
      var numberOfRecipients = recipientInfos.length;

      for (var j = 0; j < numberOfRecipients; j++){
        ApiValidatorHelper.validateWorkflowRecipientSetInfos(recipientInfos[j].getEmail(),
                                                             recipientInfos[j].getFax(),
                                                             numberOfRecipients);

      }
    }

  };

  /**
   * Helper method that checks the validity of post sign options
   */
  var validatePostSignOptions = function(postSignOptions) {
    if (!postSignOptions)
      return;
    ApiValidatorHelper.validatePostSignOptions(postSignOptions.getRedirectUrl(),
                                               postSignOptions.getRedirectDelay());
  };

return WorkFlowsApiValidator;
}));