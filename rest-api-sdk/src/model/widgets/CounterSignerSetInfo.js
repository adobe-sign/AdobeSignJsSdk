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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/CounterSignerInfo'));

}(function(ApiClient, CounterSignerInfo) {
  'use strict';


  /**
   * @module model/widgets/CounterSignerSetInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>CounterSignerSetInfo</code>.
   * @alias module:model/widgets/CounterSignerSetInfo
   * @class
   */
  var CounterSignerSetInfo = function() {
    var _this = this;


    _this.counterSignerSetMemberInfos = undefined;

    _this.counterSignerSetRole = undefined;

   /**
    * Information about the members of the counter signer set, currently we support only one member
    * @function getCounterSignerSetMemberInfos
    * @return  {module:model/widgets/Array} Information about the members of the counter signer set, currently we support only one member  
    * @instance
    */
    _this.getCounterSignerSetMemberInfos = function() {
      return _this.counterSignerSetMemberInfos;
    };

   /**
    * Information about the members of the counter signer set, currently we support only one member
    * @function setCounterSignerSetMemberInfos
    * @param counterSignerSetMemberInfos {module:model/widgets/Array} Information about the members of the counter signer set, currently we support only one member
    * @instance
    */
    _this.setCounterSignerSetMemberInfos = function(counterSignerSetMemberInfos) {
      _this.counterSignerSetMemberInfos = counterSignerSetMemberInfos;
    };

   /**
    * Specify the role of counter signer set
    * @function getCounterSignerSetRole
    * @return  {module:model/widgets/String} Specify the role of counter signer set  
    * @instance
    */
    _this.getCounterSignerSetRole = function() {
      return _this.counterSignerSetRole;
    };

   /**
    * Specify the role of counter signer set
    * @function setCounterSignerSetRole
    * @param counterSignerSetRole {module:model/widgets/String} Specify the role of counter signer set
    * @instance
    */
    _this.setCounterSignerSetRole = function(counterSignerSetRole) {
      _this.counterSignerSetRole = counterSignerSetRole;
    };

  };

  /**
   * @private
   * Constructs a <code>CounterSignerSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/CounterSignerSetInfo} obj Optional instance to populate.
   * @return {module:model/widgets/CounterSignerSetInfo} The populated <code>CounterSignerSetInfo</code> instance.
   */
  CounterSignerSetInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new CounterSignerSetInfo();

      if (data.hasOwnProperty('counterSignerSetMemberInfos')) {
        obj.setCounterSignerSetMemberInfos(ApiClient.convertToType(data.counterSignerSetMemberInfos,[CounterSignerInfo]));
      }
      if (data.hasOwnProperty('counterSignerSetRole')) {
        obj.setCounterSignerSetRole(data.counterSignerSetRole);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>counterSignerSetRole</code> property.
   * @enum {String}
   * @readonly
   */
CounterSignerSetInfo.CounterSignerSetRoleEnum = {
  
  
    /**
     * value: SIGNER
     * @const
     */
    SIGNER: "SIGNER",
    
  
    /**
     * value: APPROVER
     * @const
     */
    APPROVER: "APPROVER",
    
  
    /**
     * value: DELEGATE_TO_SIGNER
     * @const
     */
    DELEGATE_TO_SIGNER: "DELEGATE_TO_SIGNER",
    
  
    /**
     * value: DELEGATE_TO_APPROVER
     * @const
     */
    DELEGATE_TO_APPROVER: "DELEGATE_TO_APPROVER"
  
  
  };

  return CounterSignerSetInfo;
}));


