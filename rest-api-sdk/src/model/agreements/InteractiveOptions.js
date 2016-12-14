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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/SendThroughWebOptions'));

}(function(ApiClient, SendThroughWebOptions) {
  'use strict';


  /**
   * @module model/agreements/InteractiveOptions
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>InteractiveOptions</code>.
   * @alias module:model/agreements/InteractiveOptions
   * @class
   */
  var InteractiveOptions = function() {
    var _this = this;


    _this.authoringRequested = undefined;

    _this.autoLoginUser = undefined;

    _this.locale = undefined;

    _this.noChrome = undefined;

    _this.sendThroughWeb = undefined;

    _this.sendThroughWebOptions = undefined;

   /**
    * Indicates that authoring is requested prior to sending the document
    * @function getAuthoringRequested
    * @return  {module:model/agreements/Boolean} Indicates that authoring is requested prior to sending the document  
    * @instance
    */
    _this.getAuthoringRequested = function() {
      return _this.authoringRequested;
    };

   /**
    * Indicates that authoring is requested prior to sending the document
    * @function setAuthoringRequested
    * @param authoringRequested {module:model/agreements/Boolean} Indicates that authoring is requested prior to sending the document
    * @instance
    */
    _this.setAuthoringRequested = function(authoringRequested) {
      _this.authoringRequested = authoringRequested;
    };

   /**
    * If user settings allow, automatically logs the user in
    * @function getAutoLoginUser
    * @return  {module:model/agreements/Boolean} If user settings allow, automatically logs the user in  
    * @instance
    */
    _this.getAutoLoginUser = function() {
      return _this.autoLoginUser;
    };

   /**
    * If user settings allow, automatically logs the user in
    * @function setAutoLoginUser
    * @param autoLoginUser {module:model/agreements/Boolean} If user settings allow, automatically logs the user in
    * @instance
    */
    _this.setAutoLoginUser = function(autoLoginUser) {
      _this.autoLoginUser = autoLoginUser;
    };

   /**
    * The locale in which page returned by this API should be shown in - for example, en_US or fr_FR. In case locale provided by client is not available or no locale is specified, page will be shown in the default language set in the user account
    * @function getLocale
    * @return  {module:model/agreements/String} The locale in which page returned by this API should be shown in - for example, en_US or fr_FR. In case locale provided by client is not available or no locale is specified, page will be shown in the default language set in the user account  
    * @instance
    */
    _this.getLocale = function() {
      return _this.locale;
    };

   /**
    * The locale in which page returned by this API should be shown in - for example, en_US or fr_FR. In case locale provided by client is not available or no locale is specified, page will be shown in the default language set in the user account
    * @function setLocale
    * @param locale {module:model/agreements/String} The locale in which page returned by this API should be shown in - for example, en_US or fr_FR. In case locale provided by client is not available or no locale is specified, page will be shown in the default language set in the user account
    * @instance
    */
    _this.setLocale = function(locale) {
      _this.locale = locale;
    };

   /**
    * Turn off Chrome for the URL generated
    * @function getNoChrome
    * @return  {module:model/agreements/Boolean} Turn off Chrome for the URL generated  
    * @instance
    */
    _this.getNoChrome = function() {
      return _this.noChrome;
    };

   /**
    * Turn off Chrome for the URL generated
    * @function setNoChrome
    * @param noChrome {module:model/agreements/Boolean} Turn off Chrome for the URL generated
    * @instance
    */
    _this.setNoChrome = function(noChrome) {
      _this.noChrome = noChrome;
    };

   /**
    * A url to send page will be returned from where the agreement creation needs to be completed. All the parameters provided here will be retained in the send page
    * @function getSendThroughWeb
    * @return  {module:model/agreements/Boolean} A url to send page will be returned from where the agreement creation needs to be completed. All the parameters provided here will be retained in the send page  
    * @instance
    */
    _this.getSendThroughWeb = function() {
      return _this.sendThroughWeb;
    };

   /**
    * A url to send page will be returned from where the agreement creation needs to be completed. All the parameters provided here will be retained in the send page
    * @function setSendThroughWeb
    * @param sendThroughWeb {module:model/agreements/Boolean} A url to send page will be returned from where the agreement creation needs to be completed. All the parameters provided here will be retained in the send page
    * @instance
    */
    _this.setSendThroughWeb = function(sendThroughWeb) {
      _this.sendThroughWeb = sendThroughWeb;
    };

   /**
    * A JSON object of Type SendThroughWebOptions to customize the sendPage. This one will apply only if sendThroughWeb is set to true
    * @function getSendThroughWebOptions
    * @return  {module:model/agreements/SendThroughWebOptions} A JSON object of Type SendThroughWebOptions to customize the sendPage. This one will apply only if sendThroughWeb is set to true  
    * @instance
    */
    _this.getSendThroughWebOptions = function() {
      return _this.sendThroughWebOptions;
    };

   /**
    * A JSON object of Type SendThroughWebOptions to customize the sendPage. This one will apply only if sendThroughWeb is set to true
    * @function setSendThroughWebOptions
    * @param sendThroughWebOptions {module:model/agreements/SendThroughWebOptions} A JSON object of Type SendThroughWebOptions to customize the sendPage. This one will apply only if sendThroughWeb is set to true
    * @instance
    */
    _this.setSendThroughWebOptions = function(sendThroughWebOptions) {
      _this.sendThroughWebOptions = sendThroughWebOptions;
    };

  };

  /**
   * @private
   * Constructs a <code>InteractiveOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/InteractiveOptions} obj Optional instance to populate.
   * @return {module:model/agreements/InteractiveOptions} The populated <code>InteractiveOptions</code> instance.
   */
  InteractiveOptions.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new InteractiveOptions();

      if (data.hasOwnProperty('authoringRequested')) {
        obj.setAuthoringRequested(data.authoringRequested);
      }
      if (data.hasOwnProperty('autoLoginUser')) {
        obj.setAutoLoginUser(data.autoLoginUser);
      }
      if (data.hasOwnProperty('locale')) {
        obj.setLocale(data.locale);
      }
      if (data.hasOwnProperty('noChrome')) {
        obj.setNoChrome(data.noChrome);
      }
      if (data.hasOwnProperty('sendThroughWeb')) {
        obj.setSendThroughWeb(data.sendThroughWeb);
      }
      if (data.hasOwnProperty('sendThroughWebOptions')) {
        obj.setSendThroughWebOptions(ApiClient.convertToType(data.sendThroughWebOptions,SendThroughWebOptions));
      }
    }
    return obj;
  };


  return InteractiveOptions;
}));


