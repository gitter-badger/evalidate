/**
 * Equal Error Message
 */
export const number_equal_error_message = () => {
    return "Incorrect ${{}} value provided.";
};

/**
 * In Error Message
 */
export const number_in_error_message = () => {
    return "Incorrect ${{}} value provided.";
};

/**
 * Integer Error Message
 */
export const number_integer_error_message = () => {
    return "${{}} must be an integer.";
};

/**
 * Max Error Message
 */
export const number_max_error_message = (value) => {
    return `\${{}} must be less than ${value}`;
};

/**
 * Min Error Message
 */
export const number_min_error_message = (value) => {
    return `\${{}} must be greater than ${value}`;
};

/**
 * Required Error Message
 */
export const number_required_error_message = () => {
    return `\${{}} is required.`;
};