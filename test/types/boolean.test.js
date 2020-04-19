import boolean from '../../src/types/boolean';
import { BOOLEAN_VALIDATOR_TYPES, TYPES } from '../../src/utils/constants';
import { boolean_equal_error_message, boolean_required_error_message } from '../../src/messages/boolean';


describe("BooleanValidator", () => {
    
    describe("equals", () => {
        it("Should add equals validator without message", () => {
            let validator = boolean();
            validator.equals(true);
            
            expect(validator.validators).toContainEqual({validator: TYPES.BOOLEAN, message: boolean_equal_error_message(), value: true, type: BOOLEAN_VALIDATOR_TYPES.EQUAL});
        });

        it("Should add equals validator with message", () => {
            let validator = boolean();
            validator.equals(true, "Date Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.BOOLEAN, message: "Date Error Message!", value: true, type: BOOLEAN_VALIDATOR_TYPES.EQUAL});
        });
    });

    describe("required", () => {
        it("Should add required validator without message", () => {
            let validator = boolean();
            validator.required();

            expect(validator.validators).toContainEqual({validator: TYPES.BOOLEAN, message: boolean_required_error_message(), type: BOOLEAN_VALIDATOR_TYPES.REQUIRED});
        });

        it("Should add required validator with message", () => {
            let validator = boolean();
            validator.required("Required Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.BOOLEAN, message: "Required Error Message!", type: BOOLEAN_VALIDATOR_TYPES.REQUIRED});
        });
    });

});