import AbstractValidator from "./abstract";

/**
 * Object Validator Class
 * 
 * @method equals
 * @method required
 */
export class ObjectValidator extends AbstractValidator {
    
    constructor(schema) {
        super();
        this.schema = schema;
    }

}

export default (schema) => {
    return new ObjectValidator(schema);
};

