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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/DocumentHistoryEvent'), require('../../model/agreements/NextParticipantSetInfo'), require('../../model/agreements/ParticipantSetInfo'));

}(function(ApiClient, DocumentHistoryEvent, NextParticipantSetInfo, ParticipantSetInfo) {
  'use strict';


  /**
   * @module model/agreements/AgreementInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>AgreementInfo</code>.
   * @alias module:model/agreements/AgreementInfo
   * @class
   */
  var AgreementInfo = function() {
    var _this = this;


    _this.agreementId = undefined;

    _this.events = undefined;

    _this.expiration = undefined;

    _this.latestVersionId = undefined;

    _this.locale = undefined;

    _this.message = undefined;

    _this.modifiable = undefined;

    _this.name = undefined;

    _this.nextParticipantSetInfos = undefined;

    _this.participantSetInfos = undefined;

    _this.securityOptions = undefined;

    _this.status = undefined;

    _this.vaultingEnabled = undefined;

   /**
    * A resource identifier that can be used to uniquely identify the agreement resource in other apis
    * @function getAgreementId
    * @return  {module:model/agreements/String} A resource identifier that can be used to uniquely identify the agreement resource in other apis  
    * @instance
    */
    _this.getAgreementId = function() {
      return _this.agreementId;
    };

   /**
    * A resource identifier that can be used to uniquely identify the agreement resource in other apis
    * @function setAgreementId
    * @param agreementId {module:model/agreements/String} A resource identifier that can be used to uniquely identify the agreement resource in other apis
    * @instance
    */
    _this.setAgreementId = function(agreementId) {
      _this.agreementId = agreementId;
    };

   /**
    * An ordered list of the events in the audit trail of this document
    * @function getEvents
    * @return  {module:model/agreements/Array} An ordered list of the events in the audit trail of this document  
    * @instance
    */
    _this.getEvents = function() {
      return _this.events;
    };

   /**
    * An ordered list of the events in the audit trail of this document
    * @function setEvents
    * @param events {module:model/agreements/Array} An ordered list of the events in the audit trail of this document
    * @instance
    */
    _this.setEvents = function(events) {
      _this.events = events;
    };

   /**
    * The date after which the document can no longer be signed, if an expiration date is configured. The value is nil if an expiration date is not set for the document
    * @function getExpiration
    * @return  {module:model/agreements/Date} The date after which the document can no longer be signed, if an expiration date is configured. The value is nil if an expiration date is not set for the document  
    * @instance
    */
    _this.getExpiration = function() {
      return _this.expiration;
    };

   /**
    * The date after which the document can no longer be signed, if an expiration date is configured. The value is nil if an expiration date is not set for the document
    * @function setExpiration
    * @param expiration {module:model/agreements/Date} The date after which the document can no longer be signed, if an expiration date is configured. The value is nil if an expiration date is not set for the document
    * @instance
    */
    _this.setExpiration = function(expiration) {
      _this.expiration = expiration;
    };

   /**
    * An ID which uniquely identifies the current version of the document
    * @function getLatestVersionId
    * @return  {module:model/agreements/String} An ID which uniquely identifies the current version of the document  
    * @instance
    */
    _this.getLatestVersionId = function() {
      return _this.latestVersionId;
    };

   /**
    * An ID which uniquely identifies the current version of the document
    * @function setLatestVersionId
    * @param latestVersionId {module:model/agreements/String} An ID which uniquely identifies the current version of the document
    * @instance
    */
    _this.setLatestVersionId = function(latestVersionId) {
      _this.latestVersionId = latestVersionId;
    };

   /**
    * The locale associated with this agreement - for example, en_US or fr_FR
    * @function getLocale
    * @return  {module:model/agreements/String} The locale associated with this agreement - for example, en_US or fr_FR  
    * @instance
    */
    _this.getLocale = function() {
      return _this.locale;
    };

   /**
    * The locale associated with this agreement - for example, en_US or fr_FR
    * @function setLocale
    * @param locale {module:model/agreements/String} The locale associated with this agreement - for example, en_US or fr_FR
    * @instance
    */
    _this.setLocale = function(locale) {
      _this.locale = locale;
    };

   /**
    * The message associated with the document that the sender has provided
    * @function getMessage
    * @return  {module:model/agreements/String} The message associated with the document that the sender has provided  
    * @instance
    */
    _this.getMessage = function() {
      return _this.message;
    };

   /**
    * The message associated with the document that the sender has provided
    * @function setMessage
    * @param message {module:model/agreements/String} The message associated with the document that the sender has provided
    * @instance
    */
    _this.setMessage = function(message) {
      _this.message = message;
    };

   /**
    * Information about whether the agreement can be modified
    * @function getModifiable
    * @return  {module:model/agreements/Boolean} Information about whether the agreement can be modified  
    * @instance
    */
    _this.getModifiable = function() {
      return _this.modifiable;
    };

   /**
    * Information about whether the agreement can be modified
    * @function setModifiable
    * @param modifiable {module:model/agreements/Boolean} Information about whether the agreement can be modified
    * @instance
    */
    _this.setModifiable = function(modifiable) {
      _this.modifiable = modifiable;
    };

   /**
    * The name of the document, specified by the sender
    * @function getName
    * @return  {module:model/agreements/String} The name of the document, specified by the sender  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the document, specified by the sender
    * @function setName
    * @param name {module:model/agreements/String} The name of the document, specified by the sender
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Information about who needs to act next for this document - for example, if the agreement is in status OUT_FOR_SIGNATURE or OUT_FOR_APPROVAL, this will be the next signer or approver. If the AgreementStatus is a terminal state, this array is empty
    * @function getNextParticipantSetInfos
    * @return  {module:model/agreements/Array} Information about who needs to act next for this document - for example, if the agreement is in status OUT_FOR_SIGNATURE or OUT_FOR_APPROVAL, this will be the next signer or approver. If the AgreementStatus is a terminal state, this array is empty  
    * @instance
    */
    _this.getNextParticipantSetInfos = function() {
      return _this.nextParticipantSetInfos;
    };

   /**
    * Information about who needs to act next for this document - for example, if the agreement is in status OUT_FOR_SIGNATURE or OUT_FOR_APPROVAL, this will be the next signer or approver. If the AgreementStatus is a terminal state, this array is empty
    * @function setNextParticipantSetInfos
    * @param nextParticipantSetInfos {module:model/agreements/Array} Information about who needs to act next for this document - for example, if the agreement is in status OUT_FOR_SIGNATURE or OUT_FOR_APPROVAL, this will be the next signer or approver. If the AgreementStatus is a terminal state, this array is empty
    * @instance
    */
    _this.setNextParticipantSetInfos = function(nextParticipantSetInfos) {
      _this.nextParticipantSetInfos = nextParticipantSetInfos;
    };

   /**
    * Information about all the participant sets of this document
    * @function getParticipantSetInfos
    * @return  {module:model/agreements/Array} Information about all the participant sets of this document  
    * @instance
    */
    _this.getParticipantSetInfos = function() {
      return _this.participantSetInfos;
    };

   /**
    * Information about all the participant sets of this document
    * @function setParticipantSetInfos
    * @param participantSetInfos {module:model/agreements/Array} Information about all the participant sets of this document
    * @instance
    */
    _this.setParticipantSetInfos = function(participantSetInfos) {
      _this.participantSetInfos = participantSetInfos;
    };

   /**
    * Security information about the document that specifies whether or not a password is required to view and sign the document
    * @function getSecurityOptions
    * @return  {module:model/agreements/Array} Security information about the document that specifies whether or not a password is required to view and sign the document  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Security information about the document that specifies whether or not a password is required to view and sign the document
    * @function setSecurityOptions
    * @param securityOptions {module:model/agreements/Array} Security information about the document that specifies whether or not a password is required to view and sign the document
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * The current status of the document
    * @function getStatus
    * @return  {module:model/agreements/String} The current status of the document  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * The current status of the document
    * @function setStatus
    * @param status {module:model/agreements/String} The current status of the document
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

   /**
    * Whether vaulting was enabled for the agreement
    * @function getVaultingEnabled
    * @return  {module:model/agreements/Boolean} Whether vaulting was enabled for the agreement  
    * @instance
    */
    _this.getVaultingEnabled = function() {
      return _this.vaultingEnabled;
    };

   /**
    * Whether vaulting was enabled for the agreement
    * @function setVaultingEnabled
    * @param vaultingEnabled {module:model/agreements/Boolean} Whether vaulting was enabled for the agreement
    * @instance
    */
    _this.setVaultingEnabled = function(vaultingEnabled) {
      _this.vaultingEnabled = vaultingEnabled;
    };

  };

  /**
   * @private
   * Constructs a <code>AgreementInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/AgreementInfo} obj Optional instance to populate.
   * @return {module:model/agreements/AgreementInfo} The populated <code>AgreementInfo</code> instance.
   */
  AgreementInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AgreementInfo();

      if (data.hasOwnProperty('agreementId')) {
        obj.setAgreementId(data.agreementId);
      }
      if (data.hasOwnProperty('events')) {
        obj.setEvents(ApiClient.convertToType(data.events,[DocumentHistoryEvent]));
      }
      if (data.hasOwnProperty('expiration')) {
        obj.setExpiration(data.expiration);
      }
      if (data.hasOwnProperty('latestVersionId')) {
        obj.setLatestVersionId(data.latestVersionId);
      }
      if (data.hasOwnProperty('locale')) {
        obj.setLocale(data.locale);
      }
      if (data.hasOwnProperty('message')) {
        obj.setMessage(data.message);
      }
      if (data.hasOwnProperty('modifiable')) {
        obj.setModifiable(data.modifiable);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('nextParticipantSetInfos')) {
        obj.setNextParticipantSetInfos(ApiClient.convertToType(data.nextParticipantSetInfos,[NextParticipantSetInfo]));
      }
      if (data.hasOwnProperty('participantSetInfos')) {
        obj.setParticipantSetInfos(ApiClient.convertToType(data.participantSetInfos,[ParticipantSetInfo]));
      }
      if (data.hasOwnProperty('securityOptions')) {
        obj.setSecurityOptions(data.securityOptions);
      }
      if (data.hasOwnProperty('status')) {
        obj.setStatus(data.status);
      }
      if (data.hasOwnProperty('vaultingEnabled')) {
        obj.setVaultingEnabled(data.vaultingEnabled);
      }
    }
    return obj;
  };


  /**
   * Allowed values for the <code>securityOptions</code> property.
   * @enum {String}
   * @readonly
   */
