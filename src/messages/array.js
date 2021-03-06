/**
 * Contain Error Message
 * 
 * @param {String} value
 */
export const array_contains_error_message = (value) => {
    return `\${{}} must contain ${value}`;
};

/**
 * Equal Error Message
 */
export const array_equal_error_message = () => {
    return "Invalid value provided for ${{}}";
};

/**
 * Required Error Message
 */
export const array_required_error_message = () => {
    return `\${{}} is required`;
};

/**
 * Size Error Message
 * 
 * @param {Number} value
 */
export const array_size_error_message = (value) => {
    return `\${{}} must have ${value} elements`;
};