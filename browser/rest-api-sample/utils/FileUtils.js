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

(function(root, factory) {
  // Browser globals (root is window)
  if (!root.AdobeSignSdk) {
    root.AdobeSignSdk = {};
  }
  root.AdobeSignSdk.FileUtils = factory(root.AdobeSignSdk.Errors, root.AdobeSignSdk.ApiUtils);

}(this, function(Errors, ApiUtils) {
  'use strict';

  var FileUtils = function() {};

  /**
   * Saves data to file with the specified name.
   *
   * @param fileData Data bytes to be saved to disk.
   * @param type     Type of the file to be saved.
   * @param fileName File name with which the file is to be saved.
   */
  FileUtils.saveToFile = function(fileData,
                                  type,
                                  fileName) {

    //Print file name.
    ApiUtils.info("Saving result in '" + fileName + "'.");
    return new Promise(function (resolve, reject) {
      try {
        var a = document.createElement("a");
        var file = new Blob([new DataView(fileData)], {type: type});
        if (window.navigator.msSaveOrOpenBlob) // IE10+
          window.navigator.msSaveOrOpenBlob(file, fileName);
        else { // Others
          var url = URL.createObjectURL(file);
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          }, 0);
        }
        ApiUtils.info("Successfully saved document in '" + fileName + "'.");
        resolve();
      }
      catch(e){reject(e);}
    })
    .catch(function(apiError) {
      ApiUtils.logAndThrowError(Errors.FILE_NOT_SAVED, apiError);
    });

  };

  return FileUtils;
}));
