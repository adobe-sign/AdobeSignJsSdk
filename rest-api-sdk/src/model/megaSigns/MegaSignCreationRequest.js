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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/megaSigns/MegaSignCreationInfo'));

}(function(ApiClient, MegaSignCreationInfo) {
  'use strict';


  /**
   * @module model/megaSigns/MegaSignCreationRequest
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MegaSignCreationRequest</code>.
   * @alias module:model/megaSigns/MegaSignCreationRequest
   * @class
   */
  var MegaSignCreationRequest = function() {
    var _this = this;


    _this.megaSignCreationInfo = undefined;

   /**
    * Information about the MegaSign you want to send
    * @function getMegaSignCreationInfo
    * @return  {module:model/megaSigns/MegaSignCreationInfo} Information about the MegaSign you want to send  
    * @instance
    */
    _this.getMegaSignCreationInfo = function() {
      return _this.megaSignCreationInfo;
    };

   /**
    * Information about the MegaSign you want to send
    * @function setMegaSignCreationInfo
    * @param megaSignCreationInfo {module:model/megaSigns/MegaSignCreationInfo} Information about the MegaSign you want to send
    * @instance
    */
    _this.setMegaSignCreationInfo = function(megaSignCreationInfo) {
      _this.megaSignCreationInfo = megaSignCreationInfo;
    };

  };

  /**
   * @private
   * Constructs a <code>MegaSignCreationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MegaSignCreationRequest} obj Optional instance to populate.
   * @return {module:model/megaSigns/MegaSignCreationRequest} The populated <code>MegaSignCreationRequest</code> instance.
   */
  MegaSignCreationRequest.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MegaSignCreationRequest();

      if (data.hasOwnProperty('megaSignCreationInfo')) {
        obj.setMegaSignCreationInfo(ApiClient.convertToType(data.megaSignCreationInfo,MegaSignCreationInfo));
      }
    }
    return obj;
  };


  return MegaSignCreationRequest;
}));


