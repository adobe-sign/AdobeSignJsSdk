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
   * @module model/megaSigns/DeviceLocation
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DeviceLocation</code>.
   * @alias module:model/megaSigns/DeviceLocation
   * @class
   */
  var DeviceLocation = function() {
    var _this = this;


    _this.latitude = undefined;

    _this.longitude = undefined;

   /**
    * Latitude coordinate
    * @function getLatitude
    * @return  {module:model/megaSigns/Number} Latitude coordinate  
    * @instance
    */
    _this.getLatitude = function() {
      return _this.latitude;
    };

   /**
    * Latitude coordinate
    * @function setLatitude
    * @param latitude {module:model/megaSigns/Number} Latitude coordinate
    * @instance
    */
    _this.setLatitude = function(latitude) {
      _this.latitude = latitude;
    };

   /**
    * Longitude coordinate
    * @function getLongitude
    * @return  {module:model/megaSigns/Number} Longitude coordinate  
    * @instance
    */
    _this.getLongitude = function() {
      return _this.longitude;
    };

   /**
    * Longitude coordinate
    * @function setLongitude
    * @param longitude {module:model/megaSigns/Number} Longitude coordinate
    * @instance
    */
    _this.setLongitude = function(longitude) {
      _this.longitude = longitude;
    };

  };

  /**
   * @private
   * Constructs a <code>DeviceLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/DeviceLocation} obj Optional instance to populate.
   * @return {module:model/megaSigns/DeviceLocation} The populated <code>DeviceLocation</code> instance.
   */
  DeviceLocation.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DeviceLocation();

      if (data.hasOwnProperty('latitude')) {
        obj.setLatitude(data.latitude);
      }
      if (data.hasOwnProperty('longitude')) {
        obj.setLongitude(data.longitude);
      }
    }
    return obj;
  };


  return DeviceLocation;
}));


