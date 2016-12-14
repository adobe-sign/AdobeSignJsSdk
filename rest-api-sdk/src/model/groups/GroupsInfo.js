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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/groups/GroupInfo'));

}(function(ApiClient, GroupInfo) {
  'use strict';


  /**
   * @module model/groups/GroupsInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>GroupsInfo</code>.
   * @alias module:model/groups/GroupsInfo
   * @class
   */
  var GroupsInfo = function() {
    var _this = this;


    _this.groupInfoList = undefined;

   /**
    * The list of groups in the account.
    * @function getGroupInfoList
    * @return  {module:model/groups/Array} The list of groups in the account.  
    * @instance
    */
    _this.getGroupInfoList = function() {
      return _this.groupInfoList;
    };

   /**
    * The list of groups in the account.
    * @function setGroupInfoList
    * @param groupInfoList {module:model/groups/Array} The list of groups in the account.
    * @instance
    */
    _this.setGroupInfoList = function(groupInfoList) {
      _this.groupInfoList = groupInfoList;
    };

  };

  /**
   * @private
   * Constructs a <code>GroupsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/groups/GroupsInfo} obj Optional instance to populate.
   * @return {module:model/groups/GroupsInfo} The populated <code>GroupsInfo</code> instance.
   */
  GroupsInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new GroupsInfo();

      if (data.hasOwnProperty('groupInfoList')) {
        obj.setGroupInfoList(ApiClient.convertToType(data.groupInfoList,[GroupInfo]));
      }
    }
    return obj;
  };


  return GroupsInfo;
}));


