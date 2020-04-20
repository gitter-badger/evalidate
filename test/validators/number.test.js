import number from '../../src/types/number';
import { isNumber, handleNumberValidation } from '../../src/validators/number';
import { number_required_error_message, number_equal_error_message, number_in_error_message, number_integer_error_message, number_max_error_message, number_min_error_message } from '../../src/messages/number';
import { number_type_error_message } from '../../src/utils/errors';

describe("Number Validator", () => {

    describe("handleNumberValidation", () => {
        it("Should return error if value is not a number", () => {
            let validator = number().required();
            expect(handleNumberValidation("field", validator.validators[0], "invalid")).toContainEqual({
                field: "field", message: number_type_error_message("${{}}")
            });
        });

        it("Should return error if value is null and number is required", () => {
            let validator = number().required();
            expect(handleNumberValidation("field", validator.validators[1], null)).toContainEqual({
                field: "field", message: number_required_error_message()
            });
        });

        it("Shouldn't return error if value is not null and number is required", () => {
            let validator = number().required();
            expect(handleNumberValidation("field", validator.validators[1], 10).length).toBe(0);
        });

        it("Should return error if input matches value", () => {
            let validator = number().equals(10);
            expect(handleNumberValidation("field", validator.validators[1], 5)).toContainEqual({
                field: "field", message: number_equal_error_message()
            });
        });

        it("Shouldn't return error if input doesn't match value", () => {
            let validator = number().equals(10);
            expect(handleNumberValidation("field", validator.validators[1], 10).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = number().equals(10);
            expect(handleNumberValidation("field", validator.validators[1], null).length).toBe(0);
        });

        it("Should return error if input is in value", () => {
            let validator = number().in([1,2,3]);
            expect(handleNumberValidation("field", validator.validators[1], 5)).toContainEqual({
                field: "field", message: number_in_error_message()
            });
        });

        it("Shouldn't return error if input isn't in value", () => {
            let validator = number().in([1,2,3]);
            expect(handleNumberValidation("field", validator.validators[1], 1).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = number().in([1,2,3]);
            expect(handleNumberValidation("field", validator.validators[1], null).length).toBe(0);
        });

        it("Should return error if input isn't integer", () => {
            let validator = number().integer();
            expect(handleNumberValidation("field", validator.validators[1], 5.5)).toContainEqual({
                field: "field", message: number_integer_error_message()
            });
        });

        it("Shouldn't return error if input is integer", () => {
            let validator = number().integer();
            expect(handleNumberValidation("field", validator.validators[1], 1).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = number().integer();
            expect(handleNumberValidation("field", validator.validators[1], null).length).toBe(0);
        });

        it("Should return error if input is above value", () => {
            let validator = number().max(20);
            expect(handleNumberValidation("field", validator.validators[1], 21)).toContainEqual({
                field: "field", message: number_max_error_message(20)
            });
        });

        it("Shouldn't return error if input isn't above value", () => {
            let validator = number().max(20);
            expect(handleNumberValidation("field", validator.validators[1], 20).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = number().max(20);
            expect(handleNumberValidation("field", validator.validators[1], null).length).toBe(0);
        });

        it("Should return error if input is below value", () => {
            let validator = number().min(20);
            expect(handleNumberValidation("field", validator.validators[1], 19)).toContainEqual({
                field: "field", message: number_min_error_message(20)
            });
        });

        it("Shouldn't return error if input isn't below value", () => {
            let validator = number().min(20);
            expect(handleNumberValidation("field", validator.validators[1], 20).length).toBe(0);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = number().min(20);
            expect(handleNumberValidation("field", validator.validators[1], null).length).toBe(0);
        });
    });

    describe("Input Validation", () => {
        it("Should return error if equals value is not a number", () => {
            try {
                number().equals();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if equals value is not a number", () => {
            try {
                number().equals("invalid");
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });
        
        it("Should return error if equals message is not a string", () => {
            try {
                number().equals(10, 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if min value is not a number", () => {
            try {
                number().min();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if min value is not a number", () => {
            try {
                number().min("invalid");
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });
        
        it("Should return error if min message is not a string", () => {
            try {
                number().min(10, 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if max value is not a number", () => {
            try {
                number().max();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if max value is not a number", () => {
            try {
                number().max("invalid");
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });
        
        it("Should return error if max message is not a string", () => {
            try {
                number().max(10, 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if in value is not an array", () => {
            try {
                number().in();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if in value is not an array", () => {
            try {
                number().in("invalid");
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });
        
        it("Should return error if in message is not a string", () => {
            try {
                number().in(10, 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if integer message is not a string", () => {
            try {
                number().integer(10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if required message is not a string", () => {
            try {
                number().required(10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });
    });
    
    describe("isNumber", () => {
        it("Should return true if input is number", () => {
            expect(isNumber(100)).toBeTruthy();
        });

        it("Should return false if input is not number", () => {
            expect(isNumber("10")).toBeFalsy();
            expect(isNumber(null)).toBeFalsy();
            expect(isNumber([])).toBeFalsy();
        });

    });

});