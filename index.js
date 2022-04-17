const inquirer = require('inquirer');
const fs = require('fs');

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
            name: 'Solution', 
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
            type: 'list',
            name: 'License', 
            message: 'Provide license used.',
        },
        {
            type: 'input',
            name: 'GitHub', 
            message: 'What is your GitHub?',
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is your email?',
        },
        

    ])}
