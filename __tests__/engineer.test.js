const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    
    describe("Enginner instance", () => {
        it("should create a new instance of our enginner object", () => {
            let engineer = new Engineer("Andres", 1, "andres@gmail.com", "github.com/andres")
            let result = employee
            expect(result).toEqual(engineer)
        })
    })

    describe("getRole", () => {
      it("should return string 'Engineer'", () => {
          let engineer = new Engineer("Andres", 1, "andres@gmail.com", "github.com/andres")
          let result = engineer.getRole()
          expect(result).toEqual("Engineer");
      })
  })

    describe("getGithub", () => {
        it("should return engineer's github url as a string", () => {
            let engineer = new Engineer("Andres", 1, "andres@gmail.com", "github.com/andres")
            let result = engineer.getGithub()
            expect(result).toEqual(engineer.github)
        })
    })
});