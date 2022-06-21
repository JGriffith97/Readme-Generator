const inquirer = require('inquirer')
const fs = require('fs');

// Array containging objects, each specifying the type, name, and message for each prompt that is passed through Inquirer.
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
  {
    // Editor opens a text editor, usually Notepad, to write in, as opposed to the command line
    // Save, then exit the text editor to use your input.
    type: 'editor',
    name: 'description',
    message: 'Please enter a short description of your project.',
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'Please enter a text tutorial on how to install your project.',
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Describe how a user may use your project.',
  },
  { 
    type: 'editor',
    name: 'contributing',
    message: 'Explain how others may help contribute to your project.'
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// Takes the questions array and incorporates it into the inquirer module as prompts.
function doPrompt() {
  inquirer
  .prompt(questions)
    .then((answers) => {
      generateMarkdownFile(answers);
  })
}
const generateMarkdownFile = ({fileName, name, email, github, githubUrl, linkedIn, description, installation, usage, contributing}) => {

// The content of the README in template literals, formatted in markdown, using the answers to the prompts specified in the Inquirer module.
const data = `# ${fileName}

<br/>

# Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

<br/>

## Description

${description}

---
## Installation

${installation}

---
## Usage

${usage}

---
## Contributing

${contributing}

---
## Tests

-Tests Placeholder-

---
## Questions

-Questions Placeholder-

---
## License



---
<br/>

Created by ${name} -- @GitHub: [${github}](${githubUrl})

Contact at: [${email}](mailto:${email}) -- & LinkedIn: [${name}](${linkedIn})`;

console.log(data)

// Writes the file 'README.md' using the data specified above.
fs.writeFile("README.md", data, (err) =>
err ? console.log(err) : console.log('Created README.md'))
}


// ---------------------------------------------------------------------------------

// Exports the doPrompt function. Which is called from the index via the initialize function which runs generadeMd()
module.exports = doPrompt;
