"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boolean_required_error_message = exports.boolean_equal_error_message = void 0;

/**
 * Equal Error Message
 */
var boolean_equal_error_message = function boolean_equal_error_message() {
  return "Invalid value provided for ${{}}";
};
/**
 * Required Error Message
 */


exports.boolean_equal_error_message = boolean_equal_error_message;

var boolean_required_error_message = function boolean_required_error_message() {
  return "${{}} is required";
};

exports.boolean_required_error_message = boolean_required_error_message;