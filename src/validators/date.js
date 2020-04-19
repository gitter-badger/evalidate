import moment from "moment";
import { DATE_VALIDATOR_TYPES } from "../utils/constants";

export const handleDateValidation = (field, validator, value) => {
    let errors = [];
    if (value && isDate(value)) {
        switch (validator.type) {
            case DATE_VALIDATOR_TYPES.EQUAL:
                if (value !== validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case DATE_VALIDATOR_TYPES.AFTER:
                if (moment(value).isBefore(moment(validator.value))) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case DATE_VALIDATOR_TYPES.BEFORE:
                if (moment(value).isAfter(moment(validator.value))) {
                    errors.push({field: field, message: validator.message});
                }
                break;
        }
    }
    else {
        if (validator.type == DATE_VALIDATOR_TYPES.REQUIRED) {
            errors.push({field: field, message: validator.message});
        }
    }
    return errors;
};

/**
 * Check if object is date
 * 
 * @param {Object} value 
 */
export const isDate = (value) => {
    return moment(value).isValid();
};