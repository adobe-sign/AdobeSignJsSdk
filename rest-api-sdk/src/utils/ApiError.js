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
    module.exports = factory(require('util'));
  
}(function(util) {
  'use strict';

  /**
   * ApiError.
   * @module ApiError
   * @version 1.0.0
   */

  /**
   * Constructs a new ApiError. 
   * @alias module:ApiError
   * @class
   */
  
  
  var ApiError = function ApiError(key, missingParam){

    var getMessage = function (key) {

      if(key.message)
      {
        return key.message;
      }

      var HTTP_STATUS_CODE = "\"httpCode\": ";
      var CODE = "\"apiCode\": ";
      var MESSAGE = "\"message\": ";
      var SEPARATOR = ", ";

      var message = "";
      if(key.httpCode) {
        message = HTTP_STATUS_CODE + key.httpCode;
      }
      if(key.errorMessage) {
        if(message)
          message = message + SEPARATOR;
        message = message + MESSAGE + key.errorMessage;

      }
      if(key.apiCode) {
        if(message)
          message = message + SEPARATOR;
        message = message + CODE + key.apiCode;
      }
      return message;
    };

    var getErrorMessage = function(key, missingParam) {
      var MISSING_PARAM_SEPARATOR = " : ";
      var error= key.errorMessage;
      if(key.errorMessage) {
        if(missingParam) {
          error = error + MISSING_PARAM_SEPARATOR +missingParam;
        }
      }
      return error;
    }

    var _this = this;
    Error.call(_this);

    if (!Error.captureStackTrace)
      _this.stack = (new Error()).stack;
    else
      Error.captureStackTrace(_this, _this.constructor);

    if(key.httpCode)
      _this.httpCode = key.httpCode;

    if(key.errorMessage)
      _this.errorMessage = getErrorMessage(key, missingParam);

    if(key.apiCode)
      _this.apiCode = key.apiCode;

    _this.name = _this.constructor.name;
    _this.message = getMessage(key);

  };

  util.inherits(ApiError, Error);
  return ApiError;
}));
