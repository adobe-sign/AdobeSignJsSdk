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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/libraryDocuments/LibDocParticipantInfo'));

}(function(ApiClient, LibDocParticipantInfo) {
  'use strict';


  /**
   * @module model/libraryDocuments/LibDocParticipantInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>LibDocParticipantInfo</code>.
   * @alias module:model/libraryDocuments/LibDocParticipantInfo
   * @class
   */
  var LibDocParticipantInfo = function() {
    var _this = this;


    _this.alternateParticipants = undefined;

    _this.company = undefined;

    _this.email = undefined;

    _this.name = undefined;

    _this.roles = undefined;

    _this.securityOptions = undefined;

    _this.status = undefined;

    _this.title = undefined;

   /**
    * All the child participants of the current participant. The possible values for the status of these participants are, SHARE and DELEGATE
    * @function getAlternateParticipants
    * @return  {module:model/libraryDocuments/Array} All the child participants of the current participant. The possible values for the status of these participants are, SHARE and DELEGATE  
    * @instance
    */
    _this.getAlternateParticipants = function() {
      return _this.alternateParticipants;
    };

   /**
    * All the child participants of the current participant. The possible values for the status of these participants are, SHARE and DELEGATE
    * @function setAlternateParticipants
    * @param alternateParticipants {module:model/libraryDocuments/Array} All the child participants of the current participant. The possible values for the status of these participants are, SHARE and DELEGATE
    * @instance
    */
    _this.setAlternateParticipants = function(alternateParticipants) {
      _this.alternateParticipants = alternateParticipants;
    };

   /**
    * The company of the participant, if available
    * @function getCompany
    * @return  {module:model/libraryDocuments/String} The company of the participant, if available  
    * @instance
    */
    _this.getCompany = function() {
      return _this.company;
    };

   /**
    * The company of the participant, if available
    * @function setCompany
    * @param company {module:model/libraryDocuments/String} The company of the participant, if available
    * @instance
    */
    _this.setCompany = function(company) {
      _this.company = company;
    };

   /**
    * The email address of the participant
    * @function getEmail
    * @return  {module:model/libraryDocuments/String} The email address of the participant  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email address of the participant
    * @function setEmail
    * @param email {module:model/libraryDocuments/String} The email address of the participant
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The name of the participant, if available
    * @function getName
    * @return  {module:model/libraryDocuments/String} The name of the participant, if available  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the participant, if available
    * @function setName
    * @param name {module:model/libraryDocuments/String} The name of the participant, if available
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * The current roles of the participant. A participant can have one or more roles
    * @function getRoles
    * @return  {module:model/libraryDocuments/Array} The current roles of the participant. A participant can have one or more roles  
    * @instance
    */
    _this.getRoles = function() {
      return _this.roles;
    };

   /**
    * The current roles of the participant. A participant can have one or more roles
    * @function setRoles
    * @param roles {module:model/libraryDocuments/Array} The current roles of the participant. A participant can have one or more roles
    * @instance
    */
    _this.setRoles = function(roles) {
      _this.roles = roles;
    };

   /**
    * Security options that apply to the participant
    * @function getSecurityOptions
    * @return  {module:model/libraryDocuments/Array} Security options that apply to the participant  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Security options that apply to the participant
    * @function setSecurityOptions
    * @param securityOptions {module:model/libraryDocuments/Array} Security options that apply to the participant
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * The status of the participant with respect to the document
    * @function getStatus
    * @return  {module:model/libraryDocuments/String} The status of the participant with respect to the document  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * The status of the participant with respect to the document
    * @function setStatus
    * @param status {module:model/libraryDocuments/String} The status of the participant with respect to the document
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

   /**
    * The title of the participant, if available
    * @function getTitle
    * @return  {module:model/libraryDocuments/String} The title of the participant, if available  
    * @instance
    */
    _this.getTitle = function() {
      return _this.title;
    };

   /**
    * The title of the participant, if available
    * @function setTitle
    * @param title {module:model/libraryDocuments/String} The title of the participant, if available
    * @instance
    */
    _this.setTitle = function(title) {
      _this.title = title;
    };

  };

  /**
   * @private
   * Constructs a <code>LibDocParticipantInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/LibDocParticipantInfo} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/LibDocParticipantInfo} The populated <code>LibDocParticipantInfo</code> instance.
   */
  LibDocParticipantInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new LibDocParticipantInfo();

      if (data.hasOwnProperty('alternateParticipants')) {
        obj.setAlternateParticipants(ApiClient.convertToType(data.alternateParticipants,[LibDocParticipantInfo]));
      }
      if (data.hasOwnProperty('company')) {
        obj.setCompany(data.company);
      }
      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('roles')) {
        obj.setRoles(data.roles);
      }
      if (data.hasOwnProperty('securityOptions')) {
        obj.setSecurityOptions(data.securityOptions);
      }
      if (data.hasOwnProperty('status')) {
        obj.setStatus(data.status);
      }
      if (data.hasOwnProperty('title')) {
        obj.setTitle(data.title);
      }
    }
    return obj;
  };


  /**
   * Allowed values for the <code>roles</code> property.
   * @enum {String}
   * @readonly
   */
