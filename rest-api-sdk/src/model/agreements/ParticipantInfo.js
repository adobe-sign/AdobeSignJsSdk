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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/ParticipantSetInfo'));

}(function(ApiClient, ParticipantSetInfo) {
  'use strict';


  /**
   * @module model/agreements/ParticipantInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>ParticipantInfo</code>.
   * @alias module:model/agreements/ParticipantInfo
   * @class
   */
  var ParticipantInfo = function() {
    var _this = this;


    _this.alternateParticipants = undefined;

    _this.company = undefined;

    _this.email = undefined;

    _this.name = undefined;

    _this.participantId = undefined;

    _this.securityOptions = undefined;

    _this.title = undefined;

   /**
    * All the child participants of the current participant. The possible values for the status of these participants are, SHARE and DELEGATE
    * @function getAlternateParticipants
    * @return  {module:model/agreements/Array} All the child participants of the current participant. The possible values for the status of these participants are, SHARE and DELEGATE  
    * @instance
    */
    _this.getAlternateParticipants = function() {
      return _this.alternateParticipants;
    };

   /**
    * All the child participants of the current participant. The possible values for the status of these participants are, SHARE and DELEGATE
    * @function setAlternateParticipants
    * @param alternateParticipants {module:model/agreements/Array} All the child participants of the current participant. The possible values for the status of these participants are, SHARE and DELEGATE
    * @instance
    */
    _this.setAlternateParticipants = function(alternateParticipants) {
      _this.alternateParticipants = alternateParticipants;
    };

   /**
    * The company of the participant, if available
    * @function getCompany
    * @return  {module:model/agreements/String} The company of the participant, if available  
    * @instance
    */
    _this.getCompany = function() {
      return _this.company;
    };

   /**
    * The company of the participant, if available
    * @function setCompany
    * @param company {module:model/agreements/String} The company of the participant, if available
    * @instance
    */
    _this.setCompany = function(company) {
      _this.company = company;
    };

   /**
    * The email address of the participant
    * @function getEmail
    * @return  {module:model/agreements/String} The email address of the participant  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email address of the participant
    * @function setEmail
    * @param email {module:model/agreements/String} The email address of the participant
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The name of the participant, if available
    * @function getName
    * @return  {module:model/agreements/String} The name of the participant, if available  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the participant, if available
    * @function setName
    * @param name {module:model/agreements/String} The name of the participant, if available
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * The unique identifier of the participant
    * @function getParticipantId
    * @return  {module:model/agreements/String} The unique identifier of the participant  
    * @instance
    */
    _this.getParticipantId = function() {
      return _this.participantId;
    };

   /**
    * The unique identifier of the participant
    * @function setParticipantId
    * @param participantId {module:model/agreements/String} The unique identifier of the participant
    * @instance
    */
    _this.setParticipantId = function(participantId) {
      _this.participantId = participantId;
    };

   /**
    * Security options that apply to the participant
    * @function getSecurityOptions
    * @return  {module:model/agreements/Array} Security options that apply to the participant  
    * @instance
    */
    _this.getSecurityOptions = function() {
      return _this.securityOptions;
    };

   /**
    * Security options that apply to the participant
    * @function setSecurityOptions
    * @param securityOptions {module:model/agreements/Array} Security options that apply to the participant
    * @instance
    */
    _this.setSecurityOptions = function(securityOptions) {
      _this.securityOptions = securityOptions;
    };

   /**
    * The title of the participant, if available
    * @function getTitle
    * @return  {module:model/agreements/String} The title of the participant, if available  
    * @instance
    */
    _this.getTitle = function() {
      return _this.title;
    };

   /**
    * The title of the participant, if available
    * @function setTitle
    * @param title {module:model/agreements/String} The title of the participant, if available
    * @instance
    */
    _this.setTitle = function(title) {
      _this.title = title;
    };

  };

  /**
   * @private
   * Constructs a <code>ParticipantInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/ParticipantInfo} obj Optional instance to populate.
   * @return {module:model/agreements/ParticipantInfo} The populated <code>ParticipantInfo</code> instance.
   */
  ParticipantInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new ParticipantInfo();

      if (data.hasOwnProperty('alternateParticipants')) {
        obj.setAlternateParticipants(ApiClient.convertToType(data.alternateParticipants,[ParticipantSetInfo]));
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
      if (data.hasOwnProperty('participantId')) {
        obj.setParticipantId(data.participantId);
      }
      if (data.hasOwnProperty('securityOptions')) {
        obj.setSecurityOptions(data.securityOptions);
      }
      if (data.hasOwnProperty('title')) {
        obj.setTitle(data.title);
      }
    }
    return obj;
  };


  /**
   * Allowed values for the <code>securityOptions</code> property.
   * @enum {String}
   * @readonly
   */
ParticipantInfo.SecurityOptionsEnum = {
  
  
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

  return ParticipantInfo;
}));


