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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/libraryDocuments/LibDocParticipantInfo'), require('../../model/libraryDocuments/LibDocumentHistoryEvent'));

}(function(ApiClient, LibDocParticipantInfo, LibDocumentHistoryEvent) {
  'use strict';


  /**
   * @module model/libraryDocuments/LibraryDocumentInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>LibraryDocumentInfo</code>.
   * @alias module:model/libraryDocuments/LibraryDocumentInfo
   * @class
   */
  var LibraryDocumentInfo = function() {
    var _this = this;


    _this.events = undefined;

    _this.libraryDocumentId = undefined;

    _this.locale = undefined;

    _this.message = undefined;

    _this.latestVersionId = undefined;

    _this.name = undefined;

    _this.participants = undefined;

    _this.securityOptions = undefined;

    _this.status = undefined;

   /**
    * An ordered list of the events in the audit trail of this document
    * @function getEvents
    * @return  {module:model/libraryDocuments/Array} An ordered list of the events in the audit trail of this document  
    * @instance
    */
    _this.getEvents = function() {
      return _this.events;
    };

   /**
    * An ordered list of the events in the audit trail of this document
    * @function setEvents
    * @param events {module:model/libraryDocuments/Array} An ordered list of the events in the audit trail of this document
    * @instance
    */
    _this.setEvents = function(events) {
      _this.events = events;
    };

   /**
    * A resource identifier that can be used to uniquely identify the library document in other apis
    * @function getLibraryDocumentId
    * @return  {module:model/libraryDocuments/String} A resource identifier that can be used to uniquely identify the library document in other apis  
    * @instance
    */
    _this.getLibraryDocumentId = function() {
      return _this.libraryDocumentId;
    };

   /**
    * A resource identifier that can be used to uniquely identify the library document in other apis
    * @function setLibraryDocumentId
    * @param libraryDocumentId {module:model/libraryDocuments/String} A resource identifier that can be used to uniquely identify the library document in other apis
    * @instance
    */
    _this.setLibraryDocumentId = function(libraryDocumentId) {
      _this.libraryDocumentId = libraryDocumentId;
    };

   /**
    * The locale associated with this agreement - for example, en_US or fr_FR
    * @function getLocale
    * @return  {module:model/libraryDocuments/String} The locale associated with this agreement - for example, en_US or fr_FR  
    * @instance
    */
    _this.getLocale = function() {
      return _this.locale;
    };

   /**
    * The locale associated with this agreement - for example, en_US or fr_FR
    * @function setLocale
    * @param locale {module:model/libraryDocuments/String} The locale associated with this agreement - for example, en_US or fr_FR
    * @instance
    */
    _this.setLocale = function(locale) {
      _this.locale = locale;
    };

   /**
    * The message associated with the document that the sender has provided
    * @function getMessage
    * @return  {module:model/libraryDocuments/String} The message associated with the document that the sender has provided  
    * @instance
    */
    _this.getMessage = function() {
      return _this.message;
    };

   /**
    * The message associated with the document that the sender has provided
    * @function setMessage
    * @param message {module:model/libraryDocuments/String} The message associated with the document that the sender has provided
    * @instance
    */
    _this.setMessage = function(message) {
      _this.message = message;
    };

   /**
    * A version ID which uniquely identifies the current version of the agreement
    * @function getLatestVersionId
    * @return  {module:model/libraryDocuments/String} A version ID which uniquely identifies the current version of the agreement  
    * @instance
    */
    _this.getLatestVersionId = function() {
      return _this.latestVersionId;
    };

   /**
    * A version ID which uniquely identifies the current version of the agreement
    * @function setLatestVersionId
    * @param latestVersionId {module:model/libraryDocuments/String} A version ID which uniquely identifies the current version of the agreement
    * @instance
    */
    _this.setLatestVersionId = function(latestVersionId) {
      _this.latestVersionId = latestVersionId;
    };

   /**
    * The name of the document, specified by the sender
    * @function getName
    * @return  {module:model/libraryDocuments/String} The name of the document, specified by the sender  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the document, specified by the sender
    * @function setName
    * @param name {module:model/libraryDocuments/String} The name of the document, specified by the sender
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Information about all the participants of this document
    * @function getParticipants
    * @return  {module:model/libraryDocuments/Array} Information about all the participants of this document  
    * @instance
    */
    _this.getParticipants = function() {
      return _this.participants;
    };

   /**
    * Information about all the participants of this document
    * @function setParticipants
    * @param participants {module:model/libraryDocuments/Array} Information about all the participants of this document
    * @instance
    */
    _this.setParticipants = function(participants) {
      _this.participants = participants;
    };

   /**
    * Security information about the document that specifies whether or not a password is required to view and sign the document
    * @function getSecurityOptions
    * @return  {module:model/libraryDocuments/Array} Security information about the document that specifies whether or not a password is required to view and sign the document  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Security information about the document that specifies whether or not a password is required to view and sign the document
    * @function setSecurityOptions
    * @param securityOptions {module:model/libraryDocuments/Array} Security information about the document that specifies whether or not a password is required to view and sign the document
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * The current status of the document
    * @function getStatus
    * @return  {module:model/libraryDocuments/String} The current status of the document  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * The current status of the document
    * @function setStatus
    * @param status {module:model/libraryDocuments/String} The current status of the document
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

  };

  /**
   * @private
   * Constructs a <code>LibraryDocumentInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/LibraryDocumentInfo} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/LibraryDocumentInfo} The populated <code>LibraryDocumentInfo</code> instance.
   */
  LibraryDocumentInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new LibraryDocumentInfo();

      if (data.hasOwnProperty('events')) {
        obj.setEvents(ApiClient.convertToType(data.events,[LibDocumentHistoryEvent]));
      }
      if (data.hasOwnProperty('libraryDocumentId')) {
        obj.setLibraryDocumentId(data.libraryDocumentId);
      }
      if (data.hasOwnProperty('locale')) {
        obj.setLocale(data.locale);
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
      if (data.hasOwnProperty('participants')) {
        obj.setParticipants(ApiClient.convertToType(data.participants,[LibDocParticipantInfo]));
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
LibraryDocumentInfo.SecurityOptionsEnum = {
  
  
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
LibraryDocumentInfo.StatusEnum = {
  
  
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

  return LibraryDocumentInfo;
}));


