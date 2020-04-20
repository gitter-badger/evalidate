"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STRING_VALIDATOR_TYPES = exports.NUMBER_VALIDATOR_TYPES = exports.DATE_VALIDATOR_TYPES = exports.BOOLEAN_VALIDATOR_TYPES = exports.ARRAY_VALIDATOR_TYPES = exports.TYPES = void 0;
var TYPES = {
  ARRAY: "array",
  BOOLEAN: "boolean",
  DATE: "date",
  NUMBER: 'number',
  STRING: 'string'
};
exports.TYPES = TYPES;
var ARRAY_VALIDATOR_TYPES = {
  CONTAINS: "contains",
  EQUAL: "equal",
  REQUIRED: "required",
  SIZE: "size",
  TYPE: "type"
};
exports.ARRAY_VALIDATOR_TYPES = ARRAY_VALIDATOR_TYPES;
var BOOLEAN_VALIDATOR_TYPES = {
  EQUAL: "equal",
  REQUIRED: "required",
  TYPE: "type"
};
exports.BOOLEAN_VALIDATOR_TYPES = BOOLEAN_VALIDATOR_TYPES;
var DATE_VALIDATOR_TYPES = {
  AFTER: "after",
  BEFORE: "before",
  EQUAL: "equal",
  REQUIRED: "required",
  TYPE: "type"
};
exports.DATE_VALIDATOR_TYPES = DATE_VALIDATOR_TYPES;
var NUMBER_VALIDATOR_TYPES = {
  EQUAL: "equal",
  IN: "in",
  INTEGER: "integer",
  MAX: "max",
  MIN: "min",
  REQUIRED: "required",
  TYPE: "type"
};
exports.NUMBER_VALIDATOR_TYPES = NUMBER_VALIDATOR_TYPES;
var STRING_VALIDATOR_TYPES = {
  EMAIL: "email",
  EQUAL: "equal",
  IN: "in",
  MAXLENGTH: "maxlength",
  MINLENGTH: "minlength",
  REQUIRED: "required",
  TYPE: "type"
};
exports.STRING_VALIDATOR_TYPES = STRING_VALIDATOR_TYPES;