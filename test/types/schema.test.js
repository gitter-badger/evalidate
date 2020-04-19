import date from '../../src/types/date';
import Schema from '../../src/types/schema';
import number from '../../src/types/number';
import string from '../../src/types/string';
import boolean from '../../src/types/boolean';
import { STRING_VALIDATOR_TYPES, NUMBER_VALIDATOR_TYPES, DATE_VALIDATOR_TYPES, BOOLEAN_VALIDATOR_TYPES } from '../../src/utils/constants';
import { 
    string_email_error_message, 
    string_maxlength_error_message, 
    string_minlength_error_message, 
    string_required_error_message, 
    string_equal_error_message,
    string_in_error_message
} from '../../src/messages/string';
import { 
    number_equal_error_message, 
    number_in_error_message, 
    number_integer_error_message, 
    number_max_error_message, 
    number_min_error_message, 
    number_required_error_message 
} from '../../src/messages/number';
import { 
    date_after_error_message, 
    date_before_error_message, 
    date_equal_error_message, 
    date_required_error_message 
} from '../../src/messages/date';
import { 
    boolean_equal_error_message, 
    boolean_required_error_message 
} from '../../src/messages/boolean';

describe("Schema", () => {
    
    describe("String Schemas", () => {
        it("Should create schema for email", () => {
            let schema = new Schema({
                email: string().email()
            });
            
            expect(schema.schema["email"]).toBeTruthy();
            expect(schema.schema["email"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.EMAIL,
                message: string_email_error_message()
            });
        });

        it("Should create schema for email with message", () => {
            let schema = new Schema({
                email: string().email('Email Error!')
            });

            expect(schema.schema["email"]).toBeTruthy();
            expect(schema.schema["email"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.EMAIL,
                message: 'Email Error!'
            });
        });

        it("Should create schema for equal", () => {
            let schema = new Schema({
                status: string().equals("Active")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: "Active",
                type: STRING_VALIDATOR_TYPES.EQUAL,
                message: string_equal_error_message()
            });
        });

        it("Should create schema for equal with message", () => {
            let schema = new Schema({
                status: string().equals("Active", "String Equal Error Message!")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: "Active",
                type: STRING_VALIDATOR_TYPES.EQUAL,
                message: "String Equal Error Message!"
            });
        });

        it("Should create schema for in", () => {
            let schema = new Schema({
                status: string().in(["Active", "Deactive"])
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: ["Active", "Deactive"],
                type: STRING_VALIDATOR_TYPES.IN,
                message: string_in_error_message()
            });
        });

        it("Should create schema for in with message", () => {
            let schema = new Schema({
                status: string().in(["Active", "Deactive"], "String In Error Message!")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: ["Active", "Deactive"],
                type: STRING_VALIDATOR_TYPES.IN,
                message: "String In Error Message!"
            });
        });

        it("Should create schema for minlength", () => {
            let schema = new Schema({
                status: string().minlength(10)
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: 10,
                type: STRING_VALIDATOR_TYPES.MINLENGTH,
                message: string_minlength_error_message(10)
            });
        });
        
        it("Should create schema for minlength with message", () => {
            let schema = new Schema({
                status: string().minlength(10, "String Minlength Error!")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: 10,
                type: STRING_VALIDATOR_TYPES.MINLENGTH,
                message: "String Minlength Error!"
            });
        });

        it("Should create schema for maxlength", () => {
            let schema = new Schema({
                status: string().maxlength(10)
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: 10,
                type: STRING_VALIDATOR_TYPES.MAXLENGTH,
                message: string_maxlength_error_message(10)
            });
        });
        
        it("Should create schema for maxlength with message", () => {
            let schema = new Schema({
                status: string().maxlength(10, "String Maxlength Error!")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: 10,
                type: STRING_VALIDATOR_TYPES.MAXLENGTH,
                message: "String Maxlength Error!"
            });
        });

        it("Should create schema for required", () => {
            let schema = new Schema({
                name: string().required()
            });
            
            expect(schema.schema["name"]).toBeTruthy();
            expect(schema.schema["name"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: string_required_error_message()
            });
        });

        it("Should create schema for required with message", () => {
            let schema = new Schema({
                name: string().required('Required Error Message!')
            });

            expect(schema.schema["name"]).toBeTruthy();
            expect(schema.schema["name"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: 'Required Error Message!'
            });
        });

        it("Should create schema with mixed", () => {
            let schema = new Schema({
                name: string().required('Name is required!'),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
            });

            expect(schema.schema["name"]).toBeTruthy();
            expect(schema.schema["name"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: 'Name is required!'
            });

            expect(schema.schema["email"]).toBeTruthy();
            expect(schema.schema["email"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.EMAIL,
                message: string_email_error_message()
            });
            expect(schema.schema["email"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: "Email is required!"
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: "Status is required!"
            });
            expect(schema.schema["status"].validators).toContainEqual({
                value: ["Active", "Deactive"],
                type: STRING_VALIDATOR_TYPES.IN,
                message: string_in_error_message()
            });
        });
    });

    describe("Number Schemas", () => {
        it("Should create schema for equals", () => {
            let schema = new Schema({
                code: number().equals(10)
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                value: 10,
                type: NUMBER_VALIDATOR_TYPES.EQUAL,
                message: number_equal_error_message()
            });
        });

        it("Should create schema for equals with message", () => {
            let schema = new Schema({
                code: number().equals(10, "Number Equals Error!")
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                value: 10,
                type: NUMBER_VALIDATOR_TYPES.EQUAL,
                message: "Number Equals Error!"
            });
        });

        it("Should create schema for in", () => {
            let schema = new Schema({
                code: number().in([10, 20])
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                value: [10, 20],
                type: NUMBER_VALIDATOR_TYPES.IN,
                message: number_in_error_message()
            });
        });

        it("Should create schema for in with message", () => {
            let schema = new Schema({
                code: number().in([10, 20], "Number In Error!")
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                value: [10, 20],
                type: NUMBER_VALIDATOR_TYPES.IN,
                message: "Number In Error!"
            });
        });

        it("Should create schema for integer", () => {
            let schema = new Schema({
                code: number().integer()
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                type: NUMBER_VALIDATOR_TYPES.INTEGER,
                message: number_integer_error_message()
            });
        });

        it("Should create schema for integer with message", () => {
            let schema = new Schema({
                code: number().integer("Number Integer Error!")
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                type: NUMBER_VALIDATOR_TYPES.INTEGER,
                message: "Number Integer Error!"
            });
        });

        it("Should create schema for max", () => {
            let schema = new Schema({
                age: number().max(10)
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                value: 10,
                type: NUMBER_VALIDATOR_TYPES.MAX,
                message: number_max_error_message(10)
            });
        });

        it("Should create schema for max with message", () => {
            let schema = new Schema({
                age: number().max(10, "Number Max Error!")
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                value: 10,
                type: NUMBER_VALIDATOR_TYPES.MAX,
                message: "Number Max Error!"
            });
        });

        it("Should create schema for min", () => {
            let schema = new Schema({
                age: number().min(10)
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                value: 10,
                type: NUMBER_VALIDATOR_TYPES.MIN,
                message: number_min_error_message(10)
            });
        });

        it("Should create schema for min with message", () => {
            let schema = new Schema({
                age: number().min(10, "Number Min Error!")
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                value: 10,
                type: NUMBER_VALIDATOR_TYPES.MIN,
                message: "Number Min Error!"
            });
        });

        it("Should create schema for required", () => {
            let schema = new Schema({
                age: number().required()
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: number_required_error_message(10)
            });
        });

        it("Should create schema for required with message", () => {
            let schema = new Schema({
                age: number().required("Number Required Error!")
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: "Number Required Error!"
            });
        });
    });

    describe("Date Schemas", () => {
        it("Should create schema for after", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().after(input)
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                type: DATE_VALIDATOR_TYPES.AFTER,
                message: date_after_error_message(input)
            });
        });

        it("Should create schema for after with message", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().after(input, "Date Error Message!")
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                type: DATE_VALIDATOR_TYPES.AFTER,
                message: "Date Error Message!"
            });
        });

        it("Should create schema for before", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().before(input)
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                type: DATE_VALIDATOR_TYPES.BEFORE,
                message: date_before_error_message(input)
            });
        });

        it("Should create schema for before with message", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().before(input, "Date Error Message!")
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                type: DATE_VALIDATOR_TYPES.BEFORE,
                message: "Date Error Message!"
            });
        });

        it("Should create schema for equal", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().equals(input)
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                type: DATE_VALIDATOR_TYPES.EQUAL,
                message: date_equal_error_message(input)
            });
        });

        it("Should create schema for equal with message", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().equals(input, "Date Error Message!")
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                type: DATE_VALIDATOR_TYPES.EQUAL,
                message: "Date Error Message!"
            });
        });

        it("Should create schema for requried", () => {
            let schema = new Schema({
                date: date().required()
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                type: DATE_VALIDATOR_TYPES.REQUIRED,
                message: date_required_error_message()
            });
        });

        it("Should create schema for requried with message", () => {
            let schema = new Schema({
                date: date().required("Date Error Message!")
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                type: DATE_VALIDATOR_TYPES.REQUIRED,
                message: "Date Error Message!"
            });
        });

    });

    describe("Boolean Schemas", () => {
        it("Should create schema for equals", () => {
            let schema = new Schema({
                isActive: boolean().equals(true)
            });
            
            expect(schema.schema["isActive"]).toBeTruthy();
            expect(schema.schema["isActive"].validators).toContainEqual({
                value: true,
                type: BOOLEAN_VALIDATOR_TYPES.EQUAL,
                message: boolean_equal_error_message()
            });
        });

        it("Should create schema for equals with message", () => {
            let schema = new Schema({
                isActive: boolean().equals(true, "Boolean Error Message!")
            });
            
            expect(schema.schema["isActive"]).toBeTruthy();
            expect(schema.schema["isActive"].validators).toContainEqual({
                value: true,
                type: BOOLEAN_VALIDATOR_TYPES.EQUAL,
                message: "Boolean Error Message!"
            });
        });

        it("Should create schema for required", () => {
            let schema = new Schema({
                isActive: boolean().required()
            });
            
            expect(schema.schema["isActive"]).toBeTruthy();
            expect(schema.schema["isActive"].validators).toContainEqual({
                type: BOOLEAN_VALIDATOR_TYPES.REQUIRED,
                message: boolean_required_error_message()
            });
        });

        it("Should create schema for required with message", () => {
            let schema = new Schema({
                isActive: boolean().required("Boolean Error Message!")
            });
            
            expect(schema.schema["isActive"]).toBeTruthy();
            expect(schema.schema["isActive"].validators).toContainEqual({
                type: BOOLEAN_VALIDATOR_TYPES.REQUIRED,
                message: "Boolean Error Message!"
            });
        });
    
    });

    describe("init", () => {
        let schema;

        beforeAll(() => {
            schema = new Schema({
                name: string().required('Name is required!'),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
                age: number().required("Age is required!").min(0).max(100)
            });
        });

        it("Should Generate Schema", () => {
            expect(schema.schema["name"]).toBeTruthy();
            expect(schema.schema["name"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: 'Name is required!'
            });

            expect(schema.schema["email"]).toBeTruthy();
            expect(schema.schema["email"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.EMAIL,
                message: string_email_error_message()
            });
            expect(schema.schema["email"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: "Email is required!"
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: "Status is required!"
            });
            expect(schema.schema["status"].validators).toContainEqual({
                value: ["Active", "Deactive"],
                type: STRING_VALIDATOR_TYPES.IN,
                message: string_in_error_message()
            });

            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: "Age is required!"
            });
            expect(schema.schema["age"].validators).toContainEqual({
                value: 100,
                type: NUMBER_VALIDATOR_TYPES.MAX,
                message: number_max_error_message(100)
            });
            expect(schema.schema["age"].validators).toContainEqual({
                value: 0,
                type: NUMBER_VALIDATOR_TYPES.MIN,
                message: number_min_error_message(0)
            });
        });

        it("Should Replace Fields", () => {
            schema.init();
            expect(schema.schema["age"].validators).toContainEqual({
                value: 100,
                type: NUMBER_VALIDATOR_TYPES.MAX,
                message: 'age must be less than 100'
            });
            expect(schema.schema["age"].validators).toContainEqual({
                value: 0,
                type: NUMBER_VALIDATOR_TYPES.MIN,
                message: 'age must be greater than 0'
            });
            expect(schema.schema["status"].validators).toContainEqual({
                value: ["Active", "Deactive"],
                type: STRING_VALIDATOR_TYPES.IN,
                message: 'Incorrect status value provided'
            });
        });

    });
});