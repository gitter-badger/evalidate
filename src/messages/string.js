/**
 * Email Error Message
 */
export const string_email_error_message = () => {
    return "Invalid email address";
};

/**
 * Equal Error Message
 * 
 * @param {String} field 
 * @param {String} value 
 */
export const string_equal_error_message = (field, value) => {
    return `Incorrect "${field}" value provided`;
};

/**
 * In Error Message
 * 
 * @param {String} field 
 * @param {String} value 
 */
export const string_in_error_message = (field, value) => {
    return `Incorrect "${field}" value provided`;
};

/**
 * Maxlength Error Message
 * 
 * @param {String} field 
 * @param {String} value 
 */
export const string_maxlength_error_message = (field, value) => {
    return `"${field}" must have at most ${value} characters`;
};

/**
 * Minlength Error Message
 * 
 * @param {String} field 
 * @param {String} value 
 */
export const string_minlength_error_message = (field, value) => {
    return `"${field}" must have at least ${value} characters`;
};

/**
 * Required Error Message
 * 
 * @param {String} field 
 */
export const string_required_error_message = (field) => {
    return `"${field}" is required.`;
};