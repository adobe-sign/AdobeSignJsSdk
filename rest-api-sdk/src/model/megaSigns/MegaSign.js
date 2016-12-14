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
   * @module model/megaSigns/MegaSign
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>MegaSign</code>.
   * @alias module:model/megaSigns/MegaSign
   * @class
   */
  var MegaSign = function() {
    var _this = this;


    _this.displayDate = undefined;

    _this.esign = undefined;

    _this.megaSignId = undefined;

    _this.name = undefined;

    _this.status = undefined;

   /**
    * The display date for the MegaSign parent agreement
    * @function getDisplayDate
    * @return  {module:model/megaSigns/Date} The display date for the MegaSign parent agreement  
    * @instance
    */
    _this.getDisplayDate = function() {
      return _this.displayDate;
    };

   /**
    * The display date for the MegaSign parent agreement
    * @function setDisplayDate
    * @param displayDate {module:model/megaSigns/Date} The display date for the MegaSign parent agreement
    * @instance
    */
    _this.setDisplayDate = function(displayDate) {
      _this.displayDate = displayDate;
    };

   /**
    * True if this is an e-sign document
    * @function getEsign
    * @return  {module:model/megaSigns/Boolean} True if this is an e-sign document  
    * @instance
    */
    _this.getEsign = function() {
      return _this.esign;
    };

   /**
    * True if this is an e-sign document
    * @function setEsign
    * @param esign {module:model/megaSigns/Boolean} True if this is an e-sign document
    * @instance
    */
    _this.setEsign = function(esign) {
      _this.esign = esign;
    };

   /**
    * Unique identifier of the MegaSign parent agreement
    * @function getMegaSignId
    * @return  {module:model/megaSigns/String} Unique identifier of the MegaSign parent agreement  
    * @instance
    */
    _this.getMegaSignId = function() {
      return _this.megaSignId;
    };

   /**
    * Unique identifier of the MegaSign parent agreement
    * @function setMegaSignId
    * @param megaSignId {module:model/megaSigns/String} Unique identifier of the MegaSign parent agreement
    * @instance
    */
    _this.setMegaSignId = function(megaSignId) {
      _this.megaSignId = megaSignId;
    };

   /**
    * Name of the MegaSign parent agreement
    * @function getName
    * @return  {module:model/megaSigns/String} Name of the MegaSign parent agreement  
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * Name of the MegaSign parent agreement
    * @function setName
    * @param name {module:model/megaSigns/String} Name of the MegaSign parent agreement
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * Current status of the MegaSign parent agreement from the perspective of the user
    * @function getStatus
    * @return  {module:model/megaSigns/String} Current status of the MegaSign parent agreement from the perspective of the user  
    * @instance
    */
    _this.getStatus = function() {
      return _this.status;
    };

   /**
    * Current status of the MegaSign parent agreement from the perspective of the user
    * @function setStatus
    * @param status {module:model/megaSigns/String} Current status of the MegaSign parent agreement from the perspective of the user
    * @instance
    */
    _this.setStatus = function(status) {
      _this.status = status;
    };

  };

  /**
   * @private
   * Constructs a <code>MegaSign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MegaSign} obj Optional instance to populate.
   * @return {module:model/megaSigns/MegaSign} The populated <code>MegaSign</code> instance.
   */
  MegaSign.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new MegaSign();

      if (data.hasOwnProperty('displayDate')) {
        obj.setDisplayDate(data.displayDate);
      }
      if (data.hasOwnProperty('esign')) {
        obj.setEsign(data.esign);
      }
      if (data.hasOwnProperty('megaSignId')) {
        obj.setMegaSignId(data.megaSignId);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('status')) {
        obj.setStatus(data.status);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
MegaSign.StatusEnum = {
  
  
    /**
     * value: WAITING_FOR_MY_SIGNATURE
     * @const
     */
    WAITING_FOR_MY_SIGNATURE: "WAITING_FOR_MY_SIGNATURE",
    
  
    /**
     * value: WAITING_FOR_MY_APPROVAL
     * @const
     */
    WAITING_FOR_MY_APPROVAL: "WAITING_FOR_MY_APPROVAL",
    
  
    /**
     * value: WAITING_FOR_MY_DELEGATION
     * @const
     */
    WAITING_FOR_MY_DELEGATION: "WAITING_FOR_MY_DELEGATION",
    
  
    /**
     * value: OUT_FOR_SIGNATURE
     * @const
     */
    OUT_FOR_SIGNATURE: "OUT_FOR_SIGNATURE",
    
  
    /**
     * value: OUT_FOR_APPROVAL
     * @const
     */
    OUT_FOR_APPROVAL: "OUT_FOR_APPROVAL",
    
  
    /**
     * value: SIGNED
     * @const
     */
    SIGNED: "SIGNED",
    
  
    /**
     * value: APPROVED
     * @const
     */
    APPROVED: "APPROVED",
    
  
    /**
     * value: RECALLED
     * @const
     */
    RECALLED: "RECALLED",
    
  
    /**
     * value: WAITING_FOR_FAXIN
     * @const
     */
    WAITING_FOR_FAXIN: "WAITING_FOR_FAXIN",
    
  
    /**
     * value: ARCHIVED
     * @const
     */
    ARCHIVED: "ARCHIVED",
    
  
    /**
     * value: FORM
     * @const
     */
    FORM: "FORM",
    
  
    /**
     * value: EXPIRED
     * @const
     */
    EXPIRED: "EXPIRED",
    
  
    /**
     * value: WIDGET
     * @const
     */
    WIDGET: "WIDGET",
    
  
    /**
     * value: WAITING_FOR_AUTHORING
     * @const
     */
    WAITING_FOR_AUTHORING: "WAITING_FOR_AUTHORING"
  
  
  };

  return MegaSign;
}));


