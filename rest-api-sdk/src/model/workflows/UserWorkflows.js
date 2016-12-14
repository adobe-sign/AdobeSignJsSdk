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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/workflows/UserWorkflow'));

}(function(ApiClient, UserWorkflow) {
  'use strict';


  /**
   * @module model/workflows/UserWorkflows
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserWorkflows</code>.
   * @alias module:model/workflows/UserWorkflows
   * @class
   */
  var UserWorkflows = function() {
    var _this = this;


    _this.userWorkflowList = undefined;

   /**
    * An array of workflows
    * @function getUserWorkflowList
    * @return  {module:model/workflows/Array} An array of workflows  
    * @instance
    */
    _this.getUserWorkflowList = function() {
      return _this.userWorkflowList;
    };

   /**
    * An array of workflows
    * @function setUserWorkflowList
    * @param userWorkflowList {module:model/workflows/Array} An array of workflows
    * @instance
    */
    _this.setUserWorkflowList = function(userWorkflowList) {
      _this.userWorkflowList = userWorkflowList;
    };

  };

  /**
   * @private
   * Constructs a <code>UserWorkflows</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/UserWorkflows} obj Optional instance to populate.
   * @return {module:model/workflows/UserWorkflows} The populated <code>UserWorkflows</code> instance.
   */
  UserWorkflows.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserWorkflows();

      if (data.hasOwnProperty('userWorkflowList')) {
        obj.setUserWorkflowList(ApiClient.convertToType(data.userWorkflowList,[UserWorkflow]));
      }
    }
    return obj;
  };


  return UserWorkflows;
}));


