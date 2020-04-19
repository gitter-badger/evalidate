import boolean from '../../src/types/boolean';
import { isBoolean, handleBooleanValidation } from '../../src/validators/boolean';
import { boolean_required_error_message, boolean_equal_error_message } from '../../src/messages/boolean';

describe("Date Validator", () => {

    describe("handleBooleanValidation", () => {
        it("Should return error if value is null and boolean is required", () => {
            let validator = boolean().required();
            expect(handleBooleanValidation("field", validator.validators[0], null)).toContainEqual({
                field: "field", message: boolean_required_error_message()
            });
        });

        it("Shouldn't return error if value is not null and v is required", () => {
            let validator = boolean().required();
            expect(handleBooleanValidation("field", validator.validators[0], false).length).toBe(0);
        });

        it("Should return error if input isn't equal to value", () => {
            let validator = boolean().equals(true);
            expect(handleBooleanValidation("field", validator.validators[0], false)).toContainEqual({
                field: "field", message: boolean_equal_error_message()
            });
        });

        it("Shouldn't return error if input is equalt to value", () => {
            let validator = boolean().equals(true);
            expect(handleBooleanValidation("field", validator.validators[0], true).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value isn't provided", () => {
            let validator = boolean().equals(true);
            expect(handleBooleanValidation("field", validator.validators[0], null).length).toBe(0);
        });

    });

    describe("isBoolean", () => {
        it("Should return true if input is boolean", () => {
            expect(isBoolean(true)).toBeTruthy();
            expect(isBoolean(false)).toBeTruthy();
        });

        it("Should return false if input is not date", () => {
            expect(isBoolean("INVALID-DATE")).toBeFalsy();
            expect(isBoolean(null)).toBeFalsy();
        });

    });

});