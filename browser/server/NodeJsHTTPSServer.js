(function(factory) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ServerUtils'), require('child_process'));
  
}(function(ServerUtils, childProcess) {
  'use strict';

  /**
  * This sample client runs a local https server.
  *
  * <p>
  * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'serverConfig.json' file with the appropriate values.
  * </p>
  */
  (function NodeJsHTTPSServer() {

    //Port to be used for the server
    var port = ServerUtils.SERVER_PORT;
    var serverAddress = ServerUtils.SERVER_ADDRESS;
    var keyStoreFile = ServerUtils.KEY_STORE_FILE;
    var certificateFile = ServerUtils.CERTIFICATE_FILE;
    var httpServerModule = ServerUtils.HTTP_SERVER_MODULE;

    var exec = childProcess.exec;
    var cmd = "node " + ServerUtils.getFilePath(httpServerModule) + " -a " + serverAddress + " -p " + port + " -S -C "+ ServerUtils.getFilePath(certificateFile) + " -K " + ServerUtils.getFilePath(keyStoreFile);
    console.log("HTTPS Server starting on address " + serverAddress + " on port " + port);

    exec(cmd, {cwd : ServerUtils.getFilePath("../..")}, function (error) {
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
    
  })();

}));
