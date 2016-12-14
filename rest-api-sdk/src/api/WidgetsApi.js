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
    module.exports = factory(require('../utils/ApiClient'), require('../utils/Context'), require('../model/widgets/WidgetsIndex'), require('../utils/validator/WidgetsApiValidator'), require('../utils/validator/ApiValidatorHelper'), require('../utils/ApiError'));

}(function(ApiClient, Context, WidgetsIndex, WidgetsApiValidator, ApiValidatorHelper, ApiError) {
  'use strict';

  /**
   * @module WidgetsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new WidgetsApi. 
   * @alias module:WidgetsApi
   * @class
   */
  var WidgetsApi = function(context) {
    var _this = this;
    var apiClient = context.apiClient;


    /**
     * Retrieves widgets for a user.
     * @function getWidgets
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/widgets/UserWidgets|UserWidgets} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWidgets = function(headerParameters, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.getWidgetsValidator(opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = WidgetsIndex.UserWidgets;

      return apiClient.callApi(
        '/widgets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Creates a widget and returns the Javascript snippet and URL to access the widget and widgetID in response to the client.
     * @function createWidget
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetCreationRequest  {module:model/widgets/WidgetCreationRequest}
         Information about the widget that you want to create.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/widgets/WidgetCreationResponse|WidgetCreationResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.createWidget = function(headerParameters, widgetCreationRequest, opts) {

      opts = opts || {};
      var postBody = widgetCreationRequest;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.createWidgetValidator(widgetCreationRequest, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = WidgetsIndex.WidgetCreationResponse;

      return apiClient.callApi(
        '/widgets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the details of a widget.
     * @function getWidgetInfo
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetId  {module:model/widgets/String}
         The widget identifier, as returned by the widget creation API or retrieved from the API to fetch widgets.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/widgets/WidgetInfo|WidgetInfo} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWidgetInfo = function(headerParameters, widgetId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.getWidgetInfoValidator(widgetId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'widgetId': widgetId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = WidgetsIndex.WidgetInfo;

      return apiClient.callApi(
        '/widgets/{widgetId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves agreements for the widget
     * @function getWidgetAgreements
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetId  {module:model/widgets/String}
         The widget identifier, as returned by the widget creation API or retrieved from the API to fetch widgets.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/widgets/WidgetAgreements|WidgetAgreements} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWidgetAgreements = function(headerParameters, widgetId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.getWidgetAgreementsValidator(widgetId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'widgetId': widgetId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = WidgetsIndex.WidgetAgreements;

      return apiClient.callApi(
        '/widgets/{widgetId}/agreements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the audit trail of a widget identified by widgetId.
     * PDF file stream containing audit trail information
     * @function getWidgetAuditTrail
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetId  {module:model/widgets/String}
         The widget identifier, as returned by the widget creation API or retrieved from the API to fetch widgets.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/widgets/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWidgetAuditTrail = function(headerParameters, widgetId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.getWidgetAuditTrailValidator(widgetId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'widgetId': widgetId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/pdf'];
      
      var returnType ='Uint8Array';
      
      return apiClient.callApi(
        '/widgets/{widgetId}/auditTrail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Gets a single combined PDF document for the documents associated with a widget.
     * A File Stream of combined PDF document
     * @function getWidgetCombinedDocument
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetId  {module:model/widgets/String}
         The widget identifier, as returned by the widget creation API or retrieved from the API to fetch widgets.
     * @param {Object} opts Optional parameters
     * @param  {String} opts.versionId The version identifier of widget as provided by the API which retrieves information of a specific widget. If not provided then latest version will be used.
     * @param  {String} opts.participantEmail The email address of the participant to be used to retrieve documents.
     * @param  {Boolean} opts.auditReport When set to YES, attach an audit report to the signed Widget PDF. Default value is false
     * @returns {Promise} A promise that returns {@link module:model/widgets/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWidgetCombinedDocument = function(headerParameters, widgetId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.getWidgetCombinedDocumentValidator(widgetId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'widgetId': widgetId
      };
      var queryParams = {
        'versionId': opts['versionId'],
        'participantEmail': opts['participantEmail'],
        'auditReport': opts['auditReport']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/pdf'];
      
      var returnType ='Uint8Array';
      
      return apiClient.callApi(
        '/widgets/{widgetId}/combinedDocument', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Retrieves the IDs of the documents associated with widget.
     * @function getWidgetDocuments
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetId  {module:model/widgets/String}
         The widget identifier, as returned by the widget creation API or retrieved from the API to fetch widgets.
     * @param {Object} opts Optional parameters
     * @param  {String} opts.versionId The version identifier of widget as provided by the API which retrieves information of a specific widget. If not provided then latest version will be used.
     * @param  {String} opts.participantEmail The email address of the participant to be used to retrieve documents.
     * @returns {Promise} A promise that returns {@link module:model/widgets/WidgetDocuments|WidgetDocuments} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWidgetDocuments = function(headerParameters, widgetId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.getWidgetDocumentsValidator(widgetId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'widgetId': widgetId
      };
      var queryParams = {
        'versionId': opts['versionId'],
        'participantEmail': opts['participantEmail']
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = WidgetsIndex.WidgetDocuments;

      return apiClient.callApi(
        '/widgets/{widgetId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Retrieves the file stream of a document of a widget.
     * Raw stream of the file
     * @function getWidgetDocumentInfo
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetId  {module:model/widgets/String}
         The widget identifier, as returned by the widget creation API or retrieved from the API to fetch widgets.
     * @param documentId  {module:model/widgets/String}
         The document identifier, as retrieved from the API which fetches the documents of a specified widget
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/widgets/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWidgetDocumentInfo = function(headerParameters, widgetId, documentId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.getWidgetDocumentInfoValidator(widgetId, documentId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'widgetId': widgetId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = [' */* '];
      
      var returnType ='Uint8Array';
      
      return apiClient.callApi(
        '/widgets/{widgetId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Retrieves data entered by the user into interactive form fields at the time they signed the widget
     * CSV file stream containing form data information
     * @function getWidgetFormData
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_read
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetId  {module:model/widgets/String}
         The widget identifier, as returned by the widget creation API or retrieved from the API to fetch widgets.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/widgets/Uint8Array|Uint8Array} if resolved and apiError if rejected.
     * @instance
     */
    _this.getWidgetFormData = function(headerParameters, widgetId, opts) {

      opts = opts || {};
      var postBody = null;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.getWidgetFormDataValidator(widgetId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'widgetId': widgetId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['text/csv'];
      
      var returnType ='Uint8Array';
      
      return apiClient.callApi(
        '/widgets/{widgetId}/formData', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
      
    };

    /**
     * Personalize the widget to a signable document for a specific known user
     * @function updateWidgetPersonalize
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetId  {module:model/widgets/String}
         The widget identifier, as returned by the widget creation API or retrieved from the API to fetch widgets.
     * @param widgetPersonalizationInfo  {module:model/widgets/WidgetPersonalizationInfo}
         Widget Personalize update information object
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/widgets/WidgetPersonalizeResponse|WidgetPersonalizeResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.updateWidgetPersonalize = function(headerParameters, widgetPersonalizationInfo, widgetId, opts) {

      opts = opts || {};
      var postBody = widgetPersonalizationInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.updateWidgetPersonalizeValidator(widgetPersonalizationInfo, widgetId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'widgetId': widgetId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = WidgetsIndex.WidgetPersonalizeResponse;

      return apiClient.callApi(
        '/widgets/{widgetId}/personalize', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };

    /**
     * Enables or Disables a widget.
     * @function updateWidgetStatus
     * @param headerParameters {Object} Header parameters
       
     * @param headerParameters.accessToken {String} An OAuth Access Token with scopes: widget_write
     * @param headerParameters.xApiUser {String} The userId or email of API caller using the account or group token in the format userid:{userId} OR email:{email}. If it is not specified, then the caller is inferred from the token.
     
     * @param widgetId  {module:model/widgets/String}
         The widget identifier, as returned by the widget creation API or retrieved from the API to fetch widgets.
     * @param widgetStatusUpdateInfo  {module:model/widgets/WidgetStatusUpdateInfo}
         Widget status update information object.
     * @param {Object} opts Optional parameters
     * @returns {Promise} A promise that returns {@link module:model/widgets/WidgetStatusUpdateResponse|WidgetStatusUpdateResponse} if resolved and apiError if rejected.
     * @instance
     */
    _this.updateWidgetStatus = function(headerParameters, widgetStatusUpdateInfo, widgetId, opts) {

      opts = opts || {};
      var postBody = widgetStatusUpdateInfo;

      try {
        ApiValidatorHelper.validateHeaderParams(headerParameters);
        WidgetsApiValidator.updateWidgetStatusValidator(widgetStatusUpdateInfo, widgetId, opts);
      } catch (apiError) {
        return Promise.reject(apiError);
      }

      var pathParams = {
        'widgetId': widgetId
      };
      var queryParams = {
      };
      var headerParams = {
        'Access-Token': headerParameters.accessToken,
        'x-api-user': headerParameters.xApiUser
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];
      
      
      var returnType = WidgetsIndex.WidgetStatusUpdateResponse;

      return apiClient.callApi(
        '/widgets/{widgetId}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, true)
      .catch(function (apiError) {
        throw new ApiError(apiError)
      });
      
    };
  };

  return WidgetsApi;
}));
