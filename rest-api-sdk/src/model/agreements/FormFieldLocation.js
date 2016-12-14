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
   * @module model/agreements/FormFieldLocation
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>FormFieldLocation</code>.
   * @alias module:model/agreements/FormFieldLocation
   * @class
   */
  var FormFieldLocation = function() {
    var _this = this;


    _this.height = undefined;

    _this.left = undefined;

    _this.pageNumber = undefined;

    _this.top = undefined;

    _this.width = undefined;

   /**
    * Height of the form field in pixels
    * @function getHeight
    * @return  {module:model/agreements/Number} Height of the form field in pixels  
    * @instance
    */
    _this.getHeight = function() {
      return _this.height;
    };

   /**
    * Height of the form field in pixels
    * @function setHeight
    * @param height {module:model/agreements/Number} Height of the form field in pixels
    * @instance
    */
    _this.setHeight = function(height) {
      _this.height = height;
    };

   /**
    * No. of pixels from left of the page for form field placement
    * @function getLeft
    * @return  {module:model/agreements/Number} No. of pixels from left of the page for form field placement  
    * @instance
    */
    _this.getLeft = function() {
      return _this.left;
    };

   /**
    * No. of pixels from left of the page for form field placement
    * @function setLeft
    * @param left {module:model/agreements/Number} No. of pixels from left of the page for form field placement
    * @instance
    */
    _this.setLeft = function(left) {
      _this.left = left;
    };

   /**
    * Number of the page where form field has to be placed, starting from 1.
    * @function getPageNumber
    * @return  {module:model/agreements/Integer} Number of the page where form field has to be placed, starting from 1.  
    * @instance
    */
    _this.getPageNumber = function() {
      return _this.pageNumber;
    };

   /**
    * Number of the page where form field has to be placed, starting from 1.
    * @function setPageNumber
    * @param pageNumber {module:model/agreements/Integer} Number of the page where form field has to be placed, starting from 1.
    * @instance
    */
    _this.setPageNumber = function(pageNumber) {
      _this.pageNumber = pageNumber;
    };

   /**
    * No. of pixels from bottom of the page for form field placement
    * @function getTop
    * @return  {module:model/agreements/Number} No. of pixels from bottom of the page for form field placement  
    * @instance
    */
    _this.getTop = function() {
      return _this.top;
    };

   /**
    * No. of pixels from bottom of the page for form field placement
    * @function setTop
    * @param top {module:model/agreements/Number} No. of pixels from bottom of the page for form field placement
    * @instance
    */
    _this.setTop = function(top) {
      _this.top = top;
    };

   /**
    * Width of the form field in pixels
    * @function getWidth
    * @return  {module:model/agreements/Number} Width of the form field in pixels  
    * @instance
    */
    _this.getWidth = function() {
      return _this.width;
    };

   /**
    * Width of the form field in pixels
    * @function setWidth
    * @param width {module:model/agreements/Number} Width of the form field in pixels
    * @instance
    */
    _this.setWidth = function(width) {
      _this.width = width;
    };

  };

  /**
   * @private
   * Constructs a <code>FormFieldLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/FormFieldLocation} obj Optional instance to populate.
   * @return {module:model/agreements/FormFieldLocation} The populated <code>FormFieldLocation</code> instance.
   */
  FormFieldLocation.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new FormFieldLocation();

      if (data.hasOwnProperty('height')) {
        obj.setHeight(data.height);
      }
      if (data.hasOwnProperty('left')) {
        obj.setLeft(data.left);
      }
      if (data.hasOwnProperty('pageNumber')) {
        obj.setPageNumber(data.pageNumber);
      }
      if (data.hasOwnProperty('top')) {
        obj.setTop(data.top);
      }
      if (data.hasOwnProperty('width')) {
        obj.setWidth(data.width);
      }
    }
    return obj;
  };


  return FormFieldLocation;
}));


