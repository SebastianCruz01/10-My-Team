const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];
const render =require('../lib/htmlRenderer');


function newMember () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]).then(function (data) {
        if (data.role === 'Manager') {
            promptManager();
        } else if (data.role === 'Engineer') {
            promptEngineer();
        } else if (data.role === 'Intern') {
            promptIntern();
        }
    })
}


//MANAGER PROMPT

//For Manager
function managerInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your id"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office number"
        }
    ]).then((answers) => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        allMembers.push(manager);
        newMember();
    });
    
}

//For Engineer
function engineerInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter member's name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter member's ID number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter member's email"
        },
        {
            type: "input",
            name: "github",
            message: "Enter member's GitHub username",
        }
    ]).then((answers) => {
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        allMembers.push(engineer);
        newMember();
    })
}

//For Intern
function internInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter member's name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter member's ID number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter member's email"
        },
        {
            type: "input",
            name: "school",
            message: "Enter member's school",
        }
    ]).then((answers) => {
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        allMembers.push(intern);
        newMember();
    })
}


// Create an HTML file using the HTML returned from the `render` function con HTMLrenderer file. 
function generateHTML(info, file) {
    fs.writeFile(info, file, (err) => {
      if (err) {
        throw err;
      }
      console.log("Your team is complete!");
    });
  };


newMember();