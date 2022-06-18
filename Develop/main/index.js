// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMd = require('./generateMarkdown')

// TODO: Create a function to write README file
// Append? or Write file?
// function writeToFile(fileName, data) {
//   fileName = `README.md`
//   data = markdownFileContent

//   fs.writeFile(fileName, data, (err) =>
//   err ? console.log(err) : console.log('Created README.md'))
// }


function initialize() {
  generateMd()
  // writeToFile()
}

// Function call to initialize app
initialize();

//----------------------------------------------------------------------------------

// For future reference, just so I can hot-copy/paste
// https://www.linkedin.com/in/jayden-griffith-a3b7b9217/
// https://github.com/JGriffith97