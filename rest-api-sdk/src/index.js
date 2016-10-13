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
    module.exports = factory(require('./model/agreements/AgreementsIndex'), require('./model/baseUris/BaseUrisIndex'), require('./model/groups/GroupsIndex'), require('./model/libraryDocuments/LibraryDocumentsIndex'), require('./model/oAuth/OAuthIndex'), require('./model/megaSigns/MegaSignsIndex'), require('./model/reminders/RemindersIndex'), require('./model/search/SearchIndex'), require('./model/transientDocuments/TransientDocumentsIndex'), require('./model/users/UsersIndex'), require('./model/views/ViewsIndex'), require('./model/widgets/WidgetsIndex'), require('./model/workflows/WorkflowsIndex'),
                             require('./api/AgreementsApi'), require('./api/BaseUrisApi'), require('./api/GroupsApi'), require('./api/LibraryDocumentsApi'), require('./api/OAuthApi'), require('./api/MegaSignsApi'), require('./api/RemindersApi'), require('./api/SearchApi'), require('./api/TransientDocumentsApi'), require('./api/UsersApi'), require('./api/ViewsApi'), require('./api/WidgetsApi'), require('./api/WorkflowsApi'), require('./utils/ApiError'), require('./utils/Context'));
  
}(function(AgreementsIndex, BaseUrisIndex, GroupsIndex, LibraryDocumentsIndex, OAuthIndex, MegaSignsIndex, RemindersIndex, SearchIndex, TransientDocumentsIndex, UsersIndex, ViewsIndex, WidgetsIndex, WorkflowsIndex,
           AgreementsApi, BaseUrisApi, GroupsApi, LibraryDocumentsApi, OAuthApi, MegaSignsApi, RemindersApi, SearchApi, TransientDocumentsApi, UsersApi, ViewsApi, WidgetsApi, WorkflowsApi, ApiError, Context) {
  'use strict';

  /**
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * @module index
   * @version 1.0.0
   */
  var Index = {

    /**
     * The AgreementsIndex model constructor.
     * @property {module:model/agreements/AgreementsIndex}
     */
    AgreementsModel: AgreementsIndex,
    /**
     * The AgreementsApi service constructor.
     * @property {module:api/AgreementsApi}
     */
    AgreementsApi: AgreementsApi,
    /**
     * The BaseUrisIndex model constructor.
     * @property {module:model/baseUris/BaseUrisIndex}
     */
    BaseUrisModel: BaseUrisIndex,
    /**
     * The BaseUrisApi service constructor.
     * @property {module:api/BaseUrisApi}
     */
    BaseUrisApi: BaseUrisApi,
    /**
     * The GroupsIndex model constructor.
     * @property {module:model/groups/GroupsIndex}
     */
    GroupsModel: GroupsIndex,
    /**
     * The GroupsApi service constructor.
     * @property {module:api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The LibraryDocumentsIndex model constructor.
     * @property {module:model/libraryDocuments/LibraryDocumentsIndex}
     */
    LibraryDocumentsModel: LibraryDocumentsIndex,
    /**
     * The LibraryDocumentsApi service constructor.
     * @property {module:api/LibraryDocumentsApi}
     */
    LibraryDocumentsApi: LibraryDocumentsApi,
    /**
     * The MegaSignsIndex model constructor.
     * @property {module:model/megaSigns/MegaSignsIndex}
     */
    MegaSignsModel: MegaSignsIndex,
    /**
     * The MegaSignsApi service constructor.
     * @property {module:api/MegaSignsApi}
     */
    MegaSignsApi: MegaSignsApi,
    /**
     * The OAuthIndex model constructor.
     * @property {module:model/oAuth/OAuthIndex}
     */
    OAuthModel: OAuthIndex,
    /**
     * The OAuthApi service constructor.
     * @property {module:api/OAuthApi}
     */
    OAuthApi: OAuthApi,
    /**
     * The RemindersIndex model constructor.
     * @property {module:model/reminders/RemindersIndex}
     */
    RemindersModel: RemindersIndex,
    /**
     * The RemindersApi service constructor.
     * @property {module:api/RemindersApi}
     */
    RemindersApi: RemindersApi,
    /**
     * The SearchIndex model constructor.
     * @property {module:model/search/SearchIndex}
     */
    SearchModel: SearchIndex,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi,
    /**
     * The TransientDocumentsIndex model constructor.
     * @property {module:model/transientDocuments/TransientDocumentsIndex}
     */
    TransientDocumentsModel: TransientDocumentsIndex,
    /**
     * The TransientDocumentsApi service constructor.
     * @property {module:api/TransientDocumentsApi}
     */
    TransientDocumentsApi: TransientDocumentsApi,
    /**
     * The UsersIndex model constructor.
     * @property {module:model/users/UsersIndex}
     */
    UsersModel: UsersIndex,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi,
    /**
     * The ViewsIndex model constructor.
     * @property {module:model/views/ViewsIndex}
     */
    ViewsModel: ViewsIndex,
    /**
     * The ViewsApi service constructor.
     * @property {module:api/ViewsApi}
     */
    ViewsApi: ViewsApi,
    /**
     * The WidgetsIndex model constructor.
     * @property {module:model/widgets/WidgetsIndex}
     */
    WidgetsModel: WidgetsIndex,
    /**
     * The WidgetsApi service constructor.
     * @property {module:api/WidgetsApi}
     */
    WidgetsApi: WidgetsApi,
    /**
     * The WorkflowsIndex model constructor.
     * @property {module:model/workflows/WorkflowsIndex}
     */
    WorkflowsModel: WorkflowsIndex,
    /**
     * The WorkflowsApi service constructor.
     * @property {module:api/WorkflowsApi}
     */
    WorkflowsApi: WorkflowsApi,
    /**
     * The apiError constructor.
     * @property {module:ApiError}
     */
    ApiError: ApiError,
    /**
     * The context constructor.
     * @property {module:Context}
     */
    Context: Context
  };

  return Index;
}));
