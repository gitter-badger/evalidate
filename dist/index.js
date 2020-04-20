"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _date = _interopRequireDefault(require("./types/date"));

var _array = _interopRequireDefault(require("./types/array"));

var _number = _interopRequireDefault(require("./types/number"));

var _object = _interopRequireDefault(require("./types/object"));

var _schema = _interopRequireDefault(require("./types/schema"));

var _string = _interopRequireDefault(require("./types/string"));

var _boolean2 = _interopRequireDefault(require("./types/boolean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  date: _date["default"],
  array: _array["default"],
  number: _number["default"],
  object: _object["default"],
  schema: _schema["default"],
  string: _string["default"],
  "boolean": _boolean2["default"]
};
exports["default"] = _default;