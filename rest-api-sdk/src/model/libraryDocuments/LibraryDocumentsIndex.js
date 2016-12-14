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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/libraryDocuments/DocumentLibraryItem'), require('../../model/libraryDocuments/DocumentLibraryItems'), require('../../model/libraryDocuments/Documents'), require('../../model/libraryDocuments/FileInfo'), require('../../model/libraryDocuments/InteractiveOptions'), require('../../model/libraryDocuments/LibDocEventDeviceLocation'), require('../../model/libraryDocuments/LibDocParticipantInfo'), require('../../model/libraryDocuments/LibDocumentHistoryEvent'), require('../../model/libraryDocuments/LibraryCreationInfo'), require('../../model/libraryDocuments/LibraryDocumentCreationInfo'), require('../../model/libraryDocuments/LibraryDocumentCreationResponse'), require('../../model/libraryDocuments/LibraryDocumentInfo'), require('../../model/libraryDocuments/OriginalDocument'), require('../../model/libraryDocuments/URLFileInfo'));

}(function(ApiClient, DocumentLibraryItem, DocumentLibraryItems, Documents, FileInfo, InteractiveOptions, LibDocEventDeviceLocation, LibDocParticipantInfo, LibDocumentHistoryEvent, LibraryCreationInfo, LibraryDocumentCreationInfo, LibraryDocumentCreationResponse, LibraryDocumentInfo, OriginalDocument, URLFileInfo) {
  'use strict';

  /**
   * @module LibraryDocumentsIndex
   * @version 1.1.0
   */
  var LibraryDocumentsIndex = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DocumentLibraryItem model constructor.
     * @property {module:model/libraryDocuments/DocumentLibraryItem}
     */
    DocumentLibraryItem: DocumentLibraryItem,
    /**
     * The DocumentLibraryItems model constructor.
     * @property {module:model/libraryDocuments/DocumentLibraryItems}
     */
    DocumentLibraryItems: DocumentLibraryItems,
    /**
     * The Documents model constructor.
     * @property {module:model/libraryDocuments/Documents}
     */
    Documents: Documents,
    /**
     * The FileInfo model constructor.
     * @property {module:model/libraryDocuments/FileInfo}
     */
    FileInfo: FileInfo,
    /**
     * The InteractiveOptions model constructor.
     * @property {module:model/libraryDocuments/InteractiveOptions}
     */
    InteractiveOptions: InteractiveOptions,
    /**
     * The LibDocEventDeviceLocation model constructor.
     * @property {module:model/libraryDocuments/LibDocEventDeviceLocation}
     */
    LibDocEventDeviceLocation: LibDocEventDeviceLocation,
    /**
     * The LibDocParticipantInfo model constructor.
     * @property {module:model/libraryDocuments/LibDocParticipantInfo}
     */
    LibDocParticipantInfo: LibDocParticipantInfo,
    /**
     * The LibDocumentHistoryEvent model constructor.
     * @property {module:model/libraryDocuments/LibDocumentHistoryEvent}
     */
    LibDocumentHistoryEvent: LibDocumentHistoryEvent,
    /**
     * The LibraryCreationInfo model constructor.
     * @property {module:model/libraryDocuments/LibraryCreationInfo}
     */
    LibraryCreationInfo: LibraryCreationInfo,
    /**
     * The LibraryDocumentCreationInfo model constructor.
     * @property {module:model/libraryDocuments/LibraryDocumentCreationInfo}
     */
    LibraryDocumentCreationInfo: LibraryDocumentCreationInfo,
    /**
     * The LibraryDocumentCreationResponse model constructor.
     * @property {module:model/libraryDocuments/LibraryDocumentCreationResponse}
     */
    LibraryDocumentCreationResponse: LibraryDocumentCreationResponse,
    /**
     * The LibraryDocumentInfo model constructor.
     * @property {module:model/libraryDocuments/LibraryDocumentInfo}
     */
    LibraryDocumentInfo: LibraryDocumentInfo,
    /**
     * The OriginalDocument model constructor.
     * @property {module:model/libraryDocuments/OriginalDocument}
     */
    OriginalDocument: OriginalDocument,
    /**
     * The URLFileInfo model constructor.
     * @property {module:model/libraryDocuments/URLFileInfo}
     */
    URLFileInfo: URLFileInfo
  };

  return LibraryDocumentsIndex ;
}));
