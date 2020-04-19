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
            this.sanitizeMessages(key, this.schema[key].validators);
        }
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

}