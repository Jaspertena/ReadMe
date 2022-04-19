function generateMarkdown(answers){
return `
# ${answers.ProjectName}

![badge](https://img.shields.io/badge/license-${answers.License}-green)
![badge](https://img.shields.io/github/languages/count/${answers.Username}/${answers.Repo})

# Description
${answers.Purpose}

## Table of Content 
- [Installation](#installation)
- [Solutions](#solutions)
- [Usage](#usage)
- [Collaborators](#collaborators)
- [Testing](#testing)

## Installation
${answers.Installation}

## Solutions
${answers.Solutions}

## Usage
${answers.Usage}

## Collaborators
${answers.Collaborators}

## Testing
${answers.Testing}
`
}
module.exports = generateMarkdown
