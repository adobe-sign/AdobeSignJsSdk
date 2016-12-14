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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/Document'), require('../../model/agreements/SupportingDocument'));

}(function(ApiClient, Document, SupportingDocument) {
  'use strict';


  /**
   * @module model/agreements/AgreementDocuments
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>AgreementDocuments</code>.
   * @alias module:model/agreements/AgreementDocuments
   * @class
   */
  var AgreementDocuments = function() {
    var _this = this;


    _this.documents = undefined;

    _this.supportingDocuments = undefined;

   /**
    * A list of objects representing the documents
    * @function getDocuments
    * @return  {module:model/agreements/Array} A list of objects representing the documents  
    * @instance
    */
    _this.getDocuments = function() {
      return _this.documents;
    };

   /**
    * A list of objects representing the documents
    * @function setDocuments
    * @param documents {module:model/agreements/Array} A list of objects representing the documents
    * @instance
    */
    _this.setDocuments = function(documents) {
      _this.documents = documents;
    };

   /**
    * A list of supporting documents. This is returned only if there are any supporting document in the agreement
    * @function getSupportingDocuments
    * @return  {module:model/agreements/Array} A list of supporting documents. This is returned only if there are any supporting document in the agreement  
    * @instance
    */
    _this.getSupportingDocuments = function() {
      return _this.supportingDocuments;
    };

   /**
    * A list of supporting documents. This is returned only if there are any supporting document in the agreement
    * @function setSupportingDocuments
    * @param supportingDocuments {module:model/agreements/Array} A list of supporting documents. This is returned only if there are any supporting document in the agreement
    * @instance
    */
    _this.setSupportingDocuments = function(supportingDocuments) {
      _this.supportingDocuments = supportingDocuments;
    };

  };

  /**
   * @private
   * Constructs a <code>AgreementDocuments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/AgreementDocuments} obj Optional instance to populate.
   * @return {module:model/agreements/AgreementDocuments} The populated <code>AgreementDocuments</code> instance.
   */
  AgreementDocuments.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AgreementDocuments();

      if (data.hasOwnProperty('documents')) {
        obj.setDocuments(ApiClient.convertToType(data.documents,[Document]));
      }
      if (data.hasOwnProperty('supportingDocuments')) {
        obj.setSupportingDocuments(ApiClient.convertToType(data.supportingDocuments,[SupportingDocument]));
      }
    }
    return obj;
  };


  return AgreementDocuments;
}));


