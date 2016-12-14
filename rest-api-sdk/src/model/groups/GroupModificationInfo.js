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
   * @module model/groups/GroupModificationInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>GroupModificationInfo</code>.
   * @alias module:model/groups/GroupModificationInfo
   * @class
   */
  var GroupModificationInfo = function() {
    var _this = this;


    _this.groupName = undefined;

   /**
    * Name of the group
    * @function getGroupName
    * @return  {module:model/groups/String} Name of the group  
    * @instance
    */
    _this.getGroupName = function() {
      return _this.groupName;
    };

   /**
    * Name of the group
    * @function setGroupName
    * @param groupName {module:model/groups/String} Name of the group
    * @instance
    */
    _this.setGroupName = function(groupName) {
      _this.groupName = groupName;
    };

  };

  /**
   * @private
   * Constructs a <code>GroupModificationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/groups/GroupModificationInfo} obj Optional instance to populate.
   * @return {module:model/groups/GroupModificationInfo} The populated <code>GroupModificationInfo</code> instance.
   */
  GroupModificationInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new GroupModificationInfo();

      if (data.hasOwnProperty('groupName')) {
        obj.setGroupName(data.groupName);
      }
    }
    return obj;
  };


  return GroupModificationInfo;
}));


