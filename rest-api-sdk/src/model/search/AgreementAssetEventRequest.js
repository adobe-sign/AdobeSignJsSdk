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
   * @module model/search/AgreementAssetEventRequest
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>AgreementAssetEventRequest</code>.
   * @alias module:model/search/AgreementAssetEventRequest
   * @class
   */
  var AgreementAssetEventRequest = function() {
    var _this = this;


    _this.endDate = undefined;

    _this.filterEvents = undefined;

    _this.onlyShowLatestEvent = undefined;

    _this.pageSize = undefined;

    _this.startDate = undefined;

   /**
    * The end of the date range for which events will be returned. Date should be mentioned in YYYY-MM-DDTHH:MM:SS format
    * @function getEndDate
    * @return  {module:model/search/Date} The end of the date range for which events will be returned. Date should be mentioned in YYYY-MM-DDTHH:MM:SS format  
    * @instance
    */
    _this.getEndDate = function() {
      return _this.endDate;
    };

   /**
    * The end of the date range for which events will be returned. Date should be mentioned in YYYY-MM-DDTHH:MM:SS format
    * @function setEndDate
    * @param endDate {module:model/search/Date} The end of the date range for which events will be returned. Date should be mentioned in YYYY-MM-DDTHH:MM:SS format
    * @instance
    */
    _this.setEndDate = function(endDate) {
      _this.endDate = endDate;
    };

   /**
    * If filterEvents are specified, only those event types will be returned. If filterEvents are not specified, all event types will be returned.The Agreement Event type should be given in form of array like [\&quot;ESIGNED\&quot;,\&quot;SIGNED\&quot;]
    * @function getFilterEvents
    * @return  {module:model/search/Array} If filterEvents are specified, only those event types will be returned. If filterEvents are not specified, all event types will be returned.The Agreement Event type should be given in form of array like [\&quot;ESIGNED\&quot;,\&quot;SIGNED\&quot;]  
    * @instance
    */
    _this.getFilterEvents = function() {
      return _this.filterEvents;
    };

   /**
    * If filterEvents are specified, only those event types will be returned. If filterEvents are not specified, all event types will be returned.The Agreement Event type should be given in form of array like [\&quot;ESIGNED\&quot;,\&quot;SIGNED\&quot;]
    * @function setFilterEvents
    * @param filterEvents {module:model/search/Array} If filterEvents are specified, only those event types will be returned. If filterEvents are not specified, all event types will be returned.The Agreement Event type should be given in form of array like [\&quot;ESIGNED\&quot;,\&quot;SIGNED\&quot;]
    * @instance
    */
    _this.setFilterEvents = function(filterEvents) {
      _this.filterEvents = filterEvents;
    };

   /**
    * If true, only the latest event for any given agreement asset within the specified date range will be returned. If false, all events will be returned
    * @function getOnlyShowLatestEvent
    * @return  {module:model/search/Boolean} If true, only the latest event for any given agreement asset within the specified date range will be returned. If false, all events will be returned  
    * @instance
    */
    _this.getOnlyShowLatestEvent = function() {
      return _this.onlyShowLatestEvent;
    };

   /**
    * If true, only the latest event for any given agreement asset within the specified date range will be returned. If false, all events will be returned
    * @function setOnlyShowLatestEvent
    * @param onlyShowLatestEvent {module:model/search/Boolean} If true, only the latest event for any given agreement asset within the specified date range will be returned. If false, all events will be returned
    * @instance
    */
    _this.setOnlyShowLatestEvent = function(onlyShowLatestEvent) {
      _this.onlyShowLatestEvent = onlyShowLatestEvent;
    };

   /**
    * Count of agreement asset events which will be returned in the response. Default page size for the response is 100. Maximum value of page size is 500
    * @function getPageSize
    * @return  {module:model/search/Integer} Count of agreement asset events which will be returned in the response. Default page size for the response is 100. Maximum value of page size is 500  
    * @instance
    */
    _this.getPageSize = function() {
      return _this.pageSize;
    };

   /**
    * Count of agreement asset events which will be returned in the response. Default page size for the response is 100. Maximum value of page size is 500
    * @function setPageSize
    * @param pageSize {module:model/search/Integer} Count of agreement asset events which will be returned in the response. Default page size for the response is 100. Maximum value of page size is 500
    * @instance
    */
    _this.setPageSize = function(pageSize) {
      _this.pageSize = pageSize;
    };

   /**
    * The beginning of the date range for which events will be returned. Date should be mentioned in YYYY-MM-DDTHH:MM:SS format
    * @function getStartDate
    * @return  {module:model/search/Date} The beginning of the date range for which events will be returned. Date should be mentioned in YYYY-MM-DDTHH:MM:SS format  
    * @instance
    */
    _this.getStartDate = function() {
      return _this.startDate;
    };

   /**
    * The beginning of the date range for which events will be returned. Date should be mentioned in YYYY-MM-DDTHH:MM:SS format
    * @function setStartDate
    * @param startDate {module:model/search/Date} The beginning of the date range for which events will be returned. Date should be mentioned in YYYY-MM-DDTHH:MM:SS format
    * @instance
    */
    _this.setStartDate = function(startDate) {
      _this.startDate = startDate;
    };

  };

  /**
   * @private
   * Constructs a <code>AgreementAssetEventRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/search/AgreementAssetEventRequest} obj Optional instance to populate.
   * @return {module:model/search/AgreementAssetEventRequest} The populated <code>AgreementAssetEventRequest</code> instance.
   */
  AgreementAssetEventRequest.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AgreementAssetEventRequest();

      if (data.hasOwnProperty('endDate')) {
        obj.setEndDate(data.endDate);
      }
      if (data.hasOwnProperty('filterEvents')) {
        obj.setFilterEvents(data.filterEvents);
      }
      if (data.hasOwnProperty('onlyShowLatestEvent')) {
        obj.setOnlyShowLatestEvent(data.onlyShowLatestEvent);
      }
      if (data.hasOwnProperty('pageSize')) {
        obj.setPageSize(data.pageSize);
      }
      if (data.hasOwnProperty('startDate')) {
        obj.setStartDate(data.startDate);
      }
    }
    return obj;
  };


  /**
   * Allowed values for the <code>filterEvents</code> property.
   * @enum {String}
   * @readonly
   */
