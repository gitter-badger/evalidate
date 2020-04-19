import StringValidator from 'validator';
import { STRING_VALIDATOR_TYPES } from "../utils/constants";

/**
 * Handle String Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
export const handleStringValidation = (field, validator, value) => {
    let errors = [];
    if (value && isString(value)) {
        switch (validator.type) {
            case STRING_VALIDATOR_TYPES.EMAIL:
                if (!StringValidator.isEmail(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.EQUAL:
                if (!StringValidator.equals(value, validator.value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.IN:
                if (!validator.value.includes(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.MAXLENGTH:
                if (value.length > validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.MINLENGTH:
                if (value.length < validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
        }
    }
    else {
        if (validator.type == STRING_VALIDATOR_TYPES.REQUIRED) {
            errors.push({field: field, message: validator.message});
        }
    }
    return errors;
};

/**
 * Check if object is string
 * 
 * @param {Object} value 
 */
export const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};