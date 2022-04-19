const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'ProjectName',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'Purpose',
            message: 'What is the purpose of your project? Please describe.',
        },
        {
            type: 'input',
            name: 'Installation', 
            message: 'What steps are needed to install the project?',
        },
        {
            type: 'input',
            name: 'Solutions', 
            message: 'What problems does this project solve?',
        },
        {
            type: 'input',
            name: 'Usage', 
            message: 'What are the best usage case for this project?',
        },
        {
            type: 'input',
            name: 'Collaborators', 
            message: 'Provide information for each contributor.',
        },
        {
            type: 'input',
            name: 'Testing', 
            message: 'Please provide test instructions.',
        },
        {
            type: 'input',
            name: 'Repo', 
            message: 'What is your Repository Name?',
        },
        {
            type: 'input',
            name: 'Username', 
            message: 'What is your GitHub username ?',
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is your email?',
        },
        {
            type: 'rawlist',
            name: 'License',
            message: 'Select a License for this project.',
            choices: ['MIT', 'Apache', 'ISC'],
        },

    ])}
    promptUser()
        .then((answers) => {
            fs.writeFileSync('./dest/README.md', generateMarkdown(answers), console.log('Yay, your README.md file has been created!'));
            

        })
