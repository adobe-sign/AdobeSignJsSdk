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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/megaSigns/MegaSignChildAgreement'));

}(function(ApiClient, MegaSignChildAgreement) {
  'use strict';


  /**
   * @module model/megaSigns/MegaSignChildAgreements
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MegaSignChildAgreements</code>.
   * @alias module:model/megaSigns/MegaSignChildAgreements
   * @class
   */
  var MegaSignChildAgreements = function() {
    var _this = this;


    _this.megaSignChildAgreementList = undefined;

   /**
    * A array of MegaSign child agreements
    * @function getMegaSignChildAgreementList
    * @return  {module:model/megaSigns/Array} A array of MegaSign child agreements  
    * @instance
    */
    _this.getMegaSignChildAgreementList = function() {
      return _this.megaSignChildAgreementList;
    };

   /**
    * A array of MegaSign child agreements
    * @function setMegaSignChildAgreementList
    * @param megaSignChildAgreementList {module:model/megaSigns/Array} A array of MegaSign child agreements
    * @instance
    */
    _this.setMegaSignChildAgreementList = function(megaSignChildAgreementList) {
      _this.megaSignChildAgreementList = megaSignChildAgreementList;
    };

  };

  /**
   * @private
   * Constructs a <code>MegaSignChildAgreements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MegaSignChildAgreements} obj Optional instance to populate.
   * @return {module:model/megaSigns/MegaSignChildAgreements} The populated <code>MegaSignChildAgreements</code> instance.
   */
  MegaSignChildAgreements.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MegaSignChildAgreements();

      if (data.hasOwnProperty('megaSignChildAgreementList')) {
        obj.setMegaSignChildAgreementList(ApiClient.convertToType(data.megaSignChildAgreementList,[MegaSignChildAgreement]));
      }
    }
    return obj;
  };


  return MegaSignChildAgreements;
}));


