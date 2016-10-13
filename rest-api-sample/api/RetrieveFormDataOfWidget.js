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
    module.exports = factory(require('../utils/WidgetUtils'), require('../utils/FileUtils'), require('../utils/Constants'), require('../utils/Errors'), require('../utils/ApiUtils'), require('path'));
  
}(function(WidgetUtils, FileUtils, Constants, Errors, ApiUtils, path) {
  'use strict';

  /**
   * This sample client demonstrates how to download the form data of the specified widget.
   *
   * <p>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function RetrieveFormDataOfWidget() {

    /**
     * Entry point for this sample client program.
     */
    var widgetName = null;

    ApiUtils.configureProperty(RetrieveFormDataOfWidget.name);

    //Get the id of the first library document of the user.
    WidgetUtils.getFirstWidgetId()
               .then(function(widgetId) {
                 if (!widgetId) {
                   ApiUtils.logError(Errors.NO_WIDGET_FOUND);
                 }
                 else {
                   //Display name of the widget associated with the specified widget ID.
                   return WidgetUtils.getWidgetInfo(widgetId)
                                     .then(function(widgetInfo) {
                                       widgetName = widgetInfo.getName();
                                       ApiUtils.info("Widget name: " + widgetName);

                                       //Make API call to get form data of this widget.
                                       return WidgetUtils.getWidgetFormData(widgetInfo.getWidgetId());
                                     })
                                     .then(function(formDataStream) {

                                       //Generate a running file name for storing locally.
                                       var fileName = widgetName + "_" + Date.now().toString() + ".csv";

                                       var formDataFolderPath = path.join(ApiUtils.getOutputFolderPath(), Constants.FORM_DATA);

                                       //Save form Data Stream to file
                                       if (formDataStream != null) {
                                         return FileUtils.saveToFile(formDataStream,
                                                                     formDataFolderPath,
                                                                     fileName);
                                       }
                                     });
                 }
               })
               .catch(function(apiError) {
                 ApiUtils.logError(Errors.RETRIEVE_FORM_DATA_WIDGET, apiError);
               });

  })();

}));

