import _ from 'lodash';
import { ARRAY_VALIDATOR_TYPES } from "../utils/constants";

/**
 * Handle Array Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
export const handleArrayValidation = (field, validator, value) => {
    let errors = [];
    if (value !== null && value !== undefined && isArray(value)) {
        switch (validator.type) {
            case ARRAY_VALIDATOR_TYPES.CONTAINS:
                if (!value.includes(validator.value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case ARRAY_VALIDATOR_TYPES.EQUAL:
                if (!_.isEqual(_.sortBy(value), _.sortBy(validator.value))) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case ARRAY_VALIDATOR_TYPES.SIZE:
                if (value.length !== validator.value) {
                    errors.push({field: field, message: validator.message});
                }
        }
    }
    else {
        if (validator.type == ARRAY_VALIDATOR_TYPES.REQUIRED) {
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
export const isArray = (value) => {
    return Array.isArray(value);
};