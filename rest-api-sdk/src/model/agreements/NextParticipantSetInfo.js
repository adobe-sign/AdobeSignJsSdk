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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/NextParticipantInfo'));

}(function(ApiClient, NextParticipantInfo) {
  'use strict';


  /**
   * @module model/agreements/NextParticipantSetInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>NextParticipantSetInfo</code>.
   * @alias module:model/agreements/NextParticipantSetInfo
   * @class
   */
  var NextParticipantSetInfo = function() {
    var _this = this;


    _this.nextParticipantSetMemberInfos = undefined;

    _this.nextParticipantSetName = undefined;

   /**
    * Information about the members of the next participant set
    * @function getNextParticipantSetMemberInfos
    * @return  {module:model/agreements/Array} Information about the members of the next participant set  
    * @instance
    */
    _this.getNextParticipantSetMemberInfos = function() {
      return _this.nextParticipantSetMemberInfos;
    };

   /**
    * Information about the members of the next participant set
    * @function setNextParticipantSetMemberInfos
    * @param nextParticipantSetMemberInfos {module:model/agreements/Array} Information about the members of the next participant set
    * @instance
    */
    _this.setNextParticipantSetMemberInfos = function(nextParticipantSetMemberInfos) {
      _this.nextParticipantSetMemberInfos = nextParticipantSetMemberInfos;
    };

   /**
    * The name of the next participant set. Returned only, if the API caller is the sender of agreement.
    * @function getNextParticipantSetName
    * @return  {module:model/agreements/String} The name of the next participant set. Returned only, if the API caller is the sender of agreement.  
    * @instance
    */
    _this.getNextParticipantSetName = function() {
      return _this.nextParticipantSetName;
    };

   /**
    * The name of the next participant set. Returned only, if the API caller is the sender of agreement.
    * @function setNextParticipantSetName
    * @param nextParticipantSetName {module:model/agreements/String} The name of the next participant set. Returned only, if the API caller is the sender of agreement.
    * @instance
    */
    _this.setNextParticipantSetName = function(nextParticipantSetName) {
      _this.nextParticipantSetName = nextParticipantSetName;
    };

  };

  /**
   * @private
   * Constructs a <code>NextParticipantSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/NextParticipantSetInfo} obj Optional instance to populate.
   * @return {module:model/agreements/NextParticipantSetInfo} The populated <code>NextParticipantSetInfo</code> instance.
   */
  NextParticipantSetInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new NextParticipantSetInfo();

      if (data.hasOwnProperty('nextParticipantSetMemberInfos')) {
        obj.setNextParticipantSetMemberInfos(ApiClient.convertToType(data.nextParticipantSetMemberInfos,[NextParticipantInfo]));
      }
      if (data.hasOwnProperty('nextParticipantSetName')) {
        obj.setNextParticipantSetName(data.nextParticipantSetName);
      }
    }
    return obj;
  };


  return NextParticipantSetInfo;
}));


