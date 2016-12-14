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
   * @module model/groups/GroupCreationResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>GroupCreationResponse</code>.
   * @alias module:model/groups/GroupCreationResponse
   * @class
   */
  var GroupCreationResponse = function() {
    var _this = this;


    _this.groupId = undefined;

   /**
    * Unique identifier of the group created.
    * @function getGroupId
    * @return  {module:model/groups/String} Unique identifier of the group created.  
    * @instance
    */
    _this.getGroupId = function() {
      return _this.groupId;
    };

   /**
    * Unique identifier of the group created.
    * @function setGroupId
    * @param groupId {module:model/groups/String} Unique identifier of the group created.
    * @instance
    */
    _this.setGroupId = function(groupId) {
      _this.groupId = groupId;
    };

  };

  /**
   * @private
   * Constructs a <code>GroupCreationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/groups/GroupCreationResponse} obj Optional instance to populate.
   * @return {module:model/groups/GroupCreationResponse} The populated <code>GroupCreationResponse</code> instance.
   */
  GroupCreationResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new GroupCreationResponse();

      if (data.hasOwnProperty('groupId')) {
        obj.setGroupId(data.groupId);
      }
    }
    return obj;
  };


  return GroupCreationResponse;
}));


