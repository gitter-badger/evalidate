import string from '../../src/types/string';
import { handleStringValidation, isString } from '../../src/validators/string';
import { string_required_error_message, string_email_error_message, string_equal_error_message, string_maxlength_error_message, string_minlength_error_message, string_in_error_message } from '../../src/messages/string';
import { string_type_error_message } from '../../src/utils/errors';

describe("String Validator", () => {
    
    describe("handleStringValidation", () => {
        it("Should return error if value is not a string", () => {
            let validator = string().required();
            expect(handleStringValidation("field", validator.validators[0], [])).toContainEqual({
                field: "field", message: string_type_error_message("${{}}")
            });
        });

        it("Should return error if value is null and string is required", () => {
            let validator = string().required();
            expect(handleStringValidation("field", validator.validators[1], null)).toContainEqual({
                field: "field", message: string_required_error_message()
            });
        });

        it("Shouldn't return error if value is not null and string is required", () => {
            let validator = string().required();
            expect(handleStringValidation("field", validator.validators[1], 'null')).toEqual([]);
        });

        it("Should return error if invalid email is provided", () => {
            let validator = string().email();
            expect(handleStringValidation("field", validator.validators[1], 'invalid-email')).toContainEqual({
                field: "field", message: string_email_error_message()
            });
        });

        it("Shouldn't return error if valid email is provided", () => {
            let validator = string().email();
            expect(handleStringValidation("field", validator.validators[1], 'aderabiruk@gmail.com')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().email();
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if value matches required value", () => {
            let validator = string().equals("12345");
            expect(handleStringValidation("field", validator.validators[1], 'invalid-email')).toContainEqual({
                field: "field", message: string_equal_error_message()
            });
        });

        it("Shouldn't return error if value matches required value", () => {
            let validator = string().equals("12345");
            expect(handleStringValidation("field", validator.validators[1], '12345')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().equals("12345");
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if value is not in provided array", () => {
            let validator = string().in(["Running", "Stopped"]);
            expect(handleStringValidation("field", validator.validators[1], 'invalid-email')).toContainEqual({
                field: "field", message: string_in_error_message()
            });
        });

        it("Shouldn't return error if value is in provided array", () => {
            let validator = string().in(["Running", "Stopped"]);
            expect(handleStringValidation("field", validator.validators[1], 'Stopped')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().in(["Running", "Stopped"]);
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if length is greater than maxlength", () => {
            let validator = string().maxlength(5);
            expect(handleStringValidation("field", validator.validators[1], 'invalid-email')).toContainEqual({
                field: "field", message: string_maxlength_error_message(5)
            });
        });
        
        it("Should return error if length is less than maxlength", () => {
            let validator = string().maxlength(5);
            expect(handleStringValidation("field", validator.validators[1], '12345')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().maxlength(5);
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if length is less than minlength", () => {
            let validator = string().minlength(5);
            expect(handleStringValidation("field", validator.validators[1], 'a')).toContainEqual({
                field: "field", message: string_minlength_error_message(5)
            });
        });
        
        it("Should return error if length is greater than minlength", () => {
            let validator = string().minlength(5);
            expect(handleStringValidation("field", validator.validators[1], '12345')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().minlength(5);
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

    });

    describe("Input Validation", () => {
        it("Should return error if equals value is not a string", () => {
            try {
                string().equals();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if equals value is not a string", () => {
            try {
                string().equals([]);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if equals value is not a string", () => {
            try {
                string().equals("value", 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if in value is not a string", () => {
            try {
                string().in();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if in value is not a string", () => {
            try {
                string().in(10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if in value is not a string", () => {
            try {
                string().in([], 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if maxlength value is not a string", () => {
            try {
                string().maxlength();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if maxlength value is not a string", () => {
            try {
                string().maxlength("invalid");
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if maxlength value is not a string", () => {
            try {
                string().maxlength(10, 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if minlength value is not a string", () => {
            try {
                string().minlength();
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if minlength value is not a string", () => {
            try {
                string().minlength("invalid");
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if minlength value is not a string", () => {
            try {
                string().minlength(10, 10);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if required value is not a string", () => {
            try {
                string().required([]);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });

        it("Should return error if email value is not a string", () => {
            try {
                string().email([]);
                fail();
            }
            catch (error) {
                expect(error).toBeTruthy();
            }
        });
    });

    describe("isString", () => {
        it("Should return true if input is string", () => {
            expect(isString("String")).toBeTruthy();
        });

        it("Should return false if input is not string", () => {
            expect(isString(10)).toBeFalsy();
            expect(isString(null)).toBeFalsy();
            expect(isString([])).toBeFalsy();
        });

    });

});