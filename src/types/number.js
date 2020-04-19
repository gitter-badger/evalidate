import AbstractValidator from "./abstract";
import { NUMBER_VALIDATOR_TYPES } from "../utils/constants";
import { number_equal_error_message, number_in_error_message, number_integer_error_message, number_max_error_message, number_min_error_message, number_required_error_message } from "../messages/number";

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

    /**
     * Equals Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    equals(value, message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.EQUAL, value: value, message: message || number_equal_error_message()});
        return this;
    }

    /**
     * In Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    in(value, message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.IN, value: value, message: message || number_in_error_message()});
        return this;
    }

    /**
     * Integer Validator
     * 
     * @param {String} message 
     */
    integer(message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.INTEGER, message: message || number_integer_error_message()});
        return this;
    }

    /**
     * Maximum Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    max(value, message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.MAX, value: value, message: message || number_max_error_message(value)});
        return this;
    }

    /**
     * Minimum Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    min(value, message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.MIN, value: value, message: message || number_min_error_message(value)});
        return this;
    }

    /**
     * Required Validator
     * 
     * @param {String} message 
     */
    required(message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.REQUIRED, message: message || number_required_error_message()});
        return this;
    }
}

export default () => {
    return new NumberValidator();
};

