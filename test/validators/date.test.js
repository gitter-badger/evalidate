import moment from 'moment';

import date from '../../src/types/date';
import { isDate, handleDateValidation } from '../../src/validators/date';
import { date_required_error_message, date_equal_error_message, date_after_error_message, date_before_error_message } from '../../src/messages/date';

describe("Date Validator", () => {

    describe("handleDateValidation", () => {
        it("Should return error if value is null and date is required", () => {
            let validator = date().required();
            expect(handleDateValidation("field", validator.validators[0], null)).toContainEqual({
                field: "field", message: date_required_error_message()
            });
        });

        it("Shouldn't return error if value is not null and date is required", () => {
            let validator = date().required();
            expect(handleDateValidation("field", validator.validators[0], new Date()).length).toBe(0);
        });

        it("Should return error if input isn't equal to value", () => {
            let validator = date().equals(new Date());
            expect(handleDateValidation("field", validator.validators[0], new Date())).toContainEqual({
                field: "field", message: date_equal_error_message()
            });
        });

        it("Shouldn't return error if input is equal to value", () => {
            let input = new Date();
            let validator = date().equals(input);
            expect(handleDateValidation("field", validator.validators[0], input).length).toBe(0);
        });

        it("Shouldn't return error if input is not required and value is not passed", () => {
            let input = new Date();
            let validator = date().equals(input);
            expect(handleDateValidation("field", validator.validators[0], null).length).toBe(0);
        });

        it("Should return error if input isn't after value", () => {
            let input = moment().toDate();
            let validator = date().after(input);
            expect(handleDateValidation("field", validator.validators[0], moment().subtract(1, 'minute').toDate())).toContainEqual({
                field: "field", message: date_after_error_message(input)
            });
        });

        it("Shouldn't return error if input is after value", () => {
            let input = moment().toDate();
            let validator = date().after(input);
            expect(handleDateValidation("field", validator.validators[0], moment().toDate()).length).toBe(0);
        });

        it("Shouldn't return error if input is not required and vallue is not passed", () => {
            let input = moment().toDate();
            let validator = date().after(input);
            expect(handleDateValidation("field", validator.validators[0], null).length).toBe(0);
        });

        it("Should return error if input isn't before value", () => {
            let input = moment();
            let validator = date().before(input);
            expect(handleDateValidation("field", validator.validators[0], moment().add(1, 'hours'))).toContainEqual({
                field: "field", message: date_before_error_message(input)
            });
        });

        it("Shouldn't return error if input is before value", () => {
            let input = moment().toDate();
            let validator = date().before(input);
            expect(handleDateValidation("field", validator.validators[0], moment().subtract(1, 'hours').toDate()).length).toBe(0);
        });

        it("Shouldn't return error if input is not required and value is not passed", () => {
            let input = moment().toDate();
            let validator = date().before(input);
            expect(handleDateValidation("field", validator.validators[0], null).length).toBe(0);
        });

    });

    describe("isDate", () => {
        it("Should return true if input is date", () => {
            expect(isDate(new Date())).toBeTruthy();
        });

        it("Should return false if input is not date", () => {
            expect(isDate("INVALID-DATE")).toBeFalsy();
            expect(isDate(null)).toBeFalsy();
        });

    });

});