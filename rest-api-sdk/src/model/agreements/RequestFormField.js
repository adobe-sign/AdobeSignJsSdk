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
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/agreements/FormFieldCondition'), require('../../model/agreements/FormFieldLocation'));

}(function(ApiClient, FormFieldCondition, FormFieldLocation) {
  'use strict';


  /**
   * @module model/agreements/RequestFormField
   * @version 1.0.0
   */
  /**
   * Constructs a new <code>RequestFormField</code>.
   * @alias module:model/agreements/RequestFormField
   * @class
   */
  var RequestFormField = function() {
    var _this = this;


    _this.alignment = undefined;

    _this.anyOrAll = undefined;

    _this.backgroundColor = undefined;

    _this.borderColor = undefined;

    _this.borderStyle = undefined;

    _this.borderWidth = undefined;

    _this.calculatedExpression = undefined;

    _this.conditions = undefined;

    _this.contentType = undefined;

    _this.defaultValue = undefined;

    _this.displayFormat = undefined;

    _this.displayFormatType = undefined;

    _this.displayLabel = undefined;

    _this.fontColor = undefined;

    _this.fontName = undefined;

    _this.fontSize = undefined;

    _this.format = undefined;

    _this.formatData = undefined;

    _this.hidden = undefined;

    _this.hiddenOptions = undefined;

    _this.inputType = undefined;

    _this.locations = undefined;

    _this.masked = undefined;

    _this.maskingText = undefined;

    _this.maxLength = undefined;

    _this.maxNumberValue = undefined;

    _this.minLength = undefined;

    _this.minNumberValue = undefined;

    _this.name = undefined;

    _this.radioCheckType = undefined;

    _this.readOnly = undefined;

    _this.recipientIndex = undefined;

    _this.regularExpression = undefined;

    _this.required = undefined;

    _this.showOrHide = undefined;

    _this.specialErrMsg = undefined;

    _this.specialFormula = undefined;

    _this.tooltip = undefined;

    _this.visibleOptions = undefined;

   /**
    * Alignment of the text.
    * @function getAlignment
    * @return  Alignment of the text. { String }
    * @instance
    */
    _this.getAlignment = function() {
      return _this.alignment;
    };

   /**
    * Alignment of the text.
    * @function setAlignment
    * @param alignment { String } Alignment of the text.
    * @instance
    */
    _this.setAlignment = function(alignment) {
      _this.alignment = alignment;
    };

   /**
    * It indicates if any one of the conditions or all of them have to be true.
    * @function getAnyOrAll
    * @return  It indicates if any one of the conditions or all of them have to be true. { String }
    * @instance
    */
    _this.getAnyOrAll = function() {
      return _this.anyOrAll;
    };

   /**
    * It indicates if any one of the conditions or all of them have to be true.
    * @function setAnyOrAll
    * @param anyOrAll { String } It indicates if any one of the conditions or all of them have to be true.
    * @instance
    */
    _this.setAnyOrAll = function(anyOrAll) {
      _this.anyOrAll = anyOrAll;
    };

   /**
    * Background color of the form field in RGB or HEX format
    * @function getBackgroundColor
    * @return  Background color of the form field in RGB or HEX format { String }
    * @instance
    */
    _this.getBackgroundColor = function() {
      return _this.backgroundColor;
    };

   /**
    * Background color of the form field in RGB or HEX format
    * @function setBackgroundColor
    * @param backgroundColor { String } Background color of the form field in RGB or HEX format
    * @instance
    */
    _this.setBackgroundColor = function(backgroundColor) {
      _this.backgroundColor = backgroundColor;
    };

   /**
    * Color of the border of the field in RGB or HEX format
    * @function getBorderColor
    * @return  Color of the border of the field in RGB or HEX format { String }
    * @instance
    */
    _this.getBorderColor = function() {
      return _this.borderColor;
    };

   /**
    * Color of the border of the field in RGB or HEX format
    * @function setBorderColor
    * @param borderColor { String } Color of the border of the field in RGB or HEX format
    * @instance
    */
    _this.setBorderColor = function(borderColor) {
      _this.borderColor = borderColor;
    };

   /**
    * Style of the border of the field.
    * @function getBorderStyle
    * @return  Style of the border of the field. { String }
    * @instance
    */
    _this.getBorderStyle = function() {
      return _this.borderStyle;
    };

   /**
    * Style of the border of the field.
    * @function setBorderStyle
    * @param borderStyle { String } Style of the border of the field.
    * @instance
    */
    _this.setBorderStyle = function(borderStyle) {
      _this.borderStyle = borderStyle;
    };

   /**
    * Width of the border of the field in pixels
    * @function getBorderWidth
    * @return  Width of the border of the field in pixels { Number }
    * @instance
    */
    _this.getBorderWidth = function() {
      return _this.borderWidth;
    };

   /**
    * Width of the border of the field in pixels
    * @function setBorderWidth
    * @param borderWidth { Number } Width of the border of the field in pixels
    * @instance
    */
    _this.setBorderWidth = function(borderWidth) {
      _this.borderWidth = borderWidth;
    };

   /**
    * Expression to calculate value of the form field
    * @function getCalculatedExpression
    * @return  Expression to calculate value of the form field { String }
    * @instance
    */
    _this.getCalculatedExpression = function() {
      return _this.calculatedExpression;
    };

   /**
    * Expression to calculate value of the form field
    * @function setCalculatedExpression
    * @param calculatedExpression { String } Expression to calculate value of the form field
    * @instance
    */
    _this.setCalculatedExpression = function(calculatedExpression) {
      _this.calculatedExpression = calculatedExpression;
    };

   /**
    * Conditions to be evaluated which decides the visibility of the form field in association with showOrHide property
    * @function getConditions
    * @return  Conditions to be evaluated which decides the visibility of the form field in association with showOrHide property { Array }
    * @instance
    */
    _this.getConditions = function() {
      return _this.conditions;
    };

   /**
    * Conditions to be evaluated which decides the visibility of the form field in association with showOrHide property
    * @function setConditions
    * @param conditions { Array } Conditions to be evaluated which decides the visibility of the form field in association with showOrHide property
    * @instance
    */
    _this.setConditions = function(conditions) {
      _this.conditions = conditions;
    };

   /**
    * Content Type of the form field.
    * @function getContentType
    * @return  Content Type of the form field. { String }
    * @instance
    */
    _this.getContentType = function() {
      return _this.contentType;
    };

   /**
    * Content Type of the form field.
    * @function setContentType
    * @param contentType { String } Content Type of the form field.
    * @instance
    */
    _this.setContentType = function(contentType) {
      _this.contentType = contentType;
    };

   /**
    * Default value of the form field
    * @function getDefaultValue
    * @return  Default value of the form field { String }
    * @instance
    */
    _this.getDefaultValue = function() {
      return _this.defaultValue;
    };

   /**
    * Default value of the form field
    * @function setDefaultValue
    * @param defaultValue { String } Default value of the form field
    * @instance
    */
    _this.setDefaultValue = function(defaultValue) {
      _this.defaultValue = defaultValue;
    };

   /**
    * Format of the value of the field to be displayed based on the displayFormatType property.
    * @function getDisplayFormat
    * @return  Format of the value of the field to be displayed based on the displayFormatType property. { String }
    * @instance
    */
    _this.getDisplayFormat = function() {
      return _this.displayFormat;
    };

   /**
    * Format of the value of the field to be displayed based on the displayFormatType property.
    * @function setDisplayFormat
    * @param displayFormat { String } Format of the value of the field to be displayed based on the displayFormatType property.
    * @instance
    */
    _this.setDisplayFormat = function(displayFormat) {
      _this.displayFormat = displayFormat;
    };

   /**
    * Format type of the text field.
    * @function getDisplayFormatType
    * @return  Format type of the text field. { String }
    * @instance
    */
    _this.getDisplayFormatType = function() {
      return _this.displayFormatType;
    };

   /**
    * Format type of the text field.
    * @function setDisplayFormatType
    * @param displayFormatType { String } Format type of the text field.
    * @instance
    */
    _this.setDisplayFormatType = function(displayFormatType) {
      _this.displayFormatType = displayFormatType;
    };

   /**
    * Display label attached to the field
    * @function getDisplayLabel
    * @return  Display label attached to the field { String }
    * @instance
    */
    _this.getDisplayLabel = function() {
      return _this.displayLabel;
    };

   /**
    * Display label attached to the field
    * @function setDisplayLabel
    * @param displayLabel { String } Display label attached to the field
    * @instance
    */
    _this.setDisplayLabel = function(displayLabel) {
      _this.displayLabel = displayLabel;
    };

   /**
    * Font color of the form field in RGB or HEX format
    * @function getFontColor
    * @return  Font color of the form field in RGB or HEX format { String }
    * @instance
    */
    _this.getFontColor = function() {
      return _this.fontColor;
    };

   /**
    * Font color of the form field in RGB or HEX format
    * @function setFontColor
    * @param fontColor { String } Font color of the form field in RGB or HEX format
    * @instance
    */
    _this.setFontColor = function(fontColor) {
      _this.fontColor = fontColor;
    };

   /**
    * Font name of the form field
    * @function getFontName
    * @return  Font name of the form field { String }
    * @instance
    */
    _this.getFontName = function() {
      return _this.fontName;
    };

   /**
    * Font name of the form field
    * @function setFontName
    * @param fontName { String } Font name of the form field
    * @instance
    */
    _this.setFontName = function(fontName) {
      _this.fontName = fontName;
    };

   /**
    * Font size of the form field in points
    * @function getFontSize
    * @return  Font size of the form field in points { Number }
    * @instance
    */
    _this.getFontSize = function() {
      return _this.fontSize;
    };

   /**
    * Font size of the form field in points
    * @function setFontSize
    * @param fontSize { Number } Font size of the form field in points
    * @instance
    */
    _this.setFontSize = function(fontSize) {
      _this.fontSize = fontSize;
    };

   /**
    * Format of the form field
    * @function getFormat
    * @return  Format of the form field { String }
    * @instance
    */
    _this.getFormat = function() {
      return _this.format;
    };

   /**
    * Format of the form field
    * @function setFormat
    * @param format { String } Format of the form field
    * @instance
    */
    _this.setFormat = function(format) {
      _this.format = format;
    };

   /**
    * The format of data in text field
    * @function getFormatData
    * @return  The format of data in text field { String }
    * @instance
    */
    _this.getFormatData = function() {
      return _this.formatData;
    };

   /**
    * The format of data in text field
    * @function setFormatData
    * @param formatData { String } The format of data in text field
    * @instance
    */
    _this.setFormatData = function(formatData) {
      _this.formatData = formatData;
    };

   /**
    * true if the field is hidden, else false
    * @function getHidden
    * @return  true if the field is hidden, else false { Boolean }
    * @instance
    */
    _this.getHidden = function() {
      return _this.hidden;
    };

   /**
    * true if the field is hidden, else false
    * @function setHidden
    * @param hidden { Boolean } true if the field is hidden, else false
    * @instance
    */
    _this.setHidden = function(hidden) {
      _this.hidden = hidden;
    };

   /**
    * Text values which are hidden in a drop down form field
    * @function getHiddenOptions
    * @return  Text values which are hidden in a drop down form field { Array }
    * @instance
    */
    _this.getHiddenOptions = function() {
      return _this.hiddenOptions;
    };

   /**
    * Text values which are hidden in a drop down form field
    * @function setHiddenOptions
    * @param hiddenOptions { Array } Text values which are hidden in a drop down form field
    * @instance
    */
    _this.setHiddenOptions = function(hiddenOptions) {
      _this.hiddenOptions = hiddenOptions;
    };

   /**
    * Input type of the form field
    * @function getInputType
    * @return  Input type of the form field { String }
    * @instance
    */
    _this.getInputType = function() {
      return _this.inputType;
    };

   /**
    * Input type of the form field
    * @function setInputType
    * @param inputType { String } Input type of the form field
    * @instance
    */
    _this.setInputType = function(inputType) {
      _this.inputType = inputType;
    };

   /**
    * All locations in a document where the form field is placed
    * @function getLocations
    * @return  All locations in a document where the form field is placed { Array }
    * @instance
    */
    _this.getLocations = function() {
      return _this.locations;
    };

   /**
    * All locations in a document where the form field is placed
    * @function setLocations
    * @param locations { Array } All locations in a document where the form field is placed
    * @instance
    */
    _this.setLocations = function(locations) {
      _this.locations = locations;
    };

   /**
    * true if the input entered by the signer has to be masked (like password), else false
    * @function getMasked
    * @return  true if the input entered by the signer has to be masked (like password), else false { Boolean }
    * @instance
    */
    _this.getMasked = function() {
      return _this.masked;
    };

   /**
    * true if the input entered by the signer has to be masked (like password), else false
    * @function setMasked
    * @param masked { Boolean } true if the input entered by the signer has to be masked (like password), else false
    * @instance
    */
    _this.setMasked = function(masked) {
      _this.masked = masked;
    };

   /**
    * Text to mask the masked form field
    * @function getMaskingText
    * @return  Text to mask the masked form field { String }
    * @instance
    */
    _this.getMaskingText = function() {
      return _this.maskingText;
    };

   /**
    * Text to mask the masked form field
    * @function setMaskingText
    * @param maskingText { String } Text to mask the masked form field
    * @instance
    */
    _this.setMaskingText = function(maskingText) {
      _this.maskingText = maskingText;
    };

   /**
    * Maximum length of the input text field in terms of no. of characters
    * @function getMaxLength
    * @return  Maximum length of the input text field in terms of no. of characters { Integer }
    * @instance
    */
    _this.getMaxLength = function() {
      return _this.maxLength;
    };

   /**
    * Maximum length of the input text field in terms of no. of characters
    * @function setMaxLength
    * @param maxLength { Integer } Maximum length of the input text field in terms of no. of characters
    * @instance
    */
    _this.setMaxLength = function(maxLength) {
      _this.maxLength = maxLength;
    };

   /**
    * Upper bound of the number that can be entered by the signer
    * @function getMaxNumberValue
    * @return  Upper bound of the number that can be entered by the signer { Number }
    * @instance
    */
    _this.getMaxNumberValue = function() {
      return _this.maxNumberValue;
    };

   /**
    * Upper bound of the number that can be entered by the signer
    * @function setMaxNumberValue
    * @param maxNumberValue { Number } Upper bound of the number that can be entered by the signer
    * @instance
    */
    _this.setMaxNumberValue = function(maxNumberValue) {
      _this.maxNumberValue = maxNumberValue;
    };

   /**
    * Minimum length of the input text field in terms of no. of characters
    * @function getMinLength
    * @return  Minimum length of the input text field in terms of no. of characters { Integer }
    * @instance
    */
    _this.getMinLength = function() {
      return _this.minLength;
    };

   /**
    * Minimum length of the input text field in terms of no. of characters
    * @function setMinLength
    * @param minLength { Integer } Minimum length of the input text field in terms of no. of characters
    * @instance
    */
    _this.setMinLength = function(minLength) {
      _this.minLength = minLength;
    };

   /**
    * Lower bound of the number that can be entered by the signer
    * @function getMinNumberValue
    * @return  Lower bound of the number that can be entered by the signer { Number }
    * @instance
    */
    _this.getMinNumberValue = function() {
      return _this.minNumberValue;
    };

   /**
    * Lower bound of the number that can be entered by the signer
    * @function setMinNumberValue
    * @param minNumberValue { Number } Lower bound of the number that can be entered by the signer
    * @instance
    */
    _this.setMinNumberValue = function(minNumberValue) {
      _this.minNumberValue = minNumberValue;
    };

   /**
    * The name of the form field
    * @function getName
    * @return  The name of the form field { String }
    * @instance
    */
    _this.getName = function() {
      return _this.name;
    };

   /**
    * The name of the form field
    * @function setName
    * @param name { String } The name of the form field
    * @instance
    */
    _this.setName = function(name) {
      _this.name = name;
    };

   /**
    * The type of radio button (if field is radio button, identified by inputType).
    * @function getRadioCheckType
    * @return  The type of radio button (if field is radio button, identified by inputType). { String }
    * @instance
    */
    _this.getRadioCheckType = function() {
      return _this.radioCheckType;
    };

   /**
    * The type of radio button (if field is radio button, identified by inputType).
    * @function setRadioCheckType
    * @param radioCheckType { String } The type of radio button (if field is radio button, identified by inputType).
    * @instance
    */
    _this.setRadioCheckType = function(radioCheckType) {
      _this.radioCheckType = radioCheckType;
    };

   /**
    * true if it is a read-only field, else false
    * @function getReadOnly
    * @return  true if it is a read-only field, else false { Boolean }
    * @instance
    */
    _this.getReadOnly = function() {
      return _this.readOnly;
    };

   /**
    * true if it is a read-only field, else false
    * @function setReadOnly
    * @param readOnly { Boolean } true if it is a read-only field, else false
    * @instance
    */
    _this.setReadOnly = function(readOnly) {
      _this.readOnly = readOnly;
    };

   /**
    * Index of recipient, starting from 1, in recipients list passed in the request
    * @function getRecipientIndex
    * @return  Index of recipient, starting from 1, in recipients list passed in the request { Integer }
    * @instance
    */
    _this.getRecipientIndex = function() {
      return _this.recipientIndex;
    };

   /**
    * Index of recipient, starting from 1, in recipients list passed in the request
    * @function setRecipientIndex
    * @param recipientIndex { Integer } Index of recipient, starting from 1, in recipients list passed in the request
    * @instance
    */
    _this.setRecipientIndex = function(recipientIndex) {
      _this.recipientIndex = recipientIndex;
    };

   /**
    * Regular expression validation of the form field
    * @function getRegularExpression
    * @return  Regular expression validation of the form field { String }
    * @instance
    */
    _this.getRegularExpression = function() {
      return _this.regularExpression;
    };

   /**
    * Regular expression validation of the form field
    * @function setRegularExpression
    * @param regularExpression { String } Regular expression validation of the form field
    * @instance
    */
    _this.setRegularExpression = function(regularExpression) {
      _this.regularExpression = regularExpression;
    };

   /**
    * true if it is a mandatory field to be filled by the signer, else false
    * @function getRequired
    * @return  true if it is a mandatory field to be filled by the signer, else false { Boolean }
    * @instance
    */
    _this.getRequired = function() {
      return _this.required;
    };

   /**
    * true if it is a mandatory field to be filled by the signer, else false
    * @function setRequired
    * @param required { Boolean } true if it is a mandatory field to be filled by the signer, else false
    * @instance
    */
    _this.setRequired = function(required) {
      _this.required = required;
    };

   /**
    * Action to show/hide the form field is to be taken on the basis of evaluation of conditions.
    * @function getShowOrHide
    * @return  Action to show/hide the form field is to be taken on the basis of evaluation of conditions. { String }
    * @instance
    */
    _this.getShowOrHide = function() {
      return _this.showOrHide;
    };

   /**
    * Action to show/hide the form field is to be taken on the basis of evaluation of conditions.
    * @function setShowOrHide
    * @param showOrHide { String } Action to show/hide the form field is to be taken on the basis of evaluation of conditions.
    * @instance
    */
    _this.setShowOrHide = function(showOrHide) {
      _this.showOrHide = showOrHide;
    };

   /**
    * Error message to be shown to the signer if filled value does not match the validations of the form field
    * @function getSpecialErrMsg
    * @return  Error message to be shown to the signer if filled value does not match the validations of the form field { String }
    * @instance
    */
    _this.getSpecialErrMsg = function() {
      return _this.specialErrMsg;
    };

   /**
    * Error message to be shown to the signer if filled value does not match the validations of the form field
    * @function setSpecialErrMsg
    * @param specialErrMsg { String } Error message to be shown to the signer if filled value does not match the validations of the form field
    * @instance
    */
    _this.setSpecialErrMsg = function(specialErrMsg) {
      _this.specialErrMsg = specialErrMsg;
    };

   /**
    * Formula used to calculate the value of the form field
    * @function getSpecialFormula
    * @return  Formula used to calculate the value of the form field { String }
    * @instance
    */
    _this.getSpecialFormula = function() {
      return _this.specialFormula;
    };

   /**
    * Formula used to calculate the value of the form field
    * @function setSpecialFormula
    * @param specialFormula { String } Formula used to calculate the value of the form field
    * @instance
    */
    _this.setSpecialFormula = function(specialFormula) {
      _this.specialFormula = specialFormula;
    };

   /**
    * Text that appears while hovering over the field
    * @function getTooltip
    * @return  Text that appears while hovering over the field { String }
    * @instance
    */
    _this.getTooltip = function() {
      return _this.tooltip;
    };

   /**
    * Text that appears while hovering over the field
    * @function setTooltip
    * @param tooltip { String } Text that appears while hovering over the field
    * @instance
    */
    _this.setTooltip = function(tooltip) {
      _this.tooltip = tooltip;
    };

   /**
    * Text values which are visible in a drop down form field
    * @function getVisibleOptions
    * @return  Text values which are visible in a drop down form field { Array }
    * @instance
    */
    _this.getVisibleOptions = function() {
      return _this.visibleOptions;
    };

   /**
    * Text values which are visible in a drop down form field
    * @function setVisibleOptions
    * @param visibleOptions { Array } Text values which are visible in a drop down form field
    * @instance
    */
    _this.setVisibleOptions = function(visibleOptions) {
      _this.visibleOptions = visibleOptions;
    };

  };

  /**
   * @private
   * Constructs a <code>RequestFormField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/RequestFormField} obj Optional instance to populate.
   * @return {module:model/agreements/RequestFormField} The populated <code>RequestFormField</code> instance.
   */
  RequestFormField.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new RequestFormField();

      if (data.hasOwnProperty('alignment')) {
        obj.setAlignment(data.alignment);
      }
      if (data.hasOwnProperty('anyOrAll')) {
        obj.setAnyOrAll(data.anyOrAll);
      }
      if (data.hasOwnProperty('backgroundColor')) {
        obj.setBackgroundColor(data.backgroundColor);
      }
      if (data.hasOwnProperty('borderColor')) {
        obj.setBorderColor(data.borderColor);
      }
      if (data.hasOwnProperty('borderStyle')) {
        obj.setBorderStyle(data.borderStyle);
      }
      if (data.hasOwnProperty('borderWidth')) {
        obj.setBorderWidth(data.borderWidth);
      }
      if (data.hasOwnProperty('calculatedExpression')) {
        obj.setCalculatedExpression(data.calculatedExpression);
      }
      if (data.hasOwnProperty('conditions')) {
        obj.setConditions(ApiClient.convertToType(data.conditions,[FormFieldCondition]));
      }
      if (data.hasOwnProperty('contentType')) {
        obj.setContentType(data.contentType);
      }
      if (data.hasOwnProperty('defaultValue')) {
        obj.setDefaultValue(data.defaultValue);
      }
      if (data.hasOwnProperty('displayFormat')) {
        obj.setDisplayFormat(data.displayFormat);
      }
      if (data.hasOwnProperty('displayFormatType')) {
        obj.setDisplayFormatType(data.displayFormatType);
      }
      if (data.hasOwnProperty('displayLabel')) {
        obj.setDisplayLabel(data.displayLabel);
      }
      if (data.hasOwnProperty('fontColor')) {
        obj.setFontColor(data.fontColor);
      }
      if (data.hasOwnProperty('fontName')) {
        obj.setFontName(data.fontName);
      }
      if (data.hasOwnProperty('fontSize')) {
        obj.setFontSize(data.fontSize);
      }
      if (data.hasOwnProperty('format')) {
        obj.setFormat(data.format);
      }
      if (data.hasOwnProperty('formatData')) {
        obj.setFormatData(data.formatData);
      }
      if (data.hasOwnProperty('hidden')) {
        obj.setHidden(data.hidden);
      }
      if (data.hasOwnProperty('hiddenOptions')) {
        obj.setHiddenOptions(data.hiddenOptions);
      }
      if (data.hasOwnProperty('inputType')) {
        obj.setInputType(data.inputType);
      }
      if (data.hasOwnProperty('locations')) {
        obj.setLocations(ApiClient.convertToType(data.locations,[FormFieldLocation]));
      }
      if (data.hasOwnProperty('masked')) {
        obj.setMasked(data.masked);
      }
      if (data.hasOwnProperty('maskingText')) {
        obj.setMaskingText(data.maskingText);
      }
      if (data.hasOwnProperty('maxLength')) {
        obj.setMaxLength(data.maxLength);
      }
      if (data.hasOwnProperty('maxNumberValue')) {
        obj.setMaxNumberValue(data.maxNumberValue);
      }
      if (data.hasOwnProperty('minLength')) {
        obj.setMinLength(data.minLength);
      }
      if (data.hasOwnProperty('minNumberValue')) {
        obj.setMinNumberValue(data.minNumberValue);
      }
      if (data.hasOwnProperty('name')) {
        obj.setName(data.name);
      }
      if (data.hasOwnProperty('radioCheckType')) {
        obj.setRadioCheckType(data.radioCheckType);
      }
      if (data.hasOwnProperty('readOnly')) {
        obj.setReadOnly(data.readOnly);
      }
      if (data.hasOwnProperty('recipientIndex')) {
        obj.setRecipientIndex(data.recipientIndex);
      }
      if (data.hasOwnProperty('regularExpression')) {
        obj.setRegularExpression(data.regularExpression);
      }
      if (data.hasOwnProperty('required')) {
        obj.setRequired(data.required);
      }
      if (data.hasOwnProperty('showOrHide')) {
        obj.setShowOrHide(data.showOrHide);
      }
      if (data.hasOwnProperty('specialErrMsg')) {
        obj.setSpecialErrMsg(data.specialErrMsg);
      }
      if (data.hasOwnProperty('specialFormula')) {
        obj.setSpecialFormula(data.specialFormula);
      }
      if (data.hasOwnProperty('tooltip')) {
        obj.setTooltip(data.tooltip);
      }
      if (data.hasOwnProperty('visibleOptions')) {
        obj.setVisibleOptions(data.visibleOptions);
      }
    }
    return obj;
  };

  /**
   * Allowed values for the <code>alignment</code> property.
   * @enum {String}
   * @readonly
   */
