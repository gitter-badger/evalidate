import AbstractValidator from "./abstract";
import { ARRAY_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { array_equal_error_message, array_contains_error_message, array_size_error_message, array_required_error_message } from "../messages/array";
import { isString, isArray, isInteger } from "../utils/validator";
import { string_type_error_message, array_type_error_message, integer_type_error_message } from "../utils/errors";

/**
 * Array Validator Class
 * 
 * @method contains
 * @method equals
 * @method required
 * @method size
 */
class ArrayValidator extends AbstractValidator {

    constructor() {
        super();
        this.validators.push({validator: TYPES.ARRAY, type: ARRAY_VALIDATOR_TYPES.TYPE, message: array_type_error_message("${{}}")});
    }

    /**
     * Contains Validator
     * 
     * @param {Object} value 
     * @param {String} message 
     */
    contains(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.ARRAY, type: ARRAY_VALIDATOR_TYPES.CONTAINS, value: value, message: message || array_contains_error_message(value)});
        return this;
    }

    /**
     * Equals Validator
     * 
     * @param {Array} value 
     * @param {String} message 
     */
    equals(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isArray(value)) {
            throw new Error(array_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.ARRAY, type: ARRAY_VALIDATOR_TYPES.EQUAL, value: value, message: message || array_equal_error_message()});
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
        this.validators.push({validator: TYPES.ARRAY, type: ARRAY_VALIDATOR_TYPES.REQUIRED, message: message || array_required_error_message()});
        return this;
    }

    /**
     * Size Validator
     *  
     * @param {Number} value
     * @param {String} message 
     */
    size(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isInteger(value)) {
            throw new Error(integer_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.ARRAY, type: ARRAY_VALIDATOR_TYPES.SIZE, value: value, message: message || array_size_error_message(value)});
        return this;
    }
}

export default () => {
    return new ArrayValidator();
};

