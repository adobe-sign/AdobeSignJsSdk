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
   * @module model/agreements/DisplayUserInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DisplayUserInfo</code>.
   * @alias module:model/agreements/DisplayUserInfo
   * @class
   */
  var DisplayUserInfo = function() {
    var _this = this;


    _this.company = undefined;

    _this.email = undefined;

    _this.fullName = undefined;

   /**
    * Displays the name of the company of the user, if available
    * @function getCompany
    * @return  {module:model/agreements/String} Displays the name of the company of the user, if available  
    * @instance
    */
    _this.getCompany = function() {
      return _this.company;
    };

   /**
    * Displays the name of the company of the user, if available
    * @function setCompany
    * @param company {module:model/agreements/String} Displays the name of the company of the user, if available
    * @instance
    */
    _this.setCompany = function(company) {
      _this.company = company;
    };

   /**
    * Displays the email of the user
    * @function getEmail
    * @return  {module:model/agreements/String} Displays the email of the user  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * Displays the email of the user
    * @function setEmail
    * @param email {module:model/agreements/String} Displays the email of the user
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * Displays the full name of the user, if available.
    * @function getFullName
    * @return  {module:model/agreements/String} Displays the full name of the user, if available.  
    * @instance
    */
    _this.getFullName = function() {
      return _this.fullName;
    };

   /**
    * Displays the full name of the user, if available.
    * @function setFullName
    * @param fullName {module:model/agreements/String} Displays the full name of the user, if available.
    * @instance
    */
    _this.setFullName = function(fullName) {
      _this.fullName = fullName;
    };

  };

  /**
   * @private
   * Constructs a <code>DisplayUserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/DisplayUserInfo} obj Optional instance to populate.
   * @return {module:model/agreements/DisplayUserInfo} The populated <code>DisplayUserInfo</code> instance.
   */
  DisplayUserInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DisplayUserInfo();

      if (data.hasOwnProperty('company')) {
        obj.setCompany(data.company);
      }
      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('fullName')) {
        obj.setFullName(data.fullName);
      }
    }
    return obj;
  };


  return DisplayUserInfo;
}));


