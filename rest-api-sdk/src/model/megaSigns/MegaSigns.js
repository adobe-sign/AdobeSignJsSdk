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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/megaSigns/MegaSign'));

}(function(ApiClient, MegaSign) {
  'use strict';


  /**
   * @module model/megaSigns/MegaSigns
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MegaSigns</code>.
   * @alias module:model/megaSigns/MegaSigns
   * @class
   */
  var MegaSigns = function() {
    var _this = this;


    _this.megaSignList = undefined;

   /**
    * An array of MegaSign parent agreements
    * @function getMegaSignList
    * @return  {module:model/megaSigns/Array} An array of MegaSign parent agreements  
    * @instance
    */
    _this.getMegaSignList = function() {
      return _this.megaSignList;
    };

   /**
    * An array of MegaSign parent agreements
    * @function setMegaSignList
    * @param megaSignList {module:model/megaSigns/Array} An array of MegaSign parent agreements
    * @instance
    */
    _this.setMegaSignList = function(megaSignList) {
      _this.megaSignList = megaSignList;
    };

  };

  /**
   * @private
   * Constructs a <code>MegaSigns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MegaSigns} obj Optional instance to populate.
   * @return {module:model/megaSigns/MegaSigns} The populated <code>MegaSigns</code> instance.
   */
  MegaSigns.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MegaSigns();

      if (data.hasOwnProperty('megaSignList')) {
        obj.setMegaSignList(ApiClient.convertToType(data.megaSignList,[MegaSign]));
      }
    }
    return obj;
  };


  return MegaSigns;
}));


