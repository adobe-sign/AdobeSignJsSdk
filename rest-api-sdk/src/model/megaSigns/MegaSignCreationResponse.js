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
   * @module model/megaSigns/MegaSignCreationResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MegaSignCreationResponse</code>.
   * A JSON that contains the id of the newly created Mega Sign
   * @alias module:model/megaSigns/MegaSignCreationResponse
   * @class
   */
  var MegaSignCreationResponse = function() {
    var _this = this;


    _this.megaSignId = undefined;

   /**
    * Unique identifier of the MegaSign parent agreement
    * @function getMegaSignId
    * @return  {module:model/megaSigns/String} Unique identifier of the MegaSign parent agreement  
    * @instance
    */
    _this.getMegaSignId = function() {
      return _this.megaSignId;
    };

   /**
    * Unique identifier of the MegaSign parent agreement
    * @function setMegaSignId
    * @param megaSignId {module:model/megaSigns/String} Unique identifier of the MegaSign parent agreement
    * @instance
    */
    _this.setMegaSignId = function(megaSignId) {
      _this.megaSignId = megaSignId;
    };

  };

  /**
   * @private
   * Constructs a <code>MegaSignCreationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MegaSignCreationResponse} obj Optional instance to populate.
   * @return {module:model/megaSigns/MegaSignCreationResponse} The populated <code>MegaSignCreationResponse</code> instance.
   */
  MegaSignCreationResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MegaSignCreationResponse();

      if (data.hasOwnProperty('megaSignId')) {
        obj.setMegaSignId(data.megaSignId);
      }
    }
    return obj;
  };


  return MegaSignCreationResponse;
}));


