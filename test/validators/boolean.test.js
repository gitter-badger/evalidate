import boolean from '../../src/types/boolean';
import { isBoolean, handleBooleanValidation } from '../../src/validators/boolean';
import { boolean_required_error_message, boolean_equal_error_message } from '../../src/messages/boolean';
import { boolean_type_error_message } from '../../src/utils/errors';

describe("Date Validator", () => {

    describe("handleBooleanValidation", () => {
        it("Should return error if value not boolean", () => {
            let validator = boolean().required();
            expect(handleBooleanValidation("field", validator.validators[0], "invalid")).toContainEqual({
                field: "field", message: boolean_type_error_message("${{}}")
            });
            expect(handleBooleanValidation("field", validator.validators[0], [])).toContainEqual({
                field: "field", message: boolean_type_error_message("${{}}")
            });
        });

        it("Should return error if value is null and boolean is required", () => {
            let validator = boolean().required();
            expect(handleBooleanValidation("field", validator.validators[1], null)).toContainEqual({
                field: "field", message: boolean_required_error_message()
            });
        });

        it("Shouldn't return error if value is not null and value is required", () => {
            let validator = boolean().required();
            expect(handleBooleanValidation("field", validator.validators[1], false).length).toBe(0);
        });

        it("Should return error if input isn't equal to value", () => {
            let validator = boolean().equals(true);
            expect(handleBooleanValidation("field", validator.validators[1], false)).toContainEqual({
                field: "field", message: boolean_equal_error_message()
            });
        });

        it("Shouldn't return error if input is equalt to value", () => {
            let validator = boolean().equals(true);
            expect(handleBooleanValidation("field", validator.validators[1], true).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value isn't provided", () => {
            let validator = boolean().equals(true);
            expect(handleBooleanValidation("field", validator.validators[1], null).length).toBe(0);
        });

    });

    describe("Input Validation", () => {
        it("Should return error if equals message is not a string", () => {
            try {
                boolean().equals(true, true);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if required message is not a string", () => {
            try {
                boolean().required(true);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
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