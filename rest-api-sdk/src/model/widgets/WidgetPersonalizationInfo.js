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
   * @module model/widgets/WidgetPersonalizationInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>WidgetPersonalizationInfo</code>.
   * @alias module:model/widgets/WidgetPersonalizationInfo
   * @class
   */
  var WidgetPersonalizationInfo = function() {
    var _this = this;


    _this.allowManualVerification = undefined;

    _this.comment = undefined;

    _this.email = undefined;

    _this.expiration = undefined;

    _this.reusable = undefined;

   /**
    * Not used at this time
    * @function getAllowManualVerification
    * @return  {module:model/widgets/Boolean} Not used at this time  
    * @instance
    */
    _this.getAllowManualVerification = function() {
      return _this.allowManualVerification;
    };

   /**
    * Not used at this time
    * @function setAllowManualVerification
    * @param allowManualVerification {module:model/widgets/Boolean} Not used at this time
    * @instance
    */
    _this.setAllowManualVerification = function(allowManualVerification) {
      _this.allowManualVerification = allowManualVerification;
    };

   /**
    * Comment describing how the API caller established the identity of the signer - will appear in the audit trail.
    * @function getComment
    * @return  {module:model/widgets/String} Comment describing how the API caller established the identity of the signer - will appear in the audit trail.  
    * @instance
    */
    _this.getComment = function() {
      return _this.comment;
    };

   /**
    * Comment describing how the API caller established the identity of the signer - will appear in the audit trail.
    * @function setComment
    * @param comment {module:model/widgets/String} Comment describing how the API caller established the identity of the signer - will appear in the audit trail.
    * @instance
    */
    _this.setComment = function(comment) {
      _this.comment = comment;
    };

   /**
    * The email address of the person who will be receiving this widget
    * @function getEmail
    * @return  {module:model/widgets/String} The email address of the person who will be receiving this widget  
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * The email address of the person who will be receiving this widget
    * @function setEmail
    * @param email {module:model/widgets/String} The email address of the person who will be receiving this widget
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * Expiration date for the personalization of this widget. After this date, the identity of the signer will not be assumed by Adobe Sign.
    * @function getExpiration
    * @return  {module:model/widgets/Date} Expiration date for the personalization of this widget. After this date, the identity of the signer will not be assumed by Adobe Sign.  
    * @instance
    */
    _this.getExpiration = function() {
      return _this.expiration;
    };

   /**
    * Expiration date for the personalization of this widget. After this date, the identity of the signer will not be assumed by Adobe Sign.
    * @function setExpiration
    * @param expiration {module:model/widgets/Date} Expiration date for the personalization of this widget. After this date, the identity of the signer will not be assumed by Adobe Sign.
    * @instance
    */
    _this.setExpiration = function(expiration) {
      _this.expiration = expiration;
    };

   /**
    * Should the intended signer be allowed to sign this widget more than once
    * @function getReusable
    * @return  {module:model/widgets/Boolean} Should the intended signer be allowed to sign this widget more than once  
    * @instance
    */
    _this.getReusable = function() {
      return _this.reusable;
    };

   /**
    * Should the intended signer be allowed to sign this widget more than once
    * @function setReusable
    * @param reusable {module:model/widgets/Boolean} Should the intended signer be allowed to sign this widget more than once
    * @instance
    */
    _this.setReusable = function(reusable) {
      _this.reusable = reusable;
    };

  };

  /**
   * @private
   * Constructs a <code>WidgetPersonalizationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetPersonalizationInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetPersonalizationInfo} The populated <code>WidgetPersonalizationInfo</code> instance.
   */
  WidgetPersonalizationInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new WidgetPersonalizationInfo();

      if (data.hasOwnProperty('allowManualVerification')) {
        obj.setAllowManualVerification(data.allowManualVerification);
      }
      if (data.hasOwnProperty('comment')) {
        obj.setComment(data.comment);
      }
      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('expiration')) {
        obj.setExpiration(data.expiration);
      }
      if (data.hasOwnProperty('reusable')) {
        obj.setReusable(data.reusable);
      }
    }
    return obj;
  };


  return WidgetPersonalizationInfo;
}));


