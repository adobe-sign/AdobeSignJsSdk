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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/AgreementCreationInfo'), require('../../model/agreements/AgreementCreationResponse'), require('../../model/agreements/AgreementDocuments'), require('../../model/agreements/AgreementInfo'), require('../../model/agreements/AgreementStatusUpdateInfo'), require('../../model/agreements/AgreementStatusUpdateResponse'), require('../../model/agreements/AlternateParticipantInfo'), require('../../model/agreements/AlternateParticipantResponse'), require('../../model/agreements/CombinedDocumentPagesInfo'), require('../../model/agreements/DeviceLocation'), require('../../model/agreements/DisplayUserInfo'), require('../../model/agreements/DisplayUserSetInfo'), require('../../model/agreements/Document'), require('../../model/agreements/DocumentCreationInfo'), require('../../model/agreements/DocumentHistoryEvent'), require('../../model/agreements/DocumentImageUrl'), require('../../model/agreements/DocumentImageUrls'), require('../../model/agreements/DocumentPageInfo'), require('../../model/agreements/DocumentUrl'), require('../../model/agreements/ExternalId'), require('../../model/agreements/FileInfo'), require('../../model/agreements/FileUploadOptions'), require('../../model/agreements/FormFieldCondition'), require('../../model/agreements/FormFieldLocation'), require('../../model/agreements/ImageUrl'), require('../../model/agreements/InteractiveOptions'), require('../../model/agreements/MergefieldInfo'), require('../../model/agreements/NextParticipantInfo'), require('../../model/agreements/NextParticipantSetInfo'), require('../../model/agreements/ParticipantInfo'), require('../../model/agreements/ParticipantSetInfo'), require('../../model/agreements/PhoneInfo'), require('../../model/agreements/PostSignOptions'), require('../../model/agreements/RecipientInfo'), require('../../model/agreements/RecipientSecurityOption'), require('../../model/agreements/RecipientSetInfo'), require('../../model/agreements/RequestFormField'), require('../../model/agreements/SecurityOption'), require('../../model/agreements/SendThroughWebOptions'), require('../../model/agreements/SigningUrl'), require('../../model/agreements/SigningUrlResponse'), require('../../model/agreements/SigningUrlSetInfo'), require('../../model/agreements/SupportingDocument'), require('../../model/agreements/URLFileInfo'), require('../../model/agreements/UserAgreement'), require('../../model/agreements/UserAgreements'), require('../../model/agreements/VaultingInfo'));

}(function(ApiClient, AgreementCreationInfo, AgreementCreationResponse, AgreementDocuments, AgreementInfo, AgreementStatusUpdateInfo, AgreementStatusUpdateResponse, AlternateParticipantInfo, AlternateParticipantResponse, CombinedDocumentPagesInfo, DeviceLocation, DisplayUserInfo, DisplayUserSetInfo, Document, DocumentCreationInfo, DocumentHistoryEvent, DocumentImageUrl, DocumentImageUrls, DocumentPageInfo, DocumentUrl, ExternalId, FileInfo, FileUploadOptions, FormFieldCondition, FormFieldLocation, ImageUrl, InteractiveOptions, MergefieldInfo, NextParticipantInfo, NextParticipantSetInfo, ParticipantInfo, ParticipantSetInfo, PhoneInfo, PostSignOptions, RecipientInfo, RecipientSecurityOption, RecipientSetInfo, RequestFormField, SecurityOption, SendThroughWebOptions, SigningUrl, SigningUrlResponse, SigningUrlSetInfo, SupportingDocument, URLFileInfo, UserAgreement, UserAgreements, VaultingInfo) {
  'use strict';

  /**
   * @module AgreementsIndex
   * @version 1.1.0
   */
  var AgreementsIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AgreementCreationInfo model constructor.
     * @property {module:model/agreements/AgreementCreationInfo}
     */
    AgreementCreationInfo: AgreementCreationInfo,
    /**
     * The AgreementCreationResponse model constructor.
     * @property {module:model/agreements/AgreementCreationResponse}
     */
    AgreementCreationResponse: AgreementCreationResponse,
    /**
     * The AgreementDocuments model constructor.
     * @property {module:model/agreements/AgreementDocuments}
     */
    AgreementDocuments: AgreementDocuments,
    /**
     * The AgreementInfo model constructor.
     * @property {module:model/agreements/AgreementInfo}
     */
    AgreementInfo: AgreementInfo,
    /**
     * The AgreementStatusUpdateInfo model constructor.
     * @property {module:model/agreements/AgreementStatusUpdateInfo}
     */
    AgreementStatusUpdateInfo: AgreementStatusUpdateInfo,
    /**
     * The AgreementStatusUpdateResponse model constructor.
     * @property {module:model/agreements/AgreementStatusUpdateResponse}
     */
    AgreementStatusUpdateResponse: AgreementStatusUpdateResponse,
    /**
     * The AlternateParticipantInfo model constructor.
     * @property {module:model/agreements/AlternateParticipantInfo}
     */
    AlternateParticipantInfo: AlternateParticipantInfo,
    /**
     * The AlternateParticipantResponse model constructor.
     * @property {module:model/agreements/AlternateParticipantResponse}
     */
    AlternateParticipantResponse: AlternateParticipantResponse,
    /**
     * The CombinedDocumentPagesInfo model constructor.
     * @property {module:model/agreements/CombinedDocumentPagesInfo}
     */
    CombinedDocumentPagesInfo: CombinedDocumentPagesInfo,
    /**
     * The DeviceLocation model constructor.
     * @property {module:model/agreements/DeviceLocation}
     */
    DeviceLocation: DeviceLocation,
    /**
     * The DisplayUserInfo model constructor.
     * @property {module:model/agreements/DisplayUserInfo}
     */
    DisplayUserInfo: DisplayUserInfo,
    /**
     * The DisplayUserSetInfo model constructor.
     * @property {module:model/agreements/DisplayUserSetInfo}
     */
    DisplayUserSetInfo: DisplayUserSetInfo,
    /**
     * The Document model constructor.
     * @property {module:model/agreements/Document}
     */
    Document: Document,
    /**
     * The DocumentCreationInfo model constructor.
     * @property {module:model/agreements/DocumentCreationInfo}
     */
    DocumentCreationInfo: DocumentCreationInfo,
    /**
     * The DocumentHistoryEvent model constructor.
     * @property {module:model/agreements/DocumentHistoryEvent}
     */
    DocumentHistoryEvent: DocumentHistoryEvent,
    /**
     * The DocumentImageUrl model constructor.
     * @property {module:model/agreements/DocumentImageUrl}
     */
    DocumentImageUrl: DocumentImageUrl,
    /**
     * The DocumentImageUrls model constructor.
     * @property {module:model/agreements/DocumentImageUrls}
     */
    DocumentImageUrls: DocumentImageUrls,
    /**
     * The DocumentPageInfo model constructor.
     * @property {module:model/agreements/DocumentPageInfo}
     */
    DocumentPageInfo: DocumentPageInfo,
    /**
     * The DocumentUrl model constructor.
     * @property {module:model/agreements/DocumentUrl}
     */
    DocumentUrl: DocumentUrl,
    /**
     * The ExternalId model constructor.
     * @property {module:model/agreements/ExternalId}
     */
    ExternalId: ExternalId,
    /**
     * The FileInfo model constructor.
     * @property {module:model/agreements/FileInfo}
     */
    FileInfo: FileInfo,
    /**
     * The FileUploadOptions model constructor.
     * @property {module:model/agreements/FileUploadOptions}
     */
    FileUploadOptions: FileUploadOptions,
    /**
     * The FormFieldCondition model constructor.
     * @property {module:model/agreements/FormFieldCondition}
     */
    FormFieldCondition: FormFieldCondition,
    /**
     * The FormFieldLocation model constructor.
     * @property {module:model/agreements/FormFieldLocation}
     */
    FormFieldLocation: FormFieldLocation,
    /**
     * The ImageUrl model constructor.
     * @property {module:model/agreements/ImageUrl}
     */
    ImageUrl: ImageUrl,
    /**
     * The InteractiveOptions model constructor.
     * @property {module:model/agreements/InteractiveOptions}
     */
    InteractiveOptions: InteractiveOptions,
    /**
     * The MergefieldInfo model constructor.
     * @property {module:model/agreements/MergefieldInfo}
     */
    MergefieldInfo: MergefieldInfo,
    /**
     * The NextParticipantInfo model constructor.
     * @property {module:model/agreements/NextParticipantInfo}
     */
    NextParticipantInfo: NextParticipantInfo,
    /**
     * The NextParticipantSetInfo model constructor.
     * @property {module:model/agreements/NextParticipantSetInfo}
     */
    NextParticipantSetInfo: NextParticipantSetInfo,
    /**
     * The ParticipantInfo model constructor.
     * @property {module:model/agreements/ParticipantInfo}
     */
    ParticipantInfo: ParticipantInfo,
    /**
     * The ParticipantSetInfo model constructor.
     * @property {module:model/agreements/ParticipantSetInfo}
     */
    ParticipantSetInfo: ParticipantSetInfo,
    /**
     * The PhoneInfo model constructor.
     * @property {module:model/agreements/PhoneInfo}
     */
    PhoneInfo: PhoneInfo,
    /**
     * The PostSignOptions model constructor.
     * @property {module:model/agreements/PostSignOptions}
     */
    PostSignOptions: PostSignOptions,
    /**
     * The RecipientInfo model constructor.
     * @property {module:model/agreements/RecipientInfo}
     */
    RecipientInfo: RecipientInfo,
    /**
     * The RecipientSecurityOption model constructor.
     * @property {module:model/agreements/RecipientSecurityOption}
     */
    RecipientSecurityOption: RecipientSecurityOption,
    /**
     * The RecipientSetInfo model constructor.
     * @property {module:model/agreements/RecipientSetInfo}
     */
    RecipientSetInfo: RecipientSetInfo,
    /**
     * The RequestFormField model constructor.
     * @property {module:model/agreements/RequestFormField}
     */
    RequestFormField: RequestFormField,
    /**
     * The SecurityOption model constructor.
     * @property {module:model/agreements/SecurityOption}
     */
    SecurityOption: SecurityOption,
    /**
     * The SendThroughWebOptions model constructor.
     * @property {module:model/agreements/SendThroughWebOptions}
     */
    SendThroughWebOptions: SendThroughWebOptions,
    /**
     * The SigningUrl model constructor.
     * @property {module:model/agreements/SigningUrl}
     */
    SigningUrl: SigningUrl,
    /**
     * The SigningUrlResponse model constructor.
     * @property {module:model/agreements/SigningUrlResponse}
     */
    SigningUrlResponse: SigningUrlResponse,
    /**
     * The SigningUrlSetInfo model constructor.
     * @property {module:model/agreements/SigningUrlSetInfo}
     */
    SigningUrlSetInfo: SigningUrlSetInfo,
    /**
     * The SupportingDocument model constructor.
     * @property {module:model/agreements/SupportingDocument}
     */
    SupportingDocument: SupportingDocument,
    /**
     * The URLFileInfo model constructor.
     * @property {module:model/agreements/URLFileInfo}
     */
    URLFileInfo: URLFileInfo,
    /**
     * The UserAgreement model constructor.
     * @property {module:model/agreements/UserAgreement}
     */
    UserAgreement: UserAgreement,
    /**
     * The UserAgreements model constructor.
     * @property {module:model/agreements/UserAgreements}
     */
    UserAgreements: UserAgreements,
    /**
     * The VaultingInfo model constructor.
     * @property {module:model/agreements/VaultingInfo}
     */
    VaultingInfo: VaultingInfo
  };

  return AgreementsIndex ;
}));
