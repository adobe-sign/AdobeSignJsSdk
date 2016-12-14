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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/megaSigns/DocumentHistoryEvent'));

}(function(ApiClient, DocumentHistoryEvent) {
  'use strict';


  /**
   * @module model/megaSigns/MegaSignInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MegaSignInfo</code>.
   * @alias module:model/megaSigns/MegaSignInfo
   * @class
   */
  var MegaSignInfo = function() {
    var _this = this;


    _this.events = undefined;

    _this.expiration = undefined;

    _this.locale = undefined;

    _this.megaSignId = undefined;

    _this.message = undefined;

    _this.latestVersionId = undefined;

    _this.name = undefined;

    _this.securityOptions = undefined;

    _this.status = undefined;

   /**
    * An ordered list of the events in the audit trail of this document
    * @function getEvents
    * @return  {module:model/megaSigns/Array} An ordered list of the events in the audit trail of this document  
    * @instance
    */
    _this.getEvents = function() {
      return _this.events;
    };

   /**
    * An ordered list of the events in the audit trail of this document
    * @function setEvents
    * @param events {module:model/megaSigns/Array} An ordered list of the events in the audit trail of this document
    * @instance
    */
    _this.setEvents = function(events) {
      _this.events = events;
    };

   /**
    * The date after which the document can no longer be signed, if an expiration date is configured. The value is nil if an expiration date is not set for the document
    * @function getExpiration
    * @return  {module:model/megaSigns/Date} The date after which the document can no longer be signed, if an expiration date is configured. The value is nil if an expiration date is not set for the document  
    * @instance
    */
    _this.getExpiration = function() {
      return _this.expiration;
    };

   /**
    * The date after which the document can no longer be signed, if an expiration date is configured. The value is nil if an expiration date is not set for the document
    * @function setExpiration
    * @param expiration {module:model/megaSigns/Date} The date after which the document can no longer be signed, if an expiration date is configured. The value is nil if an expiration date is not set for the document
    * @instance
    */
    _this.setExpiration = function(expiration) {
      _this.expiration = expiration;
    };

   /**
    * The locale associated with this agreement - for example, en_US or fr_FR
    * @function getLocale
    * @return  {module:model/megaSigns/String} The locale associated with this agreement - for example, en_US or fr_FR  
    * @instance
    */
    _this.getLocale = function() {
      return _this.locale;
    };

   /**
    * The locale associated with this agreement - for example, en_US or fr_FR
    * @function setLocale
    * @param locale {module:model/megaSigns/String} The locale associated with this agreement - for example, en_US or fr_FR
    * @instance
    */
    _this.setLocale = function(locale) {
      _this.locale = locale;
    };

   /**
    * Unique identifier of the MegaSign parent agreement
    * @function getMegaSignId
    * @return  {module:model/megaSigns/String} Unique identifier of the MegaSign parent agreement  
    * @instance
    */
    _this.getMegaSignId = function() {
      return _this.megaSignId;
    };

   /**
    * Unique identifier of the MegaSign parent agreement
    * @function setMegaSignId
    * @param megaSignId {module:model/megaSigns/String} Unique identifier of the MegaSign parent agreement
    * @instance
    */
    _this.setMegaSignId = function(megaSignId) {
      _this.megaSignId = megaSignId;
    };

   /**
    * The message associated with the document that the sender has provided
    * @function getMessage
    * @return  {module:model/megaSigns/String} The message associated with the document that the sender has provided  
    * @instance
    */
    _this.getMessage = function() {
      return _this.message;
    };

   /**
    * The message associated with the document that the sender has provided
    * @function setMessage
    * @param message {module:model/megaSigns/String} The message associated with the document that the sender has provided
    * @instance
    */
    _this.setMessage = function(message) {
      _this.message = message;
    };

   /**
    * A version ID which uniquely identifies the current version of the agreement
    * @function getLatestVersionId
    * @return  {module:model/megaSigns/String} A version ID which uniquely identifies the current version of the agreement  
    * @instance
    */
    _this.getLatestVersionId = function() {
      return _this.latestVersionId;
    };

   /**
    * A version ID which uniquely identifies the current version of the agreement
    * @function setLatestVersionId
    * @param latestVersionId {module:model/megaSigns/String} A version ID which uniquely identifies the current version of the agreement
    * @instance
    */
    _this.setLatestVersionId = function(latestVersionId) {
      _this.latestVersionId = latestVersionId;
    };

   /**
    * The name of the document, specified by the sender
    * @function getName
    * @return  {module:model/megaSigns/String} The name of the document, specified by the sender  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the document, specified by the sender
    * @function setName
    * @param name {module:model/megaSigns/String} The name of the document, specified by the sender
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Security information about the document that specifies whether or not a password is required to view and sign the document
    * @function getSecurityOptions
    * @return  {module:model/megaSigns/Array} Security information about the document that specifies whether or not a password is required to view and sign the document  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Security information about the document that specifies whether or not a password is required to view and sign the document
    * @function setSecurityOptions
    * @param securityOptions {module:model/megaSigns/Array} Security information about the document that specifies whether or not a password is required to view and sign the document
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * Current status of the MegaSign parent agreement from the perspective of the user
    * @function getStatus
    * @return  {module:model/megaSigns/String} Current status of the MegaSign parent agreement from the perspective of the user  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * Current status of the MegaSign parent agreement from the perspective of the user
    * @function setStatus
    * @param status {module:model/megaSigns/String} Current status of the MegaSign parent agreement from the perspective of the user
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

  };

  /**
   * @private
   * Constructs a <code>MegaSignInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MegaSignInfo} obj Optional instance to populate.
   * @return {module:model/megaSigns/MegaSignInfo} The populated <code>MegaSignInfo</code> instance.
   */
  MegaSignInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MegaSignInfo();

      if (data.hasOwnProperty('events')) {
        obj.setEvents(ApiClient.convertToType(data.events,[DocumentHistoryEvent]));
      }
      if (data.hasOwnProperty('expiration')) {
        obj.setExpiration(data.expiration);
      }
      if (data.hasOwnProperty('locale')) {
        obj.setLocale(data.locale);
      }
      if (data.hasOwnProperty('megaSignId')) {
        obj.setMegaSignId(data.megaSignId);
      }
      if (data.hasOwnProperty('message')) {
        obj.setMessage(data.message);
      }
      if (data.hasOwnProperty('latestVersionId')) {
        obj.setLatestVersionId(data.latestVersionId);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('securityOptions')) {
        obj.setSecurityOptions(data.securityOptions);
      }
      if (data.hasOwnProperty('status')) {
        obj.setStatus(data.status);
      }
    }
    return obj;
  };


  /**
   * Allowed values for the <code>securityOptions</code> property.
   * @enum {String}
   * @readonly
   */
MegaSignInfo.SecurityOptionsEnum = {
  
  
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
MegaSignInfo.StatusEnum = {
  
  
    /**
     * value: WAITING_FOR_MY_SIGNATURE
     * @const
     */
    WAITING_FOR_MY_SIGNATURE: "WAITING_FOR_MY_SIGNATURE",
    
  
    /**
     * value: WAITING_FOR_MY_APPROVAL
     * @const
     */
    WAITING_FOR_MY_APPROVAL: "WAITING_FOR_MY_APPROVAL",
    
  
    /**
     * value: WAITING_FOR_MY_DELEGATION
     * @const
     */
    WAITING_FOR_MY_DELEGATION: "WAITING_FOR_MY_DELEGATION",
    
  
    /**
     * value: OUT_FOR_SIGNATURE
     * @const
     */
    OUT_FOR_SIGNATURE: "OUT_FOR_SIGNATURE",
    
  
    /**
     * value: OUT_FOR_APPROVAL
     * @const
     */
    OUT_FOR_APPROVAL: "OUT_FOR_APPROVAL",
    
  
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
     * value: RECALLED
     * @const
     */
    RECALLED: "RECALLED",
    
  
    /**
     * value: WAITING_FOR_FAXIN
     * @const
     */
    WAITING_FOR_FAXIN: "WAITING_FOR_FAXIN",
    
  
    /**
     * value: ARCHIVED
     * @const
     */
    ARCHIVED: "ARCHIVED",
    
  
    /**
     * value: FORM
     * @const
     */
    FORM: "FORM",
    
  
    /**
     * value: EXPIRED
     * @const
     */
    EXPIRED: "EXPIRED",
    
  
    /**
     * value: WIDGET
     * @const
     */
    WIDGET: "WIDGET",
    
  
    /**
     * value: WAITING_FOR_AUTHORING
     * @const
     */
    WAITING_FOR_AUTHORING: "WAITING_FOR_AUTHORING"
  
  
  };

  return MegaSignInfo;
}));


