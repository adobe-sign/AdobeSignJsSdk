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
   * @module model/workflows/CcsInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>CcsInfo</code>.
   * @alias module:model/workflows/CcsInfo
   * @class
   */
  var CcsInfo = function() {
    var _this = this;


    _this.emails = undefined;

    _this.name = undefined;

   /**
    * A list of one or more email addresses that you want to copy on this transaction. The email addresses will each receive an email at the beginning of the transaction and also when the final document is signed. The email addresses will also receive a copy of the document, attached as a PDF file
    * @function getEmails
    * @return  {module:model/workflows/Array} A list of one or more email addresses that you want to copy on this transaction. The email addresses will each receive an email at the beginning of the transaction and also when the final document is signed. The email addresses will also receive a copy of the document, attached as a PDF file  
    * @instance
    */
    _this.getEmails = function() {
      return _this.emails;
    };

   /**
    * A list of one or more email addresses that you want to copy on this transaction. The email addresses will each receive an email at the beginning of the transaction and also when the final document is signed. The email addresses will also receive a copy of the document, attached as a PDF file
    * @function setEmails
    * @param emails {module:model/workflows/Array} A list of one or more email addresses that you want to copy on this transaction. The email addresses will each receive an email at the beginning of the transaction and also when the final document is signed. The email addresses will also receive a copy of the document, attached as a PDF file
    * @instance
    */
    _this.setEmails = function(emails) {
      _this.emails = emails;
    };

   /**
    * Name of the CC list as returned in workflow description
    * @function getName
    * @return  {module:model/workflows/String} Name of the CC list as returned in workflow description  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of the CC list as returned in workflow description
    * @function setName
    * @param name {module:model/workflows/String} Name of the CC list as returned in workflow description
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

  };

  /**
   * @private
   * Constructs a <code>CcsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/CcsInfo} obj Optional instance to populate.
   * @return {module:model/workflows/CcsInfo} The populated <code>CcsInfo</code> instance.
   */
  CcsInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new CcsInfo();

      if (data.hasOwnProperty('emails')) {
        obj.setEmails(data.emails);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
    }
    return obj;
  };


  return CcsInfo;
}));


