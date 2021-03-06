import evalidate from '../dist/index';

describe("String Validator", () => {
    describe("String", () => {
        it("Scenario #1", () => {
            let schema = new evalidate.schema({
                name: evalidate.string().required('Name is required!').minlength(3).maxlength(10),
                email: evalidate.string().required("Email is required!").email(),
                status: evalidate.string().required("Status is required!").in(["Active", "Deactive"]),
                type: evalidate.string().required().equals("Admin")
            });
            let result = schema.validate({});
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'name', message: "Name is required!"
            });
            expect(result.errors).toContainEqual({
                field: 'email', message: "Email is required!"
            });
            expect(result.errors).toContainEqual({
                field: 'status', message: "Status is required!"
            });
            expect(result.errors).toContainEqual({
                field: 'type', message: "type is required"
            });
        });

        it("Scenario #2", () => {
            let schema = new evalidate.schema({
                name: evalidate.string().required('Name is required!').minlength(3).maxlength(10),
                email: evalidate.string().required("Email is required!").email(),
                status: evalidate.string().required("Status is required!").in(["Active", "Deactive"]),
                type: evalidate.string().required().equals("Admin")
            });
            let result = schema.validate({
                name: "jo",
                email: "aderabiruk",
                status: "Unknown",
                type: "User"
            });
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'name', message: "name must have at least 3 characters"
            });
            expect(result.errors).toContainEqual({
                field: 'email', message: "Email address is invalid"
            });
            expect(result.errors).toContainEqual({
                field: 'status', message: "Invalid value provided for status"
            });
            expect(result.errors).toContainEqual({
                field: 'type', message: "Invalid value provided for type"
            });
        });

        it("Scenario #3", () => {
            let schema = new evalidate.schema({
                name: evalidate.string().required('Name is required!').minlength(3).maxlength(10),
                email: evalidate.string().required("Email is required!").email(),
                status: evalidate.string().required("Status is required!").in(["Active", "Deactive"]),
                type: evalidate.string().required().equals("Admin")
            });
            let result = schema.validate({
                name: "aderabiruk",
                email: "aderabiruk@gmail.com",
                status: "Active",
                type: "Admin"
            });
            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });
    });

    describe("Number", () => {
        it("Scenario #1", () => {
            let schema = new evalidate.schema({
                code: evalidate.number().equals(10),
                age: evalidate.number().integer().min(0).max(100, "Max Error"),
                status: evalidate.number().in([1, 2, 3, 4, 5], "In Error")
            });
            let result = schema.validate({});

            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });

        it("Scenario #2", () => {
            let schema = new evalidate.schema({
                code: evalidate.number().equals(10),
                age: evalidate.number().integer().min(0).max(100, "Max Error"),
                status: evalidate.number().in([1, 2, 3, 4, 5], "In Error")
            });
            let result = schema.validate({
                code: 9,
                age: 101.5,
                status: 6
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'code', message: "Invalid value provided for code"
            });
            expect(result.errors).toContainEqual({
                field: 'age', message: "Max Error"
            });
            expect(result.errors).toContainEqual({
                field: 'age', message: "age must be an integer"
            });
            expect(result.errors).toContainEqual({
                field: 'status', message: "In Error"
            });
        });

        it("Scenario #3", () => {
            let schema = new evalidate.schema({
                code: evalidate.number().equals(10),
                age: evalidate.number().integer().min(0).max(100, "Max Error"),
                status: evalidate.number().in([1, 2, 3, 4, 5], "In Error")
            });
            let result = schema.validate({
                code: 10,
                age: 100,
                status: 5
            });

            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });
        
    });

    describe("Date", () => {
        it("Scenario #1", () => {
            let schema = new evalidate.schema({
                date: evalidate.date().required().equals("2019-01-01"),
                birthday: evalidate.date().required().after("2010-01-01").before("2020-01-01")
            });

            let result = schema.validate({});
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'date', message: "date is required"
            });
            expect(result.errors).toContainEqual({
                field: 'birthday', message: "birthday is required"
            });
        });

        it("Scenario #2", () => {
            let schema = new evalidate.schema({
                date: evalidate.date().required().equals("2019-01-01"),
                birthday: evalidate.date().required().after("2010-01-01").before("2020-01-01")
            });

            let result = schema.validate({
                date: "2019-01-02",
                birthday: "2009-01-01"
            });
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'date', message: "Invalid value provided for date"
            });
            expect(result.errors).toContainEqual({
                field: 'birthday', message: "birthday must be after 2010-01-01"
            });
        });

        it("Scenario #3", () => {
            let schema = new evalidate.schema({
                date: evalidate.date().required().equals("2019-01-01"),
                birthday: evalidate.date().required().after("2010-01-01").before("2020-01-01")
            });

            let result = schema.validate({
                date: "2019-01-01",
                birthday: "2010-01-01"
            });
            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });
    });

    describe('Boolean', () => {
        it("Scenario #1", () => {
            let schema = new evalidate.schema({
                status: evalidate.boolean().required().equals(false, "Invalid value")
            });

            let result = schema.validate({});
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'status', message: "status is required"
            });
        });

        it("Scenario #2", () => {
            let schema = new evalidate.schema({
                status: evalidate.boolean().required().equals(false, "Invalid value")
            });

            let result = schema.validate({
                status: true
            });
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'status', message: "Invalid value"
            });
        });

        it("Scenario #3", () => {
            let schema = new evalidate.schema({
                status: evalidate.boolean().required().equals(false, "Invalid value")
            });

            let result = schema.validate({
                status: false
            });
            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });
    });

    describe('Array', () => {
        it("Scenario #1", () => {
            let schema = new evalidate.schema({
                list1: evalidate.array().required().contains(1).size(5),
                list2: evalidate.array().equals([1,2,3,4,5])
            });
            let result = schema.validate({});

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'list1', message: "list1 is required"
            });
        }); 

        it("Scenario #2", () => {
            let schema = new evalidate.schema({
                list1: evalidate.array().required().contains(1).size(5),
                list2: evalidate.array().equals([1,2,3,4,5])
            });
            let result = schema.validate({
                list1: [1,2,3,4],
                list2: [1,2,3,4]
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'list1', message: "list1 must have 5 elements"
            });
            expect(result.errors).toContainEqual({
                field: 'list2', message: "Invalid value provided for list2"
            });
        }); 

        it("Scenario #3", () => {
            let schema = new evalidate.schema({
                list1: evalidate.array().required().contains(1).size(5),
                list2: evalidate.array().equals([1,2,3,4,5])
            });
            let result = schema.validate({
                list1: [1,2,3,4,5],
                list2: [1,2,3,4,5]
            });

            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        }); 
    });

    describe('Object', () => {
        it("Scenario #1", () => {
            let schema = new evalidate.schema({
                name: evalidate.array().size(10),
                location: evalidate.object({
                    latitude: evalidate.number().required(),
                    longitude: evalidate.number().required()
                })
            });
            let result = schema.validate();
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "location.latitude",
                message: "latitude is required"
            });
            expect(result.errors).toContainEqual({
                field: "location.longitude",
                message: "longitude is required"
            }); 
        });

        it("Scenario #2", () => {
            let schema = new evalidate.schema({
                name: evalidate.array().size(10),
                location: evalidate.object({
                    latitude: evalidate.number().required(),
                    longitude: evalidate.number().required()
                })
            });
            let result = schema.validate({
                name: "invalid",
                location: {
                    latitude: "invalid",
                    longitude: 250
                }
            });
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "location.latitude",
                message: "latitude must be a number"
            });
            expect(result.errors).toContainEqual({
                field: "name",
                message: "name must be an array"
            }); 
        });

        it("Scenario #3", () => {
            let schema = new evalidate.schema({
                name: evalidate.array().size(10),
                location: evalidate.object({
                    latitude: evalidate.number().required().min(0),
                    longitude: evalidate.number().required().min(0)
                })
            });
            let result = schema.validate({
                name: [1,2,3,4,5,6,7,8,9,0],
                location: {
                    latitude: -1,
                    longitude: -1
                }
            });
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "location.latitude",
                message: "latitude must be greater than 0"
            });
            expect(result.errors).toContainEqual({
                field: "location.longitude",
                message: "longitude must be greater than 0"
            });
        });

        it("Scenario #4", () => {
            let schema = new evalidate.schema({
                name: evalidate.array().size(10),
                location: evalidate.object({
                    latitude: evalidate.number().required().min(0),
                    longitude: evalidate.number().required().min(0)
                })
            });
            let result = schema.validate({
                name: [1,2,3,4,5,6,7,8,9,0],
                location: {
                    latitude: 0,
                    longitude: 0
                }
            });
            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });

        it("Scenario #5", () => {
            let schema = new evalidate.schema({
                name: evalidate.string().required("Name is required"),
                address: evalidate.object({
                    city: evalidate.object({
                        name: evalidate.string().required("City is required")
                    }),
                    country: evalidate.object({
                        name: evalidate.string().required("Country is required"),
                        code: evalidate.object({
                            name: evalidate.number().required("Code is required").integer()
                        })
                    })
                })
            });
            let result = schema.validate({});
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "name",
                message: "Name is required"
            });
            expect(result.errors).toContainEqual({
                field: "address.city.name",
                message: "City is required"
            });
            expect(result.errors).toContainEqual({
                field: "address.country.name",
                message: "Country is required"
            });
            expect(result.errors).toContainEqual({
                field: "address.country.code.name",
                message: "Code is required"
            });
        });

        it("Scenario #6", () => {
            let schema = new evalidate.schema({
                name: evalidate.string().required("Name is required"),
                address: evalidate.object({
                    city: evalidate.object({
                        name: evalidate.string().required("City is required")
                    }),
                    country: evalidate.object({
                        name: evalidate.string().required("Country is required"),
                        code: evalidate.object({
                            name: evalidate.number().required("Code is required").integer()
                        })
                    })
                })
            });
            let result = schema.validate({
                name: "Biruk",
                address: {
                    city: {
                        name: []
                    },
                    country: {
                        name: "Ethiopia",
                        code: {
                            name: 1.25
                        }
                    }
                }
            });
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "address.city.name",
                message: "name must be a string"
            });
            expect(result.errors).toContainEqual({
                field: "address.country.code.name",
                message: "name must be an integer"
            });
        });

        it("Scenario #7", () => {
            let schema = new evalidate.schema({
                name: evalidate.string().required("Name is required"),
                address: evalidate.object({
                    city: evalidate.object({
                        name: evalidate.string().required("City is required")
                    }),
                    country: evalidate.object({
                        name: evalidate.string().required("Country is required"),
                        code: evalidate.object({
                            name: evalidate.number().required("Code is required").integer()
                        })
                    })
                })
            });
            let result = schema.validate({
                name: "Biruk",
                address: {
                    city: {
                        name:"Addis Ababa"
                    },
                    country: {
                        name: "Ethiopia",
                        code: {
                            name: 251
                        }
                    }
                }
            });
            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });
    });
    
});