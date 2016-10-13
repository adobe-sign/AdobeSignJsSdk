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
    module.exports = factory(require('../utils/ApiClient'));
  
}(function(ApiClient) {
  'use strict';

  /**
   * Constructs a new Context.
   * @alias module:Context
   * @class
   */
  var Context = function() {
    var _this = this;

    _this.apiClient = new ApiClient();
    /**
     * Set the base uri.
     */
    _this.setBaseUri = function (baseUri) {
      _this.apiClient.setBaseUri(baseUri);
    };


    /**
     * Get the base uri.
     */
    _this.getBaseUri = function () {
      return _this.apiClient.getBaseUri();
    };

    /**
     * Set the host environment.
     */
    _this.setEnvHostName = function (baseUri) {
      _this.apiClient.setEnvHostName(baseUri);
    };


    /**
     * Get the host environment.
     */
    _this.getEnvHostName = function () {
      return _this.apiClient.getEnvHostName();
    };
  };
  return Context;
}));
