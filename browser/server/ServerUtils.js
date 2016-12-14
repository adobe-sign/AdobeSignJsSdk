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

(function (factory) {
  // CommonJS-like environments that support module.exports, like Node.
  module.exports = factory(require('./serverConfig'), require('path'));

}(function (ServerConfig, path) {
  'use strict';
   var ServerUtils = function(){};

   var SERVER_PORT_KEY = "serverPort";
   var KEY_STORE_FILE_KEY = "keyStoreFile";
   var CERTIFICATE_FILE_KEY = "certificateFile";
   var HTTP_SERVER_MODULE_KEY = "httpServerModule";
   var SERVER_ADDRESS_KEY = "serverAddress";

   var MINUS_ONE = -1;

   ServerUtils.SERVER_PORT = ServerConfig[SERVER_PORT_KEY] === undefined ? MINUS_ONE : ServerConfig[SERVER_PORT_KEY];
   ServerUtils.KEY_STORE_FILE = ServerConfig[KEY_STORE_FILE_KEY] === undefined ? null : ServerConfig[KEY_STORE_FILE_KEY];
   ServerUtils.CERTIFICATE_FILE = ServerConfig[CERTIFICATE_FILE_KEY] === undefined ? null : ServerConfig[CERTIFICATE_FILE_KEY];
   ServerUtils.HTTP_SERVER_MODULE = ServerConfig[HTTP_SERVER_MODULE_KEY] === undefined ? null : ServerConfig[HTTP_SERVER_MODULE_KEY];
   ServerUtils.SERVER_ADDRESS = ServerConfig[SERVER_ADDRESS_KEY] === undefined ? null : ServerConfig[SERVER_ADDRESS_KEY];

   ServerUtils.getFilePath = function(subPath) {

      //Gets the absolute path of local server
      var filePath = path.join(__dirname, subPath);
      return filePath;
   };

   return ServerUtils;
}));



