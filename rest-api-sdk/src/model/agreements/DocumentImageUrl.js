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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/ImageUrl'));

}(function(ApiClient, ImageUrl) {
  'use strict';


  /**
   * @module model/agreements/DocumentImageUrl
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DocumentImageUrl</code>.
   * @alias module:model/agreements/DocumentImageUrl
   * @class
   */
  var DocumentImageUrl = function() {
    var _this = this;


    _this.imageUrls = undefined;

   /**
    * A list of objects representing all image URLs.(one per imagesize).
    * @function getImageUrls
    * @return  {module:model/agreements/Array} A list of objects representing all image URLs.(one per imagesize).  
    * @instance
    */
    _this.getImageUrls = function() {
      return _this.imageUrls;
    };

   /**
    * A list of objects representing all image URLs.(one per imagesize).
    * @function setImageUrls
    * @param imageUrls {module:model/agreements/Array} A list of objects representing all image URLs.(one per imagesize).
    * @instance
    */
    _this.setImageUrls = function(imageUrls) {
      _this.imageUrls = imageUrls;
    };

  };

  /**
   * @private
   * Constructs a <code>DocumentImageUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/DocumentImageUrl} obj Optional instance to populate.
   * @return {module:model/agreements/DocumentImageUrl} The populated <code>DocumentImageUrl</code> instance.
   */
  DocumentImageUrl.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DocumentImageUrl();

      if (data.hasOwnProperty('imageUrls')) {
        obj.setImageUrls(ApiClient.convertToType(data.imageUrls,[ImageUrl]));
      }
    }
    return obj;
  };


  return DocumentImageUrl;
}));


