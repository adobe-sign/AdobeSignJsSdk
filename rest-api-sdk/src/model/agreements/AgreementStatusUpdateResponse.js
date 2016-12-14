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
   * @module model/agreements/AgreementStatusUpdateResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>AgreementStatusUpdateResponse</code>.
   * @alias module:model/agreements/AgreementStatusUpdateResponse
   * @class
   */
  var AgreementStatusUpdateResponse = function() {
    var _this = this;


    _this.result = undefined;

   /**
    * A status value showing the result of this operation
    * @function getResult
    * @return  {module:model/agreements/String} A status value showing the result of this operation  
    * @instance
    */
    _this.getResult = function() {
      return _this.result;
    };

   /**
    * A status value showing the result of this operation
    * @function setResult
    * @param result {module:model/agreements/String} A status value showing the result of this operation
    * @instance
    */
    _this.setResult = function(result) {
      _this.result = result;
    };

  };

  /**
   * @private
   * Constructs a <code>AgreementStatusUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/AgreementStatusUpdateResponse} obj Optional instance to populate.
   * @return {module:model/agreements/AgreementStatusUpdateResponse} The populated <code>AgreementStatusUpdateResponse</code> instance.
   */
  AgreementStatusUpdateResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AgreementStatusUpdateResponse();

      if (data.hasOwnProperty('result')) {
        obj.setResult(data.result);
      }
    }
    return obj;
  };


  return AgreementStatusUpdateResponse;
}));


