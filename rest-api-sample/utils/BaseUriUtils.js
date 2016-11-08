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
    module.exports = factory(require('adobe-sign-sdk'), require('./Errors'), require('./ApiUtils'));

}(function(AdobeSignSdk, Errors, ApiUtils) {
  'use strict';

  var BaseUriUtils = function(){};

  var baseUrisApi = new AdobeSignSdk.BaseUrisApi(ApiUtils.getContext());
  var Context = ApiUtils.getContext();
  var headers = ApiUtils.getHeaderParams();

  /**
   * Set the base uri in the SDK Context
   *
   * @throws Error
   */
  BaseUriUtils.setBaseUri = function() {

    return baseUrisApi.getBaseUris(headers)
                      .then(function(baseUriInfo) {
                        Context.setBaseUri(baseUriInfo.getApiAccessPoint());
                      })
                      .catch(function(apiError) {
                        ApiUtils.logAndThrowError(Errors.SET_BASE_URI, apiError);
                      });

  };

  return BaseUriUtils;
}));
