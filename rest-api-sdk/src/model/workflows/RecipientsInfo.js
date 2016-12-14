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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/workflows/RecipientInfo'));

}(function(ApiClient, RecipientInfo) {
  'use strict';


  /**
   * @module model/workflows/RecipientsInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>RecipientsInfo</code>.
   * @alias module:model/workflows/RecipientsInfo
   * @class
   */
  var RecipientsInfo = function() {
    var _this = this;


    _this.name = undefined;

    _this.recipients = undefined;

   /**
    * Name of the recipient list as returned in workflow description
    * @function getName
    * @return  {module:model/workflows/String} Name of the recipient list as returned in workflow description  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of the recipient list as returned in workflow description
    * @function setName
    * @param name {module:model/workflows/String} Name of the recipient list as returned in workflow description
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * A list of one or more recipients. For regular (non-MegaSign) documents, there is no limit on the number of electronic signatures in a single document. Written signatures are limited to four per document. This limit includes the sender if the signature of the sender is also required
    * @function getRecipients
    * @return  {module:model/workflows/Array} A list of one or more recipients. For regular (non-MegaSign) documents, there is no limit on the number of electronic signatures in a single document. Written signatures are limited to four per document. This limit includes the sender if the signature of the sender is also required  
    * @instance
    */
    _this.getRecipients = function() {
      return _this.recipients;
    };

   /**
    * A list of one or more recipients. For regular (non-MegaSign) documents, there is no limit on the number of electronic signatures in a single document. Written signatures are limited to four per document. This limit includes the sender if the signature of the sender is also required
    * @function setRecipients
    * @param recipients {module:model/workflows/Array} A list of one or more recipients. For regular (non-MegaSign) documents, there is no limit on the number of electronic signatures in a single document. Written signatures are limited to four per document. This limit includes the sender if the signature of the sender is also required
    * @instance
    */
    _this.setRecipients = function(recipients) {
      _this.recipients = recipients;
    };

  };

  /**
   * @private
   * Constructs a <code>RecipientsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/RecipientsInfo} obj Optional instance to populate.
   * @return {module:model/workflows/RecipientsInfo} The populated <code>RecipientsInfo</code> instance.
   */
  RecipientsInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new RecipientsInfo();

      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('recipients')) {
        obj.setRecipients(ApiClient.convertToType(data.recipients,[RecipientInfo]));
      }
    }
    return obj;
  };


  return RecipientsInfo;
}));


