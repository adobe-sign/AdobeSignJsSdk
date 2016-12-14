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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/UserAgreement'));

}(function(ApiClient, UserAgreement) {
  'use strict';


  /**
   * @module model/agreements/UserAgreements
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>UserAgreements</code>.
   * @alias module:model/agreements/UserAgreements
   * @class
   */
  var UserAgreements = function() {
    var _this = this;


    _this.userAgreementList = undefined;

   /**
    * An array of UserAgreement items
    * @function getUserAgreementList
    * @return  {module:model/agreements/Array} An array of UserAgreement items  
    * @instance
    */
    _this.getUserAgreementList = function() {
      return _this.userAgreementList;
    };

   /**
    * An array of UserAgreement items
    * @function setUserAgreementList
    * @param userAgreementList {module:model/agreements/Array} An array of UserAgreement items
    * @instance
    */
    _this.setUserAgreementList = function(userAgreementList) {
      _this.userAgreementList = userAgreementList;
    };

  };

  /**
   * @private
   * Constructs a <code>UserAgreements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/UserAgreements} obj Optional instance to populate.
   * @return {module:model/agreements/UserAgreements} The populated <code>UserAgreements</code> instance.
   */
  UserAgreements.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new UserAgreements();

      if (data.hasOwnProperty('userAgreementList')) {
        obj.setUserAgreementList(ApiClient.convertToType(data.userAgreementList,[UserAgreement]));
      }
    }
    return obj;
  };


  return UserAgreements;
}));


