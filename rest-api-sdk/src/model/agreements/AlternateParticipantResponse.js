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
   * @module model/agreements/AlternateParticipantResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>AlternateParticipantResponse</code>.
   * A JSON that contains the id of the newly created alternate participant
   * @alias module:model/agreements/AlternateParticipantResponse
   * @class
   */
  var AlternateParticipantResponse = function() {
    var _this = this;


    _this.participantId = undefined;

   /**
    * The unique identifier of the alternate participant
    * @function getParticipantId
    * @return  {module:model/agreements/String} The unique identifier of the alternate participant  
    * @instance
    */
    _this.getParticipantId = function() {
      return _this.participantId;
    };

   /**
    * The unique identifier of the alternate participant
    * @function setParticipantId
    * @param participantId {module:model/agreements/String} The unique identifier of the alternate participant
    * @instance
    */
    _this.setParticipantId = function(participantId) {
      _this.participantId = participantId;
    };

  };

  /**
   * @private
   * Constructs a <code>AlternateParticipantResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/AlternateParticipantResponse} obj Optional instance to populate.
   * @return {module:model/agreements/AlternateParticipantResponse} The populated <code>AlternateParticipantResponse</code> instance.
   */
  AlternateParticipantResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AlternateParticipantResponse();

      if (data.hasOwnProperty('participantId')) {
        obj.setParticipantId(data.participantId);
      }
    }
    return obj;
  };


  return AlternateParticipantResponse;
}));


