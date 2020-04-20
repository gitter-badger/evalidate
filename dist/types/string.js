"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _abstract = _interopRequireDefault(require("./abstract"));

var _constants = require("../utils/constants");

var _string = require("../messages/string");

var _validator = require("../utils/validator");

var _errors = require("../utils/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * String Validator Class
 * 
 * @method email
 * @method equal
 * @method in
 * @method maxlength
 * @method minlength
 * @method required
 */
var StringValidator = /*#__PURE__*/function (_AbstractValidator) {
  _inherits(StringValidator, _AbstractValidator);

  var _super = _createSuper(StringValidator);

  function StringValidator() {
    var _this;

    _classCallCheck(this, StringValidator);

    _this = _super.call(this);

    _this.validators.push({
      validator: _constants.TYPES.STRING,
      type: _constants.STRING_VALIDATOR_TYPES.TYPE,
      message: (0, _errors.string_type_error_message)("${{}}")
    });

    return _this;
  }
  /**
   * Email Validator
   * 
   * @param {String} message 
   */


  _createClass(StringValidator, [{
    key: "email",
    value: function email(message) {
      if (message && !(0, _validator.isString)(message)) {
        throw new Error((0, _errors.string_type_error_message)("message"));
      }

      this.validators.push({
        validator: _constants.TYPES.STRING,
        type: _constants.STRING_VALIDATOR_TYPES.EMAIL,
        message: message || (0, _string.string_email_error_message)()
      });
      return this;
    }
    /**
     * Equal Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */

  }, {
    key: "equals",
    value: function equals(value, message) {
      if (message && !(0, _validator.isString)(message)) {
        throw new Error((0, _errors.string_type_error_message)("message"));
      }

      if (!(0, _validator.isString)(value)) {
        throw new Error((0, _errors.string_type_error_message)("value"));
      }

      this.validators.push({
        validator: _constants.TYPES.STRING,
        type: _constants.STRING_VALIDATOR_TYPES.EQUAL,
        value: value,
        message: message || (0, _string.string_equal_error_message)()
      });
      return this;
    }
    /**
     * In Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */

  }, {
    key: "in",
    value: function _in(value, message) {
      if (message && !(0, _validator.isString)(message)) {
        throw new Error((0, _errors.string_type_error_message)("message"));
      }

      if (!(0, _validator.isArray)(value)) {
        throw new Error((0, _errors.array_type_error_message)("value"));
      }

      this.validators.push({
        validator: _constants.TYPES.STRING,
        type: _constants.STRING_VALIDATOR_TYPES.IN,
        value: value,
        message: message || (0, _string.string_in_error_message)()
      });
      return this;
    }
    /**
     * Maxlength Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */

  }, {
    key: "maxlength",
    value: function maxlength(value, message) {
      if (message && !(0, _validator.isString)(message)) {
        throw new Error((0, _errors.string_type_error_message)("message"));
      }

      if (!(0, _validator.isNumber)(value)) {
        throw new Error((0, _errors.number_type_error_message)("value"));
      }

      this.validators.push({
        validator: _constants.TYPES.STRING,
        type: _constants.STRING_VALIDATOR_TYPES.MAXLENGTH,
        value: value,
        message: message || (0, _string.string_maxlength_error_message)(value)
      });
      return this;
    }
    /**
     * Minlength Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */

  }, {
    key: "minlength",
    value: function minlength(value, message) {
      if (message && !(0, _validator.isString)(message)) {
        throw new Error((0, _errors.string_type_error_message)("message"));
      }

      if (!(0, _validator.isNumber)(value)) {
        throw new Error((0, _errors.number_type_error_message)("value"));
      }

      this.validators.push({
        validator: _constants.TYPES.STRING,
        type: _constants.STRING_VALIDATOR_TYPES.MINLENGTH,
        value: value,
        message: message || (0, _string.string_minlength_error_message)(value)
      });
      return this;
    }
    /**
     * Required Validator
     * 
     * @param {String} message 
     */

  }, {
    key: "required",
    value: function required(message) {
      if (message && !(0, _validator.isString)(message)) {
        throw new Error((0, _errors.string_type_error_message)("message"));
      }

      this.validators.push({
        validator: _constants.TYPES.STRING,
        type: _constants.STRING_VALIDATOR_TYPES.REQUIRED,
        message: message || (0, _string.string_required_error_message)()
      });
      return this;
    }
  }]);

  return StringValidator;
}(_abstract["default"]);

var _default = function _default() {
  return new StringValidator();
};

exports["default"] = _default;