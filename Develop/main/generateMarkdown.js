const inquirer = require('inquirer')
const fs = require('fs');

// [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)


const licenses = {
  MIT: {
    badge: `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`,
    link: `[OpenSource - MIT](https://opensource.org/licenses/MIT)`,
notice: `
MIT License

Copyright (c) 2022 Jayden Griffith

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.<br/>`
  },
  creativeCommons: {
    badge: `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`,
    link: `[Creative Commons](http://creativecommons.org/publicdomain/zero/1.0/)`,
    notice: `
CC0 1.0

The person who associated a work with this deed has dedicated the work to the
public domain by waiving all of his or her rights to the work worldwide under
copyright law, including all related and neighboring rights, to the extent allowed by law.

You can copy, modify, distribute and perform the work, even for commercial purposes, 
all without asking permission. See Other Information below.<br/>`
  },
}

let license = ''

// Array containging objects, each specifying the type, name, and message for each prompt that is passed through Inquirer.
const questions = [
  {
    type: 'input',
    name: 'fileName',
    message: 'What would you like to name the README? (Caps sensitive)',
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
    type: 'input',
    name: 'description',
    message: 'Please enter a short description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter a text tutorial on how to install your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe how a user may use your project.',
  },
  { 
    type: 'input',
    name: 'contributing',
    message: 'Explain how others may help contribute to your project.',
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'Include license? If so, which one?',
    choices: ['None', 'MIT','Creative Commons'],
  },
];

// If there is no license, return an empty string
function renderLicenseBadge() {
  console.log('license: ', license)
  console.log('Licenses: ', licenses)
  if(license === '') {
     return ``;
  } else if (license === 'MIT') {
     return `${licenses.MIT.badge}`
  } else if (license === 'Creative Commons') { 
     return `${licenses.creativeCommons.badge}`
  }
}

// If license is included, adds the link to that section to the Table of Contents.
function renderLicenseToC() {
  if (license === '') {
    return ``;
  } else {
    return `* [License](#license)`
  }
}

// If there is no license, return an empty string
function renderLicenseSection() {
  if(license === '') {
    return ``;
  } else  if (license === 'MIT') {
    return `
## License

${licenses.MIT.notice}
${licenses.MIT.link}

---`

  } else if (license === 'Creative Commons') {
    return `
## License

${licenses.creativeCommons.notice}
${licenses.creativeCommons.link}

---`

  }
}

// Takes the questions array and incorporates it into the inquirer module as prompts.
function doPrompt() {
  inquirer
  .prompt(questions)
    .then((answers) => {
      console.log('then')

    if (answers.licenses === 'MIT') {
      license = 'MIT'
    } else if (answers.licenses === 'Creative Commons') {
      license = 'Creative Commons'
    } else {
      license = ''
    }
     
    name = answers.name
    generateMarkdownFile(answers)
  });
}

const generateMarkdownFile = ({fileName, name, email, github, githubUrl, linkedIn, description, installation, usage, contributing}) => {

// The content of the README in template literals, formatted in markdown, using the answers to the prompts specified in the Inquirer module.
const data = `# ${fileName}

${renderLicenseBadge()}

# Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseToC()}
---
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
${renderLicenseSection()}
<br/>

Created by ${name} -- @GitHub: [${github}](${githubUrl})

Contact at: [${email}](mailto:${email}) -- & LinkedIn: [${name}](${linkedIn})`;

// Writes the file 'README.md' using the data specified above.
fs.writeFile("README.md", data, (err) =>
err ? console.log(err) : console.log('Created README.md'))
}


// ---------------------------------------------------------------------------------

// Exports the doPrompt function. Which is called from the index via the initialize function which runs generadeMd()
module.exports = doPrompt;
