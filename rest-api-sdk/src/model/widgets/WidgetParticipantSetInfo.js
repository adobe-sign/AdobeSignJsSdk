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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/WidgetParticipantInfo'));

}(function(ApiClient, WidgetParticipantInfo) {
  'use strict';


  /**
   * @module model/widgets/WidgetParticipantSetInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetParticipantSetInfo</code>.
   * @alias module:model/widgets/WidgetParticipantSetInfo
   * @class
   */
  var WidgetParticipantSetInfo = function() {
    var _this = this;


    _this.participantSetMemberInfos = undefined;

    _this.roles = undefined;

    _this.securityOptions = undefined;

    _this.status = undefined;

   /**
    * Information about the members of the recipient set
    * @function getParticipantSetMemberInfos
    * @return  {module:model/widgets/Array} Information about the members of the recipient set  
    * @instance
    */
    _this.getParticipantSetMemberInfos = function() {
      return _this.participantSetMemberInfos;
    };

   /**
    * Information about the members of the recipient set
    * @function setParticipantSetMemberInfos
    * @param participantSetMemberInfos {module:model/widgets/Array} Information about the members of the recipient set
    * @instance
    */
    _this.setParticipantSetMemberInfos = function(participantSetMemberInfos) {
      _this.participantSetMemberInfos = participantSetMemberInfos;
    };

   /**
    * The current roles of the participant set. A participant set can have one or more roles
    * @function getRoles
    * @return  {module:model/widgets/Array} The current roles of the participant set. A participant set can have one or more roles  
    * @instance
    */
    _this.getRoles = function() {
      return _this.roles;
    };

   /**
    * The current roles of the participant set. A participant set can have one or more roles
    * @function setRoles
    * @param roles {module:model/widgets/Array} The current roles of the participant set. A participant set can have one or more roles
    * @instance
    */
    _this.setRoles = function(roles) {
      _this.roles = roles;
    };

   /**
    * Security options that apply to the participant
    * @function getSecurityOptions
    * @return  {module:model/widgets/Array} Security options that apply to the participant  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Security options that apply to the participant
    * @function setSecurityOptions
    * @param securityOptions {module:model/widgets/Array} Security options that apply to the participant
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * The status of the participant set with respect to the widget
    * @function getStatus
    * @return  {module:model/widgets/String} The status of the participant set with respect to the widget  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * The status of the participant set with respect to the widget
    * @function setStatus
    * @param status {module:model/widgets/String} The status of the participant set with respect to the widget
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetParticipantSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetParticipantSetInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetParticipantSetInfo} The populated <code>WidgetParticipantSetInfo</code> instance.
   */
  WidgetParticipantSetInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetParticipantSetInfo();

      if (data.hasOwnProperty('participantSetMemberInfos')) {
        obj.setParticipantSetMemberInfos(ApiClient.convertToType(data.participantSetMemberInfos,[WidgetParticipantInfo]));
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
    }
    return obj;
  };


  /**
   * Allowed values for the <code>roles</code> property.
   * @enum {String}
   * @readonly
   */
WidgetParticipantSetInfo.RolesEnum = {
  
  
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
     * value: WIDGET_SIGNER
     * @const
     */
    WIDGET_SIGNER: "WIDGET_SIGNER",
    
  
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
WidgetParticipantSetInfo.SecurityOptionsEnum = {
  
  
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
WidgetParticipantSetInfo.StatusEnum = {
  
  
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

  return WidgetParticipantSetInfo;
}));


