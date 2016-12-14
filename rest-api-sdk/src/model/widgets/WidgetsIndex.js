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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/CounterSignerInfo'), require('../../model/widgets/CounterSignerSetInfo'), require('../../model/widgets/DisplayUserInfo'), require('../../model/widgets/DisplayUserSetInfo'), require('../../model/widgets/PhoneInfo'), require('../../model/widgets/UserAgreement'), require('../../model/widgets/UserWidget'), require('../../model/widgets/UserWidgets'), require('../../model/widgets/WidgetAgreements'), require('../../model/widgets/WidgetCompletionInfo'), require('../../model/widgets/WidgetCreationInfo'), require('../../model/widgets/WidgetCreationRequest'), require('../../model/widgets/WidgetCreationResponse'), require('../../model/widgets/WidgetDocuments'), require('../../model/widgets/WidgetEventDeviceLocation'), require('../../model/widgets/WidgetFileInfo'), require('../../model/widgets/WidgetHistoryEvent'), require('../../model/widgets/WidgetInfo'), require('../../model/widgets/WidgetMergefieldInfo'), require('../../model/widgets/WidgetOriginalDocument'), require('../../model/widgets/WidgetParticipantInfo'), require('../../model/widgets/WidgetParticipantSetInfo'), require('../../model/widgets/WidgetPersonalizationInfo'), require('../../model/widgets/WidgetPersonalizeResponse'), require('../../model/widgets/WidgetSecurityOption'), require('../../model/widgets/WidgetSignerSecurityOption'), require('../../model/widgets/WidgetStatusUpdateInfo'), require('../../model/widgets/WidgetStatusUpdateResponse'), require('../../model/widgets/WidgetURLFileInfo'), require('../../model/widgets/WidgetVaultingInfo'));

}(function(ApiClient, CounterSignerInfo, CounterSignerSetInfo, DisplayUserInfo, DisplayUserSetInfo, PhoneInfo, UserAgreement, UserWidget, UserWidgets, WidgetAgreements, WidgetCompletionInfo, WidgetCreationInfo, WidgetCreationRequest, WidgetCreationResponse, WidgetDocuments, WidgetEventDeviceLocation, WidgetFileInfo, WidgetHistoryEvent, WidgetInfo, WidgetMergefieldInfo, WidgetOriginalDocument, WidgetParticipantInfo, WidgetParticipantSetInfo, WidgetPersonalizationInfo, WidgetPersonalizeResponse, WidgetSecurityOption, WidgetSignerSecurityOption, WidgetStatusUpdateInfo, WidgetStatusUpdateResponse, WidgetURLFileInfo, WidgetVaultingInfo) {
  'use strict';

  /**
   * @module WidgetsIndex
   * @version 1.1.0
   */
  var WidgetsIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CounterSignerInfo model constructor.
     * @property {module:model/widgets/CounterSignerInfo}
     */
    CounterSignerInfo: CounterSignerInfo,
    /**
     * The CounterSignerSetInfo model constructor.
     * @property {module:model/widgets/CounterSignerSetInfo}
     */
    CounterSignerSetInfo: CounterSignerSetInfo,
    /**
     * The DisplayUserInfo model constructor.
     * @property {module:model/widgets/DisplayUserInfo}
     */
    DisplayUserInfo: DisplayUserInfo,
    /**
     * The DisplayUserSetInfo model constructor.
     * @property {module:model/widgets/DisplayUserSetInfo}
     */
    DisplayUserSetInfo: DisplayUserSetInfo,
    /**
     * The PhoneInfo model constructor.
     * @property {module:model/widgets/PhoneInfo}
     */
    PhoneInfo: PhoneInfo,
    /**
     * The UserAgreement model constructor.
     * @property {module:model/widgets/UserAgreement}
     */
    UserAgreement: UserAgreement,
    /**
     * The UserWidget model constructor.
     * @property {module:model/widgets/UserWidget}
     */
    UserWidget: UserWidget,
    /**
     * The UserWidgets model constructor.
     * @property {module:model/widgets/UserWidgets}
     */
    UserWidgets: UserWidgets,
    /**
     * The WidgetAgreements model constructor.
     * @property {module:model/widgets/WidgetAgreements}
     */
    WidgetAgreements: WidgetAgreements,
    /**
     * The WidgetCompletionInfo model constructor.
     * @property {module:model/widgets/WidgetCompletionInfo}
     */
    WidgetCompletionInfo: WidgetCompletionInfo,
    /**
     * The WidgetCreationInfo model constructor.
     * @property {module:model/widgets/WidgetCreationInfo}
     */
    WidgetCreationInfo: WidgetCreationInfo,
    /**
     * The WidgetCreationRequest model constructor.
     * @property {module:model/widgets/WidgetCreationRequest}
     */
    WidgetCreationRequest: WidgetCreationRequest,
    /**
     * The WidgetCreationResponse model constructor.
     * @property {module:model/widgets/WidgetCreationResponse}
     */
    WidgetCreationResponse: WidgetCreationResponse,
    /**
     * The WidgetDocuments model constructor.
     * @property {module:model/widgets/WidgetDocuments}
     */
    WidgetDocuments: WidgetDocuments,
    /**
     * The WidgetEventDeviceLocation model constructor.
     * @property {module:model/widgets/WidgetEventDeviceLocation}
     */
    WidgetEventDeviceLocation: WidgetEventDeviceLocation,
    /**
     * The WidgetFileInfo model constructor.
     * @property {module:model/widgets/WidgetFileInfo}
     */
    WidgetFileInfo: WidgetFileInfo,
    /**
     * The WidgetHistoryEvent model constructor.
     * @property {module:model/widgets/WidgetHistoryEvent}
     */
    WidgetHistoryEvent: WidgetHistoryEvent,
    /**
     * The WidgetInfo model constructor.
     * @property {module:model/widgets/WidgetInfo}
     */
    WidgetInfo: WidgetInfo,
    /**
     * The WidgetMergefieldInfo model constructor.
     * @property {module:model/widgets/WidgetMergefieldInfo}
     */
    WidgetMergefieldInfo: WidgetMergefieldInfo,
    /**
     * The WidgetOriginalDocument model constructor.
     * @property {module:model/widgets/WidgetOriginalDocument}
     */
    WidgetOriginalDocument: WidgetOriginalDocument,
    /**
     * The WidgetParticipantInfo model constructor.
     * @property {module:model/widgets/WidgetParticipantInfo}
     */
    WidgetParticipantInfo: WidgetParticipantInfo,
    /**
     * The WidgetParticipantSetInfo model constructor.
     * @property {module:model/widgets/WidgetParticipantSetInfo}
     */
    WidgetParticipantSetInfo: WidgetParticipantSetInfo,
    /**
     * The WidgetPersonalizationInfo model constructor.
     * @property {module:model/widgets/WidgetPersonalizationInfo}
     */
    WidgetPersonalizationInfo: WidgetPersonalizationInfo,
    /**
     * The WidgetPersonalizeResponse model constructor.
     * @property {module:model/widgets/WidgetPersonalizeResponse}
     */
    WidgetPersonalizeResponse: WidgetPersonalizeResponse,
    /**
     * The WidgetSecurityOption model constructor.
     * @property {module:model/widgets/WidgetSecurityOption}
     */
    WidgetSecurityOption: WidgetSecurityOption,
    /**
     * The WidgetSignerSecurityOption model constructor.
     * @property {module:model/widgets/WidgetSignerSecurityOption}
     */
    WidgetSignerSecurityOption: WidgetSignerSecurityOption,
    /**
     * The WidgetStatusUpdateInfo model constructor.
     * @property {module:model/widgets/WidgetStatusUpdateInfo}
     */
    WidgetStatusUpdateInfo: WidgetStatusUpdateInfo,
    /**
     * The WidgetStatusUpdateResponse model constructor.
     * @property {module:model/widgets/WidgetStatusUpdateResponse}
     */
    WidgetStatusUpdateResponse: WidgetStatusUpdateResponse,
    /**
     * The WidgetURLFileInfo model constructor.
     * @property {module:model/widgets/WidgetURLFileInfo}
     */
    WidgetURLFileInfo: WidgetURLFileInfo,
    /**
     * The WidgetVaultingInfo model constructor.
     * @property {module:model/widgets/WidgetVaultingInfo}
     */
    WidgetVaultingInfo: WidgetVaultingInfo
  };

  return WidgetsIndex ;
}));
