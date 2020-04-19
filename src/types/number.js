import AbstractValidator from "./abstract";
import { NUMBER_VALIDATOR_TYPES } from "../utils/constants";

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
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.EQUAL, value: value, message: message || null});
        return this;
    }

    /**
     * In Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    in(value, message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.IN, value: value, message: message || null});
        return this;
    }

    /**
     * Integer Validator
     * 
     * @param {String} message 
     */
    integer(message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.INTEGER, message: message || null});
        return this;
    }

    /**
     * Maximum Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    max(value, message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.MAX, value: value, message: message || null});
        return this;
    }

    /**
     * Minimum Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    min(value, message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.MIN, value: value, message: message || null});
        return this;
    }

    /**
     * Required Validator
     * 
     * @param {String} message 
     */
    required(message) {
        this.validators.push({type: NUMBER_VALIDATOR_TYPES.REQUIRED, message: message || null});
        return this;
    }
}

export default () => {
    return new NumberValidator();
};

