const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const staff = []

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
      type: "input",
      name: "id",
      message: "Enter manager's office number:"
    }
  ]).then(function(data) {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    members.push(manager)
  })
};

function createTeam() {
  inquirer.prompt([
    {
      type: "checkbox",
      message: "What staff member would you like to add?",
      name: "staff",
      choices: [
        "Engineer",
        "Intern",
        "EXIT"
      ]
    }
  ]).then(function(data) {
    switch (data.staff) {
      case 'Engineer':
        createEngineer()
        break;
      case 'Intern':
        createIntern()
        break;
      default:
        throw new Error('Invalid staff role')
    }
  })
}

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
  ])
}