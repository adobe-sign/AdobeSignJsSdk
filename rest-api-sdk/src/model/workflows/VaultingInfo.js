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
   * @module model/workflows/VaultingInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>VaultingInfo</code>.
   * @alias module:model/workflows/VaultingInfo
   * @class
   */
  var VaultingInfo = function() {
    var _this = this;


    _this.enabled = undefined;

   /**
    * For accounts set up for document vaulting and the option to enable per agreement, this determines whether the document is to be vaulted
    * @function getEnabled
    * @return  {module:model/workflows/Boolean} For accounts set up for document vaulting and the option to enable per agreement, this determines whether the document is to be vaulted  
    * @instance
    */
    _this.getEnabled = function() {
      return _this.enabled;
    };

   /**
    * For accounts set up for document vaulting and the option to enable per agreement, this determines whether the document is to be vaulted
    * @function setEnabled
    * @param enabled {module:model/workflows/Boolean} For accounts set up for document vaulting and the option to enable per agreement, this determines whether the document is to be vaulted
    * @instance
    */
    _this.setEnabled = function(enabled) {
      _this.enabled = enabled;
    };

  };

  /**
   * @private
   * Constructs a <code>VaultingInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/VaultingInfo} obj Optional instance to populate.
   * @return {module:model/workflows/VaultingInfo} The populated <code>VaultingInfo</code> instance.
   */
  VaultingInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new VaultingInfo();

      if (data.hasOwnProperty('enabled')) {
        obj.setEnabled(data.enabled);
      }
    }
    return obj;
  };


  return VaultingInfo;
}));


