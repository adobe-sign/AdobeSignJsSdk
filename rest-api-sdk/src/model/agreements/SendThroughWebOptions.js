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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/FileUploadOptions'));

}(function(ApiClient, FileUploadOptions) {
  'use strict';


  /**
   * @module model/agreements/SendThroughWebOptions
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>SendThroughWebOptions</code>.
   * @alias module:model/agreements/SendThroughWebOptions
   * @class
   */
  var SendThroughWebOptions = function() {
    var _this = this;


    _this.fileUploadOptions = undefined;

   /**
    * Controls various file upload options available on the send page
    * @function getFileUploadOptions
    * @return  {module:model/agreements/FileUploadOptions} Controls various file upload options available on the send page  
    * @instance
    */
    _this.getFileUploadOptions = function() {
      return _this.fileUploadOptions;
    };

   /**
    * Controls various file upload options available on the send page
    * @function setFileUploadOptions
    * @param fileUploadOptions {module:model/agreements/FileUploadOptions} Controls various file upload options available on the send page
    * @instance
    */
    _this.setFileUploadOptions = function(fileUploadOptions) {
      _this.fileUploadOptions = fileUploadOptions;
    };

  };

  /**
   * @private
   * Constructs a <code>SendThroughWebOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/SendThroughWebOptions} obj Optional instance to populate.
   * @return {module:model/agreements/SendThroughWebOptions} The populated <code>SendThroughWebOptions</code> instance.
   */
  SendThroughWebOptions.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new SendThroughWebOptions();

      if (data.hasOwnProperty('fileUploadOptions')) {
        obj.setFileUploadOptions(ApiClient.convertToType(data.fileUploadOptions,FileUploadOptions));
      }
    }
    return obj;
  };


  return SendThroughWebOptions;
}));


