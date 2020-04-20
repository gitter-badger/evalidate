"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.handleStringValidation = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _constants = require("../utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Handle String Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
var handleStringValidation = function handleStringValidation(field, validator, value) {
  var errors = [];

  if (value && isString(value)) {
    switch (validator.type) {
      case _constants.STRING_VALIDATOR_TYPES.EMAIL:
        if (!_validator["default"].isEmail(value)) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.STRING_VALIDATOR_TYPES.EQUAL:
        if (!_validator["default"].equals(value, validator.value)) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.STRING_VALIDATOR_TYPES.IN:
        if (!validator.value.includes(value)) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.STRING_VALIDATOR_TYPES.MAXLENGTH:
        if (value.length > validator.value) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.STRING_VALIDATOR_TYPES.MINLENGTH:
        if (value.length < validator.value) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;
    }
  } else if (value && !isString(value)) {
    if (validator.type == _constants.STRING_VALIDATOR_TYPES.TYPE) {
      errors.push({
        field: field,
        message: validator.message
      });
    }
  } else {
    if (validator.type == _constants.STRING_VALIDATOR_TYPES.REQUIRED) {
      errors.push({
        field: field,
        message: validator.message
      });
    }
  }

  return errors;
};
/**
 * Check if object is string
 * 
 * @param {Object} value 
 */


exports.handleStringValidation = handleStringValidation;

var isString = function isString(value) {
  return typeof value === 'string' || value instanceof String;
};

exports.isString = isString;