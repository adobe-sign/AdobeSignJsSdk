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
   * @module model/workflows/WorkflowLibraryDocument
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WorkflowLibraryDocument</code>.
   * @alias module:model/workflows/WorkflowLibraryDocument
   * @class
   */
  var WorkflowLibraryDocument = function() {
    var _this = this;


    _this.label = undefined;

    _this.workflowLibDoc = undefined;

   /**
    * A display text for this form for workflow users
    * @function getLabel
    * @return  {module:model/workflows/String} A display text for this form for workflow users  
    * @instance
    */
    _this.getLabel = function() {
      return _this.label;
    };

   /**
    * A display text for this form for workflow users
    * @function setLabel
    * @param label {module:model/workflows/String} A display text for this form for workflow users
    * @instance
    */
    _this.setLabel = function(label) {
      _this.label = label;
    };

   /**
    * An id of the workflow library document that can be provided as an input file in the custom workflow agreement creation request
    * @function getWorkflowLibDoc
    * @return  {module:model/workflows/String} An id of the workflow library document that can be provided as an input file in the custom workflow agreement creation request  
    * @instance
    */
    _this.getWorkflowLibDoc = function() {
      return _this.workflowLibDoc;
    };

   /**
    * An id of the workflow library document that can be provided as an input file in the custom workflow agreement creation request
    * @function setWorkflowLibDoc
    * @param workflowLibDoc {module:model/workflows/String} An id of the workflow library document that can be provided as an input file in the custom workflow agreement creation request
    * @instance
    */
    _this.setWorkflowLibDoc = function(workflowLibDoc) {
      _this.workflowLibDoc = workflowLibDoc;
    };

  };

  /**
   * @private
   * Constructs a <code>WorkflowLibraryDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/WorkflowLibraryDocument} obj Optional instance to populate.
   * @return {module:model/workflows/WorkflowLibraryDocument} The populated <code>WorkflowLibraryDocument</code> instance.
   */
  WorkflowLibraryDocument.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WorkflowLibraryDocument();

      if (data.hasOwnProperty('label')) {
        obj.setLabel(data.label);
      }
      if (data.hasOwnProperty('workflowLibDoc')) {
        obj.setWorkflowLibDoc(data.workflowLibDoc);
      }
    }
    return obj;
  };


  return WorkflowLibraryDocument;
}));


