import AbstractValidator from "./abstract";
import { BOOLEAN_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { boolean_equal_error_message, boolean_required_error_message } from "../messages/boolean";
import { isString } from "../utils/validator";
import { string_type_error_message } from "../utils/errors";

/**
 * Boolean Validator Class
 */
class BooleanValidator extends AbstractValidator {

    equals(value, message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.BOOLEAN, type: BOOLEAN_VALIDATOR_TYPES.EQUAL, value: value, message: message || boolean_equal_error_message()});
        return this;
    }

    required(message) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.BOOLEAN, type: BOOLEAN_VALIDATOR_TYPES.REQUIRED, message: message || boolean_required_error_message()});
        return this;
    }
}

export default () => {
    return new BooleanValidator();
};

