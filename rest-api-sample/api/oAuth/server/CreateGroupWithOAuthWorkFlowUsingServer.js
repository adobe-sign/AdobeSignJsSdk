(function(factory) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./LocalHttpsServer'), require('../../../utils/Constants'), require('../../../utils/ApiUtils'));
  
}(function(LocalHttpsServer, Constants, ApiUtils) {
  'use strict';

  /**
  * This sample client runs a local server and create group using OAuth workflow.
  *
  * <p>
  * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
  * </p>
  */
  (function CreateGroupWithOAuthWorkFlowUsingServer() {

    /**
     * Entry point for this sample client program.
     */
    ApiUtils.configureProperty(CreateGroupWithOAuthWorkFlowUsingServer.name);

    //Port to be used for the server
    var port = Constants.SERVER_PORT;

    //Start the server
    LocalHttpsServer.start(port);
  })();

}));
