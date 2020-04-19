import AbstractValidator from "./abstract";
import { DATE_VALIDATOR_TYPES } from "../utils/constants";
import { date_after_error_message, date_before_error_message, date_equal_error_message, date_required_error_message } from "../messages/date";

/**
 * Date Validator Class
 */
class DateValidator extends AbstractValidator {

    /**
     * After Validator
     * 
     * @param {Date} value 
     * @param {String} message 
     */
    after(value, message) {
        this.validators.push({type: DATE_VALIDATOR_TYPES.AFTER, message: message || date_after_error_message(value), value: value});
        return this;
    }

    /**
     * Before Validator
     * 
     * @param {Date} value 
     * @param {String} message 
     */
    before(value, message) {
        this.validators.push({type: DATE_VALIDATOR_TYPES.BEFORE, value: value, message: message || date_before_error_message(value)});
        return this;
    }

    /**
     * Equal Validator
     * 
     * @param {Date} value 
     * @param {String} message 
     */
    equals(value, message) {
        this.validators.push({type: DATE_VALIDATOR_TYPES.EQUAL, value: value, message: message || date_equal_error_message(value)});
        return this;
    }

    /**
     * Required Validator
     * 
     * @param {String} message 
     */
    required(message) {
        this.validators.push({type: DATE_VALIDATOR_TYPES.REQUIRED, message: message || date_required_error_message()});
        return this;
    }
}

export default () => {
    return new DateValidator();
};

