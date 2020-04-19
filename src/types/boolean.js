import AbstractValidator from "./abstract";
import { BOOLEAN_VALIDATOR_TYPES } from "../utils/constants";
import { boolean_equal_error_message, boolean_required_error_message } from "../messages/boolean";

/**
 * Boolean Validator Class
 */
class BooleanValidator extends AbstractValidator {

    equals(value, message) {
        this.validators.push({type: BOOLEAN_VALIDATOR_TYPES.EQUAL, value: value, message: message || boolean_equal_error_message()});
        return this;
    }

    required(message) {
        this.validators.push({type: BOOLEAN_VALIDATOR_TYPES.REQUIRED, message: message || boolean_required_error_message()});
        return this;
    }
}

export default () => {
    return new BooleanValidator();
};

