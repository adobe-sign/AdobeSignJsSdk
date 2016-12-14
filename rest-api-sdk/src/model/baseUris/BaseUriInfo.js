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
   * @module model/baseUris/BaseUriInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>BaseUriInfo</code>.
   * @alias module:model/baseUris/BaseUriInfo
   * @class
   */
  var BaseUriInfo = function() {
    var _this = this;


    _this.api_access_point = undefined;

    _this.web_access_point = undefined;

   /**
    * The access point from where other APIs need to be accessed. In case other APIs are accessed from a different end point, it will be considered an invalid request.
    * @function getApiAccessPoint
    * @return  {module:model/baseUris/String} The access point from where other APIs need to be accessed. In case other APIs are accessed from a different end point, it will be considered an invalid request.  
    * @instance
    */
    _this.getApiAccessPoint = function() {
      return _this.api_access_point;
    };

   /**
    * The access point from where other APIs need to be accessed. In case other APIs are accessed from a different end point, it will be considered an invalid request.
    * @function setApiAccessPoint
    * @param api_access_point {module:model/baseUris/String} The access point from where other APIs need to be accessed. In case other APIs are accessed from a different end point, it will be considered an invalid request.
    * @instance
    */
    _this.setApiAccessPoint = function(api_access_point) {
      _this.api_access_point = api_access_point;
    };

   /**
    * The access point from where Adobe Sign website can be be accessed.
    * @function getWebAccessPoint
    * @return  {module:model/baseUris/String} The access point from where Adobe Sign website can be be accessed.  
    * @instance
    */
    _this.getWebAccessPoint = function() {
      return _this.web_access_point;
    };

   /**
    * The access point from where Adobe Sign website can be be accessed.
    * @function setWebAccessPoint
    * @param web_access_point {module:model/baseUris/String} The access point from where Adobe Sign website can be be accessed.
    * @instance
    */
    _this.setWebAccessPoint = function(web_access_point) {
      _this.web_access_point = web_access_point;
    };

  };

  /**
   * @private
   * Constructs a <code>BaseUriInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/baseUris/BaseUriInfo} obj Optional instance to populate.
   * @return {module:model/baseUris/BaseUriInfo} The populated <code>BaseUriInfo</code> instance.
   */
  BaseUriInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new BaseUriInfo();

      if (data.hasOwnProperty('api_access_point')) {
        obj.setApiAccessPoint(data.api_access_point);
      }
      if (data.hasOwnProperty('web_access_point')) {
        obj.setWebAccessPoint(data.web_access_point);
      }
    }
    return obj;
  };


  return BaseUriInfo;
}));


