"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = exports.handleArrayValidation = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _constants = require("../utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Handle Array Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
var handleArrayValidation = function handleArrayValidation(field, validator, value) {
  var errors = [];

  if (value !== null && value !== undefined && isArray(value)) {
    switch (validator.type) {
      case _constants.ARRAY_VALIDATOR_TYPES.CONTAINS:
        if (!value.includes(validator.value)) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.ARRAY_VALIDATOR_TYPES.EQUAL:
        if (!_lodash["default"].isEqual(_lodash["default"].sortBy(value), _lodash["default"].sortBy(validator.value))) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

        break;

      case _constants.ARRAY_VALIDATOR_TYPES.SIZE:
        if (value.length !== validator.value) {
          errors.push({
            field: field,
            message: validator.message
          });
        }

    }
  } else if (value !== null && value !== undefined && !isArray(value)) {
    if (validator.type == _constants.ARRAY_VALIDATOR_TYPES.TYPE) {
      errors.push({
        field: field,
        message: validator.message
      });
    }
  } else {
    if (validator.type == _constants.ARRAY_VALIDATOR_TYPES.REQUIRED) {
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


exports.handleArrayValidation = handleArrayValidation;

var isArray = function isArray(value) {
  return Array.isArray(value);
};

exports.isArray = isArray;