RequestFormField.AlignmentEnum = {
  
  
    /**
     * value: LEFT
     * @const
     */
    LEFT: "LEFT",
    
  
    /**
     * value: RIGHT
     * @const
     */
    RIGHT: "RIGHT",
    
  
    /**
     * value: CENTER
     * @const
     */
    CENTER: "CENTER"
  
  
  };
  /**
   * Allowed values for the <code>anyOrAll</code> property.
   * @enum {String}
   * @readonly
   */
RequestFormField.AnyOrAllEnum = {
  
  
    /**
     * value: ALL
     * @const
     */
    ALL: "ALL",
    
  
    /**
     * value: ANY
     * @const
     */
    ANY: "ANY"
  
  
  };
  /**
   * Allowed values for the <code>borderStyle</code> property.
   * @enum {String}
   * @readonly
   */
RequestFormField.BorderStyleEnum = {
  
  
    /**
     * value: SOLID
     * @const
     */
    SOLID: "SOLID",
    
  
    /**
     * value: DASHED
     * @const
     */
    DASHED: "DASHED",
    
  
    /**
     * value: BEVELED
     * @const
     */
    BEVELED: "BEVELED",
    
  
    /**
     * value: INSET
     * @const
     */
    INSET: "INSET",
    
  
    /**
     * value: UNDERLINE
     * @const
     */
    UNDERLINE: "UNDERLINE"
  
  
  };
  /**
   * Allowed values for the <code>contentType</code> property.
   * @enum {String}
   * @readonly
   */
