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
 * The Scope model module.
 * @module model/oAuth/Scope
 * @version 1.0.0
 *
 */

/**
 * Constructs a new <code>Scope</code>.
 * @alias module:model/oAuth/Scope
 * @class
 */
var Scope = function() {
  var _this = this;

  _this.target = undefined;
  _this.modifier = undefined;

  /**
   * Combination of the action and the resource on which that action will be performed.
   * @function getTarget
   * @return {string} target
   * @instance
   */
  _this.getTarget = function() {
    return this.target;
  };

  /**
   * Combination of the action and the resource on which that action will be performed.
   * @function setTarget
   * @param target {string} Target
   * @instance
   */
  _this.setTarget = function (target) {
    this.target = target;
  };

  /**
   * Access the resource of self, group, account.
   * @function getModifier
   * @return {string} modifier
   * @instance
   */
  _this.getModifier = function() {
    return this.modifier;
  };

  /**
   * Access the resource of self, group, account.
   * @function setModifier
   * @param modifier {string} Modifier
   * @instance
   */
  _this.setModifier = function (modifier) {
    this.modifier = modifier;
  };
};


/**
 * @private
 * Constructs a <code>Scope</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/oAuth/Scope} obj Optional instance to populate.
 * @return {module:model/oAuth/Scope} The populated <code>Scope</code> instance.
 */
Scope.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('target')) {
      obj.setTarget(data.target);
    }
    if (data.hasOwnProperty('modifier')) {
      obj.setModifier(data.modifier);
    }
  }
  return obj;
};

return Scope;
}));
