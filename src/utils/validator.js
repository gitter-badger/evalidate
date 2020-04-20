/**
 * Check if object is string
 * 
 * @param {Object} value 
 */
export const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};

/**
 * Check if object is boolean
 * 
 * @param {Object} value 
 */
export const isArray = (value) => {
    return Array.isArray(value);
};

/**
 * Check if object is an integer
 * 
 * @param {Object} value 
 */
export const isInteger = (value) => {
    return Number.isInteger(value);
};