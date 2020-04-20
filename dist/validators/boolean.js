"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = exports.handleBooleanValidation = void 0;

var _constants = require("../utils/constants");

/**
 * Handle Boolean Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
var handleBooleanValidation = function handleBooleanValidation(field, validator, value) {
  var errors = [];

  if (value !== null && value !== undefined && isBoolean(value)) {
    switch (validator.type) {
      case _constants.BOOLEAN_VALIDATOR_TYPES.EQUAL:
        if (value !== validator.value) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;
    }
  } else if (value !== null && value !== undefined && !isBoolean(value)) {
    if (validator.type == _constants.BOOLEAN_VALIDATOR_TYPES.TYPE) {
      errors.push({
        field: field,
        message: validator.message
      });
    }
  } else {
    if (validator.type == _constants.BOOLEAN_VALIDATOR_TYPES.REQUIRED) {
      errors.push({
        field: field,
        message: validator.message
      });
    }
  }

  return errors;
};
/**
 * Check if object is boolean
 * 
 * @param {Object} value 
 */


exports.handleBooleanValidation = handleBooleanValidation;

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};

exports.isBoolean = isBoolean;