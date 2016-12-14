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
   * @module model/workflows/CustomWorkflowFileInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>CustomWorkflowFileInfo</code>.
   * @alias module:model/workflows/CustomWorkflowFileInfo
   * @class
   */
  var CustomWorkflowFileInfo = function() {
    var _this = this;


    _this.name = undefined;

    _this.transientDocumentId = undefined;

    _this.workflowLibraryDocumentId = undefined;

   /**
    * Name of file info element
    * @function getName
    * @return  {module:model/workflows/String} Name of file info element  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of file info element
    * @function setName
    * @param name {module:model/workflows/String} Name of file info element
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Transient document identifier obtained from the transient document creation API
    * @function getTransientDocumentId
    * @return  {module:model/workflows/String} Transient document identifier obtained from the transient document creation API  
    * @instance
    */
    _this.getTransientDocumentId = function() {
      return _this.transientDocumentId;
    };

   /**
    * Transient document identifier obtained from the transient document creation API
    * @function setTransientDocumentId
    * @param transientDocumentId {module:model/workflows/String} Transient document identifier obtained from the transient document creation API
    * @instance
    */
    _this.setTransientDocumentId = function(transientDocumentId) {
      _this.transientDocumentId = transientDocumentId;
    };

   /**
    * An id of the workflow library document that can be provided as an input file in the custom workflow agreement creation request
    * @function getWorkflowLibraryDocumentId
    * @return  {module:model/workflows/String} An id of the workflow library document that can be provided as an input file in the custom workflow agreement creation request  
    * @instance
    */
    _this.getWorkflowLibraryDocumentId = function() {
      return _this.workflowLibraryDocumentId;
    };

   /**
    * An id of the workflow library document that can be provided as an input file in the custom workflow agreement creation request
    * @function setWorkflowLibraryDocumentId
    * @param workflowLibraryDocumentId {module:model/workflows/String} An id of the workflow library document that can be provided as an input file in the custom workflow agreement creation request
    * @instance
    */
    _this.setWorkflowLibraryDocumentId = function(workflowLibraryDocumentId) {
      _this.workflowLibraryDocumentId = workflowLibraryDocumentId;
    };

  };

  /**
   * @private
   * Constructs a <code>CustomWorkflowFileInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/CustomWorkflowFileInfo} obj Optional instance to populate.
   * @return {module:model/workflows/CustomWorkflowFileInfo} The populated <code>CustomWorkflowFileInfo</code> instance.
   */
  CustomWorkflowFileInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new CustomWorkflowFileInfo();

      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('transientDocumentId')) {
        obj.setTransientDocumentId(data.transientDocumentId);
      }
      if (data.hasOwnProperty('workflowLibraryDocumentId')) {
        obj.setWorkflowLibraryDocumentId(data.workflowLibraryDocumentId);
      }
    }
    return obj;
  };


  return CustomWorkflowFileInfo;
}));


