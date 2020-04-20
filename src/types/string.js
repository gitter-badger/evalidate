import AbstractValidator from "./abstract";
import { STRING_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { string_email_error_message, string_in_error_message, string_maxlength_error_message, string_minlength_error_message, string_required_error_message, string_equal_error_message } from "../messages/string";
import { isString, isNumber, isArray } from "../utils/validator";
import { string_type_error_message, number_type_error_message, array_type_error_message } from "../utils/errors";

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
class StringValidator extends AbstractValidator {

    /**
     * Email Validator
     * 
     * @param {String} message 
     */
    email(message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.EMAIL, message: message || string_email_error_message()});
        return this;
    }

    /**
     * Equal Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    equals(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isString(value)) {
            throw new Error(string_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.EQUAL, value: value, message: message || string_equal_error_message()});
        return this;
    }

    /**
     * In Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    in(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isArray(value)) {
            throw new Error(array_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.IN, value: value, message: message || string_in_error_message()});
        return this;
    }

    /**
     * Maxlength Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    maxlength(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.MAXLENGTH, value: value, message: message || string_maxlength_error_message(value)});
        return this;
    }

    /**
     * Minlength Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    minlength(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.MINLENGTH, value: value, message: message || string_minlength_error_message(value)});
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
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.REQUIRED, message: message || string_required_error_message()});
        return this;
    }
}

export default () => {
    return new StringValidator();
};

