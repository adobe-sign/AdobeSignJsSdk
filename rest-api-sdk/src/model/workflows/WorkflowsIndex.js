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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/workflows/AgreementCreationResponse'), require('../../model/workflows/CcsInfo'), require('../../model/workflows/CCsListInfoDescription'), require('../../model/workflows/CustomWorkflowAgreementCreationRequest'), require('../../model/workflows/CustomWorkflowFileInfo'), require('../../model/workflows/DocumentCreationInfo'), require('../../model/workflows/ExpirationFieldInfoDescription'), require('../../model/workflows/FileInfo'), require('../../model/workflows/FileInfosDescription'), require('../../model/workflows/FormFieldCondition'), require('../../model/workflows/FormFieldLocation'), require('../../model/workflows/InteractiveOptions'), require('../../model/workflows/LocaleFieldInfoDescription'), require('../../model/workflows/MergefieldInfo'), require('../../model/workflows/MergeFieldInfoDescription'), require('../../model/workflows/PasswordFieldInfoDescription'), require('../../model/workflows/PostSignOptions'), require('../../model/workflows/RecipientInfo'), require('../../model/workflows/RecipientsInfo'), require('../../model/workflows/RecipientsListInfoDescription'), require('../../model/workflows/SecurityOption'), require('../../model/workflows/URLFileInfo'), require('../../model/workflows/UserWorkflow'), require('../../model/workflows/UserWorkflows'), require('../../model/workflows/VaultingInfo'), require('../../model/workflows/WorkflowBasedFormField'), require('../../model/workflows/WorkflowDefaultParams'), require('../../model/workflows/WorkflowDescription'), require('../../model/workflows/WorkflowLibraryDocument'));

}(function(ApiClient, AgreementCreationResponse, CcsInfo, CCsListInfoDescription, CustomWorkflowAgreementCreationRequest, CustomWorkflowFileInfo, DocumentCreationInfo, ExpirationFieldInfoDescription, FileInfo, FileInfosDescription, FormFieldCondition, FormFieldLocation, InteractiveOptions, LocaleFieldInfoDescription, MergefieldInfo, MergeFieldInfoDescription, PasswordFieldInfoDescription, PostSignOptions, RecipientInfo, RecipientsInfo, RecipientsListInfoDescription, SecurityOption, URLFileInfo, UserWorkflow, UserWorkflows, VaultingInfo, WorkflowBasedFormField, WorkflowDefaultParams, WorkflowDescription, WorkflowLibraryDocument) {
  'use strict';

  /**
   * @module WorkflowsIndex
   * @version 1.1.0
   */
  var WorkflowsIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AgreementCreationResponse model constructor.
     * @property {module:model/workflows/AgreementCreationResponse}
     */
    AgreementCreationResponse: AgreementCreationResponse,
    /**
     * The CcsInfo model constructor.
     * @property {module:model/workflows/CcsInfo}
     */
    CcsInfo: CcsInfo,
    /**
     * The CCsListInfoDescription model constructor.
     * @property {module:model/workflows/CCsListInfoDescription}
     */
    CCsListInfoDescription: CCsListInfoDescription,
    /**
     * The CustomWorkflowAgreementCreationRequest model constructor.
     * @property {module:model/workflows/CustomWorkflowAgreementCreationRequest}
     */
    CustomWorkflowAgreementCreationRequest: CustomWorkflowAgreementCreationRequest,
    /**
     * The CustomWorkflowFileInfo model constructor.
     * @property {module:model/workflows/CustomWorkflowFileInfo}
     */
    CustomWorkflowFileInfo: CustomWorkflowFileInfo,
    /**
     * The DocumentCreationInfo model constructor.
     * @property {module:model/workflows/DocumentCreationInfo}
     */
    DocumentCreationInfo: DocumentCreationInfo,
    /**
     * The ExpirationFieldInfoDescription model constructor.
     * @property {module:model/workflows/ExpirationFieldInfoDescription}
     */
    ExpirationFieldInfoDescription: ExpirationFieldInfoDescription,
    /**
     * The FileInfo model constructor.
     * @property {module:model/workflows/FileInfo}
     */
    FileInfo: FileInfo,
    /**
     * The FileInfosDescription model constructor.
     * @property {module:model/workflows/FileInfosDescription}
     */
    FileInfosDescription: FileInfosDescription,
    /**
     * The FormFieldCondition model constructor.
     * @property {module:model/workflows/FormFieldCondition}
     */
    FormFieldCondition: FormFieldCondition,
    /**
     * The FormFieldLocation model constructor.
     * @property {module:model/workflows/FormFieldLocation}
     */
    FormFieldLocation: FormFieldLocation,
    /**
     * The InteractiveOptions model constructor.
     * @property {module:model/workflows/InteractiveOptions}
     */
    InteractiveOptions: InteractiveOptions,
    /**
     * The LocaleFieldInfoDescription model constructor.
     * @property {module:model/workflows/LocaleFieldInfoDescription}
     */
    LocaleFieldInfoDescription: LocaleFieldInfoDescription,
    /**
     * The MergefieldInfo model constructor.
     * @property {module:model/workflows/MergefieldInfo}
     */
    MergefieldInfo: MergefieldInfo,
    /**
     * The MergeFieldInfoDescription model constructor.
     * @property {module:model/workflows/MergeFieldInfoDescription}
     */
    MergeFieldInfoDescription: MergeFieldInfoDescription,
    /**
     * The PasswordFieldInfoDescription model constructor.
     * @property {module:model/workflows/PasswordFieldInfoDescription}
     */
    PasswordFieldInfoDescription: PasswordFieldInfoDescription,
    /**
     * The PostSignOptions model constructor.
     * @property {module:model/workflows/PostSignOptions}
     */
    PostSignOptions: PostSignOptions,
    /**
     * The RecipientInfo model constructor.
     * @property {module:model/workflows/RecipientInfo}
     */
    RecipientInfo: RecipientInfo,
    /**
     * The RecipientsInfo model constructor.
     * @property {module:model/workflows/RecipientsInfo}
     */
    RecipientsInfo: RecipientsInfo,
    /**
     * The RecipientsListInfoDescription model constructor.
     * @property {module:model/workflows/RecipientsListInfoDescription}
     */
    RecipientsListInfoDescription: RecipientsListInfoDescription,
    /**
     * The SecurityOption model constructor.
     * @property {module:model/workflows/SecurityOption}
     */
    SecurityOption: SecurityOption,
    /**
     * The URLFileInfo model constructor.
     * @property {module:model/workflows/URLFileInfo}
     */
    URLFileInfo: URLFileInfo,
    /**
     * The UserWorkflow model constructor.
     * @property {module:model/workflows/UserWorkflow}
     */
    UserWorkflow: UserWorkflow,
    /**
     * The UserWorkflows model constructor.
     * @property {module:model/workflows/UserWorkflows}
     */
    UserWorkflows: UserWorkflows,
    /**
     * The VaultingInfo model constructor.
     * @property {module:model/workflows/VaultingInfo}
     */
    VaultingInfo: VaultingInfo,
    /**
     * The WorkflowBasedFormField model constructor.
     * @property {module:model/workflows/WorkflowBasedFormField}
     */
    WorkflowBasedFormField: WorkflowBasedFormField,
    /**
     * The WorkflowDefaultParams model constructor.
     * @property {module:model/workflows/WorkflowDefaultParams}
     */
    WorkflowDefaultParams: WorkflowDefaultParams,
    /**
     * The WorkflowDescription model constructor.
     * @property {module:model/workflows/WorkflowDescription}
     */
    WorkflowDescription: WorkflowDescription,
    /**
     * The WorkflowLibraryDocument model constructor.
     * @property {module:model/workflows/WorkflowLibraryDocument}
     */
    WorkflowLibraryDocument: WorkflowLibraryDocument
  };

  return WorkflowsIndex ;
}));
