import array from '../../src/types/array';
import { isArray, handleArrayValidation } from '../../src/validators/array';
import { array_required_error_message, array_equal_error_message, array_contains_error_message, array_size_error_message } from '../../src/messages/array';
import { array_type_error_message } from '../../src/utils/errors';

describe("Date Validator", () => {

    describe("handleBooleanValidation", () => {
        it("Should return error if value is not an array", () => {
            let validator = array().required();
            expect(handleArrayValidation("field", validator.validators[0], "invalid")).toContainEqual({
                field: "field", message: array_type_error_message("${{}}")
            });
            expect(handleArrayValidation("field", validator.validators[0], 10)).toContainEqual({
                field: "field", message: array_type_error_message("${{}}")
            });
        });

        it("Shouldn't return error if value is not null and array is required", () => {
            let validator = array().required();
            expect(handleArrayValidation("field", validator.validators[1], []).length).toBe(0);
        });

        it("Should return error if value is null and array is required", () => {
            let validator = array().required();
            expect(handleArrayValidation("field", validator.validators[1], null)).toContainEqual({
                field: "field", message: array_required_error_message()
            });
        });

        it("Shouldn't return error if value is not null and array is required", () => {
            let validator = array().required();
            expect(handleArrayValidation("field", validator.validators[1], []).length).toBe(0);
        });

        it("Should return error if input isn't equal to value", () => {
            let validator = array().equals([1,2,3,4,5]);
            expect(handleArrayValidation("field", validator.validators[1], [1,2,3,4])).toContainEqual({
                field: "field", message: array_equal_error_message()
            });
        });

        it("Shouldn't return error if input is equal to value", () => {
            let validator = array().equals([1,2,3,4,5]);
            expect(handleArrayValidation("field", validator.validators[1], [1,2,3,4,5]).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value isn't provided", () => {
            let validator = array().equals([1,2,3,4,5]);
            expect(handleArrayValidation("field", validator.validators[1], null).length).toBe(0);
        });

        it("Should return error if input doesn't contain value", () => {
            let validator = array().contains(10);
            expect(handleArrayValidation("field", validator.validators[1], [1,2,3,4])).toContainEqual({
                field: "field", message: array_contains_error_message(10)
            });
        });

        it("Shouldn't return error if input contains value", () => {
            let validator = array().contains(5);
            expect(handleArrayValidation("field", validator.validators[1], [1,2,3,4,5]).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value isn't provided", () => {
            let validator = array().contains(10);
            expect(handleArrayValidation("field", validator.validators[1], null).length).toBe(0);
        });

        it("Should return error if input size doesn't match input", () => {
            let validator = array().size(10);
            expect(handleArrayValidation("field", validator.validators[1], [1,2,3,4])).toContainEqual({
                field: "field", message: array_size_error_message(10)
            });
        });

        it("Shouldn't return error if input size mathes input", () => {
            let validator = array().size(5);
            expect(handleArrayValidation("field", validator.validators[1], [1,2,3,4,5]).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value isn't provided", () => {
            let validator = array().size(10);
            expect(handleArrayValidation("field", validator.validators[1], null).length).toBe(0);
        });

    });

    describe("Input Validation", () => {
        it("Should return error if contain message is not a string", () => {
            try {
                array().contains(10, 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if equals message is not a string", () => {
            try {
                array().equals([], 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if equals value is not an array", () => {
            try {
                array().equals("invalid");
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if equals value is not an array", () => {
            try {
                array().equals();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if size message is not a string", () => {
            try {
                array().size(5, 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if size value is not an integer", () => {
            try {
                array().size(1.5);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if size value is not an integer", () => {
            try {
                array().size();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if required message is not a string", () => {
            try {
                array().required(10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });
    });

    describe("isArray", () => {
        it("Should return true if input is array", () => {
            expect(isArray([])).toBeTruthy();
            expect(isArray([1,2,3,4,5])).toBeTruthy();
        });

        it("Should return false if input is not array", () => {
            expect(isArray("INVALID-DATE")).toBeFalsy();
            expect(isArray(null)).toBeFalsy();
        });

    });

});