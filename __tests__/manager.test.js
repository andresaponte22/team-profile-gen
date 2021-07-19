const Manager = require('../lib/Manager.js');

describe("Manager", () => {
    
    describe("Manager instance", () => {
        it("should create a new instance of our manager object ", () => {
            let manager = new Manager("Andres", 1, "andres@gmail.com", 5);
            let result = manager
            expect(result).toEqual(manager)
        })
    })
    
    describe("getRole", () => {
        it("should return string 'Manager'", () => {
            let manager = new Manager("Andres", 1, "andres@gmail.com", 5);
            let result = manager.getRole()
            expect(result).toEqual("Manager")
        })
    })

    describe("getOfficeNumber", () => {
      it("should return the manager's office number", () => {
        let manager = new Manager("Andres", 1, "andres@gmail.com", 5);
        let result = manager.getOfficeNumber
        expect(result).toEqual(manager.officeNumber)
      })
    })
})