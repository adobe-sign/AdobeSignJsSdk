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
    // CommonJS-like environments that support module.OAuthUtils, like Node.
    module.exports = factory(require('./StringUtil'));
  
}(function(StringUtil) {
  'use strict';

  /**
   * This file contains basic utility functions which will be used for String manipulations
   */
  var OAuthUtils = function (){};
    
    var REDIRECT_URI = "redirect_uri";
    var RESPONSE_TYPE = "response_type";
    var CLIENT_ID = "client_id";
    var SCOPE = "scope";
    var STATE = "state";
    var QUERY_STRING_SEPARATOR = '?';
    var PARAM_SEPARATOR = '&';
    var SPACE_DELIMITER = "+";
    var COLON = ":";
    var EQUALS = '=';


    /**
     * Returns string containing scopes, delimited by spaces (+).
     *
     * @param scopes List of scopes.
     * @return
     */
    OAuthUtils.spaceDelimitedSet = function (scopes) {
      if(!scopes)
        return null;
      var scopeSet = "";
      for (var i = 0, len = scopes.length; i < len; i++) {
        scopeSet += scopes[i].target + COLON + scopes[i].modifier;
        if(i<(len-1))
          scopeSet += SPACE_DELIMITER;
      }
      return scopeSet;
    };


    /**
     * Helper to construct authorization url.
     *
     *
     * @return authorization url
     */
    OAuthUtils.appendTo = function (url, clientId, redirectUrl, scopes, state, responseType) {
      if (!url)
        return null;
          
      return url + QUERY_STRING_SEPARATOR +
              REDIRECT_URI + EQUALS + redirectUrl + PARAM_SEPARATOR +
              RESPONSE_TYPE + EQUALS + responseType + PARAM_SEPARATOR +
              CLIENT_ID + EQUALS + clientId + PARAM_SEPARATOR +
              SCOPE + EQUALS + scopes +
              (!state ? (PARAM_SEPARATOR + STATE + EQUALS + state) : "");
      
    };
  return OAuthUtils;
}));
