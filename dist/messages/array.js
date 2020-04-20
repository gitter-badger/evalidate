"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.array_size_error_message = exports.array_required_error_message = exports.array_equal_error_message = exports.array_contains_error_message = void 0;

/**
 * Contain Error Message
 * 
 * @param {String} value
 */
var array_contains_error_message = function array_contains_error_message(value) {
  return "${{}} must contain ".concat(value);
};
/**
 * Equal Error Message
 */


exports.array_contains_error_message = array_contains_error_message;

var array_equal_error_message = function array_equal_error_message() {
  return "Invalid value provided for ${{}}";
};
/**
 * Required Error Message
 */


exports.array_equal_error_message = array_equal_error_message;

var array_required_error_message = function array_required_error_message() {
  return "${{}} is required";
};
/**
 * Size Error Message
 * 
 * @param {Number} value
 */


exports.array_required_error_message = array_required_error_message;

var array_size_error_message = function array_size_error_message(value) {
  return "${{}} must have ".concat(value, " elements");
};

exports.array_size_error_message = array_size_error_message;