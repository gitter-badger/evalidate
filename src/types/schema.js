import { STRING_VALIDATOR_TYPES } from "../utils/constants";
import { string_email_error_message, string_maxlength_error_message, string_required_error_message, string_minlength_error_message, string_equal_error_message, string_in_error_message } from "../messages/string";

/**
 * Schema Wrapper
 */
export default class Schema {
    
    constructor(schema) {
        this.schema = schema;
    }

    init() {
        let keys = Object.keys(this.schema);
        for (const key of keys) {
            // console.log(key, this.schema[key].validators);
            // this.generateValidators(key, this.schema[key].validators);
        }
    }

    /**
     * Generate Validators
     * 
     * @param {String} field 
     * @param {Object} validators 
     */
    generateValidators(field, validators) {
        for (const validator of validators) {
            if (!validator.message) {
                this.populateMessage(field, validator);
            }
        }
    }

    /**
     * Populate Message for Validators without Message
     * 
     * @param {String} field 
     * @param {Object} validator 
     */
    populateMessage(field, validator) {
        switch (validator.type) {
            case STRING_VALIDATOR_TYPES.EMAIL:
                validator.message = string_email_error_message();
                break;
            case STRING_VALIDATOR_TYPES.EQUAL:
                validator.message = string_equal_error_message(field, validator.value);
                break;
            case STRING_VALIDATOR_TYPES.IN:
                validator.message = string_in_error_message(field, validator.value);
                break;
            case STRING_VALIDATOR_TYPES.MAXLENGTH:
                validator.message = string_maxlength_error_message(field, validator.value);
                break;
            case STRING_VALIDATOR_TYPES.MINLENGTH:
                validator.message = string_minlength_error_message(field, validator.value);
                break;
            case STRING_VALIDATOR_TYPES.REQUIRED:
                validator.message = string_required_error_message(field);
                break;
        }
    }
}