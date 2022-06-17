// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// const generateMarkdown = require('../utils/generateMarkdown');
// TODO: Create an array of questions for user input

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

// TODO: Create a function to write README file
// Append? or Write file?
const generateMarkdown = ({fileName, name, email, github, githubUrl, linkedIn}) =>

`# ${fileName}

## Created by ${name}, GitHub: [${github}](${githubUrl})

Contact at: [${email}](mailto:griffithjayden97@outlook.com)
LinkedIn: [Jayden Griffith](${linkedIn})`;

inquirer
  .prompt(questions)
    .then((answers) => {
      const markdownFileContent = generateMarkdown(answers);

      fs.writeFile('README.md', markdownFileContent, (err) =>
        err ? console.log(err) : console.log('Created README.md')
      )
    })


// TODO: Create a function to initialize app
// function init() {
  
// }

// Function call to initialize app
// init();

//----------------------------------------------------------------------------------


// Not sure if I'll need this yet.
// module.exports = {
//   questions
// }



// For future reference, just so I can hot-copy/paste
// https://www.linkedin.com/in/jayden-griffith-a3b7b9217/
// https://github.com/JGriffith97