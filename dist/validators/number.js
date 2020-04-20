"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = exports.handleNumberValidation = void 0;

var _constants = require("../utils/constants");

/**
 * Handle Number Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
var handleNumberValidation = function handleNumberValidation(field, validator, value) {
  var errors = [];

  if (value !== null && value !== undefined && isNumber(value)) {
    switch (validator.type) {
      case _constants.NUMBER_VALIDATOR_TYPES.EQUAL:
        if (value !== validator.value) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.NUMBER_VALIDATOR_TYPES.IN:
        if (!validator.value.includes(value)) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.NUMBER_VALIDATOR_TYPES.INTEGER:
        if (!Number.isInteger(value)) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.NUMBER_VALIDATOR_TYPES.MAX:
        if (value > validator.value) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.NUMBER_VALIDATOR_TYPES.MIN:
        if (value < validator.value) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;
    }
  } else if (value !== null && value !== undefined && !isNumber(value)) {
    if (validator.type == _constants.NUMBER_VALIDATOR_TYPES.TYPE) {
      errors.push({
        field: field,
        message: validator.message
      });
    }
  } else {
    if (validator.type == _constants.NUMBER_VALIDATOR_TYPES.REQUIRED) {
      errors.push({
        field: field,
        message: validator.message
      });
    }
  }

  return errors;
};
/**
 * Check if object is number
 * 
 * @param {Object} value 
 */


exports.handleNumberValidation = handleNumberValidation;

var isNumber = function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
};

exports.isNumber = isNumber;