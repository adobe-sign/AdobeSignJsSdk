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
   * @module model/transientDocuments/TransientDocumentResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>TransientDocumentResponse</code>.
   * @alias module:model/transientDocuments/TransientDocumentResponse
   * @class
   */
  var TransientDocumentResponse = function() {
    var _this = this;


    _this.transientDocumentId = undefined;

   /**
    * The unique identifier of the uploaded document that can be used in an agreement or a megaSign or widget creation call
    * @function getTransientDocumentId
    * @return  {module:model/transientDocuments/String} The unique identifier of the uploaded document that can be used in an agreement or a megaSign or widget creation call  
    * @instance
    */
    _this.getTransientDocumentId = function() {
      return _this.transientDocumentId;
    };

   /**
    * The unique identifier of the uploaded document that can be used in an agreement or a megaSign or widget creation call
    * @function setTransientDocumentId
    * @param transientDocumentId {module:model/transientDocuments/String} The unique identifier of the uploaded document that can be used in an agreement or a megaSign or widget creation call
    * @instance
    */
    _this.setTransientDocumentId = function(transientDocumentId) {
      _this.transientDocumentId = transientDocumentId;
    };

  };

  /**
   * @private
   * Constructs a <code>TransientDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/transientDocuments/TransientDocumentResponse} obj Optional instance to populate.
   * @return {module:model/transientDocuments/TransientDocumentResponse} The populated <code>TransientDocumentResponse</code> instance.
   */
  TransientDocumentResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new TransientDocumentResponse();

      if (data.hasOwnProperty('transientDocumentId')) {
        obj.setTransientDocumentId(data.transientDocumentId);
      }
    }
    return obj;
  };


  return TransientDocumentResponse;
}));