LibDocParticipantInfo.RolesEnum = {
  
  
    /**
     * value: SENDER
     * @const
     */
    SENDER: "SENDER",
    
  
    /**
     * value: SIGNER
     * @const
     */
    SIGNER: "SIGNER",
    
  
    /**
     * value: APPROVER
     * @const
     */
    APPROVER: "APPROVER",
    
  
    /**
     * value: DELEGATE_TO_SIGNER
     * @const
     */
    DELEGATE_TO_SIGNER: "DELEGATE_TO_SIGNER",
    
  
    /**
     * value: DELEGATE_TO_APPROVER
     * @const
     */
    DELEGATE_TO_APPROVER: "DELEGATE_TO_APPROVER",
    
  
    /**
     * value: CC
     * @const
     */
    CC: "CC",
    
  
    /**
     * value: DELEGATE
     * @const
     */
    DELEGATE: "DELEGATE",
    
  
    /**
     * value: SHARE
     * @const
     */
    SHARE: "SHARE",
    
  
    /**
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };

  /**
   * Allowed values for the <code>securityOptions</code> property.
   * @enum {String}
   * @readonly
   */
LibDocParticipantInfo.SecurityOptionsEnum = {
  
  
    /**
     * value: PASSWORD
     * @const
     */
    PASSWORD: "PASSWORD",
    
  
    /**
     * value: WEB_IDENTITY
     * @const
     */
    WEB_IDENTITY: "WEB_IDENTITY",
    
  
    /**
     * value: KBA
     * @const
     */
    KBA: "KBA",
    
  
    /**
     * value: PHONE
     * @const
     */
    PHONE: "PHONE",
    
  
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
LibDocParticipantInfo.StatusEnum = {
  
  
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
     * value: HIDDEN
     * @const
     */
    HIDDEN: "HIDDEN",
    
  
    /**
     * value: NOT_YET_VISIBLE
     * @const
     */
    NOT_YET_VISIBLE: "NOT_YET_VISIBLE",
    
  
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
     * value: UNKNOWN
     * @const
     */
    UNKNOWN: "UNKNOWN",
    
  
    /**
     * value: PARTIAL
     * @const
     */
    PARTIAL: "PARTIAL",
    
  
    /**
     * value: FORM
     * @const
     */
    FORM: "FORM",
    
  
    /**
     * value: WAITING_FOR_AUTHORING
     * @const
     */
    WAITING_FOR_AUTHORING: "WAITING_FOR_AUTHORING",
    
  
    /**
     * value: OUT_FOR_APPROVAL
     * @const
     */
    OUT_FOR_APPROVAL: "OUT_FOR_APPROVAL",
    
  
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
     * value: WAITING_FOR_MY_REVIEW
     * @const
     */
    WAITING_FOR_MY_REVIEW: "WAITING_FOR_MY_REVIEW",
    
  
    /**
     * value: IN_REVIEW
     * @const
     */
    IN_REVIEW: "IN_REVIEW",
    
  
    /**
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };

  return LibDocParticipantInfo;
}));


