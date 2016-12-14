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
   * @module model/agreements/NextParticipantInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>NextParticipantInfo</code>.
   * @alias module:model/agreements/NextParticipantInfo
   * @class
   */
  var NextParticipantInfo = function() {
    var _this = this;


    _this.email = undefined;

    _this.name = undefined;

    _this.waitingSince = undefined;

   /**
    * The email address of the next participant
    * @function getEmail
    * @return  {module:model/agreements/String} The email address of the next participant  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email address of the next participant
    * @function setEmail
    * @param email {module:model/agreements/String} The email address of the next participant
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * The name of the next participant, if available
    * @function getName
    * @return  {module:model/agreements/String} The name of the next participant, if available  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the next participant, if available
    * @function setName
    * @param name {module:model/agreements/String} The name of the next participant, if available
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * The date since which the document has been waiting for the participant to take action
    * @function getWaitingSince
    * @return  {module:model/agreements/Date} The date since which the document has been waiting for the participant to take action  
    * @instance
    */
    _this.getWaitingSince = function() {
      return _this.waitingSince;
    };

   /**
    * The date since which the document has been waiting for the participant to take action
    * @function setWaitingSince
    * @param waitingSince {module:model/agreements/Date} The date since which the document has been waiting for the participant to take action
    * @instance
    */
    _this.setWaitingSince = function(waitingSince) {
      _this.waitingSince = waitingSince;
    };

  };

  /**
   * @private
   * Constructs a <code>NextParticipantInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/NextParticipantInfo} obj Optional instance to populate.
   * @return {module:model/agreements/NextParticipantInfo} The populated <code>NextParticipantInfo</code> instance.
   */
  NextParticipantInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new NextParticipantInfo();

      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('waitingSince')) {
        obj.setWaitingSince(data.waitingSince);
      }
    }
    return obj;
  };


  return NextParticipantInfo;
}));


