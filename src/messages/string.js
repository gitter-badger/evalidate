/**
 * Email Error Message
 */
export const string_email_error_message = () => {
    return "Email address is invalid";
};

/**
 * Equal Error Message
 * 
 */
export const string_equal_error_message = () => {
    return `Invalid value provided for \${{}}`;
};

/**
 * In Error Message
 *  
 */
export const string_in_error_message = () => {
    return `Invalid value provided for \${{}}`;
};

/**
 * Maxlength Error Message
 * 
 * @param {String} value 
 */
export const string_maxlength_error_message = (value) => {
    return `\${{}} must have at most ${value} characters`;
};

/**
 * Minlength Error Message
 * 
 * @param {String} value 
 */
export const string_minlength_error_message = (value) => {
    return `\${{}} must have at least ${value} characters`;
};

/**
 * Required Error Message
 * 
 */
export const string_required_error_message = () => {
    return `\${{}} is required`;
};