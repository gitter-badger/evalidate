"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = exports.handleDateValidation = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("../utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Handle Date Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
var handleDateValidation = function handleDateValidation(field, validator, value) {
  var errors = [];

  if (value && isDate(value)) {
    switch (validator.type) {
      case _constants.DATE_VALIDATOR_TYPES.EQUAL:
        if (value !== validator.value) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.DATE_VALIDATOR_TYPES.AFTER:
        if ((0, _moment["default"])(value).isBefore((0, _moment["default"])(validator.value))) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.DATE_VALIDATOR_TYPES.BEFORE:
        if ((0, _moment["default"])(value).isAfter((0, _moment["default"])(validator.value))) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;
    }
  } else if (value && !isDate(value)) {
    if (validator.type == _constants.DATE_VALIDATOR_TYPES.TYPE) {
      errors.push({
        field: field,
        message: validator.message
      });
    }
  } else {
    if (validator.type == _constants.DATE_VALIDATOR_TYPES.REQUIRED) {
      errors.push({
        field: field,
        message: validator.message
      });
    }
  }

  return errors;
};
/**
 * Check if object is date
 * 
 * @param {Object} value 
 */


exports.handleDateValidation = handleDateValidation;

var isDate = function isDate(value) {
  return value && (0, _moment["default"])(value).isValid();
};

exports.isDate = isDate;