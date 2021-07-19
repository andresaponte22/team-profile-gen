const Intern = require('../lib/intern.js');

describe("Intern", () => {
    
    describe("Intern instance", () => {
        it("should create a new instance of our intern object", () => {
            let intern = new Intern("Andres", 1, "andres@gmail.com", "Bootcamp")
            let result = intern
            expect(result).toEqual(intern)
        })
    })

    describe("getRole", () => {
      it("should return string 'Intern'", () => {
          let intern = new Intern("Andres", 1, "andres@gmail.com", "Bootcamp")
          let result = intern.getRole()
          expect(result).toEqual("Intern");
      })
  })

    describe("getSchool", () => {
        it("should return a string containing the intern's school", () => {
            let intern = new Intern("Andres", 1, "andres@gmail.com", "Bootcamp")
            let result = intern.getSchool()
            expect(result).toEqual(intern.school)
        })
    })
})