AgreementAssetEventRequest.FilterEventsEnum = {
  
  
    /**
     * value: CREATED
     * @const
     */
    CREATED: "CREATED",
    
  
    /**
     * value: UPLOADED_BY_SENDER
     * @const
     */
    UPLOADED_BY_SENDER: "UPLOADED_BY_SENDER",
    
  
    /**
     * value: FAXED_BY_SENDER
     * @const
     */
    FAXED_BY_SENDER: "FAXED_BY_SENDER",
    
  
    /**
     * value: AGREEMENT_MODIFIED
     * @const
     */
    AGREEMENT_MODIFIED: "AGREEMENT_MODIFIED",
    
  
    /**
     * value: USER_ACK_AGREEMENT_MODIFIED
     * @const
     */
    USER_ACK_AGREEMENT_MODIFIED: "USER_ACK_AGREEMENT_MODIFIED",
    
  
    /**
     * value: PRESIGNED
     * @const
     */
    PRESIGNED: "PRESIGNED",
    
  
    /**
     * value: SIGNED
     * @const
     */
    SIGNED: "SIGNED",
    
  
    /**
     * value: ESIGNED
     * @const
     */
    ESIGNED: "ESIGNED",
    
  
    /**
     * value: DIGSIGNED
     * @const
     */
    DIGSIGNED: "DIGSIGNED",
    
  
    /**
     * value: APPROVED
     * @const
     */
    APPROVED: "APPROVED",
    
  
    /**
     * value: OFFLINE_SYNC
     * @const
     */
    OFFLINE_SYNC: "OFFLINE_SYNC",
    
  
    /**
     * value: FAXIN_RECEIVED
     * @const
     */
    FAXIN_RECEIVED: "FAXIN_RECEIVED",
    
  
    /**
     * value: SIGNATURE_REQUESTED
     * @const
     */
    SIGNATURE_REQUESTED: "SIGNATURE_REQUESTED",
    
  
    /**
     * value: APPROVAL_REQUESTED
     * @const
     */
    APPROVAL_REQUESTED: "APPROVAL_REQUESTED",
    
  
    /**
     * value: RECALLED
     * @const
     */
    RECALLED: "RECALLED",
    
  
    /**
     * value: REJECTED
     * @const
     */
    REJECTED: "REJECTED",
    
  
    /**
     * value: EXPIRED
     * @const
     */
    EXPIRED: "EXPIRED",
    
  
    /**
     * value: EXPIRED_AUTOMATICALLY
     * @const
     */
    EXPIRED_AUTOMATICALLY: "EXPIRED_AUTOMATICALLY",
    
  
    /**
     * value: SHARED
     * @const
     */
    SHARED: "SHARED",
    
  
    /**
     * value: EMAIL_VIEWED
     * @const
     */
    EMAIL_VIEWED: "EMAIL_VIEWED",
    
  
    /**
     * value: AUTO_CANCELLED_CONVERSION_PROBLEM
     * @const
     */
    AUTO_CANCELLED_CONVERSION_PROBLEM: "AUTO_CANCELLED_CONVERSION_PROBLEM",
    
  
    /**
     * value: SIGNER_SUGGESTED_CHANGES
     * @const
     */
    SIGNER_SUGGESTED_CHANGES: "SIGNER_SUGGESTED_CHANGES",
    
  
    /**
     * value: SENDER_CREATED_NEW_REVISION
     * @const
     */
    SENDER_CREATED_NEW_REVISION: "SENDER_CREATED_NEW_REVISION",
    
  
    /**
     * value: PASSWORD_AUTHENTICATION_FAILED
     * @const
     */
    PASSWORD_AUTHENTICATION_FAILED: "PASSWORD_AUTHENTICATION_FAILED",
    
  
    /**
     * value: KBA_AUTHENTICATION_FAILED
     * @const
     */
    KBA_AUTHENTICATION_FAILED: "KBA_AUTHENTICATION_FAILED",
    
  
    /**
     * value: KBA_AUTHENTICATED
     * @const
     */
    KBA_AUTHENTICATED: "KBA_AUTHENTICATED",
    
  
    /**
     * value: WEB_IDENTITY_AUTHENTICATED
     * @const
     */
    WEB_IDENTITY_AUTHENTICATED: "WEB_IDENTITY_AUTHENTICATED",
    
  
    /**
     * value: WEB_IDENTITY_SPECIFIED
     * @const
     */
    WEB_IDENTITY_SPECIFIED: "WEB_IDENTITY_SPECIFIED",
    
  
    /**
     * value: EMAIL_BOUNCED
     * @const
     */
    EMAIL_BOUNCED: "EMAIL_BOUNCED",
    
  
    /**
     * value: WIDGET_ENABLED
     * @const
     */
    WIDGET_ENABLED: "WIDGET_ENABLED",
    
  
    /**
     * value: WIDGET_DISABLED
     * @const
     */
    WIDGET_DISABLED: "WIDGET_DISABLED",
    
  
    /**
     * value: DELEGATED
     * @const
     */
    DELEGATED: "DELEGATED",
    
  
    /**
     * value: AUTO_DELEGATED
     * @const
     */
    AUTO_DELEGATED: "AUTO_DELEGATED",
    
  
    /**
     * value: REPLACED_SIGNER
     * @const
     */
    REPLACED_SIGNER: "REPLACED_SIGNER",
    
  
    /**
     * value: VAULTED
     * @const
     */
    VAULTED: "VAULTED",
    
  
    /**
     * value: DOCUMENTS_DELETED
     * @const
     */
    DOCUMENTS_DELETED: "DOCUMENTS_DELETED",
    
  
    /**
     * value: OTHER
     * @const
     */
    OTHER: "OTHER"
  
  
  };

  return AgreementAssetEventRequest;
}));


