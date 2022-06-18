const inquirer = require('inquirer')
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'fileName',
    message: 'What would you like to name the README? (Caps sensitive)'
  },
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
    name: 'githubUrl',
    message: 'What is your GitHub URL?'
  },
  {
    type: 'input',
    name: 'linkedIn',
    message: 'What is your LinkedIn URL?',
  },  
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function doPrompt() {
  inquirer
  .prompt(questions)
    .then((answers) => {
      const markdownFileContent = generateMarkdownFile(answers);
  })
}
const generateMarkdownFile = ({fileName, name, email, github, githubUrl, linkedIn}) => {

const data = `# ${fileName}

## Created by ${name}, GitHub: [${github}](${githubUrl})

Contact at: [${email}](mailto:griffithjayden97@outlook.com)
LinkedIn: [Jayden Griffith](${linkedIn})`;

console.log(data)
}


module.exports = doPrompt;
