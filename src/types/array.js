import AbstractValidator from "./abstract";
import { ARRAY_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { array_equal_error_message, array_contains_error_message, array_size_error_message, array_required_error_message } from "../messages/array";

/**
 * Array Validator Class
 */
class ArrayValidator extends AbstractValidator {

    contains(value, message) {
        this.validators.push({validator: TYPES.ARRAY, type: ARRAY_VALIDATOR_TYPES.CONTAINS, value: value, message: message || array_contains_error_message(value)});
        return this;
    }

    equals(value, message) {
        this.validators.push({validator: TYPES.ARRAY, type: ARRAY_VALIDATOR_TYPES.EQUAL, value: value, message: message || array_equal_error_message()});
        return this;
    }

    required(message) {
        this.validators.push({validator: TYPES.ARRAY, type: ARRAY_VALIDATOR_TYPES.REQUIRED, message: message || array_required_error_message()});
        return this;
    }

    size(value, message) {
        this.validators.push({validator: TYPES.ARRAY, type: ARRAY_VALIDATOR_TYPES.SIZE, value: value, message: message || array_size_error_message(value)});
        return this;
    }
}

export default () => {
    return new ArrayValidator();
};

