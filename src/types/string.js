import AbstractValidator from "./abstract";
import { STRING_VALIDATOR_TYPES } from "../utils/constants";

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
        this.validators.push({type: STRING_VALIDATOR_TYPES.EMAIL, message: message || null});
        return this;
    }

    /**
     * Equal Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    equals(value, message) {
        this.validators.push({type: STRING_VALIDATOR_TYPES.EQUAL, value: value, message: message || null});
        return this;
    }

    /**
     * In Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    in(value, message) {
        this.validators.push({type: STRING_VALIDATOR_TYPES.IN, value: value, message: message || null});
        return this;
    }

    /**
     * Maxlength Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    maxlength(value, message) {
        this.validators.push({type: STRING_VALIDATOR_TYPES.MAXLENGTH, value: value, message: message || null});
        return this;
    }

    /**
     * Minlength Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    minlength(value, message) {
        this.validators.push({type: STRING_VALIDATOR_TYPES.MINLENGTH, value: value, message: message || null});
        return this;
    }

    /**
     * Required Validator
     * 
     * @param {String} message 
     */
    required(message) {
        this.validators.push({type: STRING_VALIDATOR_TYPES.REQUIRED, message: message || null});
        return this;
    }
}

export default () => {
    return new StringValidator();
};

