import AbstractValidator from "./abstract";
import { NUMBER_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { number_equal_error_message, number_in_error_message, number_integer_error_message, number_max_error_message, number_min_error_message, number_required_error_message } from "../messages/number";
import { isString, isNumber, isArray } from "../utils/validator";
import { string_type_error_message, number_type_error_message, array_type_error_message } from "../utils/errors";

/**
 * Number Validator Class
 * 
 * @method equal
 * @method integer
 * @method max
 * @method min
 * @method required
 */
class NumberValidator extends AbstractValidator {

    constructor() {
        super();
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.TYPE, message: number_type_error_message("${{}}")});
    }

    /**
     * Equals Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    equals(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.EQUAL, value: value, message: message || number_equal_error_message()});
        return this;
    }

    /**
     * In Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    in(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isArray(value)) {
            throw new Error(array_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.IN, value: value, message: message || number_in_error_message()});
        return this;
    }

    /**
     * Integer Validator
     * 
     * @param {String} message 
     */
    integer(message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.INTEGER, message: message || number_integer_error_message()});
        return this;
    }

    /**
     * Maximum Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    max(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.MAX, value: value, message: message || number_max_error_message(value)});
        return this;
    }

    /**
     * Minimum Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    min(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.MIN, value: value, message: message || number_min_error_message(value)});
        return this;
    }

    /**
     * Required Validator
     * 
     * @param {String} message 
     */
    required(message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.REQUIRED, message: message || number_required_error_message()});
        return this;
    }
}

export default () => {
    return new NumberValidator();
};

