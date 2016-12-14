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
    module.exports = factory(require('../../utils/ApiClient'));

}(function(ApiClient) {
  'use strict';


  /**
   * @module model/widgets/WidgetParticipantInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetParticipantInfo</code>.
   * @alias module:model/widgets/WidgetParticipantInfo
   * @class
   */
  var WidgetParticipantInfo = function() {
    var _this = this;


    _this.company = undefined;

    _this.email = undefined;

    _this.name = undefined;

    _this.securityOptions = undefined;

    _this.title = undefined;

   /**
    * The company of the participant, if available
    * @function getCompany
    * @return  {module:model/widgets/String} The company of the participant, if available  
    * @instance
    */
    _this.getCompany = function() {
      return _this.company;
    };

   /**
    * The company of the participant, if available
    * @function setCompany
    * @param company {module:model/widgets/String} The company of the participant, if available
    * @instance
    */
    _this.setCompany = function(company) {
      _this.company = company;
    };

   /**
    * The email address of the participant
    * @function getEmail
    * @return  {module:model/widgets/String} The email address of the participant  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email address of the participant
    * @function setEmail
    * @param email {module:model/widgets/String} The email address of the participant
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The name of the participant, if available
    * @function getName
    * @return  {module:model/widgets/String} The name of the participant, if available  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the participant, if available
    * @function setName
    * @param name {module:model/widgets/String} The name of the participant, if available
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
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
    * The title of the participant, if available
    * @function getTitle
    * @return  {module:model/widgets/String} The title of the participant, if available  
    * @instance
    */
    _this.getTitle = function() {
      return _this.title;
    };

   /**
    * The title of the participant, if available
    * @function setTitle
    * @param title {module:model/widgets/String} The title of the participant, if available
    * @instance
    */
    _this.setTitle = function(title) {
      _this.title = title;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetParticipantInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetParticipantInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetParticipantInfo} The populated <code>WidgetParticipantInfo</code> instance.
   */
  WidgetParticipantInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetParticipantInfo();

      if (data.hasOwnProperty('company')) {
        obj.setCompany(data.company);
      }
      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
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
WidgetParticipantInfo.SecurityOptionsEnum = {
  
  
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

  return WidgetParticipantInfo;
}));


