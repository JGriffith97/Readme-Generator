// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'linkedIn',
    message: 'What is your LinkedIn URL?',
  },  
];

// TODO: Create a function to write README file
// Append? or Write file?
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

//----------------------------------------------------------------------------------


module.exports = {
  questions
}



// For future reference, just so I can hot-copy/paste
// https://www.linkedin.com/in/jayden-griffith-a3b7b9217/
// https://github.com/JGriffith97