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
    module.exports = factory(require('../utils/WidgetUtils'), require('../utils/TransientDocumentUtils'), require('../utils/Constants'), require('../utils/Errors'), require('../utils/ApiUtils'));
  
}(function(WidgetUtils, TransientDocumentUtils, Constants, Errors, ApiUtils) {
  'use strict';

  /**
   * This sample client demonstrates how to create a new widget.
   *
   * 1. Create a widget with a transient document and a document containing form fields which will be placed on the widget.
   * 2. Add counter signer to widget.
   *
   * <p>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function CreateNewWidgetWithCounterSigners() {

    /**
     * Entry point for this sample client program.
     */
    var transientDocumentId = null;

    ApiUtils.configureProperty(CreateNewWidgetWithCounterSigners.name);

    TransientDocumentUtils.createTransientDocument(ApiUtils.getResourcesFolderPath(),
                                                   Constants.INPUT_FILE_NAME)
                          .then(function(transientDocument) {
                            transientDocumentId = transientDocument.getTransientDocumentId();

                            // Upload a transient document with form fields which will be placed in the created widget.
                            return TransientDocumentUtils.createTransientDocument(ApiUtils.getResourcesFolderPath(),
                                                                                  Constants.INPUT_FORM_FIELD_FILE_NAME)
                          })
                          .then(function(formFieldDocument) {
                            var formFieldDocumentId = formFieldDocument.getTransientDocumentId();

                            // Add counter signer to the counterSignerMemberList
                            var counterSignerMemberList = [];
                            counterSignerMemberList.push(Constants.USER_EMAIL);

                            // Make call to create the widget.
                            return WidgetUtils.createWidgetWithCounterSigner(transientDocumentId,
                                                                             WidgetUtils.DocumentIdentifierType.TRANSIENT_DOCUMENT_ID,
                                                                             formFieldDocumentId,
                                                                             WidgetUtils.DocumentIdentifierType.TRANSIENT_DOCUMENT_ID,
                                                                             Constants.WIDGET_NAME,
                                                                             counterSignerMemberList)
                          })
                          .then(function(widgetCreationResponse) {

                            // Display widget ID and corresponding code of newly created widget.
                            ApiUtils.info("Newly created widget's ID: " + widgetCreationResponse.getWidgetId());
                            ApiUtils.info("The corresponding Javascript code to embed the created widget: " + widgetCreationResponse.getJavascript() + "\n" + "OR \n" + "URL to host the widget: " + widgetCreationResponse.getUrl());
                          })
                          .catch(function(apiError) {
                            ApiUtils.logError(Errors.CREATE_WIDGET_WITH_COUNTER_SIGNERS, apiError);
                          });

  })();

}));

