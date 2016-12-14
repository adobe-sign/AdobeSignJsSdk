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
   * @module model/agreements/ImageUrl
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>ImageUrl</code>.
   * @alias module:model/agreements/ImageUrl
   * @class
   */
  var ImageUrl = function() {
    var _this = this;


    _this.imagesAvailable = undefined;

    _this.imageSize = undefined;

    _this.urls = undefined;

   /**
    * true if images for the associated image size is available, else false.
    * @function getImagesAvailable
    * @return  {module:model/agreements/Boolean} true if images for the associated image size is available, else false.  
    * @instance
    */
    _this.getImagesAvailable = function() {
      return _this.imagesAvailable;
    };

   /**
    * true if images for the associated image size is available, else false.
    * @function setImagesAvailable
    * @param imagesAvailable {module:model/agreements/Boolean} true if images for the associated image size is available, else false.
    * @instance
    */
    _this.setImagesAvailable = function(imagesAvailable) {
      _this.imagesAvailable = imagesAvailable;
    };

   /**
    * ImageSize corresponding to the imageUrl returned
    * @function getImageSize
    * @return  {module:model/agreements/String} ImageSize corresponding to the imageUrl returned  
    * @instance
    */
    _this.getImageSize = function() {
      return _this.imageSize;
    };

   /**
    * ImageSize corresponding to the imageUrl returned
    * @function setImageSize
    * @param imageSize {module:model/agreements/String} ImageSize corresponding to the imageUrl returned
    * @instance
    */
    _this.setImageSize = function(imageSize) {
      _this.imageSize = imageSize;
    };

   /**
    * An ordered list of image urls (one per page).
    * @function getUrls
    * @return  {module:model/agreements/Array} An ordered list of image urls (one per page).  
    * @instance
    */
    _this.getUrls = function() {
      return _this.urls;
    };

   /**
    * An ordered list of image urls (one per page).
    * @function setUrls
    * @param urls {module:model/agreements/Array} An ordered list of image urls (one per page).
    * @instance
    */
    _this.setUrls = function(urls) {
      _this.urls = urls;
    };

  };

  /**
   * @private
   * Constructs a <code>ImageUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/ImageUrl} obj Optional instance to populate.
   * @return {module:model/agreements/ImageUrl} The populated <code>ImageUrl</code> instance.
   */
  ImageUrl.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new ImageUrl();

      if (data.hasOwnProperty('imagesAvailable')) {
        obj.setImagesAvailable(data.imagesAvailable);
      }
      if (data.hasOwnProperty('imageSize')) {
        obj.setImageSize(data.imageSize);
      }
      if (data.hasOwnProperty('urls')) {
        obj.setUrls(data.urls);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>imageSize</code> property.
   * @enum {String}
   * @readonly
   */
ImageUrl.ImageSizeEnum = {
  
  
    /**
     * value: FIXED_WIDTH_50px
     * @const
     */
    FIXED_WIDTH_50PX: "FIXED_WIDTH_50px",
    
  
    /**
     * value: FIXED_WIDTH_250px
     * @const
     */
    FIXED_WIDTH_250PX: "FIXED_WIDTH_250px",
    
  
    /**
     * value: FIXED_WIDTH_675px
     * @const
     */
    FIXED_WIDTH_675PX: "FIXED_WIDTH_675px",
    
  
    /**
     * value: ZOOM_50_PERCENT
     * @const
     */
    ZOOM_50_PERCENT: "ZOOM_50_PERCENT",
    
  
    /**
     * value: ZOOM_75_PERCENT
     * @const
     */
    ZOOM_75_PERCENT: "ZOOM_75_PERCENT",
    
  
    /**
     * value: ZOOM_100_PERCENT
     * @const
     */
    ZOOM_100_PERCENT: "ZOOM_100_PERCENT",
    
  
    /**
     * value: ZOOM_125_PERCENT
     * @const
     */
    ZOOM_125_PERCENT: "ZOOM_125_PERCENT",
    
  
    /**
     * value: ZOOM_150_PERCENT
     * @const
     */
    ZOOM_150_PERCENT: "ZOOM_150_PERCENT",
    
  
    /**
     * value: ZOOM_200_PERCENT
     * @const
     */
    ZOOM_200_PERCENT: "ZOOM_200_PERCENT"
  
  
  };

  return ImageUrl;
}));


