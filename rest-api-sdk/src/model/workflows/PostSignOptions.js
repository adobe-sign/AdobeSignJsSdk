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
   * @module model/workflows/PostSignOptions
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>PostSignOptions</code>.
   * @alias module:model/workflows/PostSignOptions
   * @class
   */
  var PostSignOptions = function() {
    var _this = this;


    _this.redirectDelay = undefined;

    _this.redirectUrl = undefined;

   /**
    * The delay (in seconds) before the user is taken to the success page. If this value is greater than 0, the user will first see the standard Adobe Sign success message, and then after a delay will be redirected to your success page.
    * @function getRedirectDelay
    * @return  {module:model/workflows/Integer} The delay (in seconds) before the user is taken to the success page. If this value is greater than 0, the user will first see the standard Adobe Sign success message, and then after a delay will be redirected to your success page.  
    * @instance
    */
    _this.getRedirectDelay = function() {
      return _this.redirectDelay;
    };

   /**
    * The delay (in seconds) before the user is taken to the success page. If this value is greater than 0, the user will first see the standard Adobe Sign success message, and then after a delay will be redirected to your success page.
    * @function setRedirectDelay
    * @param redirectDelay {module:model/workflows/Integer} The delay (in seconds) before the user is taken to the success page. If this value is greater than 0, the user will first see the standard Adobe Sign success message, and then after a delay will be redirected to your success page.
    * @instance
    */
    _this.setRedirectDelay = function(redirectDelay) {
      _this.redirectDelay = redirectDelay;
    };

   /**
    * A publicly accessible url to which the user will be sent after successfully completing the signing process.
    * @function getRedirectUrl
    * @return  {module:model/workflows/String} A publicly accessible url to which the user will be sent after successfully completing the signing process.  
    * @instance
    */
    _this.getRedirectUrl = function() {
      return _this.redirectUrl;
    };

   /**
    * A publicly accessible url to which the user will be sent after successfully completing the signing process.
    * @function setRedirectUrl
    * @param redirectUrl {module:model/workflows/String} A publicly accessible url to which the user will be sent after successfully completing the signing process.
    * @instance
    */
    _this.setRedirectUrl = function(redirectUrl) {
      _this.redirectUrl = redirectUrl;
    };

  };

  /**
   * @private
   * Constructs a <code>PostSignOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/PostSignOptions} obj Optional instance to populate.
   * @return {module:model/workflows/PostSignOptions} The populated <code>PostSignOptions</code> instance.
   */
  PostSignOptions.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new PostSignOptions();

      if (data.hasOwnProperty('redirectDelay')) {
        obj.setRedirectDelay(data.redirectDelay);
      }
      if (data.hasOwnProperty('redirectUrl')) {
        obj.setRedirectUrl(data.redirectUrl);
      }
    }
    return obj;
  };


  return PostSignOptions;
}));


