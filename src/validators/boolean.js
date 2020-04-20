import { BOOLEAN_VALIDATOR_TYPES } from "../utils/constants";

/**
 * Handle Boolean Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
export const handleBooleanValidation = (field, validator, value) => {
    let errors = [];
    if (value !== null && value !== undefined && isBoolean(value)) {
        switch (validator.type) {
            case BOOLEAN_VALIDATOR_TYPES.EQUAL:
                if (value !== validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
        }
    }
    else if (value !== null && value !== undefined && !isBoolean(value)) {
        if (validator.type == BOOLEAN_VALIDATOR_TYPES.TYPE) {
            errors.push({field: field, message: validator.message});
        }
    }
    else {
        if (validator.type == BOOLEAN_VALIDATOR_TYPES.REQUIRED) {
            errors.push({field: field, message: validator.message});
        }
    }
    return errors;
};


/**
 * Check if object is boolean
 * 
 * @param {Object} value 
 */
export const isBoolean = (value) => {
    return typeof value === 'boolean';
};