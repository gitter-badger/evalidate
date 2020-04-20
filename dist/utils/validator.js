"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = exports.isDate = exports.isBoolean = exports.isInteger = exports.isArray = exports.isString = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Check if object is string
 * 
 * @param {Object} value 
 */
var isString = function isString(value) {
  return typeof value === 'string' || value instanceof String;
};
/**
 * Check if object is boolean
 * 
 * @param {Object} value 
 */


exports.isString = isString;

var isArray = function isArray(value) {
  return Array.isArray(value);
};
/**
 * Check if object is an integer
 * 
 * @param {Object} value 
 */


exports.isArray = isArray;

var isInteger = function isInteger(value) {
  return Number.isInteger(value);
};
/**
 * Check if object is boolean
 * 
 * @param {Object} value 
 */


exports.isInteger = isInteger;

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};
/**
 * Check if object is date
 * 
 * @param {Object} value 
 */


exports.isBoolean = isBoolean;

var isDate = function isDate(value) {
  return (0, _moment["default"])(value).isValid();
};
/**
 * Check if object is number
 * 
 * @param {Object} value 
 */


exports.isDate = isDate;

var isNumber = function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
};

exports.isNumber = isNumber;