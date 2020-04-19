/**
 * Email Error Message
 */
export const string_email_error_message = () => {
    return "Invalid email address";
};

/**
 * Equal Error Message
 * 
 */
export const string_equal_error_message = () => {
    return `Incorrect \${{}} value provided`;
};

/**
 * In Error Message
 *  
 */
export const string_in_error_message = () => {
    return `Incorrect \${{}} value provided`;
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