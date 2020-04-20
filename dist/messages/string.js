"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string_required_error_message = exports.string_minlength_error_message = exports.string_maxlength_error_message = exports.string_in_error_message = exports.string_equal_error_message = exports.string_email_error_message = void 0;

/**
 * Email Error Message
 */
var string_email_error_message = function string_email_error_message() {
  return "Email address is invalid";
};
/**
 * Equal Error Message
 * 
 */


exports.string_email_error_message = string_email_error_message;

var string_equal_error_message = function string_equal_error_message() {
  return "Invalid value provided for ${{}}";
};
/**
 * In Error Message
 *  
 */


exports.string_equal_error_message = string_equal_error_message;

var string_in_error_message = function string_in_error_message() {
  return "Invalid value provided for ${{}}";
};
/**
 * Maxlength Error Message
 * 
 * @param {String} value 
 */


exports.string_in_error_message = string_in_error_message;

var string_maxlength_error_message = function string_maxlength_error_message(value) {
  return "${{}} must have at most ".concat(value, " characters");
};
/**
 * Minlength Error Message
 * 
 * @param {String} value 
 */


exports.string_maxlength_error_message = string_maxlength_error_message;

var string_minlength_error_message = function string_minlength_error_message(value) {
  return "${{}} must have at least ".concat(value, " characters");
};
/**
 * Required Error Message
 * 
 */


exports.string_minlength_error_message = string_minlength_error_message;

var string_required_error_message = function string_required_error_message() {
  return "${{}} is required";
};

exports.string_required_error_message = string_required_error_message;