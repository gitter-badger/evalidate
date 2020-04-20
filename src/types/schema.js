import { TYPES } from "../utils/constants";
import { handleDateValidation } from "../validators/date";
import { handleArrayValidation } from "../validators/array";
import { handleNumberValidation } from "../validators/number";
import { handleStringValidation } from "../validators/string";
import { handleBooleanValidation } from "../validators/boolean";

/**
 * Schema Wrapper
 */
export default class Schema {
    
    constructor(schema) {
        this.schema = schema;
    }

    /**
     * Validate data against schema
     * 
     * @param {Object} data 
     */
    validate(data) {
        this.init();
        return this.process(data);
    }

    /**
     * Initialize Schema
     */
    init() {
        let keys = Object.keys(this.schema);
        for (const key of keys) {
            this.sanitizeMessages(key, this.schema[key].validators);
        }
    }

    /**
     * Process data against schema
     * 
     * @param {Object} data 
     */
    process(data) {
        let errors = [];
        let keys = Object.keys(this.schema);
        for (const field of keys) {
            for (const validator of this.schema[field].validators) {
                errors = [
                    ...errors,
                    ...this.handleValidation(field, validator, data)
                ];
            }
        }
        return {
            isValid: errors.length == 0,
            errors: errors
        };
    }

    /**
     * Sanitize Error Messages
     * 
     * @param {String} field 
     * @param {Object} validators 
     */
    sanitizeMessages(field, validators) {
        for (const validator of validators) {
            if (validator.message) {
                this.populatePlaceholders(field, validator);
            }
        }
    }

    /**
     * Populate Placeholder
     * 
     * @param {String} field 
     * @param {Object} validator 
     */
    populatePlaceholders(field, validator) {
        validator.message = validator.message.replace("${{}}", field);
    }

    /**
     * Handle Validation
     * 
     * @param {String} field 
     * @param {Object} validator 
     * @param {Object} data
     */
    handleValidation(field, validator, data) {
        if (validator.validator === TYPES.ARRAY) {
            return handleArrayValidation(field, validator, data[`${field}`]);
        }
        if (validator.validator === TYPES.BOOLEAN) {
            return handleBooleanValidation(field, validator, data[`${field}`]);
        }
        else if (validator.validator === TYPES.DATE) {
            return handleDateValidation(field, validator, data[`${field}`]);
        }
        else if (validator.validator === TYPES.NUMBER) {
            return handleNumberValidation(field, validator, data[`${field}`]);
        }
        else if (validator.validator === TYPES.STRING) {
            return handleStringValidation(field, validator, data[`${field}`]);
        }
        else {
            return [];
        }
    }

}