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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/workflows/WorkflowLibraryDocument'));

}(function(ApiClient, WorkflowLibraryDocument) {
  'use strict';


  /**
   * @module model/workflows/FileInfosDescription
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>FileInfosDescription</code>.
   * @alias module:model/workflows/FileInfosDescription
   * @class
   */
  var FileInfosDescription = function() {
    var _this = this;


    _this.label = undefined;

    _this.name = undefined;

    _this.required = undefined;

    _this.workflowLibraryDocumentSelectorList = undefined;

   /**
    * Display label of this field for the external users
    * @function getLabel
    * @return  {module:model/workflows/String} Display label of this field for the external users  
    * @instance
    */
    _this.getLabel = function() {
      return _this.label;
    };

   /**
    * Display label of this field for the external users
    * @function setLabel
    * @param label {module:model/workflows/String} Display label of this field for the external users
    * @instance
    */
    _this.setLabel = function(label) {
      _this.label = label;
    };

   /**
    * Name of the fileInfo element
    * @function getName
    * @return  {module:model/workflows/String} Name of the fileInfo element  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of the fileInfo element
    * @function setName
    * @param name {module:model/workflows/String} Name of the fileInfo element
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Whether this field is required or optional
    * @function getRequired
    * @return  {module:model/workflows/Boolean} Whether this field is required or optional  
    * @instance
    */
    _this.getRequired = function() {
      return _this.required;
    };

   /**
    * Whether this field is required or optional
    * @function setRequired
    * @param required {module:model/workflows/Boolean} Whether this field is required or optional
    * @instance
    */
    _this.setRequired = function(required) {
      _this.required = required;
    };

   /**
    * A list of workflow library documents out of which one workflow library document can be selected with this fileInfo object
    * @function getWorkflowLibraryDocumentSelectorList
    * @return  {module:model/workflows/Array} A list of workflow library documents out of which one workflow library document can be selected with this fileInfo object  
    * @instance
    */
    _this.getWorkflowLibraryDocumentSelectorList = function() {
      return _this.workflowLibraryDocumentSelectorList;
    };

   /**
    * A list of workflow library documents out of which one workflow library document can be selected with this fileInfo object
    * @function setWorkflowLibraryDocumentSelectorList
    * @param workflowLibraryDocumentSelectorList {module:model/workflows/Array} A list of workflow library documents out of which one workflow library document can be selected with this fileInfo object
    * @instance
    */
    _this.setWorkflowLibraryDocumentSelectorList = function(workflowLibraryDocumentSelectorList) {
      _this.workflowLibraryDocumentSelectorList = workflowLibraryDocumentSelectorList;
    };

  };

  /**
   * @private
   * Constructs a <code>FileInfosDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/FileInfosDescription} obj Optional instance to populate.
   * @return {module:model/workflows/FileInfosDescription} The populated <code>FileInfosDescription</code> instance.
   */
  FileInfosDescription.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new FileInfosDescription();

      if (data.hasOwnProperty('label')) {
        obj.setLabel(data.label);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('required')) {
        obj.setRequired(data.required);
      }
      if (data.hasOwnProperty('workflowLibraryDocumentSelectorList')) {
        obj.setWorkflowLibraryDocumentSelectorList(ApiClient.convertToType(data.workflowLibraryDocumentSelectorList,[WorkflowLibraryDocument]));
      }
    }
    return obj;
  };


  return FileInfosDescription;
}));


