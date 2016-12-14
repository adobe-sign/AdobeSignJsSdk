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
   * @module model/workflows/InteractiveOptions
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>InteractiveOptions</code>.
   * @alias module:model/workflows/InteractiveOptions
   * @class
   */
  var InteractiveOptions = function() {
    var _this = this;


    _this.authoringRequested = undefined;

    _this.autoLoginUser = undefined;

    _this.noChrome = undefined;

   /**
    * Indicates that authoring is requested prior to sending the document
    * @function getAuthoringRequested
    * @return  {module:model/workflows/Boolean} Indicates that authoring is requested prior to sending the document  
    * @instance
    */
    _this.getAuthoringRequested = function() {
      return _this.authoringRequested;
    };

   /**
    * Indicates that authoring is requested prior to sending the document
    * @function setAuthoringRequested
    * @param authoringRequested {module:model/workflows/Boolean} Indicates that authoring is requested prior to sending the document
    * @instance
    */
    _this.setAuthoringRequested = function(authoringRequested) {
      _this.authoringRequested = authoringRequested;
    };

   /**
    * If user settings allow, automatically logs the user in
    * @function getAutoLoginUser
    * @return  {module:model/workflows/Boolean} If user settings allow, automatically logs the user in  
    * @instance
    */
    _this.getAutoLoginUser = function() {
      return _this.autoLoginUser;
    };

   /**
    * If user settings allow, automatically logs the user in
    * @function setAutoLoginUser
    * @param autoLoginUser {module:model/workflows/Boolean} If user settings allow, automatically logs the user in
    * @instance
    */
    _this.setAutoLoginUser = function(autoLoginUser) {
      _this.autoLoginUser = autoLoginUser;
    };

   /**
    * Turn off Chrome for the URL generated
    * @function getNoChrome
    * @return  {module:model/workflows/Boolean} Turn off Chrome for the URL generated  
    * @instance
    */
    _this.getNoChrome = function() {
      return _this.noChrome;
    };

   /**
    * Turn off Chrome for the URL generated
    * @function setNoChrome
    * @param noChrome {module:model/workflows/Boolean} Turn off Chrome for the URL generated
    * @instance
    */
    _this.setNoChrome = function(noChrome) {
      _this.noChrome = noChrome;
    };

  };

  /**
   * @private
   * Constructs a <code>InteractiveOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/InteractiveOptions} obj Optional instance to populate.
   * @return {module:model/workflows/InteractiveOptions} The populated <code>InteractiveOptions</code> instance.
   */
  InteractiveOptions.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new InteractiveOptions();

      if (data.hasOwnProperty('authoringRequested')) {
        obj.setAuthoringRequested(data.authoringRequested);
      }
      if (data.hasOwnProperty('autoLoginUser')) {
        obj.setAutoLoginUser(data.autoLoginUser);
      }
      if (data.hasOwnProperty('noChrome')) {
        obj.setNoChrome(data.noChrome);
      }
    }
    return obj;
  };


  return InteractiveOptions;
}));


