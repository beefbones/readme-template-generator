// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// js file for generating markdown
const generateMarkdown = require('./utils/generateMarkdown.js')
// Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        message: 'Please enter your full name: ',
        name: 'name',
        validate: nameInput => {
            if (!nameInput) {
                console.log('You must enter your name!')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter your github username: ',
        name: 'github',
        validate: githubInput => {
            if (!githubInput) {
                console.log('You must enter your github username!')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter your email: ',
        name: 'email',
        validate: emailInput => {
            if (!emailInput) {
                console.log('You must enter your email!')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter the title for your project: ',
        name: 'title',
        validate: titleInput => {
            if (!titleInput) {
                console.log('You must enter the project title!')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter a description for your project: ',
        name: 'description',
        validate: descriptionInput => {
            if (!descriptionInput) {
                console.log('You must enter a project description!')
                return false;
            } else {
                 return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your project: ',
        name: 'installation',
        validate: installationInput => {
            if (!installationInput) {
                console.log('You must enter installation instructions!')
                return false;
            } else {
                 return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter instructions for usage of this project: ',
        name: 'usage',
        validate: usageInput => {
            if (!usageInput) {
                console.log('You must enter usage instructions!')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide how others can contribute to this project: ',
        name: 'contributions',
        validate: contributionsInput => {
            if (!contributionsInput) {
                console.log('You must enter contribution information for this project!')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please explain the tests written for this project and how to use them:',
        name: 'tests',
        validate: testsInput => {
            if (!testsInput) {
                console.log('You must enter tests for this project!')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to include a license?',
        name: 'licenseConfirm',
        default: false,
    },
    {
        type: 'list',
        message: 'Which license would you like to include?',
        name: 'licenses',
        choices: ['MIT', 'GPLv2', 'Apache'],
        when: ({licenseConfirm}) => {
            if (!licenseConfirm) {
                return false;
            } else {
                return true;
            }
        }
    }
];

// Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) {
            reject (err)
            return
        } else {
            return true;
        }
    } )
}

// Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput)
})
.then(readmeInfo => {
    console.log('Success! Navigate to the README.md file that has been created')
    return writeToFile(readmeInfo)
})

