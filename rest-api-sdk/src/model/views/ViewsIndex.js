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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/views/AgreementAssetListRequest'), require('../../model/views/AgreementAssetRequest'), require('../../model/views/TargetViewRequest'), require('../../model/views/ViewUrl'));

}(function(ApiClient, AgreementAssetListRequest, AgreementAssetRequest, TargetViewRequest, ViewUrl) {
  'use strict';

  /**
   * @module ViewsIndex
   * @version 1.1.0
   */
  var ViewsIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AgreementAssetListRequest model constructor.
     * @property {module:model/views/AgreementAssetListRequest}
     */
    AgreementAssetListRequest: AgreementAssetListRequest,
    /**
     * The AgreementAssetRequest model constructor.
     * @property {module:model/views/AgreementAssetRequest}
     */
    AgreementAssetRequest: AgreementAssetRequest,
    /**
     * The TargetViewRequest model constructor.
     * @property {module:model/views/TargetViewRequest}
     */
    TargetViewRequest: TargetViewRequest,
    /**
     * The ViewUrl model constructor.
     * @property {module:model/views/ViewUrl}
     */
    ViewUrl: ViewUrl
  };

  return ViewsIndex ;
}));
