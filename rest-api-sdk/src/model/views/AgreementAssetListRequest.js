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
    module.exports = factory(require('../../utils/ApiClient'));

}(function(ApiClient) {
  'use strict';


  /**
   * @module model/views/AgreementAssetListRequest
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>AgreementAssetListRequest</code>.
   * @alias module:model/views/AgreementAssetListRequest
   * @class
   */
  var AgreementAssetListRequest = function() {
    var _this = this;


    _this.agreementAssetId = undefined;

    _this.autoLogin = undefined;

    _this.noChrome = undefined;

   /**
    * The ID of the agreement asset to be shown selected in the manage page. If the agreement asset does not lie in the manage page view then URL of default manage page will be generated
    * @function getAgreementAssetId
    * @return  {module:model/views/String} The ID of the agreement asset to be shown selected in the manage page. If the agreement asset does not lie in the manage page view then URL of default manage page will be generated  
    * @instance
    */
    _this.getAgreementAssetId = function() {
      return _this.agreementAssetId;
    };

   /**
    * The ID of the agreement asset to be shown selected in the manage page. If the agreement asset does not lie in the manage page view then URL of default manage page will be generated
    * @function setAgreementAssetId
    * @param agreementAssetId {module:model/views/String} The ID of the agreement asset to be shown selected in the manage page. If the agreement asset does not lie in the manage page view then URL of default manage page will be generated
    * @instance
    */
    _this.setAgreementAssetId = function(agreementAssetId) {
      _this.agreementAssetId = agreementAssetId;
    };

   /**
    * Auto LogIn Flag. If true, the URL returned will automatically log the user in. If false, the URL returned will require the credentials. By default its value is false
    * @function getAutoLogin
    * @return  {module:model/views/Boolean} Auto LogIn Flag. If true, the URL returned will automatically log the user in. If false, the URL returned will require the credentials. By default its value is false  
    * @instance
    */
    _this.getAutoLogin = function() {
      return _this.autoLogin;
    };

   /**
    * Auto LogIn Flag. If true, the URL returned will automatically log the user in. If false, the URL returned will require the credentials. By default its value is false
    * @function setAutoLogin
    * @param autoLogin {module:model/views/Boolean} Auto LogIn Flag. If true, the URL returned will automatically log the user in. If false, the URL returned will require the credentials. By default its value is false
    * @instance
    */
    _this.setAutoLogin = function(autoLogin) {
      _this.autoLogin = autoLogin;
    };

   /**
    * No Chrome Flag. If true, the embedded page is shown without a navigation header or footer. If false, the standard page header and footer will be present. By default its value is false
    * @function getNoChrome
    * @return  {module:model/views/Boolean} No Chrome Flag. If true, the embedded page is shown without a navigation header or footer. If false, the standard page header and footer will be present. By default its value is false  
    * @instance
    */
    _this.getNoChrome = function() {
      return _this.noChrome;
    };

   /**
    * No Chrome Flag. If true, the embedded page is shown without a navigation header or footer. If false, the standard page header and footer will be present. By default its value is false
    * @function setNoChrome
    * @param noChrome {module:model/views/Boolean} No Chrome Flag. If true, the embedded page is shown without a navigation header or footer. If false, the standard page header and footer will be present. By default its value is false
    * @instance
    */
    _this.setNoChrome = function(noChrome) {
      _this.noChrome = noChrome;
    };

  };

  /**
   * @private
   * Constructs a <code>AgreementAssetListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/views/AgreementAssetListRequest} obj Optional instance to populate.
   * @return {module:model/views/AgreementAssetListRequest} The populated <code>AgreementAssetListRequest</code> instance.
   */
  AgreementAssetListRequest.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AgreementAssetListRequest();

      if (data.hasOwnProperty('agreementAssetId')) {
        obj.setAgreementAssetId(data.agreementAssetId);
      }
      if (data.hasOwnProperty('autoLogin')) {
        obj.setAutoLogin(data.autoLogin);
      }
      if (data.hasOwnProperty('noChrome')) {
        obj.setNoChrome(data.noChrome);
      }
    }
    return obj;
  };


  return AgreementAssetListRequest;
}));


