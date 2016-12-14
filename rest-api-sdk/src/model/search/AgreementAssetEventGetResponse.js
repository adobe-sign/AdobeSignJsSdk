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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/search/DocumentEventForUser'));

}(function(ApiClient, DocumentEventForUser) {
  'use strict';


  /**
   * @module model/search/AgreementAssetEventGetResponse
   * @version 1.1.0
   */
  /**
   * Constructs a new <code>AgreementAssetEventGetResponse</code>.
   * @alias module:model/search/AgreementAssetEventGetResponse
   * @class
   */
  var AgreementAssetEventGetResponse = function() {
    var _this = this;


    _this.events = undefined;

    _this.nextPageCursor = undefined;

   /**
    * An ordered list of the events in the audit trail of this document
    * @function getEvents
    * @return  {module:model/search/Array} An ordered list of the events in the audit trail of this document  
    * @instance
    */
    _this.getEvents = function() {
      return _this.events;
    };

   /**
    * An ordered list of the events in the audit trail of this document
    * @function setEvents
    * @param events {module:model/search/Array} An ordered list of the events in the audit trail of this document
    * @instance
    */
    _this.setEvents = function(events) {
      _this.events = events;
    };

   /**
    * The page cursor of the next page to be fetched. If the next page cursor is blank then the given page is the last page
    * @function getNextPageCursor
    * @return  {module:model/search/String} The page cursor of the next page to be fetched. If the next page cursor is blank then the given page is the last page  
    * @instance
    */
    _this.getNextPageCursor = function() {
      return _this.nextPageCursor;
    };

   /**
    * The page cursor of the next page to be fetched. If the next page cursor is blank then the given page is the last page
    * @function setNextPageCursor
    * @param nextPageCursor {module:model/search/String} The page cursor of the next page to be fetched. If the next page cursor is blank then the given page is the last page
    * @instance
    */
    _this.setNextPageCursor = function(nextPageCursor) {
      _this.nextPageCursor = nextPageCursor;
    };

  };

  /**
   * @private
   * Constructs a <code>AgreementAssetEventGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/search/AgreementAssetEventGetResponse} obj Optional instance to populate.
   * @return {module:model/search/AgreementAssetEventGetResponse} The populated <code>AgreementAssetEventGetResponse</code> instance.
   */
  AgreementAssetEventGetResponse.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new AgreementAssetEventGetResponse();

      if (data.hasOwnProperty('events')) {
        obj.setEvents(ApiClient.convertToType(data.events,[DocumentEventForUser]));
      }
      if (data.hasOwnProperty('nextPageCursor')) {
        obj.setNextPageCursor(data.nextPageCursor);
      }
    }
    return obj;
  };


  return AgreementAssetEventGetResponse;
}));


