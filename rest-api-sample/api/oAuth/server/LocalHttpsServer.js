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
    module.exports = factory(require('../../../utils/Constants'), require('../../../utils/ApiUtils'), require('./OAuthDispatcher'), require('https'), require('fs'));
  
}(function(Constants, ApiUtils, OAuthDispatcher, https, fs) {
  'use strict';

  var LocalHttpsServer = function(){};
  var server = https.instance;
  
  var SERVER_STARTED = "server started at https://localhost:";
  var SERVER_STOPPED = "server stopped";

  //Function to start the server.
  LocalHttpsServer.start = function (port) {
    var keystoreFilename = Constants.KEY_STORE_FILE;
    var certificateFilename = Constants.CERTIFICATE_FILE;
    var keystoreFilePath = ApiUtils.getFilePath(keystoreFilename);
    var certificatePath = ApiUtils.getFilePath(certificateFilename);
    var options = {
      port: port,
      key: fs.readFileSync(keystoreFilePath),
      cert: fs.readFileSync(certificatePath)
    };

    //Create https server
    var server = https.createServer(options, function (req, res) {
      OAuthDispatcher.dispatchRequest(req, res);
      if(res.groupResult != undefined ) {
        res.end();
        server.listen(port, function () {
          console.log(SERVER_STOPPED);
          res.socket.server.close();
          res.socket.destroy();
          process.exit(0);
        });
      }
    }).listen(port, function(){
      console.log(SERVER_STARTED + port);
    });
  };

  //Function to stop the server.
  LocalHttpsServer.stop = function () {
    server.stop(0);
    console.log(SERVER_STOPPED);
  };

  return LocalHttpsServer;
}));
