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
   * @module model/views/ViewUrl
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>ViewUrl</code>.
   * @alias module:model/views/ViewUrl
   * @class
   */
  var ViewUrl = function() {
    var _this = this;


    _this.viewURL = undefined;

   /**
    * The output URL of the selected view.
    * @function getViewURL
    * @return  {module:model/views/String} The output URL of the selected view.  
    * @instance
    */
    _this.getViewURL = function() {
      return _this.viewURL;
    };

   /**
    * The output URL of the selected view.
    * @function setViewURL
    * @param viewURL {module:model/views/String} The output URL of the selected view.
    * @instance
    */
    _this.setViewURL = function(viewURL) {
      _this.viewURL = viewURL;
    };

  };

  /**
   * @private
   * Constructs a <code>ViewUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/views/ViewUrl} obj Optional instance to populate.
   * @return {module:model/views/ViewUrl} The populated <code>ViewUrl</code> instance.
   */
  ViewUrl.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new ViewUrl();

      if (data.hasOwnProperty('viewURL')) {
        obj.setViewURL(data.viewURL);
      }
    }
    return obj;
  };


  return ViewUrl;
}));


