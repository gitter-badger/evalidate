import String from '../../src/types/string';
import { STRING_VALIDATOR_TYPES } from '../../src/utils/constants';
import { string_email_error_message, string_equal_error_message, string_in_error_message, string_maxlength_error_message, string_minlength_error_message, string_required_error_message } from '../../src/messages/string';

describe("StringValidator", () => {
    
    describe("email", () => {
        it("Should add email validator without message", () => {
            let validator = String();
            validator.email();

            expect(validator.validators).toContainEqual({message: string_email_error_message(), type: STRING_VALIDATOR_TYPES.EMAIL});
        });

        it("Should add email validator with message", () => {
            let validator = String();
            validator.email("Incorrect Email Address!");

            expect(validator.validators).toContainEqual({message: "Incorrect Email Address!", type: STRING_VALIDATOR_TYPES.EMAIL});
        });
    });

    describe("equals", () => {
        it("Should add equals validator without message", () => {
            let validator = String();
            validator.equals("VALUE");

            expect(validator.validators).toContainEqual({message: string_equal_error_message(), value: "VALUE", type: STRING_VALIDATOR_TYPES.EQUAL});
        });

        it("Should add equals validator with message", () => {
            let validator = String();
            validator.equals("VALUE", "Equal Error Message!");

            expect(validator.validators).toContainEqual({message: "Equal Error Message!", value: "VALUE", type: STRING_VALIDATOR_TYPES.EQUAL});
        });
    });

    describe("in", () => {
        it("Should add in validator without message", () => {
            let validator = String();
            validator.in(["A", "B"]);

            expect(validator.validators).toContainEqual({message: string_in_error_message(), value: ["A", "B"], type: STRING_VALIDATOR_TYPES.IN});
        });

        it("Should add in validator with message", () => {
            let validator = String();
            validator.in(["A", "B"], "Equal Error Message!");

            expect(validator.validators).toContainEqual({message: "Equal Error Message!", value: ["A", "B"], type: STRING_VALIDATOR_TYPES.IN});
        });
    });

    describe("maxlength", () => {
        it("Should add maxlength validator without message", () => {
            let validator = String();
            validator.maxlength(10);

            expect(validator.validators).toContainEqual({message: string_maxlength_error_message(10), value: 10, type: STRING_VALIDATOR_TYPES.MAXLENGTH});
        });

        it("Should add maxlength validator with message", () => {
            let validator = String();
            validator.maxlength(10, "Max Length Error Message!");

            expect(validator.validators).toContainEqual({message: "Max Length Error Message!", value: 10, type: STRING_VALIDATOR_TYPES.MAXLENGTH});
        });
    });

    describe("minlength", () => {
        it("Should add minlength validator without message", () => {
            let validator = String();
            validator.minlength(10);

            expect(validator.validators).toContainEqual({message: string_minlength_error_message(10), value: 10, type: STRING_VALIDATOR_TYPES.MINLENGTH});
        });

        it("Should add minlength validator with message", () => {
            let validator = String();
            validator.minlength(10, "Max Length Error Message!");

            expect(validator.validators).toContainEqual({message: "Max Length Error Message!", value: 10, type: STRING_VALIDATOR_TYPES.MINLENGTH});
        });
    });

    describe("required", () => {
        it("Should add required validator without message", () => {
            let validator = String();
            validator.required();

            expect(validator.validators).toContainEqual({message: string_required_error_message(), type: STRING_VALIDATOR_TYPES.REQUIRED});
        });

        it("Should add required validator with message", () => {
            let validator = String();
            validator.required("Required Error Message!");

            expect(validator.validators).toContainEqual({message: "Required Error Message!", type: STRING_VALIDATOR_TYPES.REQUIRED});
        });
    });

});