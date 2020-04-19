/**
 * Equal Error Message
 */
export const date_equal_error_message = () => {
    return "Incorrect ${{}} value provided.";
};

/**
 * After Error Message
 */
export const date_after_error_message = (value) => {
    return `\${{}} must be set to a date after ${value}`;
};

/**
 * Before Error Message
 */
export const date_before_error_message = (value) => {
    return `\${{}} must be set to a date before ${value}`;
};

/**
 * Required Error Message
 */
export const date_required_error_message = () => {
    return `\${{}} is required.`;
};