import string from '../../src/types/string';
import { handleStringValidation, isString } from '../../src/validators/string';
import { string_required_error_message, string_email_error_message, string_equal_error_message, string_maxlength_error_message, string_minlength_error_message, string_in_error_message } from '../../src/messages/string';

describe("String Validator", () => {
    
    describe("handleStringValidation", () => {
        it("Should return error if value is null and string is required", () => {
            let validator = string().required();
            expect(handleStringValidation("field", validator.validators[0], null)).toContainEqual({
                field: "field", message: string_required_error_message()
            });
        });

        it("Shouldn't return error if value is not null and string is required", () => {
            let validator = string().required();
            expect(handleStringValidation("field", validator.validators[0], 'null')).toEqual([]);
        });

        it("Should return error if invalid email is provided", () => {
            let validator = string().email();
            expect(handleStringValidation("field", validator.validators[0], 'invalid-email')).toContainEqual({
                field: "field", message: string_email_error_message()
            });
        });

        it("Shouldn't return error if valid email is provided", () => {
            let validator = string().email();
            expect(handleStringValidation("field", validator.validators[0], 'aderabiruk@gmail.com')).toEqual([]);
        });

        it("Should return error if value matches required value", () => {
            let validator = string().equals("12345");
            expect(handleStringValidation("field", validator.validators[0], 'invalid-email')).toContainEqual({
                field: "field", message: string_equal_error_message()
            });
        });

        it("Shouldn't return error if value matches required value", () => {
            let validator = string().equals("12345");
            expect(handleStringValidation("field", validator.validators[0], '12345')).toEqual([]);
        });

        it("Should return error if value is not in provided array", () => {
            let validator = string().in(["Running", "Stopped"]);
            expect(handleStringValidation("field", validator.validators[0], 'invalid-email')).toContainEqual({
                field: "field", message: string_in_error_message()
            });
        });

        it("Shouldn't return error if value is in provided array", () => {
            let validator = string().in(["Running", "Stopped"]);
            expect(handleStringValidation("field", validator.validators[0], 'Stopped')).toEqual([]);
        });


        it("Should return error if length is greater than maxlength", () => {
            let validator = string().maxlength(5);
            expect(handleStringValidation("field", validator.validators[0], 'invalid-email')).toContainEqual({
                field: "field", message: string_maxlength_error_message(5)
            });
        });
        
        it("Should return error if length is less than maxlength", () => {
            let validator = string().maxlength(5);
            expect(handleStringValidation("field", validator.validators[0], '12345')).toEqual([]);
        });

        it("Should return error if length is less than minlength", () => {
            let validator = string().minlength(5);
            expect(handleStringValidation("field", validator.validators[0], 'a')).toContainEqual({
                field: "field", message: string_minlength_error_message(5)
            });
        });
        
        it("Should return error if length is greater than minlength", () => {
            let validator = string().minlength(5);
            expect(handleStringValidation("field", validator.validators[0], '12345')).toEqual([]);
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