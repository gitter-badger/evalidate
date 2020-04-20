"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.number_required_error_message = exports.number_min_error_message = exports.number_max_error_message = exports.number_integer_error_message = exports.number_in_error_message = exports.number_equal_error_message = void 0;

/**
 * Equal Error Message
 */
var number_equal_error_message = function number_equal_error_message() {
  return "Invalid value provided for ${{}}";
};
/**
 * In Error Message
 */


exports.number_equal_error_message = number_equal_error_message;

var number_in_error_message = function number_in_error_message() {
  return "Invalid value provided for ${{}}";
};
/**
 * Integer Error Message
 */


exports.number_in_error_message = number_in_error_message;

var number_integer_error_message = function number_integer_error_message() {
  return "${{}} must be an integer";
};
/**
 * Max Error Message
 */


exports.number_integer_error_message = number_integer_error_message;

var number_max_error_message = function number_max_error_message(value) {
  return "${{}} must be less than ".concat(value);
};
/**
 * Min Error Message
 */


exports.number_max_error_message = number_max_error_message;

var number_min_error_message = function number_min_error_message(value) {
  return "${{}} must be greater than ".concat(value);
};
/**
 * Required Error Message
 */


exports.number_min_error_message = number_min_error_message;

var number_required_error_message = function number_required_error_message() {
  return "${{}} is required";
};

exports.number_required_error_message = number_required_error_message;