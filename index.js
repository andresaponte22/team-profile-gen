const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const createHTML = require('./src/create-html.js')

let staff = []

function createTeam() {
  inquirer.prompt([
    {
      type: "checkbox",
      message: "What staff member would you like to add?",
      name: "member",
      choices: [
        "Engineer",
        "Intern",
        "EXIT"
      ]
    }
  ]).then(function(data) {
    switch (data.member[0]) {
      case 'Engineer':
        createEngineer()
        break;
      case 'Intern':
        createIntern()
        break;
      case 'EXIT':
        console.log('Creating website...')
        break
    }
  })

  fs.writeFile("./dist/index.html", render(staff), err => {
    if (err) throw err
  })
}

function createManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter manager's name: "
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter manager's id:"
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter manager's email:"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter manager's office number:"
    },
  ]).then(function(data) {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    staff.push(manager)
    createTeam()
  })
};

function createEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter engineer's name:"
    },
    {
      type: "input",
      name: "id",
      message: "Enter engineer's id:"
    },
    {
      type: "input",
      name: "email",
      message: "Enter engineer's email:"
    },
    {
      type: "input",
      name: "github",
      message: "Enter engineer's github username:"
    }
  ]).then(function(data) {
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
    staff.push(engineer)
    createTeam()
  })
}

function createIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter intern's name"
    },
    {
      type: "input",
      name: "id",
      message: "Enter intern's ID"
    },
    {
      type: "input",
      name: "email",
      message: "Enter intern's email"
    },
    {
      type: "input",
      name: "school",
      message: "Enter intern's school"
    }
  ]).then(function(data) {
    const intern = new Intern(data.name, data.id, data.email, data.school)
    staff.push(intern)
    createTeam()
  })
}

createManager()