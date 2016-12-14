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
    module.exports = factory();
  
}(function() {
  'use strict';
  
  /**
   * This file contains basic utility functions which will be used for String manipulations
   */
  var StringUtil = function (){};
  
    /**
     * Check if the apiCode of apiError and sdkErrorCode is equal
     *
     * @param apiError ApiError Object
     * @param sdkErrorCode SdkErrorCode to validate against
     * @return true if apiCode of apiError and sdkErrorCode is equal
     */
    StringUtil.assertEqual = function (apiError, sdkErrorCode) {
      if (sdkErrorCode.apiCode === apiError.apiCode) {
        return true;
      }
      else {
        return false;
      }
    };

    /**
     * To make a case insensitive matching
     *
     * @param string1 The first string to compare
     * @param string2 The second string to compare
     * @return true if value matches
     */
    StringUtil.equalIgnoreCase = function (string1, string2) {
      return (string1.toLowerCase() === string2.toLowerCase());
    };

    /**
     * Checks if the value passed is Null or Undefined
     *
     * @param value Object that needs to checked
     * @return true if value passed is null or undefined
     */
    StringUtil.isNullOrUndefined = function (value) {
      if((value == null) ||(value == undefined)){
        return true;
      }
      else{
        return false;
      }
    };

    /**
     * Checks if the value passed is a empty object
     *
     * @param object Object that needs to checked
     * @return true if value passed is empty object
     */
    StringUtil.isEmpty = function (object) {
      for(var i in object) {
        return false;
      }
      return true;
    };
    
  return StringUtil;
}));
