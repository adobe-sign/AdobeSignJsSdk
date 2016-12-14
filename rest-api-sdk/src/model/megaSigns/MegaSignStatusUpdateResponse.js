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
   * @module model/megaSigns/MegaSignStatusUpdateResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MegaSignStatusUpdateResponse</code>.
   * @alias module:model/megaSigns/MegaSignStatusUpdateResponse
   * @class
   */
  var MegaSignStatusUpdateResponse = function() {
    var _this = this;


    _this.code = undefined;

    _this.message = undefined;

    _this.result = undefined;

   /**
    * The result of the attempt to cancel the MegaSign
    * @function getCode
    * @return  {module:model/megaSigns/String} The result of the attempt to cancel the MegaSign  
    * @instance
    */
    _this.getCode = function() {
      return _this.code;
    };

   /**
    * The result of the attempt to cancel the MegaSign
    * @function setCode
    * @param code {module:model/megaSigns/String} The result of the attempt to cancel the MegaSign
    * @instance
    */
    _this.setCode = function(code) {
      _this.code = code;
    };

   /**
    * String result message if there was no error
    * @function getMessage
    * @return  {module:model/megaSigns/String} String result message if there was no error  
    * @instance
    */
    _this.getMessage = function() {
      return _this.message;
    };

   /**
    * String result message if there was no error
    * @function setMessage
    * @param message {module:model/megaSigns/String} String result message if there was no error
    * @instance
    */
    _this.setMessage = function(message) {
      _this.message = message;
    };

   /**
    * A status value showing the result of this operation
    * @function getResult
    * @return  {module:model/megaSigns/String} A status value showing the result of this operation  
    * @instance
    */
    _this.getResult = function() {
      return _this.result;
    };

   /**
    * A status value showing the result of this operation
    * @function setResult
    * @param result {module:model/megaSigns/String} A status value showing the result of this operation
    * @instance
    */
    _this.setResult = function(result) {
      _this.result = result;
    };

  };

  /**
   * @private
   * Constructs a <code>MegaSignStatusUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MegaSignStatusUpdateResponse} obj Optional instance to populate.
   * @return {module:model/megaSigns/MegaSignStatusUpdateResponse} The populated <code>MegaSignStatusUpdateResponse</code> instance.
   */
  MegaSignStatusUpdateResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MegaSignStatusUpdateResponse();

      if (data.hasOwnProperty('code')) {
        obj.setCode(data.code);
      }
      if (data.hasOwnProperty('message')) {
        obj.setMessage(data.message);
      }
      if (data.hasOwnProperty('result')) {
        obj.setResult(data.result);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
MegaSignStatusUpdateResponse.CodeEnum = {
  
  
    /**
     * value: ALREADY_CANCELLED
     * @const
     */
    ALREADY_CANCELLED: "ALREADY_CANCELLED",
    
  
    /**
     * value: ALREADY_SIGNED
     * @const
     */
    ALREADY_SIGNED: "ALREADY_SIGNED"
  
  
  };

  return MegaSignStatusUpdateResponse;
}));


