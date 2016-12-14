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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/SigningUrl'));

}(function(ApiClient, SigningUrl) {
  'use strict';


  /**
   * @module model/agreements/SigningUrlSetInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>SigningUrlSetInfo</code>.
   * @alias module:model/agreements/SigningUrlSetInfo
   * @class
   */
  var SigningUrlSetInfo = function() {
    var _this = this;


    _this.signingUrls = undefined;

    _this.signingUrlSetName = undefined;

   /**
    * An array of urls for current signer set.
    * @function getSigningUrls
    * @return  {module:model/agreements/Array} An array of urls for current signer set.  
    * @instance
    */
    _this.getSigningUrls = function() {
      return _this.signingUrls;
    };

   /**
    * An array of urls for current signer set.
    * @function setSigningUrls
    * @param signingUrls {module:model/agreements/Array} An array of urls for current signer set.
    * @instance
    */
    _this.setSigningUrls = function(signingUrls) {
      _this.signingUrls = signingUrls;
    };

   /**
    * The name of the current signer set. Returned only, if the API caller is the sender of agreement
    * @function getSigningUrlSetName
    * @return  {module:model/agreements/String} The name of the current signer set. Returned only, if the API caller is the sender of agreement  
    * @instance
    */
    _this.getSigningUrlSetName = function() {
      return _this.signingUrlSetName;
    };

   /**
    * The name of the current signer set. Returned only, if the API caller is the sender of agreement
    * @function setSigningUrlSetName
    * @param signingUrlSetName {module:model/agreements/String} The name of the current signer set. Returned only, if the API caller is the sender of agreement
    * @instance
    */
    _this.setSigningUrlSetName = function(signingUrlSetName) {
      _this.signingUrlSetName = signingUrlSetName;
    };

  };

  /**
   * @private
   * Constructs a <code>SigningUrlSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/SigningUrlSetInfo} obj Optional instance to populate.
   * @return {module:model/agreements/SigningUrlSetInfo} The populated <code>SigningUrlSetInfo</code> instance.
   */
  SigningUrlSetInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new SigningUrlSetInfo();

      if (data.hasOwnProperty('signingUrls')) {
        obj.setSigningUrls(ApiClient.convertToType(data.signingUrls,[SigningUrl]));
      }
      if (data.hasOwnProperty('signingUrlSetName')) {
        obj.setSigningUrlSetName(data.signingUrlSetName);
      }
    }
    return obj;
  };


  return SigningUrlSetInfo;
}));


