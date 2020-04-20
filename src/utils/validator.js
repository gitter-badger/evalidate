import moment from 'moment';

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

/**
 * Check if object is boolean
 * 
 * @param {Object} value 
 */
export const isBoolean = (value) => {
    return typeof value === 'boolean';
};

/**
 * Check if object is date
 * 
 * @param {Object} value 
 */
export const isDate = (value) => {
    return moment(value).isValid();
};

/**
 * Check if object is number
 * 
 * @param {Object} value 
 */
export const isNumber = (value) => {
    return typeof value === 'number' && isFinite(value);
};