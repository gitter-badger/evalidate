"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.number_type_error_message = exports.date_type_error_message = exports.boolean_type_error_message = exports.integer_type_error_message = exports.array_type_error_message = exports.string_type_error_message = void 0;

/**
 * String Type Error Message
 * 
 * @param {String} field 
 */
var string_type_error_message = function string_type_error_message(field) {
  return "".concat(field, " must be a string");
};
/**
 * Array Type Error Message
 * 
 * @param {String} field 
 */


exports.string_type_error_message = string_type_error_message;

var array_type_error_message = function array_type_error_message(field) {
  return "".concat(field, " must be an array");
};
/**
 * Integer Type Error Message
 * 
 * @param {String} field 
 */


exports.array_type_error_message = array_type_error_message;

var integer_type_error_message = function integer_type_error_message(field) {
  return "".concat(field, " must be an integer");
};
/**
 * Boolean Type Error Message
 * 
 * @param {String} field 
 */


exports.integer_type_error_message = integer_type_error_message;

var boolean_type_error_message = function boolean_type_error_message(field) {
  return "".concat(field, " must be a boolean");
};
/**
 * Date Type Error Message
 * 
 * @param {String} field 
 */


exports.boolean_type_error_message = boolean_type_error_message;

var date_type_error_message = function date_type_error_message(field) {
  return "".concat(field, " must be a date");
};
/**
 * Number Type Error Message
 * 
 * @param {String} field 
 */


exports.date_type_error_message = date_type_error_message;

var number_type_error_message = function number_type_error_message(field) {
  return "".concat(field, " must be a number");
};

exports.number_type_error_message = number_type_error_message;