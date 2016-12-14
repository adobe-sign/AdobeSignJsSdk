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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/DisplayUserSetInfo'));

}(function(ApiClient, DisplayUserSetInfo) {
  'use strict';


  /**
   * @module model/widgets/UserAgreement
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserAgreement</code>.
   * @alias module:model/widgets/UserAgreement
   * @class
   */
  var UserAgreement = function() {
    var _this = this;


    _this.agreementId = undefined;

    _this.displayDate = undefined;

    _this.displayUserSetInfos = undefined;

    _this.esign = undefined;

    _this.latestVersionId = undefined;

    _this.name = undefined;

    _this.status = undefined;

   /**
    * The unique identifier of the agreement
    * @function getAgreementId
    * @return  {module:model/widgets/String} The unique identifier of the agreement  
    * @instance
    */
    _this.getAgreementId = function() {
      return _this.agreementId;
    };

   /**
    * The unique identifier of the agreement
    * @function setAgreementId
    * @param agreementId {module:model/widgets/String} The unique identifier of the agreement
    * @instance
    */
    _this.setAgreementId = function(agreementId) {
      _this.agreementId = agreementId;
    };

   /**
    * The display date for the agreement
    * @function getDisplayDate
    * @return  {module:model/widgets/Date} The display date for the agreement  
    * @instance
    */
    _this.getDisplayDate = function() {
      return _this.displayDate;
    };

   /**
    * The display date for the agreement
    * @function setDisplayDate
    * @param displayDate {module:model/widgets/Date} The display date for the agreement
    * @instance
    */
    _this.setDisplayDate = function(displayDate) {
      _this.displayDate = displayDate;
    };

   /**
    * The most relevant current user set for the agreement. It is typically the next signer if the agreement is from the current user, or the sender if received from another user
    * @function getDisplayUserSetInfos
    * @return  {module:model/widgets/Array} The most relevant current user set for the agreement. It is typically the next signer if the agreement is from the current user, or the sender if received from another user  
    * @instance
    */
    _this.getDisplayUserSetInfos = function() {
      return _this.displayUserSetInfos;
    };

   /**
    * The most relevant current user set for the agreement. It is typically the next signer if the agreement is from the current user, or the sender if received from another user
    * @function setDisplayUserSetInfos
    * @param displayUserSetInfos {module:model/widgets/Array} The most relevant current user set for the agreement. It is typically the next signer if the agreement is from the current user, or the sender if received from another user
    * @instance
    */
    _this.setDisplayUserSetInfos = function(displayUserSetInfos) {
      _this.displayUserSetInfos = displayUserSetInfos;
    };

   /**
    * True if this is an e-sign document
    * @function getEsign
    * @return  {module:model/widgets/Boolean} True if this is an e-sign document  
    * @instance
    */
    _this.getEsign = function() {
      return _this.esign;
    };

   /**
    * True if this is an e-sign document
    * @function setEsign
    * @param esign {module:model/widgets/Boolean} True if this is an e-sign document
    * @instance
    */
    _this.setEsign = function(esign) {
      _this.esign = esign;
    };

   /**
    * A version ID which uniquely identifies the current version of the agreement
    * @function getLatestVersionId
    * @return  {module:model/widgets/String} A version ID which uniquely identifies the current version of the agreement  
    * @instance
    */
    _this.getLatestVersionId = function() {
      return _this.latestVersionId;
    };

   /**
    * A version ID which uniquely identifies the current version of the agreement
    * @function setLatestVersionId
    * @param latestVersionId {module:model/widgets/String} A version ID which uniquely identifies the current version of the agreement
    * @instance
    */
    _this.setLatestVersionId = function(latestVersionId) {
      _this.latestVersionId = latestVersionId;
    };

   /**
    * Name of the Agreement
    * @function getName
    * @return  {module:model/widgets/String} Name of the Agreement  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of the Agreement
    * @function setName
    * @param name {module:model/widgets/String} Name of the Agreement
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * The current status of the document from the perspective of the user
    * @function getStatus
    * @return  {module:model/widgets/String} The current status of the document from the perspective of the user  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * The current status of the document from the perspective of the user
    * @function setStatus
    * @param status {module:model/widgets/String} The current status of the document from the perspective of the user
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

  };

  /**
   * @private
   * Constructs a <code>UserAgreement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/UserAgreement} obj Optional instance to populate.
   * @return {module:model/widgets/UserAgreement} The populated <code>UserAgreement</code> instance.
   */
  UserAgreement.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserAgreement();

      if (data.hasOwnProperty('agreementId')) {
        obj.setAgreementId(data.agreementId);
      }
      if (data.hasOwnProperty('displayDate')) {
        obj.setDisplayDate(data.displayDate);
      }
      if (data.hasOwnProperty('displayUserSetInfos')) {
        obj.setDisplayUserSetInfos(ApiClient.convertToType(data.displayUserSetInfos,[DisplayUserSetInfo]));
      }
      if (data.hasOwnProperty('esign')) {
        obj.setEsign(data.esign);
      }
      if (data.hasOwnProperty('latestVersionId')) {
        obj.setLatestVersionId(data.latestVersionId);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('status')) {
        obj.setStatus(data.status);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
UserAgreement.StatusEnum = {
  
  
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

  return UserAgreement;
}));


