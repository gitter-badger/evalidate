"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../utils/constants");

var _object = require("./object");

var _date = require("../validators/date");

var _array = require("../validators/array");

var _number = require("../validators/number");

var _string = require("../validators/string");

var _boolean = require("../validators/boolean");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Schema Wrapper
 */
var Schema = /*#__PURE__*/function () {
  function Schema(schema, parent) {
    _classCallCheck(this, Schema);

    this.errors = [];
    this.schema = schema;
    this.parent = parent || "";
  }
  /**
   * Validate data against schema
   * 
   * @param {Object} data 
   */


  _createClass(Schema, [{
    key: "validate",
    value: function validate(data) {
      data = data || {};
      this.init(data);
      return this.process(data);
    }
    /**
     * Initialize Schema
     */

  }, {
    key: "init",
    value: function init(data) {
      var keys = Object.keys(this.schema);

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var key = _keys[_i];

        if (this.schema[key] instanceof _object.ObjectValidator) {
          var parentSchema = this.parent ? "".concat(this.parent, ".").concat(key) : key;
          this.errors = [].concat(_toConsumableArray(this.errors), _toConsumableArray(new Schema(this.schema[key].schema, parentSchema).validate(data["".concat(key)]).errors));
        } else {
          this.sanitizeMessages(key, this.schema[key].validators);
        }
      }
    }
    /**
     * Process data against schema
     * 
     * @param {Object} data 
     */

  }, {
    key: "process",
    value: function process(data) {
      var keys = Object.keys(this.schema);

      for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
        var field = _keys2[_i2];

        var _iterator = _createForOfIteratorHelper(this.schema[field].validators),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var validator = _step.value;
            this.errors = [].concat(_toConsumableArray(this.errors), _toConsumableArray(this.handleValidation(field, validator, data)));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return {
        isValid: this.errors.length == 0,
        errors: this.errors
      };
    }
    /**
     * Sanitize Error Messages
     * 
     * @param {String} field 
     * @param {Object} validators 
     */

  }, {
    key: "sanitizeMessages",
    value: function sanitizeMessages(field, validators) {
      var _iterator2 = _createForOfIteratorHelper(validators),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var validator = _step2.value;

          if (validator.message) {
            this.populatePlaceholders(field, validator);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Populate Placeholder
     * 
     * @param {String} field 
     * @param {Object} validator 
     */

  }, {
    key: "populatePlaceholders",
    value: function populatePlaceholders(field, validator) {
      validator.message = validator.message.replace("${{}}", field);
    }
    /**
     * Handle Validation
     * 
     * @param {String} field 
     * @param {Object} validator 
     * @param {Object} data
     */

  }, {
    key: "handleValidation",
    value: function handleValidation(field, validator, data) {
      var fieldName = this.parent ? "".concat(this.parent, ".").concat(field) : field;

      if (validator.validator === _constants.TYPES.ARRAY) {
        return (0, _array.handleArrayValidation)(fieldName, validator, data["".concat(field)]);
      }

      if (validator.validator === _constants.TYPES.BOOLEAN) {
        return (0, _boolean.handleBooleanValidation)(fieldName, validator, data["".concat(field)]);
      } else if (validator.validator === _constants.TYPES.DATE) {
        return (0, _date.handleDateValidation)(fieldName, validator, data["".concat(field)]);
      } else if (validator.validator === _constants.TYPES.NUMBER) {
        return (0, _number.handleNumberValidation)(fieldName, validator, data["".concat(field)]);
      } else if (validator.validator === _constants.TYPES.STRING) {
        return (0, _string.handleStringValidation)(fieldName, validator, data["".concat(field)]);
      } else {
        return [];
      }
    }
  }]);

  return Schema;
}();

exports["default"] = Schema;