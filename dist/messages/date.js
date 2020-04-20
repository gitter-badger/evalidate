"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date_required_error_message = exports.date_before_error_message = exports.date_after_error_message = exports.date_equal_error_message = void 0;

/**
 * Equal Error Message
 */
var date_equal_error_message = function date_equal_error_message() {
  return "Invalid value provided for ${{}}";
};
/**
 * After Error Message
 */


exports.date_equal_error_message = date_equal_error_message;

var date_after_error_message = function date_after_error_message(value) {
  return "${{}} must be after ".concat(value);
};
/**
 * Before Error Message
 */


exports.date_after_error_message = date_after_error_message;

var date_before_error_message = function date_before_error_message(value) {
  return "${{}} must be before ".concat(value);
};
/**
 * Required Error Message
 */


exports.date_before_error_message = date_before_error_message;

var date_required_error_message = function date_required_error_message() {
  return "${{}} is required";
};

exports.date_required_error_message = date_required_error_message;