import AbstractValidator from "./abstract";
import { STRING_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { string_email_error_message, string_in_error_message, string_maxlength_error_message, string_minlength_error_message, string_required_error_message, string_equal_error_message } from "../messages/string";

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
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.MINLENGTH, value: value, message: message || string_minlength_error_message(value)});
        return this;
    }

    /**
     * Required Validator
     * 
     * @param {String} message 
     */
    required(message) {
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.REQUIRED, message: message || string_required_error_message()});
        return this;
    }
}

export default () => {
    return new StringValidator();
};

