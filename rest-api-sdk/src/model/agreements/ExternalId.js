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
   * @module model/agreements/ExternalId
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>ExternalId</code>.
   * @alias module:model/agreements/ExternalId
   * @class
   */
  var ExternalId = function() {
    var _this = this;


    _this.group = undefined;

    _this.id = undefined;

    _this.namespace = undefined;

   /**
    * An arbitrary value from your system, which can be specified at sending time and then later returned or queried
    * @function getGroup
    * @return  {module:model/agreements/String} An arbitrary value from your system, which can be specified at sending time and then later returned or queried  
    * @instance
    */
    _this.getGroup = function() {
      return _this.group;
    };

   /**
    * An arbitrary value from your system, which can be specified at sending time and then later returned or queried
    * @function setGroup
    * @param group {module:model/agreements/String} An arbitrary value from your system, which can be specified at sending time and then later returned or queried
    * @instance
    */
    _this.setGroup = function(group) {
      _this.group = group;
    };

   /**
    * An arbitrary value from your system, which can be specified at sending time and then later returned or queried
    * @function getId
    * @return  {module:model/agreements/String} An arbitrary value from your system, which can be specified at sending time and then later returned or queried  
    * @instance
    */
    _this.getId = function() {
      return _this.id;
    };

   /**
    * An arbitrary value from your system, which can be specified at sending time and then later returned or queried
    * @function setId
    * @param id {module:model/agreements/String} An arbitrary value from your system, which can be specified at sending time and then later returned or queried
    * @instance
    */
    _this.setId = function(id) {
      _this.id = id;
    };

   /**
    * Only supported value for the ExternalID namespace at this time is API_OTHER
    * @function getNamespace
    * @return  {module:model/agreements/String} Only supported value for the ExternalID namespace at this time is API_OTHER  
    * @instance
    */
    _this.getNamespace = function() {
      return _this.namespace;
    };

   /**
    * Only supported value for the ExternalID namespace at this time is API_OTHER
    * @function setNamespace
    * @param namespace {module:model/agreements/String} Only supported value for the ExternalID namespace at this time is API_OTHER
    * @instance
    */
    _this.setNamespace = function(namespace) {
      _this.namespace = namespace;
    };

  };

  /**
   * @private
   * Constructs a <code>ExternalId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/ExternalId} obj Optional instance to populate.
   * @return {module:model/agreements/ExternalId} The populated <code>ExternalId</code> instance.
   */
  ExternalId.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new ExternalId();

      if (data.hasOwnProperty('group')) {
        obj.setGroup(data.group);
      }
      if (data.hasOwnProperty('id')) {
        obj.setId(data.id);
      }
      if (data.hasOwnProperty('namespace')) {
        obj.setNamespace(data.namespace);
      }
    }
    return obj;
  };


  return ExternalId;
}));


