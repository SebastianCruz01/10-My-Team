const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];
const render = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const generateHTML = require('./src/generateHTML');

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'

        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            console.log(manager);
            addEmployee();

        })
};


//MANAGER PROMPT

const addEmployee = () => {
   
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Engineer', 'Intern','I dont want to add any more team members']
        }
    ])

        .then(employeeData => {
            let { name, id, email, role, github, school } = employeeData;
            let employee;

            if (role === 'Engineer') {
                engineerInfo();
            } else if (role === 'Intern') {
                internInfo();
            }
            else {
                console.log(teamMembers);
            var test = generateHTML(teamMembers);
            console.log(test);
            writeFile(test);
            }
        });
};


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
        const { name, id, email, github } = answers;
        const engineer = new Engineer(name, id, email, github);
        teamMembers.push(engineer);
        addEmployee();
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
        const { name, id, email, school } = answers;
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);
        addEmployee();

    })
} 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created! Check out the index.html to see it!');
        }
    })
};

addManager()
  
