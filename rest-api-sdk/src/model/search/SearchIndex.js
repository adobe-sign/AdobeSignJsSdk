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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/search/AgreementAssetEventGetResponse'), require('../../model/search/AgreementAssetEventPostResponse'), require('../../model/search/AgreementAssetEventRequest'), require('../../model/search/DeviceLocation'), require('../../model/search/DocumentEventForUser'), require('../../model/search/DocumentHistoryEvent'));

}(function(ApiClient, AgreementAssetEventGetResponse, AgreementAssetEventPostResponse, AgreementAssetEventRequest, DeviceLocation, DocumentEventForUser, DocumentHistoryEvent) {
  'use strict';

  /**
   * @module SearchIndex
   * @version 1.1.0
   */
  var SearchIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AgreementAssetEventGetResponse model constructor.
     * @property {module:model/search/AgreementAssetEventGetResponse}
     */
    AgreementAssetEventGetResponse: AgreementAssetEventGetResponse,
    /**
     * The AgreementAssetEventPostResponse model constructor.
     * @property {module:model/search/AgreementAssetEventPostResponse}
     */
    AgreementAssetEventPostResponse: AgreementAssetEventPostResponse,
    /**
     * The AgreementAssetEventRequest model constructor.
     * @property {module:model/search/AgreementAssetEventRequest}
     */
    AgreementAssetEventRequest: AgreementAssetEventRequest,
    /**
     * The DeviceLocation model constructor.
     * @property {module:model/search/DeviceLocation}
     */
    DeviceLocation: DeviceLocation,
    /**
     * The DocumentEventForUser model constructor.
     * @property {module:model/search/DocumentEventForUser}
     */
    DocumentEventForUser: DocumentEventForUser,
    /**
     * The DocumentHistoryEvent model constructor.
     * @property {module:model/search/DocumentHistoryEvent}
     */
    DocumentHistoryEvent: DocumentHistoryEvent
  };

  return SearchIndex ;
}));