RequestFormField.ContentTypeEnum = {
  
  
    /**
     * value: DATA
     * @const
     */
    DATA: "DATA",
    
  
    /**
     * value: SIGNATURE_BLOCK
     * @const
     */
    SIGNATURE_BLOCK: "SIGNATURE_BLOCK",
    
  
    /**
     * value: SIGNATURE
     * @const
     */
    SIGNATURE: "SIGNATURE",
    
  
    /**
     * value: SIGNER_NAME
     * @const
     */
    SIGNER_NAME: "SIGNER_NAME",
    
  
    /**
     * value: SIGNER_FIRST_NAME
     * @const
     */
    SIGNER_FIRST_NAME: "SIGNER_FIRST_NAME",
    
  
    /**
     * value: SIGNER_LAST_NAME
     * @const
     */
    SIGNER_LAST_NAME: "SIGNER_LAST_NAME",
    
  
    /**
     * value: SIGNER_INITIALS
     * @const
     */
    SIGNER_INITIALS: "SIGNER_INITIALS",
    
  
    /**
     * value: SIGNER_EMAIL
     * @const
     */
    SIGNER_EMAIL: "SIGNER_EMAIL",
    
  
    /**
     * value: SIGNER_TITLE
     * @const
     */
    SIGNER_TITLE: "SIGNER_TITLE",
    
  
    /**
     * value: SIGNER_COMPANY
     * @const
     */
    SIGNER_COMPANY: "SIGNER_COMPANY",
    
  
    /**
     * value: SIGNATURE_DATE
     * @const
     */
    SIGNATURE_DATE: "SIGNATURE_DATE",
    
  
    /**
     * value: AGREEMENT_NAME
     * @const
     */
    AGREEMENT_NAME: "AGREEMENT_NAME",
    
  
    /**
     * value: AGREEMENT_MESSAGE
     * @const
     */
    AGREEMENT_MESSAGE: "AGREEMENT_MESSAGE",
    
  
    /**
     * value: TRANSACTION_ID
     * @const
     */
    TRANSACTION_ID: "TRANSACTION_ID",
    
  
    /**
     * value: SIGNATURE_STAMP
     * @const
     */
    SIGNATURE_STAMP: "SIGNATURE_STAMP",
    
  
    /**
     * value: CALC
     * @const
     */
    CALC: "CALC"
  
  
  };
  /**
   * Allowed values for the <code>displayFormatType</code> property.
   * @enum {String}
   * @readonly
   */
