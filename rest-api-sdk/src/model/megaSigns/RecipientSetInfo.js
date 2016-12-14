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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/megaSigns/RecipientInfo'));

}(function(ApiClient, RecipientInfo) {
  'use strict';


  /**
   * @module model/megaSigns/RecipientSetInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>RecipientSetInfo</code>.
   * @alias module:model/megaSigns/RecipientSetInfo
   * @class
   */
  var RecipientSetInfo = function() {
    var _this = this;


    _this.recipientSetMemberInfos = undefined;

   /**
    * Information about the members of the recipient set
    * @function getRecipientSetMemberInfos
    * @return  {module:model/megaSigns/Array} Information about the members of the recipient set  
    * @instance
    */
    _this.getRecipientSetMemberInfos = function() {
      return _this.recipientSetMemberInfos;
    };

   /**
    * Information about the members of the recipient set
    * @function setRecipientSetMemberInfos
    * @param recipientSetMemberInfos {module:model/megaSigns/Array} Information about the members of the recipient set
    * @instance
    */
    _this.setRecipientSetMemberInfos = function(recipientSetMemberInfos) {
      _this.recipientSetMemberInfos = recipientSetMemberInfos;
    };

  };

  /**
   * @private
   * Constructs a <code>RecipientSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/RecipientSetInfo} obj Optional instance to populate.
   * @return {module:model/megaSigns/RecipientSetInfo} The populated <code>RecipientSetInfo</code> instance.
   */
  RecipientSetInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new RecipientSetInfo();

      if (data.hasOwnProperty('recipientSetMemberInfos')) {
        obj.setRecipientSetMemberInfos(ApiClient.convertToType(data.recipientSetMemberInfos,[RecipientInfo]));
      }
    }
    return obj;
  };


  return RecipientSetInfo;
}));


