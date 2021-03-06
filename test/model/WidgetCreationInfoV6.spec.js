/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerJsClient);
  }
}(this, function(expect, SwaggerJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerJsClient.WidgetCreationInfoV6();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WidgetCreationInfoV6', function() {
    it('should create an instance of WidgetCreationInfoV6', function() {
      // uncomment below and update the code to test WidgetCreationInfoV6
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be.a(SwaggerJsClient.WidgetCreationInfoV6);
    });

    it('should have the property additionalParticipantSetsInfo (base name: "additionalParticipantSetsInfo")', function() {
      // uncomment below and update the code to test the property additionalParticipantSetsInfo
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property authFailureInfo (base name: "authFailureInfo")', function() {
      // uncomment below and update the code to test the property authFailureInfo
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property ccs (base name: "ccs")', function() {
      // uncomment below and update the code to test the property ccs
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property completionInfo (base name: "completionInfo")', function() {
      // uncomment below and update the code to test the property completionInfo
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property creatorEmail (base name: "creatorEmail")', function() {
      // uncomment below and update the code to test the property creatorEmail
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property fileInfos (base name: "fileInfos")', function() {
      // uncomment below and update the code to test the property fileInfos
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property securityOption (base name: "securityOption")', function() {
      // uncomment below and update the code to test the property securityOption
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property vaultingInfo (base name: "vaultingInfo")', function() {
      // uncomment below and update the code to test the property vaultingInfo
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property widgetInActiveInfo (base name: "widgetInActiveInfo")', function() {
      // uncomment below and update the code to test the property widgetInActiveInfo
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

    it('should have the property widgetParticipantSetInfo (base name: "widgetParticipantSetInfo")', function() {
      // uncomment below and update the code to test the property widgetParticipantSetInfo
      //var instane = new SwaggerJsClient.WidgetCreationInfoV6();
      //expect(instance).to.be();
    });

  });

}));