RequestFormField.DisplayFormatTypeEnum = {
  
  
    /**
     * value: DEFAULT
     * @const
     */
    DEFAULT: "DEFAULT",
    
  
    /**
     * value: DATE
     * @const
     */
    DATE: "DATE",
    
  
    /**
     * value: NUMBER
     * @const
     */
    NUMBER: "NUMBER"
  
  
  };
  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
RequestFormField.FormatEnum = {
  
  
    /**
     * value: CUSTOM
     * @const
     */
    CUSTOM: "CUSTOM",
    
  
    /**
     * value: DATE
     * @const
     */
    DATE: "DATE",
    
  
    /**
     * value: DATE_CUSTOM
     * @const
     */
    DATE_CUSTOM: "DATE_CUSTOM",
    
  
    /**
     * value: DATE_DD_MM_YY
     * @const
     */
    DATE_DD_MM_YY: "DATE_DD_MM_YY",
    
  
    /**
     * value: DATE_DD_MM_YYYY
     * @const
     */
    DATE_DD_MM_YYYY: "DATE_DD_MM_YYYY",
    
  
    /**
     * value: DATE_MM_DD_YY
     * @const
     */
    DATE_MM_DD_YY: "DATE_MM_DD_YY",
    
  
    /**
     * value: DATE_MM_DD_YYYY
     * @const
     */
    DATE_MM_DD_YYYY: "DATE_MM_DD_YYYY",
    
  
    /**
     * value: DATE_MM_YY
     * @const
     */
    DATE_MM_YY: "DATE_MM_YY",
    
  
    /**
     * value: EMAIL
     * @const
     */
    EMAIL: "EMAIL",
    
  
    /**
     * value: FORMULA
     * @const
     */
    FORMULA: "FORMULA",
    
  
    /**
     * value: MONEY
     * @const
     */
    MONEY: "MONEY",
    
  
    /**
     * value: MONEY_UK
     * @const
     */
    MONEY_UK: "MONEY_UK",
    
  
    /**
     * value: NONE
     * @const
     */
    NONE: "NONE",
    
  
    /**
     * value: NUMBER
     * @const
     */
    NUMBER: "NUMBER",
    
  
    /**
     * value: PERCENT
     * @const
     */
    PERCENT: "PERCENT",
    
  
    /**
     * value: PHONE
     * @const
     */
    PHONE: "PHONE",
    
  
    /**
     * value: PHONE_UK
     * @const
     */
    PHONE_UK: "PHONE_UK",
    
  
    /**
     * value: SOCIAL_SEC
     * @const
     */
    SOCIAL_SEC: "SOCIAL_SEC",
    
  
    /**
     * value: SPECIAL
     * @const
     */
    SPECIAL: "SPECIAL",
    
  
    /**
     * value: STRING
     * @const
     */
    STRING: "STRING",
    
  
    /**
     * value: STRING_ALPHA
     * @const
     */
    STRING_ALPHA: "STRING_ALPHA",
    
  
    /**
     * value: STRING_ALPHANUM
     * @const
     */
    STRING_ALPHANUM: "STRING_ALPHANUM",
    
  
    /**
     * value: STRING_NUM
     * @const
     */
    STRING_NUM: "STRING_NUM",
    
  
    /**
     * value: TIME
     * @const
     */
    TIME: "TIME",
    
  
    /**
     * value: XFA_PICTURE
     * @const
     */
    XFA_PICTURE: "XFA_PICTURE",
    
  
    /**
     * value: ZIP
     * @const
     */
    ZIP: "ZIP",
    
  
    /**
     * value: ZIP4
     * @const
     */
    ZIP4: "ZIP4",
    
  
    /**
     * value: ZIP_UK
     * @const
     */
    ZIP_UK: "ZIP_UK"
  
  
  };
  /**
   * Allowed values for the <code>inputType</code> property.
   * @enum {String}
   * @readonly
   */
