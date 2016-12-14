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
    module.exports = factory(require('superagent'), require('./ApiError'), require('../model/baseUris/BaseUriInfo'));

}(function(superagent, ApiError, BaseUriInfo) {
  'use strict';

  /**
   * @module ApiClient
   * @version 1.1.0
   */

  /**
   * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
   * application to use this class directly - the *Api and model classes provide the public API for the service. The
   * contents of this file should be regarded as internal but are documented for completeness.
   * @alias module:ApiClient
   * @class
   */
  var ApiClient = function() {
    var _this = this;
    var CONNECTION_ERROR = "Connection Error";
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://api.echosign.com/api/rest/v5
     */
    _this.xSdkVersion = 'NodeJS SDK 1.1.0';
    _this.envHostName = 'https://api.echosign.com/'.replace(/\/+$/, '/');
    _this.baseUri = null;
    _this.subPath = 'api/rest/v5'.replace(/\/+$/, '');


    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    _this.defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 100000
     */
    _this.timeout = 180000;

    /**
     * Returns a string representation for an actual parameter.
     * @param param The actual parameter.
     * @returns {String} The string representation of <code>param</code>.
     */
    _this.paramToString = function(param) {
     if (param == undefined || param == null) {
        return '';
     }
     if (param instanceof Date) {
        return param.toJSON();
     }
        return param.toString();
     };

    /**
     * Sets the baseUri
     * @param baseUri The baseUri to be set.
     */
      _this.setBaseUri = function(baseUri) {
        _this.baseUri = baseUri;
     };


    /**
     * Get the baseUri
     * @returns {String} The baseUri
     */
   _this.getBaseUri = function() {

     return _this.baseUri;
     };


    /**
     * Sets the host environment
     * @param hostName The hostName to be set
     */
    _this.setEnvHostName = function(hostName) {
     if(hostName != undefined && hostName != null && hostName.length != 0) {
        _this.envHostName = hostName;
        _this.baseUri = null;
     }
     };

    /**
     * Gets the host environment
     * @returns {String} The host environment
     */
    _this.getEnvHostName = function() {
        return _this.envHostName;
     };

    /**
     * Gets the base uri to access other APIs. In case other APIs are accessed from a different end point, it will be considered an invalid request
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @returns {Promise} A promise that returns BaseUriInfo if resolved and apiError if rejected.
     */
    _this.getBaseUris = function(headerParams) {

     var postBody = null;

     var pathParams = {};
     var queryParams = {};
     var formParams = {};

     var contentTypes = [];
     var accepts = ['application/json'];

     var returnType = BaseUriInfo;

     return _this.callApiInternal(
        '/base_uris', 'GET', pathParams, queryParams, headerParams, formParams,
        postBody, contentTypes, accepts, returnType, true, _this.envHostName);
     };


    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param {String} path The path to append to the base URL.
     * @param {Object} pathParams The parameter values to append.
     * @param {Boolean} addSubPath Boolean value to add subPath.
     * @param {String} baseUrl The base URL.
     * @returns {String} The encoded path with parameter values substituted.
     */
    _this.buildUrl = function(path, pathParams, addSubPath, baseUrl) {
     if(addSubPath)
     {
        baseUrl = baseUrl + _this.subPath;
     }
     var url = baseUrl + path;
     url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
     var value;
     if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
     } else {
        value = fullMatch;
     }
     return encodeURIComponent(value);
     });
     return url;
     };

    /**
     * Checks whether the given content type represents JSON.<br>
     * JSON content type examples:<br>
     * <ul>
         * <li>application/json</li>
         * <li>application/json; charset=UTF8</li>
         * <li>APPLICATION/JSON</li>
         * </ul>
     * @param {String} contentType The MIME content type to check.
     * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
     */
    _this.isJsonMime = function(contentType) {
        return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
     };

    /**
     * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
     * @param {Array.<String>} contentTypes
     * @returns {String} The chosen content type, preferring JSON.
     */
    _this.jsonPreferredMime = function(contentTypes) {
     for (var i = 0; i < contentTypes.length; i++) {
     if (_this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
     }
     }
     return contentTypes[0];
     };

    /**
     * Checks whether the given parameter value represents file-like content.
     * @param param The parameter to check.
     * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
     */
    _this.isFileParam = function(param) {
     // fs.ReadStream in Node.js (but not in runtime like browserify)
     if (typeof window === 'undefined' &&
     typeof require === 'function' &&
     require('fs') &&
     param instanceof require('fs').ReadStream) {
        return true;
     }
     // Buffer in Node.js
     if (typeof Buffer === 'function' && param instanceof Buffer) {
        return true;
     }
     // Blob in browser
     if (typeof Blob === 'function' && param instanceof Blob) {
        return true;
     }
     // File in browser (it seems File object is also instance of Blob, but keep this for safe)
     if (typeof File === 'function' && param instanceof File) {
        return true;
     }
     return false;
     };

    /**
     * Normalizes parameter values:
     * <ul>
         * <li>remove nils</li>
         * <li>keep files and arrays</li>
         * <li>format to string with `paramToString` for other cases</li>
         * </ul>
     * @param {Object.<String, Object>} params The parameters as object properties.
     * @returns {Object.<String, Object>} normalized parameters.
     */
    _this.normalizeParams = function(params) {
     var newParams = {};
     for (var key in params) {
     if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
        var value = params[key];
     if (_this.isFileParam(value) || Array.isArray(value)) {
        newParams[key] = value;
     } else {
        newParams[key] = _this.paramToString(value);
     }
     }
     }
     return newParams;
     };

    /**
     * Builds a string representation of an array-type actual parameter, according to the given collection format.
     * @param {Array} param An array parameter.
     * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
     * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
     * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
     */
    _this.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
     if (param == null) {
        return null;
     }
     switch (collectionFormat) {
     case 'csv':
        return param.map(_this.paramToString).join(',');
     case 'ssv':
        return param.map(_this.paramToString).join(' ');
     case 'tsv':
        return param.map(_this.paramToString).join('\t');
     case 'pipes':
        return param.map(_this.paramToString).join('|');
     case 'multi':
        // return the array directly as SuperAgent will handle it as expected
        return param.map(_this.paramToString);
     default:
        throw new Error('Unknown collection format: ' + collectionFormat);
     }
     };

    /**
     * Deserializes an HTTP response body into a value of the specified type.
     * @param {Object} response A SuperAgent response object.
     * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns A value of the specified type.
     */
    _this.deserialize = function deserialize(response, returnType) {
     if (response == null || returnType == null) {
        return null;
     }
     // Rely on SuperAgent for parsing response body.
     // See http://visionmedia.github.io/superagent/#parsing-response-bodies
     var data = response.body;
     if (data == null) {
        // SuperAgent does not always produce a body; use the unparsed response as a fallback
        data = response.text;
     }
     return ApiClient.convertToType(data, returnType);
     };

    /**
     * Invokes the REST service using the supplied settings and parameters.
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {Array.<String>} contentTypes An array of request MIME types.
     * @param {Array.<String>} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the constructor for a complex type.
     * @param {Boolean} addSubPath Boolean value to add subPath
     * @returns {Promise} A Promise object.
     */
    _this.callApi = function callApi(path, httpMethod, pathParams,
     queryParams, headerParams, formParams, bodyParam, contentTypes, accepts,
     returnType, addSubPath) {

     var baseUrl = _this.baseUri;
     if ((_this.baseUri == null) && addSubPath) {
        return _this.getBaseUris(headerParams)
        .then(function(baseUriInfo) {
            return _this.callApiInternal(path, httpMethod, pathParams,
            queryParams, headerParams, formParams, bodyParam, contentTypes, accepts,
            returnType, addSubPath, baseUriInfo.getApiAccessPoint());
        });
     }
     else{
        return _this.callApiInternal(path, httpMethod, pathParams,
            queryParams, headerParams, formParams, bodyParam, contentTypes, accepts,
            returnType, addSubPath, baseUrl);
        }
     };


    /**
     * Invokes the REST service using the supplied settings and parameters.
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {Array.<String>} contentTypes An array of request MIME types.
     * @param {Array.<String>} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the constructor for a complex type.
     * @param {Boolean} addSubPath Boolean value to add subPath     * @returns {Promise} A Promise object.
     */
    _this.callApiInternal = function callApiInternal(path, httpMethod, pathParams,
     queryParams, headerParams, formParams, bodyParam, contentTypes, accepts,
     returnType, addSubPath, baseUrl) {

     var url = _this.buildUrl(path, pathParams, addSubPath, baseUrl);
     var request = superagent(httpMethod, url);

     // set query parameters
     request.query(_this.normalizeParams(queryParams));

     // set header parameters
     if (path.indexOf("oauth")=== -1) {
       headerParams['x-sdk-version'] = _this.xSdkVersion;
     }
     request.set(_this.defaultHeaders).set(_this.normalizeParams(headerParams));

     // set request timeout
     request.timeout(_this.timeout);

     if (returnType === 'Uint8Array') {

       // custom parser for binary stream
       request.buffer(true).parse(function (res, callback) {
         res.setEncoding('binary');
         res.text = '';
         res.on('data', function (chunk) {
           res.text += chunk;
         });
         res.on('end', function () {
           callback(null, new Buffer(res.text, 'binary'));
         });
       });
     }
     if(returnType === 'arraybuffer') {
       request.responseType("arraybuffer");
     }

     var contentType = _this.jsonPreferredMime(contentTypes);
     if (contentType) {
         // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
         if(contentType != 'multipart/form-data') {
           request.type(contentType);
         }
     } else if (!request.header['Content-Type']) {
         request.type('application/json');
     }

     if (contentType === 'application/x-www-form-urlencoded') {
        request.send(_this.normalizeParams(formParams));
     } else if (contentType == 'multipart/form-data') {
        var _formParams = _this.normalizeParams(formParams);
     for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
            if (_this.isFileParam(_formParams[key])) {
     // file field
        request.attach(key, _formParams[key]);
        } else {
            request.field(key, _formParams[key]);
        }
        }
        }
     } else if (bodyParam) {
        request.send(bodyParam);
     }

     var accept = _this.jsonPreferredMime(accepts);
     if (accept) {
        request.accept(accept);
     }

    return new Promise(function(resolve, reject) {
     request.end(function(error, response) {
     if (error) {
        var sdkErrorCode = {};
        var errorObject = null;
        if (typeof window === 'undefined') {
          if((error.response) && (response.res)){
              errorObject = JSON.parse(response.res.text);
              sdkErrorCode['httpCode'] = error.response.statusCode;
          }
        }
        else {
          if (error.response && response.text) {
            errorObject = JSON.parse(response.text);
            sdkErrorCode['httpCode'] = response.statusCode;
          } else if (error.rawResponse && error.rawResponse instanceof ArrayBuffer) {
              var decodedString = String.fromCharCode.apply(null, new Uint8Array(error.rawResponse));
              errorObject = JSON.parse(decodedString);
              sdkErrorCode['httpCode'] = error.statusCode;
          }
        }
        if (errorObject) {
          sdkErrorCode['errorMessage'] = errorObject.message;
          sdkErrorCode['apiCode'] = errorObject.code;
        }
        else {
          sdkErrorCode['errorMessage'] = CONNECTION_ERROR;
        }
        reject(new ApiError(sdkErrorCode));
     } else {
        if (returnType === 'arraybuffer') {
          resolve(response.xhr.response);
        }
        else {
          var data = _this.deserialize(response, returnType);
          resolve(data);
        }
     }
     });
     });
  };

    /**
     * Parses an ISO-8601 string representation of a date value.
     * @param {String} str The date value as a string.
     * @returns {Date} The parsed date object.
     */
    _this.parseDate = function(str) {
      return new Date(str.replace(/T/i, ' '));
      };

    };

  /**
   * Enumeration of collection format separator strategies.
   * @enum {String}
   * @readonly
   */
   ApiClient.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',
    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
  };

  /**
   * Converts a value to the specified type.
   * @param {(String|Object)} data The data to convert, as a string or object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns An instance of the specified type.
   */
   ApiClient.convertToType = function(data, type) {
    var _this = this;
    switch (type) {
      case 'Boolean':
        return Boolean(data);
      case 'Integer':
        return parseInt(data, 10);
      case 'Number':
        return parseFloat(data);
      case 'String':
        return String(data);
      case 'Date':
        return _this.parseDate(String(data));
      default:
        if (type === Object) {
          // generic object, return directly
          return data;
        } else if (typeof type === 'function') {
          // for model type like: User
          return type.constructFromObject(data);
        } else if (Array.isArray(type)) {
          // for array type like: ['String']
          var itemType = type[0];
          return data.map(function(item) {
            return ApiClient.convertToType(item, itemType);
          });
        } else if (typeof type === 'object') {
          // for plain object type like: {'String': 'Integer'}
          var keyType, valueType;
          for (var k in type) {
            if (type.hasOwnProperty(k)) {
              keyType = k;
              valueType = type[k];
              break;
            }
          }
          var result = {};
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              var key = ApiClient.convertToType(k, keyType);
              var value = ApiClient.convertToType(data[k], valueType);
              result[key] = value;
            }
          }
          return result;
        } else {
          // for unknown type, return the data directly
          return data;
        }
    }
  };

  /**
   * Constructs a new map or array model from REST data.
   * @param data {Object|Array} The REST data.
   * @param obj {Object|Array} The target object or array.
   */
   ApiClient.constructFromObject = function(data, obj, itemType) {
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        if (data.hasOwnProperty(i))
          obj[i] = ApiClient.convertToType(data[i], itemType);
      }
    } else {
      for (var k in data) {
        if (data.hasOwnProperty(k))
          result[k] = ApiClient.convertToType(data[k], itemType);
      }
    }
  };

  return ApiClient;
}));
