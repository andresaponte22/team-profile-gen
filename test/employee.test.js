const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Employee instance", () => {
        it("should create a new instance of our employee object", () => {
            let employee = new Employee("Andres", 1, "andres@gmail.com");
            let result = employee

            expect(result).toEqual(employee);
        })
    })

    describe("getName", () => {
        it("should return a string of the employee's name", () => {
            let employee = new Employee("Andres", 1, "andres@gmail.com");
            let result = employee.getName()

            expect(result).toEqual(employee.name);
        })
    })
    
    describe("getID", () => {
        it("should return the employee's ID", () => {
            let employee = new Employee("Adrian", 2, "adrian@gmail.com");
            let result = employee.getId()

            expect(result).toEqual(3);
        })
    })
    
    describe("getEmail", () => {
        it("should return a string of the employee's email", () => {
            let employee = new Employee("Adrian", 2, "adrian@gmail.com");
            let result = employee.getEmail()

            expect(result).toEqual(employee.email);
        })
    })

    describe("getRole", () => {
        it("should return string Employee", () => {
            let employee = new Employee("Alfonso", 3, "alfonso@gmail.com");
            let result = employee.getRole()

            expect(result).toEqual("Employee");
        })
    })
})