RequestFormField.InputTypeEnum = {
  
  
    /**
     * value: TEXT_FIELD
     * @const
     */
    TEXT_FIELD: "TEXT_FIELD",
    
  
    /**
     * value: MULTILINE
     * @const
     */
    MULTILINE: "MULTILINE",
    
  
    /**
     * value: PASSWORD
     * @const
     */
    PASSWORD: "PASSWORD",
    
  
    /**
     * value: RADIO
     * @const
     */
    RADIO: "RADIO",
    
  
    /**
     * value: CHECKBOX
     * @const
     */
    CHECKBOX: "CHECKBOX",
    
  
    /**
     * value: DROP_DOWN
     * @const
     */
    DROP_DOWN: "DROP_DOWN",
    
  
    /**
     * value: LISTBOX
     * @const
     */
    LISTBOX: "LISTBOX",
    
  
    /**
     * value: SIGNATURE
     * @const
     */
    SIGNATURE: "SIGNATURE",
    
  
    /**
     * value: PDF_SIGNATURE
     * @const
     */
    PDF_SIGNATURE: "PDF_SIGNATURE",
    
  
    /**
     * value: BUTTON
     * @const
     */
    BUTTON: "BUTTON",
    
  
    /**
     * value: BLOCK
     * @const
     */
    BLOCK: "BLOCK",
    
  
    /**
     * value: FILE_CHOOSER
     * @const
     */
    FILE_CHOOSER: "FILE_CHOOSER",
    
  
    /**
     * value: COMB
     * @const
     */
    COMB: "COMB",
    
  
    /**
     * value: UNSUPPORTED
     * @const
     */
    UNSUPPORTED: "UNSUPPORTED"
  
  
  };
  /**
   * Allowed values for the <code>radioCheckType</code> property.
   * @enum {String}
   * @readonly
   */
