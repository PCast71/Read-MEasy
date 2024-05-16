// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'name your project'
    },

    {
        type: 'input',
        name: 'description',
        message: 'What are the project details?',
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0']
    },

    {
        type: 'input',
        name: 'required',
        message: 'List project dependencies here.',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What are the technologies used in your project?',
    },

    {
        type: 'input',
        name: 'test',
        message: 'What are the test processes for your project?'
    },

    {
        type: 'input',
        name: 'contributors',
        message: "Who contributed to this project?",
    },

    {
        type: 'input',
        name: 'githubUserEmail',
        message: 'Enter your GitHub email address.'
    },

    {
        type: 'input',
        name: 'questions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        generateMarkdown(inquirerResponses);
})

.catch((error) => {
    console.error('Error ocurred:', error);
})
.finally(() => {
    console.log("Finished generating README.")
});
}

// Function call to initialize app
init();