AgreementInfo.SecurityOptionsEnum = {
  
  
    /**
     * value: OPEN_PROTECTED
     * @const
     */
    OPEN_PROTECTED: "OPEN_PROTECTED",
    
  
    /**
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };
  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
AgreementInfo.StatusEnum = {
  
  
    /**
     * value: OUT_FOR_SIGNATURE
     * @const
     */
    OUT_FOR_SIGNATURE: "OUT_FOR_SIGNATURE",
    
  
    /**
     * value: WAITING_FOR_REVIEW
     * @const
     */
    WAITING_FOR_REVIEW: "WAITING_FOR_REVIEW",
    
  
    /**
     * value: SIGNED
     * @const
     */
    SIGNED: "SIGNED",
    
  
    /**
     * value: APPROVED
     * @const
     */
    APPROVED: "APPROVED",
    
  
    /**
     * value: ABORTED
     * @const
     */
    ABORTED: "ABORTED",
    
  
    /**
     * value: DOCUMENT_LIBRARY
     * @const
     */
    DOCUMENT_LIBRARY: "DOCUMENT_LIBRARY",
    
  
    /**
     * value: WIDGET
     * @const
     */
    WIDGET: "WIDGET",
    
  
    /**
     * value: EXPIRED
     * @const
     */
    EXPIRED: "EXPIRED",
    
  
    /**
     * value: ARCHIVED
     * @const
     */
    ARCHIVED: "ARCHIVED",
    
  
    /**
     * value: PREFILL
     * @const
     */
    PREFILL: "PREFILL",
    
  
    /**
     * value: AUTHORING
     * @const
     */
    AUTHORING: "AUTHORING",
    
  
    /**
     * value: WAITING_FOR_FAXIN
     * @const
     */
    WAITING_FOR_FAXIN: "WAITING_FOR_FAXIN",
    
  
    /**
     * value: WAITING_FOR_VERIFICATION
     * @const
     */
    WAITING_FOR_VERIFICATION: "WAITING_FOR_VERIFICATION",
    
  
    /**
     * value: WIDGET_WAITING_FOR_VERIFICATION
     * @const
     */
    WIDGET_WAITING_FOR_VERIFICATION: "WIDGET_WAITING_FOR_VERIFICATION",
    
  
    /**
     * value: WAITING_FOR_PAYMENT
     * @const
     */
    WAITING_FOR_PAYMENT: "WAITING_FOR_PAYMENT",
    
  
    /**
     * value: OUT_FOR_APPROVAL
     * @const
     */
    OUT_FOR_APPROVAL: "OUT_FOR_APPROVAL",
    
  
    /**
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };

  return AgreementInfo;
}));


