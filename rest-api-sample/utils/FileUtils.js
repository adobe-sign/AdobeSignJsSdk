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
    module.exports = factory(require('./Errors'), require('./ApiUtils'), require('./Constants'), require('fs'), require('path'), require('mkdirp'));
  
}(function(Errors, ApiUtils, Constants, fs, path, mkdirp) {
  'use strict';

  var FileUtils = function() {};

    /**
     * Saves bytes to the specified location with the specified name.
     *
     * @param fileData Data bytes to be saved to disk.
     * @param dirPath Folder location where the file is to be saved; must end in a path separator.
     * @param fileName File name with which the file is to be saved.
     * @throws ApiError
     */
    FileUtils.saveToFile = function(fileData,
                                    dirPath,
                                    fileName) {

      //Check if directory exist, if not then create it.
      FileUtils.createFolder(dirPath)
               .then(function () {
                 var filePath = path.join(dirPath, fileName);
                 var buffer = new Buffer(fileData);

                 //Print file name.
                 ApiUtils.info("Saving result in '" + fileName + "'.");

                 return new Promise(function (resolve, reject) {

                   //Create file and write data into the file.
                   fs.writeFile(filePath, buffer, Constants.FILE_OFFSET, fileData.length, function (err) {
                     if (err) {
                       reject(err);
                     }
                     else {
                       ApiUtils.info("Successfully saved document in '" + dirPath + "'.");
                       resolve();
                     }
                   });
                 });
               })
               .catch(function(apiError) {
                 ApiUtils.logAndThrowError(Errors.FILE_NOT_SAVED, apiError);
               });
      
      };

    /**
     * Create a new directory and any necessary subdirectories in the directory path specified.
     *
     * @param dirPath Path of the directory to be created.
     * @throws Error
     */
    FileUtils.createFolder = function(dirPath) {
      
      return new Promise(function(resolve, reject) {
        mkdirp(dirPath, function (err) {
          if (err) {
            reject(err);
          }
          else {
            resolve();
          }
        });
      });
    };

  return FileUtils;
}));
