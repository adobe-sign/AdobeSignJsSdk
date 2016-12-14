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
   * @module model/agreements/DocumentPageInfo
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>DocumentPageInfo</code>.
   * @alias module:model/agreements/DocumentPageInfo
   * @class
   */
  var DocumentPageInfo = function() {
    var _this = this;


    _this.height = undefined;

    _this.pageNumber = undefined;

    _this.rotation = undefined;

    _this.width = undefined;

   /**
    * Height of the page
    * @function getHeight
    * @return  {module:model/agreements/Number} Height of the page  
    * @instance
    */
    _this.getHeight = function() {
      return _this.height;
    };

   /**
    * Height of the page
    * @function setHeight
    * @param height {module:model/agreements/Number} Height of the page
    * @instance
    */
    _this.setHeight = function(height) {
      _this.height = height;
    };

   /**
    * Number of the page in combined document starting from 1.
    * @function getPageNumber
    * @return  {module:model/agreements/Integer} Number of the page in combined document starting from 1.  
    * @instance
    */
    _this.getPageNumber = function() {
      return _this.pageNumber;
    };

   /**
    * Number of the page in combined document starting from 1.
    * @function setPageNumber
    * @param pageNumber {module:model/agreements/Integer} Number of the page in combined document starting from 1.
    * @instance
    */
    _this.setPageNumber = function(pageNumber) {
      _this.pageNumber = pageNumber;
    };

   /**
    * Rotation angle of the page in clockwise direction in degree.
    * @function getRotation
    * @return  {module:model/agreements/Number} Rotation angle of the page in clockwise direction in degree.  
    * @instance
    */
    _this.getRotation = function() {
      return _this.rotation;
    };

   /**
    * Rotation angle of the page in clockwise direction in degree.
    * @function setRotation
    * @param rotation {module:model/agreements/Number} Rotation angle of the page in clockwise direction in degree.
    * @instance
    */
    _this.setRotation = function(rotation) {
      _this.rotation = rotation;
    };

   /**
    * Width of the page
    * @function getWidth
    * @return  {module:model/agreements/Number} Width of the page  
    * @instance
    */
    _this.getWidth = function() {
      return _this.width;
    };

   /**
    * Width of the page
    * @function setWidth
    * @param width {module:model/agreements/Number} Width of the page
    * @instance
    */
    _this.setWidth = function(width) {
      _this.width = width;
    };

  };

  /**
   * @private
   * Constructs a <code>DocumentPageInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/DocumentPageInfo} obj Optional instance to populate.
   * @return {module:model/agreements/DocumentPageInfo} The populated <code>DocumentPageInfo</code> instance.
   */
  DocumentPageInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DocumentPageInfo();

      if (data.hasOwnProperty('height')) {
        obj.setHeight(data.height);
      }
      if (data.hasOwnProperty('pageNumber')) {
        obj.setPageNumber(data.pageNumber);
      }
      if (data.hasOwnProperty('rotation')) {
        obj.setRotation(data.rotation);
      }
      if (data.hasOwnProperty('width')) {
        obj.setWidth(data.width);
      }
    }
    return obj;
  };


  return DocumentPageInfo;
}));


