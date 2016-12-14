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
   * @module model/views/TargetViewRequest
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>TargetViewRequest</code>.
   * @alias module:model/views/TargetViewRequest
   * @class
   */
  var TargetViewRequest = function() {
    var _this = this;


    _this.autoLogin = undefined;

    _this.noChrome = undefined;

    _this.targetView = undefined;

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

   /**
    * Two types of views are available- ACCOUNT_SETTINGS:- For getting the URL for Account Settings for Admin only, USER_PROFILE:- For getting the URL for User Profile
    * @function getTargetView
    * @return  {module:model/views/String} Two types of views are available- ACCOUNT_SETTINGS:- For getting the URL for Account Settings for Admin only, USER_PROFILE:- For getting the URL for User Profile  
    * @instance
    */
    _this.getTargetView = function() {
      return _this.targetView;
    };

   /**
    * Two types of views are available- ACCOUNT_SETTINGS:- For getting the URL for Account Settings for Admin only, USER_PROFILE:- For getting the URL for User Profile
    * @function setTargetView
    * @param targetView {module:model/views/String} Two types of views are available- ACCOUNT_SETTINGS:- For getting the URL for Account Settings for Admin only, USER_PROFILE:- For getting the URL for User Profile
    * @instance
    */
    _this.setTargetView = function(targetView) {
      _this.targetView = targetView;
    };

  };

  /**
   * @private
   * Constructs a <code>TargetViewRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/views/TargetViewRequest} obj Optional instance to populate.
   * @return {module:model/views/TargetViewRequest} The populated <code>TargetViewRequest</code> instance.
   */
  TargetViewRequest.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new TargetViewRequest();

      if (data.hasOwnProperty('autoLogin')) {
        obj.setAutoLogin(data.autoLogin);
      }
      if (data.hasOwnProperty('noChrome')) {
        obj.setNoChrome(data.noChrome);
      }
      if (data.hasOwnProperty('targetView')) {
        obj.setTargetView(data.targetView);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>targetView</code> property.
   * @enum {String}
   * @readonly
   */
TargetViewRequest.TargetViewEnum = {
  
  
    /**
     * value: ACCOUNT_SETTINGS
     * @const
     */
    ACCOUNT_SETTINGS: "ACCOUNT_SETTINGS",
    
  
    /**
     * value: USER_PROFILE
     * @const
     */
    USER_PROFILE: "USER_PROFILE"
  
  
  };

  return TargetViewRequest;
}));


