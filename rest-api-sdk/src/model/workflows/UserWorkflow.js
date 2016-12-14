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
   * @module model/workflows/UserWorkflow
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserWorkflow</code>.
   * @alias module:model/workflows/UserWorkflow
   * @class
   */
  var UserWorkflow = function() {
    var _this = this;


    _this.created = undefined;

    _this.description = undefined;

    _this.displayName = undefined;

    _this.name = undefined;

    _this.scope = undefined;

    _this.scopeId = undefined;

    _this.status = undefined;

    _this.workflowId = undefined;

   /**
    * The day on which the workflow was created
    * @function getCreated
    * @return  {module:model/workflows/Date} The day on which the workflow was created  
    * @instance
    */
    _this.getCreated = function() {
      return _this.created;
    };

   /**
    * The day on which the workflow was created
    * @function setCreated
    * @param created {module:model/workflows/Date} The day on which the workflow was created
    * @instance
    */
    _this.setCreated = function(created) {
      _this.created = created;
    };

   /**
    * Description provided for this workflow at the time of its creation
    * @function getDescription
    * @return  {module:model/workflows/String} Description provided for this workflow at the time of its creation  
    * @instance
    */
    _this.getDescription = function() {
      return _this.description;
    };

   /**
    * Description provided for this workflow at the time of its creation
    * @function setDescription
    * @param description {module:model/workflows/String} Description provided for this workflow at the time of its creation
    * @instance
    */
    _this.setDescription = function(description) {
      _this.description = description;
    };

   /**
    * The display name of the workflow.
    * @function getDisplayName
    * @return  {module:model/workflows/String} The display name of the workflow.  
    * @instance
    */
    _this.getDisplayName = function() {
      return _this.displayName;
    };

   /**
    * The display name of the workflow.
    * @function setDisplayName
    * @param displayName {module:model/workflows/String} The display name of the workflow.
    * @instance
    */
    _this.setDisplayName = function(displayName) {
      _this.displayName = displayName;
    };

   /**
    * The name of the workflow.
    * @function getName
    * @return  {module:model/workflows/String} The name of the workflow.  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the workflow.
    * @function setName
    * @param name {module:model/workflows/String} The name of the workflow.
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * The workflow scope (ACCOUNT or GROUP or OTHER)
    * @function getScope
    * @return  {module:model/workflows/String} The workflow scope (ACCOUNT or GROUP or OTHER)  
    * @instance
    */
    _this.getScope = function() {
      return _this.scope;
    };

   /**
    * The workflow scope (ACCOUNT or GROUP or OTHER)
    * @function setScope
    * @param scope {module:model/workflows/String} The workflow scope (ACCOUNT or GROUP or OTHER)
    * @instance
    */
    _this.setScope = function(scope) {
      _this.scope = scope;
    };

   /**
    * Identifier of scope. Currently it is applicable for scope GROUP only and the value will be groupId.
    * @function getScopeId
    * @return  {module:model/workflows/String} Identifier of scope. Currently it is applicable for scope GROUP only and the value will be groupId.  
    * @instance
    */
    _this.getScopeId = function() {
      return _this.scopeId;
    };

   /**
    * Identifier of scope. Currently it is applicable for scope GROUP only and the value will be groupId.
    * @function setScopeId
    * @param scopeId {module:model/workflows/String} Identifier of scope. Currently it is applicable for scope GROUP only and the value will be groupId.
    * @instance
    */
    _this.setScopeId = function(scopeId) {
      _this.scopeId = scopeId;
    };

   /**
    * The workflow status (ACTIVE or DRAFT or OTHER)
    * @function getStatus
    * @return  {module:model/workflows/String} The workflow status (ACTIVE or DRAFT or OTHER)  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * The workflow status (ACTIVE or DRAFT or OTHER)
    * @function setStatus
    * @param status {module:model/workflows/String} The workflow status (ACTIVE or DRAFT or OTHER)
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

   /**
    * The unique identifier of a workflow
    * @function getWorkflowId
    * @return  {module:model/workflows/String} The unique identifier of a workflow  
    * @instance
    */
    _this.getWorkflowId = function() {
      return _this.workflowId;
    };

   /**
    * The unique identifier of a workflow
    * @function setWorkflowId
    * @param workflowId {module:model/workflows/String} The unique identifier of a workflow
    * @instance
    */
    _this.setWorkflowId = function(workflowId) {
      _this.workflowId = workflowId;
    };

  };

  /**
   * @private
   * Constructs a <code>UserWorkflow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/UserWorkflow} obj Optional instance to populate.
   * @return {module:model/workflows/UserWorkflow} The populated <code>UserWorkflow</code> instance.
   */
  UserWorkflow.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserWorkflow();

      if (data.hasOwnProperty('created')) {
        obj.setCreated(data.created);
      }
      if (data.hasOwnProperty('description')) {
        obj.setDescription(data.description);
      }
      if (data.hasOwnProperty('displayName')) {
        obj.setDisplayName(data.displayName);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('scope')) {
        obj.setScope(data.scope);
      }
      if (data.hasOwnProperty('scopeId')) {
        obj.setScopeId(data.scopeId);
      }
      if (data.hasOwnProperty('status')) {
        obj.setStatus(data.status);
      }
      if (data.hasOwnProperty('workflowId')) {
        obj.setWorkflowId(data.workflowId);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
UserWorkflow.ScopeEnum = {
  
  
    /**
     * value: ACCOUNT
     * @const
     */
    ACCOUNT: "ACCOUNT",
    
  
    /**
     * value: GROUP
     * @const
     */
    GROUP: "GROUP"
  
  
  };
  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
UserWorkflow.StatusEnum = {
  
  
    /**
     * value: ACTIVE
     * @const
     */
    ACTIVE: "ACTIVE",
    
  
    /**
     * value: DRAFT
     * @const
     */
    DRAFT: "DRAFT",
    
  
    /**
     * value: HIDDEN
     * @const
     */
    HIDDEN: "HIDDEN"
  
  
  };

  return UserWorkflow;
}));


