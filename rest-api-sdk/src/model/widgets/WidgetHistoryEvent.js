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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/WidgetEventDeviceLocation'));

}(function(ApiClient, WidgetEventDeviceLocation) {
  'use strict';


  /**
   * @module model/widgets/WidgetHistoryEvent
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetHistoryEvent</code>.
   * @alias module:model/widgets/WidgetHistoryEvent
   * @class
   */
  var WidgetHistoryEvent = function() {
    var _this = this;


    _this.actingUserEmail = undefined;

    _this.actingUserIpAddress = undefined;

    _this.comment = undefined;

    _this.date = undefined;

    _this.description = undefined;

    _this.deviceLocation = undefined;

    _this.participantEmail = undefined;

    _this.synchronizationId = undefined;

    _this.type = undefined;

    _this.vaultEventId = undefined;

    _this.versionId = undefined;

   /**
    * Email address of the user that initiated the event
    * @function getActingUserEmail
    * @return  {module:model/widgets/String} Email address of the user that initiated the event  
    * @instance
    */
    _this.getActingUserEmail = function() {
      return _this.actingUserEmail;
    };

   /**
    * Email address of the user that initiated the event
    * @function setActingUserEmail
    * @param actingUserEmail {module:model/widgets/String} Email address of the user that initiated the event
    * @instance
    */
    _this.setActingUserEmail = function(actingUserEmail) {
      _this.actingUserEmail = actingUserEmail;
    };

   /**
    * The IP address of the user that initiated the event
    * @function getActingUserIpAddress
    * @return  {module:model/widgets/String} The IP address of the user that initiated the event  
    * @instance
    */
    _this.getActingUserIpAddress = function() {
      return _this.actingUserIpAddress;
    };

   /**
    * The IP address of the user that initiated the event
    * @function setActingUserIpAddress
    * @param actingUserIpAddress {module:model/widgets/String} The IP address of the user that initiated the event
    * @instance
    */
    _this.setActingUserIpAddress = function(actingUserIpAddress) {
      _this.actingUserIpAddress = actingUserIpAddress;
    };

   /**
    * The event comment. For RECALLED or REJECTED, the reason given by the user that initiates the event. For DELEGATE or SHARE, the message from the acting user to the participant
    * @function getComment
    * @return  {module:model/widgets/String} The event comment. For RECALLED or REJECTED, the reason given by the user that initiates the event. For DELEGATE or SHARE, the message from the acting user to the participant  
    * @instance
    */
    _this.getComment = function() {
      return _this.comment;
    };

   /**
    * The event comment. For RECALLED or REJECTED, the reason given by the user that initiates the event. For DELEGATE or SHARE, the message from the acting user to the participant
    * @function setComment
    * @param comment {module:model/widgets/String} The event comment. For RECALLED or REJECTED, the reason given by the user that initiates the event. For DELEGATE or SHARE, the message from the acting user to the participant
    * @instance
    */
    _this.setComment = function(comment) {
      _this.comment = comment;
    };

   /**
    * The date of the audit event
    * @function getDate
    * @return  {module:model/widgets/Date} The date of the audit event  
    * @instance
    */
    _this.getDate = function() {
      return _this.date;
    };

   /**
    * The date of the audit event
    * @function setDate
    * @param date {module:model/widgets/Date} The date of the audit event
    * @instance
    */
    _this.setDate = function(date) {
      _this.date = date;
    };

   /**
    * A description of the audit event
    * @function getDescription
    * @return  {module:model/widgets/String} A description of the audit event  
    * @instance
    */
    _this.getDescription = function() {
      return _this.description;
    };

   /**
    * A description of the audit event
    * @function setDescription
    * @param description {module:model/widgets/String} A description of the audit event
    * @instance
    */
    _this.setDescription = function(description) {
      _this.description = description;
    };

   /**
    * Location of the device that created the event (This value may be null due to limited privileges)
    * @function getDeviceLocation
    * @return  {module:model/widgets/WidgetEventDeviceLocation} Location of the device that created the event (This value may be null due to limited privileges)  
    * @instance
    */
    _this.getDeviceLocation = function() {
      return _this.deviceLocation;
    };

   /**
    * Location of the device that created the event (This value may be null due to limited privileges)
    * @function setDeviceLocation
    * @param deviceLocation {module:model/widgets/WidgetEventDeviceLocation} Location of the device that created the event (This value may be null due to limited privileges)
    * @instance
    */
    _this.setDeviceLocation = function(deviceLocation) {
      _this.deviceLocation = deviceLocation;
    };

   /**
    * Email address of the user that initiated the event
    * @function getParticipantEmail
    * @return  {module:model/widgets/String} Email address of the user that initiated the event  
    * @instance
    */
    _this.getParticipantEmail = function() {
      return _this.participantEmail;
    };

   /**
    * Email address of the user that initiated the event
    * @function setParticipantEmail
    * @param participantEmail {module:model/widgets/String} Email address of the user that initiated the event
    * @instance
    */
    _this.setParticipantEmail = function(participantEmail) {
      _this.participantEmail = participantEmail;
    };

   /**
    * A unique identifier linking offline events to synchronization events (specified for offline signing events and synchronization events, else null)
    * @function getSynchronizationId
    * @return  {module:model/widgets/String} A unique identifier linking offline events to synchronization events (specified for offline signing events and synchronization events, else null)  
    * @instance
    */
    _this.getSynchronizationId = function() {
      return _this.synchronizationId;
    };

   /**
    * A unique identifier linking offline events to synchronization events (specified for offline signing events and synchronization events, else null)
    * @function setSynchronizationId
    * @param synchronizationId {module:model/widgets/String} A unique identifier linking offline events to synchronization events (specified for offline signing events and synchronization events, else null)
    * @instance
    */
    _this.setSynchronizationId = function(synchronizationId) {
      _this.synchronizationId = synchronizationId;
    };

   /**
    * Type of the widget event
    * @function getType
    * @return  {module:model/widgets/String} Type of the widget event  
    * @instance
    */
    _this.getType = function() {
      return _this.type;
    };

   /**
    * Type of the widget event
    * @function setType
    * @param type {module:model/widgets/String} Type of the widget event
    * @instance
    */
    _this.setType = function(type) {
      _this.type = type;
    };

   /**
    * The identifier assigned by the vault provider for the vault event (if vaulted, otherwise null)
    * @function getVaultEventId
    * @return  {module:model/widgets/String} The identifier assigned by the vault provider for the vault event (if vaulted, otherwise null)  
    * @instance
    */
    _this.getVaultEventId = function() {
      return _this.vaultEventId;
    };

   /**
    * The identifier assigned by the vault provider for the vault event (if vaulted, otherwise null)
    * @function setVaultEventId
    * @param vaultEventId {module:model/widgets/String} The identifier assigned by the vault provider for the vault event (if vaulted, otherwise null)
    * @instance
    */
    _this.setVaultEventId = function(vaultEventId) {
      _this.vaultEventId = vaultEventId;
    };

   /**
    * An ID which uniquely identifies the version of the widget associated with this audit event
    * @function getVersionId
    * @return  {module:model/widgets/String} An ID which uniquely identifies the version of the widget associated with this audit event  
    * @instance
    */
    _this.getVersionId = function() {
      return _this.versionId;
    };

   /**
    * An ID which uniquely identifies the version of the widget associated with this audit event
    * @function setVersionId
    * @param versionId {module:model/widgets/String} An ID which uniquely identifies the version of the widget associated with this audit event
    * @instance
    */
    _this.setVersionId = function(versionId) {
      _this.versionId = versionId;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetHistoryEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetHistoryEvent} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetHistoryEvent} The populated <code>WidgetHistoryEvent</code> instance.
   */
  WidgetHistoryEvent.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetHistoryEvent();

      if (data.hasOwnProperty('actingUserEmail')) {
        obj.setActingUserEmail(data.actingUserEmail);
      }
      if (data.hasOwnProperty('actingUserIpAddress')) {
        obj.setActingUserIpAddress(data.actingUserIpAddress);
      }
      if (data.hasOwnProperty('comment')) {
        obj.setComment(data.comment);
      }
      if (data.hasOwnProperty('date')) {
        obj.setDate(data.date);
      }
      if (data.hasOwnProperty('description')) {
        obj.setDescription(data.description);
      }
      if (data.hasOwnProperty('deviceLocation')) {
        obj.setDeviceLocation(ApiClient.convertToType(data.deviceLocation,WidgetEventDeviceLocation));
      }
      if (data.hasOwnProperty('participantEmail')) {
        obj.setParticipantEmail(data.participantEmail);
      }
      if (data.hasOwnProperty('synchronizationId')) {
        obj.setSynchronizationId(data.synchronizationId);
      }
      if (data.hasOwnProperty('type')) {
        obj.setType(data.type);
      }
      if (data.hasOwnProperty('vaultEventId')) {
        obj.setVaultEventId(data.vaultEventId);
      }
      if (data.hasOwnProperty('versionId')) {
        obj.setVersionId(data.versionId);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
WidgetHistoryEvent.TypeEnum = {
  
  
    /**
     * value: CREATED
     * @const
     */
    CREATED: "CREATED",
    
  
    /**
     * value: UPLOADED_BY_SENDER
     * @const
     */
    UPLOADED_BY_SENDER: "UPLOADED_BY_SENDER",
    
  
    /**
     * value: FAXED_BY_SENDER
     * @const
     */
    FAXED_BY_SENDER: "FAXED_BY_SENDER",
    
  
    /**
     * value: AGREEMENT_MODIFIED
     * @const
     */
    AGREEMENT_MODIFIED: "AGREEMENT_MODIFIED",
    
  
    /**
     * value: USER_ACK_AGREEMENT_MODIFIED
     * @const
     */
    USER_ACK_AGREEMENT_MODIFIED: "USER_ACK_AGREEMENT_MODIFIED",
    
  
    /**
     * value: PRESIGNED
     * @const
     */
    PRESIGNED: "PRESIGNED",
    
  
    /**
     * value: SIGNED
     * @const
     */
    SIGNED: "SIGNED",
    
  
    /**
     * value: ESIGNED
     * @const
     */
    ESIGNED: "ESIGNED",
    
  
    /**
     * value: DIGSIGNED
     * @const
     */
    DIGSIGNED: "DIGSIGNED",
    
  
    /**
     * value: APPROVED
     * @const
     */
    APPROVED: "APPROVED",
    
  
    /**
     * value: OFFLINE_SYNC
     * @const
     */
    OFFLINE_SYNC: "OFFLINE_SYNC",
    
  
    /**
     * value: FAXIN_RECEIVED
     * @const
     */
    FAXIN_RECEIVED: "FAXIN_RECEIVED",
    
  
    /**
     * value: SIGNATURE_REQUESTED
     * @const
     */
    SIGNATURE_REQUESTED: "SIGNATURE_REQUESTED",
    
  
    /**
     * value: APPROVAL_REQUESTED
     * @const
     */
    APPROVAL_REQUESTED: "APPROVAL_REQUESTED",
    
  
    /**
     * value: RECALLED
     * @const
     */
    RECALLED: "RECALLED",
    
  
    /**
     * value: REJECTED
     * @const
     */
    REJECTED: "REJECTED",
    
  
    /**
     * value: EXPIRED
     * @const
     */
    EXPIRED: "EXPIRED",
    
  
    /**
     * value: EXPIRED_AUTOMATICALLY
     * @const
     */
    EXPIRED_AUTOMATICALLY: "EXPIRED_AUTOMATICALLY",
    
  
    /**
     * value: SHARED
     * @const
     */
    SHARED: "SHARED",
    
  
    /**
     * value: EMAIL_VIEWED
     * @const
     */
    EMAIL_VIEWED: "EMAIL_VIEWED",
    
  
    /**
     * value: AUTO_CANCELLED_CONVERSION_PROBLEM
     * @const
     */
    AUTO_CANCELLED_CONVERSION_PROBLEM: "AUTO_CANCELLED_CONVERSION_PROBLEM",
    
  
    /**
     * value: SIGNER_SUGGESTED_CHANGES
     * @const
     */
    SIGNER_SUGGESTED_CHANGES: "SIGNER_SUGGESTED_CHANGES",
    
  
    /**
     * value: SENDER_CREATED_NEW_REVISION
     * @const
     */
    SENDER_CREATED_NEW_REVISION: "SENDER_CREATED_NEW_REVISION",
    
  
    /**
     * value: PASSWORD_AUTHENTICATION_FAILED
     * @const
     */
    PASSWORD_AUTHENTICATION_FAILED: "PASSWORD_AUTHENTICATION_FAILED",
    
  
    /**
     * value: KBA_AUTHENTICATION_FAILED
     * @const
     */
    KBA_AUTHENTICATION_FAILED: "KBA_AUTHENTICATION_FAILED",
    
  
    /**
     * value: KBA_AUTHENTICATED
     * @const
     */
    KBA_AUTHENTICATED: "KBA_AUTHENTICATED",
    
  
    /**
     * value: WEB_IDENTITY_AUTHENTICATED
     * @const
     */
    WEB_IDENTITY_AUTHENTICATED: "WEB_IDENTITY_AUTHENTICATED",
    
  
    /**
     * value: WEB_IDENTITY_SPECIFIED
     * @const
     */
    WEB_IDENTITY_SPECIFIED: "WEB_IDENTITY_SPECIFIED",
    
  
    /**
     * value: EMAIL_BOUNCED
     * @const
     */
    EMAIL_BOUNCED: "EMAIL_BOUNCED",
    
  
    /**
     * value: WIDGET_ENABLED
     * @const
     */
    WIDGET_ENABLED: "WIDGET_ENABLED",
    
  
    /**
     * value: WIDGET_DISABLED
     * @const
     */
    WIDGET_DISABLED: "WIDGET_DISABLED",
    
  
    /**
     * value: DELEGATED
     * @const
     */
    DELEGATED: "DELEGATED",
    
  
    /**
     * value: AUTO_DELEGATED
     * @const
     */
    AUTO_DELEGATED: "AUTO_DELEGATED",
    
  
    /**
     * value: REPLACED_SIGNER
     * @const
     */
    REPLACED_SIGNER: "REPLACED_SIGNER",
    
  
    /**
     * value: VAULTED
     * @const
     */
    VAULTED: "VAULTED",
    
  
    /**
     * value: DOCUMENTS_DELETED
     * @const
     */
    DOCUMENTS_DELETED: "DOCUMENTS_DELETED",
    
  
    /**
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };

  return WidgetHistoryEvent;
}));


