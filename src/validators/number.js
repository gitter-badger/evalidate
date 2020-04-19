import { NUMBER_VALIDATOR_TYPES } from "../utils/constants";

/**
 * Handle Number Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
export const handleNumberValidation = (field, validator, value) => {
    let errors = [];
    if (value && isNumber(value)) {
        switch (validator.type) {
            case NUMBER_VALIDATOR_TYPES.EQUAL:
                if (value !== validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.IN:
                if (!validator.value.includes(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.INTEGER:
                if (!Number.isInteger(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.MAX:
                if (value > validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.MIN:
                if (value < validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
        }
    }
    else {
        if (validator.type == NUMBER_VALIDATOR_TYPES.REQUIRED) {
            errors.push({field: field, message: validator.message});
        }
    }
    return errors;
};

/**
 * Check if object is number
 * 
 * @param {Object} value 
 */
export const isNumber = (value) => {
    return typeof value === 'number' && isFinite(value);
};