RequestFormField.RadioCheckTypeEnum = {
  
  
    /**
     * value: CIRCLE
     * @const
     */
    CIRCLE: "CIRCLE",
    
  
    /**
     * value: CHECK
     * @const
     */
    CHECK: "CHECK",
    
  
    /**
     * value: CROSS
     * @const
     */
    CROSS: "CROSS",
    
  
    /**
     * value: DIAMOND
     * @const
     */
    DIAMOND: "DIAMOND",
    
  
    /**
     * value: SQUARE
     * @const
     */
    SQUARE: "SQUARE",
    
  
    /**
     * value: STAR
     * @const
     */
    STAR: "STAR"
  
  
  };
  /**
   * Allowed values for the <code>showOrHide</code> property.
   * @enum {String}
   * @readonly
   */
RequestFormField.ShowOrHideEnum = {
  
  
    /**
     * value: SHOW
     * @const
     */
    SHOW: "SHOW",
    
  
    /**
     * value: HIDE
     * @const
     */
    HIDE: "HIDE",
    
  
    /**
     * value: DISABLE
     * @const
     */
    DISABLE: "DISABLE",
    
  
    /**
     * value: ENABLE
     * @const
     */
    ENABLE: "ENABLE"
  
  
  };

  return RequestFormField;
}));


